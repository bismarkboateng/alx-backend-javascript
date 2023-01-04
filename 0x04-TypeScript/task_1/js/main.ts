interface Teacher {
    readonly firstName: string;
    readonly lastName: string;
    fullTimeEmployee: boolean;
    yearsOfExperience: number;
    location: string;
    contract: boolean;
    [propName: string]: any;
}


interface Directors extends Teacher {
    numberOfReports: number;
}


function printTeacher(firstName: string, lastName: string): string {
    return `${firstName[0]}. ${lastName}`;
}


interface classInterface {
    firstName: string;
    lastName: string;
    workOnHomework(): string;
    displayName(): string;
}
  
  // constructor description interface
  interface classConstructor {
    new (firstName: string, lastName: string): classInterface;
}
  
  // Creating class and constructor through interfaces 
class StudentClass implements classInterface {
    firstName: string;
    lastName: string;
  
    constructor(firstName: string, lastName: string) {
      this.firstName = firstName;
      this.lastName = lastName;
    }
  
    workOnHomework(): string {
      return 'Currently working';
    }
  
    displayName(): string {
      return this.firstName;
    }
}
  
  // creating instance of StudentClass
  const studentClass: StudentClass = new StudentClass('sofia', 'cheung');
  console.log(studentClass.displayName());
  console.log(studentClass.workOnHomework());