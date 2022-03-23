const { v4: uuidv4 } = require('uuid');

var users = [
    {
        id: "9c9373b5-d839-4aa9-a8ce-a4cf083c0b3b",
        name: "Amiah Pruitt",
        email: "amiahpruitt@gmail.com",
        company: "Bosco and Sons",
        role: "Ux Designer",
    },
    {
        id: "8118bafd-af6a-42db-a5f6-fb85c73e1026",
        name: "Angelique Morse",
        email: "angeliquemorse@gmail.com",
        company: "Kihn, Marquardt and Crist",
        role: "Backend Developer"
    },
    {
        id: "eb43305c-9b21-402e-a9e6-71541fde59c1",
        name: "Ariana Lang",
        email: "arianalang@gmail.com",
        company: "Feest Group",
        role: "Frontend Developer"
    },
    {
        id: "6b998e7e-8e52-4f3f-843f-64922871c35b",
        name: "Brycen Jimenez",
        email: "brycenjimenez@gmail.com",
        company: "Rempel, Hand and Herzog",
        role: "Backend Developer"
    }
]

const resolvers = {
    Query: {
        create(root, args) {
            const { name, email, company, role } = args;

            const user = users.filter(user => user.email === email)[0];

            if (user) {
                throw new Error('Email is already taken.')
            }
            const newUser = {
                id: uuidv4(),
                name,
                email,
                company,
                role
            }
            users.push(newUser);
            return newUser;
        },
        find() {
            return users;
        },
        findOne(root, args) {
            const { id } = args;
            const user = users.filter(user => user.id === id)[0];
            return user;
        }
    }
}

module.exports = {
    resolvers
}