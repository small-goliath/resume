import { Head, Html, Main, NextScript } from "next/document";

// TODO: css 적용
export default function Document() {
  return (
    <Html lang="ko">
      <Head>
        <title>Resume of Small-goliath</title>
        <link rel="stylesheet" href="styles/App.css" />
      </Head>

      <body>
        <div id="root"></div>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
