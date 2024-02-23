import React, { useState } from 'react';
import './style.css';
import quizQuestions from './quizQuestion.json';

export default function QuizComponent() {
    const [qNo, setqNo] = useState(0);
    const [question, setQuestion] = useState(quizQuestions[qNo]);

    const previous = () => {
        if (qNo > 0 && qNo <= 14) {
            setqNo(prevQNo => prevQNo - 1);
            setQuestion(quizQuestions[qNo - 1]);
        }
    };

    const next = () => {
        if (qNo >= 0 && qNo <= 13) {
            setqNo(prevQNo => prevQNo + 1);
            setQuestion(quizQuestions[qNo + 1]);
        }
    };

    const quit = () => {
        if (window.confirm("Are you sure, you want to quit?")) {
            setqNo(0);
            setQuestion(quizQuestions[0]);
        }
    };

    return (
        <div id="quizComponent">
            <div id="container">
                <h1 id="quizComponentHeading">Question</h1>
                <p id="questionNum">{qNo + 1} of 15</p>
                <p id="question">{question.question}</p>
                <div id="options-container">
                    <button className="options">{question.optionA}</button>
                    <button className="options">{question.optionB}</button>
                    <button className="options">{question.optionC}</button>
                    <button className="options">{question.optionD}</button>
                </div>
                <div id="actions-container">
                    <button className="actions" onClick={previous} id="previous">Previous</button>
                    <button className="actions" onClick={next} id="next">Next</button>
                    <button className="actions" onClick={quit} id="quit">Quit</button>
                </div>
            </div>
        </div>
    );
}
