import Link from "next/link";

export default async function Home() {

  return (
    <main>
      <h1>Home Page</h1>
      <Link href={'/map'}>Ver Mapa</Link>
      <br />
      <Link href={'/dashboard'}>Hacer Test</Link>
    </main>
  )
}
