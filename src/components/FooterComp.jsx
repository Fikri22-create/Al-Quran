export default function FooterComp() {
    return (
        <footer className="bg-white text-gray-700 py-1 border-gray-200">
            <div className="mt-8 text-center text-gray-400 text-xm">
                &copy; {new Date().getFullYear()} Quran.id. All rights reserved.
            </div>
        </footer>
    );
}