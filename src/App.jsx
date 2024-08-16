import React from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import LoginPage from './components/LoginPage';
import Home from './components/Home';
import RegisterPage from './components/RegisterPage';
import Cart from './components/Cart';


const App = () => {
  return (
    <div>
      <Navbar />
      <main>
      {/*<Home />*/}
      {/*<RegisterPage /> */}
      {/*<LoginPage />*/}
      { <Cart />}
      <Footer />
      </main>
    </div>
  );
};

export default App;
