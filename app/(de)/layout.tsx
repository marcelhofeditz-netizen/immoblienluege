import '../globals.css'
import { meta } from '@/lib/meta'

export const metadata = meta('de')

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="de">
      <body>{children}</body>
    </html>
  )
}
