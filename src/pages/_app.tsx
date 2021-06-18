import { AppProps } from 'next/app'
import Head from 'next/head'
import { ThemeProvider } from 'styled-components'

import Layout from 'components/Layout'

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
      </Head>

      <ThemeProvider theme={theme}>
        <GlobalStyles />

        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
    </>
  )
}

export default App
