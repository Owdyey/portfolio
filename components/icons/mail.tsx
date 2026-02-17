import { cn } from "@/lib/utils";
import { SVGIconProps } from "@/types/icon";

export default function MailIcon({ className, ...props }: SVGIconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={props.width || "24"}
      height={props.height || "24"}
      viewBox="0 0 24 24"
      fill={props.fill || "none"}
      stroke={props.stroke || "currentColor"}
      strokeWidth={props.strokeWidth || "2"}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={cn("lucide lucide-mail-icon lucide-mail", className)}
      {...props}
    >
      <path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7" />
      <rect x="2" y="4" width="20" height="16" rx="2" />
    </svg>
  );
}
