class Student{
    constructor(public name: string, public age: number){}
}

class Teacher{
    constructor(public name: string, public subject: string){}
}

class Course{
    public students: Student[] = []
    constructor(public name:string, public teacher: Teacher) {}

    addStudent(student: Student){
        this.students.push(student);
    }
}
const teacher = new Teacher('Jhon Doe', 'Math');
const course = new Course('Algebra', teacher);
course.addStudent(new Student('Alice', 20));
course.addStudent(new Student('Bob', 22));

console.log(course)