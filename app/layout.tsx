import { Footer, Layout, Navbar } from 'nextra-theme-docs'
import { Head } from 'nextra/components'
import { getPageMap } from 'nextra/page-map'
import { Inter, JetBrains_Mono } from 'next/font/google'
import 'nextra-theme-docs/style.css'
import './globals.css'
import type { ReactNode } from 'react'
import type { Metadata } from 'next'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-jetbrains-mono',
})

export const metadata: Metadata = {
  title: {
    default: 'Markdown Projects',
    template: '%s – Markdown Projects'
  },
  description:
    'File-based project management with markdown. A CLI tool for tracking issues, milestones, and documentation — all as plain text files.',
  metadataBase: new URL('https://markdown-projects.vercel.app'),
  icons: {
    icon: '/favicon.ico',
  },
  openGraph: {
    images: '/og.png',
  },
}

const navbar = (
  <Navbar
    logo={
      <span style={{ display: 'flex', alignItems: 'center', gap: '8px', fontWeight: 800 }}>
        <img src="/logo.svg" alt="Markdown Projects" width={24} height={24} />
        Markdown Projects
      </span>
    }
    projectLink="https://github.com/varunpandey0502/markdown-projects"
  />
)

const footer = (
  <Footer>
    <span>MIT {new Date().getFullYear()} Markdown Projects</span>
  </Footer>
)

export default async function RootLayout({
  children
}: {
  children: ReactNode
}) {
  return (
    <html lang="en" dir="ltr" suppressHydrationWarning className={`${inter.variable} ${jetbrainsMono.variable}`}>
      <Head
        color={{
          hue: { dark: 0, light: 0 },
          saturation: { dark: 84, light: 84 },
          lightness: { dark: 55, light: 44 },
        }}
        backgroundColor={{
          dark: 'rgb(10,10,10)',
          light: 'rgb(255,255,255)',
        }}
      />
      <body>
        <Layout
          navbar={navbar}
          pageMap={await getPageMap()}
          docsRepositoryBase="https://github.com/varunpandey0502/markdown-projects-website/tree/main"
          sidebar={{ defaultMenuCollapseLevel: 1 }}
          footer={footer}
          nextThemes={{ defaultTheme: 'light' }}
        >
          {children}
        </Layout>
      </body>
    </html>
  )
}
