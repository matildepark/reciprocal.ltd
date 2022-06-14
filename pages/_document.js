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
            content="https://s3.us-east-1.amazonaws.com/haddefsigwen1/reciprocal/2022.5.23..13.45.18-twit-card.png"
          />
          <link
            rel="icon"
            href="https://s3.us-east-1.amazonaws.com/haddefsigwen1/reciprocal/2022.5.20..19.52.50-B137D4AA-DA9E-4B07-98CE-C001C576C7CA_1_201_a.jpeg"
          />
          <link
            rel="preload"
            as="image"
            href="https://s3.us-east-1.amazonaws.com/haddefsigwen1/reciprocal/2022.6.05..05.05.10-collage1.jpg"
          />
          <link
            rel="preload"
            as="image"
            href="https://s3.us-east-1.amazonaws.com/haddefsigwen1/reciprocal/2022.6.08..08.34.31-collage2.jpg"
          />
          <link
            rel="preload"
            as="image"
            href="https://s3.us-east-1.amazonaws.com/haddefsigwen1/reciprocal/2022.6.07..21.55.14-collage3.jpg"
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
