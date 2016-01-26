import React from 'react';

class Note extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      editing: false
    }
  }

  renderEdit = () => {
    return (
      <input type="text"
             autoFocus={true}
             defaultValue={this.props.task}
             onBlur={this.finishEdit}
             onKeyUp={this.checkEnter}
             ref={
               (e) => e ? e.selectionStart = this.props.task.length : null
             } />
    );
  };

  checkEnter = (e) => {
    if (e.key === 'Enter') {
      this.finishEdit(e);
    }
  };

  finishEdit = (e) => {
    const value = e.target.value;

    if (this.props.onEdit && value.trim()) {
      this.props.onEdit(value);
      this.setState({
        editing: false
      });
    }
  };

  renderNote = () => {
    const onDelete = this.props.onDelete;

    return (
      <div onClick={this.edit}>
        <span className="task">{this.props.task}</span>
        {onDelete ? <button className="delete-note" onClick={onDelete}>x</button> : null}
      </div>
    );
  };

  edit = () => {
    this.setState({
      editing: true
    });
  };

  render() {
    if (this.state.editing) {
      return this.renderEdit();
    }
    return this.renderNote();
  }
}

export default Note;
