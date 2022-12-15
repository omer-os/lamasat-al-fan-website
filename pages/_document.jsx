import Document, { Html, Head, Main, NextScript } from "next/document";
class MyDocument extends Document {
  render() {
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

          <meta name="title" content="Lmsat Architecture" />
          <meta name="robots" content="index, follow" />
          <meta
            name="description"
            content="A company specializing in designs, engineering consultancy, and implementation such as buildings, complexes, high-rise buildings, roads, and urban des"
          />
          <meta name="author" content="Cineon Pictures" />
          <meta
            name="keywords"
            content="engineering consultancy, architechture, building"
          />
          <meta property="og:title" content="Lmsat Architecture" />
          <meta
            property="og:site_name"
            data-page-subject="true"
            content="Lamasat Al Fan"
          />
          <meta
            property="og:url"
            content="https://lmsatarchi.com/"
          />
          <meta
            property="og:description"
            name="description"
            content="A company specializing in designs, engineering consultancy, and implementation such as buildings, complexes, high-rise buildings, roads, and urban des"
          />
          <meta
            property="og:image"
            content="/images/consultancy-service-cover.png"
          />
          <meta property="twitter:card" content="summary_large_image" />
          <meta
            property="twitter:url"
            content="https://lmsatarchi.com/"
          />
          <meta
            name="twitter:image"
            content="/images/consultancy-service-cover.png"
          />
          <meta name="twitter:title" content="Lmsat Architecture" />
          <meta
            name="twitter:description"
            content="A company specializing in designs, engineering consultancy, and implementation such as buildings, complexes, high-rise buildings, roads, and urban des"
          />
        </Head>
        <body dir="auto">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
