import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { MedalIcon, MapIcon, PlaneIcon, GiftIcon } from "../components/Icons";

interface FeatureProps {
  icon: JSX.Element;
  title: string;
  description: string;
}

const features: FeatureProps[] = [
  {
    icon: <MedalIcon />,
    title: "Discovery & Planning",
    description:
      "We analyze your requirements, understand your business goals, and create a comprehensive project roadmap with clear milestones and deliverables.",
  },
  {
    icon: <MapIcon />,
    title: "Design & Architecture",
    description:
      "Our team designs intuitive user interfaces and robust system architecture, ensuring scalability, security, and optimal performance from the ground up.",
  },
  {
    icon: <PlaneIcon />,
    title: "Development & Integration",
    description:
      "We build your solution using cutting-edge technologies, implementing complex systems with clean code, thorough testing, and seamless third-party integrations.",
  },
  {
    icon: <GiftIcon />,
    title: "Deployment & Support",
    description:
      "We deploy your solution to production environments and provide ongoing maintenance, updates, and technical support to ensure continued success.",
  },
];

export const HowItWorks = () => {
  return (
    <section
      id="howItWorks"
      className="container text-center py-24 sm:py-32"
    >
      <h2 className="text-3xl md:text-4xl font-bold ">
        Our Development{" "}
        <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
          Process{" "}
        </span>
        From Concept to Launch
      </h2>
      <p className="md:w-3/4 mx-auto mt-4 mb-8 text-xl text-muted-foreground">
        Our proven methodology ensures every project is delivered on time, within budget, and exceeds expectations through careful planning and execution.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {features.map(({ icon, title, description }: FeatureProps) => (
          <Card
            key={title}
            className="bg-muted/50"
          >
            <CardHeader>
              <CardTitle className="grid gap-4 place-items-center">
                {icon}
                {title}
              </CardTitle>
            </CardHeader>
            <CardContent>{description}</CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};
