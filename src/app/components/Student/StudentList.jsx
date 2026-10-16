"use client";

import { useContext, useState } from 'react';
import { StudentContext } from '../context-api/StudentContext';
import StudentCard from './StudentCard';
import { MdGroups } from "react-icons/md";
import { FaBookOpen } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";
import StudentForm from './StudentForm';
import { IoMdNotifications } from "react-icons/io";

export default function StudentList() {
    const { students } = useContext(StudentContext);

    const [search, setSearch] = useState("");
    const [course, setCourse] = useState("All")

    const filteredStudents = students.filter((student) => {
        return student.name.toLowerCase().includes(search.toLowerCase());
    });

    const filteredcourse = course === "All" ? filteredStudents : filteredStudents.filter((student) => student.course === course);


    return (
        <div>

            {/* logo & title */}
            <div className="flex items-center justify-between bg-white px-6 py-3 ">
                <div>
                    <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold"> Management</h1>
                    <p className="text-sm md:text-lg text-gray-500 mt-1">Manage your students in one place</p>
                </div>
                <IoMdNotifications className='text-2xl' />
            </div>

            {/* three cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 m-5">
                <div className="flex items-center gap-4 p-4 rounded-2xl shadow-sm border">
                    <div className="flex items-center justify-center rounded-full">
                        <MdGroups className="text-5xl text-blue-600 rounded-full bg-blue-200 p-1" />
                    </div>
                    <div>
                        <h1 className="text-3xl font-bold text-gray-900">{students.length}</h1>
                        <p className="text-sm text-gray-500">Total Students</p>
                    </div>

                </div>
                <div className="flex items-center gap-4 p-4 rounded-2xl shadow-sm border">
                    <div className="flex items-center justify-center rounded-full">
                        <FaBookOpen className='text-4xl text-green-500 p-1' />
                    </div>
                    <div>
                        <h1 className="text-3xl font-bold text-gray-900">{students.length}</h1>
                        <p className="text-sm text-gray-500">Courses</p>
                    </div>
                </div>
            </div>

            {/* Add students */}
            <StudentForm />

            <div className='border border-gray-200 m-4 rounded'>
                <h1 className='text-3xl font-semibold m-5 '>Student List</h1>
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 m-4">
                    <div className="flex items-center gap-2 border border-gray-200 rounded-lg px-3 py-2 w-full sm:max-w-xs">
                        <FaSearch className="text-gray-500" />

                        <input
                            type="text"
                            placeholder="Search student by name..."
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                            className="w-full outline-none text-sm"
                        />
                    </div>

                    <div className="flex items-center gap-2 border border-gray-200 rounded-lg px-3 py-2 w-full sm:w-auto">
                        <FaBookOpen className="text-gray-500" />

                        <select
                            value={course}
                            onChange={(e) => setCourse(e.target.value)}
                            className="w-full sm:w-40 bg-white outline-none text-sm">
                            <option value="All">All Courses</option>
                            <option value="Information Technology">Information Technology</option>
                            <option value="Data Science">Data Science</option>
                            <option value="Computer Science">Computer Science</option>
                            <option value="Cyber Security">Cyber Security</option>
                            <option value="Machine Learning">Machine Learning</option>
                        </select>
                    </div>

                </div>

                {/* Student Table */}


                {/* {filteredStudents.map((student) => (
                    <StudentCard key={student.id} students={student} />
                ))} */}
                <StudentCard students={filteredStudents} />
            </div>

        </div>
    );
}
