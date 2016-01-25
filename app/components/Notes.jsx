import React from 'react';
import Note from './Note';

class Notes extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <ul>
        {this.props.notes.map(note =>
          <li key={note.id}>
            <Note task={note.task}
                  onEdit={this.props.onEdit.bind(null, note.id)}
                  onDelete={this.props.onDelete.bind(null, note.id)} />
          </li>)}
      </ul>
    );
  }
}

export default Notes;
