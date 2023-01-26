import "../styles/globals.css";
import Head from "next/head";
import favicon from "../../public/favicon.ico";

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <Head>
        <title>Game Glide | Portfolio</title>
        <meta charSet='UTF-8' />
        <meta
          name='description'
          content="Game Glide's portfolio, projects and other goofiness"
        />
        <meta name='keywords' content='Programming, Portfolio, Languages' />
        <meta name='author' content='Game Glide' />
        <meta name='viewport' content='width=device-width, initial-scale=1.0' />
        {/* Next Js is a cunt use favicon.src instead of actual path */}
        <link rel='icon' href={favicon.src} type='image/x-icon' />
        <link rel='manifest' href='/site.webmanifest' />
        <link
          rel='apple-touch-icon'
          sizes='180x180'
          href='/static/images/apple-touch-icon.png'
        />
        <link
          rel='icon'
          type='image/png'
          sizes='32x32'
          href='/static/images/favicon-32x32.png'
        />
        <link
          rel='icon'
          type='image/png'
          sizes='16x16'
          href='/static/images/favicon-16x16.png'
        />
      </Head>
      <body>
        <Component {...pageProps} />
      </body>
    </div>
  );
}

export default MyApp;
