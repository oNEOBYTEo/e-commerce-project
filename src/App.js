import { useSelector } from 'react-redux';
import { Routes, Route } from 'react-router-dom';
import { LoadingScreen, ProtectedRoutes, MainLayout, CustomRouter } from './components';
import { Login, Shop, ShopDetail, Cart, Home, MyOrders } from './pages';
import About from './pages/About';
import { history } from './utils';

function App() {

  const isLoading = useSelector(state => state.app.isLoading)

  return (
    <div className="App">
      <CustomRouter history={history}>

        { isLoading && <LoadingScreen />}

        <Routes>

          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route element={<ProtectedRoutes /> }>
            <Route element={<MainLayout />} >
              <Route path="/shop" element={<Shop />} />
              <Route path="/shop/:id" element={<ShopDetail />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/about" element={<About />} />
              <Route path="/orders" element={<MyOrders />} />
            </Route>
          </Route>
        
        </Routes>
      </CustomRouter>
    </div>
  );
}

export default App;
