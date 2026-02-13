/* ==========================================================================
   AI Vibe Coding 가이드 /with MINZKN - Search Index
   ========================================================================== */
var SEARCH_INDEX = [
  // 시작하기
  { title: "Vibe Coding이란?", url: "pages/getting-started.html", description: "AI 기반 Vibe Coding 개념, 전통적 개발과의 차이, 장점", keywords: "vibe coding ai 개념 시작 바이브코딩" },
  { title: "AI CLI 도구 생태계", url: "pages/cli-tools-overview.html", description: "모든 주요 AI CLI 도구 개요 및 비교", keywords: "cli tools 도구 생태계 비교 개요" },
  { title: "Claude CLI 5분 시작", url: "pages/quickstart-claude-cli.html", description: "Claude CLI로 첫 Vibe Coding 시작하기", keywords: "claude cli quickstart 빠른시작 튜토리얼" },
  { title: "Ollama 로컬 시작", url: "pages/quickstart-local.html", description: "Ollama로 비용 없이 로컬에서 시작하기", keywords: "ollama local 로컬 빠른시작 무료" },
  { title: "학습 경로 가이드", url: "pages/learning-path.html", description: "초급부터 고급까지 단계별 학습 경로", keywords: "learning path 학습경로 로드맵 단계별" },

  // AI CLI 도구들
  { title: "Claude CLI 완전 가이드", url: "pages/claude-cli.html", description: "Claude Code CLI 설치, 설정, 워크플로우, 고급 기능", keywords: "claude cli code 가이드 설치 설정" },
  { title: "OpenCode (아카이브됨)", url: "pages/opencode.html", description: "OpenCode 터미널 CLI 도구 가이드 - 2025년 9월 아카이브됨", keywords: "opencode cli 아카이브 archived terminal" },
  { title: "Aider CLI", url: "pages/aider.html", description: "Aider CLI 완전 가이드", keywords: "aider cli git 통합" },
  { title: "Continue.dev", url: "pages/continue.html", description: "Continue.dev 완전 가이드", keywords: "continue dev vscode 확장" },
  { title: "Cursor IDE", url: "pages/cursor.html", description: "Cursor IDE 가이드", keywords: "cursor ide editor 에디터" },
  { title: "GitHub Copilot CLI", url: "pages/github-copilot.html", description: "GitHub Copilot CLI 가이드", keywords: "github copilot cli 깃허브" },
  { title: "Cline", url: "pages/cline.html", description: "Cline VS Code 확장 가이드", keywords: "cline vscode 확장 extension" },
  { title: "CLI 도구 비교", url: "pages/cli-comparison.html", description: "AI CLI 도구 상세 비교 및 선택 가이드", keywords: "cli comparison 비교 선택 가이드" },
  { title: "CLI 모범 사례", url: "pages/cli-best-practices.html", description: "CLI 도구 활용 모범 사례", keywords: "cli best practices 모범사례 팁" },

  // Ollama & 로컬 LLM
  { title: "Ollama란?", url: "pages/ollama-intro.html", description: "Ollama 개념, 장점, 사용 사례", keywords: "ollama 소개 개념 로컬llm" },
  { title: "Ollama 설치", url: "pages/ollama-installation.html", description: "Windows, macOS, Linux에서 Ollama 설치", keywords: "ollama installation 설치 윈도우 맥 리눅스" },
  { title: "Ollama 모델 가이드", url: "pages/ollama-models.html", description: "Llama, Mistral, CodeLlama 등 모델 설치 및 비교", keywords: "ollama models llama mistral codellama 모델" },
  { title: "Ollama 사용법", url: "pages/ollama-usage.html", description: "Ollama CLI 명령어, API, 모델 관리", keywords: "ollama usage cli api 사용법" },
  { title: "Ollama 연동", url: "pages/ollama-integration.html", description: "Ollama와 CLI 도구 연동 (Continue, Aider, Open WebUI, LangChain 등)", keywords: "ollama integration 연동 통합 open webui langchain llamaindex continue aider 웹ui chatgpt" },
  { title: "Ollama 고급 활용", url: "pages/ollama-advanced.html", description: "커스텀 모델, 파인튜닝, 성능 최적화", keywords: "ollama advanced 고급 커스텀 파인튜닝" },
  { title: "Ollama 트러블슈팅", url: "pages/ollama-troubleshooting.html", description: "Ollama 문제 해결 가이드", keywords: "ollama troubleshooting 문제해결 오류" },

  // MCP (Model Context Protocol)
  { title: "MCP란?", url: "pages/mcp-intro.html", description: "Model Context Protocol 개념, 아키텍처, 필요성", keywords: "mcp model context protocol 소개 개념" },
  { title: "MCP 서버 개발", url: "pages/mcp-servers.html", description: "Python/TypeScript로 MCP 서버 구축", keywords: "mcp server 서버 개발 python typescript" },
  { title: "MCP 클라이언트", url: "pages/mcp-clients.html", description: "Claude Desktop, CLI 도구와 MCP 연동", keywords: "mcp client 클라이언트 claude desktop" },
  { title: "MCP 실전 예제", url: "pages/mcp-examples.html", description: "파일 시스템, 데이터베이스, API 연동 예제", keywords: "mcp examples 예제 실전 샘플" },
  { title: "MCP 생태계", url: "pages/mcp-ecosystem.html", description: "공개 MCP 서버 목록 및 커뮤니티", keywords: "mcp ecosystem 생태계 커뮤니티 서버목록" },
  { title: "MCP 고급 주제", url: "pages/mcp-advanced.html", description: "MCP 보안, 성능, 멀티 서버", keywords: "mcp advanced 고급 보안 성능" },

  // LLM API & 연동
  { title: "LLM 생태계 개요", url: "pages/llm-landscape.html", description: "주요 LLM, API, 가격 비교", keywords: "llm landscape 생태계 개요 비교" },
  { title: "Claude API 가이드", url: "pages/claude-api.html", description: "Claude API 완전 가이드 (인증, 메시지, 스트리밍, Tool Use)", keywords: "claude api anthropic 가이드 인증" },
  { title: "OpenAI API", url: "pages/openai-api.html", description: "OpenAI API 가이드 (GPT-4, o1)", keywords: "openai api gpt-4 o1 가이드" },
  { title: "Codex 가이드", url: "pages/codex.html", description: "OpenAI Codex 개요, 작동 방식, 사용 흐름, 보안 고려사항", keywords: "codex openai 코딩 에이전트 워크플로우 보안" },
  { title: "Gemini API", url: "pages/gemini-api.html", description: "Google Gemini API 가이드", keywords: "gemini google api 가이드" },
  { title: "API 추상화 도구", url: "pages/api-abstraction.html", description: "LiteLLM, Portkey 등 API 추상화 도구", keywords: "api abstraction litellm portkey 추상화" },
  { title: "로컬 LLM API", url: "pages/local-api.html", description: "Ollama, LM Studio, LocalAI, vLLM 등 로컬 LLM 서버 완벽 가이드", keywords: "local api ollama lm studio localai vllm 로컬 추론 서버 inference" },
  { title: "다중 LLM 전환", url: "pages/api-switching.html", description: "다중 LLM 전환 전략 및 비용 최적화", keywords: "api switching 전환 다중 llm 최적화" },
  { title: "API 모범 사례", url: "pages/api-best-practices.html", description: "LLM API 에러 처리, 재시도, 캐싱", keywords: "api best practices 모범사례 에러처리" },

  // 프롬프트 엔지니어링
  { title: "프롬프트 기본", url: "pages/prompt-basics.html", description: "효과적인 프롬프트 작성 기본 원칙", keywords: "prompt basics prompting 프롬프트 기본" },
  { title: "프롬프트 패턴", url: "pages/prompt-patterns.html", description: "재사용 가능한 프롬프트 패턴 모음", keywords: "prompt patterns templates 프롬프트 패턴 템플릿" },
  { title: "Few-shot 학습", url: "pages/few-shot.html", description: "예제를 통한 학습 기법", keywords: "few-shot learning examples 예제 학습" },
  { title: "Chain-of-Thought", url: "pages/chain-of-thought.html", description: "단계별 사고 과정 프롬프팅", keywords: "chain-of-thought reasoning cot 사고 과정 추론" },
  { title: "코딩용 프롬프트", url: "pages/prompt-for-coding.html", description: "Vibe Coding 실전 프롬프트 특화", keywords: "prompt coding vibe 코딩 실전" },
  { title: "프롬프트 최적화", url: "pages/prompt-optimization.html", description: "토큰 절약 및 정확도 향상 기법", keywords: "prompt optimization 최적화 토큰절약" },

  // 환경 구축 & 도구
  { title: "LLM 개발 환경", url: "pages/dev-environment.html", description: "터미널, 에디터, Git 설정", keywords: "development environment 개발환경 설정" },
  { title: "API 키 관리", url: "pages/api-key-management.html", description: "환경 변수, 시크릿, 보안 관리", keywords: "api key management 키관리 보안" },
  { title: "Docker LLM 환경", url: "pages/docker-llm.html", description: "Docker로 LLM 환경 구축", keywords: "docker llm container 도커 컨테이너" },
  { title: "CI/CD & LLM", url: "pages/ci-cd-llm.html", description: "CI/CD와 LLM 통합", keywords: "ci cd llm integration 통합" },
  { title: "비용 모니터링", url: "pages/monitoring-costs.html", description: "LLM API 비용 모니터링 및 최적화", keywords: "monitoring costs 비용 모니터링 최적화" },

  // 참고 & 리소스
  { title: "Vibe Coding 패턴", url: "pages/vibe-coding-patterns.html", description: "Vibe Coding 디자인 패턴 및 실전 사례", keywords: "vibe coding patterns 패턴 사례" },
  { title: "모델 비교", url: "pages/model-comparison.html", description: "Claude, GPT, Gemini, Ollama 모델 비교", keywords: "models comparison opus sonnet haiku gpt gemini 모델 비교" },
  { title: "LLM 제한사항", url: "pages/limitations.html", description: "LLM 제한사항 및 주의사항", keywords: "limitations constraints 제한사항 제약" },
  { title: "FAQ", url: "pages/faq.html", description: "자주 묻는 질문 (CLI, Ollama, MCP 포함)", keywords: "faq frequently asked questions 자주 묻는 질문" },
  { title: "참고 자료", url: "pages/resources.html", description: "공식 문서, 블로그, GitHub, 커뮤니티", keywords: "resources 참고자료 문서 커뮤니티" },
  { title: "용어집", url: "pages/glossary.html", description: "LLM, CLI, MCP 등 모든 용어 정리", keywords: "glossary 용어집 용어 정의" }
];

