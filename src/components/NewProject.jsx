import { useRef } from 'react';

import Input from './Input.jsx';
import Button from './Button.jsx';
import Modal from './Modal.jsx';

export default function NewProject({ onAdd, onCancel }) {
  const modal      = useRef();
  const title      = useRef();
  const description= useRef();
  const dueDate    = useRef();

  const handleSave = () => {
    const enteredTitle       = title.current.value;
    const enteredDescription = description.current.value;
    const enteredDueDate     = dueDate.current.value;

    if (enteredTitle.trim() === '' || enteredDescription.trim() === '' || enteredDueDate === '') {
      modal.current.open();
      return;
    }

    onAdd({
      title: enteredTitle,
      description: enteredDescription,
      dueDate: enteredDueDate,
    });
  };


  return (
    <>
      <Modal ref={modal} buttonCaption="Close">
        <h2 className="text-xl font-bold text-stone-700 my-4">Invalid Inputs</h2>
        <p className="text-stone-500 mb-4">Ooops! Looks like you forgot to enter a value.</p>
        <p className="text-stone-500 mb-4">Please make sure you provide a valid value for every input field.</p>
      </Modal>
      <div className="w-[35rem] mt-16">
        <menu className="flex items-center justify-end gap-4 my-4">
          <li>
            <button onClick={onCancel} className="text-stone-800 hover:text-stone-950">Cancel</button>
          </li>
          <li>
            <Button onClick={handleSave}>Save</Button>
          </li>
        </menu>
        <div>
          <Input ref={title} label="Title" type="text"/>
          <Input ref={description} label="Description" textarea/>
          <Input ref={dueDate} label="Due Date" type="date"/>
        </div>
      </div>
    </>
  );
}

