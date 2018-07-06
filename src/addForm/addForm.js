import React, { Component } from 'react';
import '../App.css';

class AddForm extends Component {
  render() {
    return (
      <form onSubmit={this.props.handleSubmit}>

          <div className="form-group">
            <label htmlFor="usr">Quantity:</label>
            <input type="number" className="form-control" id="usr" onChange={this.props.handleQuantityChange} />
          </div>
          <div className="form-group">
            <label htmlFor="sel1">Products:</label>
            <select className="form-control" id="sel1" onChange={this.props.handleItemChange} >
              { this.props.items.map((item , i)=> <option key={i}>{ item.name }</option>)}
            </select>
          </div>

        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    );
  }
}

export default AddForm;
