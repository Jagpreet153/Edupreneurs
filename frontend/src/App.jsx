import './App.css'
import {Routes , Route ,} from 'react-router-dom'
import Login from './components/login/Login'
import Signup from './components/signup/Signup'
import ParentDashboard from './components/dashboards/ParentDashboard'
import StudentDashboard from './components/dashboards/StudentDashboard'
import TeacherDashboard from './components/dashboards/TeacherDashboard'
import Notfound from './components/Notfound/Notfound'
function App() {
  return (
    <div>
    
      <Routes>
          <Route path='/' element={<Login/>}/>
          <Route path='/signup' element={<Signup/>}/>
          <Route path='/parentDashboard' element={<ParentDashboard/>}/>
          <Route path='/studentDashboard' element={<StudentDashboard/>}/>
          <Route path='/teacherDashboard' element={<TeacherDashboard/>}/>

          <Route path='/*' element={<Notfound/>}/>
      </Routes>
    </div>
    
  )
}

export default App
