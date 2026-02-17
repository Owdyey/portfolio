import { Button } from "@/components/ui/button";

export default function Page() {
  return (
    <div>
      {/* Hero section */}
      <div className="w-1/2 mx-auto flex flex-col gap-5 text-center">
        <h1 className="text-4xl font-semibold">
          Full-Stack Web Developer building scalable, modern web applications.
        </h1>
        <p className="font-light text-lg text-gray-400">
          I design and develop reliable web applications using modern
          development tools.
        </p>
        <div>
          <Button size={"lg"}>Download Resume</Button>
        </div>
      </div>
    </div>
  );
}
