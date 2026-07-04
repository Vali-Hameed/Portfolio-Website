import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Vali Hameed | Software Engineer Portfolio",
  description: "Portfolio of Vali Hameed, a Lancaster University Computer Science student building full-stack systems with Next.js, Java, Python, and applied machine learning.",
  keywords: [
    "Vali Hameed",
    "Software Engineer",
    "Full-Stack Developer",
    "Next.js Portfolio",
    "Java",
    "Python",
    "Machine Learning",
    "Lancaster University"
  ],
  openGraph: {
    title: "Vali Hameed | Software Engineer Portfolio",
    description: "Full-stack engineering projects spanning web apps, backend systems, and machine learning services.",
    url: "https://www.vali-hameed.com",
    siteName: "Vali Hameed Portfolio",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Vali Hameed | Software Engineer Portfolio",
    description: "Full-stack engineering projects spanning web apps, backend systems, and machine learning services."
  },
  icons: {
    icon: "/icon.svg",
  },
  verification: {
    google: process.env.GOOGLE_SITE_VERIFICATION,
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
