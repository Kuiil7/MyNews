import React from "react";
import { Routes, Route} from "react-router-dom";

import TopHeadlines from "./components/endpoints/TopHeadlines";
import Sports from "./components/endpoints/Sports";
import Health from "./components/endpoints/Health";
import Entertainment from "./components/endpoints/Entertainment";
import Technology from "./components/endpoints/Technology";
import Science from "./components/endpoints/Science";

import Header from './components/layout/Header'
import NewsHeader from './components/layout/NewsHeader'

const App = () =>{
  return (
    < >
  <Header />
  <NewsHeader />
      <Routes>
      <Route path="/" element={<TopHeadlines />} />
        <Route path="topheadlines" element={<TopHeadlines />} />
        <Route path="sports" element={<Sports/>} />
        <Route path="health" element={<Health/>} />
        <Route path="entertainment" element={<Entertainment/>} />
        <Route path="technology" element={<Technology/>} />
        <Route path="science" element={<Science/>} />
      </Routes>

    </>
  );
}
export default App;