import FacebookIcon from "@/components/icons/facebook";
import MailIcon from "@/components/icons/mail";
import { SVGIconProps } from "@/types/icon";
import { ComponentProps, ComponentType, ReactNode } from "react";

type Socials = {
  icon: ComponentType<SVGIconProps>;
  url: string;
  label: string;
  color: string;
};
export const Socials: Socials[] = [
  {
    icon: FacebookIcon,
    url: "https://www.facebook.com/share/1846GzNzK9/",
    label: "facebook",
    color: "blue",
  },
  {
    icon: MailIcon,
    url: "johnlaurenceburgos@gmail.com",
    label: "gmail",
    color: "red",
  },
];
