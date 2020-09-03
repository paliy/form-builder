import React from 'react';

class NumberField extends React.Component {

  render () {
    const { name, label, placeholder, required } = this.props

    return (
      <>
        {label && <label>{label}</label>}
        <input
          onChange={this.handleChange}
          className="form-control"
          type="number"
          name={name}
          required={required}
          id={name}
          placeholder={placeholder || ""}
        />
      </>
    );
  }

  handleChange = (e) => {
    sessionStorage.setItem([e.target.name], e.target.value)
  }
}

export default NumberField;
