import { useRef, useEffect } from "react";

export default function AyatItem({ ayat, qori, isActive, onPlay,onEnded }) {
  const audioRef = useRef();
  useEffect(() => {
    if (isActive) {
      audioRef.current?.play();
    }
  }, [isActive]);

  return (
    <div className={`bg-white rounded-xl shadow-sm p-5 transition ${isActive ? "ring-2 ring-green-400" : ""}`}>
      <div className="flex justify-between items-center mb-3">
        <span className="text-sm text-gray-500">Ayat {ayat.nomorAyat}</span>
        <button onClick={onPlay}className="bg-green-100 text-green-600 px-3 py-1 rounded-md text-sm hover:bg-green-200"> ▶</button>
      </div>
      <div className="text-right text-3xl leading-loose mb-4 font-semibold">{ayat.teksArab}</div>
      <div className="italic text-gray-500 mb-2">{ayat.teksLatin}</div>
      <div className="text-gray-700 leading-relaxed">{ayat.teksIndonesia}</div>
      <audio ref={audioRef} onEnded={onEnded}><source src={ayat.audio?.[qori]} type="audio/mpeg" /></audio>
    </div>
  );
}