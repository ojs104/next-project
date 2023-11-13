This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).
# NEXT.js를 이용한 포트폴리오 사이트 만들기

##  NEXT.js를 사용하는 이유

Next.js란 무엇인가요?
Next.js는 Vercel에서 개발한 오픈 소스 React 프레임워크입니다. 확장 가능한 서버 렌더링 React 애플리케이션 구축 프로세스를 단순화하도록 설계되었습니다. Next.js는 유연성과 사용자 정의를 허용하면서 최신 웹 애플리케이션을 보다 쉽게 ​​개발할 수 있도록 하는 일련의 규칙과 기능을 제공합니다.

주요 특징들:
서버측 렌더링(SSR):

Next.js는 서버 측 렌더링을 지원하므로 페이지가 클라이언트로 전송되기 전에 서버에서 렌더링될 수 있습니다. 이는 성능을 향상시키고 SEO에 이점을 제공합니다.
SSG(정적 사이트 생성):

SSR 외에도 Next.js는 빌드 시 페이지를 사전 렌더링할 수 있는 정적 사이트 생성을 지원합니다. 이는 자주 변경되지 않는 콘텐츠에 유용하므로 페이지 로드 속도가 빨라집니다.
자동 코드 분할:

Next.js는 JavaScript 코드를 더 작고 최적화된 청크로 자동으로 분할합니다. 이 기능은 특정 페이지에 필요한 코드만 로드하여 성능을 향상시킵니다.
파일 시스템 기반 라우팅:

Next.js는 파일 시스템 기반 접근 방식을 사용하여 라우팅을 단순화합니다. 개발자는 디렉터리에 React 구성 요소를 추가하여 페이지를 만들 수 pages있으며 파일 구조는 자동으로 경로를 정의합니다.
API 경로:

Next.js를 사용하면 동일한 프로젝트 내에서 API 경로를 생성할 수 있습니다. 이를 통해 백엔드 기능 및 서버리스 기능 개발이 용이해집니다.
CSS-in-JS 지원:

Next.js는 다양한 CSS-in-JS 솔루션을 지원하므로 널리 사용되는 스타일링 라이브러리를 사용하여 구성 요소의 스타일을 쉽게 지정할 수 있습니다.
내장 CSS 및 Sass 지원:

Next.js에는 CSS 및 Sass에 대한 지원이 내장되어 있어 프로젝트에 스타일을 쉽게 포함하고 관리할 수 있습니다.
타입스크립트 지원:

Next.js는 TypeScript에 대한 뛰어난 지원을 제공하므로 개발자는 더 나은 도구 사용과 더 적은 런타임 오류를 위해 정적으로 유형이 지정된 코드를 작성할 수 있습니다.
개발자 경험:

Next.js는 핫 모듈 교체, 빠른 새로 고침, 파일 시스템 기반 API와 같은 기능을 통해 개발자 경험을 향상시킵니다.
Vercel 통합:

Next.js는 JavaScript 애플리케이션 호스팅을 위한 클라우드 플랫폼인 Vercel과 긴밀하게 통합되어 있습니다. Next.js 애플리케이션을 Vercel에 배포하는 것은 종종 간단합니다.
활성 커뮤니티:

Next.js에는 광범위한 문서, 유용한 리소스 및 다양한 플러그인을 제공하는 크고 활동적인 커뮤니티가 있습니다. 커뮤니티 지원은 일반적인 문제에 대한 해결책을 찾고 모범 사례를 지속적으로 업데이트하는 데 유용합니다.

## 설치
1. next-project 폴더 만들고 설치
npx create-next-app@latest next-project

2. gsap 설치 `npm i gsap`
3. sass 설치 `npm i sass`
4. lenis 설치 `npm i @studio-freight/lenis`


## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
