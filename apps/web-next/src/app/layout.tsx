import type { Metadata } from 'next';

import '@gob/styles/fonts.css';
import '@gob/styles/base.css';
import '@gob/styles/theme.css';
import '@gob/styles/utilities.css';


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
