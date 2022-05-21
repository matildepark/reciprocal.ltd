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
            content="Reciprocal Ltd. is an interactive design and development studio."
          />
          <meta
            name="twitter:image"
            content="https://s3.us-east-1.amazonaws.com/haddefsigwen1/reciprocal/2022.5.20..19.31.08-twit.png"
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
