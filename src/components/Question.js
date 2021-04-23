import React, { Component } from 'react';
import { Card, Button, FormControl, ProgressBar, Alert } from 'react-bootstrap';
import questionPic from '../res/question.jpg';
import successPic from '../res/success.jpg';
import ReactPlayer from 'react-player';
import gift from '../res/gift.png';

class Question extends Component {

    state = {
        answer: "",
        attempts: 0,
        complete: false
    };

    submitAnswer = () => {
        if (!this.state.answer) return;

        var bool = this.checkAnswer(this.state.answer.toLowerCase());
        if (bool)
        {
            this.setState({
                attempts: this.state.attempts + 1,
                complete: true
            });
        }
        else
        {
            this.setState({
                answer: "",
                attempts: this.state.attempts + 1
            });
        }
    };

    checkAnswer = (answer) => {
        if (this.correctAnswers.indexOf(answer.trim()) > -1) return true;
        else return false;
    };

    handleChange = (event) => {
      this.setState({
          answer: event.target.value
      });
    };

    getVideoPlayer = (src) => {
        return (
            <ReactPlayer url={src} width="100%" controls playing />
        );
    }

    getQuestion = () => {
        var question;

        if (this.state.complete)
        {
            if (this.props.question.v_answer) {
                question = this.getVideoPlayer(this.props.question.v_answer);
            }
            else if (this.props.question.comment)
            {
                question = this.props.question.comment;
            } else {
                question = this.state.answer;
            }
        }
        else
        {
            if (this.props.question.v_text) {
                question = this.getVideoPlayer(this.props.question.v_text);
            }
            else
            {
                question = this.props.question.text;
            }
        }

        return question;
    }

    render() {
            this.nextStep = this.props.nextStep;
            this.correctAnswers = this.props.question.answer;

            var title = !this.state.complete
                ? <Card.Title>Вопрос  № {this.props.step}</Card.Title>
                : <Card.Title>Правильно!</Card.Title>;

            var form = !this.state.complete
                ? <FormControl
                    type="text"
                    placeholder="Ответ"
                    onChange={this.handleChange}
                    value={this.state.answer}
                />
                : "";

            var question = this.getQuestion();

            var completed = this.state.complete ? this.props.step : this.props.step - 1;
            var now = completed % 5 === 0 && this.state.complete ? 5 : completed % 5;
            var progress = <ProgressBar variant="success" now={now * 20} label={`${now}/5`} />;

            var timeToGift = (now === 5 || completed === 26)
                ? <div><Alert variant="success">{this.props.gift.text}</Alert></div>
                : <br/>;
            var addInfo = now === 5 && this.props.gift.add ? <div><Alert variant="danger">{this.props.gift.add}</Alert></div> : <br/>;
        return (
            <div>
                <header className="App-question">
                    <Card style={
                        {
                        width: '20rem',
                        max_width: '300px'
                        }}>
                        <Card.Img variant="top" src={
                            this.state.complete
                                ? (now === 5 ? gift : (this.props.question.a_img ? this.props.question.a_img : successPic))
                                : (this.props.question.q_img ? this.props.question.q_img : questionPic)
                        } />
                        <Card.Body>
                            {(this.props.step < 26) && progress}
                            <br/>
                            {title}
                            <Card.Text>
                                {question}
                            </Card.Text>
                            {form}
                            <br/>
                            {timeToGift}
                            {addInfo}
                            <Button
                                variant={this.state.complete ? "success" : "primary"}
                                onClick={this.state.complete ? this.nextStep : this.submitAnswer}>{this.state.complete ? "Далее" : "Ответить"}</Button>
                        </Card.Body>
                    </Card>
                </header>
            </div>
        );
    }
}

export default Question;