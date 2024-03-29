import {
  Navbar as NextUINavbar,
  NavbarItem,
} from "@nextui-org/navbar";
import { Link } from "@nextui-org/link";

import { siteConfig } from "@/config/site";
import { TwitterIcon, GithubIcon, DiscordIcon } from "@/components/icons";
import { FaMandalorian } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";

export const Navbar = () => {
  return (
    <NextUINavbar maxWidth="xl" position="static" className="z-50">
      <div className="flex justify-between w-full h-full items-center ">
        <div className="logo flex w-2/3  ">
          <FaMandalorian size={36} />

        </div>

        <div className="left">
          <NavbarItem className="hidden sm:flex gap-2">
            <Link
              isExternal
              href={siteConfig.links.twitter}
              aria-label="Twitter"
            >
              <TwitterIcon className="text-default-500" />
            </Link>
            <Link
              isExternal
              href={siteConfig.links.instagram}
              aria-label="Instagram"
            >
              <RiInstagramFill className="text-default-500" size={24} />
            </Link>
            <Link isExternal href={siteConfig.links.github} aria-label="Github">
              <GithubIcon className="text-default-500" />
            </Link>
          </NavbarItem>
        </div>
      </div>
    </NextUINavbar>
  );
};
