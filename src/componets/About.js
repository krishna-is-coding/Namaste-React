import React from "react";
import User from "./User";
import UserClass from "./UserClass";
class About extends React.Component {
  constructor(props) {
    super();
    console.log("parent Constructor");
  }
  componentDidMount() {
    // console.log('Parenet Componet Did Mount');
  }

  render() {
    // console.log("parent render");
    return (
      <div className='text-xl className=m-1 p-1 hover:bg-gray-100'>
        <h1 className='font-bold'>About</h1>
        <h2>This is the NameReact channel series</h2>
        <UserClass
          name={"krishna Prasad Sharma(classs)"}
          location={"Bhw(class)"}
        />
      </div>
    );
  }
}
export default About;
