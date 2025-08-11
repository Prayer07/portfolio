import Link from "next/link";

const languages =  [
    {
        id: 1,
        name: "Javascript",
    },
    {
        id: 2,
        name: "React",
    },
    {
        id: 3,
        name: "Next.js",
    },
    {
        id: 4,
        name: "Python",
    },
]

export default function Page() {
  return (
    <>
    {languages.map((l) =>(
        <Link key={l.id} href={`/projects/${l.name}`}>
          <div className="border border-gray-300 rounded-lg p-4 shadow-sm lang">
            <h2 className="text-xl font-bold">{l.name}</h2>
          </div>
        </Link>
    ))}
    </>
  );
}