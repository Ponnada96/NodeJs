const employee1 = { name: "emp1", id: "1" };
const employee2 = { name: "emp2", id: "2" };
const employee3 = { name: "emp3", id: "3" };

const employeeTasks = new Map();
employeeTasks.set(employee1, 100);
employeeTasks.set(employee2, 200);
employeeTasks.set(employee3, 300);


function getTasks(employee) {
    return employeeTasks.get(employee);
}

function addTasks(employee, task) {
    const tasks =  employeeTasks.get(employee);
    console.log(tasks)
    let updated =tasks+task;
     employeeTasks.set(employee,updated)
};

console.log(getTasks(employee1));

addTasks(employee1,500);

console.log(getTasks(employee1));

employeeTasks.forEach((tasks, employee)=>{
    console.log(`${employee.name}`,tasks);
})