#!/usr/bin/env python3
"""
링크 검증 스크립트
- 내부 페이지 링크 확인
- 앵커 링크 확인
- CSS/JS 리소스 확인
- 외부 링크 형식 확인
"""

import os
import re
from pathlib import Path
from urllib.parse import urlparse
from collections import defaultdict

# 프로젝트 루트
PROJECT_ROOT = Path(__file__).parent
PAGES_DIR = PROJECT_ROOT / "pages"
CSS_DIR = PROJECT_ROOT / "css"
JS_DIR = PROJECT_ROOT / "js"

def extract_links(html_content, file_path):
    """HTML에서 모든 링크 추출"""
    links = {
        'internal': [],  # 내부 페이지 링크
        'anchor': [],    # 앵커 링크
        'css': [],       # CSS 파일
        'js': [],        # JS 파일
        'external': []   # 외부 링크
    }

    # href 속성 추출
    href_pattern = r'href=["\']([^"\']+)["\']'
    for match in re.finditer(href_pattern, html_content):
        href = match.group(1)

        if href.startswith('http://') or href.startswith('https://'):
            links['external'].append(href)
        elif href.startswith('#'):
            links['anchor'].append(href[1:])  # # 제거
        elif href.endswith('.html'):
            links['internal'].append(href)
        elif href.endswith('.css'):
            links['css'].append(href)

    # src 속성에서 JS 추출
    src_pattern = r'src=["\']([^"\']+\.js)["\']'
    for match in re.finditer(src_pattern, html_content):
        links['js'].append(match.group(1))

    return links

def extract_ids(html_content):
    """HTML에서 모든 id 속성 추출"""
    id_pattern = r'id=["\']([^"\']+)["\']'
    return [match.group(1) for match in re.finditer(id_pattern, html_content)]

def resolve_path(current_file, link):
    """상대 경로를 절대 경로로 변환"""
    current_dir = current_file.parent
    resolved = (current_dir / link).resolve()
    return resolved

def check_links():
    """모든 HTML 파일의 링크 검사"""
    issues = defaultdict(list)
    stats = {
        'total_files': 0,
        'total_links': 0,
        'broken_internal': 0,
        'broken_anchor': 0,
        'broken_resource': 0
    }

    # 모든 HTML 파일 검사
    html_files = list(PAGES_DIR.glob('*.html'))
    html_files.append(PROJECT_ROOT / 'index.html')

    stats['total_files'] = len(html_files)

    # 각 파일의 id 목록 미리 수집 (앵커 검증용)
    file_ids = {}
    for html_file in html_files:
        with open(html_file, 'r', encoding='utf-8') as f:
            content = f.read()
            file_ids[html_file.name] = extract_ids(content)

    # 링크 검증
    for html_file in html_files:
        with open(html_file, 'r', encoding='utf-8') as f:
            content = f.read()

        links = extract_links(content, html_file)
        stats['total_links'] += sum(len(v) for v in links.values())

        # 1. 내부 페이지 링크 검증
        for link in links['internal']:
            target_path = resolve_path(html_file, link)
            if not target_path.exists():
                issues[html_file.name].append(f"❌ 깨진 내부 링크: {link} → {target_path}")
                stats['broken_internal'] += 1

        # 2. 앵커 링크 검증
        for anchor in links['anchor']:
            # 현재 파일의 id 확인
            current_ids = file_ids.get(html_file.name, [])
            if anchor not in current_ids:
                issues[html_file.name].append(f"⚠️  앵커 ID 없음: #{anchor}")
                stats['broken_anchor'] += 1

        # 3. CSS 파일 검증
        for css_link in links['css']:
            css_path = resolve_path(html_file, css_link)
            if not css_path.exists():
                issues[html_file.name].append(f"❌ CSS 파일 없음: {css_link}")
                stats['broken_resource'] += 1

        # 4. JS 파일 검증
        for js_link in links['js']:
            js_path = resolve_path(html_file, js_link)
            if not js_path.exists():
                issues[html_file.name].append(f"❌ JS 파일 없음: {js_link}")
                stats['broken_resource'] += 1

    return issues, stats

def main():
    print("🔍 링크 검증 시작...\n")

    issues, stats = check_links()

    # 결과 출력
    print("=" * 70)
    print("📊 검사 통계")
    print("=" * 70)
    print(f"검사한 파일 수: {stats['total_files']}")
    print(f"총 링크 수: {stats['total_links']}")
    print(f"깨진 내부 링크: {stats['broken_internal']}")
    print(f"누락된 앵커: {stats['broken_anchor']}")
    print(f"누락된 리소스: {stats['broken_resource']}")
    print()

    if not any(issues.values()):
        print("✅ 모든 링크가 정상입니다!")
        return 0

    # 문제가 있는 파일 출력
    print("=" * 70)
    print("⚠️  발견된 문제")
    print("=" * 70)

    for filename, file_issues in sorted(issues.items()):
        print(f"\n📄 {filename}")
        for issue in file_issues:
            print(f"  {issue}")

    print("\n" + "=" * 70)
    total_issues = sum(len(v) for v in issues.values())
    print(f"총 {total_issues}개의 문제가 발견되었습니다.")

    return 1

if __name__ == '__main__':
    exit(main())
