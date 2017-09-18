import React, { Component } from 'react';
import updateForm from '../actions/farmer.actions';

const resetForm = (name,father_name,cnic,owned_acerage,cultivated_acerage) => {
  name.value='';
  father_name.value='';
  cnic.value='';
  owned_acerage.value='';
  cultivated_acerage.value='';
}

class FarmerForm extends Component {
  render() {
    let name, father_name, cnic, owned_acerage, cultivated_acerage, farmer_number;

    return (
      <div>

          <label for="name">Name: </label>
          <input ref={node => {
              name=node
            }}
            type="text" id="name"
          /> <br />

          <label for="father_name">Father Name</label>
          <input ref={node => {
              father_name=node
            }}
            type="text" id="father_name"
          /> <br />

          <label for="cnic">CNIC</label>
          <input ref={node => {
              cnic=node
            }}
            type="text" pattern="[0-9]*" id="cnic"
          /> <br />

          <label for="owned_acerage">Owned Acerage</label>
          <input ref={node => {
              owned_acerage=node
            }}
            type="text" pattern="[0-9]*" id="owned_acerage"
          /> <br />

          <label for="cultivated_acerage">Cultivated Acerage</label>
          <input ref={node => {
              cultivated_acerage=node
            }}
            type="text" pattern="[0-9]*" id="cultivated_acerage"
          /> <br />

        <button onClick={() => {
          this.props.dispatch(updateForm(name.value,father_name.value,cnic.value,owned_acerage.value,cultivated_acerage.value));
          resetForm(name,father_name,cnic,owned_acerage,cultivated_acerage);
        }}>
          Add Value
        </button>
    </div>
    )
  }
}

export default FarmerForm;
