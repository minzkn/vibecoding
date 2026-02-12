# 검증 체크리스트

## 로컬 서버 실행
```bash
cd /mnt/public_home/www/hwport.com/claude
python3 -m http.server 8080
# 브라우저에서 http://localhost:8080 접속
```

## 개선된 페이지 (11개) 확인

### ✅ 핵심 페이지 (4개)
- [ ] claude-code.html - Vibe Coding 3개 섹션, 고급 워크플로우, 모델 선택, 트러블슈팅
- [ ] code-generation.html - Vibe Coding 섹션
- [ ] what-is-claude.html - Vibe Coding 언급
- [ ] quickstart.html - Vibe Coding 카드

### ✅ 비용 최적화
- [ ] pricing.html - "비용 최적화"로 제목 변경, 9가지 절감 전략

### ✅ API 기본 페이지 (4개)
- [ ] messages-api.html - 5분 가이드 + SVG 요청/응답 구조
- [ ] streaming.html - 3단계 시작 + SSE 플로우 SVG + 실용 가이드
- [ ] authentication.html - 3단계 시작 + 환경 변수 info-box + 첫 API 호출 테스트
- [ ] api-overview.html - 5단계 가이드 + REST API 설명 + 엔드포인트 구조 SVG

### ✅ 고급 기능 페이지 (3개)
- [ ] vision.html - 3단계 시작 + 지원 형식 테이블 + 완전한 실습 가이드
- [ ] long-context.html - 초급자 가이드 + 실용 선택 가이드
- [ ] system-prompts.html - 초급자 가이드 + 메시지 구조 SVG + 5가지 페르소나 템플릿

## SVG 다이어그램 렌더링 확인 (13개)

### claude-code.html (3개)
- [ ] 전통적 코딩 vs Vibe Coding 워크플로우 비교
- [ ] 모델 선택 결정 트리
- [ ] Claude Code 실행 흐름도

### streaming.html (1개)
- [ ] SSE 스트리밍 플로우

### messages-api.html (1개)
- [ ] 요청/응답 JSON 구조

### api-overview.html (2개)
- [ ] API 요청/응답 플로우
- [ ] 엔드포인트 구조 (4개 주요 기능)

### vision.html (1개)
- [ ] 이미지 처리 파이프라인 (5단계)

### long-context.html (2개)
- [ ] 컨텍스트 윈도우 규모 비교
- [ ] 프롬프트 캐싱 동작 방식

### system-prompts.html (1개)
- [ ] System과 Messages 구조

### pricing.html (2개 - 기존)
- [ ] API 키 발급 프로세스
- [ ] 백엔드 프록시 아키텍처

## 테마 전환 테스트
- [ ] dark-kernel (기본)
- [ ] light
- [ ] solarized
- [ ] nord
- [ ] high-contrast

각 테마에서 SVG 다이어그램 CSS 변수 정상 작동 확인

## 검색 기능 테스트
- [ ] "Vibe Coding" → 4개 페이지 (claude-code, code-generation, what-is-claude, quickstart)
- [ ] "비용 최적화" → pricing.html
- [ ] "스트리밍" → streaming.html
- [ ] "Vision" → vision.html
- [ ] "시스템 프롬프트" → system-prompts.html

## TOC (목차) 자동 생성 확인
각 페이지의 h2 섹션이 우측 TOC에 자동 표시되는지 확인

## 반응형 레이아웃 테스트
- [ ] 1920px (데스크톱)
- [ ] 1200px (TOC 숨김)
- [ ] 768px (햄버거 메뉴)
- [ ] 480px (소형 모바일)

## 내비게이션 일관성
- [ ] 이전/다음 버튼 작동
- [ ] 브레드크럼 정확성
- [ ] 사이드바 카테고리 구조

## 코드 블록 구문 강조
- [ ] Python 코드
- [ ] TypeScript 코드
- [ ] JSON 코드
- [ ] Bash 명령어

## Info-box 렌더링
- [ ] info (파란색)
- [ ] tip (초록색)
- [ ] warning (주황색)
- [ ] danger (빨간색)

## 성능 확인
- [ ] 페이지 로딩 속도 (2초 이내)
- [ ] SVG 렌더링 지연 없음
- [ ] 이미지 최적화 (없음 - 순수 SVG)

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
