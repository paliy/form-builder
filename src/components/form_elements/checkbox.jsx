import React from 'react';

class CheckBox extends React.Component {

  render () {
    const { name, label } = this.props

    return (
      <>
        {label && <label>{label}</label>}
        <input
          onChange={this.handleChange}
          className="form-control"
          type="checkbox"
          name={name}
          id={name}
        />
      </>
    );
  }

  handleChange = (e) => {
    sessionStorage.setItem([e.target.name], e.target.checked)
  }
}

export default CheckBox;
