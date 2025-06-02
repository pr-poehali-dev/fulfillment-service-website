import { LucideIcon, icons } from "lucide-react";

interface IconProps {
  name: string;
  size?: number;
  className?: string;
  fallback?: string;
}

const Icon = ({
  name,
  size = 24,
  className = "",
  fallback = "CircleAlert",
}: IconProps) => {
  const IconComponent = icons[name as keyof typeof icons] as LucideIcon;
  const FallbackIcon = icons[fallback as keyof typeof icons] as LucideIcon;

  if (!IconComponent) {
    return <FallbackIcon size={size} className={className} />;
  }

  return <IconComponent size={size} className={className} />;
};

export default Icon;
