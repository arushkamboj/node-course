const mongoose = require('mongoose');
const validator = require('validator');

mongoose.connect('mongodb://127.0.0.1:27017/task-manager-api', {
    useNewUrlParser: true,
    useCreateIndex: true
});

const User = mongoose.model('User', {
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        validate(value) {
            if(!validator.isEmail(value)) {
                throw new Error('Email is invalid.');
            }
        }
    },
    age: {
        type: Number,
        validate(value) {
            if (value < 0) {
                throw new Error('Age must be a positive number.');
            }
        }
    }
});

const Task = mongoose.model('Task', {
    description: {
        type: String
    },
    completed: {
        type: Boolean
    }
});

// const task = new Tasks({
//     description: 'This is my first task',
//     completed: false
// });

// task.save().then(() => {
//     console.log(tasks);
// }).catch((error) => {
//     console.log('Error', error);
// });

const me = new User({
    name: 'Arush',
    email: 'arush@gamil.com',
    age: -1
});

me.save().then(() => {
    console.log(me);
}).catch((error) => {
    console.log('Error!', error);
});

