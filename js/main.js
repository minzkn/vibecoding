/* ==========================================================================
   AI Vibe Coding 가이드 /with MINZKN - Search Index
   ========================================================================== */
var SEARCH_INDEX = [
  // 시작하기
  { title: "Vibe Coding이란?", url: "pages/getting-started.html", description: "AI 기반 Vibe Coding 개념, 전통적 개발과의 차이, 장점", keywords: "vibe coding ai 개념 시작 바이브코딩" },
  { title: "5분 퀵스타트", url: "pages/quickstart-beginner.html", description: "프로그래밍 경험 없어도OK! 5분 만에 첫 Vibe Coding 프로젝트 완성", keywords: "vibe coding 빠른시작 초입문 5분 tutorial beginner quickstart一分钟" },
  { title: "AI CLI 도구 생태계", url: "pages/cli-tools-overview.html", description: "모든 주요 AI CLI 도구 개요 및 비교", keywords: "cli tools 도구 생태계 비교 개요" },
  { title: "Claude CLI 5분 시작", url: "pages/quickstart-claude-cli.html", description: "Claude CLI로 첫 Vibe Coding 시작하기", keywords: "claude cli quickstart 빠른시작 튜토리얼" },
  { title: "Ollama 로컬 시작", url: "pages/quickstart-local.html", description: "Ollama로 로컬 실행 워크플로우 시작하기", keywords: "ollama local 로컬 빠른시작" },
  { title: "학습 경로 가이드", url: "pages/learning-path.html", description: "초급부터 고급까지 단계별 학습 경로", keywords: "learning path 학습경로 로드맵 단계별" },

  // AI CLI 도구들
  { title: "Claude CLI 가이드", url: "pages/claude-cli.html", description: "Claude Code CLI 설치, 설정, 워크플로우, 고급 기능", keywords: "claude cli code 가이드 설치 설정" },
  { title: "OpenCode (아카이브됨)", url: "pages/opencode.html", description: "OpenCode 터미널 CLI 도구 가이드 - 2025년 9월 아카이브됨", keywords: "opencode cli 아카이브 archived terminal" },
  { title: "Aider CLI", url: "pages/aider.html", description: "Aider CLI 가이드", keywords: "aider cli git 통합" },
  { title: "Continue.dev", url: "pages/continue.html", description: "Continue.dev 가이드", keywords: "continue dev vscode 확장" },
  { title: "Cursor IDE", url: "pages/cursor.html", description: "Cursor IDE 가이드", keywords: "cursor ide editor 에디터" },
  { title: "Windsurf IDE", url: "pages/windsurf.html", description: "Windsurf IDE 가이드", keywords: "windsurf ide codeium cascade editor" },
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
  { title: "Claude API 가이드", url: "pages/claude-api.html", description: "Claude API 가이드 (인증, 메시지, 스트리밍, Tool Use)", keywords: "claude api anthropic 가이드 인증" },
  { title: "OpenAI API", url: "pages/openai-api.html", description: "OpenAI API 사용 흐름과 연동 가이드", keywords: "openai api 가이드 연동" },
  { title: "Codex 가이드", url: "pages/codex.html", description: "OpenAI Codex 개요, 작동 방식, 사용 흐름, 보안 고려사항", keywords: "codex openai 코딩 에이전트 워크플로우 보안" },
  { title: "Gemini API", url: "pages/gemini-api.html", description: "Google Gemini API 가이드", keywords: "gemini google api 가이드" },
  { title: "API 추상화 도구", url: "pages/api-abstraction.html", description: "LiteLLM, Portkey 등 API 추상화 도구", keywords: "api abstraction litellm portkey 추상화" },
  { title: "로컬 LLM API", url: "pages/local-api.html", description: "Ollama, LM Studio, LocalAI, vLLM 기반 로컬 LLM 서버 가이드", keywords: "local api ollama lm studio localai vllm 로컬 추론 서버 inference" },
  { title: "다중 LLM 전환", url: "pages/api-switching.html", description: "다중 LLM 전환 전략 및 비용 최적화", keywords: "api switching 전환 다중 llm 최적화" },
  { title: "API 모범 사례", url: "pages/api-best-practices.html", description: "LLM API 에러 처리, 재시도, 캐싱", keywords: "api best practices 모범사례 에러처리" },

  // 프롬프트 엔지니어링
  { title: "프롬프트 기본", url: "pages/prompt-basics.html", description: "효과적인 프롬프트 작성 기본 원칙", keywords: "prompt basics prompting 프롬프트 기본" },
  { title: "프롬프트 패턴", url: "pages/prompt-patterns.html", description: "재사용 가능한 프롬프트 패턴 모음", keywords: "prompt patterns templates 프롬프트 패턴 템플릿" },
  { title: "Few-shot 학습", url: "pages/few-shot.html", description: "예제를 통한 학습 기법", keywords: "few-shot learning examples 예제 학습" },
  { title: "Chain-of-Thought", url: "pages/chain-of-thought.html", description: "단계별 사고 과정 프롬프팅", keywords: "chain-of-thought reasoning cot 사고 과정 추론" },
  { title: "코딩용 프롬프트", url: "pages/prompt-for-coding.html", description: "Vibe Coding 실전 프롬프트 특화", keywords: "prompt coding vibe 코딩 실전" },
  { title: "프롬프트 최적화", url: "pages/prompt-optimization.html", description: "토큰 절약 및 정확도 향상 기법", keywords: "prompt optimization 최적화 토큰절약" },
  { title: "Markdown 스타일 가이드와 문서 품질", url: "pages/markdown-style-guide.html", description: "일관된 Markdown 스타일과 문서 품질 체크리스트", keywords: "markdown 스타일 가이드 문서 품질 구조화" },

  // 실전 프로젝트 튜토리얼
  { title: "Todo 앱 구축", url: "pages/project-todo-app.html", description: "Vibe Coding으로 Todo 앱을 단계별로 구축하는 실전 튜토리얼", keywords: "todo 앱 프로젝트 튜토리얼 실전" },
  { title: "REST API 구축", url: "pages/project-rest-api.html", description: "AI 도움으로 REST API 설계부터 구현까지", keywords: "rest api 프로젝트 튜토리얼 백엔드" },
  { title: "CI/CD 파이프라인", url: "pages/project-ci-cd.html", description: "GitHub Actions로 CI/CD 파이프라인 구축하기", keywords: "ci cd 파이프라인 프로젝트 자동화" },

  // 테스트 & QA 자동화
  { title: "AI 기반 테스트", url: "pages/ai-testing.html", description: "AI로 테스트 코드 생성하고 테스트 자동화하기", keywords: "ai testing 테스트 자동화 단위테스트" },
  { title: "프롬프트 테스트", url: "pages/prompt-testing.html", description: "프롬프트 품질 평가 및 테스트 방법", keywords: "prompt testing 프롬프트 테스트 품질평가" },

  // 보안 & 비용 관리
  { title: "보안 모범 사례", url: "pages/security-best-practices.html", description: "LLM 애플리케이션 보안 모범 사례", keywords: "보안 security 모범사례 vulnerability" },
  { title: "비용 최적화", url: "pages/cost-optimization.html", description: "LLM API 비용 최적화 전략과 실전 기법", keywords: "cost optimization 비용 최적화 절약" },

  // 팀 협업 & 프로세스
  { title: "팀 프롬프트 라이브러리", url: "pages/team-prompt-library.html", description: "팀에서 공유하는 프롬프트 라이브러리 구축", keywords: "team prompt library 팀 프롬프트 공유" },
  { title: "AI 코드 리뷰", url: "pages/code-review-ai.html", description: "AI 활용 코드 리뷰 프로세스", keywords: "code review ai 코드리뷰 자동화" },

  // 기술 스택별 개발 가이드
  { title: "프론트엔드 Vibe Coding", url: "pages/frontend-vibe.html", description: "프론트엔드 개발에서 Vibe Coding 활용법", keywords: "frontend 프론트엔드 vibe 코딩" },
  { title: "React 프롬프트", url: "pages/react-prompt.html", description: "React 개발을 위한 효과적인 프롬프트 기법", keywords: "react 프롬프트 컴포넌트" },
  { title: "백엔드 Vibe Coding", url: "pages/backend-vibe.html", description: "백엔드 개발에서 Vibe Coding 활용법", keywords: "backend 백엔드 vibe 코딩 서버" },
  { title: "API 디자인", url: "pages/api-design.html", description: "AI 도움으로 API 설계하기", keywords: "api design 설계 rest" },
  { title: "데이터베이스 프롬프트", url: "pages/database-prompt.html", description: "데이터베이스 설계 및 SQL 생성 프롬프트", keywords: "database sql 프롬프트 설계" },

  // 환경 구축 & 도구
  { title: "LLM 개발 환경", url: "pages/dev-environment.html", description: "터미널, 에디터, Git 설정", keywords: "development environment 개발환경 설정" },
  { title: "API 키 관리", url: "pages/api-key-management.html", description: "환경 변수, 시크릿, 보안 관리", keywords: "api key management 키관리 보안" },
  { title: "Docker LLM 환경", url: "pages/docker-llm.html", description: "Docker, Compose v2, Buildx로 LLM 환경 구축", keywords: "docker compose v2 buildx buildkit llm container 도커 컨테이너" },
  { title: "FastCGI", url: "pages/fastcgi.html", description: "FastCGI 프로토콜, Nginx/Apache 연동, PHP-FPM, 성능 최적화", keywords: "fastcgi nginx apache php-fpm performance" },
  { title: "CI/CD & LLM", url: "pages/ci-cd-llm.html", description: "CI/CD와 LLM 통합", keywords: "ci cd llm integration 통합" },
  { title: "비용 모니터링", url: "pages/monitoring-costs.html", description: "LLM API 비용 모니터링 및 최적화", keywords: "monitoring costs 비용 모니터링 최적화" },

  // 참고 & 리소스
  { title: "LLM 이론 기초: 확률·정보·일반화", url: "pages/llm-theory-foundations.html", description: "LLM 확률적 생성, 정보이론, 일반화/환각의 핵심 개념", keywords: "llm theory 확률 정보이론 일반화 환각" },
  { title: "LLM 이론 심화: 트랜스포머·스케일링·ICL", url: "pages/llm-theory-advanced.html", description: "Transformer, 스케일링 법칙, In-Context Learning 이론", keywords: "llm theory transformer attention scaling icl" },
  { title: "LLM 이론 수학 부록", url: "pages/llm-theory-math-appendix.html", description: "LLM 핵심 수식 요약: 크로스엔트로피, 퍼플렉서티, 어텐션", keywords: "llm math appendix cross entropy perplexity attention" },
  { title: "LLM 핸드북: 개념과 구조", url: "pages/llm-handbook-concepts.html", description: "LLM 핵심 개념, 토큰/컨텍스트, 모델 구조와 생태계 지형 정리", keywords: "llm 핸드북 개념 구조 토큰 컨텍스트 생태계" },
  { title: "LLM 핸드북: 학습·정렬·추론", url: "pages/llm-handbook-training.html", description: "프리트레이닝, 정렬, 추론 최적화, RAG/도구 사용 흐름", keywords: "llm 학습 정렬 rlhf dpo 추론 rag 도구사용" },
  { title: "LLM 핸드북: 제품화·운영·안전", url: "pages/llm-handbook-ops.html", description: "서비스 배포, 비용/지연 관리, 평가/모니터링, 보안/컴플라이언스", keywords: "llm 운영 배포 모니터링 평가 보안 컴플라이언스" },
  { title: "Vibe Coding 패턴", url: "pages/vibe-coding-patterns.html", description: "Vibe Coding 디자인 패턴 및 실전 사례", keywords: "vibe coding patterns 패턴 사례" },
  { title: "모델 비교", url: "pages/model-comparison.html", description: "Claude, GPT, Gemini, Ollama 모델 비교", keywords: "models comparison opus sonnet haiku gpt gemini 모델 비교" },
  { title: "LLM 제한사항", url: "pages/limitations.html", description: "LLM 제한사항 및 주의사항", keywords: "limitations constraints 제한사항 제약" },
  { title: "FAQ", url: "pages/faq.html", description: "자주 묻는 질문 (CLI, Ollama, MCP 포함)", keywords: "faq frequently asked questions 자주 묻는 질문" },
  { title: "참고 자료", url: "pages/resources.html", description: "공식 문서, 블로그, GitHub, 커뮤니티", keywords: "resources 참고자료 문서 커뮤니티" },
  { title: "마크업 기초와 Markdown 실전", url: "pages/markup-basics.html", description: "마크업 개념, Markdown 핵심 문법, 문서 구조화", keywords: "마크업 markdown 문법 문서작성 구조화" },
  { title: "Markdown vs HTML: 언제 무엇을 쓰나", url: "pages/markdown-vs-html.html", description: "Markdown과 HTML의 차이와 선택 기준", keywords: "markdown html 비교 선택 기준" },
  { title: "용어집", url: "pages/glossary.html", description: "LLM, CLI, MCP 등 모든 용어 정리", keywords: "glossary 용어집 용어 정의" }
];

