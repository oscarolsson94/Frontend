import { v4 as uuidv4 } from 'uuid';

let users = [ //array to demonstrate DB
    {
    firstName: "John",
    lastName: "Doe",
    age: 25
    },
    {
    firstName: "Jane",
    lastName: "Doe",
    age: 24
    }
]

export const getUsers = (req, res) => { // get returns data to the user
    res.send(users); // returns the array of users when someone visits the page/users
};

export const createUser = (req, res) => { //post cannot be tested through the browser, browser can only send get-requests
    
    const user = req.body; //store the incoming value in the "user"-variable
    
    //add a random ID to be able to grab single users later
    //copy everything from user and add the attribute id    
    users.push({ ...user, id: uuidv4() }); //add it to the array/database
    
    res.send(`User with the name ${user.firstName} added to the database!`); //sends response to the person sending the post request
};

//A way to get unique IDs: uuid from npm "npm install uuid"
// import { v4 as uuidv4 } from 'uuid'; Call it with uuidv4(); - returns a unique string
export const getOneUser = (req, res) => { // : means the path will hit if user adds anything after /users
    const { id } = req.params; //using destruction and grabing the users input (whatever is entered afer /users'123123')
    const foundUser = users.find((user) => user.id === id);
    res.send(foundUser);
};

export const deleteUser = (req, res) => {
    const { id } = req.params; //using destruction and grabing the users input (whatever is entered afer /users'123123')
    users = users.filter((user) => user.id !== id); //filter keeps all values for which the expression is true, in this case it removes the object in which the specified id is

    res.send(`User with the id ${id} deleted from the database`);
};

export const modifyUser = (req, res) => {
    const { id } = req.params; //using destruction and grabing the users input (whatever is entered afer /users'123123')
    const { firstName, lastName, age } = req.body;

    const user = users.find((user) => user.id === id); //.find method returns the first user with the matching id

    if (firstName) { //depending of what is in the request body, change the values of the object
        user.firstName = firstName;
    }

    if (lastName) {
        user.lastName = lastName;
    }

    if (age) {
        user.age = age;
    }

    res.send(`User with the id ${id} has been updated`);

};