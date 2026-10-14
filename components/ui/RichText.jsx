/**
 * Rendu d'un texte riche minimal : `**gras**` → <strong>.
 * Point d'entrée unique du texte riche : quand le CMS arrivera (Portable
 * Text, Lexical…), c'est ici qu'on branchera son rendu, pas dans les sections.
 */
export default function RichText({ text, as: Tag = 'p', className }) {
    if (!text) return null;
    const parts = text.split(/(\*\*[^*]+\*\*)/g).filter(Boolean);
    return (
        <Tag className={className}>
            {parts.map((part, i) =>
                part.startsWith('**') && part.endsWith('**')
                    ? <strong key={i}>{part.slice(2, -2)}</strong>
                    : part
            )}
        </Tag>
    );
}

/** Version texte brut (aperçus tronqués). */
export function plainText(text = '') {
    return text.replace(/\*\*/g, '');
}
