import React, { useState } from 'react';

const TeacherDashboard = () => {
  const [pendingStudents, setPendingStudents] = useState([
    { id: 1, name: 'Jagpreet', parentName: 'Riyaz', roll: 1 },
    { id: 2, name: 'Shiwangi', parentName: 'Somya', roll: 2 },
    // Add more pending students as needed
  ]);
  const [acceptedStudents, setAcceptedStudents] = useState([]);
  const [marksOutOf, setMarksOutOf] = useState(100); // default marks out of 100
  const [selectedMessages, setSelectedMessages] = useState(null);
  const [showMessages, setShowMessages] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [modalType, setModalType] = useState(''); // 'notes', 'studyMaterials', 'studentMessage', 'parentMessage'
  const [content, setContent] = useState(''); // Content for notes, study materials, or messages
  const [currentStudent, setCurrentStudent] = useState(null);
  const [notes, setNotes] = useState([]);
  const [studyMaterials, setStudyMaterials] = useState([]);

  const handleAcceptStudent = (id) => {
    const student = pendingStudents.find(s => s.id === id);
    setAcceptedStudents([...acceptedStudents, { ...student, attendance: [], marks: [], parentAccepted: false, messagesFromTeacher: [], messagesFromParent: [] }]);
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

  const openModal = (type, student = null) => {
    setModalType(type);
    setCurrentStudent(student);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setContent('');
    setCurrentStudent(null);
  };

  const handleAddContent = () => {
    if (modalType === 'notes') {
      setNotes([...notes, content]);
    } else if (modalType === 'studyMaterials') {
      setStudyMaterials([...studyMaterials, content]);
    } else if (modalType === 'studentMessage') {
      setAcceptedStudents(acceptedStudents.map(student =>
        student.id === currentStudent.id ? { ...student, messagesFromTeacher: [...student.messagesFromTeacher, content] } : student
      ));
    } else if (modalType === 'parentMessage') {
      setAcceptedStudents(acceptedStudents.map(student =>
        student.id === currentStudent.id ? { ...student, messagesFromParent: [...student.messagesFromParent, content] } : student
      ));
    }
    closeModal();
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Teacher Dashboard</h1>
      
      <div className="mb-4 bg-white shadow-md rounded p-4">
        <h2 className="text-xl font-bold mb-4">Accept or Reject Students and Parents</h2>
        <table className="min-w-full bg-white">
          <thead>
            <tr>
              <th className="py-2">Roll</th>
              <th className="py-2">Student Name</th>
              <th className="py-2">Parent Name</th>
              <th className="py-2">Role</th>
              <th className="py-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {pendingStudents.map(student => (
              <tr key={student.id} className="border-t">
                <td className="py-2">{student.roll}</td>
                <td className="py-2">{student.name}</td>
                <td className="py-2">{student.parentName}</td>
                <td className="py-2">Student</td>
                <td className="py-2">
                  <button className="btn btn-primary mr-2" onClick={() => handleAcceptStudent(student.id)}>Accept</button>
                  <button className="btn btn-danger" onClick={() => handleRejectStudent(student.id)}>Reject</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <table className="min-w-full bg-white mt-4">
          <thead>
            <tr>
              <th className="py-2">Roll</th>
              <th className="py-2">Student Name</th>
              <th className="py-2">Parent Name</th>
              <th className="py-2">Role</th>
              <th className="py-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {acceptedStudents.filter(student => !student.parentAccepted).map(student => (
              <tr key={student.id} className="border-t">
                <td className="py-2">{student.roll}</td>
                <td className="py-2">{student.name}</td>
                <td className="py-2">{student.parentName}</td>
                <td className="py-2">Parent</td>
                <td className="py-2">
                  <button className="btn btn-primary mr-2" onClick={() => handleAcceptParent(student.id)}>Accept</button>
                  <button className="btn btn-danger" onClick={() => handleRejectParent(student.id)}>Reject</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="bg-white shadow-md rounded p-4 mb-4">
        <h2 className="text-xl font-bold mb-4">Add Notes and Study Materials</h2>
        <div className="mb-4">
          <button className="btn btn-primary mr-2" onClick={() => openModal('notes')}>Add Notes</button>
          <button className="btn btn-primary" onClick={() => openModal('studyMaterials')}>Add Study Materials</button>
        </div>
        <div>
          <h3 className="text-lg font-bold mb-2">Notes</h3>
          <ul>
            {notes.map((note, index) => (
              <li key={index}>{note}</li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-bold mb-2">Study Materials</h3>
          <ul>
            {studyMaterials.map((material, index) => (
              <li key={index}>{material}</li>
            ))}
          </ul>
        </div>
      </div>

      <div className="bg-white shadow-md rounded p-4">
        <h2 className="text-xl font-bold mb-4">Students and Parents</h2>
        <table className="min-w-full bg-white">
          <thead>
            <tr>
              <th className="py-2">Roll</th>
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
                <td className="py-2">{student.roll}</td>
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
                    <button className="btn btn-primary" onClick={() => {/* submit marks logic here */}}>Submit</button>
                    <span>out of {marksOutOf}</span>
                  </div>
                </td>
                <td className="py-2">{calculatePercentage(student.marks)}%</td>
                <td className="py-2">
                  <button className="btn btn-success mr-2" onClick={() => handleAttendance(student.id, true)}>Present</button>
                  <button className="btn btn-danger mr-2" onClick={() => handleAttendance(student.id, false)}>Absent</button>
                  <button className="btn btn-secondary mr-2" onClick={() => openModal('studentMessage', student)}>Message Student</button>
                  <button className="btn btn-secondary" onClick={() => openModal('parentMessage', student)}>Message Parent</button>
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

      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-4 rounded shadow-lg max-w-md w-full">
            <h3 className="text-xl font-bold mb-4">
              {modalType === 'notes' ? 'Add Notes' :
               modalType === 'studyMaterials' ? 'Add Study Materials' :
               modalType === 'studentMessage' ? `Message to ${currentStudent.name}` :
               `Message to ${currentStudent.parentName}`}
            </h3>
            <textarea
              className="w-full p-2 border rounded"
              rows="5"
              value={content}
              onChange={(e) => setContent(e.target.value)}
              placeholder={`Enter ${modalType === 'notes' ? 'notes' :
                            modalType === 'studyMaterials' ? 'study materials' :
                            modalType === 'studentMessage' ? 'message to student' :
                            'message to parent'} content here`}
            />
            <div className="mt-4 flex justify-end">
              <button className="btn btn-secondary mr-2" onClick={closeModal}>Cancel</button>
              <button className="btn btn-primary" onClick={handleAddContent}>Add</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default TeacherDashboard;
