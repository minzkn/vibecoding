# CLAUDE.md

This file provides guidance to Claude Code when working with this repository.

## Project Overview

AI Vibe Coding 가이드에 대한 한국어 정적 문서 사이트. 빌드 도구/프레임워크 없이 순수 HTML5 + CSS3 + Vanilla JS로 구성.

- 정적 HTML 파일: `index.html` + `pages/*.html`
- 3개 CSS, 1개 JS
- 8개 카테고리, 63개 문서 페이지 (`pages/*.html`)
- 전체 64개 페이지 (`index.html` 포함)
- 5개 테마 지원

## Development

빌드 과정 없음. 정적 사이트이므로 아무 HTTP 서버로 로컬 확인 가능:
```bash
python3 -m http.server 8080   # http://localhost:8080
```

## Architecture

- CSS Grid 3-컬럼: Nav(260px) | Content(fluid) | TOC(220px)
- 반응형 브레이크포인트: 1200px (TOC 숨김), 768px (햄버거 메뉴), 480px (소형 모바일)
- 에셋 경로: **루트(index.html)** prefix 없음, **pages/*.html** `../` prefix
- sitemap.xml의 `<loc>`는 절대 URL(`https://minzkn.com/claude/...`) 사용
- 5개 테마: `dark-kernel`(기본), `light`, `solarized`, `nord`, `high-contrast`
  - `<html data-theme="...">` 속성, 쿠키 `claude_theme` (365일 영속)
  - `<head>` 최상단에 Google Adsense/Analytics 스크립트, 그 다음 인라인 스크립트로 flash 방지
  - SVG 다이어그램은 CSS custom property 사용
- header, side-nav, breadcrumb, page-nav, inline-toc, footer → JS가 `NAV_STRUCTURE` 기반 동적 생성
- HTML 파일에는 빈 컨테이너 태그만 존재

## JavaScript 구조 (`js/main.js`)

1. `SEARCH_INDEX` 전역 배열 — `{ title, url, description, keywords }`
2. `NAV_STRUCTURE` 전역 배열 — 8개 카테고리별 페이지 계층
3. 단일 IIFE — 동적 생성, 테마 전환, TOC, 검색, 스크롤 스파이, 모바일 네비게이션

## 페이지 템플릿 구조

모든 `pages/*.html` 파일은 다음 구조를 따름:

```html
<!DOCTYPE html>
<html lang="ko" data-theme="dark-kernel">
<head>
<!-- Google adsense/analytics -->
<!-- Flash 방지 스크립트 -->
<script>
(function(){var m=document.cookie.match(/claude_theme=([^;]+)/);if(m)document.documentElement.setAttribute('data-theme',m[1]);})();
</script>
<!-- Meta 태그 -->
<!-- CSS 링크 (../css/) -->
</head>
<body>
<div class="page-wrapper">
<header class="site-header"></header>
<nav class="side-nav"></nav>
<main class="main-content">
  <nav class="breadcrumb"></nav>
  <!-- 콘텐츠 -->
  <nav class="page-nav"></nav>
</main>
<aside class="inline-toc"></aside>
<footer class="site-footer"></footer>
</div>
<script src="../js/main.js"></script>
</body>
</html>
```

## 코드 구문 강조 (CSS 클래스)

`kw`(키워드), `type`(타입), `fn`(함수), `cmt`(주석), `str`(문자열), `num`(숫자), `pp`(전처리기), `macro`(매크로)

## Content Guidelines

- 모든 문서는 **한국어**로 작성
- AI Vibe Coding 학습자/실무자 대상 (초급~고급)
- 실제 API 코드 예제 포함 (구문 강조 클래스 적용)
- 최신 Claude 모델 라인업 기준 (문서 작성 시점)

## Do NOT

- 빌드 도구, 번들러, 프레임워크 도입
- 영어로 문서 작성 (코드/기술 용어 제외)
- D2Coding 외 다른 폰트 추가
- HTML 파일에 header/nav/footer/breadcrumb/page-nav/inline-toc 마크업 직접 작성
- `SEARCH_INDEX` / `NAV_STRUCTURE` 형식 변경
