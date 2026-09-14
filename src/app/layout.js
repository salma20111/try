import Navbar from "@/Components/Navbar/Navbar";
import "./globals.css";
import { ThemeProvider } from "@/context/ThemeContext";

export const metadata = {
  title: "Mo Blog",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="dark">
      <body suppressHydrationWarning={true}>
       <ThemeProvider>
         <Navbar />
         <main className="main">
         <section className="main-section">{children}</section>
         </main>
       </ThemeProvider>
      </body>
    </html>
  );
}
