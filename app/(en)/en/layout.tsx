import '../../globals.css'
import { meta } from '@/lib/meta'

export const metadata = meta('en')

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
