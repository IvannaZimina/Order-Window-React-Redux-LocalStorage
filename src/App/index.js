import style from './style.module.scss';
import { Routes, Route } from 'react-router-dom';

import Header from '../components/Header'
import HomePage from '../containers/HomePage';
import OrderPage from '../containers/OrderPage';

function App() {

  return (
    <>
      <Header />

      <Routes>
        <Route exac path='/' element={<HomePage />} />
        <Route exac path='/order' element={<OrderPage />} />
      </Routes>

    </>
  );
}

export default App;
