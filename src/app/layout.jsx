import '@/assets/styles/globals.css';
import Navbar from '@/components/Navbar/Navbar';
import Theme from './theme-provider';
import Footer from '@/components/Footer/Footer';
import localFont from 'next/font/local';
import AuthProvider from '@/providers/AuthProvider';

const recoleta = localFont({
  src: [
    { path: '/fonts/Recoleta-Light.ttf', weight: '300', style: 'normal' },
    { path: '/fonts/Recoleta-Regular.ttf', weight: '400', style: 'normal' },
    { path: '/fonts/Recoleta-Medium.ttf', weight: '500', style: 'normal' },
    { path: '/fonts/Recoleta-SemiBold.ttf', weight: '600', style: 'normal' },
    { path: '/fonts/Recoleta-Bold.ttf', weight: '700', style: 'normal' },
    { path: '/fonts/Recoleta-Black.ttf', weight: '900', style: 'normal' },
  ],
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
  icons: {
    icon: {
      url: '/images/logo.png',
      href: '/images/logo.png',
    },
  },
};

const RootLayout = ({ children }) => {
  return (
    <AuthProvider>
      <html lang='en' suppressHydrationWarning>
        <body className={ `antialiased text-text bg-background box-border ${recoleta.variable} ${euclidCircular.variable}` }>
          <Theme>
            <Navbar />
            <main>{ children }</main>
            <Footer />
          </Theme>
        </body>
      </html>
    </AuthProvider>
  )
};

export default RootLayout;