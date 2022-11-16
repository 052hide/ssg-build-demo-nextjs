import '../styles/globals.css'
import { clsx } from 'clsx'

import type { AppProps } from 'next/app'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <main>
      <div className={clsx('tw-mx-auto', 'tw-w-full tw-max-w-[800px]')}>
        <Component {...pageProps} />
      </div>
    </main>
  )
}

export default MyApp
