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

const blockingSetInitialColorMode = `(function() {
    ${setInitialColorMode.toString()}
    setInitialColorMode();
})()
`;

export default function Document() {
  return (
    <Html lang="ko">
      <Head></Head>
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
