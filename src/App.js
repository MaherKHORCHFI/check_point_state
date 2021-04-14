import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Person from './Components/Person';
import NavBar from './Components/NavBar';
import Projects from './Components/Projects';

class App extends Component {
  constructor() {
    super()
    this.state = {
      // Person : {
      //   fullName : "Maher KHORCHFI",
      //   profession: "IT Ingeieur",
      //   bio: "I am an IT Ingeieur and a Full stack Web Developper",
      //   imgSrc: <img src=".\avatar.jpg" width={250} height={250}/>
      // },
      profileIsVisible: false,
          }
  }
  // componentWillMount() {
  //   this.setState({
  //     intervall: setInterval(() => {
  //       this.setState({ timer: this.state.timer + 1 })
  //     }, 1000)
  //   })
  // }
  toggleVisibility = () => {
    this.setState({ profileIsVisible: !this.state.profileIsVisible })
  }
  render() {
    return (
      <div className="App">
        <NavBar/>
        <h1 className ='title'>check point React state</h1>
        <button onClick={this.toggleVisibility} className='profileBtn'>  {this.state.profileIsVisible ? 'Hide Person Profile' : 'Show Person Profile'}
        </button>
        {this.state.profileIsVisible && <Person />}
        <Projects/>
      </div>
    )
  }
}
export default App;
