import './assets/styles/index.scss'
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import App from './components/App';
import {store} from './slices/index'
import Popup from './components/Popup/Popup';
import { Sanctum } from "react-sanctum";

const sanctumConfig = {
    apiUrl: "http://foobar.test",
    csrfCookieRoute: "sanctum/csrf-cookie",
    signInRoute: "login",
    signOutRoute: "logout",
    userObjectRoute: "user",
  };

const container = document.getElementById('app');
const root = createRoot(container);
root.render(
    <Provider store={store}>
        <App />
        <Popup/>
    </Provider>
);


module.hot.accept()