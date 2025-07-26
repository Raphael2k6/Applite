import Head from "next/head";

export default function Meta({
  title = "Hiraeth",
  description = "...",
  rel = "",
  href = "",
  name = "",
  content = "",
}) {
  return (
    <Head>
      <meta charSet="utf-8" />
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name={name} content={content} />
      <link rel="icon" href="/favicon.ico" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel={rel} href={href}></link>
      <meta name="robots" content="index, follow" />
    </Head>
  );
}
