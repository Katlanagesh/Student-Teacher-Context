import { useState } from "react";
import Context from "./Context";
import teachersData from './Components/teachersDetails';
import StudentDetails from "./Components/StudentsDetails";

const Provider=(props)=>{
    const [formValue,Setval] = useState("df");
    const [students,setStudents] = useState(StudentDetails);
    const [teachers,setTeachers] = useState(teachersData);
    return(
        <Context.Provider value={{formValue,
                                  Setval,
                                  students,
                                  setStudents,
                                  teachers,
                                  setTeachers
                                  }}>
            {props.children}
        </Context.Provider>
    );
}

export default Provider ;