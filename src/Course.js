import React, { Component } from "react";

export default class Course extends Component {
  constructor() {
    super();
    this.state = {
      value: "",
      error: false,
      department: "",
      courseNumber: "",
      semester: "",
      year: ""
    };
    this.findCourseInfo = this.findCourseInfo.bind(this);
  }

  findCourseInfo(e) {
    const coursename = e.target.value;
    this.setState({ value: e.target.value });
    const str = coursename.match(/[a-zA-Z]+/gi);
    const num = coursename.match(/\d+/g);
    if (str.length === 2 && num.length === 2) {
      const validYear = /^\d{2}$|^\d{4}$/g.test(num[1]);
      this.setState({
        courseNumber: num[0],
        department: str[0],
        year: num[1],
        semester: str[1],
        error: false
      });
      if (!validYear) {
        this.setState({ error: true });
      }
    } else {
      this.setState({ error: true });
    }
  }

  render() {
    const {
      value,
      error,
      department,
      courseNumber,
      semester,
      year
    } = this.state;
    return (
      <form>
        <label for="course">Course </label>
        <input
          type="text"
          name="course"
          className="txt-course"
          value={value}
          onChange={this.findCourseInfo}
        />
        <div className={error ? "invalid" : "valid"}>
          Please enter a valid course name.
        </div>
        <div>
          <p>
            Department : <b> {department}</b>
          </p>
          <p>
            Course Number : <b>{courseNumber}</b>
          </p>
          <p>
            Semester : <b>{semester}</b>
          </p>
          <p>
            Year : <b>{year}</b>
          </p>
        </div>
      </form>
    );
  }
}
