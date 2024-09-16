import Link from "next/link";

export default function Home() {
  return (
    <div>
      <Link href="/components/buttons">Buttons</Link>
      <Link href="/components/alerts">Alerts</Link>
    </div>
  );
}
