import './assets/styles/index.scss'
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import App from './components/App';
import store from './slices/index'

const container = document.getElementById('app');
const root = createRoot(container);
root.render(
    <Provider store={store}>
        <App />
    </Provider>
);


module.hot.accept()