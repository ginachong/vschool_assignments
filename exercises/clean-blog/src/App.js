import React from 'react';
import './App.css';
import Header from "./Header"
import blogData from "./blogData"
import BlogPost from "./BlogPost"
import BlogFormat from "./BlogFormat"
import Footer from "./Footer"


function App(){
  return(
    <div>
      <Header />
      <BlogFormat />
      {/* <Footer /> */}
    </div>
  )
}

export default App;
