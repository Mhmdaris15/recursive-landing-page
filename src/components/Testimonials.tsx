import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

interface TestimonialProps {
  image: string;
  name: string;
  userName: string;
  comment: string;
}

const testimonials: TestimonialProps[] = [
  {
    image: "https://github.com/shadcn.png",
    name: "Sarah Johnson",
    userName: "@tech_sarah",
    comment: "Recursive Tech delivered exactly what we needed - a complex e-commerce platform that handles our growing business perfectly.",
  },
  {
    image: "https://github.com/shadcn.png",
    name: "Michael Chen",
    userName: "@michael_dev",
    comment:
      "Their AI integration solution transformed our workflow. The team's expertise in complex systems is outstanding.",
  },

  {
    image: "https://github.com/shadcn.png",
    name: "David Rodriguez",
    userName: "@david_startup",
    comment:
      "From web development to mobile app, Recursive Tech provided end-to-end solutions. Professional service and cutting-edge technology.",
  },
  {
    image: "https://github.com/shadcn.png",
    name: "Emily Wilson",
    userName: "@emily_creative",
    comment:
      "The UI/UX design and 3D modeling work exceeded our expectations. They truly understand modern design principles.",
  },
  {
    image: "https://github.com/shadcn.png",
    name: "James Thompson",
    userName: "@james_biz",
    comment:
      "Recursive Tech's comprehensive IT solutions helped scale our business. Their technical expertise is unmatched.",
  },
  {
    image: "https://github.com/shadcn.png",
    name: "Lisa Park",
    userName: "@lisa_marketing",
    comment:
      "The photography and videography services complemented their tech work perfectly. A true full-service IT partner.",
  },
];

export const Testimonials = () => {
  return (
    <section
      id="testimonials"
      className="container py-24 sm:py-32"
    >
      <h2 className="text-3xl md:text-4xl font-bold">
        Discover Why
        <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
          {" "}
          Clients Trust{" "}
        </span>
        Recursive Tech
      </h2>

      <p className="text-xl text-muted-foreground pt-4 pb-8">
        See what our clients say about our comprehensive IT solutions and complex system development expertise.
      </p>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 sm:block columns-2  lg:columns-3 lg:gap-6 mx-auto space-y-4 lg:space-y-6">
        {testimonials.map(
          ({ image, name, userName, comment }: TestimonialProps) => (
            <Card
              key={userName}
              className="max-w-md md:break-inside-avoid overflow-hidden"
            >
              <CardHeader className="flex flex-row items-center gap-4 pb-2">
                <Avatar>
                  <AvatarImage
                    alt=""
                    src={image}
                  />
                  <AvatarFallback>OM</AvatarFallback>
                </Avatar>

                <div className="flex flex-col">
                  <CardTitle className="text-lg">{name}</CardTitle>
                  <CardDescription>{userName}</CardDescription>
                </div>
              </CardHeader>

              <CardContent>{comment}</CardContent>
            </Card>
          )
        )}
      </div>
    </section>
  );
};
