export const metadata = {
  title: 'Next.js를 이용한 포트폴리오 사이트 만들기',
  description: 'Next.js를 이용하여 사이트를 만들었습니다.',
  keywords: ["포티폴리오", "리액트", "next.js", "portfolio"]
}

export default function RootLayout({ children }) {
  return (
    <html lang="ko">
      <head>
        <link rel="icon" type="image/svg+xml" href="favicon.svg" />
      </head>
      <body>{children}</body>
    </html>
  );
}