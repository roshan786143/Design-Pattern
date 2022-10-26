class Student{
    static count = 0;
    constructor(name,age,phoneNumber,boardMarks){
      this.name = name;
      this.age = age;
      this.phoneNumber = phoneNumber;
      this.boardMarks = boardMarks;
      Student.counting();
    //   this.count = count;
    //   count ++;
    }
    marks() {
      if(this.boardMarks > 40){
        console.log("you're eligible");
      }else{
        console.log("sorry,you're not eligible.");
      }
    }
  eligibleAge(minAge){
    return (minMarks) => {
      if(this.marks > minMarks && this.age > minAge){
        console.log(this.name + " is ready for placements")
      }
      else{
      console.log(this.name + " is not ready for placements.")
    }
  }
  }
    static counting(){
      return "The total no.of students are "+Student.count++;
    }
  }
  
  let ram = new Student("Ram",24,9848012345,45);
  let rashmika = new Student("Rashmika",25,9845845854,50);
  let rakul = new Student("Rakul",28,9546248562,60);
  let sunny = new Student("Sunny leone",45,954681264,30);
  let alexandra = new Student("alexandra",30,987652466,36);
  
  ram.marks();
  sunny.marks();
  ram.eligibleAge(25)(60);
  console.log(Student.counting());