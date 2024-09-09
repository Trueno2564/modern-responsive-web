import type { Metadata } from "next";
import { Bai_Jamjuree} from "next/font/google";
import "./globals.css";
import Footer from "@/components/footer/Footer";

const Bai = Bai_Jamjuree({
  subsets: ["latin"],
  weight: ['400', '500', '700'],
  display: 'swap'
});

export const metadata: Metadata = {
  title: "Next JS SPA",
  description: "Crear una SPA con Next JS 14 y Tailwind CSS",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body
        className={`${Bai.className} antialiased`}>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
