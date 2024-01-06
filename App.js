import React from 'react';
import ReactDOM from 'react-dom/client';
//React Element
const Title =()=> ( 
  <h1 className='head' tabIndex="5">Namaste React using jsx
  </h1>
  );

const HeadingComponet =() =>(
  <div id='container'>
    <Title/>
    <h1>Namaste React Functional Componets</h1>
  </div>
);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeadingComponet/>);