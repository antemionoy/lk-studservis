import './assets/styles/index.scss'
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import App from './components/App';
import store from './slices/index'
import Popup from './components/Popup/Popup';

const container = document.getElementById('app');
const root = createRoot(container);
root.render(
    <Provider store={store}>
        <App />
        <Popup/>
    </Provider>
);


module.hot.accept()