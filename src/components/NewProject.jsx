import Input from './Input.jsx';
import Button from './Button.jsx';

export default function NewProject() {
  return (
    <div className="w-[35rem] mt-16">
      <menu className="flex items-center justify-end gap-4 my-4">
        <li>
          <button className="text-stone-800 hover:text-stone-950">Cancel</button>
        </li>
        <li>
          <Button>Save</Button>
        </li>
      </menu>
      <div>
        <Input label="Title" type="text"/>
        <Input label="Description" textarea/>
        <Input label="Due Date" type="text"/>
      </div>
    </div>
  );
}

