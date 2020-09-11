const dbconnection = require('./keys');
const mongoose = require('mongoose');

// make a connection
mongoose.connect(dbconnection.mongoURI,{
    useUnifiedTopology:true,
    useNewUrlParser: true
});

// get reference to database
const db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));

db.once('open', function() {
    console.log("Connection Successful!");

    // define Schema
    const TestSchema = mongoose.Schema({
      name:{type:String,
            required:true},
      price:{type:String,
            required:true},
      quantity:{type:String,
                required:true}
    });

    // compile schema to model
    const Test = mongoose.model('Test', TestSchema, 'testcollection');

    // a document instance
    const book1 = new Test({ name: 'Introduction to Mongoose', price: 10, quantity: 25 });

    // save model to database
    book1.save(function (err, book) {
      if (err) return console.error(err);
      console.log(book.name + " saved to bookstore collection.");
    });

});
