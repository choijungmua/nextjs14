"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navigation() {
  const path = usePathname();
  return (
    <nav>
      <ul>
        <li>
          <Link href="/">Home</Link> ㅜㅠ
          {path === "/" ? "Home" : "No"}
        </li>
        <li>
          <Link href="/about-us">About Us</Link>
          {path === "/about-us" ? "About-us" : "No"}
          Recap
        </li>
      </ul>
    </nav>
  );
}
