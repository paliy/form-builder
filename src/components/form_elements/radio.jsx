import React from 'react';

class RadioButton extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      selectedOption: false,
    }
  }

  render () {
    const { label, options } = this.props
    const selectedOption = this.state.selectedOption

    return (
      <>
        {label && <p>{label}</p>}
        {Object.keys(options).map( (key, ind) => (
          <div className="radio-block" key={key}>
            {key && <label>{options[key]}</label>}
            <input
              onChange={this.handleChange}
              className="radio-control"
              type="radio"
              checked={selectedOption ? selectedOption === options[key] : false}
              value={options[key]}
              name={key}
              id={key}
            />
        </div>
        ))}
      </>
    );
  }

  handleChange = (e) => {
    sessionStorage.setItem('selectedOption', e.target.value)
    this.setState({
      selectedOption: e.target.value
    })
  }
}

export default RadioButton;
