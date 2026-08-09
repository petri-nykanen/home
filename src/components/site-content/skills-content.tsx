import type { ComponentType, CSSProperties } from "react";
import {
  SiTypescript,
  SiReact,
  SiMysql,
  SiMongodb,
  SiHtml5,
  SiCss3,
  SiAmazon,
  SiAdobephotoshop,
  SiFigma,
} from "react-icons/si";
import xamk from "../../assets/images/xamk.png";

interface SkillType {
  icon: ComponentType<{
    size?: number;
    className?: string;
    style?: CSSProperties;
  }>;
  name: string;
  color: string;
}

interface SkillGridProps {
  skills: SkillType[];
}

const SkillsContent = () => {
  const developmentSkills: SkillType[] = [
    { icon: SiTypescript, name: "TypeScript", color: "#3178C6" },
    { icon: SiReact, name: "React", color: "#61DAFB" },
    { icon: SiMysql, name: "SQL", color: "#00758F" },
    { icon: SiMongodb, name: "MongoDB", color: "#13AA52" },
    { icon: SiHtml5, name: "HTML", color: "#E34C26" },
    { icon: SiCss3, name: "CSS", color: "#1572B6" },
    { icon: SiAmazon, name: "AWS S3", color: "#FF9900" },
    { icon: SiAmazon, name: "AWS Lambda", color: "#FF9900" },
    { icon: SiAdobephotoshop, name: "Photoshop", color: "#31A8FF" },
    { icon: SiFigma, name: "Figma", color: "#F24E1E" },
  ];

  const SkillGrid = ({ skills }: SkillGridProps) => (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 mb-8 justify-center">
      {(() => {
        const nodes: React.ReactNode[] = [];
        skills.forEach((skill, index) => {
          // Insert a responsive placeholder before the last two items to center them on md+ screens
          if (index === skills.length - 2) {
            nodes.push(
              <div key={`placeholder-${index}`} className="hidden md:block" />,
            );
          }

          const IconComponent = skill.icon;
          nodes.push(
            <div key={index} className="flex flex-col items-center gap-3">
              <IconComponent
                size={64}
                className="shrink-0 drop-shadow-md"
                style={{ color: skill.color }}
              />
              <p className="text-center font-semibold text-sm">{skill.name}</p>
            </div>,
          );
        });
        return nodes;
      })()}
    </div>
  );

  return (
    <div className="p-6">
      <SkillGrid skills={developmentSkills} />
      <div className="mt-6">
        <h3 className="text-lg font-semibold mb-3 text-center">Education</h3>
        <div className="flex justify-center">
          <div className="flex flex-col items-center">
            <img
              src={xamk}
              alt="XAMK logo"
              className="h-16 object-contain drop-shadow-md"
            />
            <p className="mt-2 text-center text-sm">
              Bachelor of Information Technology Business Administration
            </p>
            <p className="mt-2 text-center text-sm">2020 - 2024</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkillsContent;
