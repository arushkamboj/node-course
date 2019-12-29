const doWork = async () => {
    return "arush";
}

doWork().then((result) => {
    console.log(result);
}).catch((e) => {
    console.log(e);
});