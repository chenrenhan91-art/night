import Link from "next/link";

export default function NotFound() {
  return (
    <div className="wrapper py-24 text-center">
      <h1 className="heading mb-4 text-[36px]">Page not found</h1>
      <p className="mb-8 text-muted">This page does not exist.</p>
      <Link href="/" className="btn btn-outline-coral">
        Back home
      </Link>
    </div>
  );
}
