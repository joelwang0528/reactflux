import React from "react";
import { Prompt } from "react-router-dom";
import CourseForm from "./CourseForm";
import CoursesPage from "./CoursesPage";

const ManageCoursePage = (props) => {
  return (
    <>
      <h2>Manage Course</h2>
      <Prompt when={true} message="Are you sure you want to leave?" />
      <CoursesPage />
    </>
  );
};

export default ManageCoursePage;
