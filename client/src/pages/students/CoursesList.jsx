import React, { useContext, useEffect, useState } from 'react'
import { AppContext } from './../../context/AppContext';
import { useNavigate, useParams } from 'react-router-dom';
import SearchBar from './../../components/students/SearchBar';
import CourseCard from './../../components/students/CourseCard';
import { assets } from '../../assets/assets';
import Footer from '../../components/students/Footer'
const CoursesList = () => {
  const {allCourses} = useContext(AppContext)
  const navigate = useNavigate()
  const {input} = useParams()
  const [filteredCourse,setFilteredCourse]=useState([])

    useEffect(()=>{
      if(allCourses && allCourses.length>0){
        const tempCourses=allCourses.slice()

        input ? setFilteredCourse(
          tempCourses.filter(
            item=>item.courseTitle.toLowerCase().includes(input.toLowerCase())
          )
        ) :setFilteredCourse(tempCourses)
      }

    },[allCourses,input])


  return (
    <>
    <div className='relative md:px-36 px-8 pt-20 text-left'>

      <div className='flex md:flex-row flex-col gap-6 items-start justify-between w-full'>
        <div>
      <h1 className='text-4xl font-semibold text-gray text-gray-800'>CourseList</h1>
      <p className='text-gray-500'>
       <span className='text-blue-600 cursor-pointer'
       onClick={()=>navigate('/')}
       > Home </span>/ Course List </p>
    </div>
    <SearchBar data={input} />
    </div>
    {
      input && <div className='inline-flex items-center gap-4 px-
       py-2  mt-8-mb-8 text-gray-600'>
        <p>{input}</p>
        <img src={assets.cross_icon} alt="cursor" onClick={()=>navigate('/course-list')} />
      </div>
    }
    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 my-16 gap-3 px-2 md:p-0'>
      {filteredCourse.map((course,index)=><CourseCard key={index} course={course} />)}
    </div>
    </div>
    <Footer />
    </>
  )
}

export default CoursesList
