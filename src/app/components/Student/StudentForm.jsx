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
    const [error, setError] = useState({})


    const handlesubmit = (e) => {
        e.preventDefault();

        const newErrors = {};

        if (!name.trim()) {
            newErrors.name = "Name is required";
        }

        if (!age) {
            newErrors.age = "Age is required";
        }

        if (!course) {
            newErrors.course = "Course is required";
        }

        setError(newErrors);

        if (Object.keys(newErrors).length > 0) {
            return;
        }

        addStudent({
            name: name.trim(),
            age: age,
            course: course,
        });

        setName("");
        setAge("");
        setCourse("");
        setError({});
    };

    return (
        <div className="relative m-2 lg:m-10 rounded-lg border border-gray-200 shadow-sm">
            <form onSubmit={handlesubmit} className="pb-10 m-4">
                <h1 className="text-lg font-bold mb-4">Add New Student</h1>
                {/* Name */}
                <div className="mb-3">
                    <p className="font-semibold mb-1">Full Name</p>

                    <div className={`w-full flex items-center border rounded-lg ${error.name ? "border-red-500" : "border-gray-300"}`}>
                        <FiUser className="text-lg ml-2 text-gray-500" />

                        <input
                            type="text"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            placeholder="Enter student name..."
                            className="w-full outline-none p-3 rounded-lg"
                        />
                    </div>

                    {error.name && (
                        <p className="text-red-500 text-lg mt-1 flex items-center gap-1">
                            {error.name}
                        </p>
                    )}
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-3">
                    <div>
                        <p className="font-semibold mb-1">Age</p>
                        <div className={`w-full flex items-center border rounded-lg ${error.age ? "border-red-500" : "border-gray-300"}`}>
                            <CiCalendar className="text-lg ml-2" />
                            <input
                                type="number"
                                value={age}
                                onChange={(e) => setAge(e.target.value)}
                                placeholder="Enter age"
                                className="w-full outline-none p-3"
                            />
                        </div>
                        {error.age && (
                            <p className="text-red-500 text-lg mt-1 flex items-center gap-1">
                                {error.age}
                            </p>
                        )}
                    </div>

                    <div>
                        <p className="font-semibold mb-1">Course</p>
                        <div className={`w-full flex items-center border rounded-lg ${error.course ? "border-red-500" : "border-gray-300"}`}>
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
                        {error.course && (
                            <p className="text-red-500 text-lg mt-1 flex items-center gap-1">
                                {error.course}
                            </p>
                        )}
                    </div>
                </div>

                {/* Submit button */}
                <button
                    disabled={!name && !age && !course}
                    type="submit"
                    className="absolute lg:bottom-1 lg:right-5 rounded bg-blue-600 p-2 lg:p-3 mb-2 lg:mb-2 font-semibold text-white hover:bg-blue-700 disabled:bg-gray-400">
                    + Add Student
                </button>
            </form>
        </div>
    );
}
