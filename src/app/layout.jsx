import { Inter } from "next/font/google";
import "./globals.css";

import '@/assets/css/bootstrap.min.css'
import '@/assets/css/font-awesome.min.css'
import '@/assets/css/slick.css'
import '@/assets/css/navbar.css'
import '@/assets/css/default.css'
import '@/assets/scss/style.scss'
import 'react-modal-video/scss/modal-video.scss'

import Drawer from '@/components/Layout/Drawer/Drawer'
import Header from '@/components/Layout/Header/Header'
import Footer from '@/components/Layout/Footer/Footer'
import FooterCopyright from '@/components/Layout/Footer/FooterCopyright'
import AuthProvider from "@/providers/AuthProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "kampiunid - Seputar Bola Indonesia",
  description: "Seputar Bola Indonesia",
};

export default function RootLayout({ children }) {
  
  return (
    <html lang="en">
      <body className={inter.className}>
        <AuthProvider>
          <div className='home-1-bg'>
            <Drawer />
            <Header />
            {children}
            {/* <Footer /> */}
            <FooterCopyright />
          </div>
        </AuthProvider>
      </body>
    </html>
  );
}
