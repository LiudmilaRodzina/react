import { Metadata } from 'next';
import './../styles/globals.css';
import Providers from '../services/context/ThemeContext';
import StoreProvider from '../components/StoreProvider';

export const metadata: Metadata = {
  title: 'Products',
  description:
    'RSSchool learning project: React Routing, Redux, Redux Toolkit, RTK Query, Context Api, Next.js Pages Api, Next.js App Router, Remix',
  icons: [
    {
      rel: 'icon',
      type: 'image/x-icon',
      url: '/favicon.ico',
    },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <StoreProvider>
          <Providers>{children}</Providers>
        </StoreProvider>
      </body>
    </html>
  );
}
