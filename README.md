## Audibene 

### How to run the app

```
  yarn
  yarn start-server
  yarn start
```

- go to `http://localhost:3000` to see the application

You can also run the unit and e2e test cases.

```
  yarn test
  yarn e2e-test
```

### Tech stack

- react
- dayjs for datetime manipulation
- react-testing-library for unit testing
- react-jss as CSS in JS library
- cypress for e2e testing
- node for serving post details json


### Folder structure explanation

- All reusable components resides in `src/components` folder
- All svg's resides in `src/images` folder
- Router/Page components resides in `src/pages` folder
- utility functions resides in `src/utils` folder
- Router definition is in `src/routes` folder

- cypress test cases are created inside `cypress/integration` folder


### functionalities implemented

- get post details and render it in /post-details route
- comments/inner comments implemented
- delete comments implemented
- reset deleted comments(to see all the original comments)
- sort by latest/oldest comment
- Show/Hide comments section on clicking comments count
- unit testing using react-testing-library
- end to end testing using cypress
