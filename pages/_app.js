import Head from "next/head";
import "../public/style.css";
import { ThemeProvider } from "@emotion/react";
import theme from "./src/theme/index.js";


export default ({ Component, pageProps }) => {
  return (
    <>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700;900&display=swap" rel="stylesheet" />
      </Head>
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
};


// creating _app.js causes rendering _app.js for all components.
// example: to apply global styles to I created style.css and imported it in _app.js