import Link from 'next/link';

export default function FirstPost() {
  return (
    <>
      <h1>Welcome to the first page</h1>
      <h2><Link href="/">Return Home</Link></h2>
    </>
  )
}