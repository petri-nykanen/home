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
    <nav className="fixed top-0 left-0 w-full xl:w-auto xl:mt-100 xl:ml-30 xl:top-auto xl:left-auto px-4 py-8 bg-transparent z-50">
      <div className="flex flex-row items-center justify-center gap-4 xl:flex-col xl:items-start xl:gap-2">
        {sections.map((section) => (
          <button
            key={section.id}
            type="button"
            className={`w-auto text-center xl:w-full xl:text-left text-base font-medium transition-colors py-2 ${
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
