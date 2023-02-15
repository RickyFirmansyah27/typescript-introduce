"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = __importDefault(require("axios"));
console.log('Hello new World');
const variableString = 'Ricky Firmansyah';
const variableNumber = 23;
const varBoolean = true;
const varArray = ['Ricky', 'Firmansyah'];
const varObjectNumber = { 'id': 2 };
const varObjectString = { 'name': "Ricky" };
const newUser = {
    id: 11,
    name: 'Ricky Firmansyah',
    email: 'admin@node.js',
    phone: '082281282646',
    website: 'miniapp.com',
};
function getUser(value) {
    return ('User Name: ' + value);
}
getUser("Ricky");
console.log('VariableString = ', variableString);
console.log('VariableNumber = ', variableNumber);
console.log('varBoolean = ', varBoolean);
console.log('Array = ', varArray);
console.log('varObjectNumber = ', varObjectNumber);
console.log('varObjectString = ', varObjectString);
console.log(getUser('Ricky'));
// Melakukan request ke JSONPlaceholder API
axios_1.default.get('https://jsonplaceholder.typicode.com/posts/1')
    .then((response) => {
    // Mengakses data dari response
    const posts = response.data;
    // Menampilkan hasil request
    console.log(posts);
})
    .catch((error) => {
    console.log(error);
});
axios_1.default.get('https://jsonplaceholder.typicode.com/users')
    .then((response) => {
    // Mengakses data dari response
    const users = response.data;
    // Menampilkan hasil request
    console.log(users);
})
    .catch((error) => {
    console.log(error);
});
axios_1.default.post('https://jsonplaceholder.typicode.com/users', newUser)
    .then((response) => {
    // Mengakses data dari response
    const createdUser = response.data;
    // Menampilkan hasil request
    console.log(createdUser);
})
    .catch((error) => {
    console.log(error);
});
axios_1.default.delete('https://jsonplaceholder.typicode.com/users/1')
    .then((response) => {
    console.log(response.status);
    if (response.status == 200) {
        console.log("User Barhasil DiHapus");
    }
    else {
        console.log("User Tiadk Barhasil DiHapus");
    }
})
    .catch((error) => {
    console.log(error);
});
