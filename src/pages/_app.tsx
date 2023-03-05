import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { RelayEnvironmentProvider } from 'react-relay'
import { initRelayEnvironment} from '../RelayEnvironment'

const environment = initRelayEnvironment()

export default function App({ Component, pageProps }: AppProps) {
  return <RelayEnvironmentProvider environment={environment}>
    <Component {...pageProps} />
  </RelayEnvironmentProvider>
}
