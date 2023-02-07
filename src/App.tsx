import { Routes, Route } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import Home from './pages/Home';
import Store from './pages/Store';
import Navbar from './components/Navbar';
import { ShoppingCartProvider } from './context/ShoppingCartContext';
import Item from './components/Item';
import Success from './pages/Success';
import Cancel from './pages/Cancel';



function App() {

  return (
    <>
    <ShoppingCartProvider>
    <Navbar/>
    <Container className="mb-4">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/store">
          <Route index element={<Store />}/>
          <Route path=":name" element={<Item />}/>
          </Route>
        <Route path="/success" element={<Success />} />
        <Route path="/cancel" element={<Cancel />} />
      </Routes>
    </Container>
    </ShoppingCartProvider>
    </>
  )
}

export default App
