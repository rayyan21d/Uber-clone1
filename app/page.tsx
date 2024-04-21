import Image from "next/image";

export default function Home() {
  return (
    <div>
      <h1 className="text-3xl font-bold">Welcome to my website</h1>
      <p className="text-lg mt-4">
        This is a website created using Next.js and Tailwind CSS
      </p>
      <Image
        src="/nextjs.svg"
        alt="Next.js Logo"
        width={200}
        height={100}
        className="mt-4"
      />
    </div>
  );
}
