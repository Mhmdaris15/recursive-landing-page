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
  description: string;
  socialNetworks: SociaNetworkslProps[];
}

interface SociaNetworkslProps {
  name: string;
  url: string;
}

const teamList: TeamProps[] = [
  {
    imageUrl: "/src/assets/foto-aris.jpg",
    name: "Aris Septanugroho",
    position: "CEO & Founder",
    description: "Visionary leader with expertise in complex system development and IT solutions.",
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
    imageUrl: "https://i.pravatar.cc/150?img=13",
    name: "Rafael Satrio",
    position: "Senior Backend Developer",
    description: "Technical architect specializing in scalable backend systems and cloud infrastructure.",
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
    name: "Bimantoro Winardi",
    position: "UI/UX Designer",
    description: "Creative user experience designer crafting intuitive and beautiful digital interfaces.",
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
    imageUrl: "https://i.pravatar.cc/150?img=68",
    name: "Claudyo Pasqal",
    position: "Senior Frontend Developer",
    description: "Frontend specialist creating responsive and modern web applications.",
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
    imageUrl: "https://i.pravatar.cc/150?img=12",
    name: "Dika Abdillah",
    position: "Photography & Videography Specialist",
    description: "Visual storyteller capturing compelling photography and videography content.",
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
    imageUrl: "https://i.pravatar.cc/150?img=17",
    name: "Satria Erlangga",
    position: "Game Developer",
    description: "Game development expert creating immersive interactive experiences.",
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
    imageUrl: "https://i.pravatar.cc/150?img=3",
    name: "Fadlan Ahmad",
    position: "Senior 3D Designer",
    description: "3D modeling and animation specialist bringing concepts to life in three dimensions.",
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
    imageUrl: "https://i.pravatar.cc/150?img=4",
    name: "Ardiansyah",
    position: "Junior Frontend Developer",
    description: "Emerging frontend developer passionate about modern web technologies.",
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
          ({ imageUrl, name, position, description, socialNetworks }: TeamProps) => (
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
                <p>{description}</p>
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
