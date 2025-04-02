import { AppProps } from 'next/app';
import { ThemeProvider } from "@/components/theme-provider";
import Layout from "@/components/layout";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider defaultTheme="system" storageKey="vite-react-theme">
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  );
} 