import Header from './Header';
import Footer from './Footer';
import Restaurants from './Restaurants';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ViewRestaurant from './ViewRestaurant';



function App() {
  return (
    <div>
      <Header />

      <Router>
        <Routes>
            <Route path='/' element={<Restaurants/>}/>
            <Route path='/view/:id' element={<ViewRestaurant/>}/>
        </Routes>
      </Router>


      <Footer />
    </div>
  );
}

export default App;
