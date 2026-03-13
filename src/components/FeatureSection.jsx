import FeatureCard from "./FeatureCard";
import { FaBookOpen, FaHeadphones, FaLightbulb, FaCode, FaGamepad } from "react-icons/fa";

export default function FeatureSection() {
    return (
        <div className="flex flex-wrap justify-center gap-5 py-16">
            <FeatureCard icon={<FaBookOpen className="text-green-500 text-xl" />}title="Baca Al-Quran"desc="Teks Arab, transliterasi, dan terjemahan bahasa Indonesia"color="bg-green-100"/>
            <FeatureCard icon={<FaHeadphones className="text-blue-500 text-xl" />}title="Audio Berkualitas"desc="Mendengarkan dengan audio dari qari terbaik dunia"color="bg-blue-100"/>
            <FeatureCard icon={<FaLightbulb className="text-yellow-500 text-xl" />}title="Tafsir Lengkap"desc="Memahami makna dengan tafsir yang mudah dipahami"color="bg-yellow-100"/>
        </div>
    );
}