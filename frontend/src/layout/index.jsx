import { Footer, NavbarComponent as Navbar } from "../components";

export default function Layout({ children }) {
  return (
    <section>
      <Navbar />
      <main className="min-h-screen container mx-auto">{children}</main>
      <Footer />
    </section>
  );
}
