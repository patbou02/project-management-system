import Button from './Button.jsx';

function ProjectsSidebar({ onStartAddProject, projects, onSelectProject, selectedProjectId }) {
  return (
    <aside className="w-1/3 px-8 py-16 bg-stone-900 text-stone-50 md:w-72 rounded-r-xl">
      <h2 className="mb-8 font-bold uppercase md:text-xl text-stone-200">Your Projects</h2>
      <Button onClick={onStartAddProject}>+ Add Project</Button>
      <ul className="mt-8">
        {projects.map(project => {
          let buttonStyles = `w-full text-left px-2 py-1 rounded-sm my-1 hover:text-stone-200 ${project.id === selectedProjectId ? 'text-stone-200' : 'text-stone-400'}`;

          return (
            <li key={project.id}>
              <button className={buttonStyles} onClick={() => onSelectProject(project.id)}>{project.title}</button>
            </li>
          );
        })}
      </ul>
    </aside>
  );
}

export default ProjectsSidebar;