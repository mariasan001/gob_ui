import type { Metadata } from 'next';

import '@mariasan001/styles/fonts.css';
import '@mariasan001/styles/base.css';
import '@mariasan001/styles/theme.css';
import '@mariasan001/styles/utilities.css';


export const metadata: Metadata = {
  title: 'Gob UI',
  description: 'Experimento: Web Components + tokens',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" /* data-gob-theme="dark" */>
      <body>
        {children}
      </body>
    </html>
  );
}
