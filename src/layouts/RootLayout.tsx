import { Outlet, ScrollRestoration } from "react-router-dom";
import { Footer } from "../components/Footer";
import { Nav } from "../components/Nav";

export function RootLayout() {
  return (
    <div className="flex min-h-screen flex-col">
      <Nav />
      <main id="main" className="flex-1">
        <Outlet />
      </main>
      <Footer />
      <ScrollRestoration />
    </div>
  );
}
