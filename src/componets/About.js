import React from "react";
import User from "./User";
import UserClass from "./UserClass";
class About extends React.Component{
  constructor(props){
    super();
    console.log('parent Constructor');
  }
  componentDidMount()
  {
    // console.log('Parenet Componet Did Mount');
  } 
 

  render(){
    console.log('parent render');
    return (
    <div>
        <h1>About</h1>
        <h2>This is the NameReact channel series</h2>
   
        <UserClass name={'krishna Prasad Sharma(classs)'}location ={'Bhw(class)'}/>
       
    </div>
  )

  }
}
export default About;
