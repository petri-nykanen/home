import {
  SiTypescript,
  SiReact,
  SiMysql,
  SiMongodb,
  SiJest,
  SiHtml5,
  SiCss3,
  SiAmazon,
  SiAdobephotoshop,
  SiAdobeindesign,
  SiAdobeillustrator,
} from "react-icons/si";

const SkillsContent = () => {
  const developmentSkills = [
    { icon: SiTypescript, name: "TypeScript", color: "#3178C6" },
    { icon: SiReact, name: "React", color: "#61DAFB" },
    { icon: SiMysql, name: "SQL", color: "#00758F" },
    { icon: SiMongodb, name: "MongoDB", color: "#13AA52" },
    { icon: SiJest, name: "Jest", color: "#C21325" },
    { icon: SiHtml5, name: "HTML", color: "#E34C26" },
    { icon: SiCss3, name: "CSS", color: "#1572B6" },
  ];

  const cloudSkills = [
    { icon: SiAmazon, name: "AWS S3", color: "#FF9900" },
    { icon: SiAmazon, name: "AWS Lambda", color: "#FF9900" },
  ];

  const designSkills = [
    { icon: SiAdobephotoshop, name: "Photoshop", color: "#31A8FF" },
    { icon: SiAdobeindesign, name: "InDesign", color: "#EE3D8E" },
    { icon: SiAdobeillustrator, name: "Illustrator", color: "#FF7F00" },
  ];

  const SkillGrid = ({ skills }) => (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 mb-8">
      {skills.map((skill, index) => {
        const IconComponent = skill.icon;
        return (
          <div key={index} className="flex flex-col items-center gap-3">
            <IconComponent
              size={64}
              className="flex-shrink-0"
              style={{ color: skill.color }}
            />
            <p className="text-center font-semibold text-sm">{skill.name}</p>
          </div>
        );
      })}
    </div>
  );

  return (
    <div className="p-6 bg-white rounded-md border-6 border-indigo-400 shadow-md shadow-black/20">
      <h2 className="text-2xl font-bold mb-4 text-center">Development</h2>
      <SkillGrid skills={developmentSkills} />

      <h2 className="text-2xl font-bold mb-4 text-center">Cloud Services</h2>
      <SkillGrid skills={cloudSkills} />

      <h2 className="text-2xl font-bold mb-4 text-center">Design Tools</h2>
      <SkillGrid skills={designSkills} />
    </div>
  );
};

export default SkillsContent;
