import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SharedLayout from './Pages/SharedLayout';
import Home from './Pages/Home';
import About from './Pages/About';
import Rooms from './Pages/Rooms';
import SingleRoom from './Pages/SingleRoom';
import Error from './Pages/Error';
import Cafe from './Pages/Cafe';
import Tourism from './Pages/Tourism';
import Contact from './Pages/Contact';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route path='about' element={<About />} />
          <Route path='cafe' element={<Cafe />} />
          <Route path='tourism' element={<Tourism />} />
          <Route path='contact' element={<Contact />} />

          <Route path='rooms' element={<Rooms />} />
          <Route path=':Id' element={<SingleRoom />} />

          <Route path='*' element={<Error />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
