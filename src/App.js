import { Provider } from 'react-redux';
import './App.css';
import Body from './components/Body';
import appStore from './utils/appStore';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { AnimatePresence } from 'framer-motion';
function App() {
  return (
    <Provider store={appStore}>
      <AnimatePresence mode='wait'>
        <Body />
        <ToastContainer />
      </AnimatePresence>
    </Provider>

  );
}

export default App;
