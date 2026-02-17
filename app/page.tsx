import FacebookIcon from "@/components/icons/facebook";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Socials as socials } from "@/constants/socials";
import { Download } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
export default function Page() {
  return (
    <div>
      {/* Hero section */}
      <div className="w-1/2 mx-auto  text-center h-[calc(100vh-76px)] grid place-items-center">
        <div className="flex flex-col gap-5">
          <div className="rounded-full mx-auto border-3">
            <Image
              src={"/oj.jpg"}
              width={200}
              height={200}
              alt="image"
              className="rounded-full"
              loading="eager"
            />
          </div>
          <h1 className="text-4xl font-semibold">
            Full-Stack Web Developer building scalable, modern web applications.
          </h1>
          <p className="font-light text-lg text-gray-400 w-2/3 mx-auto">
            I design and develop reliable web applications using modern
            development tools.
          </p>
          <div>
            <Button size={"lg"}>
              <a href="/resume.pdf" download>
                <p>Download Resume</p>
              </a>
              <Download />
            </Button>
          </div>
        </div>
      </div>

      {/* Contact */}
      <div className=" px-25 text-center flex flex-col gap-3 items-center py-12.5">
        <p className="text-3xl font-bold">Ready to start your next project?</p>
        <p className="text-xs text-gray-500">
          I'm open to freelance work, contracts, and frontend or full-stack
          roles.
        </p>
        <div className="flex gap-2">
          {socials.map(({ icon: Icon, url, label, color }) => (
            <Link href={url} key={label} target="_blank">
              <Avatar>
                <AvatarFallback className="bg-gray-100">
                  <Icon width={16} strokeWidth={1} stroke={color} />
                </AvatarFallback>
              </Avatar>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
