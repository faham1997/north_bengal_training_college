import Link from "next/link";

export default function NotFound() {
  return (
    <main className="text-center mt-5">
        <h2 className="text-3xl font-bold">There was a problem.</h2>
        <p>We could not find the page you were looking for.</p>
        <p>Go back to <Link href='/' className="underline font-bold">Homepage</Link></p>
    </main>
  )
}