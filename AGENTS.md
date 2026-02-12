# AGENTS.md

이 파일은 AI 코딩 에이전트(GitHub Copilot, Cursor, Windsurf, Claude Code 등)가 이 저장소에서 작업할 때 참고하는 지침입니다.

## Project Overview

Claude AI 어시스턴트에 대한 **한국어** 정적 문서 사이트.
빌드 도구/프레임워크 없이 순수 HTML5 + CSS3 + Vanilla JS로 구성.

- 정적 HTML 파일: `index.html` + `pages/*.html`
- 3개 CSS: `css/style.css`, `css/themes.css`, `css/responsive.css`
- 1개 JS: `js/main.js`
- 2개 SEO: `sitemap.xml`, `robots.txt`
- 7개 카테고리, 27개+ 페이지 (계획)
- 5개 테마: `dark-kernel`(기본), `light`, `solarized`, `nord`, `high-contrast`

## Development

빌드 과정 없음. 정적 사이트이므로 아무 HTTP 서버로 로컬 확인 가능:

```bash
python3 -m http.server 8080   # http://localhost:8080
```

테스트 프레임워크, 린터, CI/CD 파이프라인 없음.

## Quick Reference: 파일 위치

| 파일 | 위치 | 설명 |
|---|---|---|
| HTML 페이지 | `pages/*.html` | 문서 페이지 |
| 메인 페이지 | `index.html` | 카드 그리드 + 소개 |
| 페이지 템플릿 | `template.html` | 새 페이지 작성 시 기준 템플릿 |
| SEARCH_INDEX | `js/main.js` | 검색 엔트리 (index.html 미포함) |
| NAV_STRUCTURE | `js/main.js` | 7개 카테고리, 페이지 항목 (index.html 포함) |
| IIFE 시작 | `js/main.js` | 동적 생성/인터랙션 로직 |
| 테마 변수 | `css/themes.css` | 5개 테마 CSS custom property |
| 레이아웃 | `css/style.css` | Grid, 타이포그래피, 컴포넌트 |
| 반응형 | `css/responsive.css` | 3개 브레이크포인트 미디어 쿼리 |

## File Structure

```
claude/
├── index.html              # 메인 페이지 (카드 그리드)
├── template.html           # 새 페이지 템플릿 (TOC 구조 포함)
├── pages/                  # 문서 페이지
│   ├── api-overview.html
│   ├── authentication.html
│   └── ...
├── css/
│   ├── style.css           # 레이아웃, 타이포그래피, 컴포넌트
│   ├── themes.css          # 5개 테마 색상 변수
│   └── responsive.css      # 반응형 미디어 쿼리
├── js/
│   └── main.js             # NAV_STRUCTURE + SEARCH_INDEX + 동적 생성 + 인터랙션
├── images/                 # SVG 등 이미지
├── sitemap.xml
├── robots.txt
├── CLAUDE.md               # Claude Code 전용 지침
└── AGENTS.md               # AI 에이전트 공통 지침 (이 파일)
```

## Architecture

### 레이아웃
- CSS Grid 3-컬럼: Nav(260px) | Content(fluid) | TOC(220px)
- 반응형 브레이크포인트: 1200px (TOC 숨김), 768px (햄버거 메뉴), 480px (소형 모바일)

### 에셋 경로 규칙
- **루트(`index.html`)**: prefix 없음 → `css/style.css`, `js/main.js`
- **`pages/*.html`**: `../` prefix → `../css/style.css`, `../js/main.js`

### 동적 생성 (JS)
header, side-nav, breadcrumb, page-nav, inline-toc, footer는 `NAV_STRUCTURE` 기반으로 JS가 동적 생성합니다.
HTML 파일에는 빈 컨테이너 태그만 존재:

```html
<header class="site-header"></header>
<nav class="side-nav" aria-label="사이트 내비게이션"></nav>
<main class="main-content">
  <!-- h1, 본문 콘텐츠만 작성 -->
</main>
<aside class="inline-toc"></aside>
<footer class="site-footer"></footer>
```

JS가 자동으로 생성하는 항목:
- **header**: 로고, 검색, 테마 전환기
- **side-nav**: `NAV_STRUCTURE` 기반 카테고리별 링크 + active 클래스
- **breadcrumb**: `<div class="breadcrumb">` (pages에서만, index 제외)
- **inline-toc**: `<aside class="inline-toc">` (pages에서만, index 제외)
- **page-nav**: `<div class="page-nav">` prev/next (NAV_STRUCTURE 순서 기반)
- **footer**: 링크, 저작권 정보

