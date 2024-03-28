import Project, { IProject } from "@/database/projectSchema";
import ProjectList from "@/components/projectList";
import connectDB from "@/helpers/db";

async function getProjects() {
  try {
    const res = await fetch(
      `https://bootcamp-project-2023-eight.vercel.app/api/project/`,
      {
        cache: "no-store",
      }
    );

    if (!res.ok) {
      throw new Error("Failed to fetch blog");
    }

    return res.json();
  } catch (err: unknown) {
    console.log(`error: ${err}`);
    return null;
  }
}

export default async function Portfolio() {
  const projects = await getProjects();
  // check if the response was null
  if (projects == null) {
    return (
      <main>
        <h1 className="page-title">Portfolio</h1>
        <p>No projects at the moment.</p>
      </main>
    );
  } else {
    return (
      <main>
        <h1 className="page-title">Portfolio</h1>
        {projects.map((project: IProject) => (
          <ProjectList // call the project component
            title={project.title}
            description={project.description}
            image={project.image}
            link={project.link}
            slug={project.slug}
            comments={project.comments}
          />
        ))}
      </main>
    );
  }
}
