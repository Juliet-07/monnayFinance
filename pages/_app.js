import React, { useEffect } from "react";
import "../styles/globals.css";
import "../styles/styles.css";
// import "bootstrap/dist/css/bootstrap.css";
import "materialize-css/dist/css/materialize.min.css";
import Navbar from "../components/navbar";
import { SessionProvider } from "next-auth/react";
import { QueryClientProvider, QueryClient } from "react-query";

const queryClient = new QueryClient();

function MyApp({ Component, pageProps: { session, ...pageProps } }) {
  useEffect(() => {
    // import("bootstrap/dist/js/bootstrap");
    import("materialize-css/dist/js/materialize");
  });
  return (
    <QueryClientProvider client={queryClient}>
      <SessionProvider session={session}>
        {/* <Navbar /> */}
        <Component {...pageProps} />
      </SessionProvider>
    </QueryClientProvider>
  );
}

export default MyApp;
