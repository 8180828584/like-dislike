
import './App.css';
import { useState } from 'react';

function App() {
  const brands=[
    {
      name:"Samsung",
      model:"Galaxy S10",
      desc:"samsung is a very fastest phone ever"
    },
    {
      name:"Iphone",
      model:"10Pro",
      desc:"Iphone is a very fastest phone ever"

    },
    {
      name:"Oneplus",
      model:"9Pro",
      desc:"Oneplus is a very fastest phone ever"


    }
  ];
  return (
    <div className="App">
      {brands.map((brand,index) => (
        <Counter key={index} name={brand.name} model={brand.model} desc={brand.desc}>

        </Counter>
      ))}
    </div>
    





  );
}
function Counter(props) {
  const[like,setLike]=useState(0);
  const[disLike,setDisLike]=useState(0);
  const[show,setShow]=useState(false);
  console.log(props);
  const styles ={
    background: like  >= disLike ? "green" : "red",
    padding: "5px",
    marginBottom: "5px",
    width: "200px",
    
    
  };
  return (
    <center>
    <div style={styles}>
      <h2 className="heading">{props.name}</h2>
      <p>{props.model}</p>
      <button onClick={() => setShow(!show)}>Show {show ? "less" : "more"}</button>
      {show ? <p>{props.desc}</p> : "" }
      <br/>
      
      <button onClick={() => setLike(like+1)}>👍 {like}</button>
      <button onClick={() => setDisLike(disLike+1)}>👎 {disLike}</button>
    </div>
    </center>
  );
}

export default App;
