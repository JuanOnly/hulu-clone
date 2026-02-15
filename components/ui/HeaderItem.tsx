import Link from 'next/link';
import { ReactNode } from 'react';

interface HeaderItemProps {
  Icon: React.ComponentType<{ className?: string }>;
  title: string;
  href?: string;
}

function HeaderItem({ Icon, title, href }: HeaderItemProps) {
  const content = (
    <div className="flex flex-col items-center cursor-pointer group
    w-12 sm:w-20 hover:text-white">
      <Icon className="h-8 m-1 group-hover:animate-bounce" />
      <p className='opacity-0 group-hover:opacity-100 tracking-widest'>{title}</p>
    </div>
  );

  if (href) {
    return (
      <Link href={href}>
        {content}
      </Link>
    );
  }

  return content;
}

export default HeaderItem;
