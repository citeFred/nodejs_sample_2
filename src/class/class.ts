// Class 이용
class Robot { // Members
    // Property 또는 Field(속성, 필드)
    name: string;
    model: string;
    status: string = "Active";

    // Constructor(생성자)
    constructor(name: string, model: string) {
        this.name = name;
        this.model = model;
    };

    // Method(행동)
    performTask(task: string) {
        console.log(`${this.name} is performing ${task}.`);
    };

    updateStatus(newStatus: string) {
        this.status = newStatus;
        console.log(`${this.name}'s status is ${this.status}`);
    };
}

// Create Instance of the Robot class;
let r1 = new Robot("R2-aD1", "Optimus");
let r2 = new Robot("R5-AA3", "Bumble");
let r3 = new Robot("Ad-aD1", "Rotus");

// Accessing fields and Calling methods
console.log(r1.name);
console.log(r2.model);
console.log(r3.status);

r1.performTask("Charging");
r2.performTask("Explorering");
r3.updateStatus("On Repair");