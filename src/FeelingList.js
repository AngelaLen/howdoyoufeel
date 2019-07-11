import React, {Component} from "react";
import FeelingItems from "./FeelingItems";
import "./FeelingList.css"

class FeelingList extends Component{
constructor(props){
  super(props);

  this.state = {
    feelings: []
  };

  this.addFeeling = this.addFeeling.bind(this);
}

addFeeling(e) {
  //check if a feeling has been chosen before we continue
  if (this._inputElement.value !=="") {
    // yes! we have a new feeling and so we go on gathering the properties of the feeling
    var d = new Date();
    var newItem = {
      emoji: this._inputElement.value,
      key: Date.now(),
      time: d.toLocaleTimeString()
};

// set a newly created list with all existing feelings + the new feeling as the current state
// this is save because we a) rely on the well kept previous state (previous version of the list) and
// b) because we make sure we return a new list instead of modifying the old one
this.setState((prevState) => {
  return{
    feelings: prevState.feelings.concat(newItem)
  };
});

this._inputElement.value="";
  }

  e.preventDefault();
}

render() {
return(
<div className = "feelingListMain" >
<div className = "header" >
<form onSubmit={this.addFeeling}>
<label>How do you feel?</label>
<br />
 <select ref={(a) => this._inputElement = a}>
               <option value = "😺">😺</option>
               <option value = "😹">😹</option>
               <option value = "😻">😻</option>
               <option value = "😼">😼</option>
               <option value = "😸">😸</option>
               <option value = "😽">😽</option>
               <option value = "🙀">🙀</option>
               <option value = "😿">😿</option>
               <option value = "😾">😾</option>
             </select>
<button type="submit">Add</button>
</form>

<FeelingItems addedFeelings={this.state.feelings} />
</div>
</div>

)
}
}

export default FeelingList;
