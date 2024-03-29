import { Routes, Route } from 'react-router-dom';
import { BrowserRouter as Router } from 'react-router-dom';

//import { useState } from 'react';
//import logo from './assets/axa-logo-0-2048x2048.png';

import Form from './components/routes/Form';
import Index from './components/routes/Index';
import Feedback from './components/routes/Feedback';
//import IndexLayout from './components/views/layouts/IndexLayout';

function App() {
  const onSubmit = (values) => {
    console.log('submit in App with values:', values);
  };

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Index />} />
          {/* <Route element={<IndexLayout />}></Route> */}
          <Route path="team/:urlName" element={<Index />} />
          <Route path="feedback" element={<Feedback />} />
          <Route path="form/:id" element={<Form />} />
        </Routes>
      </Router>
    </>
  );
}
export default App;
