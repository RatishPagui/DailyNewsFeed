
import './App.css';

import React, { Component } from 'react'
import Navbar from './Components/Navbar';
import News from './Components/News';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

export default class FileName extends Component {
  render() {
    return (
      <>
        <BrowserRouter>
          <div>
            <Navbar />
            <Routes>
            <Route exact path="/" element={<News key="general" pageSize={6} category='general' />} />
            <Route exact path="/Business" element={<News key="business" pageSize={6} category='business' />} />
            <Route exact path="/Entertainment" element={<News key="entertainment" pageSize={6} category='entertainment' />} />
            <Route exact path="/General" element={<News key="general" pageSize={6} category='general' />} />
            <Route exact path="/Health" element={<News key="health" pageSize={6} category='health' />} />
            <Route exact path="/Science" element={<News key="science" pageSize={6} category='science' />} />
            <Route exact path="/Sports" element={<News key="sports" pageSize={6} category='sports' />} />
            <Route exact path="/Technology" element={<News key="technology" pageSize={6} category='technology' />} />
            </Routes>
          </div>
        </BrowserRouter>
      </>

    )
  }
}
