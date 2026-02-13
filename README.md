# AI Vibe Coding 가이드 /with MINZKN

AI Vibe Coding을 위한 종합 한국어 문서 사이트입니다.

## 📚 내용

- **시작하기**: Vibe Coding 개념, CLI 도구 생태계, 학습 경로
- **AI CLI 도구들**: Codex, Claude CLI, Aider, Continue 등
- **Ollama & 로컬 LLM**: 로컬 실행, 모델 가이드, 트러블슈팅
- **MCP**: 서버/클라이언트/생태계/고급 주제
- **LLM API & 연동**: Claude/OpenAI/Gemini/API 추상화
- **프롬프트 엔지니어링**: 기본/패턴/Few-shot/최적화
- **환경 구축 & 도구**: 키 관리, Docker, CI/CD, 비용 모니터링
- **참고 & 리소스**: 모델 비교, 제한사항, FAQ, 용어집

## 🛠️ 기술 스택

- **순수 HTML5 + CSS3 + Vanilla JavaScript** (빌드 도구 없음)
- **CSS Grid** 3-컬럼 레이아웃
- **5개 테마**: dark-kernel (기본), light, solarized, nord, high-contrast
- **반응형 디자인**: 모바일, 태블릿, 데스크톱
- **D2Coding 폰트**: 코드 가독성 최적화

## 📁 프로젝트 구조

```
claude/
├── index.html              # 메인 페이지
├── pages/                  # 콘텐츠 페이지
│   ├── codex.html
│   ├── getting-started.html
│   └── ...
├── css/                    # 스타일시트
│   ├── themes.css          # 테마 정의
│   ├── style.css           # 메인 스타일
│   └── responsive.css      # 반응형 스타일
├── js/
│   └── main.js             # 네비게이션, 검색, 테마
├── images/                 # 이미지 리소스
├── robots.txt
├── sitemap.xml
├── CLAUDE.md               # 프로젝트 가이드
└── README.md
```

## 🚀 로컬 실행

빌드 과정이 없으므로 아무 HTTP 서버로 실행 가능합니다:

```bash
python3 -m http.server 8080
# http://localhost:8080 접속
```

## 📝 페이지 추가

1. `pages/` 디렉토리에 HTML 파일 생성
2. `js/main.js`의 `SEARCH_INDEX`에 검색 항목 추가
3. `js/main.js`의 `NAV_STRUCTURE`에 네비게이션 항목 추가

## 🎨 테마

5가지 테마 지원:
- `dark-kernel` (기본): 터미널 느낌의 다크 테마
- `light`: 밝은 테마
- `solarized`: Solarized Dark
- `nord`: Nord 테마
- `high-contrast`: 고대비 테마

테마는 쿠키에 저장되어 365일 유지됩니다.

## 📖 라이선스

MIT License

## 👤 제작

MINZKN - 2026
