import { Route, Routes } from 'react-router-dom'
import AdminDashboard from './pages/admin/AdminDashboard'
import AdminPrincipalView from './pages/admin/AdminPrincipalView'
import AdminTeacherView from './pages/admin/AdminTeacherView'
import AdminStudentView from './pages/admin/AdminStudentView'
import CreatePrincipal from './Components/principal/CreatePrincipal'
import EditPrincipal from './Components/principal/EditPrincipal'
import Home from './pages/home/Home'
import Navbar from './Components/Navbar/Navbar'
import Footer from './Components/footer/Footer'
import Dashboard from './pages/dashboard/Dashboard'
import PrincipalLogin from './pages/login/PrincipalLogin'
import StudentLogin from './pages/login/StudentLogin'
import TeacherLogin from './pages/login/TeacherLogin'
import AdminLogin from './pages/login/AdminLogin'
import PrincipalDashboard from './pages/principal/PrincipalDashboard'
import CreateTeacher from './Components/teacher/CreateTeacher'
import EditTeacher from './Components/teacher/EditTeacher'

function App() {

  return (
    <>
    <Navbar/>
    <Routes>
      <Route path='/' element={<Home/>}/>

      {/* Login routes */}
      <Route path='/admin_login' element={<AdminLogin/>}/>
      <Route path='/principal_login' element={<PrincipalLogin/>}/>
      <Route path='/teacher_login' element={<TeacherLogin/>}/>
      <Route path='/student_login' element={<StudentLogin/>}/>
      {/* //////////////// */}


      <Route path='/dashboard' element={<Dashboard/>}/>

      {/* admin routes /////////////////////////////////////////////////////////////////////////////ijj*/}
      <Route path='/admin_dashboard' element={<AdminDashboard/>}/>
                  {/* admin view */}
            <Route path='/admin_dashboard/admin_principalView' element={<AdminPrincipalView/>}/>
            <Route path='/admin_dashboard/admin_teacherView' element={<AdminTeacherView/>}/>
            <Route path='/admin_dashboard/admin_studentView' element={<AdminStudentView/>}/>
            {/* //////////////////////////// */}
                                    {/* principal operation */}
                           <Route path='/admin_dashboard/admin_principalView/create_principal' element={<CreatePrincipal/>}/>
                           <Route path='/admin_dashboard/admin_principalView/edit_principal/:id' element={<EditPrincipal/>}/>
                                     {/* ////////////////////// */}

                            {/*   Teacher operation/////////// */}
                            <Route path='/admin_dashboard/admin_teacherView/create_teacher' element={<CreateTeacher/>}/>
                            <Route path='/admin_dashboard/admin_teacherView/edit_teacher' element={<EditTeacher/>}/>
                            {/* ////////////////////////////////// */}
      {/* /////////////////// /////////////////////////////////////////////////////////////////////////*/}

      {/* Principal Routes/////////////////////////////////////////////////////////////////////////////*/}
      <Route path='/principal_dashboard' element={<PrincipalDashboard/>}/>



      
    </Routes>
    <Footer/>
    </>
  )
}

export default App
