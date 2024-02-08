import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/context/ThemeContext";
import Navbar from "@/components/navbar/Navbar";
import Head from "next/head";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });
const space_grotesk = Space_Grotesk({
  subsets: ["latin"],
  // variable: "--font-space_grotesk",
});

export const metadata = {
  title: "HomePage",
  description: "Hilltop Global Oil and Gas Solutions Intl Ltd website homepage",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Dancing+Script:wght@400..700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <body className={`${inter.className} ${space_grotesk.className} `}>
        <ThemeProvider>
          <div>
            <Navbar />
            <div className="mt-[58px]">{children}</div>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
