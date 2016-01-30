import React from 'react';
import Lane from './Lane';

class Lanes extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="lanes">{this.props.lanes.map(lane =>
          <Lane className="lane" key={lane.id} lane={lane} />
        )}
      </div>
    );
  }
}

export default Lanes;
