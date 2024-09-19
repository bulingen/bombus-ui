import Link from "next/link";
import { ReactNode } from "react";

const Card = ({ href, children }: { href: string; children: ReactNode }) => {
  return (
    <Link
      className="bg-white rounded-xl border border-outline hover:border-primary py-md px-xl flex justify-center"
      href={href}
    >
      {children}
    </Link>
  );
};

export default function Home() {
  return (
    <div className="p-md mx-auto mt-[200px] flex flex-col space-y-sm max-w-prose">
      <Card href="/components/buttons">Buttons</Card>
      <Card href="/components/alerts">Alerts</Card>
      <Card href="/components/toggle">Toggle</Card>
      <Card href="/palette">Palette generator</Card>
    </div>
  );
}
