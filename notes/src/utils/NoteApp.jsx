import React from 'react';
import { Route, Routes } from 'react-router-dom';
import AddPage from './AddPage';
import Home from './Home';
import DetailPageWrapper from './DetailNote';

function NoteApp() {
  return (
    <div className="notes-app">
      <header className='contact-app__header'>
        
   
      </header>
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/add" element={<AddPage />} />
          <Route path="/notes/:id" element={<DetailPageWrapper/>}/>
        </Routes>
      </main>
    </div>
  );
}
   
export default NoteApp;