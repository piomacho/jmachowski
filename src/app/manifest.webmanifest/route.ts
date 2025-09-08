import { type MetadataRoute } from "next";

export function GET(): Response {
  const manifest: MetadataRoute.Manifest = {
    name: "Lek.med. Jerzy Robert Machowski – Chirurg Dziecięcy Rzeszów",
    short_name: "J. Machowski",
    description: "Specjalista Wojewódzki d/s chirurgii dziecięcej dla woj. podkarpackiego. USG bioder dzieci, chirurgia dziecięca.",
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#0f6fe3",
    icons: [
      {
        src: "/favicon.ico",
        sizes: "any",
        type: "image/x-icon"
      }
    ],
    lang: "pl-PL",
    categories: ["medical", "healthcare"],
    scope: "/",
  };

  return new Response(JSON.stringify(manifest), {
    headers: {
      "Content-Type": "application/manifest+json",
    },
  });
}