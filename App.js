import React from 'react';
import ReactDOM from 'react-dom/client';
{/*
const Title =() =>(
  <h1 className='head' tabIndex='5'>Namaste React using Jsx🚀
  </h1>
);

*/}
const elem= <span>React Element</span>
const HeadingComponet =() => (
  <div id='container'>
   <h1 className='heading'>Namaste React Functional Componets</h1>
  </div>
);
const title=(
  <h1 className='head' tabIndex='5'>
    {<elem/>}
    Namaste React usig Jsx🚀
    <HeadingComponet/>
    </h1>
);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(title);