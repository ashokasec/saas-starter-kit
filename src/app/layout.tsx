import type { Metadata } from "next";
import "./globals.css";
import { app, team } from "@/lib/config/app";
import { idJsonObjectHTML, seo } from "@/lib/config/seo";
import { inter } from "@/lib/fonts";
import Script from "next/script";

export const metadata: Metadata = {
  title: seo.title,
  description: seo.description,
  authors: [
    {
      name: team.founder.name,
      url: team.founder.social.website,
    },
  ],
  alternates: {
    canonical: app.canonicalUrl,
  },
  openGraph: {
    type: "website",
    url: app.publicUrl,
    title: seo.title,
    description: seo.description,
    siteName: app.name,
    images: [
      {
        url: "https://example.com/path/to/your/image.jpg", // Replace with your actual image URL
        alt: `${app.name} Open Graph Image`,
      },
    ],
  },
  keywords: ["saas starter kit"],
  publisher: team.founder.name,
  creator: team.founder.name,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className="antialiased min-h-screen overflow-x-hidden"
        style={inter.style}
      >
        <Script
          id="jsonld"
          type="application/ld+json"
          // biome-ignore lint/security/noDangerouslySetInnerHtml: <explanation>
          dangerouslySetInnerHTML={idJsonObjectHTML}
        />
        {children}
      </body>
    </html>
  );
}
