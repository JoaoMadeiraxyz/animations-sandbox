import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export default function RootLayout({ children }) {
 return (
    <html lang="pt-BR">
      <body className={poppins.className}>{children}</body>
    </html>
  )
}
