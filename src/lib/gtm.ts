import { useEffect } from 'react'
import { useRouter } from 'next/router'

export const GTM_ID = process.env.NEXT_PUBLIC_GOOGLE_TAG_MANAGER_ID

declare global {
  interface Window {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    dataLayer: any
  }
}

export const pageview = (url: string) => {
  if (window.dataLayer) {
    window.dataLayer.push({
      event: 'pageview',
      page: url
    })
  }
}

export const useGoogleTagManager = () => {
  const router = useRouter()

  useEffect(() => {
    router.events.on('routeChangeComplete', pageview)
    return () => {
      router.events.off('routeChangeComplete', pageview)
    }
  }, [router.events])
}
