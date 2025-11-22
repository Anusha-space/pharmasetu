const partners = [
  "Cipla",
  "Sun Pharma",
  "Dr. Reddy's",
  "Lupin",
  "Biocon",
  "Torrent",
  "Glenmark",
  "Alkem",
  "Aurobindo",
  "Mankind",
];

const Partners = () => {
  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <p className="text-sm uppercase tracking-wider text-muted-foreground mb-4">
            Trusted By Leading Companies
          </p>
          <h2 className="text-2xl md:text-3xl font-bold text-foreground">
            Partner Pharmaceutical Companies
          </h2>
        </div>

        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12 max-w-5xl mx-auto">
          {partners.map((partner, index) => (
            <div
              key={index}
              className="text-muted-foreground hover:text-primary transition-colors duration-300 font-semibold text-lg md:text-xl opacity-60 hover:opacity-100 cursor-pointer animate-fade-in-up"
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              {partner}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Partners;
