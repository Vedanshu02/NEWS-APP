
import './App.css';
import{BrowserRouter as Router,Routes,Route} from "react-router-dom";
import React, { useState } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';
import LoadingBar from 'react-top-loading-bar'

const App=()=>{
  const apikey=process.env.REACT_APP_NEWS_API;
  const [progress, setProgress] = useState(0)
  
  
    return (
      <Router>
      <div >
      <LoadingBar color='#0dcaf0' progress={progress} />
        <Navbar/>
        <Routes>
        <Route exact path="/" element={ <News News setProgress={setProgress} apikey={apikey} key="general" pageSize={6} country="in" category='general'/>}/>
        <Route exact path="/business" element={ <News News setProgress={setProgress} apikey={apikey} key="business" pageSize={6} country="in" category='business'/>}/>
        <Route exact path="/entertainment" element={ <News News setProgress={setProgress} apikey={apikey} key="entertainment" pageSize={6} country="in" category='entertainment'/>}/>
        <Route exact path="/health" element={ <News News setProgress={setProgress} apikey={apikey} key="health" pageSize={6} country="in" category='health'/>}/>
        <Route exact path="/science" element={ <News News setProgress={setProgress} apikey={apikey} key="science" pageSize={6} country="in" category='science'/>}/>
        <Route exact path="/sports" element={ <News News setProgress={setProgress} apikey={apikey} key="sports" pageSize={6} country="in" category='sports'/>}/>
        <Route exact path="/technology" element={ <News News setProgress={setProgress} apikey={apikey} key="technology" pageSize={6} country="in" category='technology'/>}/></Routes>
      </div>
      </Router>
    )
  

}


export default App
