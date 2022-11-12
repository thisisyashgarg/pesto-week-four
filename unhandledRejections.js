Promise.reject(10)
.then((x) => {
    console.log(x);
    return 20;
})
.then((x) => console.log(x))


process.on('unhandledRejection', (error, promise) => {
    console.log(error, promise);
});