/* ==========================================================================
   AI Vibe Coding 가이드 /with MINZKN - Navigation Structure
   ========================================================================== */
var NAV_STRUCTURE = [
  { title: '시작하기', pages: [
    { file: 'index.html', title: '홈' },
    { file: 'getting-started.html', title: 'Vibe Coding이란?' },
    { file: 'cli-tools-overview.html', title: 'AI CLI 도구 생태계' },
    { file: 'quickstart-claude-cli.html', title: 'Claude CLI 5분 시작' },
    { file: 'quickstart-local.html', title: 'Ollama 로컬 시작' },
    { file: 'learning-path.html', title: '학습 경로 가이드' }
  ]},
  { title: 'AI CLI 도구들', pages: [
    { file: 'codex.html', title: 'Codex 가이드' },
    { file: 'claude-cli.html', title: 'Claude CLI 완전 가이드' },
    { file: 'opencode.html', title: 'OpenCode (아카이브됨)' },
    { file: 'aider.html', title: 'Aider CLI' },
    { file: 'continue.html', title: 'Continue.dev' },
    { file: 'cursor.html', title: 'Cursor IDE' },
    { file: 'github-copilot.html', title: 'GitHub Copilot CLI' },
    { file: 'cline.html', title: 'Cline' },
    { file: 'cli-comparison.html', title: 'CLI 도구 비교' },
    { file: 'cli-best-practices.html', title: 'CLI 모범 사례' }
  ]},
  { title: 'Ollama & 로컬 LLM', pages: [
    { file: 'ollama-intro.html', title: 'Ollama란?' },
    { file: 'ollama-installation.html', title: 'Ollama 설치' },
    { file: 'ollama-models.html', title: 'Ollama 모델 가이드' },
    { file: 'ollama-usage.html', title: 'Ollama 사용법' },
    { file: 'ollama-integration.html', title: 'Ollama 연동' },
    { file: 'ollama-advanced.html', title: 'Ollama 고급 활용' },
    { file: 'ollama-troubleshooting.html', title: 'Ollama 트러블슈팅' }
  ]},
  { title: 'MCP (Model Context Protocol)', pages: [
    { file: 'mcp-intro.html', title: 'MCP란?' },
    { file: 'mcp-servers.html', title: 'MCP 서버 개발' },
    { file: 'mcp-clients.html', title: 'MCP 클라이언트' },
    { file: 'mcp-examples.html', title: 'MCP 실전 예제' },
    { file: 'mcp-ecosystem.html', title: 'MCP 생태계' },
    { file: 'mcp-advanced.html', title: 'MCP 고급 주제' }
  ]},
  { title: 'LLM API & 연동', pages: [
    { file: 'llm-landscape.html', title: 'LLM 생태계 개요' },
    { file: 'claude-api.html', title: 'Claude API 가이드' },
    { file: 'openai-api.html', title: 'OpenAI API' },
    { file: 'gemini-api.html', title: 'Gemini API' },
    { file: 'api-abstraction.html', title: 'API 추상화 도구' },
    { file: 'local-api.html', title: '로컬 LLM API' },
    { file: 'api-switching.html', title: '다중 LLM 전환' },
    { file: 'api-best-practices.html', title: 'API 모범 사례' }
  ]},
  { title: '프롬프트 엔지니어링', pages: [
    { file: 'prompt-basics.html', title: '프롬프트 기본' },
    { file: 'prompt-patterns.html', title: '프롬프트 패턴' },
    { file: 'few-shot.html', title: 'Few-shot 학습' },
    { file: 'chain-of-thought.html', title: 'Chain-of-Thought' },
    { file: 'prompt-for-coding.html', title: '코딩용 프롬프트' },
    { file: 'prompt-optimization.html', title: '프롬프트 최적화' }
  ]},
  { title: '환경 구축 & 도구', pages: [
    { file: 'dev-environment.html', title: 'LLM 개발 환경' },
    { file: 'api-key-management.html', title: 'API 키 관리' },
    { file: 'docker-llm.html', title: 'Docker LLM 환경' },
    { file: 'ci-cd-llm.html', title: 'CI/CD & LLM' },
    { file: 'monitoring-costs.html', title: '비용 모니터링' }
  ]},
  { title: '참고 & 리소스', pages: [
    { file: 'vibe-coding-patterns.html', title: 'Vibe Coding 패턴' },
    { file: 'model-comparison.html', title: '모델 비교' },
    { file: 'limitations.html', title: 'LLM 제한사항' },
    { file: 'faq.html', title: 'FAQ' },
    { file: 'resources.html', title: '참고 자료' },
    { file: 'glossary.html', title: '용어집' }
  ]}
];

