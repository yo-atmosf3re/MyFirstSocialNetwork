import * as React from "react";
import reportWebVitals from './reportWebVitals';
import store from './redux/state';
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import ReactDOM from "react-dom";

let rerenderEntireTree = () => {
   ReactDOM.render(
      <React.StrictMode>
         <BrowserRouter>
            <App store={store} />
         </BrowserRouter>
      </React.StrictMode>, document.getElementById('root')
   );
}

store.subscriber(rerenderEntireTree);
rerenderEntireTree();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
