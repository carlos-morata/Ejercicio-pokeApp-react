import React from "react";
import { Route, Routes, Navigate } from 'react-router-dom'
import SearchContainer from './SearchContainer'

const Main = () => {
  return <main>
    <Routes>
      <Route path='/' element={<SearchContainer />}></Route>
    </Routes>
  </main>;
};

export default Main;
