import { Inter } from "next/font/google";
import "./globals.css";
import { StoreProvide } from "@/redux/store/StoreProvide";

const inter = Inter({ subsets: ["latin"] });
export const metadata = {
  title: "Product App",
  description: "Yogpath Assignment",
};

export default function RootLayout({ children }) {
  return (
    <StoreProvide>
      <html lang="en">
        <body className={inter.className}>{children}</body>
      </html>
    </StoreProvide>
  );
}