/* ==========================================================================
   AI Vibe Coding 가이드 /with MINZKN - Navigation Structure
   ========================================================================== */
var NAV_STRUCTURE = [
  { title: '시작하기', pages: [
    { file: 'index.html', title: '홈' },
    { file: 'getting-started.html', title: 'Vibe Coding이란?' },
    { file: 'quickstart-beginner.html', title: '5분 퀵스타트' },
    { file: 'cli-tools-overview.html', title: 'AI CLI 도구 생태계' },
    { file: 'quickstart-claude-cli.html', title: 'Claude CLI 5분 시작' },
    { file: 'quickstart-local.html', title: 'Ollama 로컬 시작' },
    { file: 'learning-path.html', title: '학습 경로 가이드' }
  ]},
  { title: 'AI CLI 도구들', pages: [
    { file: 'codex.html', title: 'Codex 가이드' },
    { file: 'claude-cli.html', title: 'Claude CLI 가이드' },
    { file: 'opencode.html', title: 'OpenCode (아카이브됨)' },
    { file: 'aider.html', title: 'Aider CLI' },
    { file: 'continue.html', title: 'Continue.dev' },
    { file: 'cursor.html', title: 'Cursor IDE' },
    { file: 'windsurf.html', title: 'Windsurf IDE' },
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
    { file: 'prompt-optimization.html', title: '프롬프트 최적화' },
    { file: 'markdown-style-guide.html', title: 'Markdown 스타일 가이드와 문서 품질' }
  ]},
  { title: '실전 프로젝트 튜토리얼', pages: [
    { file: 'project-todo-app.html', title: 'Todo 앱 구축' },
    { file: 'project-rest-api.html', title: 'REST API 구축' },
    { file: 'project-ci-cd.html', title: 'CI/CD 파이프라인' }
  ]},
  { title: '테스트 & QA 자동화', pages: [
    { file: 'ai-testing.html', title: 'AI 기반 테스트' },
    { file: 'prompt-testing.html', title: '프롬프트 테스트' }
  ]},
  { title: '보안 & 비용 관리', pages: [
    { file: 'security-best-practices.html', title: '보안 모범 사례' },
    { file: 'cost-optimization.html', title: '비용 최적화' }
  ]},
  { title: '팀 협업 & 프로세스', pages: [
    { file: 'team-prompt-library.html', title: '팀 프롬프트 라이브러리' },
    { file: 'code-review-ai.html', title: 'AI 코드 리뷰' }
  ]},
  { title: '기술 스택별 가이드', pages: [
    { file: 'frontend-vibe.html', title: '프론트엔드 Vibe Coding' },
    { file: 'react-prompt.html', title: 'React 프롬프트' },
    { file: 'backend-vibe.html', title: '백엔드 Vibe Coding' },
    { file: 'api-design.html', title: 'API 디자인' },
    { file: 'database-prompt.html', title: '데이터베이스 프롬프트' }
  ]},
  { title: '환경 구축 & 도구', pages: [
    { file: 'dev-environment.html', title: 'LLM 개발 환경' },
    { file: 'api-key-management.html', title: 'API 키 관리' },
    { file: 'docker-llm.html', title: 'Docker LLM 환경' },
    { file: 'fastcgi.html', title: 'FastCGI' },
    { file: 'ci-cd-llm.html', title: 'CI/CD & LLM' },
    { file: 'monitoring-costs.html', title: '비용 모니터링' }
  ]},
  { title: '참고 & 리소스', pages: [
    { file: 'llm-theory-foundations.html', title: 'LLM 이론 기초: 확률·정보·일반화' },
    { file: 'llm-theory-advanced.html', title: 'LLM 이론 심화: 트랜스포머·스케일링·ICL' },
    { file: 'llm-theory-math-appendix.html', title: 'LLM 이론 수학 부록' },
    { file: 'llm-handbook-concepts.html', title: 'LLM 핸드북: 개념과 구조' },
    { file: 'llm-handbook-training.html', title: 'LLM 핸드북: 학습·정렬·추론' },
    { file: 'llm-handbook-ops.html', title: 'LLM 핸드북: 제품화·운영·안전' },
    { file: 'vibe-coding-patterns.html', title: 'Vibe Coding 패턴' },
    { file: 'model-comparison.html', title: '모델 비교' },
    { file: 'limitations.html', title: 'LLM 제한사항' },
    { file: 'faq.html', title: 'FAQ' },
    { file: 'markup-basics.html', title: '마크업 기초와 Markdown 실전' },
    { file: 'markdown-vs-html.html', title: 'Markdown vs HTML: 언제 무엇을 쓰나' },
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
        <a href="https://www.minzkn.com/" class="home-icon" aria-label="MINZKN.COM" target="_top" rel="noopener">&#127968;</a>
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
        <div class="theme-switcher">
          <button class="theme-btn" aria-label="테마 변경" title="테마 변경">
            &#127912; <span class="theme-btn-label">Dark</span>
          </button>
          <div class="theme-dropdown">
            ${THEMES.map(theme => {
              let swatchStyle = `background:${theme.swatch}`;
              if (theme.id === 'high-contrast') swatchStyle += ';border-color:#fff';
              return `<button class="theme-option" data-theme="${theme.id}">
                <span class="theme-swatch" style="${swatchStyle}"></span>${theme.name}
              </button>`;
            }).join('')}
          </div>
        </div>
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

  const THEME_COOKIE = 'claude_theme';
  const DEFAULT_THEME = 'dark-kernel';
  const THEMES = [
    { id: 'dark-kernel', name: 'Dark', swatch: '#0d1117' },
    { id: 'light', name: 'Light', swatch: '#ffffff' },
    { id: 'solarized', name: 'Solarized', swatch: '#002b36' },
    { id: 'nord', name: 'Nord', swatch: '#2e3440' },
    { id: 'high-contrast', name: 'High Contrast', swatch: '#000000' }
  ];

  function getTheme() {
    const savedTheme = getCookie(THEME_COOKIE);
    const isValidTheme = THEMES.some(theme => theme.id === savedTheme);
    return isValidTheme ? savedTheme : DEFAULT_THEME;
  }

  function setTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    setCookie(THEME_COOKIE, theme, 365);
    updateThemeUI(theme);
  }

  function updateThemeUI(theme) {
    const options = document.querySelectorAll('.theme-option');
    options.forEach(option => {
      option.classList.toggle('active', option.getAttribute('data-theme') === theme);
    });

    const label = document.querySelector('.theme-btn-label');
    if (label) {
      const selectedTheme = THEMES.find(item => item.id === theme);
      if (selectedTheme) label.textContent = selectedTheme.name;
    }
  }

  function initThemeSwitcher() {
    const button = document.querySelector('.theme-btn');
    const dropdown = document.querySelector('.theme-dropdown');
    if (!button || !dropdown) return;

    const currentTheme = getTheme();
    document.documentElement.setAttribute('data-theme', currentTheme);
    updateThemeUI(currentTheme);

    button.addEventListener('click', event => {
      event.stopPropagation();
      dropdown.classList.toggle('active');
    });

    button.addEventListener('keydown', event => {
      if (event.key === 'Enter' || event.key === ' ') {
        event.preventDefault();
        event.stopPropagation();
        dropdown.classList.toggle('active');
      }
      if (event.key === 'Escape') {
        dropdown.classList.remove('active');
      }
    });

    dropdown.querySelectorAll('.theme-option').forEach(option => {
      option.addEventListener('click', () => {
        setTheme(option.getAttribute('data-theme'));
        dropdown.classList.remove('active');
      });
    });

    document.addEventListener('click', () => {
      dropdown.classList.remove('active');
    });
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

      // 모바일에서 메뉴를 열 때 모든 카테고리를 확실히 펼침
      if (window.innerWidth <= 768) {
        sideNav.querySelectorAll('.nav-category-toggle').forEach(toggle => {
          toggle.classList.add('active');
          toggle.setAttribute('aria-expanded', 'true');
          const navList = toggle.nextElementSibling;
          if (navList) navList.classList.add('active');
        });
      }
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

    initThemeSwitcher();
    initSearch();
    initScrollSpy();
    initMobileNav();
    initMobileSearch();
    initNavToggle();
    initBackToTop();
    initCopyButtons();

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
