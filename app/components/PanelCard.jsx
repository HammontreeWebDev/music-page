export default function PanelCard({ children, className = "", as: Tag = "div", ...props }) {
  return (
    <Tag
      className={`panel-shine rounded-3xl border border-white/10 bg-[var(--music-wine)] ${className}`}
      {...props}
    >
      {children}
    </Tag>
  );
}
