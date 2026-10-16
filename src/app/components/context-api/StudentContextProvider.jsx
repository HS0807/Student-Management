"use client";

import { useState } from "react";
import { StudentContext } from "../context-api/StudentContext";

export default function StudentContextProvider({ children }) {
  const [students, setStudents] = useState([
    { id: 1, name: "Hitesh", age: 21, course: "Information Technology" },
    { id: 2, name: "Rahul", age: 25, course: "Data Science" },
    { id: 3, name: "Moresh", age: 24, course: "Computer Science" },
    { id: 4, name: "Ravi", age: 20, course: "Cyber Security" },
    { id: 5, name: "Amit", age: 22, course: "Machine Learning" },
  ]);

  const addStudent = (student) => {
    student.id = students.length + 1;
    setStudents([...students, student]);
  };

  const deleteHandler = (id) => {
    setStudents(students.filter((student) => student.id !== id));
  };



  return (
    <StudentContext.Provider value={{ students, addStudent, deleteHandler }}>
      {children}
    </StudentContext.Provider>
  );
}