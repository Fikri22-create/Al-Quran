import { useEffect, useState } from "react";
import { Link, Outlet, useLocation } from "react-router-dom";

export default function Layout() {
    const [suratList, setSuratList] = useState([]);
    const [search, setSearch] = useState("");
    const location = useLocation();

    useEffect(() => {
    fetch("https://equran.id/api/v2/surat")
        .then((res) => res.json())
        .then((data) => setSuratList(data.data));
    }, []);

    const filteredSurat = suratList.filter((s) =>
        s.namaLatin.toLowerCase().includes(search.toLowerCase())
    );

    return (
        <div className="flex h-screen overflow-hidden bg-gray-50">
            <aside className="w-80 bg-white border-r border-gray-200 flex flex-col">
                <div className="sticky top-0 bg-white border-b border-gray-100 p-5 space-y-3">
                    <h1 className="text-xl text-green-600 font-semibold">Daftar Surat</h1>
                    <input
                        type="text"
                        placeholder="Cari surat..."
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        className="w-full px-3 py-2 text-sm border border-gray-200 rounded-lg focus:ring-2 focus:ring-green-600 outline-none"
                    />
                </div>
                <div className="flex-1 overflow-y-auto p-3 space-y-2">
                    {filteredSurat.map((s) => {
                        const isActive =
                        location.pathname === `/surat/${s.nomor}`;
                        return (
                            <Link key={s.nomor} to={`/surat/${s.nomor}`} className={`block p-4 rounded-xl transition${isActive ? "bg-green-600" : "hover:bg-gray-100"}`}>
                                <div className="flex justify-between items-center">
                                        <div className="flex gap-3">
                                        <div className={`w-10 h-10 flex items-center justify-center rounded-lg text-sm font-semibold ${isActive ?  "bg-green-100 text-green-600 font-semibold" : "bg-gray-100 text-gray-600"}`}>{s.nomor}</div>
                                        <div>
                                            <div className="font-semibold text-sm">{s.namaLatin}</div>
                                            <div className="text-xs text-gray-500">{s.arti}</div>
                                            <div className="text-xs text-gray-400">{s.jumlahAyat} ayat</div>
                                        </div>
                                    </div>
                                    <div className="text-lg text-gray-700">{s.nama}</div>
                                </div>
                            </Link>
                        );
                    })}
                </div>
            </aside>
                <main className="flex-1 overflow-y-auto">
                    <Outlet />
                </main>
        </div>
    );
}