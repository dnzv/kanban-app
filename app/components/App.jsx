import React from 'react';
import AltContainer from 'alt-container';
import Lanes from './Lanes';
import LaneActions from '../actions/LaneActions';
import LaneStore from '../stores/LaneStore';
import {DragDropContext} from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';

@DragDropContext(HTML5Backend)
//alternative: DragDropContext(HTML5Backend)(App);
class App extends React.Component {
  render() {
    return (
      <div className="wrapper">
        <button className="add-lane" onClick={this.addLane}>+</button>
        <AltContainer
          stores={[LaneStore]}
          inject={{
            lanes: () => LaneStore.getState().lanes || []
          }}>
          <Lanes />
        </AltContainer>
      </div>
    );
  }

  addLane() {
    LaneActions.create({name: "New lane"});
  }
}

export default App;
