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
    name: "Sari Indrawati",
    userName: "@sari_startup",
    comment: "Recursive Tech berhasil membangun platform e-commerce yang sangat kompleks untuk bisnis kami. Tim mereka sangat profesional dan hasilnya melebihi ekspektasi.",
  },
  {
    image: "https://github.com/shadcn.png",
    name: "Budi Santoso",
    userName: "@budi_tech",
    comment: "Implementasi AI untuk sistem inventory kami benar-benar mengubah cara kerja perusahaan. Efisiensi meningkat drastis berkat solusi dari Recursive Tech.",
  },
  {
    image: "https://github.com/shadcn.png",
    name: "Maya Kusuma",
    userName: "@maya_creative",
    comment: "Dari website hingga aplikasi mobile, Recursive Tech memberikan solusi end-to-end yang luar biasa. Desain UI/UX nya sangat menarik dan user-friendly.",
  },
  {
    image: "https://github.com/shadcn.png",
    name: "Andi Wijaya",
    userName: "@andi_bisnis",
    comment: "Tim Recursive Tech membantu transformasi digital perusahaan kami dengan sempurna. Sistem yang mereka bangun sangat robust dan scalable.",
  },
  {
    image: "https://github.com/shadcn.png",
    name: "Dewi Sartika",
    userName: "@dewi_marketing",
    comment: "Pelayanan photography dan videography mereka sangat berkualitas, ditambah dengan expertise IT yang kuat. Benar-benar partner teknologi yang lengkap.",
  },
  {
    image: "https://github.com/shadcn.png",
    name: "Reza Pratama",
    userName: "@reza_founder",
    comment: "Recursive Tech tidak hanya mengembangkan aplikasi, tapi juga memberikan konsultasi strategis yang sangat berharga. Highly recommended!",
  },
];

export const Testimonials = () => {
  return (
    <section
      id="testimonials"
      className="container py-24 sm:py-32"
    >
      <h2 className="text-3xl md:text-4xl font-bold">
        Kenapa Klien
        <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
          {" "}
          Mempercayai{" "}
        </span>
        Recursive Tech
      </h2>

      <p className="text-xl text-muted-foreground pt-4 pb-8">
        Testimoni dari klien-klien yang telah merasakan langsung kualitas solusi IT dan pengembangan sistem kompleks dari kami.
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
