import type { AppProps } from 'next/app'
import { ReactNode } from 'react'
import { NextPage } from 'next'
import { AppProvider } from '../common/context/CDSContext'
import '../styles/globals.css'

type Page<P = {}> = NextPage<P> & {
  getLayout?: (page: ReactNode) => ReactNode
}

type Props = AppProps & {
  Component: Page
}

const CondensationApp = ({ Component, pageProps }: Props) => {
  const getLayout = Component.getLayout ?? ((page: ReactNode) => page)
  return <AppProvider>{getLayout(<Component {...pageProps} />)}</AppProvider>
}

export default CondensationApp
