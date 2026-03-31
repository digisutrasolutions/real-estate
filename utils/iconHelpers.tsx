import * as Icons from 'lucide-react';

type IconName = keyof typeof Icons;

export function getIcon(name: IconName) {
  return Icons[name] as React.ComponentType<{ className?: string }>;
}

export function renderIcon(name: IconName, className: string = '') {
  const Icon = getIcon(name);
  return <Icon className={className} />;
}
