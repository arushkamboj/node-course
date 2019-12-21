//CRUD - create read update delete

const { MongoClient, ObjectID } = require('mongodb');

const connectionURL = 'mongodb://127.0.0.1:27017';
const databaseName = 'task-manager';

MongoClient.connect(connectionURL, { useNewUrlParser: true, useUnifiedTopology: true }, (error, client) => {
    if (error) {
        return console.log('Unable to connect to the database');
    }

    const db = client.db(databaseName); //returns the reference to the database 

    // db.collection('tasks').insertMany([
    //     {
    //         description: 'this is tasks 1',
    //         completed: false
    //     },
    //     {
    //         description: 'this is tasks 2',
    //         completed: true
    //     },
    //     {
    //         description: 'this is tasks 3',
    //         completed: true
    //     }
    // ], (error, result) => {
    //     if (error) {
    //         return console.log('There was an error connecting to the database');
    //     }

    //     console.log(result.ops);
    // });

    db.collection('tasks').updateMany([]);
});