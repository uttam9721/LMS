import React, { createContext, useEffect, useState } from "react";
import { dummyCourses } from "../assets/assets";
import humanizeDuration from 'humanize-duration'
export const AppContext = createContext();

export const AppContextProvider = (props) => {
  const currency = import.meta.env.VITE_CURRENCY;



  const [allCourses,setAllCourses] = useState([]);
  const [isEducator,setIsEducator] = useState(true);
  const [enrolledCourses,setEnrolledCourses]=useState([])

  // fetch all courses
  const fetchAllCourses=async()=>{
    setAllCourses(dummyCourses)
  }


  const calculateRating = (course) => {
    if (!course.courseRating || course.courseRating.length === 0) {
      return 0;
    }
  
    let totalRating = 0;
    course.courseRating.forEach(rating => {
      totalRating += rating.rating;
    });
  
    return totalRating / course.courseRating.length;
  };  

  // calculate chaptertime
  const calculateChapterTime=(chapter)=>{
    let time = 0
    chapter.chapterContent.map((lecture)=>{
      time+=lecture.lectureDuration
    })
    return humanizeDuration(time*60*1000,{units:["h","m"]})
  }

  // calculate the course duration
  const calculateCourseDuration=(course)=>{
    let time=0
    course.courseContent.map((chapter)=>chapter.chapterContent.map(
      (lecture)=>time+=lecture.lectureDuration
    ))
    return humanizeDuration(time*60*1000,{units:["h","m"]})
  }

  // calculate number of lectures of this course 
  // const calculateNoOfLectures=()=>{
  //   let totalLectures = 0;
  //   course.courseContent.forEach(chapter=>{
  //     if(Array.isArray(chapter.chapterContent)){
  //       totalLectures+=chapter.chapterContent.length
  //     }
  //   });
  //   return totalLectures;
  // }
  const calculateNoOfLectures = (course) => {
    let totalLectures = 0;
    course.courseContent.forEach(chapter => {
      if (Array.isArray(chapter.chapterContent)) {
        totalLectures += chapter.chapterContent.length;
      }
    });
    return totalLectures;
  };
  // fetch user enrolled courses
  const fetchUserEnrolledCourses=async()=>{
    setEnrolledCourses(dummyCourses)
  }
  useEffect(()=>{
    fetchAllCourses()
    fetchUserEnrolledCourses()
  },[])
  const value = {
    currency,
    allCourses,
    calculateRating,
    isEducator,
    setIsEducator,
    calculateChapterTime,
    calculateNoOfLectures,
    calculateCourseDuration,
    enrolledCourses,
    fetchUserEnrolledCourses

  };

  return (
    <AppContext.Provider value={value}>
      {props.children}
    </AppContext.Provider>
  );
};
