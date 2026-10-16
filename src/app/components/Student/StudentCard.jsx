"use client"
import React, { useContext, useState } from "react";
import { StudentContext } from "../context-api/StudentContext";
import { FaTrash, FaUser } from "react-icons/fa";
import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowBack } from "react-icons/io";

export default function StudentCard({ students }) {
    const { deleteHandler } = useContext(StudentContext);

    const [page, setPage] = useState(1);
    const limit = 3;
    const filteredStudents = students.filter(
        (student, index) =>
            index >= (page - 1) * limit &&
            index < page * limit
    );

    const totalPages = Math.ceil(students.length / limit);

    return (
        <div className="m-3 rounded-lg border border-gray-200 shadow-sm">
            <table className="w-full text-left">
                <thead>
                    <tr>
                        <th className="p-4 text-gray-700">Student</th>
                        <th className="p-4 text-gray-700">Age</th>
                        <th className="p-4 text-gray-700">Course</th>
                        <th className="p-4 text-center text-gray-700">
                            Actions
                        </th>
                    </tr>
                </thead>

                <tbody>
                    {filteredStudents.map((student) => (
                        <tr key={student.id} className="border border-gray-200">
                            {/* Student Name */}
                            <td className="p-4">
                                <div className="flex items-center gap-3">
                                    <div className="flex items-center justify-center rounded-full bg-blue-50 text-blue-600">
                                        <FaUser className="text-2xl" />
                                    </div>

                                    <div>
                                        <h2 className="font-bold text-gray-900">
                                            {student.name}
                                        </h2>
                                        <p className="text-sm text-gray-500">
                                            {student.course}
                                        </p>
                                    </div>

                                    <p className="rounded bg-blue-50 px-2 py-1 text-xs text-blue-600">
                                        Age: {student.age}
                                    </p>
                                </div>
                            </td>

                            <td className="text-gray-600">{student.age}</td>

                            <td>
                                <p className="rounded px-3 py-1 text-sm text-blue-600">
                                    {student.course}
                                </p>
                            </td>

                            <td className="text-center">
                                <button onClick={() => {
                                    deleteHandler(student.id)
                                    alert(`${student.name} is removed`);
                                }}
                                    className="rounded-lg border border-gray-200 p-3 text-red-500 hover:bg-red-50">
                                    <FaTrash />
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        
            <div className="flex items-center justify-between border-t border-gray-200 bg-white px-4 py-3">

                <p className="text-xs text-gray-500">
                    Showing {(page - 1) * limit + 1} to{" "}
                    {Math.min(page * limit, students.length)} of{" "}
                    {students.length} students
                </p>

                <div className="flex items-center gap-2">
                    <button
                        disabled={page === 1}
                        onClick={() => setPage(page - 1)}
                        className="flex items-center justify-center rounded-md border border-gray-200 text-gray-600 disabled:text-gray-400 ">
                        <IoIosArrowBack className="text-lg "/>
                    </button>

                    <button
                        onClick={() => setPage(1)}
                        className={`h-9 w-9 rounded-md border text-sm ${page === 1
                            ? "border-blue-600 bg-blue-600 text-white"
                            : "border-gray-200 text-gray-700"
                            }`}
                    >
                        1
                    </button>

                    {totalPages >= 2 && (
                        <button
                            onClick={() => setPage(2)}
                            className={`h-9 w-9 rounded-md border text-sm ${page === 2
                                ? "border-blue-600 bg-blue-600 text-white"
                                : "border-gray-200 text-gray-700"
                                }`}>
                            2
                        </button>
                    )}

                    {totalPages >= 3 && (
                        <button
                            onClick={() => setPage(3)}
                            className={`h-9 w-9 rounded-md border text-sm ${page === 3
                                ? "border-blue-600 bg-blue-600 text-white"
                                : "border-gray-200 text-gray-700"
                                }`}>
                            3
                        </button>
                    )}

                    {totalPages >= 4 && (
                        <button
                            onClick={() => setPage(4)}
                            className={`h-9 w-9 rounded-md border text-sm ${page === 4
                                ? "border-blue-600 bg-blue-600 text-white"
                                : "border-gray-200 text-gray-700"
                                }`}>
                            4
                        </button>
                    )}

                    {totalPages >= 5 && (
                        <button
                            onClick={() => setPage(5)}
                            className={`h-9 w-9 rounded-md border text-sm ${page === 5
                                ? "border-blue-600 bg-blue-600 text-white"
                                : "border-gray-200 text-gray-700"
                                }`}>
                            5
                        </button>
                    )}

                    <button
                        disabled={page === totalPages || totalPages === 0}
                        onClick={() => setPage(page + 1)}
                        className="flex items-center justify-center rounded-md border border-gray-200 text-gray-600 disabled:text-gray-400">
                        <IoIosArrowForward className="text-lg "/>
                    </button>

                </div>
            </div>
        </div>
    );
}
