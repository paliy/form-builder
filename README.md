This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:
### `yarn instal`
then
### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### Example JSON schema:
```
{
  "textfield": {
    "type": "textfield",
    "name": "client",
    "label": "Client name",
    "required": true
  },
  "numberfield": {
    "type": "numberfield",
    "name": "age",
    "label": "Age",
    "required": true
  },
  "textarea": {
    "type": "textarea",
    "name": "description",
    "label": "About client",
    "required": true
  },
  "checkbox": {
    "type": "checkbox",
    "name": "isMarried",
    "label": "Single",
    "required": true
  },
  "datefield": {
    "type": "datefield",
    "name": "dateOfBirth",
    "label": "Date of birth",
    "required": true
  },
  "radio": {
    "type": "radio",
    "label": "Preferring",
    "options": {
      "radio1": "coca-cola",
      "radio2": "fanta",
      "radio3": "pepsi"
    }
  },
  "button": {
    "type": "submit",
    "title": "Submit btn"
  }
}
