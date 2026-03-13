import { Link } from "react-router-dom";

export default function SuratPopulerComp() {

    const suratPopuler = [
        { nomor: 36, nama: "Yasin" },
        { nomor: 56, nama: "Al-Waqi'ah" },
        { nomor: 67, nama: "Al-Mulk" },
        { nomor: 18, nama: "Al-Kahfi" },
        { nomor: 55, nama: "Ar-Rahman" },
    ];

      return (
        <div className="flex flex-wrap justify-center gap-3 mt-6 mb-6">
            {suratPopuler.map((surat) => (
                <Link key={surat.nomor}to={`/surah/${surat.nomor}`}className="px-4 py-2 rounded-full bg-green-100 text-green-700 hover:bg-green-200 transition text-sm font-medium">{surat.nama}</Link>
            ))}
        </div>
    );
}