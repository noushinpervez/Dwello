import '@/assets/styles/globals.css';
import Navbar from '@/components/Navbar/Navbar';
import Theme from './theme-provider';
import Footer from '@/components/Footer/Footer';
import localFont from 'next/font/local';

const recoleta = localFont({
  src: '/fonts/Recoleta-Regular.otf',
  variable: '--font-recoleta',
});

const euclidCircular = localFont({
  src: [
    { path: '/fonts/EuclidCircularA-Light.woff', weight: '300', style: 'normal' },
    { path: '/fonts/EuclidCircularA-Regular.woff', weight: '400', style: 'normal' },
    { path: '/fonts/EuclidCircularA-Medium.woff', weight: '500', style: 'normal' },
    { path: '/fonts/EuclidCircularA-Semibold.woff', weight: '600', style: 'normal' },
    { path: '/fonts/EuclidCircularA-Bold.woff', weight: '700', style: 'normal' },
  ],
  variable: '--font-euclid',
});

export const metadata = {
  title: 'Dwello | Find the Perfect Rental',
  description: 'Find your dream rental property',
  keywords: 'rental, find rentals, find properties',
};

const RootLayout = ({ children }) => {
  return (
    <html lang='en' suppressHydrationWarning>
      <body className={ `antialiased text-text bg-background box-border ${recoleta.variable} ${euclidCircular.variable}` }>
        <Theme>
          <Navbar />
          <main>{ children }</main>
          <Footer />
        </Theme>
      </body>
    </html>
  )
};

export default RootLayout;