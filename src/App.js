import React from "react";
import ConfigForm from "./components/config_form"
import ResultForm from "./components/result_form"

class App extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      isConfigPage: true,
      isResultPage: false
    }
  }

  handleClickCongigLink = () => {
    const {isConfigPage, isResultPage} = this.state
    if (!isConfigPage) {
      this.setState({
        isConfigPage: !isConfigPage,
        isResultPage: !isResultPage
      })
    }
  }

  handleClickResultLink = () => {
    const {isConfigPage, isResultPage} = this.state

    if (!isResultPage) {
      this.setState({
        isResultPage: !isResultPage,
        isConfigPage: !isConfigPage
      })
    }
  }


  render() {
    const {isConfigPage, isResultPage} = this.state
    const isActiveConfig = isConfigPage ? "active" : "standart"
    const isActiveResult = isResultPage ? "active" : "standart"

    return (
      <div className="application-wrapper">
        <div className="application-header">
          <ul>
            <li className={isActiveConfig} onClick={this.handleClickCongigLink}>Config</li>
            <li className={isActiveResult} onClick={this.handleClickResultLink}>Result</li>
          </ul>
        </div>
        <div className="application-body">
          {isConfigPage ? <ConfigForm /> : <ResultForm />}
        </div>
      </div>
    );
  }
}

export default App;
