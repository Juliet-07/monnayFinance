import React, { useEffect } from "react";
import "../styles/globals.css";
import "materialize-css/dist/css/materialize.min.css";
// import "bootstrap/dist/css/bootstrap.css"

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    // import("bootstrap/dist/js/bootstrap")
    import("materialize-css/dist/js/materialize");
  });
  return <Component {...pageProps} />;
}

export default MyApp;
