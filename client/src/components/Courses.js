import React,{Component} from 'react';
import CourseButton from './CourseButton';
import {NavLink} from 'react-router-dom';
class Courses extends Component {

    state = {
        courses: []
    }

    componentDidMount(){
        fetch('http://localhost:5000/api/courses')
            .then(res => res.json())
            .then(courses => this.setState({courses}));
    }

    populateCourses(){
        return(
            this.state.courses.map((course,i) => {
                return(
                    <CourseButton key={i} course={course}/>
                );
            })
        );
    }



    render(){
        return(
            <div className="bounds">

                {this.populateCourses()}
                
                <div className="grid-33">
                    <NavLink className="course--module course--add--module" to="/courses/create">
                        <h3 className="course--add--title">
                        <svg version="1.1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
                            viewBox="0 0 13 13" className="add">
                            <polygon points="7,6 7,0 6,0 6,6 0,6 0,7 6,7 6,13 7,13 7,7 13,7 13,6 "></polygon>
                        </svg>New Course</h3>
                    </NavLink>
                </div>
                
            </div>
        );
    }
}

export default Courses;