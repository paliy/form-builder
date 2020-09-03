import React from 'react';

class TextArea extends React.Component {

  render () {
    const { name, label, placeholder, required } = this.props

    return (
      <>
        {label && <label>{label}</label>}
        <textarea
          onChange={this.handleChange}
          className="form-control"
          type="text"
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

export default TextArea;
