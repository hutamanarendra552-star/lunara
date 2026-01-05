import * as React from "react";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";

const CASES = [
  {
    id: "bullying",
    category: "Bullying di Lingkungan Kampus",
    description:
      "Diejek dan disisihkan di kelas atau organisasi, komentar merendahkan diulang sehingga korban merasa terasing.",
    emotional: "Korban merasa malu, cemas, dan ragu menghadapi perkuliahan.",
    steps: [
      "Simpan catatan kejadian dan nama saksi bila ada.",
      "Hubungi LUNARA untuk didengarkan dan dirahasiakan identitasnya.",
      "Pertimbangkan laporan resmi ke biro kesejahteraan atau pengurus kampus jika aman.",
    ],
  },
  {
    id: "catcalling",
    category: "Catcalling di Ruang Publik",
    description:
      "Komentar tak diinginkan atau siulan saat berjalan di area publik membuat korban terganggu dan mencari jalan untuk menghindar.",
    emotional: "Korban merasa takut, terhina, dan lebih waspada saat keluar rumah.",
    steps: [
      "Utamakan keselamatan: pindah ke lokasi ramai atau masuk ke toko terdekat.",
      "Jika memungkinkan, catat waktu, lokasi, atau saksi; hubungi LUNARA untuk dukungan emosional.",
      "Laporkan ke layanan keamanan lokal bila perlu.",
    ],
  },
  {
    id: "seksual",
    category: "Kekerasan Seksual",
    description:
      "Sentuhan atau tindakan seksual tanpa persetujuan terjadi di sebuah acara kampus; korban merasa bingung dan malu.",
    emotional: "Korban sering merasa bingung, takut, dan ragu apakah pengalamannya layak untuk dilaporkan.",
    steps: [
      "Utamakan keselamatan fisik; cari lokasi aman dan pendamping bila memungkinkan.",
      "Simpan bukti jika memungkinkan dan hubungi LUNARA untuk pendampingan dan opsi medis/forensik.",
      "Pilih langkah pelaporan resmi (kapanpun korban siap) ke Satgas atau pihak berwenang.",
    ],
  },
  {
    id: "verbal",
    category: "Kekerasan Verbal",
    description:
      "Umpatan, hinaan, atau kata-kata yang merendahkan dalam interaksi kelompok membuat korban menarik diri.",
    emotional: "Korban merasa tertekan dan khawatir berinteraksi sosial.",
    steps: [
      "Catat contoh kalimat dan konteks peristiwa; kumpulkan saksi bila ada.",
      "Hubungi LUNARA untuk dukungan dan strategi komunikasi aman.",
      "Pertimbangkan mediasi atau pengaduan formal bila pola terus berulang.",
    ],
  },
  {
    id: "nonverbal",
    category: "Kekerasan Non-Verbal",
    description:
      "Tatapan mengancam, gestur, atau tekanan yang membuat suasana kerja/organisasi tidak aman.",
    emotional: "Korban merasa terintimidasi, gelisah, dan tidak aman.",
    steps: [
      "Catat pola kejadian dan keadaan (waktu/tempat/saksi).",
      "Cari dukungan awal di LUNARA untuk validasi dan rencana aman.",
      "Laporkan ke pengurus organisasi atau pihak kampus bila diperlukan.",
    ],
  },
  {
    id: "cyber",
    category: "Cyber Bullying",
    description:
      "Pesan ancaman, fitnah, atau penyebaran foto tanpa izin yang mengganggu studi dan pergaulan.",
    emotional: "Korban merasa malu, cemas, dan sulit berkonsentrasi.",
    steps: [
      "Ambil tangkapan layar dan simpan metadata; blokir akun agresor.",
      "Hubungi LUNARA untuk dukungan dan saran pelaporan ke platform.",
      "Pertimbangkan dukungan TI kampus atau jalur hukum bila eskalasi.",
    ],
  },
  {
    id: "relasi-kuasa",
    category: "Kekerasan Berbasis Relasi Kuasa",
    description:
      "Perlakuan merendahkan atau tuntutan tidak pantas dari figur otoritas yang memanfaatkan posisi untuk menekan korban.",
    emotional: "Korban merasa takut kehilangan kesempatan akademis atau profesional.",
    steps: [
      "Dokumentasikan kronologi dan dampak; simpan bukti komunikasi bila ada.",
      "Hubungi LUNARA untuk konsultasi rahasia dan opsi perlindungan.",
      "Cari prosedur pengaduan institusi atau penasihat hukum bila perlu.",
    ],
  },
  {
    id: "psikologis",
    category: "Kekerasan Psikologis Berulang",
    description:
      "Kritik konstan, manipulasi emosi, dan pelemahan harga diri yang berlangsung lama dalam hubungan personal atau kerja.",
    emotional: "Korban kehilangan kepercayaan diri dan mudah merasa putus asa.",
    steps: [
      "Catat pola perilaku dan contoh konkret; pertimbangkan dukungan profesional.",
      "Hubungi LUNARA untuk dukungan berkelanjutan dan rujukan terapi.",
      "Buat rencana keselamatan jangka panjang dan batas akses terhadap pelaku.",
    ],
  },
];

export default function PanduanKasus() {
  return (
    <section id="panduan" className="py-20 md:py-32 bg-gradient-to-br from-purple-50 to-white">
      <div className="container">
        <h2 className="text-4xl md:text-5xl font-display font-bold text-purple-800 text-center mb-6">
          Panduan Kasus & Solusi
        </h2>
        <p className="text-center text-lg text-foreground max-w-2xl mx-auto mb-12 leading-relaxed">
          Pilih kategori untuk melihat langkah-langkah awal yang dapat dilakukan. Lunara hadir untuk mendengarkan, menjaga kerahasiaan, dan membantu mengarahkan bantuan.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {CASES.map((c) => (
            <Card key={c.id} className="border-purple-100">
              <CardHeader>
                <div>
                  <CardTitle className="text-purple-700">{c.category}</CardTitle>
                  <CardDescription className="text-sm text-foreground">{c.emotional}</CardDescription>
                </div>
              </CardHeader>

              <CardContent>
                <p className="text-sm text-foreground mb-4">{c.description}</p>

                <Accordion type="single" collapsible>
                  <AccordionItem value={`a-${c.id}`}>
                    <AccordionTrigger>Solusi</AccordionTrigger>
                    <AccordionContent>
                      <ol className="list-decimal list-inside space-y-2 text-sm text-foreground">
                        {c.steps.map((s, i) => (
                          <li key={i}>{s}</li>
                        ))}
                      </ol>
                      <div className="mt-4 flex gap-2">
                        <Button variant="outline" size="sm" asChild>
                          <a href="#form">Laporkan ke Satgas PPKPT</a>
                        </Button>
                        <Button variant="secondary" size="sm" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
                          Hubungi Kami
                        </Button>
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
