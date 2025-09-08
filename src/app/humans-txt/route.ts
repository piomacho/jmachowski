export async function GET() {
    const body = `/* TEAM */
Developer: Lek.med. Jerzy Robert Machowski
Contact: kontakt@jerzymachowski.pl
Location: Rzeszów, Sędziszów Małopolski, Polska
Specialization: Chirurgia dziecięca, Ultrasonografia dzieci

/* THANKS */
Redesign: TOPSA
Original design: TOPSA`;
    return new Response(body, { headers: { "Content-Type": "text/plain; charset=utf-8" } });
  }
  