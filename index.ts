import axios, { AxiosResponse } from 'axios';
console.log('Hello new World')
const variableString: string = 'Ricky Firmansyah'
const variableNumber: number = 23
const varBoolean: boolean = true
const varArray: [string, string] = ['Ricky', 'Firmansyah']
const varObjectNumber: object = { 'id': 2 }
const varObjectString: object = { 'name': "Ricky" }


const newUser: User = {
    id: 11,
    name: 'Ricky Firmansyah',
    email: 'admin@node.js',
    phone: '082281282646',
    website: 'miniapp.com',
};

function getUser(value: string) {
    return ('User Name: ' + value)
}

getUser("Ricky")


console.log('VariableString = ', variableString)
console.log('VariableNumber = ', variableNumber)
console.log('varBoolean = ', varBoolean)
console.log('Array = ', varArray)
console.log('varObjectNumber = ', varObjectNumber)
console.log('varObjectString = ', varObjectString)
console.log(getUser('Ricky'))


// Melakukan request ke JSONPlaceholder API
axios.get<Testing[]>('https://jsonplaceholder.typicode.com/posts/1')
    .then((response: AxiosResponse<Testing[]>) => {
        // Mengakses data dari response
        const posts = response.data;

        // Menampilkan hasil request
        console.log(posts);
    })
    .catch((error: AxiosResponse<Testing[]>) => {
        console.log(error);
    });

axios.get<User[]>('https://jsonplaceholder.typicode.com/users')
    .then((response: AxiosResponse<User[]>) => {
        // Mengakses data dari response
        const users = response.data;

        // Menampilkan hasil request
        console.log(users);
    })
    .catch((error: AxiosResponse<User[]>) => {
        console.log(error);
    });

axios.post('https://jsonplaceholder.typicode.com/users', newUser)
    .then((response: AxiosResponse) => {
        // Mengakses data dari response
        const createdUser = response.data;

        // Menampilkan hasil request
        console.log(createdUser);
    })
    .catch((error: AxiosResponse) => {
        console.log(error);
    });

axios.delete('https://jsonplaceholder.typicode.com/users/1')
    .then((response: AxiosResponse) => {
        console.log(response.status);
        if (response.status == 200) {
            console.log("User Barhasil DiHapus")
        } else {
            console.log("User Tiadk Barhasil DiHapus")
        }
    })
    .catch((error: AxiosResponse) => {
        console.log(error);

    });
