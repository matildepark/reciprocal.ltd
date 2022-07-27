import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html>
        <Head>
          <link
            href="https://fonts.googleapis.com/css2?family=Xanh+Mono&display=swap"
            rel="stylesheet"
          />
          <link href="/fonts.css" rel="stylesheet" />
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:site" content="@reciprocal-ltd" />
          <meta name="twitter:title" content="Reciprocal Ltd." />
          <meta
            name="twitter:description"
            content="Reciprocal is an interactive design and development studio."
          />
          <meta
            name="description"
            content="Reciprocal is an interactive design and development studio based out of Vancouver, Canada. We create interactive media, video games, and provide full development service and management to external clients."
          />
          <meta
            name="twitter:image"
            content="https://rift.reciprocal.ltd/reciprocal.ltd/2022.7.27..21.23.52-card.png"
          />
          <link
            rel="icon"
            href="https://rift.reciprocal.ltd/reciprocal.ltd/2022.7.27..21.24.32-icon.jpeg"
          />
          <link
            rel="preload"
            as="image"
            href="https://rift.reciprocal.ltd/reciprocal.ltd/2022.7.27..21.25.13-collage1.jpg"
          />
          <link
            rel="preload"
            as="image"
            href="https://rift.reciprocal.ltd/reciprocal.ltd/2022.7.27..21.25.19-collage2.jpg"
          />
          <link
            rel="preload"
            as="image"
            href="https://rift.reciprocal.ltd/reciprocal.ltd/2022.7.27..21.25.25-collage3.jpg"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
