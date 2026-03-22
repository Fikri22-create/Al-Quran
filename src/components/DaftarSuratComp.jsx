import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function DaftarSuratComp() {

    const [surat, setSurat] = useState([]);
    const [loading, setLoading] = useState(true);

      const getSurat = async () => {
        try {
        const response = await fetch("https://equran.id/api/v2/surat");
        const result = await response.json();

        setSurat(result.data);
        setLoading(false);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        getSurat();
    }, []);

    if (loading) {
        return (
            <div className="text-center mt-10">Loading...</div>
        );
    }

    return (
        <div className="max-w-6xl mx-auto mt-8 px-4">
            <div className="grid md:grid-cols-3 gap-6">
                {surat.map((item) => (
                <Link key={item.nomor} to={`/surat/${item.nomor}`} className="flex items-center justify-between p-5 bg-gray-100 rounded-xl hover:shadow-md transition">
                    <div className="flex items-center gap-4">
                    <div className="text-lg font-bold text-gray-800">{item.nomor}</div>
                        <div>
                            <h3 className="font-semibold text-lg">{item.namaLatin}</h3>
                            <p className="text-sm text-gray-500">{item.arti} · {item.jumlahAyat}</p>
                        </div>
                    </div>
                    <div className="text-2xl text-gray-600">{item.nama}</div>
                </Link>
                ))}
            </div>            
        </div>
  );
}