import React from 'react';
import MonacoEditor from 'react-monaco-editor';
import '../App.css';

class ConfigForm extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      canSubmit: false,
    }
  }

  handleChangeSсhemaInput = (newValue, e) => {
    this.setState({
      schema: newValue,
      error: false
    })
  }

  handleChangeUiSсhemaInput = (newValue, e) => {
    this.setState({
      uiSchema: newValue,
      error: false
    })
  }

  handleSubmit = () => {
    try {
      const schema = this.state.schema === undefined ? {} : JSON.parse(this.state.schema)
      const uiSchema = this.state.uiSchema === undefined ? {} : JSON.parse(this.state.uiSchema)

      localStorage.setItem('schema', JSON.stringify(schema))
      localStorage.setItem('uiSchema', JSON.stringify(uiSchema))
    } catch(error) {
      this.setState({
        error: true,
        hint: error
      })
    }
  }

  render() {
    const options = {
      "acceptSuggestionOnCommitCharacter": true,
      "acceptSuggestionOnEnter": "on",
      "accessibilitySupport": "auto",
      "autoIndent": false,
      "validate": true,
      "automaticLayout": true,
      "codeLens": true,
      "colorDecorators": true,
      "contextmenu": true,
      "cursorBlinking": "blink",
      "cursorSmoothCaretAnimation": false,
      "cursorStyle": "line",
      "disableLayerHinting": false,
      "disableMonospaceOptimizations": false,
      "dragAndDrop": false,
      "fixedOverflowWidgets": false,
      "folding": true,
      "foldingStrategy": "auto",
      "fontLigatures": false,
      "formatOnPaste": false,
      "formatOnType": false,
      "hideCursorInOverviewRuler": false,
      "highlightActiveIndentGuide": true,
      "links": true,
      "mouseWheelZoom": false,
      "multiCursorMergeOverlapping": true,
      "multiCursorModifier": "alt",
      "overviewRulerBorder": true,
      "overviewRulerLanes": 2,
      "quickSuggestions": true,
      "quickSuggestionsDelay": 100,
      "readOnly": false,
      "renderControlCharacters": false,
      "renderFinalNewline": true,
      "renderIndentGuides": true,
      "renderLineHighlight": "all",
      "renderWhitespace": "none",
      "revealHorizontalRightPadding": 30,
      "roundedSelection": true,
      "rulers": [],
      "scrollBeyondLastColumn": 5,
      "scrollBeyondLastLine": true,
      "selectOnLineNumbers": true,
      "selectionClipboard": true,
      "selectionHighlight": true,
      "showFoldingControls": "mouseover",
      "smoothScrolling": false,
      "suggestOnTriggerCharacters": true,
      "wordBasedSuggestions": true,
      "wordSeparators": "~!@#$%^&*()-=+[{]}|;:'\",.<>/?",
      "wordWrap": "off",
      "wordWrapBreakAfterCharacters": "\t})]?|&,;",
      "wordWrapBreakBeforeCharacters": "{([+",
      "wordWrapBreakObtrusiveCharacters": ".",
      "wordWrapColumn": 80,
      "wordWrapMinified": true,
      "wrappingIndent": "none"
    }

    const {error} = this.state

    return (
      <div className="app-config">
        <div className="app-content">
          <div className="monaco-container">
            <div className={error ? "monaco-wrapper-error" : "monaco-wrapper"}>
              <div className="schema-editor">
                <p className="editor-title">JSON schema</p>
                <MonacoEditor
                  onChange={this.handleChangeSсhemaInput}
                  language="json"
                  theme="vs-dark"
                  width="500"
                  height="400"
                  options={options}
                />
              </div>
              <div className="schema-editor">
                <p className="editor-title">JSON uiSchema</p>
                <MonacoEditor
                  onChange={this.handleChangeUiSсhemaInput}
                  language="json"
                  theme="vs-dark"
                  width="500"
                  height="400"
                  options={options}
                />
              </div>
            </div>
            {error && <p className="error-msg">Please try to fix error inside your JSON</p>}
            <button
              disabled={error}
              className="btn btn-success apply-btn"
              onClick={this.handleSubmit}>
              GENERATE FORM
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default ConfigForm;
