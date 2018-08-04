import React , { Component } from 'react';
import { Row, Col } from 'react-bootstrap'
import './App.css';


class Clock extends Component { 

    constructor(props) {
        super(props)
        this.state = {
            days: 0,
            hours: 0,
            minutes: 0,
            seconds: 0
        }
    }

    componentWillMount() {
        this.getTimeUnitil(this.props.deadline);
    }

    componentDidMount() {
        setInterval(() => this.getTimeUnitil(this.props.deadline), 1000);
    }
    
    leading0(num) {
        return num < 10 ? '0' + num : num ;
    }

    getYear() {
        var date1=new Date();//Remember, months are 0 based in JS
        var date2=new Date(2019,7,4);
        var year1=date1.getFullYear();
        var year2=date2.getFullYear();
        var month1=date1.getMonth() ;
        var month2=date2.getMonth();
        var year = (year2  - year1) ;

        if (month2 <=  month1) {
            if (date2.getDate() <= date1.getDate() ) {
                year--;
            }
        }
        return year ;
    }

    getMonth() {

        var date1=new Date();//Remember, months are 0 based in JS
        var date2=new Date(2019,4,4);
        var year1=date1.getFullYear();
        var year2=date2.getFullYear();
        var month1=date1.getMonth();
        var month2=date2.getMonth();
        if(month1===0){ //Have to take into account
            month1++;
            month2++;
        }
        var month = (year2 - year1) * 12 + (month2 - month1);
        if (date2.getDate() <= date1.getDate())
        {
            month--;
        }
        return month ;
    }

    getDate() {

        var date = new Date();
        var month = date.getMonth();
        var dateInMonth=new Date(2018, month , 0).getDate();
        var day = dateInMonth - date.getDate();
        return day;
    }

    getTimeUnitil(deadline) {
        const time = Date.parse(deadline) - Date.parse(new Date());
        const years = this.getYear();
        const months = this.getMonth();
        const days = this.getDate();
        const seconds = Math.floor((time/1000) % 60);
        const minutes = Math.floor((time/1000/60) % 60);
        const hours = Math.floor(time/(1000*60*60) % 24);

        this.setState({
            years,
            months,
            days,
            hours,
            minutes,
            seconds
        })
    }   

    render() {
        console.log(this.getMonth());
        return(
            <div>
                <Row >
                    <Col md="4" className="Clock-years col"> 
                        <h1 className="time large"> { this.leading0(this.state.years) + ':'} </h1>
                        <div className="units"> Years </div> 
                    </Col>

                    <Col md="4" className="Clock-months col">
                        <h1 className="time large"> { this.leading0(this.state.months)  + ':'}</h1>
                        <div className="units">Months </div>
                    </Col>

                    <Col md="4" className="Clock-days col"> 
                        <h1 className="time large"> { this.leading0(this.state.days) } </h1>
                        <div className="units"> Days </div> 
                    </Col>
                </Row>
            
                <Row  className="div-center">
                    <Col md="3" className="Clock-hours col"> 
                        <h1 className="time medium"> { this.leading0(this.state.hours) + ':'} </h1>
                        <div className="units-small"> Hours </div> 
                    </Col>

                    <Col md="3" className="Clock-minutes col">
                        <h1 className="time medium"> { this.leading0(this.state.minutes)  + ':'}</h1>
                        <div className="units-small">Minutes </div>
                    </Col>

                    <Col md="3" className="Clock-seconds col"> 
                        <h1 className="time medium"> { this.leading0(this.state.seconds) } </h1>
                        <div className="units-small"> Seconds </div> 
                    </Col>
                </Row>
            </div>
        ) 
    }
}

export default Clock;