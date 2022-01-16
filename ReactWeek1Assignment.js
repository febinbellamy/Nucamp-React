class Student {
  constructor(name, email, community) {
    this.name = name;
    this.email = email;
    this.community = community;
  }
}

class Bootcamp {
  constructor(name, level, students = []) {
    this.name = name;
    this.level = level;
    this.students = students;
  }

  registerStudent(newStudent) {
    const duplicateStudentsFound = this.students.filter((student) => {
      return student.email === newStudent.email;
    });
    if (duplicateStudentsFound.length === 0) {
      this.students.push(newStudent);
      console.log(`${newStudent.email} is now registered`);
      return this.students;
    } else {
      console.log(`${newStudent.email} is already registered`);
      return this.students;
    }
  }
}

const student1 = new Student("Febin", "f@f.com", "React");
const student2 = new Student("Shahlo", "s@s.com", "Bootstrap");
const student3 = new Student("Jim", "fop@gmail.com", "NodeJS");

const bootcamp1 = new Bootcamp("Nucamp", "Hard", [student2]);

bootcamp1.registerStudent(student1);
bootcamp1.registerStudent(student3);
