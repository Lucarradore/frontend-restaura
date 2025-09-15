import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import { Provider } from "react-redux";
import { store } from "./redux/store";
import { CartProvider } from "./context/CartContext";
import '../css/index.css';
import { Toaster } from 'react-hot-toast';

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <CartProvider>
      <App />
      <Toaster position="top-right" reverseOrder={false} />
    </CartProvider>
  </Provider>
);
