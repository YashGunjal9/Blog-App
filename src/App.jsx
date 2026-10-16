import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './Components/Home.jsx';
import PostLayout from './Components/PostLayout.jsx';
import PostDetails from './Components/PostDetails.jsx';
import NotFound from './Components/NotFound.jsx';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* Home page */}
        <Route path="/" element={<Home />} />

        {/* Nested routes */}
        <Route path="/posts" element={<PostLayout />}>
          <Route path=":id" element={<PostDetails />} />
        </Route>

        {/* 404 Page Not Found */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;