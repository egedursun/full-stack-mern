import {useState} from "react";

const Title = (props) => {
    return (
        <div>
            <h1>{props.text}</h1>
        </div>
    );
}

const Button = ({handleClick, text}) => {
    return (
        <>
            <button onClick={handleClick}>{text}</button>
        </>
    );
};

const StatisticLine = ({text, value}) => {
    return (
        <tr>
            <td>{text}</td>
            <td>{value}</td>
        </tr>
    );
};

const Statistics = ({good, neutral, bad}) => {

    const calculateAverage = () => {
        const wGood = 1 * good;
        const wNeutral = 0;
        const wBad = -1 * bad;

        return (wGood + wNeutral + wBad) / (good + neutral + bad);
    }

    const calculatePositive = () => {
        return (((good) / (good + neutral + bad)) * 100 + "%");
    }

    if (good === 0 && neutral === 0 && bad === 0) {
        return (
            <div>
                <h1>statistics</h1>
                <p>No feedback given</p>
            </div>
        );
    }

    return (
        <div>
            <h1>statistics</h1>
            <div>
                <table>
                    <StatisticLine text="good" value={good}/>
                    <StatisticLine text="neutral" value={neutral}/>
                    <StatisticLine text="bad" value={bad}/>
                    <StatisticLine text="average" value={calculateAverage()}/>
                    <StatisticLine text="positive" value={calculatePositive()}/>
                </table>
            </div>
        </div>
    );
};

const App = () => {

    const [good, setGood] = useState(0);
    const [neutral, setNeutral] = useState(0);
    const [bad, setBad] = useState(0);

    const handleGoodClick = () => {
        setGood(good + 1);
    }

    const handleNeutralClick = () => {
        setNeutral(neutral + 1);
    }

    const handleBadClick = () => {
        setBad(bad + 1);
    }

    return (
        <div>
            <Title text="give feedback"/>
            <span>
                <Button handleClick={handleGoodClick} text="good"/>
                <Button handleClick={handleNeutralClick} text="neutral"/>
                <Button handleClick={handleBadClick} text="bad"/>
            </span>
            <Statistics good={good} neutral={neutral} bad={bad}/>
        </div>
    );
};

export default App;
