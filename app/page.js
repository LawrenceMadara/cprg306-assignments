import Link from "next/link";

export default function Home() {
  return (
    <main>
      <h1>CPRG 306:Web Development 2 - Assignments</h1>
      <Link href = "./week-2/">Week 2 Assignments</Link>
      <Link href = "./week-3/" className="block">Week 3 Assignments</Link>
      <Link href = "./week-4/" className="block">Week 4 Assignments</Link>
      <Link href = "./week-5/" className="block">Week 5 Assignments</Link>
      <Link href = "./week-6/" className="block">Week 6 Assignments</Link>
      <Link href = "./week-7/" className="block">Week 7 Assignments</Link>
    </main>
  );
}
