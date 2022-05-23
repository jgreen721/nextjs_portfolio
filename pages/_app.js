import "../styles/globals.css";
import { Navbar } from "../components";

function MyApp({ Component, pageProps }) {
  return (
    <div className="app">
      <Navbar />
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
