import uuid from 'node-uuid';
import alt from '../libs/alt';
import update from 'react-addons-update';
import LaneActions from '../actions/LaneActions';

class LaneStore {
  constructor() {
    this.bindActions(LaneActions);
    this.lanes = [];
  }

  create(lane) {
    const lanes = this.lanes;

    lane.id = uuid.v4();
    lane.notes = lane.notes || [];

    this.setState({
      lanes: lanes.concat(lane)
    });
  }

  update(updatedLane) {
    const lanes = this.lanes.map(lane => {
      if(lane.id === updatedLane.id) {
        return Object.assign({}, lane, updatedLane);
      }
      return lane;
    });

    this.setState({lanes});
  }

  delete(id) {
    this.setState({
      lanes: this.lanes.filter(lane => lane.id !== id)
    });
  }

  move({sourceId, targetId}) {
    const lanes = this.lanes;
    const sourceLane = lanes.filter(lane => {
      return lane.notes.indexOf(sourceId) >= 0;
    })[0];
    const targetLane = lanes.filter(lane => {
      return lane.notes.indexOf(targetId) >= 0;
    })[0];
    const sourceNoteIndex = sourceLane.notes.indexOf(sourceId);
    const targetNoteIndex = targetLane.notes.indexOf(targetId);

    if(sourceLane === targetLane) {
      sourceLane.notes = update(sourceLane.notes, {
        $splice: [
          [sourceNoteIndex, 1],
          [targetNoteIndex, 0, sourceId]
        ]
      });
    }
    else {
      sourceLane.notes.splice(sourceNoteIndex, 1);
      targetLane.notes.splice(targetNoteIndex, 0, sourceId);
    }

    this.setState({lanes});
  }

  attachToLane({laneId, noteId}) {
    const lanes = this.lanes.map(lane => {
      if(lane.notes.indexOf(noteId) >= 0) {
        lane.notes = lane.notes.filter(note => note !== noteId);
      }

      if (lane.id === laneId) {
        if (lane.notes.indexOf(noteId) === -1) {
          lane.notes.push(noteId);
        } else {
          console.warn("Already attached note to lane", lanes);
        }
      }
      return lane;
    });
    this.setState({lanes});
  }

  detachFromLane({laneId, noteId}) {
    const lanes = this.lanes.map(lane => {
      if (lane.id === laneId) {
        lane.notes = lane.notes.filter(note => note !== noteId);
      }
      return lane;
    });

    this.setState({lanes});
  }
}

export default alt.createStore(LaneStore, 'LaneStore');
