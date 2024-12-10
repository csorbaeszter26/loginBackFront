import logo from './logo.svg';
import Bejelentkezes from './pages/Bejelentkezes';
import Kezdolap from './pages/Kezdolap';
import Regisztracio from './pages/Regisztracio';
import NoPage from './pages/NoPage';
import {Route, Routes} from "react-router-dom"; 
import Layout from './pages/Layout';


function App() {
  return (
    
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Kezdolap />} />
          <Route path="bejelentkezes" element={<Bejelentkezes />} />
          <Route path="regisztracio" element={<Regisztracio />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    

  );
}


export default App;
