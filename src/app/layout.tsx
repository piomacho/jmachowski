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
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pl">
      <body>
        <a href="#content" className="skip-link">Przejdź do treści</a>
        <header className="sticky top-0 z-40 bg-white/90 backdrop-blur border-b">
          <div className="container flex items-center justify-between py-3 gap-4">
            <a href="#hero" className="font-semibold text-lg md:text-xl">Lek.med. Jerzy Robert Machowski</a>
            <nav aria-label="Główne">
              <ul className="hidden md:flex gap-6 text-sm">
                <li><a href="#o-mnie" className="hover:underline">O mnie</a></li>
                <li><a href="#opinie" className="hover:underline">Opinie</a></li>
                <li><a href="#kontakt" className="hover:underline">Kontakt</a></li>
              </ul>
            </nav>
            <a href="tel:+48178536607" className="btn-primary text-sm">Zadzwoń</a>
          </div>
        </header>
        {children}
        <footer className="border-t mt-10">
          <div className="container py-8 text-sm text-gray-600 grid md:grid-cols-2 gap-6">
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