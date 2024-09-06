import { Route, Routes } from 'react-router-dom'
import AdminDashboard from './pages/admin/AdminDashboard'
import AdminPrincipalView from './pages/admin/AdminPrincipalView'
import AdminTeacherView from './pages/admin/AdminTeacherView'
import AdminStudentView from './pages/admin/AdminStudentView'
import AdminCanCreatePrincipal from './Components/principal/AdminCanCreatePrincipal'
import AdminCanEditPrincipal from './Components/principal/AdminCanEditPrincipal'
import Home from './pages/home/Home'
import Navbar from './Components/Navbar/Navbar'
import Footer from './Components/footer/Footer'
import Dashboard from './pages/dashboard/Dashboard'
import PrincipalLogin from './pages/login/PrincipalLogin'
import StudentLogin from './pages/login/StudentLogin'
import TeacherLogin from './pages/login/TeacherLogin'
import AdminLogin from './pages/login/AdminLogin'
import PrincipalDashboard from './pages/principal/PrincipalDashboard'
import AdminCanCreateTeacher from './Components/teacher/AdminCanCreateTeacher'
import AdminCanEditTeacher from './Components/teacher/AdminCanEditTeacher'
import AdminCanCreateStudent from './Components/student/AdminCanCreateStudent'
import AdminCanEditStudent from './Components/student/AdminCanEditStudent'
import TeacherDashboard from './pages/teacher/TeacherDashboard'
import AdminProtectedRoutes from './Components/protected_routes/AdminProtectedRoutes'
import PrincipalProtectedRoutes from './Components/protected_routes/PrincipalProtectedRoutes'
import PrincipalTeacherView from './pages/principal/PrincipalTeacherView'
import PrincipalStudentView from './pages/principal/PrincipalStudentView'
import PrincipalCanCreateTeacher from './Components/teacher/PrincipalCanCreateTeacher'
import PrincipalCanEditTeacher from './Components/teacher/PrincipalCanEditTeacher'
import PrincipalCanCreateStudent from './Components/student/PrincipalCanCreateStudent'
import PrincipalCanEditStudent from './Components/student/PrincipalCanEditStudent'
import TeacherStudentView from './pages/teacher/TeacherStudentView'
import TeacherCanCreateStudent from './Components/student/TeacherCanCreateStudent'
import TeacherCAnEditStudent from './Components/student/TeacherCAnEditStudent'
import TeacherProtectedRoutes from './Components/protected_routes/TeacherProtectedRoutes'
import StudentDashboard from './pages/student/StudentDashboard'
import StudentCanEditOwn from './Components/student/StudentCanEditOwn'

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
                           <Route path='/admin_dashboard/admin_principalView/create_principal' element={<AdminProtectedRoutes><AdminCanCreatePrincipal/></AdminProtectedRoutes>}/>
                           <Route path='/admin_dashboard/admin_principalView/edit_principal/:id' element={<AdminProtectedRoutes><AdminCanEditPrincipal/></AdminProtectedRoutes>}/>
                                     {/* ////////////////////// */}

                                      {/*   Teacher operation/////////// */}
                            <Route path='/admin_dashboard/admin_teacherView/create_teacher' element={<AdminProtectedRoutes><AdminCanCreateTeacher/></AdminProtectedRoutes>}/>
                            <Route path='/admin_dashboard/admin_teacherView/edit_teacher/:id' element={<AdminProtectedRoutes><AdminCanEditTeacher/></AdminProtectedRoutes>}/>
                                     {/* ////////////////////////////////// */}
                                     {/* Student operations */}
                           <Route path='/admin_dashboard/admin_studentView/create_student' element={<AdminProtectedRoutes><AdminCanCreateStudent/></AdminProtectedRoutes>}/>
                           <Route path='/admin_dashboard/admin_studentView/edit_student/:id' element={<AdminProtectedRoutes><AdminCanEditStudent/></AdminProtectedRoutes>}/>
                                     {/* //////////////////// */}
      {/* /////////////////// /////////////////////////////////////////////////////////////////////////*/}





      {/* Principal Routes/////////////////////////////////////////////////////////////////////////////*/}
      <Route path='/principal_dashboard' element={<PrincipalProtectedRoutes><PrincipalDashboard/></PrincipalProtectedRoutes>}/>
                                {/* //////////principal Views////////////// */}
                 <Route path='/principal_dashboard/principal_teacher_view' element={<PrincipalProtectedRoutes><PrincipalTeacherView/></PrincipalProtectedRoutes>}/>
                 <Route path='/principal_dashboard/principal_student_view' element={<PrincipalProtectedRoutes><PrincipalStudentView/></PrincipalProtectedRoutes>}/>
                                {/* //////////////////////////////////////// */}
                                              {/* ////teachers operation */}
                                  <Route  path='/principal_dashboard/principal_teacher_view/create_teacher' element={<PrincipalProtectedRoutes><PrincipalCanCreateTeacher/></PrincipalProtectedRoutes>}/>
                                  <Route  path='/principal_dashboard/principal_teacher_view/edit_teacher/:id' element={<PrincipalProtectedRoutes><PrincipalCanEditTeacher/></PrincipalProtectedRoutes>}/>
                                              {/* ////////////////////// */}
                                              {/* /////Student operation */}
                                  <Route  path='/principal_dashboard/principal_student_view/create_student' element={<PrincipalProtectedRoutes><PrincipalCanCreateStudent/></PrincipalProtectedRoutes>}/>
                                  <Route  path='/principal_dashboard/principal_student_view/edit_student/:id' element={<PrincipalProtectedRoutes><PrincipalCanEditStudent/></PrincipalProtectedRoutes>}/>
                                              {/* /////////////////////// */}

      {/* //////////////////////////////////////////////////////////////////////////////////////////// */}



      {/* Teacher Routes////////////////////////////////////////////////////////////////////////////// */}
      <Route path='/teacher_dashboard' element={<TeacherProtectedRoutes><TeacherDashboard/></TeacherProtectedRoutes>}/>
                                          {/* ////   student view */}
                                    <Route path='/teacher_dashboard/student_view' element={<TeacherProtectedRoutes><TeacherStudentView/></TeacherProtectedRoutes>}/>
                                           {/* /////////////////// */}
                                                                 {/* //////////////Student operation ///// */}
                                                        <Route path='/teacher_dashboard/student_view/create_student' element={<TeacherProtectedRoutes><TeacherCanCreateStudent/></TeacherProtectedRoutes>}/>
                                                        <Route path='/teacher_dashboard/student_view/edit_student/:id' element={<TeacherProtectedRoutes><TeacherCAnEditStudent/></TeacherProtectedRoutes>}/>
      {/* //////////////////////////////////////////////////////////////////////////////////////////// */}


      {/* ////////////////////////////////////Student routes      //////////////////////////////////////////////////////// */}
      <Route path='/student_dashboard' element={<StudentDashboard/>}/>
                                            {/* //////////////////////////////// */}
                                            {/* /////////////Student operation */}
                                      <Route path='/student_dashboard/edit_student' element={<StudentCanEditOwn/>}/>




      
    </Routes>
    <Footer/>
    </>
  )
}

export default App
