export default function FeatureCard({ icon, title, desc, color }) {
    return (
        <div className="flex flex-col items-center text-center p-6 w-64 rounded-xl bg-white border border-gray-100 shadow-sm hover:shadow-md transition duration-300">
            <div className={`flex items-center justify-center w-14 h-14 rounded-xl mb-4 ${color}`}>{icon}</div>
            <h3 className="text-base font-semibold text-gray-500 text-xl">{title}</h3>
            <p className="text-sm text-gray-500 leading-relaxed">{desc}</p>
        </div>
    );
}