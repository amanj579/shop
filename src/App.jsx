import { Routes, Route } from "react-router-dom";
import { useState } from "react";
import Heder from "./componnt/Heder";
import Home from "./componnt/Home";
import Sherkat from "./sherkat";
import Serch from "./serch";
// import Sherkat from "./Sherkat";
// import Serch from "./Serch";
  
function App() {
  const[searchQuery , setSearchQuery] = useState()
  return (
    <div dir="rtl">
     <Heder searchQuery={searchQuery} setSearchQuery={setSearchQuery} />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sherkat" element={<Sherkat />} />
         <Route path="/serch" element={<Serch searchQuery={searchQuery} />} />
      </Routes>
    </div>
  );
}

export default App;