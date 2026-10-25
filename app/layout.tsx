import type { Metadata } from 'next';
import { Provider } from '@/components/provider';
import './global.css';

export const metadata: Metadata = {
  title: { default: '芥子环技术文档', template: '%s | 芥子环技术文档' },
  description: '芥子环的使用指南与技术文档。',
  icons: { icon: '/docs/favicon-32x32.png' },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="zh-CN" suppressHydrationWarning>
      <body className="flex min-h-screen flex-col">
        <Provider>{children}</Provider>
      </body>
    </html>
  );
}
