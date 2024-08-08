import React from 'react';
import './Components/App.css';

import Footer from "./Components/Footer";
import Header from "./Components/Header";
import PostScheduler from "./Components/PostScheduler";
import Sidebar from "./Components/Sidebar";
import Login from './Components/Login';

function App() {
  return (
    <div >
      <Header />
      <Sidebar />
      <Login />
      <PostScheduler />
      <Footer />
    </div>
  );
}

export default App;