### JavaScript 구조 (`js/main.js`)
파일 구성 순서:
1. `SEARCH_INDEX` 전역 배열 — 모든 페이지의 `{ title, url, description, keywords }`
2. `NAV_STRUCTURE` 전역 배열 — 7개 카테고리별 페이지 계층 구조
3. 단일 IIFE — 동적 UI 생성, 테마 전환, TOC, 스크롤 스파이, 검색, 모바일 네비게이션

### 테마 시스템
- 5개 테마: `dark-kernel` (기본), `light`, `solarized`, `nord`, `high-contrast`
- `<html data-theme="...">` 속성으로 전환
- 쿠키 `claude_theme`에 365일 영속
- `<head>` 내 인라인 스크립트가 페이지 로드 전 쿠키를 읽어 flash 방지
- SVG 다이어그램은 CSS custom property 사용: `var(--diagram-arrow)`, `var(--diagram-accent)`, `var(--diagram-text)`, `var(--border-color)`, `var(--bg-secondary)`, `var(--accent-primary)`

### 네비게이션 구조 (NAV_STRUCTURE)
7개 카테고리 (계획):
- **시작하기**: 홈, Claude란?, 빠른 시작
- **API 기본**: API 개요, 인증, 메시지 API, 스트리밍
- **고급 기능**: Tool Use, Vision, 긴 컨텍스트, 시스템 프롬프트
- **프롬프트 엔지니어링**: 프롬프트 기본, 프롬프트 패턴, Few-shot 학습, Chain-of-Thought
- **도구**: Claude Code, Claude.ai 웹, Python SDK, TypeScript SDK
- **활용 사례**: 코드 생성, 문서 분석, 데이터 추출, 대화형 에이전트
- **참고**: 모델 비교, 요금, 제한사항, FAQ

## HTML 페이지 템플릿

### `<head>` 섹션 (정확한 순서)
1. Flash 방지 인라인 스크립트 (쿠키에서 테마 읽기)
2. `<meta charset>`, `<meta viewport>`, `<meta description>`, `<meta keywords>`, `<meta author>`
3. `<title>`, favicon, D2Coding 폰트 (jsDelivr CDN), CSS 3파일

### 코드 구문 강조 (CSS 클래스)
```html
<span class="kw">async</span>          <!-- 키워드 -->
<span class="type">string</span>       <!-- 타입 -->
<span class="fn">createMessage</span>  <!-- 함수명 -->
<span class="cmt">// comment</span>    <!-- 주석 -->
<span class="str">"text"</span>        <!-- 문자열 -->
<span class="num">42</span>            <!-- 숫자 -->
<span class="pp">import</span>         <!-- 전처리기/import -->
```

### 콘텐츠 컴포넌트
- 정보 박스: `<div class="info-box info|warning|tip|danger"><strong>제목:</strong> 내용</div>`
- 코드 블록: `<pre><code>...</code></pre>` (구문 강조 클래스 적용)
- 비교 테이블: `<table>` + `<thead>` + `<tbody>`
- SVG 다이어그램: 인라인 SVG, CSS custom property로 테마 적응

## Task: 새 페이지 추가

4개 파일을 수정해야 합니다. 하나라도 빠지면 불일치가 발생합니다.

### Step 0: 템플릿 파일 참조
`template.html` 파일을 기준으로 새 페이지를 작성하세요. 이 템플릿에는 TOC 생성을 위한 필수 구조와 주석이 포함되어 있습니다.

```bash
cp template.html pages/<name>.html
```

**⚠️ TOC 생성 필수 조건** (하나라도 누락 시 목차가 표시되지 않음):
1. `<main class="main-content">` 태그 내에 **최소 3개 이상**의 `<h2 id="...">` 태그 필요
2. 모든 h2 태그에 **고유한 id 속성** 필수 (중복 금지)
3. aside 구조:
   ```html
   <aside class="inline-toc">
     <div class="toc-title">목차</div>
     <div class="toc-nav"></div>
   </aside>
   ```

### Step 1: HTML 파일 생성 (`pages/<name>.html`)
`template.html`을 복사하고 다음 항목들을 수정:

**`<head>` 섹션:**
```html
<meta property="og:title" content="TEMPLATE_TITLE">
<meta property="og:description" content="TEMPLATE_DESCRIPTION">
<meta property="og:url" content="https://minzkn.com/claude/pages/TEMPLATE_FILE.html">
<meta name="description" content="TEMPLATE_DESCRIPTION">
<meta name="keywords" content="TEMPLATE_KEYWORDS">
<title>TEMPLATE_TITLE - Claude 문서 /with MINZKN</title>
```

