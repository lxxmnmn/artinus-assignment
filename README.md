# ARTINUS Frontend Developer (1~3년) 과제

## 👤 지원자 정보

이름 : **이민정**
이메일 : <lxxmnmn@gmail.com>

## 💻 개발 환경

- Node.js 버전 : `v20.3.0`
- 패키지 관리자 : pnpm
- 프로그래밍 언어 : TypeScript
- 프레임워크 : Next.js
- 정적 사이트 배포 : Vercel

### 🛠️ 주요 기술 스택

- TypeScript : `^5`
- Next.js : `^15.3.5`
- React : `^19.0.0`
- Tailwind CSS : `^4`
- TanStack React Query : `^5.81.5`

## 🚀 개발 내용

### 📁 폴더 구조

```plaintext
📦
├── 📁 public
├── 📁 src
│   ├── 📁 app                      # App Router
│   │   ├── 📁 products
│   │   │   ├── 📁 [id]
│   │   │   │   └── 📄 page.tsx     # 상품 상세 페이지
│   │   │   └── 📄 page.tsx         # 상품 목록 페이지
│   │   ├── 📄 favicon.ico          # 파비콘
│   │   ├── 📄 globals.css          # 전역 스타일
│   │   ├── 📄 layout.tsx           # 공통 UI 구조
│   │   ├── 📄 page.tsx             # 진입점 페이지
│   │   └── 📄 providers.tsx        # 전역 컨텍스트
│   ├── 📁 assets                   # 정적 리소스
│   │   └── 📁 fonts                # 폰트 파일
│   ├── 📁 components
│   │   ├── 📁 common               # 공통 컴포넌트
│   │   ├── 📁 product              # 상품 도메인 컴포넌트
│   │   └── 📁 ui                   # 재사용 가능한 기본 UI 컴포넌트
│   ├── 📁 constants
│   │   ├── 📄 common.ts            # 공통 상수
│   │   └── 📄 queryKey.ts          # TanStack Query 쿼리 키
│   ├── 📁 hooks                    # 커스텀 훅 정의
│   ├── 📁 lib
│   │   ├── 📁 api                  # API 통신 함수 정의
│   │   ├── 📄 axiosInstance.ts     # Axios 인스턴스
│   │   ├── 📄 queryClient.ts       # TanStack Query 인스턴스
│   │   └── 📄 utils.ts             # 유틸리티 함수
│   └── 📁 types                    # 타입 정의
├── ...
├── 📄 .prettierrc                  # Prettier 설정
├── 📄 eslint.config.mjs            # ESLint 설정
├── 📄 next.config.ts               # Next.js 설정
└── 📄 tsconfig.json                # TypeScript 설정
```

### 요구사항

#### 상품 목록

- 카드 리스트 형태로 페이지를 구성했습니다.
- 각 상품 카드에는 `thumbnail`, `title`, `brand`, `discountPercentage`, `price` 정보가 포함되어 있습니다.
- 상품 카드 클릭 시 해당 상품의 상세 페이지로 이동합니다.
- 20개씩 불러오며, 스크롤 기반 Lazy Load 기능을 구현했습니다.

#### 상품 상세

- 상품 이미지 캐러셀, 상품 상세 정보, 상품 리뷰 목록 구조로 페이지를 구성했습니다.
- 상품 상세에는 `images`, `title`, `category`, `brand`, `rating`, `discountPercentage`, `price`, `tags`, `description`, `dimensions`, `shippingInformation`, `warrantyInformation`, `returnPolicy`, `reviews` 정보가 포함되어 있습니다.
- 상품 이미지가 1개일 경우에는 단일 이미지를, 여러 개일 경우에는 이미지 캐러셀을 표시합니다.
- `tags`를 뱃지 목록으로 나타냈습니다.
- `rating`을 별점 아이콘으로 나타냈습니다.
- `reviews`를 리뷰 카드 목록으로 나타냈습니다.

### 공통

- 프로그래밍 언어 및 프레임워크
  - 코드의 안정성과 가독성을 높이고 컴파일 타임에서의 타입 검사로 런타임 오류를 줄이기 위해 `TypeScript`를 사용했습니다.
  - 라우팅, 성능 최적화, 정적 배포 등이 간편하여 `React` 기반에서 효율적으로 개발하고 빠른 초기 로딩을 지원하기 위해 `Next.js`를 사용했습니다.
- 스타일링
  - 별도의 CSS 파일 없이도 유틸리티 클래스 기반의 스타일링으로 빠르게 UI를 구현하기 위해 `Tailwind CSS`를 사용했습니다.
  - 일관된 디자인의 UI 컴포넌트를 활용하여 생산성을 높이기 위해 `shadcn/ui`를 사용했습니다.
- 성능 최적화
  - Next.js에서 제공하는 `next/image`, `next/font`를 통해 이미지 파일과 폰트 파일에 대한 캐싱 및 렌더링 최적화를 적용했습니다.
  - 효율적으로 서버 상태를 관리하고 데이터 캐싱을 통해 불필요한 리렌더링을 방지하고 네트워크 요청을 최소화하기 위해 `TanStack React Query`를 사용했습니다.
  - 라이브러리 사용 시 필요한 모듈만 import 하여 트리쉐이킹 최적화를 적용했습니다.
- 사용자 경험
  - 서버 데이터 예외 처리 시 일관된 UI/UX를 제공하기 위해 공통 로딩 스피너 컴포넌트와 에러 폴백 컴포넌트를 활용했습니다.
- 코드 품질 관리
  - 코드 품질과 스타일의 일관성을 유지하기 위해 `ESLint`와 `Prettier`를 사용했습니다.

## 📠 빌드 및 실행 방법

1. 필수 환경 구성

- Node.js `20.x` 이상
- pnpm `10.x` 이상

2. 의존성 설치

```bash
pnpm install
```

3. 환경 변수 설정

- 루트 경로에 `.env` 파일 생성
- `.env.example` 파일을 참고하여 환경 변수 설정

4. 실행

`localhost:3000`에서 실행

- 개발 서버 실행

```bash
pnpm dev
```

- 프로덕션 빌드 및 실행

```bash
pnpm build
pnpm start
```

## 배포한 정적 사이트 URL

[URL](https://artinus-assignment.vercel.app)
