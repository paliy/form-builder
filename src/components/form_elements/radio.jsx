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
    console.log('op', options)
    const selectedOption = this.state.selectedOption

    return (
      <div onChange={this.handleChange}>
        {label && <p>{label}</p>}
        {Object.keys(options).map( (key, ind) => (
          <>
            {key && <label>{options[key]}</label>}
            <input
              className="form-control"
              type="radio"
              checked={selectedOption ? selectedOption === options[key] : false}
              value={options[key]}
              name={key}
              id={key}
            />
          </>
        ))}
      </div>
    );
  }

  // {
  //     "radio": {
  //         "type": "radio",
  //         "label": "radio oprosik",
  //         "options": {
  //             "radio1": "Yuriy"
  //             "radio2": "Yuriy 2"
  //         }
  //     }
  // }

  handleChange = (e) => {
    sessionStorage.setItem('selectedOption', e.target.value)
    this.setState({
      selectedOption: e.target.value
    })
  }
}

export default RadioButton;
