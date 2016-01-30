import React from 'react';
import Note from './Note';
import Editable from './Editable';
import LaneActions from '../actions/LaneActions';

class Notes extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {notes, onValueClick, onEdit, onDelete, onMove} = this.props;

    return (
      <ul className="notes">{notes.map(note =>
        <Note className="note" id={note.id} key={note.id}
              onMove={onMove}>
          <Editable
            editing={note.editing}
            value={note.task}
            onValueClick={onValueClick.bind(null, note.id)}
            onEdit={onEdit.bind(null, note.id)}
            onDelete={onDelete.bind(null, note.id)} />
        </Note>)}
      </ul>
    );
  }
}

export default Notes;
