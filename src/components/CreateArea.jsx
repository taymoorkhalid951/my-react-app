import React from "react";

function CreateArea(props) {
  const[note, setNote] = React.useState({
    title: "",
    content: ""
  })
  function handleChange(event) {
    const {name, value} = event.target;
    setNote((prevNote)=> {
      return {
        ...prevNote,
        [name]: value
      }
    });
  }

  function addItem(event) {
    event.preventDefault();
    props.onAdd(note);
    setNote({
      title: "",
      content: ""
    });
  }
  return (
    <div>
      <form>
        <input onChange={handleChange} name="title" placeholder="Title" value= {note.title} />
        <textarea onChange={handleChange} name="content" placeholder="Take a note..." rows="3" value={note.content} />
        <button onClick={addItem}>Add</button>
      </form>
    </div>
  );
}

export default CreateArea;
