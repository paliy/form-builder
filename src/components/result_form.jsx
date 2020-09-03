import React from 'react';
import TextField from './form_elements/text_field';
import TextArea from './form_elements/text_area';
import NumberField from './form_elements/number_field';
import CheckBox from './form_elements/checkbox';
import DateField from './form_elements/date_field';
import RadioButton from './form_elements/radio';
import SubmitButton from './form_elements/button_succes';
import '../App.css';

class ResultForm extends React.Component {

  handleSubmit = () => {
    Object.keys(sessionStorage).map((key, ind) => {
      console.log(key, sessionStorage[key])
      return null
    })
  }

  getFormElement = (elementName, elementSchema) => {
    const props = {
      name: elementName,
      label: elementSchema.label,
      options: elementSchema.options,
      title: elementSchema.title,
      required: elementSchema.required,
    };

    if (elementSchema.type === 'numberfield') {
      return <NumberField {...props} />
    }

    if (elementSchema.type === "textfield") {
      return <TextField {...props} />
    }

    if (elementSchema.type === "textarea") {
      return <TextArea {...props} />
    }

    if (elementSchema.type === "submit") {
      return <SubmitButton {...props} />
    }

    if (elementSchema.type === "checkbox") {
      return <CheckBox {...props} />
    }

    if (elementSchema.type === "radio") {
      return <RadioButton {...props} />
    }

    if (elementSchema.type === "datefield") {
      return <DateField {...props} />
    }

  }

  render () {
    const storageSchema = localStorage.getItem('schema') ? JSON.parse(localStorage.getItem('schema')) : {}

    return (
      <div className="app-result">
        <div className="app-content">
          <form onSubmit={this.handleSubmit}>
            {Object.keys(storageSchema).map( (key, ind) => (
              <div className={key} key={key}>
                {this.getFormElement(key, storageSchema[key])}
              </div>
              ))
            }
          </form>
        </div>
      </div>
    );
  }
}

export default ResultForm;