/* ==========================================================================
   Main Application (IIFE)
   ========================================================================== */
(function() {
  'use strict';

  // ========== 동적 컴포넌트 생성 ==========

  // Header 생성
  function buildHeader() {
    const header = document.querySelector('.site-header');
    if (!header) return;

    header.innerHTML = `
      <div class="header-left">
        <button class="mobile-menu-toggle" aria-label="메뉴 열기">
          <span></span><span></span><span></span>
        </button>
        <a href="${getRelativeRoot()}index.html" class="header-title">
          <span class="title-full">AI Vibe Coding 가이드</span>
          <span class="title-short">AI Vibe</span>
        </a>
      </div>
      <div class="header-right">
        <button class="mobile-search-toggle" aria-label="검색" title="검색">
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="2">
            <circle cx="8" cy="8" r="6"/>
            <path d="M12.5 12.5L17 17"/>
          </svg>
        </button>
        <div class="search-container">
          <span class="search-icon">🔍</span>
          <input type="text" class="search-input" placeholder="검색..." aria-label="검색">
          <div class="search-results"></div>
        </div>
        <button class="theme-toggle" aria-label="테마 변경" title="테마 변경">
          <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
            <path d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"/>
          </svg>
        </button>
      </div>
    `;

    // 모바일 검색 컨테이너 생성 (header 다음에 배치)
    const existingSearchMobile = document.querySelector('.search-mobile');
    if (!existingSearchMobile) {
      const searchMobile = document.createElement('div');
      searchMobile.className = 'search-mobile';
      searchMobile.innerHTML = `
        <span class="search-icon">🔍</span>
        <input type="text" class="search-input" placeholder="검색..." aria-label="검색">
        <div class="search-results"></div>
      `;
      header.parentNode.insertBefore(searchMobile, header.nextSibling);
    }

    // 네비게이션 오버레이 생성 (page-wrapper 내부에)
    const existingOverlay = document.querySelector('.nav-overlay');
    if (!existingOverlay) {
      const overlay = document.createElement('div');
      overlay.className = 'nav-overlay';
      document.querySelector('.page-wrapper').appendChild(overlay);
    }
  }

  // Side Navigation 생성
  function buildSideNav() {
    const nav = document.querySelector('.side-nav');
    if (!nav) return;

    const root = getRelativeRoot();
    const currentFile = getCurrentFile();
    // 모바일 감지: matchMedia 사용으로 더 정확한 감지
    const isMobile = window.matchMedia('(max-width: 768px)').matches;

    let html = '<div class="nav-inner">';

    NAV_STRUCTURE.forEach((category, idx) => {
      // 모바일에서는 모든 카테고리 열기
      // 데스크톱에서는 현재 페이지가 속한 카테고리만 열기
      let isOpen = isMobile;

      // 데스크톱에서는 현재 페이지가 속한 카테고리 찾기
      if (!isMobile) {
        const hasCurrentPage = category.pages.some(page => page.file === currentFile);
        if (hasCurrentPage) isOpen = true;
      }

      html += `
        <div class="nav-category">
          <button class="nav-category-toggle ${isOpen ? 'active' : ''}" aria-expanded="${isOpen}">
            <span class="nav-category-title">${category.title}</span>
            <svg class="nav-category-icon" width="12" height="12" viewBox="0 0 12 12">
              <path d="M2 4l4 4 4-4" stroke="currentColor" stroke-width="1.5" fill="none"/>
            </svg>
          </button>
          <ul class="nav-list ${isOpen ? 'active' : ''}">
      `;

      category.pages.forEach(page => {
        const url = page.file === 'index.html' ? root + 'index.html' : root + 'pages/' + page.file;
        const isActive = currentFile === page.file;
        html += `<li><a href="${url}" class="${isActive ? 'active' : ''}">${page.title}</a></li>`;
      });

      html += '</ul></div>';
    });

    html += '</div>';
    nav.innerHTML = html;
  }

  // Breadcrumb 생성
  function buildBreadcrumb() {
    const breadcrumb = document.querySelector('.breadcrumb');
    if (!breadcrumb) return;

    const currentFile = getCurrentFile();
    const root = getRelativeRoot();

    let html = `<a href="${root}index.html">홈</a>`;

    // 현재 페이지 찾기
    NAV_STRUCTURE.forEach(category => {
      category.pages.forEach(page => {
        if (page.file === currentFile) {
          html += ` <span class="breadcrumb-sep">/</span> <span class="breadcrumb-category">${category.title}</span>`;
          html += ` <span class="breadcrumb-sep">/</span> <span class="breadcrumb-current">${page.title}</span>`;
        }
      });
    });

    breadcrumb.innerHTML = html;
  }

  // Page Navigation (이전/다음) 생성
  function buildPageNav() {
    const pageNav = document.querySelector('.page-nav');
    if (!pageNav) return;

    const currentFile = getCurrentFile();
    const allPages = [];
    NAV_STRUCTURE.forEach(cat => allPages.push(...cat.pages));

    const currentIdx = allPages.findIndex(p => p.file === currentFile);
    if (currentIdx === -1) return;

    const prev = currentIdx > 0 ? allPages[currentIdx - 1] : null;
    const next = currentIdx < allPages.length - 1 ? allPages[currentIdx + 1] : null;
    const root = getRelativeRoot();

    let html = '';
    if (prev) {
      const prevUrl = prev.file === 'index.html' ? root + 'index.html' : root + 'pages/' + prev.file;
      html += `<a href="${prevUrl}" class="page-nav-prev">
        <span class="page-nav-label">이전</span>
        <span class="page-nav-title">${prev.title}</span>
      </a>`;
    }
    if (next) {
      const nextUrl = next.file === 'index.html' ? root + 'index.html' : root + 'pages/' + next.file;
      html += `<a href="${nextUrl}" class="page-nav-next">
        <span class="page-nav-label">다음</span>
        <span class="page-nav-title">${next.title}</span>
      </a>`;
    }

    pageNav.innerHTML = html;
  }

  // Inline TOC 생성
  function buildInlineTOC() {
    const tocAside = document.querySelector('.inline-toc');
    if (!tocAside) return;

    const headings = document.querySelectorAll('.content-section h2[id], .content-section h3[id]');
    if (headings.length === 0) {
      tocAside.style.display = 'none';
      return;
    }

    let html = '<div class="toc-title">목차</div><nav class="toc-nav"><ul class="toc-list">';

    headings.forEach(h => {
      const level = h.tagName.toLowerCase();
      const className = level === 'h3' ? 'toc-item-sub' : '';
      html += `<li class="${className}"><a href="#${h.id}">${h.textContent}</a></li>`;
    });

    html += '</ul></nav>';
    tocAside.innerHTML = html;
  }

  // Footer 생성
  function buildFooter() {
    const footer = document.querySelector('.site-footer');
    if (!footer) return;

    const year = new Date().getFullYear();
    footer.innerHTML = `
      <div class="footer-content">
        <p>&copy; ${year} AI Vibe Coding 가이드 /with MINZKN. All rights reserved.</p>
        <p>Built with ❤️ using pure HTML, CSS, and JavaScript.</p>
      </div>
    `;
  }

  // ========== 유틸리티 함수 ==========

  function getRelativeRoot() {
    return window.location.pathname.includes('/pages/') ? '../' : '';
  }

  function getCurrentFile() {
    const path = window.location.pathname;
    const filename = path.substring(path.lastIndexOf('/') + 1);
    return filename || 'index.html';
  }

  // ========== 테마 전환 ==========

  const themes = ['dark-kernel', 'light', 'solarized', 'nord', 'high-contrast'];
  let currentThemeIndex = 0;

  function initTheme() {
    const savedTheme = getCookie('claude_theme');
    if (savedTheme) {
      currentThemeIndex = themes.indexOf(savedTheme);
      if (currentThemeIndex === -1) currentThemeIndex = 0;
    }
    document.documentElement.setAttribute('data-theme', themes[currentThemeIndex]);
  }

  function toggleTheme() {
    currentThemeIndex = (currentThemeIndex + 1) % themes.length;
    const newTheme = themes[currentThemeIndex];
    document.documentElement.setAttribute('data-theme', newTheme);
    setCookie('claude_theme', newTheme, 365);
  }

  function getCookie(name) {
    const match = document.cookie.match(new RegExp('(^| )' + name + '=([^;]+)'));
    return match ? match[2] : null;
  }

  function setCookie(name, value, days) {
    const expires = new Date(Date.now() + days * 864e5).toUTCString();
    document.cookie = name + '=' + encodeURIComponent(value) + '; expires=' + expires + '; path=/';
  }

  // ========== 검색 기능 ==========

  function initSearch() {
    const searchContainers = document.querySelectorAll('.search-container, .search-mobile');

    searchContainers.forEach(container => {
      const searchInput = container.querySelector('.search-input');
      const searchResults = container.querySelector('.search-results');

      if (!searchInput || !searchResults) return;

      let debounceTimer;

      searchInput.addEventListener('input', function(e) {
        clearTimeout(debounceTimer);
        debounceTimer = setTimeout(() => {
          const query = e.target.value.trim().toLowerCase();

          if (query.length < 2) {
            searchResults.innerHTML = '';
            searchResults.classList.remove('active');
            return;
          }

          const results = SEARCH_INDEX.filter(item => {
            return item.title.toLowerCase().includes(query) ||
                   item.description.toLowerCase().includes(query) ||
                   item.keywords.toLowerCase().includes(query);
          }).slice(0, 8);

          if (results.length === 0) {
            searchResults.innerHTML = '<div class="search-no-results">결과 없음</div>';
            searchResults.classList.add('active');
            return;
          }

          const root = getRelativeRoot();
          let html = '';
          results.forEach(item => {
            html += `
              <a href="${root}${item.url}" class="search-result-item">
                <div class="search-result-title">${item.title}</div>
                <div class="search-result-desc">${item.description}</div>
              </a>
            `;
          });

          searchResults.innerHTML = html;
          searchResults.classList.add('active');
        }, 300);
      });
    });

    // 검색 결과 외부 클릭 시 닫기
    document.addEventListener('click', function(e) {
      if (!e.target.closest('.search-container') && !e.target.closest('.search-mobile')) {
        document.querySelectorAll('.search-results').forEach(results => {
          results.classList.remove('active');
        });
      }
    });
  }

  // ========== 스크롤 스파이 (TOC 하이라이트) ==========

  function initScrollSpy() {
    const tocLinks = document.querySelectorAll('.toc-nav a');
    if (tocLinks.length === 0) return;

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          tocLinks.forEach(link => link.classList.remove('active'));
          const activeLink = document.querySelector(`.toc-nav a[href="#${entry.target.id}"]`);
          if (activeLink) activeLink.classList.add('active');
        }
      });
    }, { rootMargin: '-100px 0px -66% 0px' });

    document.querySelectorAll('.content-section h2[id], .content-section h3[id]').forEach(h => {
      observer.observe(h);
    });
  }

  // ========== 모바일 네비게이션 ==========

  function initMobileNav() {
    const menuToggle = document.querySelector('.mobile-menu-toggle');
    const sideNav = document.querySelector('.side-nav');
    const navOverlay = document.querySelector('.nav-overlay');

    if (!menuToggle || !sideNav) return;

    function closeNav() {
      sideNav.classList.remove('active');
      menuToggle.classList.remove('active');
      document.body.classList.remove('nav-open');
      if (navOverlay) navOverlay.classList.remove('active');
    }

    function openNav() {
      sideNav.classList.add('active');
      menuToggle.classList.add('active');
      document.body.classList.add('nav-open');
      if (navOverlay) navOverlay.classList.add('active');
    }

    menuToggle.addEventListener('click', () => {
      if (sideNav.classList.contains('active')) {
        closeNav();
      } else {
        openNav();
      }
    });

    // 오버레이 클릭 시 메뉴 닫기
    if (navOverlay) {
      navOverlay.addEventListener('click', closeNav);
    }

    // 네비게이션 링크 클릭 시 메뉴 닫기
    sideNav.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        if (window.innerWidth <= 768) {
          closeNav();
        }
      });
    });

    // ESC 키로 메뉴 닫기
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && sideNav.classList.contains('active')) {
        closeNav();
      }
    });
  }

  // ========== 모바일 검색 ==========

  function initMobileSearch() {
    const searchToggle = document.querySelector('.mobile-search-toggle');
    const searchMobile = document.querySelector('.search-mobile');

    if (!searchToggle || !searchMobile) return;

    searchToggle.addEventListener('click', () => {
      const isVisible = searchMobile.style.display === 'block';
      searchMobile.style.display = isVisible ? 'none' : 'block';

      if (!isVisible) {
        const input = searchMobile.querySelector('.search-input');
        if (input) {
          setTimeout(() => input.focus(), 100);
        }
      }
    });

    // 모바일 검색 외부 클릭 시 닫기
    document.addEventListener('click', (e) => {
      if (!e.target.closest('.search-mobile') && !e.target.closest('.mobile-search-toggle')) {
        if (window.innerWidth <= 480) {
          searchMobile.style.display = 'none';
        }
      }
    });
  }

  // ========== 네비게이션 카테고리 토글 ==========

  function initNavToggle() {
    const toggles = document.querySelectorAll('.nav-category-toggle');

    toggles.forEach(toggle => {
      toggle.addEventListener('click', function() {
        const isActive = this.classList.contains('active');
        const navList = this.nextElementSibling;

        this.classList.toggle('active');
        this.setAttribute('aria-expanded', !isActive);
        navList.classList.toggle('active');
      });
    });
  }

  // ========== Back to Top 버튼 ==========

  function initBackToTop() {
    // Back to Top 버튼 생성
    const existingBtn = document.querySelector('.back-to-top');
    if (!existingBtn) {
      const btn = document.createElement('button');
      btn.className = 'back-to-top';
      btn.innerHTML = '↑';
      btn.setAttribute('aria-label', '맨 위로');
      btn.setAttribute('title', '맨 위로');
      document.body.appendChild(btn);

      btn.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      });
    }

    // 스크롤 이벤트
    const backToTopBtn = document.querySelector('.back-to-top');
    if (backToTopBtn) {
      let lastScrollY = 0;
      let ticking = false;

      window.addEventListener('scroll', () => {
        lastScrollY = window.scrollY;

        if (!ticking) {
          window.requestAnimationFrame(() => {
            if (lastScrollY > 400) {
              backToTopBtn.classList.add('visible');
            } else {
              backToTopBtn.classList.remove('visible');
            }
            ticking = false;
          });
          ticking = true;
        }
      });
    }
  }

  // ========== Copy 버튼 ==========

  function initCopyButtons() {
    const copyButtons = document.querySelectorAll('.copy-btn');

    copyButtons.forEach(button => {
      button.addEventListener('click', async function() {
        const codeBlock = this.closest('.code-block');
        if (!codeBlock) return;

        const pre = codeBlock.querySelector('pre');
        if (!pre) return;

        const code = pre.textContent;

        try {
          await navigator.clipboard.writeText(code);

          // 성공 피드백
          const originalText = this.textContent;
          this.classList.add('copied');
          this.textContent = 'Copied';

          setTimeout(() => {
            this.classList.remove('copied');
            this.textContent = originalText;
          }, 2000);
        } catch (err) {
          // 폴백: 구형 브라우저용
          const textarea = document.createElement('textarea');
          textarea.value = code;
          textarea.style.position = 'fixed';
          textarea.style.opacity = '0';
          document.body.appendChild(textarea);
          textarea.select();

          try {
            document.execCommand('copy');
            this.classList.add('copied');
            this.textContent = 'Copied!';
            setTimeout(() => {
              this.classList.remove('copied');
              this.textContent = 'Copy';
            }, 2000);
          } catch (e) {
            console.error('복사 실패:', e);
          }

          document.body.removeChild(textarea);
        }
      });
    });
  }

  // ========== 초기화 ==========

  function init() {
    buildHeader();
    buildSideNav();
    buildBreadcrumb();
    buildPageNav();
    buildInlineTOC();
    buildFooter();

    initTheme();
    initSearch();
    initScrollSpy();
    initMobileNav();
    initMobileSearch();
    initNavToggle();
    initBackToTop();
    initCopyButtons();

    // 테마 토글 버튼 이벤트
    const themeToggle = document.querySelector('.theme-toggle');
    if (themeToggle) {
      themeToggle.addEventListener('click', toggleTheme);
    }

    // 화면 크기 변경 시 네비게이션 재구성 (모바일 ↔ 데스크톱 전환 시)
    let resizeTimer;
    window.addEventListener('resize', () => {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(() => {
        buildSideNav();
        initNavToggle(); // 토글 이벤트 리스너 재등록
      }, 250);
    });
  }

  // DOM 로드 완료 시 초기화
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
