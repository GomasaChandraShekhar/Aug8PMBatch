import { NewEmployee } from './implementation';
import { Employee } from './07Objects';

const Chandra: Employee = new NewEmployee("Chandra", 100, "Hyderabad");
Chandra.display();
Chandra.help();
let status: string = Chandra.hello();
console.log(status);


