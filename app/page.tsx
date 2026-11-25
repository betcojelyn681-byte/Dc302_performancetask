import Link from "next/link";

export default function Home() {
  return (
    <div className="py-12 px-6 max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Hello, my name is Jelyn Betco</h1>
      <p className="mb-4">
        I am a software engineer learning Next.js, building personal projects
        to sharpen my skills.
      </p>
      <p className="mb-6">
        I enjoy writing clean code, solving problems, and creating websites
        that are useful and easy to use.
      </p>
      <Link href="/projects" className="text-blue-600 hover:underline font-medium">
        See my projects
      </Link>
    </div>
  );
}
