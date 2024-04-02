"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navigation() {
  const path = usePathname();
  return (
    <nav>
      <ul>
        <li>
          <Link href="/">Home</Link>
          {path === "/" ? "Home" : "★"}
        </li>
        <li>
          <Link href="/about-us">About Us</Link>
          {path === "/about-us" ? "About-us" : "★"}
        </li>
      </ul>
    </nav>
  );
}
