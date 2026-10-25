import { source } from '@/lib/source';
import { DocsLayout } from '@fumadocs/base-ui/layouts/spacious';
import { baseOptions } from '@/lib/layout.shared';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <DocsLayout tree={source.getPageTree()} {...baseOptions()}>
      {children}
    </DocsLayout>
  );
}
