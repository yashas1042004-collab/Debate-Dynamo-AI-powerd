import '../styles/globals.css';

import { ReactNode } from 'react';
import Script from 'next/script';

export const metadata = {
  title: 'Debate Dynamo',
  description: 'AI Debate Coach',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Script 
          src="https://code.responsivevoice.org/responsivevoice.js" 
          strategy="beforeInteractive" 
        />
        <main className="max-w-3xl mx-auto p-4 min-h-screen">
          {children}
        </main>
      </body>
    </html>
  );
}