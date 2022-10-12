import { Route, Switch } from "react-router-dom";
import Login from "./component/Login";
import Signup from "./component/Signup";
import Addacademy from "./layout/Admin/Addacademy";
import StudentInd from "./layout/Admin/StudentInd";
import Studentsdata from "./layout/Admin/Studentsdata";
import Adminaddcourse from "./layout/Admin/Adminaddcourse";
import Admincourse from "./layout/Admin/Admincourse";
import "./App.css";
// import Data from "./Data";
import Adminmain from "./layout/Admin/Adminmain";
// import Home from "./Home";
// import Navmenu from "./Navmenu";
import Usermain from "./layout/User/Usermain";
import Userimages from "./layout/User/Userimages";
import Academyfrom from "./layout/User/Academyform";
import Enrolledpage from "./layout/User/Enrolledpage";
import Studentform from "./layout/Admin/Studentform";
import EditStudentform from "./layout/Admin/EditStudentform";
import EditAcademyform from "./layout/Admin/EditAcademyform";
import EditCourseform from "./layout/Admin/EditCourseform";

function App() {
  return (
    <div className="App">
      {/* <Navmenu /> */}
      <Switch>
        <Route exact path="/">
          <Signup />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/User">
          <Usermain />
        </Route>
        <Route path="/User_course">
          <Userimages />
        </Route>
        <Route path="/Enrolledpage">
          <Enrolledpage />
        </Route>
        <Route path="/Academyfrom">
          <Academyfrom />
        </Route>
        <Route path="/Admin">
          <Adminmain />
        </Route>
        <Route path="/Admin_course">
          <Admincourse />
        </Route>
        <Route path="/Admin_student_data">
          <Studentsdata />
        </Route>
        <Route path="/Admin_add_academy">
          <Addacademy />
        </Route>
        <Route path="/EditAcademyform">
          <EditAcademyform />
        </Route>
        <Route path="/Admin_add_course">
          <Adminaddcourse />
        </Route>
        <Route path="/EditCourseform">
          <EditCourseform />
        </Route>
        <Route path="/Admin_student_ind">
          <StudentInd />
        </Route>
        <Route path="/Studentform">
          <Studentform />
        </Route>
        <Route path="/EditStudentform">
          <EditStudentform />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
