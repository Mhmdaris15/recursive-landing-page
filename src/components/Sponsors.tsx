import { 
  Radar, 
  Code, 
  Database, 
  Cloud, 
  Smartphone, 
  Palette 
} from "lucide-react";

interface SponsorProps {
  icon: JSX.Element;
  name: string;
}

const sponsors: SponsorProps[] = [
  {
    icon: <Code size={34} />,
    name: "React & TypeScript",
  },
  {
    icon: <Database size={34} />,
    name: "Node.js & MongoDB",
  },
  {
    icon: <Cloud size={34} />,
    name: "AWS & Docker",
  },
  {
    icon: <Smartphone size={34} />,
    name: "React Native",
  },
  {
    icon: <Palette size={34} />,
    name: "Figma & Adobe",
  },
  {
    icon: <Radar size={34} />,
    name: "AI & Machine Learning",
  },
];

export const Sponsors = () => {
  return (
    <section
      id="sponsors"
      className="container pt-24 sm:py-32"
    >
      <h2 className="text-center text-md lg:text-xl font-bold mb-8 text-primary">
        Our Technology Stack & Expertise
      </h2>

      <div className="flex flex-wrap justify-center items-center gap-4 md:gap-8">
        {sponsors.map(({ icon, name }: SponsorProps) => (
          <div
            key={name}
            className="flex items-center gap-1 text-muted-foreground/60"
          >
            <span>{icon}</span>
            <h3 className="text-xl  font-bold">{name}</h3>
          </div>
        ))}
      </div>
    </section>
  );
};
