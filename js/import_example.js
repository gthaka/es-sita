import { exportData,exportData2 } from './export_example.js';

let updatedData = exportData
let data2 = exportData2
updatedData.push(45);
data2.values = {name:'Grogu',type:'Baby Yoda'};
console.log(updatedData);
console.log(data2);