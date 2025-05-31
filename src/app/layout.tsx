import type { Metadata } from 'next'

import './globals.css'
import Navbar from "../components/Navbar";



export const metadata: Metadata = {
  title: 'Mini CRM Platform',
  description: 'Customer segmentation and campaign management platform',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-gray-50">
        <Navbar />
        <div className="container mx-auto py-8">{children}</div>
      </body>
    </html>
  );
}


