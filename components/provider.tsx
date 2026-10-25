'use client';
import SearchDialog from '@/components/search';
import { RootProvider } from '@fumadocs/base-ui/provider/next';
import { type ReactNode } from 'react';

export function Provider({ children }: { children: ReactNode }) {
  return (
    <RootProvider
      search={{ SearchDialog }}
      i18n={{
        locale: 'zh-CN',
        defaultLanguage: 'zh-CN',
        translations: {
          'Search(search trigger)': '搜索',
          'Open Search(search trigger)(aria-label)': '打开搜索',
          'Search(search dialog)': '搜索',
          'Close Search(search dialog)(aria-label)': '关闭搜索',
          'No results found(search dialog)': '没有结果',
          'On this page(table of contents)': '本页目录',
          'Previous Page(pagination)': '上一页',
          'Next Page(pagination)': '下一页',
          'Edit on GitHub(edit page)': '在 GitHub 编辑',
          'Last updated on(page footer)': '更新于',
        },
      }}
    >
      {children}
    </RootProvider>
  );
}
