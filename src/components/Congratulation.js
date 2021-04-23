import React, { Component } from 'react';
import logo from '../res/hb.jpg';
import { Alert } from 'react-bootstrap';

class Congratulation extends Component {
    render() {
        return (
            <div>
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <Alert variant="primary">
                        С Днём Рождения, Катенька! Здоровья тебе, успехов тебе во всём, береги себя! Мы тебя очень любим!
                    </Alert>
                </header>
            </div>
        );
    }
}

export default Congratulation;
