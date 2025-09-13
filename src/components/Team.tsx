import { buttonVariants } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Facebook, Instagram, Linkedin } from "lucide-react";

interface TeamProps {
  imageUrl: string;
  name: string;
  position: string;
  socialNetworks: SociaNetworkslProps[];
}

interface SociaNetworkslProps {
  name: string;
  url: string;
}

const teamList: TeamProps[] = [
  {
    imageUrl: "https://i.pravatar.cc/150?img=35",
    name: "Muhammad Aris Septanugroho",
    position: "CEO & Founder",
    socialNetworks: [
      {
        name: "Linkedin",
        url: "https://www.linkedin.com/in/muhammad-aris-septanugroho/",
      },
      {
        name: "Instagram",
        url: "https://www.instagram.com/mhmdaris15/",
      },
    ],
  },
  {
    imageUrl: "https://i.pravatar.cc/150?img=32",
    name: "Rafael Satrio",
    position: "CTO & Co-Founder",
    socialNetworks: [
      {
        name: "Linkedin",
        url: "#",
      },
      {
        name: "Instagram",
        url: "#",
      },
    ],
  },
  {
    imageUrl: "https://i.pravatar.cc/150?img=33",
    name: "Bimantoro",
    position: "Lead Backend Developer",
    socialNetworks: [
      {
        name: "Linkedin",
        url: "#",
      },
      {
        name: "Instagram",
        url: "#",
      },
    ],
  },
  {
    imageUrl: "https://i.pravatar.cc/150?img=41",
    name: "Dyo Pascal",
    position: "Senior Frontend Developer",
    socialNetworks: [
      {
        name: "Linkedin",
        url: "#",
      },
      {
        name: "Instagram",
        url: "#",
      },
    ],
  },
  {
    imageUrl: "https://i.pravatar.cc/150?img=42",
    name: "Dika",
    position: "UI/UX Designer & Developer",
    socialNetworks: [
      {
        name: "Linkedin",
        url: "#",
      },
      {
        name: "Instagram",
        url: "#",
      },
    ],
  },
  {
    imageUrl: "https://i.pravatar.cc/150?img=43",
    name: "Satria Erlangga",
    position: "DevOps & System Engineer",
    socialNetworks: [
      {
        name: "Linkedin",
        url: "#",
      },
      {
        name: "Instagram",
        url: "#",
      },
    ],
  },
];

export const Team = () => {
  const socialIcon = (iconName: string) => {
    switch (iconName) {
      case "Linkedin":
        return <Linkedin size="20" />;

      case "Facebook":
        return <Facebook size="20" />;

      case "Instagram":
        return <Instagram size="20" />;
    }
  };

  return (
    <section
      id="team"
      className="container py-24 sm:py-32"
    >
      <h2 className="text-3xl md:text-4xl font-bold">
        <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
          Meet Our{" "}
        </span>
        Expert Team
      </h2>

      <p className="mt-4 mb-10 text-xl text-muted-foreground">
        Talented professionals driving innovation and delivering exceptional results for every project.
      </p>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 gap-y-10">
        {teamList.map(
          ({ imageUrl, name, position, socialNetworks }: TeamProps) => (
            <Card
              key={name}
              className="bg-muted/50 relative mt-8 flex flex-col justify-center items-center"
            >
              <CardHeader className="mt-8 flex justify-center items-center pb-2">
                <img
                  src={imageUrl}
                  alt={`${name} ${position}`}
                  className="absolute -top-12 rounded-full w-24 h-24 aspect-square object-cover"
                />
                <CardTitle className="text-center">{name}</CardTitle>
                <CardDescription className="text-primary">
                  {position}
                </CardDescription>
              </CardHeader>

              <CardContent className="text-center pb-2">
                <p>
                  {name === "Muhammad Aris Septanugroho" ? "Visionary leader with expertise in complex system development and IT solutions." :
                   name === "Rafael Satrio" ? "Technical architect specializing in scalable backend systems and cloud infrastructure." :
                   name === "Bimantoro" ? "Expert in database design, API development, and server-side optimization." :
                   name === "Dyo Pascal" ? "Frontend specialist creating intuitive and responsive user interfaces." :
                   name === "Dika" ? "Creative designer and developer focused on user experience and visual design." :
                   "Infrastructure expert ensuring reliable deployments and system security."}
                </p>
              </CardContent>

              <CardFooter>
                {socialNetworks.map(({ name, url }: SociaNetworkslProps) => (
                  <div key={name}>
                    <a
                      rel="noreferrer noopener"
                      href={url}
                      target="_blank"
                      className={buttonVariants({
                        variant: "ghost",
                        size: "sm",
                      })}
                    >
                      <span className="sr-only">{name} icon</span>
                      {socialIcon(name)}
                    </a>
                  </div>
                ))}
              </CardFooter>
            </Card>
          )
        )}
      </div>
    </section>
  );
};
