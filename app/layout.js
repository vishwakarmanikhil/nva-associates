import "./globals.css";
import ThemeProviderWrapper from "./providers/theme-provider";
import { AntdRegistry } from "@ant-design/nextjs-registry";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import FloatingButton from "@/components/layout/floating-button";
import { localBusinessSchema } from "@/components/static/localBusinessSchema";

export const metadata = {
  metadataBase: new URL("https://www.nvaassociates.com"),
  title: {
    default: "NVA Associates | Accounting & Compliance Services",
    template: "%s | NVA Associates",
  },
  description:
    "Professional accounting, GST, income tax, MSME and compliance services for individuals and businesses in India.",
  keywords: [
    "Chartered Accountant",
    "GST Filing",
    "Income Tax Returns",
    "Accounting Services",
    "MSME Registration",
  ],
  openGraph: {
    title: "NVA Associates",
    description:
      "Trusted accounting & compliance services for businesses and individuals.",
    url: "https://www.nvaassociates.com",
    siteName: "NVA Associates",
    locale: "en_IN",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <AntdRegistry>
          <ThemeProviderWrapper>
            <Header />
            
            <script
              type="application/ld+json"
              dangerouslySetInnerHTML={localBusinessSchema}
            />

            <main>{children}</main>
            <FloatingButton />
            <Footer />
          </ThemeProviderWrapper>
        </AntdRegistry>
      </body>
    </html>
  );
}