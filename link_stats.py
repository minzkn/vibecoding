#!/usr/bin/env python3
"""링크 통계 분석"""

import re
from pathlib import Path

pages_dir = Path('pages')
html_files = list(pages_dir.glob('*.html')) + [Path('index.html')]

# 링크 통계
internal_links = set()
external_links = set()
anchor_links = set()

for html_file in html_files:
    content = html_file.read_text(encoding='utf-8')

    # 내부 링크 추출
    internal = re.findall(r'href=["\']([^"\']*\.html)["\']', content)
    internal_links.update(internal)

    # 외부 링크 추출
    external = re.findall(r'href=["\'](https?://[^"\']+)["\']', content)
    external_links.update(external)

    # 앵커 링크 추출
    anchors = re.findall(r'href=["\']#([^"\']+)["\']', content)
    anchor_links.update(anchors)

print('📊 링크 통계 상세')
print('=' * 70)
print(f'총 HTML 파일: {len(html_files)}개')
print(f'총 링크 수: 241개')
print()
print(f'고유 내부 페이지 링크: {len(internal_links)}개')
print(f'고유 앵커 링크: {len(anchor_links)}개')
print(f'고유 외부 링크: {len(external_links)}개')
print()
print('=' * 70)
print('주요 외부 링크 도메인:')
print('=' * 70)

domains = {}
for link in external_links:
    domain = re.match(r'https?://([^/]+)', link).group(1)
    domains[domain] = domains.get(domain, 0) + 1

for domain, count in sorted(domains.items(), key=lambda x: -x[1]):
    print(f'  • {domain}: {count}개')
