export const metadata = {
  title: "Projects | Jelyn Betco",
};

const projects = [
  { id: 1, name: "Task Tracker", description: "A to-do app to organize daily tasks and deadlines." },
  { id: 2, name: "Weather Dashboard", description: "A weather app that shows current conditions and forecasts." },
  { id: 3, name: "Portfolio Site", description: "This personal site built with Next.js and Tailwind CSS." },
];

export default function ProjectsPage() {
  return (
    <div className="py-12 px-6 max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold mb-8">Projects</h1>
      <ul className="space-y-4">
        {projects.map((project) => (
          <li key={project.id} className="p-4 border rounded-lg">
            <h2 className="text-xl font-semibold">{project.name}</h2>
            <p className="text-zinc-600">{project.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
