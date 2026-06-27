import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: "Practical Legal Drafting & Corporate Law Masterclass | Lawctopus",
  description: "Learn practical legal drafting, commercial contract negotiation, and dispute resolution from industry experts. Gain job-ready law firm skills with verified certificates.",
  keywords: [
    "legal drafting",
    "contract drafting course",
    "corporate law training",
    "commercial contracts",
    "negotiation skills",
    "law students internship",
    "Lawctopus Online Academy"
  ],
  authors: [{ name: "Lawctopus Online Academy" }],
  creator: "Lawctopus",
  publisher: "Lawctopus",
  metadataBase: new URL("https://academy.lawctopus.com"),
  alternates: {
    canonical: "/contract-drafting-masterclass",
  },
  openGraph: {
    title: "Practical Legal Drafting & Corporate Law Masterclass | Lawctopus",
    description: "Master real-world commercial drafting, negotiation, and corporate compliance alongside elite partners and legal advisors.",
    url: "https://academy.lawctopus.com/contract-drafting-masterclass",
    siteName: "Lawctopus Online Academy",
    images: [
      {
        url: "/images/logo.png",
        width: 800,
        height: 600,
        alt: "Lawctopus Practical Contract Drafting Masterclass",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Practical Legal Drafting & Corporate Law Masterclass | Lawctopus",
    description: "Learn practical contract drafting and risk analysis directly from seasoned legal partners.",
    images: ["/images/logo.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#F4A300",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body className="min-h-screen bg-background text-text antialiased">
        {children}
      </body>
    </html>
  );
}
