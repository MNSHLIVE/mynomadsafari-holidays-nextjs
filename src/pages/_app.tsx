import { AppProps } from 'next/app';
import { ThemeProvider } from "@/components/theme-provider";
import Layout from "@/components/layout";
import '@/styles/globals.css';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider defaultTheme="system" storageKey="next-theme">
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  );
} 