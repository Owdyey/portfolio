import { Copyright } from "lucide-react";

export default function Footer() {
  return (
    <div className="flex items-center gap-1 justify-center py-5 border-t text-gray-500">
      <Copyright size={12} />
      <p className="text-xs font-light">
        2026. Laurence Dev. All rights reserved.
      </p>
    </div>
  );
}
