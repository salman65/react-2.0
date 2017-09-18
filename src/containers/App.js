import React from 'react';

import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import { Views } from '../routes'
import '../styles/App.css';

const App = () => (
  <div className="rawr">
    <Header />
    <div className="meow">
      <Sidebar />
      <main className="app">
        <Views />
      </main>
    </div>
  </div>
)

export default App;
