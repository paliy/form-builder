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

If you need generate buttons, you just need to text this variants to your JSON file: `btn_cancel` or `btn_submit`
### `"btn_cancel": "your btn name"`
### `"btn_submit": "your btn name"`

```
Example JSON schema:

{
  "title": "A list of tasks",
  "type": "object",
  "required": [
    "title"
  ],
  "btn_submit": "Sumbit button!",
  "properties": {
    "title": {
      "type": "string",
      "title": "Task list title"
    },
    "tasks": {
      "type": "array",
      "title": "Tasks",
      "items": {
        "type": "object",
        "required": [
          "title"
        ],
        "properties": {
          "title": {
            "type": "string",
            "title": "Title",
            "description": "A sample title"
          },
          "details": {
            "type": "string",
            "title": "Task details",
            "description": "Enter the task details"
          },
          "done": {
            "type": "boolean",
            "title": "Done?",
            "default": false
          }
        }
      }
    }
  }
}

Example uiSchema:

{
  "tasks": {
    "items": {
      "details": {
        "ui:widget": "textarea"
      }
    }
  }
}
