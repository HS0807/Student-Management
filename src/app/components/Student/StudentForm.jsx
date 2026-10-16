"use client";

import React, { useContext, useState } from "react";
import { StudentContext } from "../context-api/StudentContext";
import { FiUser } from "react-icons/fi";
import { CiCalendar } from "react-icons/ci";
import { IoBookOutline } from "react-icons/io5";

export default function StudentForm() {
    const { addStudent } = useContext(StudentContext)

    const [name, setName] = useState("");
    const [age, setAge] = useState("");
    const [course, setCourse] = useState("");

    const handlesubmit = (e) => {
        e.preventDefault();

        if (name === "") {
            alert("Plese enter name");
        }

        if (age === "") {
            alert("Plese enter age")
        }

        if (course === "") {
            alert("Plese enter course")
        }
    
        addStudent({
            name: name,
            age: age,
            course: course,
        });

        alert(`${name} is added`);
    };



    return (
        <div className="relative m-2 lg:m-10 rounded-lg border border-gray-200 shadow-sm">
            <form onSubmit={handlesubmit} className="pb-10 m-4">
                <h1 className="text-lg font-bold mb-4">Add New Student</h1>
                {/* Name */}
                <div className="mb-3">
                    <p className="font-semibold mb-1">Full Name</p>
                    <div className="w-full flex items-center border border-gray-300 rounded-lg">
                        <FiUser className="text-lg ml-2" />
                        <input
                            type="text"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            placeholder="Enter student name....."
                            className="w-full outline-none p-3"
                        />
                    </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-3">
                    <div>
                        <p className="font-semibold mb-1">Age</p>
                        <div className="w-full flex items-center border border-gray-300 rounded-lg">
                            <CiCalendar className="text-lg ml-2" />
                            <input
                                type="number"
                                value={age}
                                onChange={(e) => setAge(e.target.value)}
                                placeholder="Enter age"
                                className="w-full outline-none p-3"
                            />
                        </div>
                    </div>

                    <div>
                        <p className="font-semibold mb-1">Course</p>
                        <div className="flex items-center border border-gray-300 rounded-lg">
                            <IoBookOutline className="ml-2" />
                            <select
                                value={course}
                                onChange={(e) => setCourse(e.target.value)}
                                className="w-full p-3 outline-none bg-white">
                                <option value="">Select Course</option>
                                <option value="Information Technology">Information Technology</option>
                                <option value="Data Science">Data Science</option>
                                <option value="Computer Science">Computer Science</option>
                                <option value="Cyber Security">Cyber Security</option>
                                <option value="Machine Learning">Machine Learning</option>
                            </select>
                        </div>
                    </div>
                </div>

                {/* Submit button */}
                <button type="submit" className="absolute lg:bottom-1 lg:right-5 rounded bg-blue-600 p-2 lg:p-3 mb-2 lg:mb-2 font-semibold text-white hover:bg-blue-700">
                    + Add Student
                </button>
            </form>
        </div>
    );
}