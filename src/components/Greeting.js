import React, { Component } from 'react';
import hb from '../res/hb.jpg';
import { Button, Alert } from 'react-bootstrap';


class Greeting extends Component {
    render() {
        return (
            <div>
                <header className="App-header">
                    <img src={hb} className="App-logo" alt="logo" />
                    <Alert variant="info">
                        С Днём Рождения,  Катенька!<br/>
                        Сегодня получить подарки будет не так просто...<br/>
                        Тебе надо будет отвечать на вопросы.<br/>
                        За каждые 5 правильных ответов<br/>будешь получать подарок.
                    <div>
                        Давай поиграем?
                    </div></Alert>
                        <Button variant="info" onClick={this.props.nextStep}>НАЧАТЬ</Button>
                </header>
            </div>
        );
    }
}

export default Greeting;
