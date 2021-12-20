import { useState } from "react";
import StudentLists from "./components/StudentLists";
import { StudentContext } from "./context/StudentContext";
import data from "./data";

function App() {
  const [students, setStudents] = useState(data);
  const changeColor = (color, id) => {
    setStudents(
      students.map((student) =>
        student.id === id ? { ...student, color: color } : student
      )
    );
  };
  return (
    <div>
      <StudentContext.Provider value={{ students }}>
        <StudentLists />
      </StudentContext.Provider>
    </div>
  );
}
export default App;
