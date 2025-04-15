import React from 'react'
import {BrowserRouter as Router,Routes,Route , useMatch} from 'react-router-dom'
import Home from './pages/students/Home';
import CoursesList from './pages/students/CoursesList';
import CourseDetail from './pages/students/CourseDetail';
import MyEnrollments from './pages/students/MyEnrollments';
import Player from './pages/students/Player';
import Loading from './components/students/Loading';
import Educator from './pages/educator/Educator';
import AddCourse from './pages/educator/AddCourse';
import StudentsEnrolled from './pages/educator/StudentsEnrolled';
import Dashboard from './pages/educator/Dashboard';
import Navbar from './components/students/Navbar';
const App = () => {
  // const isEducatorRoute = useMatch('/educator/*')
  return (
    <div className='text-default min-h-screen bg-white'>
      <Router>
        {}
        <Navbar />
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/course-list' element={<CoursesList/>} />
          <Route path='/course-list/:input' element={<CoursesList/>} />
          <Route path='/course/:id' element={<CourseDetail/>} />
          <Route path='/my-enrollments' element={<MyEnrollments/>} />
          <Route path='/player/:courseId' element={<Player/>} />
          <Route path='/loading:path' element={<Loading/>} />
          <Route path='educator' element={<Educator/>} />
          <Route path='educator' element={<Dashboard/>} />
          <Route path='add-course' element={<AddCourse/>} />
          {/* <Route path='my-courses' element={<MyCourses/>} /> */}
          <Route path='student-enrolled' element={<StudentsEnrolled/>} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
