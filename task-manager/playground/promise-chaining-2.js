require('../src/db/mongoose.js');
const Task = require('../src/models/task');

// Task.findByIdAndDelete('5dff02564345040e20066216').then((task) => {
//     console.log(task);
//     return Task.countDocuments({ completed: false });
// }).then((count) => {
//     console.log(count);
// }).catch((e) => {
//     console.log(e);
// })

const deleteTaskAndCount = async (id) => {
    const task = await Task.findByIdAndDelete(id);
    const count = await Task.countDocuments( {completed: false} );
    return count;
}

deleteTaskAndCount('5dff02564345040e20066216').then((count) => {
    console.log(count);
}).catch((e) => {
    console.log(e);
})