import './globals.css'
// import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.min.css'
import 'bootswatch/dist/vapor/bootstrap.min.css'


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
