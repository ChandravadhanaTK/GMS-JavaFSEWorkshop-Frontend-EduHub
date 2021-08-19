import { Route, Switch } from 'react-router-dom'

import { ViewAllCourse, AddCourse, EditCourse } from '../pages/Course'

export const CourseRoutes = (props) => {
  return (
    <Switch>
      {/* <Route path={`${props.path}/all`} component={ViewAllCourse} /> */}
      <Route path={`${props.path}/add`} component={AddCourse} />
      {/* <Route path={`${props.path}/edit/:courseId`} component={EditCourse} /> */}
    </Switch>
  )
}