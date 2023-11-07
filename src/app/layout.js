import './globals.css'


export const metadata = {
  title: 'delgate',
  description: 'Save time by delegating tasks!',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="dark:bg-blue-950 bg-gradient-to-tr from-slate-100 to-blue-200 dark:from-slate-900 dark:to-blue-950">{children}</body>
    </html>
  )
}