**`<body>` 섹션:**
```html
<main class="main-content">
<h1 id="top">한국어 제목</h1>
<p class="page-description">간단한 설명.</p>

<!-- 최소 3개 이상의 h2 섹션 작성 -->
<h2 id="overview">개요</h2>
<p>...</p>

<h2 id="usage">사용법</h2>
<p>...</p>

<h2 id="examples">예제</h2>
<p>...</p>
</main>
```

### Step 2: SEARCH_INDEX 추가 (`js/main.js`)
`];` 닫는 괄호 바로 앞에 추가:
```javascript
  { title: "한국어 제목", url: "pages/<name>.html", description: "설명", keywords: "키워드" }
```

### Step 3: NAV_STRUCTURE 추가 (`js/main.js`)
해당 카테고리의 `pages` 배열 마지막에 추가:
```javascript
    { file: '<name>.html', title: '네비 제목' }
```

### Step 4: sitemap.xml 추가
`</urlset>` 앞에 추가:
```xml
  <url><loc>pages/<name>.html</loc><priority>0.8</priority></url>
```

## Task: SVG 다이어그램 추가

### CSS Custom Property (필수 사용 — 하드코딩 금지)
```
var(--diagram-arrow)     화살표/선 색상
var(--diagram-accent)    강조 요소 색상
var(--diagram-text)      텍스트 색상
var(--border-color)      테두리 색상
var(--bg-secondary)      박스 배경색
var(--accent-primary)    강조색
```

### 마커 ID 고유 접두사 규칙
다른 SVG와 ID 충돌 방지를 위해 `파일명-순번` 접두사 사용:
```html
<marker id="api-1-arrow" ...>   <!-- api-overview.html의 첫 번째 다이어그램 -->
<marker id="tool-2-arrow" ...>  <!-- tool-use.html의 두 번째 다이어그램 -->
```

### SVG 템플릿
```html
<div class="diagram-container">
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 700 300"
       style="width:100%;max-width:700px;display:block;margin:1.5em auto;">
    <defs>
      <marker id="PREFIX-arrow" viewBox="0 0 10 7" refX="10" refY="3.5"
              markerWidth="10" markerHeight="7" orient="auto-start-reverse">
        <polygon points="0 0, 10 3.5, 0 7" fill="var(--diagram-arrow)"/>
      </marker>
    </defs>
    <rect x="X" y="Y" width="W" height="H" rx="6"
          fill="var(--bg-secondary)" stroke="var(--border-color)" stroke-width="1.5"/>
    <text x="X" y="Y" text-anchor="middle" fill="var(--diagram-text)"
          font-size="14">텍스트</text>
    <line x1="X1" y1="Y1" x2="X2" y2="Y2"
          stroke="var(--diagram-arrow)" stroke-width="2"
          marker-end="url(#PREFIX-arrow)"/>
  </svg>
  <p class="diagram-caption">그림 설명</p>
</div>
```

### 다이어그램 예제: API 요청 플로우
```html
<div class="diagram-container">
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 250">
    <defs>
      <marker id="flow-arrow" viewBox="0 0 10 7" refX="10" refY="3.5"
              markerWidth="10" markerHeight="7" orient="auto">
        <polygon points="0 0, 10 3.5, 0 7" fill="var(--diagram-arrow)"/>
      </marker>
    </defs>

    <!-- Client Box -->
    <rect x="20" y="20" width="140" height="60" rx="8"
          fill="var(--bg-secondary)" stroke="var(--accent-primary)" stroke-width="2"/>
    <text x="90" y="55" text-anchor="middle" fill="var(--diagram-text)" font-size="14">
      Client Application
    </text>

    <!-- Arrow -->
    <line x1="160" y1="50" x2="280" y2="50"
          stroke="var(--diagram-arrow)" stroke-width="2" marker-end="url(#flow-arrow)"/>
    <text x="220" y="40" text-anchor="middle" fill="var(--text-secondary)" font-size="11">
      HTTP POST
    </text>

    <!-- API Box -->
    <rect x="280" y="20" width="140" height="60" rx="8"
          fill="var(--bg-secondary)" stroke="var(--accent-primary)" stroke-width="2"/>
    <text x="350" y="55" text-anchor="middle" fill="var(--diagram-text)" font-size="14">
      Claude API
    </text>

    <!-- Response Arrow -->
    <line x1="280" y1="110" x2="160" y2="110"
          stroke="var(--diagram-accent)" stroke-width="2" stroke-dasharray="5,5" marker-end="url(#flow-arrow)"/>
    <text x="220" y="130" text-anchor="middle" fill="var(--text-secondary)" font-size="11">
      JSON Response
    </text>
  </svg>
  <p class="diagram-caption">Claude API 요청/응답 흐름도</p>
</div>
```

