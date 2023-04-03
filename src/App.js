import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SharedLayout from './Pages/SharedLayout';
import Home from './Pages/Home';
import About from './Pages/About';
import Rooms from './Pages/Rooms';
import SingleRoom from './Pages/SingleRoom';
import Error from './Pages/Error';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route path='about' element={<About />} />

          <Route index element={<Rooms />} />
          <Route path=':Id' element={<SingleRoom />} />

          <Route path='*' element={<Error />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
