import React from "react"; // Importing React library for JSX syntax
import ReactDOM from "react-dom"; // Importing ReactDOM library for rendering components to the DOM
import App from "./App"; // Importing the main App component
import store from "./redux/store"; // Importing the Redux store
import { Provider } from "react-redux"; // Importing Provider component from react-redux for Redux integration

// Rendering the main App component wrapped in a Provider component to provide Redux store to all components in the app
ReactDOM.render(
  <Provider store={store}>
    <>
      <App /> {/* Rendering the main App component */}
    </>
  </Provider>,
  document.getElementById("root") // Mounting the app on the root element in the HTML
);
