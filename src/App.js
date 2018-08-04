import React, { Component } from 'react';
import './App.css';
import { Form, FormControl, Button } from 'react-bootstrap'
import Clock from './Clock';


class App extends Component {
    constructor(props) {
        super(props)
        
        this.state = {
            deadline : 'May 4, 2019',
            newDeadline : ''
        }
    }
    
    changeDeadline () {
        console.log(this.state);
        this.setState({
            deadline: this.state.newDeadline
        }); 
    }

    render(){
        return (
            <div className="App">
                <div className="App-title">Countdown to { this.state.deadline } </div>
                
                <Clock deadline={ this.state.deadline } />
                {/* <Form inline >
                    <FormControl 
                        placeholder="new date" 
                        onChange={ event => this.setState({newDeadline: event.target.value}) }
                        className="Deadline-input" />
                </Form>
                <Button onClick={ () => this.changeDeadline() }>Submit</Button> */}
            </div>
        )
    }
}

export default App; 
