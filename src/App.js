import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';

import { Header, Footer } from './components'
import { TodoList, Snippets } from './pages';
const App = () => {
  return (
    <div className='App'>
      <BrowserRouter>
        <Header />
        <main >
          <Routes>
            <Route path="/" element={<TodoList />}></Route>
            <Route path="/snippets" element={<Snippets />}></Route>
          </Routes>
        </main>
        <Footer/>
      </BrowserRouter>
    </div>
  )
  
}

export default App;
