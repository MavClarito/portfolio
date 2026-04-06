import type { Metadata } from "next";
import { Inter, Roboto } from "next/font/google";
import "./globals.css";
import ChatWidget from "@/components/ChatWidget";

const inter = Inter({
  variable: "--font-inter-var",
  subsets: ["latin"],
  weight: ["400", "700"],
});

const roboto = Roboto({
  variable: "--font-roboto-var",
  subsets: ["latin"],
  weight: ["500", "600"],
});

export const metadata: Metadata = {
  title: "Vincent Maverick Clarito",
  description: "Personal portfolio of Maverick, a Computer Engineer",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${roboto.variable} antialiased bg-black`}
      >
        {/* disable automatic scroll restoration & ensure top position before React hydrates */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              if (history.scrollRestoration) {
                history.scrollRestoration = 'manual';
              }
              window.scrollTo(0,0);
              // clear any fragment (hash) that might jump to a section
              if (window.location.hash) {
                history.replaceState(null, '', window.location.pathname + window.location.search);
              }
            `,
          }}
        />
        {children}
        <ChatWidget />
      </body>
    </html>
  );
}
