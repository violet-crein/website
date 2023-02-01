import Head from "next/head";
import Link from "next/link";

export default function NotFound() {
  return (
    <>
      <Head>
        <title>404</title>
      </Head>
      <h1 className="container mx-auto p-10 max-w-md">
        <div className="flex flex-col justify-center items-center align-center pt-[20vh] text-center">
          <h1 className="text-8xl text-ctp-mauve font-bold ">404</h1>
          <p className="mono">
            Looks like this page doesn&apos;t exist :c
            Would you like to return <Link href="/" className="text-mauve hover:text-pink navanim">home</Link>?
          </p>
        </div>
      </h1>
    </>
  );
}