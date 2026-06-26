import Navbar from "@/Components/Navbar/Navbar";
import "./globals.css";

export const metadata = {
  title: "Mo Blog",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body suppressHydrationWarning={true}>
        <Navbar />
        <main className="main">
          <section className="main-section">{children}</section>
        </main>
      </body>
    </html>
  );
}
