import React from "react";
class UserClass extends React.Component {
  constructor(props) {
    super(props);
    // console.log(props);
    this.state = {
      userInfo: {
        name: "Dummy",
        location: "Default",
        avatar_url: "https://dumm-photo.com",
      },
    };
    // console.log(this.props.name+"child constructor");
  }
  componentDidMount() {
    this.timer = setInterval(() => {
      console.log("OP namasate");
    }, 1000);
  }
  async componentDidMount() {
    const data = await fetch("https://api.github.com/users/krishna-is-coding");
    const json = await data.json();
    console.log(json);

    this.setState({
      userInfo: json,
    });
  }
  componentDidUpdate() {
    console.log("componet DId mounted");
  }
  componentWillUnmount() {
    clearInterval(this.timer);
    console.log("Compont will Unounted");
  }
  render() {
    const { name, location, avatar_url } = this.state.userInfo;
    // debugger;
    // const{count}=this.state;
    // console.log(this.props.name+'child reender');
    return (
      <div className='w-50'>
        <img className='w-48 m-1' src={avatar_url} />
        <h2 className='m-1 p-1'>Name:{name}</h2>
        <h3 className='m-1 p-1'>Location:{location}</h3>
        <h4 className='m-1 p-1'>Contact:@/krishnayrr</h4>
      </div>
    );
  }
}
export default UserClass;
