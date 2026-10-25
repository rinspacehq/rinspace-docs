import type { BaseLayoutProps } from 'fumadocs-ui/layouts/shared';
import { appName, repositoryUrl } from './shared';

export function baseOptions(): BaseLayoutProps {
  return {
    nav: {
      title: appName,
    },
    githubUrl: repositoryUrl,
  };
}
