import type { BaseLayoutProps } from '@fumadocs/base-ui/layouts/shared';
import { appName, repositoryUrl } from './shared';

export function baseOptions(): BaseLayoutProps {
  return {
    nav: {
      title: (
        <span className="inline-flex items-center gap-2">
          <img className="size-6 object-contain dark:invert" src="/docs/assets/brand/rinspace-mark-128.png" alt="" width="24" height="24" />
          <span className="font-medium">{appName}</span>
        </span>
      ),
    },
    githubUrl: repositoryUrl,
  };
}
