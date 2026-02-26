// Layout override : pas de Header ni Footer sur les pages projet en construction
// Next.js 15 : ce layout ne remplace PAS le root layout (html/body sont conservés)
// Il remplace seulement le <Header /> et le <Footer /> pour cette route

export default function SlugLayout({ children }) {
    return <>{children}</>;
}
