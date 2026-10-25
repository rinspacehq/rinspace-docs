import type { BaseLayoutProps } from 'fumadocs-ui/layouts/shared';
import { appName, repositoryUrl } from './shared';

export function baseOptions(): BaseLayoutProps {
  return {
    nav: {
      title: (
        <span className="docs-brand-title">
          <img className="docs-brand-mark" src="/docs/assets/brand/rinspace-mark-128.png" alt="" width="24" height="24" />
          <span>{appName}</span>
        </span>
      ),
    },
    githubUrl: repositoryUrl,
  };
}
