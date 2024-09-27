'use client'

import { ThemeProvider, pageProps } from 'next-themes'

const Theme = ({ children }) => {
  return (
    <ThemeProvider attribute='class' defaultTheme='system' enableSystem>{ children }</ThemeProvider>
  )
};

export default Theme;