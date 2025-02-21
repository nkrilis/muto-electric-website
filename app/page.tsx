import { Link } from "@heroui/link";
import { Snippet } from "@heroui/snippet";
import { Code } from "@heroui/code";
import { button as buttonStyles } from "@heroui/theme";
import { Image } from "@heroui/image";
import NextImage from "next/image";

import logo from "../public/images/logo.png";

import { siteConfig } from "@/config/site";
import { title, subtitle } from "@/components/primitives";
import { GithubIcon } from "@/components/icons";

export default function Home() {
  return (
    <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
      <div className="inline-block max-w-xl text-center justify-center">
        <span className={title()}>
          Your Trusted Local Electrician for All Your&nbsp;
        </span>
        <span className={title({ color: "red" })}>Electrical&nbsp;</span>
        <br />
        <span className={title()}>Needs!</span>
        <div className={subtitle({ class: "mt-4" })}>
          Offering reliable, safe, and expert electrical services for homes and
          businesses.
        </div>
      </div>

      <div className="flex gap-3">
        <Link
          isExternal
          className={buttonStyles({
            color: "primary",
            radius: "full",
            variant: "shadow",
          })}
          href={siteConfig.links.docs}
        >
          Request a Free Quote
        </Link>
      </div>
      <div>
        <br />
        <Image
          alt="HeroUI hero Image"
          as={NextImage}
          height={250}
          src={logo.src}
          width={300}
        />
      </div>
    </section>
  );
}
