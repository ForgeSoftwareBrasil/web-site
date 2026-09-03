import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import { WhatsAppButton } from "@/components/WhatsAppButton/WhatsAppButton";
import "./globals.scss";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Forge Software | Software House e Consultoria em Tecnologia teste",
  description:
    "Desenvolvimento de software sob medida, consultoria em TI e transformação digital para empresas que buscam impacto real. Forjamos o futuro do seu negócio com tecnologia.",
  keywords: [
    "software house",
    "consultoria em TI",
    "desenvolvimento de software sob medida",
    "transformação digital",
    "engenharia de software",
    "Forge Software",
  ],
  openGraph: {
    title: "Forge Software | Software House e Consultoria em Tecnologia",
    description:
      "Desenvolvimento de software sob medida, consultoria em TI e transformação digital para empresas que buscam impacto real.",
    type: "website",
    locale: "pt_BR",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="pt-BR" className={poppins.variable}>
      <body>
        {children}
        <WhatsAppButton />
      </body>
    </html>
  );
}
