
const Course = ({ course }) => {

    const calculateSumOfExercises = (parts) => {
        const result = parts.reduce(
            (total, obj) => obj.exercises + total, 0
        );
        console.log(result)
        return result;
    }

    return (
        <div>
            <h2>{course.name}</h2>
            <div>
                {course.parts.map(
                    note => <p key={note.id}>{note.name} {note.exercises}</p>
                )}
                <p>
                    <strong>
                        total of {calculateSumOfExercises(course.parts)} exercises
                    </strong>
                </p>
            </div>
        </div>
    );
};

export default Course;