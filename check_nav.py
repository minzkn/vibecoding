#!/usr/bin/env python3
"""
NAV_STRUCTURE와 실제 페이지 파일 일치 검증
"""

import re
from pathlib import Path

# main.js 읽기
main_js = Path('js/main.js').read_text(encoding='utf-8')

# NAV_STRUCTURE에서 파일명 추출
nav_pattern = r"file:\s*['\"]([^'\"]+)['\"]"
nav_files = set(re.findall(nav_pattern, main_js))

# 실제 존재하는 HTML 파일
actual_files = set()
actual_files.add('index.html')  # 루트 index.html
for html_file in Path('pages').glob('*.html'):
    actual_files.add(html_file.name)

print('=' * 70)
print('📋 NAV_STRUCTURE vs 실제 파일 검증')
print('=' * 70)
print()

# NAV_STRUCTURE에 정의된 파일
nav_page_files = {f for f in nav_files if f != 'index.html'}
actual_page_files = {f for f in actual_files if f != 'index.html'}

print(f'NAV_STRUCTURE에 정의된 페이지: {len(nav_page_files)}개')
print(f'실제 존재하는 pages/*.html: {len(actual_page_files)}개')
print()

# 1. NAV_STRUCTURE에는 있지만 파일이 없는 경우
missing_files = nav_page_files - actual_page_files
if missing_files:
    print('❌ NAV_STRUCTURE에 정의되었지만 파일이 없음:')
    for f in sorted(missing_files):
        print(f'  • {f}')
    print()
else:
    print('✅ NAV_STRUCTURE의 모든 페이지 파일이 존재합니다.')
    print()

# 2. 파일은 있지만 NAV_STRUCTURE에 없는 경우
extra_files = actual_page_files - nav_page_files
if extra_files:
    print('⚠️  파일은 있지만 NAV_STRUCTURE에 없음:')
    for f in sorted(extra_files):
        print(f'  • {f}')
    print()
else:
    print('✅ 모든 페이지가 NAV_STRUCTURE에 등록되어 있습니다.')
    print()

# 3. SEARCH_INDEX 확인
search_pattern = r'url:\s*["\']([^"\']+)["\']'
search_urls = set(re.findall(search_pattern, main_js))

# SEARCH_INDEX의 페이지 파일
search_page_files = set()
for url in search_urls:
    if url.startswith('pages/'):
        search_page_files.add(url.replace('pages/', ''))

print(f'SEARCH_INDEX에 등록된 페이지: {len(search_page_files)}개')

missing_in_search = actual_page_files - search_page_files
if missing_in_search:
    print('⚠️  SEARCH_INDEX에 등록되지 않은 페이지:')
    for f in sorted(missing_in_search):
        print(f'  • {f}')
else:
    print('✅ 모든 페이지가 SEARCH_INDEX에 등록되어 있습니다.')

print()
print('=' * 70)
print('📊 최종 요약')
print('=' * 70)

if not missing_files and not extra_files and not missing_in_search:
    print('✅ 모든 검증을 통과했습니다!')
    print(f'   • 총 {len(actual_files)}개 페이지 (index.html 포함)')
    print(f'   • NAV_STRUCTURE: 완벽히 일치')
    print(f'   • SEARCH_INDEX: 완벽히 일치')
else:
    print('⚠️  일부 불일치가 발견되었습니다.')
    print('   위 내용을 확인하여 수정해주세요.')
