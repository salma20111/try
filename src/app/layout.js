import Navbar from "@/Components/Navbar/Navbar";
import "./globals.css";
import { ThemeProvider } from "@/context/ThemeContext";
import { UserProvider } from "@/context/UserContext";

export const metadata = {
  title: "Mo Blog",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="dark">
      <body suppressHydrationWarning={true}>
       <UserProvider>
         <ThemeProvider>
         <Navbar />
         <main className="main">
         <section className="main-section">{children}</section>
         </main>
       </ThemeProvider>
       </UserProvider>
      </body>
    </html>
  );
}
