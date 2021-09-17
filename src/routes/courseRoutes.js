import { Route, Switch } from 'react-router-dom'

import { ViewAllCourse, AddCourse, EditCourse, ViewCourse, CourseFutureDevelopment } from '../pages/Course'

export const CourseRoutes = (props) => {
   console.log('entered Course Route');
   console.log(props);
  // console.log(${props.path});
   console.log(props.path);
  return (
    <Switch>
      <Route path={`${props.path}/all`} component={ViewAllCourse} />
      <Route path={`${props.path}/add`} component={AddCourse} />
      <Route path={`${props.path}/edit/:courseId`} component={EditCourse} />
      <Route path={`${props.path}/view/:courseId`} component={ViewCourse} />
      <Route path={`${props.path}/futuredev`} component={CourseFutureDevelopment} />
      
      {/* <Route path={`${props}`} component={EditCourse} /> */}

      {/* history.push(`/edit/${props.courseData.courseId}`)} */}
    </Switch>
  )
}