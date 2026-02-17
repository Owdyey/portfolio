import { Button } from "@/components/ui/button";
import { NavigationLinks as navlinks } from "@/constants/navigation-link";

export default function Header() {
  return (
    <div className="flex justify-between p-5 border-b">
      <p className="font-bold text-lg">laurence.dev</p>
      <div className="flex flex-row gap-6 items-center">
        {navlinks.map(({ label, url }) => (
          <p className="text-sm font-light" key={label.toLowerCase()}>
            {label}
          </p>
        ))}
      </div>
      <Button size={"lg"}>Get in Touch</Button>
    </div>
  );
}
