
const Header = (props) => {
    return (
        <h1>{props.course.name}</h1>
    );
};

const Part = (props) => {
    /*
    EXERCISES 1.1 AND 1.2
    */
    /*
    return (
        <p>
            {props.part_name} {props.exercises}
        </p>
    );
     */
    /*
        EXERCISES 1.3, 1.4 AND 1.5
     */
    return (
        <p>
            {props.course.parts[props.index].name} {props.course.parts[props.index].exercises}
        </p>
    );
};

const Content = (props) => {
    /*
        EXERCISES 1.1 AND 1.2
     */
    /*
    return (
        <>
            <Part part_name={props.p1} exercises={props.e1}/>
            <Part part_name={props.p2} exercises={props.e2}/>
            <Part part_name={props.p3} exercises={props.e3}/>
        </>
    );
     */
    /*
        EXERCISES 1.3, 1.4 AND 1.5
     */

    return (
        <>
            <Part course={props.course} index={0}/>
            <Part course={props.course} index={1}/>
            <Part course={props.course} index={2}/>
        </>
    );
};

const Total = (props) => {
    /*
        EXERCISES 1.1 AND 1.2
     */
    /*
    return (
        <>
            <p>
                Number of exercises {props.e1 + props.e2 + props.e3}.
            </p>
        </>
    );
     */
    /*
        EXERCISES 1.3, 1.4 AND 1.5
     */
    return (
        <>
            <p>
                Number of exercises {props.course.parts[0].exercises + props.course.parts[1].exercises + props.course.parts[2].exercises}
            </p>
        </>
    );
};

const App = () => {

  /*
    EXERCISES 1.1 AND 1.2
  */
  /*
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
   */

  /*
    EXERCISES 1.3, 1.4, AND 1.5
   */
  const course = {
      name: "Half Stack Application",
      parts: [
          {
              name: "Fundamentals of React",
              exercises: 10,
          },
          {
              name: "Using Props to Pass Data",
              exercises: 7,
          },
          {
              name: "State of A Component",
              exercises: 14,
          },
      ]
  };

  return (
      <div>
          <Header course={course} />
          <Content course={course}/>
          <Total course={course}/>
      </div>
  );
};

export default App;


/*
    EXTRA EXERCISES
 */
/*
const arto = {
    name: "Arto Hellas",
    age: 35,
    education: "PhD",
    greet: function() {
        console.log("Hello, my name is " + this.name);
    },
}

arto.greet();

arto.growOlder = function() {
    this.age += 1;
};

console.log(arto.age);
arto.growOlder();
console.log(arto.age);
 */
/*
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    greet() {
        console.log("Hello, my name is " + this.name);
    }
}

const adam = new Person("Adam Ondra", 29);
const janja = new Person("Janja Garnbret", 23);
 */
