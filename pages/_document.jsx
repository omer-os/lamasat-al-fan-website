import Document, { Html, Head, Main, NextScript } from "next/document";
class MyDocument extends Document {
  render() {
    console.log(Document);
    return (
      <Html lang="en">
        <Head>
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link
            rel="preconnect"
            href="https://fonts.gstatic.com"
            crossOrigin={1}
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Tajawal:wght@300;800&display=swap"
            rel="stylesheet"
          />

          <meta name="title" content="Lamasat Al Fan" />
          <meta name="robots" content="index, follow" />
          <meta
            name="description"
            content="A company specializing in designs, engineering consultancy, and implementation such as buildings, complexes, high-rise buildings, roads, and urban des"
          />
          <meta name="author" content="cineon agency" />
          <meta
            name="keywords"
            content="engineering consultancy, architechture, building"
          />
          <meta property="og:title" content="Lamasat Al Fan" />
          <meta
            property="og:site_name"
            data-page-subject="true"
            content="Lamasat Al Fan"
          />
          <meta
            property="og:url"
            content="https://lamasat-al-fan-website.vercel.app/"
          />
          <meta
            property="og:description"
            name="description"
            content="A company specializing in designs, engineering consultancy, and implementation such as buildings, complexes, high-rise buildings, roads, and urban des"
          />
          <meta
            property="og:image"
            content="https://images.unsplash.com/photo-1669934378104-5336b59afd93?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
          />
          <meta property="twitter:card" content="summary_large_image" />
          <meta
            property="twitter:url"
            content="https://lamasat-al-fan-website.vercel.app/"
          />
          <meta
            name="twitter:image"
            content="https://images.unsplash.com/photo-1669934378104-5336b59afd93?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
          />
          <meta name="twitter:title" content="Lamasat Al Fan" />
          <meta
            name="twitter:description"
            content="A company specializing in designs, engineering consultancy, and implementation such as buildings, complexes, high-rise buildings, roads, and urban des"
          />
        </Head>
        <body dir="rtl">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
