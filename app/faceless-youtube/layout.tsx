import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Faceless YouTube on a Phone | AI Video Editing & Monetization',
  description:
    'Build a faceless YouTube channel on your phone. Learn AI video editing with free tools, hit the monetization threshold, and get paid in USD to your Nigerian bank.',
  alternates: { canonical: '/faceless-youtube' },
  openGraph: {
    title: 'Faceless YouTube on a Phone | AI Video Editing & Monetization',
    description:
      'Build a faceless YouTube channel on your phone. Learn AI video editing with free tools, hit the monetization threshold, and get paid in USD to your Nigerian bank.',
    type: 'website',
  },
}

export default function FacelessYouTubeLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
