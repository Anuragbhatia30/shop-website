import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";

export const metadata: Metadata = {
   title: {
    default: "Kamal Electric Trading Co.",
    template: "%s | Kamal Electric Trading Co.",
  },
  description:
    "Kamal Electric Trading Co. is a trusted manufacturer of LT Panels and provider of professional AC motor winding and electrical repair services.",

  keywords: [
    "LT Panel Manufacturer",
    "Motor Winding Repair",
    "Electrical Trading Company",
    "Industrial Electrical Services",
    "Kamal Electric Trading",
  ],

  robots: {
    index: true,
    follow: true,
  },

  // verification: {
  //   google: "9Sd1oqPl3",
  // },

  openGraph: {
    title: "Kamal Electric Trading Co.",
    description:
      "Leading LT Panel Manufacturing & Motor Winding Repair Services",
    url: "https://kamal-electrical-trading.vercel.app",
    siteName: "Kamal Electric Trading Co.",
    locale: "en_IN",
    type: "website",
  },

  alternates: {
    canonical: "https://kamal-electrical-trading.vercel.app",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <meta
        name="google-site-verification"
        content="9Sd1oqPl3Zo7tPH__l6_XR2hVdMh5NIfcvQIQvph514"
      />
      <body
      // className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}
