import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import { Providers } from "@/components/Providers";
import { COMPANY } from "@/data/content";
import "./globals.css";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: `${COMPANY.displayName} Online Store`,
    template: `%s – ${COMPANY.displayName}`,
  },
  description:
    "Thoughtfully designed products for bedtime. Makers of the NS01 lamp, a focused bedside reading light.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${poppins.variable} ${inter.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col bg-canvas text-paper">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
