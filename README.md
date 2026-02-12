# Claude 문서 /with MINZKN

Anthropic Claude AI 어시스턴트에 대한 종합 한국어 문서 사이트입니다.

## 📚 내용

- **API 기본**: Claude API 사용법, 인증, 메시지 API, 스트리밍
- **고급 기능**: Tool Use, Vision, 긴 컨텍스트, 시스템 프롬프트
- **프롬프트 엔지니어링**: 효과적인 프롬프트 작성 기법
- **도구**: Claude Code CLI, Python/TypeScript SDK
- **활용 사례**: 코드 생성, 문서 분석, 데이터 추출, 챗봇
- **참고**: 모델 비교, 요금, 제한사항, FAQ

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
│   ├── what-is-claude.html
│   ├── quickstart.html
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
├── CLAUDE.md               # 프로젝트 가이드 (Claude Code용)
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
