import { source } from '@/lib/source';
import { getMDXComponents } from '@/components/mdx';
import { DocsBody, DocsPage, DocsTitle } from 'fumadocs-ui/layouts/docs/page';
import { createRelativeLink } from 'fumadocs-ui/mdx';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';

type Props = { params: Promise<{ slug?: string[] }> };

export default async function Page({ params }: Props) {
  const page = source.getPage((await params).slug);
  if (!page) notFound();
  const MDX = page.data.body;

  return (
    <DocsPage toc={page.data.toc} full={page.data.full} footer={{ enabled: false }}>
      <DocsTitle>{page.data.title}</DocsTitle>
      <DocsBody>
        <MDX components={getMDXComponents({ a: createRelativeLink(source, page) })} />
      </DocsBody>
    </DocsPage>
  );
}

export function generateStaticParams() {
  return source.generateParams();
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const page = source.getPage((await params).slug);
  if (!page) notFound();
  return { title: page.data.title, description: page.data.description };
}
