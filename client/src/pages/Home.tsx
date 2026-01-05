import { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Phone, Heart, Shield, MessageCircle } from "lucide-react";
import {
  LUNARA_TAGLINE,
  LUNARA_DESCRIPTION,
  LUNARA_LETTERS,
  LUNARA_AMBASSADORS,
  LUNARA_FORM_URL,
  APP_LOGO,
  APP_TITLE,
} from "@/const";
import PanduanKasus from "@/components/PanduanKasus";

export default function Home() {
  const [hoveredLetter, setHoveredLetter] = useState<string | null>(null);

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Navigation Header */}
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-border">
        <div className="container py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img
              src={APP_LOGO}
              alt={APP_TITLE}
              className="w-10 h-10 rounded-full object-cover shadow"
            />
            <span className="font-display font-bold text-xl text-secondary-foreground">
              {APP_TITLE}
            </span>
          </div>
          <nav className="hidden md:flex gap-8">
            <a href="#about" className="text-foreground hover:text-primary transition-colors">
              Tentang
            </a>
            <a href="#panduan" className="text-foreground hover:text-primary transition-colors">
              Panduan Kasus
            </a>
            <a href="#ambassadors" className="text-foreground hover:text-primary transition-colors">
              Hubungi Kami
            </a>
            <a href="#form" className="text-foreground hover:text-primary transition-colors">
              Lapor
            </a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-white via-secondary/20 to-accent/20 py-20 md:py-32">
        {/* Decorative background elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl -mr-48 -mt-48"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary/10 rounded-full blur-3xl -ml-48 -mb-48"></div>

        <div className="container relative z-10">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-7xl font-display font-bold mb-6">
              <span className="gradient-text">LUNARA</span>
            </h1>
            <p className="text-2xl md:text-3xl font-display text-secondary-foreground mb-4">
              {LUNARA_TAGLINE}
            </p>
            <p className="text-lg md:text-xl text-foreground max-w-2xl mx-auto leading-relaxed">
              {LUNARA_DESCRIPTION}
            </p>
          </div>

          {/* Interactive Letters Section */}
          <div className="bg-white rounded-3xl shadow-xl p-12 md:p-16 mb-16">
            <h2 className="text-center text-2xl md:text-3xl font-display font-bold text-secondary-foreground mb-12">
              Makna Mendalam LUNARA
            </h2>

            <div className="flex flex-wrap justify-center gap-4 md:gap-6 mb-12">
              {LUNARA_LETTERS.map((item, index) => (
                <div
                  key={index}
                  className="relative"
                  onMouseEnter={() => setHoveredLetter(item.letter + index)}
                  onMouseLeave={() => setHoveredLetter(null)}
                >
                  <button
                    className="lunara-letter text-4xl md:text-5xl font-bold transition-all duration-300 hover:scale-110"
                    style={{
                      color: hoveredLetter === item.letter + index ? "var(--primary)" : "var(--secondary-foreground)",
                    }}
                  >
                    {item.letter}
                  </button>

                  {/* Tooltip */}
                  {hoveredLetter === item.letter + index && (
                    <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-4 w-64 bg-secondary-foreground text-white rounded-lg shadow-lg p-4 z-20 animate-in fade-in duration-200">
                      <p className="font-display font-bold text-lg mb-2">{item.meaning}</p>
                      <p className="text-sm leading-relaxed">{item.description}</p>
                      <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-8 border-r-8 border-t-8 border-l-transparent border-r-transparent" style={{borderTopColor: "var(--secondary-foreground)"}}></div>
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Meaning explanation */}
            <div className="text-center text-foreground">
              <p className="text-sm md:text-base">
                <strong>L.U.N.A.R.A</strong> — Listen, Understand, Nurture, And Restore All
              </p>
            </div>
          </div>

          {/* Call to Action Buttons */}
          <div className="flex flex-col md:flex-row gap-6 justify-center">
            <a href="#ambassadors">
              <Button className="bg-primary text-primary-foreground hover:bg-secondary text-lg px-8 py-6 rounded-xl font-semibold">
                <Phone className="mr-2 w-5 h-5" />
                Hubungi Kami
              </Button>
            </a>
            <a href={LUNARA_FORM_URL} target="_blank" rel="noopener noreferrer">
              <Button variant="outline" className="border-2 border-secondary-foreground text-secondary-foreground hover:bg-accent text-lg px-8 py-6 rounded-xl font-semibold">
                <MessageCircle className="mr-2 w-5 h-5" />
                Laporkan Kasus
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 md:py-32 bg-white">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-display font-bold text-secondary-foreground mb-6">
                Apa itu Lunara?
              </h2>
              <p className="text-lg text-foreground mb-6 leading-relaxed">
                Lunara adalah sebuah inisiatif yang diciptakan untuk memberikan dukungan dan perlindungan bagi setiap individu yang mengalami kekerasan. Kami percaya bahwa setiap orang berhak untuk didengar, dipahami, dan mendapatkan bantuan tanpa rasa takut atau malu.
              </p>
              <p className="text-lg text-foreground mb-6 leading-relaxed">
                Sebagai duta anti-kekerasan, kami berkomitmen untuk menciptakan ruang yang aman, nyaman, dan mendukung pemulihan bagi semua korban kekerasan.
              </p>
              <div className="flex gap-4">
                <div className="flex items-start gap-3">
                  <Shield className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold text-secondary-foreground">Aman</h3>
                    <p className="text-sm text-foreground">Privasi dan keamanan Anda adalah prioritas kami</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Heart className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold text-secondary-foreground">Peduli</h3>
                    <p className="text-sm text-foreground">Kami mendengarkan dengan hati yang tulus</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="h-96 w-full flex items-center justify-center relative overflow-hidden p-0 bg-transparent">
              <Carousel />
            </div>
          </div>
        </div>
      </section>

      <PanduanKasus />

      {/* Ambassadors Section */}
      <section id="ambassadors" className="py-20 md:py-32 bg-gradient-to-br from-secondary/20 to-accent/20">
        <div className="container">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-secondary-foreground text-center mb-12">
            Hubungi Kami
          </h2>
          <p className="text-lg text-foreground text-center max-w-2xl mx-auto mb-12">
            Jika Anda membutuhkan bantuan atau ingin berbagi cerita Anda, jangan ragu untuk menghubungi duta anti-kekerasan Politeknik Negeri Lampung.
          </p>

          <div className="grid md:grid-cols-2 gap-8 max-w-2xl mx-auto">
            {LUNARA_AMBASSADORS.map((ambassador, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                    <span className="text-2xl">👤</span>
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-xl text-secondary-foreground">
                      {ambassador.name}
                    </h3>
                    <p className="text-sm text-foreground">{ambassador.role}</p>
                  </div>
                </div>
                <a
                  href={`https://wa.me/${ambassador.phone.replace(/\D/g, "")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-secondary transition-colors duration-300 w-full justify-center"
                >
                  <Phone className="w-5 h-5" />
                  {ambassador.phone}
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Form Section */}
      <section id="form" className="py-20 md:py-32 bg-white">
        <div className="container">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-display font-bold text-secondary-foreground mb-6">
              Laporkan Kasus
            </h2>
            <p className="text-lg text-foreground mb-8 leading-relaxed">
              Kami menyediakan formulir pelaporan yang aman dan terpercaya dari Satgas PPKPT Politeknik Negeri Lampung. Setiap laporan akan ditangani dengan profesional dan rahasia.
            </p>
            <a
              href={LUNARA_FORM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 bg-secondary-foreground text-white rounded-xl font-semibold hover:bg-primary hover:text-primary-foreground transition-colors duration-300 text-lg"
            >
              <MessageCircle className="w-6 h-6" />
              Buka Formulir Pelaporan
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-secondary-foreground text-white py-12">
        <div className="container">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="font-display font-bold text-lg mb-4">Lunara</h3>
              <p className="text-sm text-white/80">
                Ruang aman digital untuk setiap orang yang membutuhkan dukungan.
              </p>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-4">Navigasi</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="#about" className="text-white/80 hover:text-white transition-colors">
                    Tentang
                  </a>
                </li>
                <li>
                  <a href="#ambassadors" className="text-white/80 hover:text-white transition-colors">
                    Hubungi Kami
                  </a>
                </li>
                <li>
                  <a href="#form" className="text-white/80 hover:text-white transition-colors">
                    Lapor
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-4">Kontak</h3>
              <ul className="space-y-2 text-sm">
                {LUNARA_AMBASSADORS.map((ambassador, index) => (
                  <li key={index}>
                    <a
                      href={`https://wa.me/${ambassador.phone.replace(/\D/g, "")}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white/80 hover:text-white transition-colors"
                    >
                      {ambassador.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="border-t border-white/20 pt-8 text-center text-sm text-white/60">
            <p>&copy; 2024 Lunara - Safe Space Platform. Semua hak dilindungi.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

function Carousel() {
  const images = ["/1.png", "/2.png", "/3.png"];
  const [index, setIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [fitModes, setFitModes] = useState<string[]>(() => images.map(() => "auto"));
  const timerRef = useRef<number | null>(null);

    useEffect(() => {
      if (timerRef.current) window.clearInterval(timerRef.current);
      if (!isHovered) {
        timerRef.current = window.setInterval(() => {
          setIndex((i) => (i + 1) % images.length);
        }, 3500);
      }
      return () => {
        if (timerRef.current) window.clearInterval(timerRef.current);
        timerRef.current = null;
      };
    }, [isHovered]);

    // Preload images to avoid white/blank frames during transitions and log them
    useEffect(() => {
      images.forEach((src, i) => {
        const img = new Image();
        img.src = src;
        img.onload = () => {
          // eslint-disable-next-line no-console
          console.log(`preloaded image[${i}] ->`, src, img.naturalWidth, img.naturalHeight);
        };
      });
    }, []);

  const prev = () => setIndex((i) => (i - 1 + images.length) % images.length);
  const next = () => setIndex((i) => (i + 1) % images.length);

  // DEBUG: log index changes to console
  useEffect(() => {
    // eslint-disable-next-line no-console
    console.log("Carousel index ->", index);
  }, [index]);

  return (
    <div
      className="w-full h-full relative flex items-center justify-center"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="w-full h-full overflow-hidden">
        <div
          className="flex h-full transition-transform duration-700 ease-in-out"
          style={{ width: `${images.length * 100}%`, transform: `translateX(-${index * (100 / images.length)}%)` }}
        >
          {images.map((src, i) => (
            <div key={`${src}-${i}`} className="h-full flex-shrink-0" style={{ width: `${100 / images.length}%` }}>
              <img
                src={src}
                alt={`Slide ${i + 1}`}
                onLoad={(e) => {
                  const img = e.currentTarget as HTMLImageElement;
                  const mode = img.naturalWidth > img.naturalHeight ? "h-full" : "w-full";
                  setFitModes((prev) => {
                    const copy = [...prev];
                    copy[i] = mode;
                    return copy;
                  });
                  // eslint-disable-next-line no-console
                  console.log(`loaded slide[${i}] ->`, src, img.naturalWidth, img.naturalHeight);
                }}
                className={`${fitModes[i] === "auto" ? "max-w-full max-h-full object-contain" : `${fitModes[i]} object-contain`} mx-auto block`}
                style={{ backgroundColor: "transparent" }}
              />
            </div>
          ))}
        </div>
      </div>

      <button
        onClick={prev}
        aria-label="Previous"
        className="absolute left-3 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-black/40 text-white rounded-full p-2 shadow focus:outline-none"
      >
        ‹
      </button>

      <button
        onClick={next}
        aria-label="Next"
        className="absolute right-3 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-black/40 text-white rounded-full p-2 shadow focus:outline-none"
      >
        ›
      </button>

      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2">
        {images.map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            aria-label={`Go to slide ${i + 1}`}
            className={`w-2 h-2 rounded-full ${i === index ? "bg-white" : "bg-white/50"}`}
          />
        ))}
      </div>

      {/* Thumbnails for verification (temporary) */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex gap-2">
        {images.map((src, i) => (
          <img
            key={src + "-thumb"}
            src={src}
            alt={`thumb-${i + 1}`}
            onClick={() => setIndex(i)}
            className={`w-12 h-8 object-cover cursor-pointer border ${i === index ? "border-white" : "border-white/30"}`}
          />
        ))}
      </div>
    </div>
  );
}
