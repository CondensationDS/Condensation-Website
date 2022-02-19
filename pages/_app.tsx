import '../styles/globals.css'
import type { AppProps } from 'next/app'

function CondensationApp({ Component, pageProps }: AppProps) {
  // Use the layout defined at the page level, if available
  const getLayout = Component.getLayout || ((page) => page)

  return getLayout(<Component {...pageProps} />)
}

export default CondensationApp
