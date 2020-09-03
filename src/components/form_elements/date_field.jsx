import React from 'react';

class DateField extends React.Component {

  render () {
    const { name, label } = this.props

    return (
      <>
        {label && <label>{label}</label>}
        <input
          onChange={this.handleChange}
          className="form-control"
          type="date"
          name={name}
          id={name}
        />
      </>
    );
  }

  handleChange = (e) => {
    sessionStorage.setItem([e.target.name], e.target.value)
  }
}

export default DateField;
