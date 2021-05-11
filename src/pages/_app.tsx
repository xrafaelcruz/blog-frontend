import { AppProps } from 'next/app'
import Head from 'next/head'
import { ThemeProvider } from 'styled-components'

import Main from 'components/Main'

import GlobalStyles from 'styles/global'
import theme from 'styles/theme'

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Rafael Cruz</title>
        {/* <link rel="shortcut icon" href="/img/favicon-512.png" />
        <link rel="apple-touch-icon" href="/img/favicon-512.png" /> */}
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="Blog criado por um dev front-end para outros devs, compartilhando minhas experiências e novos estudos."
        />

        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;600&display=swap"
          rel="stylesheet"
        />
      </Head>

      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <Main>
          <Component {...pageProps} />
        </Main>
      </ThemeProvider>
    </>
  )
}

export default App
