interface Section {
  id: string;
  label: string;
}

interface Props {
  sections: Section[];
  activeSection: string;
  onSelect: (id: string) => void;
}

const Navigation = ({ sections, activeSection, onSelect }: Props) => {
  return (
    <nav className="fixed mt-100 ml-30 border- px-4 py-8 bg-transparent">
      <div className="flex flex-col items-start gap-2">
        {sections.map((section) => (
          <button
            key={section.id}
            type="button"
            className={`w-full text-left text-base font-medium transition-colors py-2 ${
              activeSection === section.id
                ? "text-red-700 underline"
                : "text-black/80 hover:text-black"
            }`}
            onClick={() => onSelect(section.id)}
          >
            {section.label}
          </button>
        ))}
      </div>
    </nav>
  );
};

export default Navigation;
