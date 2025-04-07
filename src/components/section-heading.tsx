'use client';

import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  align?: 'left' | 'center' | 'right';
  tag?: string;
}

const SectionHeading = ({
  title,
  subtitle,
  align = 'left',
  tag
}: SectionHeadingProps) => {
  const alignmentClasses = {
    left: 'text-left',
    center: 'text-center',
    right: 'text-right'
  };

  return (
    <div className={`${alignmentClasses[align]} mb-8`}>
      {tag && (
        <span className="inline-block text-sm font-medium text-primary mb-2">
          {tag}
        </span>
      )}
      <h2 className="text-3xl md:text-4xl font-bold mb-4">{title}</h2>
      {subtitle && (
        <p className="text-muted-foreground max-w-2xl mx-auto">
          {subtitle}
        </p>
      )}
    </div>
  );
};

export default SectionHeading;
