import type { Metadata } from 'next'
import './globals.css'
import AnimatedLayout from '../components/AnimatedLayout'

export const metadata: Metadata = {
  title: 'Portfólio - Desenvolvedor Front-end',
  description: 'Portfólio de um desenvolvedor front-end especializado em criar experiências digitais rápidas, escaláveis e com foco em performance.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              try {
                const theme = localStorage.getItem('theme');
                if (theme === 'dark') {
                  document.documentElement.classList.add('dark');
                }
              } catch(e){}
            `,
          }}
        />
      </head>
      <body className="bg-white text-gray-900 dark:bg-gray-900 dark:text-gray-100">
        <AnimatedLayout>
          {children}
        </AnimatedLayout>
      </body>
    </html>
  )
} 