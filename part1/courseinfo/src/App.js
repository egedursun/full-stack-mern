
const Header = (props) => {
    return (
        <h1>{props.course}</h1>
    );
};

const Part = (props) => {
    return (
        <p>
            {props.part_name} {props.exercises}
        </p>
    );
};

const Content = (props) => {
    return (
        <>
            <Part part_name={props.p1} exercises={props.e1}/>
            <Part part_name={props.p2} exercises={props.e2}/>
            <Part part_name={props.p3} exercises={props.e3}/>
        </>
    );
};

const Total = (props) => {
    return (
        <>
            <p>
                Number of exercises {props.e1 + props.e2 + props.e3}.
            </p>
        </>
    );
};

const App = () => {
  const courseName = "Half Stack Application Development";
  const part1 = "Fundamentals of React";
  const exercises1 = 10;
  const part2 = "Using Props to Pass Data";
  const exercises2 = 7;
  const part3 = "State of A Component";
  const exercises3 = 14;

  return (
      <>
        <Header course={courseName}/>
        <Content p1={part1} e1={exercises1} p2={part2} e2={exercises2} p3={part3} e3={exercises3}/>
        <Total e1={exercises1} e2={exercises2} e3={exercises3}/>
      </>
  );
};

export default App;
