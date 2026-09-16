const app= require('./app');
const{port}= process.env;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
