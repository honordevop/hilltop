import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/context/ThemeContext";
import Navbar from "@/components/navbar/Navbar";

const inter = Inter({ subsets: ["latin"] });
const space_grotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space_grotesk",
});

export const metadata = {
  title: "HomePage",
  description: "Hilltop Global Oil and Gas Solution Intl Ltd website homepage",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} ${space_grotesk.variable} `}>
        <ThemeProvider>
          <div>
            <Navbar />
            {children}
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
