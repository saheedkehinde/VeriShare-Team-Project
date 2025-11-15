"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import React from "react";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  asLink?: false;
};

type LinkProps = React.AnchorHTMLAttributes<HTMLAnchorElement> & {
  asLink: true;
  href: string;
};

type Props = ButtonProps | LinkProps;

export default function AnimatedButton(props: Props) {
  const { children, asLink = false, className = "", ...rest } = props;

  const base =
    "rounded-full px-6 py-3 text-sm font-semibold text-black bg-gradient-to-r from-cyan-300 to-indigo-400 hover:from-cyan-200 hover:to-indigo-300 shadow-[0_0_40px_#22d3ee66]";

  const MotionButton = motion.button;
  const MotionAnchor = motion.a;

  if (asLink) {
    const { href, ...linkProps } = rest as LinkProps;
    return (
      <Link href={href} legacyBehavior>
        <MotionAnchor
          whileHover={{ y: -2, scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className={`${base} ${className}`}
          {...linkProps}
        >
          {children}
        </MotionAnchor>
      </Link>
    );
  }

  return (
    <MotionButton
      whileHover={{ y: -2, scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className={`${base} ${className}`}
      {...(rest as ButtonProps)}
    >
      {children}
    </MotionButton>
  );
}
