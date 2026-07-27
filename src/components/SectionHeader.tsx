import FadeIn from './FadeIn';

interface SectionHeaderProps {
  tag: string;
  title: string | React.ReactNode;
}

export default function SectionHeader({ tag, title }: SectionHeaderProps) {
  return (
    <FadeIn>
      <div className="section-header">
        <span className="section-tag">{tag}</span>
        <div className="section-line" />
        <h2 className="section-title">{title}</h2>
      </div>
    </FadeIn>
  );
}
