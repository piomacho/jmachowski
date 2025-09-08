import TestimonialsCarousel from "@/components/TestimonialsCarousel";

export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Physician",
    name: "Lek.med. Jerzy Robert Machowski",
    alternateName: "Jerzy Robert Machowski",
    description:
      "Specjalista Wojewódzki d/s chirurgii dziecięcej dla woj. podkarpackiego. Zatrudniony w Klinice Chirurgii Dziecięcej i Urologii Szpitala Wojewódzkiego Nr 2 w Rzeszowie. Pełni funkcję kierownika kliniki.",
    url: "https://jerzymachowski.pl",
    image: "https://jerzymachowski.pl/images/doctor2.jpeg",
    email: "kontakt@jerzymachowski.pl",
    telephone: ["+48 17 853 66 07", "+48 690 068 376", "+48 17 222 68 09", "+48 792 591 915"],
    sameAs: [
      "https://www.znanylekarz.pl/jerzy-robert-machowski/chirurg-dzieciecy/rzeszow"
    ],
    medicalSpecialty: ["Pediatric Surgery", "Pediatric Ultrasound", "Children's Surgery"],
    areaServed: {
      "@type": "State",
      name: "województwo podkarpackie",
      containedInPlace: {
        "@type": "Country",
        name: "Polska"
      }
    },
    hasCredential: {
      "@type": "EducationalOccupationalCredential",
      credentialCategory: "degree",
      educationalLevel: "Doctor of Medicine"
    },
    worksFor: {
      "@type": "Hospital",
      name: "Szpital Wojewódzki Nr 2 w Rzeszowie",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Rzeszów",
        addressCountry: "PL",
      }
    },
    address: {
      "@type": "PostalAddress",
      addressLocality: "Rzeszów",
      streetAddress: "ul. Wieniawskiego 3",
      addressCountry: "PL",
      postalCode: "35-115"
    },
    location: [
      {
        "@type": "MedicalClinic",
        name: "Gabinet Chirurgii Dziecięcej i Urologii – Rzeszów",
        address: {
          "@type": "PostalAddress",
          streetAddress: "ul. Wieniawskiego 3",
          addressLocality: "Rzeszów",
          addressCountry: "PL",
          postalCode: "35-115"
        },
        telephone: ["+48 17 853 66 07", "+48 690 068 376"],
        openingHoursSpecification: [
          {
            "@type": "OpeningHoursSpecification",
            dayOfWeek: "https://schema.org/Wednesday",
            opens: "15:00",
            closes: "17:00",
          },
        ],
        geo: {
          "@type": "GeoCoordinates",
          latitude: 50.0412,
          longitude: 21.9991
        }
      },
      {
        "@type": "MedicalClinic",
        name: "Gabinet Chirurgii Dziecięcej i Urologii – Sędziszów Małopolski",
        address: {
          "@type": "PostalAddress",
          streetAddress: "ul. 3 Maja 29",
          addressLocality: "Sędziszów Małopolski",
          addressCountry: "PL",
          postalCode: "39-120"
        },
        telephone: ["+48 17 222 68 09", "+48 792 591 915"],
        openingHoursSpecification: [
          {
            "@type": "OpeningHoursSpecification",
            dayOfWeek: "https://schema.org/Monday",
            opens: "15:00",
            closes: "18:00",
          },
        ],
        geo: {
          "@type": "GeoCoordinates",
          latitude: 50.0708,
          longitude: 21.7000
        }
      },
    ],
    keywords: [
      "stawy biodrowe usg",
      "usg bioder dzieci",
      "chirurg dziecięcy Rzeszów",
      "chirurg dziecięcy Sędziszów",
      "usg dzieci Rzeszów",
      "usg dzieci Sędziszów",
      "usg bioder Rzeszów",
      "usg bioder Sędziszów",
      "przepuklina dzieci",
      "stulejka",
      "niezstąpione jądro",
      "usg Sędziszów",
      "usg tarczycy Sędziszów",
    ],
    serviceType: [
      "Chirurgia dziecięca",
      "Ultrasonografia dzieci",
      "USG bioder dzieci",
      "Leczenie przepukliny u dzieci",
      "Leczenie stulejki",
      "Leczenie niezstąpionego jądra"
    ],
    priceRange: "$$",
    paymentAccepted: "Cash, Insurance",
    currenciesAccepted: "PLN"
  };

  return (
    <main id="content">
      {/* HERO */}
      <section id="hero" className="relative overflow-hidden min-h-screen w-full" style={{
        backgroundImage: 'url(/images/doctor2.jpeg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }} aria-label="Główna sekcja z informacjami o Lek.med. Jerzym Robercie Machowskim">
        {/* Dark gradient overlay for text readability */}
        <div className="absolute inset-0 bg-black/40"></div>
        
        {/* Content overlay - positioned to the left */}
        <div className="relative z-10 flex items-center min-h-screen p-8 lg:p-12">
          <div className="max-w-2xl">
            <h1 className="h1 text-white mb-6">
              Lek. med. Jerzy Robert Machowski - Chirurg Dziecięcy z ponad 30 letnim stażem pracy
            </h1>
            <p className="p text-white/90 mb-8">
              <strong>Specjalista Wojewódzki d/s chirurgii dziecięcej dla woj. podkarpackiego</strong>
              <br />
              Zatrudniony w Klinice Chirurgii Dziecięcej i Urologii szpital
              Wojewódzki Nr 2 w Rzeszowie. Pełni funkcję kierownika kliniki.
              Certyfikat Polskiego Towarzystwa Ultrasonograficznego dla wykonywania
              badań u dzieci.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <a href="#kontakt" className="btn-primary hover-scale" aria-label="Przejdź do kontaktu">
                Rejestracja i kontakt
              </a>
              <a href="#opinie" className="badge hover-scale bg-white/20 text-white border-white/30 hover:bg-white/30 hidden sm:inline-flex">Zobacz opinie</a>
            </div>
            
            {/* Contact card */}
            <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-6 border border-white/50 shadow-xl">
              <h2 className="h2 text-brand-700 mb-4">Zadzwoń już dziś</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-medium text-gray-700">Rzeszów</h3>
                  <ul className="mt-2 space-y-1">
                    <li><a className="text-brand-700 hover:text-brand-800 transition-colors" href="tel:+48178536607">17 853 66 07</a></li>
                    <li><a className="text-brand-700 hover:text-brand-800 transition-colors" href="tel:+48690068376">690 068 376</a></li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-medium text-gray-700">Sędziszów Małopolski</h3>
                  <ul className="mt-2 space-y-1">
                    <li><a className="text-brand-700 hover:text-brand-800 transition-colors" href="tel:+48172226809">17 222 68 09</a></li>
                    <li><a className="text-brand-700 hover:text-brand-800 transition-colors" href="tel:+48792591915">792 591 915</a></li>
                  </ul>
                </div>
              </div>
              <a href="#kontakt" className="text-brand-700 hover:text-brand-800 transition-colors mt-4 inline-block">Sprawdź na mapie</a>
            </div>
          </div>
        </div>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </section>

      {/* O MNIE */}
      <section id="o-mnie" className="py-16 bg-white relative" aria-labelledby="o-mnie-heading">
        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-32 h-32 bg-brand-200/20 rounded-full blur-xl"></div>
        <div className="absolute bottom-0 right-0 w-48 h-48 bg-brand-300/20 rounded-full blur-xl"></div>
        <div className="container relative z-10">
          <div className="max-w-4xl mx-auto">
            <h2 id="o-mnie-heading" className="h2 flex items-center gap-3 text-center justify-center mb-8">
              <svg className="w-8 h-8 text-brand-600" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M12 2C13.1 2 14 2.9 14 4C14 5.1 13.1 6 12 6C10.9 6 10 5.1 10 4C10 2.9 10.9 2 12 2ZM21 9V7L15 1H5C3.89 1 3 1.89 3 3V21C3 22.11 3.89 23 5 23H19C20.11 23 21 22.11 21 21V9M19 9H14V4H5V21H19V9Z"/>
              </svg>
              Informacje o mnie
            </h2>
            <p className="p mt-4 text-center">Lek. med. Jerzy Machowski</p>
            <p className="p mt-2 text-center">
              Specjalista Wojewódzki d/s chirurgii dziecięcej dla woj. podkarpackiego -
              zatrudniony w Klinice Chirurgii Dziecięcej i Urologii szpital
              Wojewódzki Nr 2 w Rzeszowie. Pełni funkcję kierownika kliniki.
              Certyfikat Polskiego Towarzystwa Ultrasonograficznego dla wykonywania
              badań u dzieci.
            </p>
            <div className="mt-8 grid md:grid-cols-2 gap-6">
              <div className="card p-5 hover-lift">
                <h3 className="font-semibold">Gabinet Chirurgii Dziecięcej i Urologii<br/>Pracownia Ultrasonografii dla dzieci</h3>
                <p className="p mt-2">Rzeszów ul. Wieniawskiego 3</p>
                <p className="p mt-2">Środa od godz. 15:00–17:00</p>
                <p className="p mt-2 font-medium">Rejestracja:</p>
                <ul className="mt-1 space-y-1">
                  <li><a className="link" href="tel:+48178536607">17 853 66 07</a></li>
                  <li><a className="link" href="tel:+48690068376">690 068 376</a></li>
                </ul>
              </div>
              <div className="card p-5 hover-lift">
                <h3 className="font-semibold">Gabinet Chirurgii Dziecięcej i Urologii<br/>Pracownia Ultrasonografii dla dzieci</h3>
                <p className="p mt-2">Sędziszów Małopolski ul. 3 Maja 29</p>
                <p className="p mt-2">Poniedziałki od godz. 15:00</p>
                <p className="p mt-2 font-medium">Rejestracja od poniedziałku do piątku 7:00–9:30 i 14:30–16:00</p>
                <ul className="mt-1 space-y-1">
                  <li><a className="link" href="tel:+48172226809">17 222 68 09</a></li>
                  <li><a className="link" href="tel:+48792591915">792 591 915</a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* OPINIE */}
      <section id="opinie" className="section bg-gray-50 relative" aria-labelledby="opinie-heading">
        {/* Decorative elements */}
        <div className="absolute top-1/4 left-0 w-24 h-24 bg-brand-300/30 rounded-full blur-lg"></div>
        <div className="absolute bottom-1/4 right-0 w-40 h-40 bg-brand-200/30 rounded-full blur-lg"></div>
        <div className="container relative z-10">
          <h2 id="opinie-heading" className="h2 flex items-center gap-3 text-center justify-center mb-8">
            <svg className="w-8 h-8 text-brand-600" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z"/>
            </svg>
            Ostatnie opinie
          </h2>
          
          <TestimonialsCarousel 
            testimonials={[
              {
                text:
                  "Pan Doktor jest profesjonalistą, byłem u niego z synkiem na wizycie, dokładne badanie, które przeprowadził Doktor pozwoliło na ustalenie trafnej diagnozy. Serdecznie polecam!",
                author: "Kamil",
                date: "27 października 2017",
              },
              {
                text:
                  "Gdyby była ocena sześciu gwiazdek to taką byśmy dali. Dwa razy Pan doktor operował naszą córeczkę z powodu przepukliny obustronnej i za każdym razem perfekcyjnie. Cięcia po obu stronach jak od linijki, bez żadnych komplikacji pooperacyjnych. Od tej pory nasza córeczka, która podczas operacji miała 7 miesięcy, dostała nowe i lepsze życie. Polecamy!!!!!!!!!!",
                author: "Tomasz K.",
                date: "2017",
              },
              {
                text:
                  "Polecam, bardzo dobry specjalista, rzeczowy i konkretny. I co ważne bardzo dokładny. Bóle u synka przestały doskwierać.",
                author: "Mateusz K.",
                date: "26 lutego 2015",
              },
              {
                text:
                  "Uprzejmy i rozsądny lekarz. Bardzo dobrze doradził w sprawie kłopotliwego biodra mojego syna. Naprawdę polecam.",
                author: "Klementyna",
                date: "25 lutego 2015",
              },
              {
                text:
                  "Bardzo rzetelny lekarz, posiadający znakomite podejście do dzieci jak i do rodzica. Zdecydowanie godny polecenia.",
                author: "Malwina H.",
                date: "22 lutego 2015",
              },
              {
                text:
                  "Byłam u niego w przychodni z dzieckiem 3 razy i lekarz sprawia bardzo dobre wrażenie. Jest rzeczowy i miły. Nie owija w bawełnę ale też nie patrzy z góry na rodzica dziecka. Jak najbardziej godny polecenia",
                author: "Harima4",
                date: "29 maja 2014",
              },
            ]}
          />
          
          <p className="mt-6 text-sm text-gray-600 text-center">
            Opinie pochodzą z portalu znanylekarz.pl, kliknij
            {" "}
            <a className="link" href="https://www.znanylekarz.pl/jerzy-robert-machowski/chirurg-dzieciecy/rzeszow">tutaj</a>
            {" "}
            aby przejść do strony.
          </p>
        </div>
      </section>

      {/* KONTAKT */}
      <section id="kontakt" className="section bg-white relative" aria-labelledby="kontakt-heading">
        {/* Decorative elements */}
        <div className="absolute top-0 right-1/4 w-36 h-36 bg-brand-200/25 rounded-full blur-xl"></div>
        <div className="absolute bottom-0 left-1/4 w-28 h-28 bg-brand-300/25 rounded-full blur-xl"></div>
        <div className="container relative z-10">
          <h2 id="kontakt-heading" className="h2 flex items-center gap-3 text-center justify-center mb-12">
            <svg className="w-8 h-8 text-brand-600" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M6.62 10.79C8.06 13.62 10.38 15.94 13.21 17.38L15.41 15.18C15.69 14.9 16.08 14.82 16.43 14.93C17.55 15.3 18.75 15.5 20 15.5C20.55 15.5 21 15.95 21 16.5V20C21 20.55 20.55 21 20 21C10.61 21 3 13.39 3 4C3 3.45 3.45 3 4 3H7.5C8.05 3 8.5 3.45 8.5 4C8.5 5.25 8.7 6.45 9.07 7.57C9.18 7.92 9.1 8.31 8.82 8.59L6.62 10.79Z"/>
            </svg>
            Informacje kontaktowe
          </h2>
          
          <div className="grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-6">
              <div className="card p-5 hover-lift">
                <h3 className="font-semibold flex items-center gap-2">
                  <svg className="w-6 h-6 text-brand-600" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2L2 7L12 12L22 7L12 2ZM2 17L12 22L22 17M2 12L12 17L22 12"/>
                  </svg>
                  Sędziszów Małopolski ul. 3 Maja 29
                </h3>
                <p className="p mt-2">Poniedziałki od godz. 15:00</p>
                <p className="p mt-2 font-medium">Rejestracja od poniedziałku do piątku 7:00–9:30 i 14:30–16:00</p>
                <ul className="mt-1 space-y-1">
                  <li><a className="link" href="tel:+48172226809">17 222 68 09</a></li>
                  <li><a className="link" href="tel:+48792591915">792 591 915</a></li>
                </ul>
              </div>
              <div className="card p-5 hover-lift">
                <h3 className="font-semibold flex items-center gap-2">
                  <svg className="w-6 h-6 text-brand-600" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2L2 7L12 12L22 7L12 2ZM2 17L12 22L22 17M2 12L12 17L22 12"/>
                  </svg>
                  Rzeszów ul. Wieniawskiego 3
                </h3>
                <p className="p mt-2">Środa od godz. 15:00–17:00</p>
                <p className="p mt-2 font-medium">Rejestracja:</p>
                <ul className="mt-1 space-y-1">
                  <li><a className="link" href="tel:+48178536607">17 853 66 07</a></li>
                  <li><a className="link" href="tel:+48690068376">690 068 376</a></li>
                </ul>
              </div>
              <div className="card p-5 hover-lift">
                <h3 className="font-semibold flex items-center gap-2">
                  <svg className="w-6 h-6 text-brand-600" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20 4H4C2.9 4 2.01 4.9 2.01 6L2 18C2 19.1 2.9 20 4 20H20C21.1 20 22 19.1 22 18V6C22 4.9 21.1 4 20 4ZM20 8L12 13L4 8V6L12 11L20 6V8Z"/>
                  </svg>
                  Kontakt mailowy
                </h3>
                <p className="p"><a className="link" href="mailto:kontakt@jerzymachowski.pl">kontakt@jerzymachowski.pl</a></p>
              </div>
            </div>
            
            <div className="lg:col-span-1">
              <div className="card p-5 hover-glow h-fit">
                <h3 className="font-semibold flex items-center gap-2">
                  <svg className="w-6 h-6 text-brand-600" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C8.13 2 5 5.13 5 9C5 14.25 12 22 12 22S19 14.25 19 9C19 5.13 15.87 2 12 2ZM12 11.5C10.62 11.5 9.5 10.38 9.5 9S10.62 6.5 12 6.5S14.5 7.62 14.5 9S13.38 11.5 12 11.5Z"/>
                  </svg>
                  Mapy
                </h3>
                <ul className="mt-2 space-y-2">
                  <li>
                    <a className="link" target="_blank" rel="noopener" href="https://www.google.com/maps/search/?api=1&query=Rzesz%C3%B3w%2C+Wieniawskiego+3">Rzeszów – ul. Wieniawskiego 3</a>
                  </li>
                  <li>
                    <a className="link" target="_blank" rel="noopener" href="https://www.google.com/maps/search/?api=1&query=S%C4%99dzisz%C3%B3w+Ma%C5%82opolski%2C+3+Maja+29">Sędziszów Małopolski – ul. 3 Maja 29</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}