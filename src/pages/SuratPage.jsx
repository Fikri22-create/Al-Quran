import { useEffect, useRef, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { IoArrowBack, IoPlay } from "react-icons/io5";

const QORI_LIST = [
  { nama: "Abdullah Al-Juhany", kode: "01" },
  { nama: "Abdul Muhsin Al-Qasim", kode: "02" },
  { nama: "Abdurrahman As-Sudais", kode: "03" },
  { nama: "Ibrahim Al-Dossari", kode: "04" },
  { nama: "Misyari Rasyid Al-Afasy", kode: "05" },
  { nama: "Yasser Al-Dosari", kode: "06" },
];

export default function SuratPage() {
  const { nomor } = useParams();
  const [surat, setSurat] = useState(null);
  const [loading, setLoading] = useState(true);
  const [qori, setQori] = useState("05");
  const [currentIndex, setCurrentIndex] = useState(null);
  const audioRef = useRef(null);
  const ayatRefs = useRef([]);

  useEffect(() => {
    setLoading(true);

    fetch(`https://equran.id/api/v2/surat/${nomor}`)
      .then((res) => res.json())
      .then((data) => {
        setSurat(data.data);
        setLoading(false);
        setCurrentIndex(null);
      })
      .catch(() => {
        setSurat(null);
        setLoading(false);
      });
  }, [nomor]);

  useEffect(() => {
    if (currentIndex === null) return;

    const ayat = surat?.ayat?.[currentIndex];
    const audioUrl = ayat?.audio?.[qori];

    if (!audioUrl) return;

    audioRef.current.src = audioUrl;
    audioRef.current.play();

    ayatRefs.current[currentIndex]?.scrollIntoView({
      behavior: "smooth",
      block: "center",
    });
  }, [currentIndex, qori, surat]);

  const handleEnded = () => {
    setCurrentIndex((prev) => {
      if (prev === null) return null;
      const next = prev + 1;
      if (!surat?.ayat || next >= surat.ayat.length) return null;
      return next;
    });
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center h-full"> Loading...</div>
    );
  }

  if (!surat) {
    return (
      <div className="p-6 text-center text-red-500"> Gagal load data</div>
    );
  }

  return (
    <div className="flex flex-col h-full bg-gray-50">
      <div className="sticky top-0 z-10 bg-white border-b border-gray-200">
        <div className="max-w-3xl mx-auto px-4 py-4 space-y-3">
          <Link to="/" className="flex items-center gap-2 text-sm text-gray-500 hover:text-green-600 transition" ><IoArrowBack />Kembali ke Beranda</Link>
          <div className="bg-white rounded-2xl p-5 shadow-sm flex justify-between items-center border border-gray-100">
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 flex items-center justify-center rounded-full bg-green-100 text-green-600 font-semibold">{surat.nomor}</div>
              <div>
                <h1 className="text-base font-semibold text-gray-800">
                  {surat.namaLatin}
                  <span className="text-gray-400 text-sm ml-2">{surat.arti}</span>
                </h1>
                <p className="text-xs text-gray-500">{surat.tempatTurun} {surat.jumlahAyat} ayat</p>
              </div>
            </div>
            <div className="text-2xl text-green-600 font-semibold">{surat.nama}</div>
          </div>
          <div className="flex items-center gap-3 flex-wrap">
            <select value={qori} onChange={(e) => setQori(e.target.value)} className="border border-green-600 px-3 py-2 rounded-lg text-sm bg-white">
              {QORI_LIST.map((q) => (
                <option key={q.kode} value={q.kode}>{q.nama}</option>
              ))}
            </select>
            <button onClick={() => setCurrentIndex(0)}className="flex items-center gap-2  bg-green-100 text-green-600 px-4 py-2 rounded-full text-sm transition"><IoPlay />Play Audio Full</button>
          </div>
        </div>
      </div>
      <div className="flex-1 overflow-y-auto">
        <div className="max-w-3xl mx-auto px-4 py-6 space-y-6 pb-32">
          {surat.ayat.map((ayat, index) => (
            <div key={ayat.nomorAyat}ref={(el) => (ayatRefs.current[index] = el)} className={`bg-white p-6 rounded-2xl shadow-sm transition${currentIndex === index ? "ring-2 ring-green-400" : "hover:shadow-md"}`}>
              <div className="flex justify-between items-center text-sm text-gray-400 mb-3">
                <span>Ayat {ayat.nomorAyat}</span>
                <button onClick={() => setCurrentIndex(index)}className="text-green-600 hover:bg-green-100 p-2 rounded-md"><IoPlay /></button>
              </div>
              <div className="text-right text-3xl leading-loose mb-4 font-semibold text-gray-800">{ayat.teksArab}</div>
              <div className="italic text-gray-500 mb-2">{ayat.teksLatin}</div>
              <div className="text-gray-700 leading-relaxed">{ayat.teksIndonesia}</div>
            </div>
          ))}
        </div>
      </div>
      <div className="border-t border-gray-200 bg-white p-3">
        <div className="max-w-3xl mx-auto">
          <audio ref={audioRef} onEnded={handleEnded} controls className="w-full"/>
        </div>
      </div>
    </div>
  );
}