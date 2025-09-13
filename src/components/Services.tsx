import { Card, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { MagnifierIcon, WalletIcon, ChartIcon } from "./Icons";
import cubeLeg from "../assets/cube-leg.png";

interface ServiceProps {
  title: string;
  description: string;
  icon: JSX.Element;
}

const serviceList: ServiceProps[] = [
  {
    title: "Web Development",
    description:
      "Custom web applications and websites built with modern technologies, responsive design, and optimal performance.",
    icon: <ChartIcon />,
  },
  {
    title: "App Development",
    description:
      "Native and cross-platform mobile applications for iOS and Android with intuitive user experiences.",
    icon: <WalletIcon />,
  },
  {
    title: "AI Integration",
    description:
      "Intelligent automation and AI-powered solutions to enhance your business processes and decision-making.",
    icon: <MagnifierIcon />,
  },
  {
    title: "Graphic & UI/UX Design",
    description:
      "Beautiful and functional designs that create engaging user experiences and strong brand identities.",
    icon: <ChartIcon />,
  },
  {
    title: "3D Modelling",
    description:
      "Professional 3D modeling and visualization services for products, architecture, and interactive experiences.",
    icon: <WalletIcon />,
  },
  {
    title: "Photography & Videography",
    description:
      "High-quality visual content creation including product photography, corporate videos, and multimedia production.",
    icon: <MagnifierIcon />,
  },
];

export const Services = () => {
  return (
    <section className="container py-24 sm:py-32">
      <div className="grid lg:grid-cols-[1fr,1fr] gap-8 place-items-center">
        <div>
          <h2 className="text-3xl md:text-4xl font-bold">
            <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
              Our{" "}
            </span>
            Services
          </h2>

          <p className="text-muted-foreground text-xl mt-4 mb-8 ">
            Comprehensive IT solutions tailored to your business needs.
          </p>

          <div className="flex flex-col gap-8">
            {serviceList.map(({ icon, title, description }: ServiceProps) => (
              <Card key={title}>
                <CardHeader className="space-y-1 flex md:flex-row justify-start items-start gap-4">
                  <div className="mt-1 bg-primary/20 p-1 rounded-2xl">
                    {icon}
                  </div>
                  <div>
                    <CardTitle>{title}</CardTitle>
                    <CardDescription className="text-md mt-2">
                      {description}
                    </CardDescription>
                  </div>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>

        <img
          src={cubeLeg}
          className="w-[300px] md:w-[500px] lg:w-[600px] object-contain"
          alt="About services"
        />
      </div>
    </section>
  );
};
