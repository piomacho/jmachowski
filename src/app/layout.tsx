import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://jerzymachowski.pl"),
  title: {
    default: "Lek.med. Jerzy Robert Machowski – Specjalistyczny Gabinet Chirurgii Dziecięcej i Pracownia Ultrasonografii dla dzieci",
    template: "%s | Lek.med. Jerzy Robert Machowski",
  },
  description:
    "Specjalista Wojewódzki d/s chirurgii dziecięcej dla woj. podkarpackiego. Klinika Chirurgii Dziecięcej i Urologii – Szpital Wojewódzki Nr 2 w Rzeszowie. Kierownik kliniki. Certyfikat PTU dla wykonywania badań u dzieci.",
  alternates: { canonical: "/" },
  icons: {
    icon: [
      { url: '/icon.svg', type: 'image/svg+xml' }
    ],
    apple: [
      { url: '/apple-icon.svg', type: 'image/svg+xml' }
    ],
  },
  openGraph: {
    type: "website",
    url: "https://jerzymachowski.pl/",
    title: "Lek.med. Jerzy Robert Machowski – Chirurg Dziecięcy",
    description:
      "Specjalista Wojewódzki d/s chirurgii dziecięcej dla woj. podkarpackiego. Klinika Chirurgii Dziecięcej i Urologii – Szpital Wojewódzki Nr 2 w Rzeszowie.",
    siteName: "Jerzy Machowski",
    locale: "pl_PL",
  },
  twitter: {
    card: "summary",
    title: "Lek.med. Jerzy Robert Machowski – Chirurg Dziecięcy",
    description:
      "Specjalista Wojewódzki d/s chirurgii dziecięcej dla woj. podkarpackiego.",
  },
  robots: { index: true, follow: true },
  category: "healthcare",
  // Optymalizacje wydajności
  other: {
    'X-DNS-Prefetch-Control': 'on',
    'X-Content-Type-Options': 'nosniff',
    'X-Frame-Options': 'DENY',
    'X-XSS-Protection': '1; mode=block',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pl">
      <head>
        {/* Preload critical resources */}
        <link rel="preload" href="/images/doctor2.jpeg" as="image" />
        <link rel="dns-prefetch" href="//fonts.googleapis.com" />
        <link rel="dns-prefetch" href="//www.google.com" />
        <link rel="dns-prefetch" href="//www.znanylekarz.pl" />
      </head>
      <body>
        <a href="#content" className="skip-link">Przejdź do treści</a>
        <header className="sticky top-0 z-40 bg-white/90 backdrop-blur border-b">
          <div className="container flex items-center justify-between py-3 gap-4">
            <a href="#hero" className="font-semibold text-lg md:text-xl">Lek. med. Jerzy Robert Machowski</a>
            <nav aria-label="Główne">
              <ul className="hidden md:flex gap-6 text-base">
                <li><a href="#o-mnie" className="hover:underline">O mnie</a></li>
                <li><a href="#opinie" className="hover:underline">Opinie</a></li>
                <li><a href="#kontakt" className="hover:underline">Kontakt</a></li>
              </ul>
            </nav>
            <a href="tel:+48178536607" className="btn-primary text-sm">Zadzwoń</a>
          </div>
        </header>
        {children}
        
        {/* Słowa kluczowe - nad footerem */}
        <section className="bg-gray-50 py-6">
          <div className="container">
            <p className="text-sm text-gray-600 text-center">
              <strong>Słowa kluczowe:</strong> stawy biodrowe usg, usg bioder dzieci, chirurg dziecięcy Rzeszów, 
              chirurg dziecięcy Sędziszów, usg dzieci Rzeszów, usg dzieci Sędziszów, 
              usg bioder Rzeszów, usg bioder Sędziszów, przepuklina dzieci, stulejka, 
              niezstąpione jądro, usg Sędziszów, usg tarczycy Sędziszów
            </p>
          </div>
        </section>
        
        <footer className="border-t mt-10">
          <div className="container py-8 text-sm text-gray-600">
            <div>
              <p>Copyright © 2015–{new Date().getFullYear()}, Lek.med. Jerzy Robert Machowski</p>
              <p className="mt-2">Kontakt mailowy: <a className="link" href="mailto:kontakt@jerzymachowski.pl">kontakt@jerzymachowski.pl</a></p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}