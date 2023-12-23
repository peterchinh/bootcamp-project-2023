import Project from "@/database/projectSchema"
import ProjectList from '@/components/projectList'
import connectDB from '@/helpers/db'

async function getProjects() {
  await connectDB();

  try {
    // query for all projects and sort by name
    const projects = await Project.find().sort({ title: 1}).orFail();
    // send a response as the projects as the message
    return projects;
  } catch (err) {
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
    )
  }
  else {
    return (
        <main>
        <h1 className="page-title">Portfolio</h1>
        {projects.map((project) => (
          <ProjectList // call the project component
            title={project.title}
            description={project.description}
            image={project.image}
            link={project.link}
            slug={project.slug} 
            comments={project.comments}          />
        ))}
      </main>
    )
  }
}