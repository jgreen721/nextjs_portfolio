import "../styles/globals.css";
import { Navbar } from "../components";

function MyApp({ Component, pageProps }) {
  return (
    <div className="app">
      <Navbar />
      <main>
        <Component {...pageProps} />
      </main>
    </div>
  );
}

export default MyApp;
