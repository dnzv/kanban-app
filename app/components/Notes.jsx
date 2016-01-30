import React from 'react';
import Editable from './Editable';

class Notes extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {notes, onValueClick, onEdit, onDelete} = this.props;

    return (
      <ul className="notes">{notes.map(note =>
        <li className="note" key={note.id}>
          <Editable
            editing={note.editing}
            value={note.task}
            onValueClick={onValueClick.bind(null, note.id)}
            onEdit={onEdit.bind(null, note.id)}
            onDelete={onDelete.bind(null, note.id)} />
        </li>
      )}</ul>
    );
  }
}

export default Notes;
