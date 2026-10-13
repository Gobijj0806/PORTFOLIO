import logo from './logo.svg';
import './App.css';
import Header from './Header';
import ObjectExample from './ObjectExample';
import Gobi from './Gobi';
import Dashboard from './Dashbroad';
import Accordion from './Accordion';
import Modelbox from './Modelbox';
import Object from './Object';
import Test from'./Test';
import Student from './Student';
import ErrorHandling from './ErrorHandling';
import Product from './Product';
import Home from'./Home';
import{Routes, Route , Link} from 'react-router'
import gt from './asset/gt.jpeg';
import rx from './asset/rx.jpeg';
import ktm from './asset/ktm.jpeg';
import defender from './asset/defender.jpeg';
import fortuner from './asset/fortuner.jpeg';
import thar from './asset/thar.jpeg';
import Bike from './Bike';
import Car from './Car';
import Home_Take from './Take/Home_Take';
import Counter from './Counter';
import Getdata from './Getdata';
import { useState ,useEffect} from 'react';
import axios from 'axios';
import Home_Portfolio from './Portfolio/Home_Portfolio';
import Test2 from './Test2';




function App() {
  // const [data,setdata]=useState([])

  // useEffect(()=>{
  //       axios.get("https://dummyjson.com/c/f9ff-e0a9-48d3-acb1")
  //       // .then((res)=> console.log(res.data))
  //       .then((res)=>{setdata(res.data)})
  //   },[])


  // const obj={
  //   name:"JJ",
  //   year:"20067"
  // }
  // const bikeObj = [{
  //   bikename: " GT 650 ",
  //   price: " 4,50,000",
  //   model:" 2026", 
  //   color:" Mr clean",
  //   // strikePrice: "599",
  //   image: gt

  // },
  // {
  //   bikename: "KTM 390",
  //   price: "2,50,000",
  //   model:" 2020",
  //   color:" Black",
  //   // strikePrice: "1200",
  //   image: ktm

  // },
  // {
  //   bikename: "RX 100",
  //   price: "1,00,000",
  //   // strikePrice: "1500",
  //   model:" 1998 ",
  //   color:" Black ",
  //   image: rx

  // }]

  // const carObj = [{
  //   carname: " DEFENDER  ",
  //   price: " 20,000,000",
  //   model:" 2026",
  //   color:" Mr clean",
  //   // strikePrice: "599",
  //   image: defender

  // },
  // {
  //   carname: "FORTUNER",
  //   price: "40,00,000",
  //   model:" 2020",
  //   color:" Black",
  //   // strikePrice: "1200",
  //   image: fortuner

  // },
  // {
  //   carname: "THAR",
  //   price: "18,00,000",
  //   // strikePrice: "1500",
  //   model:" 1998 ",
  //   color:" Black ",
  //   image: thar

  // }]
  return (
    <div className="App">
      {/* <Header_Portfolio/> */}
      {/*<Header/>*/}
      {/* <ObjectExample/> */}
      {/* { <Gobi/> } */}
      {/* <Dashboard/> */}
      {/* <Accordion/> */}
      {/* <Modelbox/> */}
      {/* <Object/> */}
      {/* <Test/> */}
      {/* <Student/> */}
      {/* <ErrorHandling }data={obj}/> */}
      {/* <ErrorHandling/> */}
      {/* <Product/> */}
      {/* <Home/> */}
      {/* <Bike/> */}
      {/* <Home_Take/> */}
      {/* <Counter/> */}
      {/* <Getdata/> */}
     {/* <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/ErrorHandling' element={<ErrorHandling/>}/>
     </Routes>
     <Link to="/">Home</Link>
     <Link to="/ErrorHandling">ErrorHandling</Link> */}
      {/* <Link to="/">Home</Link>
        <Link to="/Errorhandling">login</Link>
        <Link to="/Bike">Bike</Link>
        <Link to="/Car">Car</Link>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/bike" element={<Bike bikeObj={bikeObj} />} />
          <Route path="/car" element={<Car carObj={carObj} />} />
          <Route  path='/ErrorHandling' element={<ErrorHandling/>} />
        </Routes> */}
        {/* <Home_Take data={data}/> */}
       {/* <Header_Portfolio/> */}
       {/* <Home_Portfolio/> */}
       {/* <Test2/> */}


       {/* This is to test the page is working or pull is working */}

    </div>
  );
}

export default App;
