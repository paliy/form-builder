import React from 'react';
import Form from 'react-jsonschema-form';
import '../App.css';

class ResultForm extends React.Component {

  handleChangeShemaInput = (e) => {
    console.log(e)
    localStorage.setItem('formData', e.formData)
  }

  handleSubmitForm = () => {
    alert(localStorage.getItem('formData'))
  }

  render () {
    const storageSchema = localStorage.getItem('schema') ? JSON.parse(localStorage.getItem('schema')) : {}
    const storageUiSchema = localStorage.getItem('uiSchema') ? JSON.parse(localStorage.getItem('uiSchema')) : {}

    return (
      <div className="app-result">
        <div className="app-content">
          <Form onChange={this.handleChangeShemaInput} schema={storageSchema} uiSchema={storageUiSchema}>
            <div>
              {storageSchema.btn_cancel&& <button className="btn btn-light" type="button">{storageSchema.btn_cancel}</button>}
              {storageSchema.btn_submit && <button onClick={this.handleSubmitForm} className="btn btn-success" type="submit">{storageSchema.btn_submit}</button>}
            </div>
          </Form>
        </div>
      </div>
    );
  }
}

export default ResultForm;
