# Code Challenge: Thumbnail Generator UI

## Goal

Build a simple UI/UX for a thumbnail generator.

## Requirements

* The UI let's you upload images.
* You should mock the required endpoints (or solve and integrate with `thumbnail-generator-api`).
* It should preview the image that is going to be processed.
* It should give the users the URLs of the new thumbnails and preview them.

## Grading Guidelines

### MVP (50 points)

* Every requirement is met.
* The solution runs on our environment. Ideally after following a simple README (for instance: npm install, npm start).
* Commit your changes regularly.
* Tech Stack: latest versions of React and Typescript.
* It leverages some design framework, for instance, Material UI (`https://mui.com/`).
* It uses a global state management library (preferably Redux or similar alternatives).
* Includes a simple login or permission-based logic (for instance: AWS Cognito, Auth0, etc).
* The solution includes some unit tests.
* It includes transitions, loaders, progress status as required.
* It's responsive and works well with desktops, phones and tablets.
* Any ENV specific value should be configurable and documented.
* The code should be clear and easy to read, debug and maintain.

### Nice moves (5 points each)

* It uses Styled Components or Styled (`https://mui.com/system/styled/`), for the styling of the components instead of using css or scss, including the general css properties such as resets, font-family, etc in the index.css file.
* It includes drag-and-drop functionality + visual cues to help the user.
* It includes a cropping area / resizes helper.

### Wait, WHAT?! (10 points each)

* The solution is deployed in some cloud hosting service (for instance: aws, vercel, firebase hosting, GitHub pages, etc).
* The app logic is covered with at least 70% of tests.

#### NOTE

* Feel free to add anything to sum value to the final solution (libraries, design patterns, good practices, etc).
* If you think that any of the above points can be better implemented with a new technology or tool (always using React and Typescript), feel free to do! The only requirement is that you have good arguments to support that decision.
