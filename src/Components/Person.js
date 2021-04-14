import React, { Component } from 'react';


// const Person = () => {
//     return (
//         <div>
//             <h2>Maher KHORCHFI</h2>
//             <h2>IT Ingeieur</h2>
//             <p>I am an IT Ingeieur and a Full stack Web Developper</p>
//             <img src=".\avatar.jpg" width={250} height={250}/>
//         </div>
//     )
// }

class Person extends Component {
    constructor() {
        super()
        this.state = {
            fullName: "Maher KHORCHFI",
            profession: "IT Engineer",
            bio: "I am an IT Ingeieur and a Full stack Web Developper",
            imgSrc: <img src=".\avatar.jpg" width={250} height={250} />,
            intervall: null,
            timer: 0,
        }
    }
    render() {
        return (
            <div className='about-me'>
                <h2>{this.state.fullName}</h2>
                <br/>
                <h2>{this.state.profession}</h2>
                <h2>{this.state.imgSrcbio}</h2>
                <h2>{this.state.imgSrc}</h2>
                <h2 className='time'>{this.state.timer}</h2>
            </div>
        )
    }

    componentWillMount() {
        this.setState({
            intervall: setInterval(() => {
                this.setState({ timer: this.state.timer + 1 })
            }, 1000)
        });
    };
}
export default Person
