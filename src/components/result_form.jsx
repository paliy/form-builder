import React from 'react';
import Form from 'react-jsonschema-form';
import '../App.css';

class ResultForm extends React.Component {

  handleChangeForm = (e) => {
    localStorage.setItem('formData', JSON.stringify(e.formData))
  }

  handleSubmitForm = () => {
    console.log(JSON.parse(localStorage.getItem('formData')))
  }

  render () {
    const storageSchema = localStorage.getItem('schema') ? JSON.parse(localStorage.getItem('schema')) : {}
    const storageUiSchema = localStorage.getItem('uiSchema') ? JSON.parse(localStorage.getItem('uiSchema')) : {}

    return (
      <div className="app-result">
        <div className="app-content">
          <Form onChange={this.handleChangeForm} schema={storageSchema} uiSchema={storageUiSchema}>
            <div>
              {storageSchema.btn_cancel&& <button className="btn btn-light" type="button">{storageSchema.btn_cancel}</button>}
              {storageSchema.btn_submit && <button onClick={this.handleSubmitForm} className="btn btn-success custom-btn" type="submit">{storageSchema.btn_submit}</button>}
            </div>
          </Form>
        </div>
      </div>
    );
  }
}

export default ResultForm;
