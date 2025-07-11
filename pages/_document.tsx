import { Head, Html, Main, NextScript } from "next/document";
import { Analytics } from '@vercel/analytics/react';

export default function Document() {
  const userName = `${process.env.NEXT_PUBLIC_PROFILE_NAME}`;
  const webUri = `${process.env.NEXT_PUBLIC_WEB_URI}`;
  const webDescription = `${process.env.NEXT_PUBLIC_WEB_DESCRIPTION}`;

  return (
    <Html lang="ko">
      <Head>
        <meta property="og:url" content={webUri} />
        <meta property="og:title" content={userName} />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="/profile.png" />
        <meta property="og:description" content={webDescription} />
        {/* <link rel="stylesheet" href="styles/App.css" /> */}
      </Head>

      <body>
        <Main />
        <NextScript />
        <Analytics />
      </body>
    </Html>
  );
}
