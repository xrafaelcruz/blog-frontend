import { AppProps } from 'next/app'
import Head from 'next/head'

import GlobalStyles from 'styles/global'

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Rafael Cruz</title>
        {/* <link rel="shortcut icon" href="/img/favicon-512.png" />
        <link rel="apple-touch-icon" href="/img/favicon-512.png" /> */}
        <meta
          name="description"
          content="Blog criado por um dev front-end para outros devs, compartilhando minhas experiências e novos estudos."
        />
      </Head>
      <GlobalStyles />
      <Component {...pageProps} />
    </>
  )
}

export default App
