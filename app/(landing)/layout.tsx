import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import Header from '../components/layout/Navbar'
import Footer from '../components/layout/Footer'
import '../globals.css'

{/*variabel pada pengaturan font digunakan untuk memanggil css variabel dari situ*/}
{/*weight di pengaturan font digunakan untuk membatasi ukuran yang perlu dirender ke web*/}
{/*display di pengaturan font digunakan untuk mengatur cara font ditampilkan*/}
{/*contoh penggunaan variabel di pengaturan font dilihat dibaris nomor 30*/}
{/*styling font weight adalah styling ketebalan bukan ukuran*/}
{/*styling scroll-smooth untuk navbar agar ketika navigasi scroll otomatis dengan smooth*/}
const poppins = Poppins({
  variable: "--font-poppins",
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
})

export const metadata: Metadata = {
  title: "SportOn Website",
  description: "Engineered for endurance and designed for speed. Experience gear that moves as fast as you do. Premium fabrics. Unmatched comfort. Limitless motion.",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className='overflow-x-hidden'>
      <body className={`${poppins.variable} antialiased`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}