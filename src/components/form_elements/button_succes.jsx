import React from 'react';

class SubmitButton extends React.Component {

  render () {
    const { title } = this.props

    return (
      <button
        className="btn btn-success custom-btn"
        type="submit"
      >
        {title}
      </button>
    );
  }

  // handleSubmit = () => {
  //   // Object.keys(sessionStorage).map((key, ind) => {
  //   //   console.log(key, sessionStorage[key])
  //   //   return null
  //   // })
  //   console.log(sessionStorage)
  // }
}

export default SubmitButton;
