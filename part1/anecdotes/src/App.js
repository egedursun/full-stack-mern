import {useEffect, useState} from "react";

const Button = ({handleClick, text}) => {
    return (
        <>
            <button onClick={handleClick}>{text}</button>
        </>
    )
}

const Title = () => {
    return (
        <>
            <h1>Anecdote of the day</h1>
        </>
    );
}

const Statistics = ({data}) => {
    return (
        <>
            <h1>Anecdote with most votes</h1>
            <div>
                <p>{data.anecdote}</p>
                <p>has {data.votes} votes</p>
            </div>
        </>
    );
}

const App = () => {

    const anecdotes = [
        'If it hurts, do it more often.',
        'Adding manpower to a late software project makes it later!',
        'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
        'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
        'Premature optimization is the root of all evil.',
        'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
        'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    ]

    const [selected, setSelected] = useState(0);
    const [points, setPoints] = useState({
        0: 0, 1: 0, 2: 0, 3: 0, 4: 0, 5: 0, 6: 0,
    });
    const [mostVotedAnecdote, setMostVotedAnecdote] = useState({
        anecdote: anecdotes[0],
        votes: points[0],
    });

    const setRandomAnecdote = () => {
        return setSelected(Math.floor(Math.random() * 7));
    }

    useEffect(() => {
        const arr = Object.values(points);
        const maxIndex = arr.indexOf(Math.max(...arr));

        setMostVotedAnecdote(
            {anecdote : anecdotes[maxIndex],
                votes: points[maxIndex]}
        );
    }, [points]);

    const increaseVote = () => {
        const newValues = {...points};
        newValues[selected] = newValues[selected] + 1;
        setPoints(newValues);
    }

    return (
      <div>
          <Title />
          <p>{anecdotes[selected]}</p>
          <p>has {points[selected]} votes</p>
          <span>
              <Button handleClick={increaseVote} text="vote"></Button>
              <Button handleClick={setRandomAnecdote} text="next anecdote"/>
          </span>
          <Statistics data={mostVotedAnecdote}/>
      </div>
    );
};

export default App;