import { Html, Head, Main, NextScript } from 'next/document';

function setInitialColorMode() {
  function getInitialColorMode() {
    const preference = window.localStorage.getItem('theme');
    const hasExplicitPreference = typeof preference === 'string';

    if (hasExplicitPreference) {
      return preference;
    }

    const mediaQuery = '(prefers-color-scheme: dark)';
    const mql = window.matchMedia(mediaQuery);
    const hasImplicitPreference = typeof mql.matches === 'boolean';
    if (hasImplicitPreference) {
      return mql.matches ? 'dark' : 'light';
    }

    return 'dark';
  }
  const colorMode = getInitialColorMode();
  document.body.className = colorMode;
}
// our function needs to be a string
const blockingSetInitialColorMode = `(function() {
    ${setInitialColorMode.toString()}
    setInitialColorMode();
})()
`;

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta property="og:title" content="Maintain Hoon Blog" />
        <meta property="og:description" content="학습과 경험을 기록하고 있습니다." />
        <meta property="og:url" content="https://maintainhoon.vercel.app" />
        <meta property="og:image" content="https://maintainhoon.vercel.app/images/metaLogo.png" />
      </Head>
      <body>
        <script
          dangerouslySetInnerHTML={{
            __html: blockingSetInitialColorMode,
          }}
        ></script>

        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
