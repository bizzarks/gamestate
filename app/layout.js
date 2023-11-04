import './globals.css'


export const metadata = {
  title: 'gamestate',
  description: 'A Magic: The Gathering Match Tracker',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
