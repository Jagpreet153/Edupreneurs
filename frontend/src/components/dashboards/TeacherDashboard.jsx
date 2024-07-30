import { useState } from 'react';

const TeacherDashboard = () => {
  const [pendingStudents, setPendingStudents] = useState([
    { id: 1, name: 'Student A', parentName: 'Parent A' },
    { id: 2, name: 'Student B', parentName: 'Parent B' },
    // Add more pending students as needed
  ]);
  const [acceptedStudents, setAcceptedStudents] = useState([]);
  const [marksOutOf, setMarksOutOf] = useState(100); // default marks out of 100
  const [selectedMessages, setSelectedMessages] = useState(null);
  const [showMessages, setShowMessages] = useState(false);

  const handleAcceptStudent = (id) => {
    const student = pendingStudents.find(s => s.id === id);
    setAcceptedStudents([...acceptedStudents, { ...student, attendance: [], marks: [], parentAccepted: false }]);
    setPendingStudents(pendingStudents.filter(s => s.id !== id));
  };

  const handleRejectStudent = (id) => {
    setPendingStudents(pendingStudents.filter(s => s.id !== id));
  };

  const handleAcceptParent = (id) => {
    setAcceptedStudents(acceptedStudents.map(student =>
      student.id === id ? { ...student, parentAccepted: true } : student
    ));
  };

  const handleRejectParent = (id) => {
    setAcceptedStudents(acceptedStudents.map(student =>
      student.id === id ? { ...student, parentAccepted: false } : student
    ));
  };

  const handleAttendance = (id, status) => {
    setAcceptedStudents(acceptedStudents.map(student =>
      student.id === id ? { ...student, attendance: [...student.attendance, status] } : student
    ));
  };

  const handleMarks = (id, marks) => {
    setAcceptedStudents(acceptedStudents.map(student =>
      student.id === id ? { ...student, marks: [...student.marks, parseInt(marks)] } : student
    ));
  };

  const calculatePercentage = (marks) => {
    return marks.length ? ((marks.reduce((a, b) => a + b, 0) / (marks.length * marksOutOf)) * 100).toFixed(2) : 0;
  };

  const calculateAttendancePercentage = (attendance) => {
    return attendance.length ? ((attendance.filter(a => a).length / attendance.length) * 100).toFixed(2) : 0;
  };

  const openMessages = (messages) => {
    setSelectedMessages(messages);
    setShowMessages(true);
  };

  const closeMessages = () => {
    setShowMessages(false);
    setSelectedMessages(null);
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Teacher Dashboard</h1>
      
      <div className="mb-4 bg-white shadow-md rounded p-4">
        <h2 className="text-xl font-bold mb-4">Accept or Reject Students and Parents</h2>
        <table className="min-w-full bg-white">
          <thead>
            <tr>
              <th className="py-2">Student Name</th>
              <th className="py-2">Parent Name</th>
              <th className="py-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {pendingStudents.map(student => (
              <tr key={student.id} className="border-t">
                <td className="py-2">{student.name}</td>
                <td className="py-2">{student.parentName}</td>
                <td className="py-2">
                  <button className="btn btn-primary mr-2" onClick={() => handleAcceptStudent(student.id)}>Accept</button>
                  <button className="btn btn-danger mr-2" onClick={() => handleRejectStudent(student.id)}>Reject</button>
                  <button className="btn btn-primary ml-2" onClick={() => handleAcceptParent(student.id)}>Accept Parent</button>
                  <button className="btn btn-danger ml-2" onClick={() => handleRejectParent(student.id)}>Reject Parent</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="bg-white shadow-md rounded p-4 mb-4">
        <h2 className="text-xl font-bold mb-4">Add Notes and Study Materials</h2>
        <div className="mb-4">
          <button className="btn btn-primary mr-2" onClick={() => {/* Add notes logic here */}}>Add Notes</button>
          <button className="btn btn-primary" onClick={() => {/* Add study materials logic here */}}>Add Study Materials</button>
        </div>
      </div>

      <div className="bg-white shadow-md rounded p-4">
        <h2 className="text-xl font-bold mb-4">Students and Parents</h2>
        <table className="min-w-full bg-white">
          <thead>
            <tr>
              <th className="py-2">Student Name</th>
              <th className="py-2">Parent Name</th>
              <th className="py-2">Attendance</th>
              <th className="py-2">Marks</th>
              <th className="py-2">Percentage</th>
              <th className="py-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {acceptedStudents.map(student => (
              <tr key={student.id} className="border-t">
                <td className="py-2">{student.name}</td>
                <td className="py-2">{student.parentAccepted ? student.parentName : 'Pending'}</td>
                <td className="py-2">{calculateAttendancePercentage(student.attendance)}% ({student.attendance.filter(a => a).length} / {student.attendance.length})</td>
                <td className="py-2">
                  <div className="flex items-center">
                    <input
                      type="text"
                      className="input input-bordered mr-2"
                      placeholder="Enter marks"
                      onBlur={(e) => handleMarks(student.id, e.target.value)}
                    />
                    <span>out of {marksOutOf}</span>
                  </div>
                </td>
                <td className="py-2">{calculatePercentage(student.marks)}%</td>
                <td className="py-2">
                  <button className="btn btn-success mr-2" onClick={() => handleAttendance(student.id, true)}>Present</button>
                  <button className="btn btn-danger mr-2" onClick={() => handleAttendance(student.id, false)}>Absent</button>
                  <button className="btn btn-secondary mr-2" onClick={() => openMessages(student.messagesFromTeacher)}>Message Student</button>
                  <button className="btn btn-secondary" onClick={() => openMessages(student.messagesFromParent)}>Message Parent</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {showMessages && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-4 rounded shadow-lg max-w-md w-full">
            <h3 className="text-xl font-bold mb-4">Messages</h3>
            <ul>
              {selectedMessages.map((message, index) => (
                <li key={index}>{message}</li>
              ))}
            </ul>
            <button className="btn btn-primary mt-4" onClick={closeMessages}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default TeacherDashboard;
