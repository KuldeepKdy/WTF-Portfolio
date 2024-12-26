import image1 from "@/assets/images/project-1.jpg";
import image2 from "@/assets/images/project-2.jpg";
import image3 from "@/assets/images/project-3.jpg";
import image4 from "@/assets/images/project-4.jpg";
import image5 from "@/assets/images/project-5.jpg";
import Image from "next/image";
import Link from "next/link";

const Projects = () => {
  /* eslint-disable-next-line @typescript-eslint/no-unused-vars */
  const projects = [
    {
      name: "Artisan Brew Co.",
      image: image1,
    },
    {
      name: "Wavelength Studios",
      image: image2,
    },
    {
      name: "Nova Fitness",
      image: image3,
    },
    {
      name: "Urban Plates",
      image: image4,
    },
    {
      name: "Bloom Botanicals",
      image: image5,
    },
  ];
  return (
    <section className="py-24">
      <div className="container">
        <h2 className="text-4xl">Selected works</h2>
        <div className="mt-10">
          {projects.map(({ name, image }) => (
            <Link href="#" key={name}>
              <div className="border-t border-stone-600 border-dotted py-6">
                <Image src={image} alt={name} className="w-full" />
                <div className="mt-8 flex justify-between ">
                  <h3 className="text-2xl">{name}</h3>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="size-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"
                    />
                  </svg>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;