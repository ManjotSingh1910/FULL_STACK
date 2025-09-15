import React from "react";

// Base Person class
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  // Method to display basic info
  displayInfo() {
    return `Name: ${this.name}, Age: ${this.age}`;
  }
}

// Student subclass
class Student extends Person {
  constructor(name, age, course) {
    super(name, age); // call parent constructor
    this.course = course;
  }

  // Override displayInfo to include course
  displayInfo() {
    return `${super.displayInfo()}, Course: ${this.course}`;
  }
}

// Teacher subclass
class Teacher extends Person {
  constructor(name, age, subject) {
    super(name, age); // call parent constructor
    this.subject = subject;
  }

  // Override displayInfo to include subject
  displayInfo() {
    return `${super.displayInfo()}, Subject: ${this.subject}`;
  }
}

function App() {
  // Create instances
  const student1 = new Student("Alice", 20, "Mathematics");
  const teacher1 = new Teacher("Mr. Smith", 45, "Physics");

  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <h1>Person Class Hierarchy Example</h1>
      <h2>Student:</h2>
      <p>{student1.displayInfo()}</p>

      <h2>Teacher:</h2>
      <p>{teacher1.displayInfo()}</p>
    </div>
  );
}

export default App;
