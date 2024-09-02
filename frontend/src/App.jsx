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
import CreateStudent from './Components/student/CreateStudent'
import EditStudent from './Components/student/EditStudent'
import TeacherDashboard from './pages/teacher/TeacherDashboard'
import AdminProtectedRoutes from './Components/protected_routes/AdminProtectedRoutes'
import PrincipalProtectedRoutes from './Components/protected_routes/PrincipalProtectedRoutes'
import PrincipalTeacherView from './pages/principal/PrincipalTeacherView'
import PrincipalStudentView from './pages/principal/PrincipalStudentView'

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
      <Route path='/admin_dashboard' element={<AdminProtectedRoutes><AdminDashboard/></AdminProtectedRoutes>}/>
                  {/* admin view */}
            <Route path='/admin_dashboard/admin_principalView' element={<AdminProtectedRoutes><AdminPrincipalView/></AdminProtectedRoutes>}/>
            <Route path='/admin_dashboard/admin_teacherView' element={<AdminProtectedRoutes><AdminTeacherView/></AdminProtectedRoutes>}/>
            <Route path='/admin_dashboard/admin_studentView' element={<AdminProtectedRoutes><AdminStudentView/></AdminProtectedRoutes>}/>
            {/* //////////////////////////// */}
                                    {/* principal operation */}
                           <Route path='/admin_dashboard/admin_principalView/create_principal' element={<AdminProtectedRoutes><CreatePrincipal/></AdminProtectedRoutes>}/>
                           <Route path='/admin_dashboard/admin_principalView/edit_principal/:id' element={<AdminProtectedRoutes><EditPrincipal/></AdminProtectedRoutes>}/>
                                     {/* ////////////////////// */}

                                      {/*   Teacher operation/////////// */}
                            <Route path='/admin_dashboard/admin_teacherView/create_teacher' element={<AdminProtectedRoutes><CreateTeacher/></AdminProtectedRoutes>}/>
                            <Route path='/admin_dashboard/admin_teacherView/edit_teacher/:id' element={<AdminProtectedRoutes><EditTeacher/></AdminProtectedRoutes>}/>
                                     {/* ////////////////////////////////// */}
                                     {/* Student operations */}
                           <Route path='/admin_dashboard/admin_studentView/create_student' element={<AdminProtectedRoutes><CreateStudent/></AdminProtectedRoutes>}/>
                           <Route path='/admin_dashboard/admin_studentView/edit_student/:id' element={<AdminProtectedRoutes><EditStudent/></AdminProtectedRoutes>}/>
                                     {/* //////////////////// */}
      {/* /////////////////// /////////////////////////////////////////////////////////////////////////*/}





      {/* Principal Routes/////////////////////////////////////////////////////////////////////////////*/}
      <Route path='/principal_dashboard' element={<PrincipalProtectedRoutes><PrincipalDashboard/></PrincipalProtectedRoutes>}/>
                                {/* //////////principal Views////////////// */}
                 <Route path='/principal_dashboard/principal_teacher_view' element={<PrincipalProtectedRoutes><PrincipalTeacherView/></PrincipalProtectedRoutes>}/>
                 <Route path='/principal_dashboard/principal_student_view' element={<PrincipalProtectedRoutes><PrincipalStudentView/></PrincipalProtectedRoutes>}/>

      {/* //////////////////////////////////////////////////////////////////////////////////////////// */}



      {/* Teacher Routes////////////////////////////////////////////////////////////////////////////// */}
      <Route path='/teacher_dashboard' element={<TeacherDashboard/>}/>
      {/* //////////////////////////////////////////////////////////////////////////////////////////// */}




      
    </Routes>
    <Footer/>
    </>
  )
}

export default App
