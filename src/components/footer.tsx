"use client";

import BlurFade from "@/components/magicui/blur-fade";
import { DATA } from "@/data/resume";
import Link from "next/link";

interface FooterProps {
  delay: number;
}

export function Footer({ delay }: FooterProps) {
  return (
    <footer className="mt-16 py-8 border-t border-border/50">
      <BlurFade delay={delay}>
        <div className="flex items-center justify-center text-sm text-muted-foreground">
          <span>© {new Date().getFullYear()}&nbsp;&nbsp;•&nbsp;&nbsp;</span>
          <Link 
            href={`mailto:${DATA.contact.email}`}
            className="hover:text-foreground transition-colors"
          >
            {DATA.contact.email}
          </Link>
        </div>
      </BlurFade>
    </footer>
  );
}
