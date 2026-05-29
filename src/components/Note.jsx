const Note = ({ note, toggleImportance }) => {
  const label = note.important
    ? 'mark unimportant' : 'mark important'
  
  return (
    <li className="note" style={{display: 'flex', gap: '4px',marginBlock: '4px'}}>
      <span className="">
      
      {note.content}
      </span>
      <button onClick={toggleImportance}>{label}</button>
    </li>
  )
}

export default Note;
