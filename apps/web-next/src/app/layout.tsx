import type { Metadata } from 'next';

import '@mariasan001/styles/fonts.css';
import '@mariasan001/styles/base.css';
import '@mariasan001/styles/theme.css';
import '@mariasan001/styles/utilities.css';
import WebComponentsRegistry from './web-components';

export const metadata: Metadata = {
  title: 'Gob UI',
  description:
    'Sistema de diseno institucional Gob UI. Creado por mariasan001.',
  authors: [{ name: 'mariasan001', url: 'https://github.com/mariasan001' }],
  creator: 'mariasan001',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body>
        <WebComponentsRegistry />
        {children}
      </body>
    </html>
  );
}
