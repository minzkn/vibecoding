# 검증 체크리스트

기준일: 2026-02-13

현재 기준 예상 수치:
- 총 페이지: 63개 (`index.html` 포함)
- 문서 페이지: 62개 (`pages/*.html`)
- 카테고리: 8개

## 로컬 서버 실행
```bash
cd /mnt/public_home/work/vibecoding
python3 -m http.server 8080
# 브라우저에서 http://localhost:8080 접속
```

## 구조/연결 무결성
- [ ] `js/main.js`의 NAV_STRUCTURE = `pages/*.html` 일치
- [ ] `js/main.js`의 SEARCH_INDEX = `pages/*.html` 일치
- [ ] `sitemap.xml`에 모든 `pages/*.html` 포함
- [ ] 내부 링크/앵커 무결성 (`python3 check_links.py`)

## 핵심 페이지 스모크 테스트
- [ ] `index.html` 카드 그리드/링크 정상
- [ ] `pages/codex.html` TOC 생성/구조 정상
- [ ] `pages/claude-api.html` 주요 섹션/코드 블록 정상
- [ ] `pages/openai-api.html` Codex 연계 섹션 표시
- [ ] `pages/cli-tools-overview.html` Codex CLI 섹션 표시
- [ ] `pages/cli-comparison.html` Codex 항목 표시
- [ ] `pages/resources.html` Codex 리소스 링크 표시
- [ ] `pages/limitations.html` 에이전트 주의사항 섹션 표시
- [ ] `pages/learning-path.html` Codex 카드 표시
- [ ] `pages/faq.html` Codex Q/A 표시

## TOC (목차) 자동 생성
- [ ] 모든 `pages/*.html`에서 TOC 표시 (최소 3개의 `h2`)

## 테마 전환
- [ ] dark-kernel
- [ ] light
- [ ] solarized
- [ ] nord
- [ ] high-contrast

## 반응형 레이아웃
- [ ] 1920px (데스크톱)
- [ ] 1200px (TOC 숨김)
- [ ] 768px (햄버거 메뉴)
- [ ] 480px (소형 모바일)

## 내비게이션
- [ ] 이전/다음 버튼 작동
- [ ] 브레드크럼 정확성
- [ ] 사이드바 카테고리 구조

## 코드 블록 구문 강조
- [ ] Python
- [ ] TypeScript
- [ ] JSON
- [ ] Bash

## Info-box 렌더링
- [ ] info
- [ ] tip
- [ ] warning
- [ ] danger

## 접근성
- [ ] 키보드 네비게이션
- [ ] 스크린 리더 호환 (aria-label)
- [ ] 명암 대비 (WCAG AA)

---

## 발견된 이슈 기록

### 버그
-

### 개선 사항
-

### 추가 작업 필요
-
