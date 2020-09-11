import React from "react";
import ReactDOM from "react-dom";
import { useFormik } from "formik";
import "./styles.css";
import mongoose from 'mongoose';



// make a connection
//mongoose.connect(dbconnection.mongoURI,{
//    useUnifiedTopology:true,
//    useNewUrlParser: true
//});

// get reference to database
//const db = mongoose.connection;

// define Schema
//const TestSchema = mongoose.Schema({
//  name: String,
//  email:String
//});

// compile schema to model
//const Test = mongoose.model('Test', TestSchema, 'testcollection');


const SignupForm = () => {
  const formik = useFormik({
    initialValues: {name: "",
                    email: ""},
    onSubmit: values => {
      //const test = new Test({ name: formik.values.name, email: formik.values.email});
      // save model to database
      //test.save(function (err, item) {
      //  if (err) return console.error(err);
      //  console.log(item.name + " saved");
      //});
      alert(JSON.stringify(values, null, 2));
    }
  });




  return (
    <form onSubmit={formik.handleSubmit}>
      <label htmlFor="name">Your Name, Asshole</label>
      <input
        id="name"
        name="name"
        type="text"
        onChange={formik.handleChange}
        value={formik.values.name}
      />
      <label htmlFor="email">Email Address</label>
      <input
        id="email"
        name="email"
        type="email"
        onChange={formik.handleChange}
        value={formik.values.email}
      />
      <button type="submit">Submit</button>
    </form>
  );
};

function App() {
  return <SignupForm />;
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