### 다이어그램 예제: 아키텍처 계층
```html
<div class="diagram-container">
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 300">
    <defs>
      <marker id="arch-arrow" viewBox="0 0 10 7" refX="10" refY="3.5"
              markerWidth="10" markerHeight="7" orient="auto">
        <polygon points="0 0, 10 3.5, 0 7" fill="var(--diagram-arrow)"/>
      </marker>
    </defs>

    <!-- Layer 1: Application -->
    <rect x="50" y="20" width="500" height="50" rx="6"
          fill="var(--bg-secondary)" stroke="var(--border-color)" stroke-width="1.5"/>
    <text x="300" y="50" text-anchor="middle" fill="var(--diagram-text)" font-size="13" font-weight="bold">
      Application Layer (Your App)
    </text>

    <!-- Arrow -->
    <line x1="300" y1="70" x2="300" y2="90"
          stroke="var(--diagram-arrow)" stroke-width="2" marker-end="url(#arch-arrow)"/>

    <!-- Layer 2: SDK -->
    <rect x="50" y="90" width="500" height="50" rx="6"
          fill="var(--bg-secondary)" stroke="var(--border-color)" stroke-width="1.5"/>
    <text x="300" y="120" text-anchor="middle" fill="var(--diagram-text)" font-size="13">
      SDK Layer (Python/TypeScript)
    </text>

    <!-- Arrow -->
    <line x1="300" y1="140" x2="300" y2="160"
          stroke="var(--diagram-arrow)" stroke-width="2" marker-end="url(#arch-arrow)"/>

    <!-- Layer 3: API -->
    <rect x="50" y="160" width="500" height="50" rx="6"
          fill="var(--bg-secondary)" stroke="var(--border-color)" stroke-width="1.5"/>
    <text x="300" y="190" text-anchor="middle" fill="var(--diagram-text)" font-size="13">
      REST API (HTTPS)
    </text>

    <!-- Arrow -->
    <line x1="300" y1="210" x2="300" y2="230"
          stroke="var(--diagram-arrow)" stroke-width="2" marker-end="url(#arch-arrow)"/>

    <!-- Layer 4: Claude Models -->
    <rect x="50" y="230" width="500" height="50" rx="6"
          fill="var(--accent-primary)" fill-opacity="0.2"
          stroke="var(--accent-primary)" stroke-width="2"/>
    <text x="300" y="260" text-anchor="middle" fill="var(--diagram-text)" font-size="13" font-weight="bold">
      Claude Models (Opus / Sonnet / Haiku)
    </text>
  </svg>
  <p class="diagram-caption">Claude 아키텍처 계층 구조</p>
</div>
```

## Common Pitfalls

| 실수 | 올바른 방법 |
|---|---|
| `pages/*.html`에서 `css/style.css` 경로 사용 | `../css/style.css` (`../` 접두사 필수) |
| `index.html`에서 `../css/style.css` 경로 사용 | `css/style.css` (접두사 없음) |
| header/nav/footer HTML 직접 작성 | 빈 태그만 작성, JS가 동적 생성 |
| h3/h4 태그를 주요 섹션으로 사용 | h2 태그를 주요 섹션으로 사용 (TOC 생성 요구) |
| h2 태그 3개 미만으로 페이지 작성 | 최소 3개 이상의 `<h2 id="...">` 권장 (TOC 생성 조건) |
| aside 태그 비우거나 직접 TOC 작성 | `<div class="toc-nav"></div>` 빈 컨테이너 유지 |
| SEARCH_INDEX에 index.html 추가 | index.html은 SEARCH_INDEX에 미포함 (정상) |
| SVG에 색상 하드코딩 (`fill="#fff"`) | CSS custom property 사용 (`fill="var(--diagram-text)"`) |
| SVG 마커 ID를 `arrow`로만 지정 | 고유 접두사 필수 (`id="pagename-1-arrow"`) |

## Content Guidelines

- 모든 문서는 **한국어**로 작성 (코드/기술 용어 제외)
- Claude AI 어시스턴트 사용자 대상 (초급~고급)
- 실제 API 코드 예제 포함 (구문 강조 클래스 적용)
- 최신 Claude 4.5/4.6 모델 기준

## Do NOT

- 빌드 도구, 번들러, 프레임워크 도입
- 영어로 문서 작성 (코드/기술 용어 제외)
- D2Coding 외 다른 폰트 추가
- HTML 파일에 header/nav/footer/breadcrumb/page-nav/inline-toc 마크업 직접 작성 (JS 동적 생성 사용)
- 기존 CSS custom property 이름 변경 (테마 호환성 파괴)
- `SEARCH_INDEX` / `NAV_STRUCTURE` 형식 변경 (JS 런타임 의존)
