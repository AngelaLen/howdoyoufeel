import React, {Component} from "react";

class FeelingItems extends Component {
  constructor(props) {
    super (props);

    this.createFeelings = this.createFeelings.bind(this);
  }

// make a formated object of each feeling i.e. item in the list we want to print
createFeelings(feeling){
  return <li key={feeling.key}>{feeling.time} > {feeling.emoji}</li>
}

render(){
  var feelings = this.props.addedFeelings;
  var listFeelings = feelings.map(this.createFeelings);


return (
  <ul>
{listFeelings}
  </ul>
);

}
}

export default FeelingItems;
