import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Playfair_Display } from "next/font/google";
import "./globals.css";

const sansFont = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
  weight: ["300", "400", "500", "600", "700", "800"],
});

const serifFont = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-serif",
  display: "swap",
  style: ["normal", "italic"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://decor4adore.com"),
  title: "Decor 4 Adore | Incarnate Your Imagination - Luxury Interior Design Patna",
  description:
    "Decor 4 Adore is Patna's premier luxury interior design studio specializing in bespoke home renovations, modular kitchens, 3D visualization, wardrobe design, false ceiling, and turnkey architectural spaces. 4.6★ Rated.",
  keywords: [
    "Decor 4 Adore",
    "interior designer Patna",
    "luxury interior design Bihar",
    "modular kitchen Patna",
    "3D interior design Patna",
    "false ceiling lighting Patna",
    "turnkey home renovation Fraser Road Patna",
    "wardrobe design Patna",
    "Vaastu interior design Patna",
  ],
  authors: [{ name: "Decor 4 Adore" }],
  openGraph: {
    title: "Decor 4 Adore | Luxury Interior Design Studio",
    description: "Incarnate Your Imagination - Bespoke Interior Design & Turnkey Architecture in Patna.",
    url: "https://decor4adore.com",
    siteName: "Decor 4 Adore",
    images: [
      {
        url: "/1000040445.jpg",
        width: 800,
        height: 800,
        alt: "Decor 4 Adore Logo",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  icons: {
    icon: "/1000040445.jpg",
    apple: "/1000040445.jpg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${sansFont.variable} ${serifFont.variable} scroll-smooth dark`}>
      <head>
        <link rel="icon" href="/1000040445.jpg" />
      </head>
      <body className="min-h-screen bg-[#0E0C0D] text-[#F4ECE4] font-sans selection:bg-[#FF5E00] selection:text-white antialiased">
        {children}
      </body>
    </html>
  );
}
