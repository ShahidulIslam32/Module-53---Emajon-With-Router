import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import Shop from './components/Shop/Shop';
import Inventory from './components/Inventory/Inventory';
import Order from './components/Orderes/Order';

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path="/shop" element={<Shop></Shop>}></Route>
        <Route path="/orders" element={<Order></Order>}></Route>
        <Route path="/inventory" element={<Inventory></Inventory>}></Route>
      </Routes>
    </div>
  );
}

export default App;
