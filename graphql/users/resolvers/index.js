const { v4: uuidv4 } = require('uuid');

var data = {
    "9c9373b5-d839-4aa9-a8ce-a4cf083c0b3b": {
        id: "9c9373b5-d839-4aa9-a8ce-a4cf083c0b3b",
        name: "Amiah Pruitt",
        email: "amiahpruitt@gmail.com",
        company: {
            id: "dfef5d80-5f83-484e-bb9b-265eb5917ecd",
            name: "Bosco and Sons",
            country: "United States",
            state: "Texas",
            city: "Houston"
        },
        role: "Ux Designer",
    },
    "8118bafd-af6a-42db-a5f6-fb85c73e1026": {
        id: "8118bafd-af6a-42db-a5f6-fb85c73e1026",
        name: "Angelique Morse",
        email: "angeliquemorse@gmail.com",
        company: {
            id: "9eebd8ed-d4cf-47a7-a5a9-5126a95bccf4",
            name: "Kihn, Marquardt and Crist",
            country: "United States",
            state: "Los Angeles",
            city: "California"
        },
        role: "Backend Developer"
    },
    "eb43305c-9b21-402e-a9e6-71541fde59c1": {
        id: "eb43305c-9b21-402e-a9e6-71541fde59c1",
        name: "Ariana Lang",
        email: "arianalang@gmail.com",
        company: {
            id: "5b4be2c3-3e7f-427e-aeef-8511cd9912b9",
            name: "Feest Group",
            country: "Canada",
            state: "Quebec",
            city: "Montreal"
        },
        role: "Frontend Developer"
    },
    "6b998e7e-8e52-4f3f-843f-64922871c35b": {
        id: "6b998e7e-8e52-4f3f-843f-64922871c35b",
        name: "Brycen Jimenez",
        email: "brycenjimenez@gmail.com",
        company: {
            id: "5b4be2c3-3e7f-427e-aeef-8511cd9912b9",
            name: "Feest Group",
            country: "Canada",
            state: "Quebec",
            city: "Montreal"
        },
        role: "Backend Developer"
    }
}

const resolvers = {
    Query: {
        users() {
            return Object.keys(data).map(key => data[key]);
        },
        user(root, args) {
            const { id } = args;
            return data[id];
        }
    },
    Mutation: {
        createUser(root, args) {
            const { name, email, company, role } = args;

            const user = data[id];

            if (user) {
                throw new Error('Email is already taken.');
            }
            const id = uuidv4();
            const newUser = {
                id,
                name,
                email,
                company,
                role
            };
            data[id] = newUser;
            return newUser;
        },
        updateUser(root, args) {
            const { id, input } = args;
            const { name, email, company, role } = input;
            const body = {};

            if (name)
                body["name"] = name;
            if (email)
                body["email"] = email;
            if (company)
                body["company"] = company;
            if (role)
                body["role"] = role;

            data[id] = {
                ...data[id],
                ...body
            };
            return data[id];
        },
        deleteUser(root, args) {
            const { id } = args;
            delete data[id];
            return true;
        }
    }
}

module.exports = {
    resolvers
}