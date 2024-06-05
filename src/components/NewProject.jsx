import Input from './Input.jsx';

export default function NewProject() {
  return (
    <div>
      <menu>
        <li><button>Cancel</button></li>
        <li><button>Save</button></li>
        <div>
          <Input label="Title" type="text" />
          <Input label="Description" textarea />
          <Input label="Due Date" type="text" />
        </div>
      </menu>
    </div>
  );
}

