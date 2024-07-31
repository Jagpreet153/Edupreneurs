import { useState } from 'react';

const StudentDashboard = () => {
  const [studentData, setStudentData] = useState({
    name: 'Student A',
    attendance: [true, false, false, true, false], // Example attendance data
    marks: [85, 90, 70], // Example marks data
    notes: ['Note 1', 'Note 2'], // Example notes
    studyMaterials: ['Material 1', 'Material 2'], // Example study materials
    messagesFromTeacher: ['Message 1', 'Message 2'], // Example messages from teacher
    messagesToTeacher: [] // Messages sent to teacher
  });
  const [newMessage, setNewMessage] = useState('');

  const calculateAverage = (marks) => {
    return marks.length ? (marks.reduce((a, b) => a + b, 0) / marks.length).toFixed(2) : 0;
  };

  const handleSendMessage = () => {
    if (newMessage.trim()) {
      setStudentData({
        ...studentData,
        messagesToTeacher: [...studentData.messagesToTeacher, newMessage]
      });
      setNewMessage('');
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Student Dashboard</h1>
      
      <div className="bg-white shadow-md rounded p-4 mb-4">
        <h2 className="text-xl font-bold mb-4">Attendance</h2>
        <p>Present Days: {studentData.attendance.filter(a => a).length} / {studentData.attendance.length}</p>
      </div>

      <div className="bg-white shadow-md rounded p-4 mb-4">
        <h2 className="text-xl font-bold mb-4">Marks</h2>
        <p>Average Score: {calculateAverage(studentData.marks)}</p>
        <ul>
          {studentData.marks.map((mark, index) => (
            <li key={index}>Exam {index + 1}: {mark}</li>
          ))}
        </ul>
      </div>

      <div className="bg-white shadow-md rounded p-4 mb-4">
        <h2 className="text-xl font-bold mb-4">Notes</h2>
        <ul>
          {studentData.notes.map((note, index) => (
            <li key={index}>{note}</li>
          ))}
        </ul>
      </div>

      <div className="bg-white shadow-md rounded p-4 mb-4">
        <h2 className="text-xl font-bold mb-4">Study Materials</h2>
        <ul>
          {studentData.studyMaterials.map((material, index) => (
            <li key={index}>{material}</li>
          ))}
        </ul>
      </div>

      <div className="bg-white shadow-md rounded p-4 mb-4">
        <h2 className="text-xl font-bold mb-4">Messages from Teacher</h2>
        <ul>
          {studentData.messagesFromTeacher.map((message, index) => (
            <li key={index}>{message}</li>
          ))}
        </ul>
      </div>

      <div className="bg-white shadow-md rounded p-4">
        <h2 className="text-xl font-bold mb-4">Send Message to Teacher</h2>
        <textarea
          className="textarea textarea-bordered w-full mb-2"
          placeholder="Type your message"
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
        ></textarea>
        <button className="btn btn-primary" onClick={handleSendMessage}>Send Message</button>
        <div className="mt-4">
          <h3 className="text-xl font-bold">Sent Messages</h3>
          <ul>
            {studentData.messagesToTeacher.map((message, index) => (
              <li key={index}>{message}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default StudentDashboard;
