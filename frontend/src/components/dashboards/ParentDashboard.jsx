import { useState } from 'react';

const ParentDashboard = () => {
  const [studentData, setStudentData] = useState({
    name: 'Student A',
    attendance: [true, false, true, true], // Example attendance data
    marks: [85, 90, 88], // Example marks data
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
      <h1 className="text-2xl font-bold mb-4">Parent Dashboard</h1>
      
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

export default ParentDashboard;
