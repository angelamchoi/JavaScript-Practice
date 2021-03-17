//Class Heirarchy


//Person
class Person {
    constructor(firstName, lastName) {
      this.firstName = firstName;
      this.lastName = lastName;
    }
  sayHello() {
    console.log(`hello, I'm ${this.firstName} ${this.lastName}`);
    }
  }
  
  //Employee
  class Employee extends Person {
    constructor(firstName, lastName, company, wage) //added company and wage to the list
    {
    super(firstName, lastName);
    this.company = company;
    this.wage = wage;
    this.active = true;
  }
  
  recieveRaise(newWage) //updates wage
  {
    this.wage = newWage;
  }
  terminate(){
    this.active = false;
    }
  }
  //Manage
  
  class Manager extends Employee {
    constructor(firstName, lastName, company, wage, department) //added dept
    super (firstName, lastName, company, wage) //all the previous stuff
    this.department = department;
  }
  
  giveRaise(employee, newWage) //pass argument
    {
    employee.recieveRaise(newWage);
    console.log(`${employee.firstName}'s wage increased to ${newWage}`);
    }
  }
  
  //Worker
  
  class Worker extends Employee {
    constructor(firstName, lastName, company, wage, manager)
    super (firstName, lastName, company, wage) //don't need manager here because it's looking at info above
    this.manger = manager;
    this.OnBreak = false;
  }
  
  takeVacation(days) {
    this.OnBreak = true;
    console.log(`${this.firstName} is on break!`);
    setTimeout(() => {
      this.onBreak = false;
      console.log(`${this.firstName} is back from break`);
    }, mins * 1000 * 60);
    }
  }
  
  //Instances
  let person = new Person('Kim', 'Luna');
  console.log('Person:', person.sayHello());
  
  var employee = new Employee('Katie', 'Clark', 'PWC', '$50K/Yr');
  console.log('Employee:', employee);
  employee.receiveRaise('$100K/Yr');
  console.log('Employee post raise:', employee);
  employee.terminate();
  console.log('Employee quit:', employee);
  
  var manager = new Manager('Bill', 'Lumbergh', 'Initech', 'Too Much', 'Software');
  console.log('Manager:', manager);
  
  var worker = new Worker('Peter', 'Gibbons', 'Initech', 'Not Enough', manager);
  console.log('Worker:', worker);
  worker.takeBreak(0.5);
  
  manager.giveRaise(worker, 'Finally Enough!');
  console.log('Worker - got raise from boss:', worker);
  
  
  