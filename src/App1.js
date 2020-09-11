import React from 'react';
import axios from 'axios';
import ReactDOM from "react-dom";
import { useFormik } from "formik";
import "./styles.css";


const SignupForm = () => {
  const formik = useFormik({
    initialValues: {name: "",
                    room: "",
                    washHands:false,
                    washFace:false,
                    brushTeeth:false,
                    changeAttends:false,
                    emptyCatheterBag:false,
                    applyCompStockings:false,
                    putOnHearingAid:false,
                    putOnDeodorantLotion:false,
                    putOnCleanClothes:false,
                    brushHairGlassesMakeup:false,
                    makeBed:false,
                    ateBreakfastNone:false,
                    ateBreakfastQuarer:false,
                    ateBreakfastHalf:false,
                    ateBreakfastFull:false,
                    ateLunchNone:false,
                    ateLunchQuarter:false,
                    ateLunchHalf:false,
                    ateLunchFull:false,
                    glassesOfWater:"",
                    recActivity:false
                  },
    onSubmit: values => {
      alert(JSON.stringify(values, null, 2));
      const name = values.name;
      const room = values.room;
      const washHands = values.washHands;
      const washFace = values.washFace;
      const brushTeeth = values.brushTeeth;
      const changeAttends = values.changeAttends
      const emptyCatheterBag = values.emptyCatheterBag
      const applyCompStockings = values.applyCompStockings
      const putOnHearingAid = values.putOnHearingAid
      const putOnDeodorantLotion = values.putOnDeodorantLotion
      const putOnCleanClothes = values.putOnCleanClothes
      const brushHairGlassesMakeup = values.brushHairGlassesMakeup
      const makeBed = values.makeBed
      const ateBreakfastNone = values.ateBreakfastNone
      const ateBreakfastQuarer = values.ateBreakfastQuarer
      const ateBreakfastHalf = values.ateLunchHalf
      const ateBreakfastFull = values.ateBreakfastFull
      const ateLunchNone = values.ateLunchNone
      const ateLunchQuarter = values.ateLunchQuarter
      const ateLunchHalf = values.ateLunchHalf
      const ateLunchFull = values.ateLunchFull
      const glassesOfWater = values.glassesOfWater
      const recActivity = values.recActivity
      //axios.post("http://localhost:4001/api/notes", { values })
      axios({
          method: "POST",
          url: "http://localhost:4001/api/notes",
          data: values
        })
      //.then(res => {
      //  console.log(res); // this returns the callback from the post
      //  console.log(values);  // this returns all the values from form
      }
    })

    // now test sending name and email to a route created that will return the data to screen
    // this is a test to be able to see if we can post to database

  return (
    <form onSubmit={formik.handleSubmit}>
      <label htmlFor="name">Name</label>
      <input
        id="name"
        name="name"
        type="text"
        onChange={formik.handleChange}
        value={formik.values.name}
      />
      <label htmlFor="room">Room</label>
      <input
        id="room"
        name="room"
        type="text"
        onChange={formik.handleChange}
        value={formik.values.email}
      />
      <label>Wash hands before / after each meal</label>
      <input
        id="washHands"
        name="washHands"
        type="checkbox"
        onChange={formik.handleChange}
        value={formik.values.checked}
        />
        <label>Wash face / Clean eyes</label>
        <input
          id="washFace"
          name="washFace"
          type="checkbox"
          onChange={formik.handleChange}
          value={formik.values.checked}
         />
         <label>Brush teeth / Dentures</label>
         <input
            id="brushTeeth"
            name="brushTeeth"
            type="checkbox"
            onChange={formik.handleChange}
            value={formik.values.checked}
          />
           <label>Change Attends</label>
           <input
              id="changeAttends"
              name="changeAttends"
              type="checkbox"
              onChange={formik.handleChange}
              value={formik.values.checked}
           />
           <label>Empty catheter bag</label>
           <input
              id="emptyCatheterBag"
              name="emptyCatheterBag"
              type="checkbox"
              onChange={formik.handleChange}
              value={formik.values.checked}
           />
           <label>Apply compression stockings</label>
           <input
              id="applyCompStockings"
              name="applyCompStockings"
              type="checkbox"
              onChange={formik.handleChange}
              value={formik.values.checked}
           />
           <label>Put on hearing aid</label>
           <input
              id="putOnHearingAid"
              name="putOnHearingAid"
              type="checkbox"
              onChange={formik.handleChange}
              value={formik.values.checked}
           />
           <label>Put on deodorant / lotion</label>
           <input
              id="putOnDeodorantLotion"
              name="putOnDeodorantLotion"
              type="checkbox"
              onChange={formik.handleChange}
              value={formik.values.checked}
           />
           <label>Put on clean clothes</label>
           <input
              id="putOnCleanClothes"
              name="putOnCleanClothes"
              type="checkbox"
              onChange={formik.handleChange}
              value={formik.values.checked}
           />
           <label>Brush hair / put on glasses / makeup</label>
           <input
              id="brushHairGlassesMakeup"
              name="brushHairGlassesMakeup"
              type="checkbox"
              onChange={formik.handleChange}
              value={formik.values.checked}
           />
           <label>Make bed</label>
           <input
              id="makeBed"
              name="makeBed"
              type="checkbox"
              onChange={formik.handleChange}
              value={formik.values.checked}
           />
           <label>Ate breakfast - None</label>
           <input
              id="ateBreakfastNone"
              name="ateBreakfastNone"
              type="checkbox"
              onChange={formik.handleChange}
              value={formik.values.checked}
           />
           <label>Ate breakfast - Quarter</label>
           <input
              id="ateBreakfastQuarer"
              name="ateBreakfastQuarer"
              type="checkbox"
              onChange={formik.handleChange}
              value={formik.values.checked}
           />
           <label>Ate breakfast - Half</label>
           <input
              id="ateBreakfastHalf"
              name="ateBreakfastHalf"
              type="checkbox"
              onChange={formik.handleChange}
              value={formik.values.checked}
           />
           <label>Ate breakfast - Full</label>
           <input
              id="ateBreakfastFull"
              name="ateBreakfastFull"
              type="checkbox"
              onChange={formik.handleChange}
              value={formik.values.checked}
           />
           <label>Ate lunch - None</label>
           <input
              id="ateLunchNone"
              name="ateLunchNone"
              type="checkbox"
              onChange={formik.handleChange}
              value={formik.values.checked}
           />
           <label>Ate lunch - Quarter</label>
           <input
              id="ateLunchQuarter"
              name="ateLunchQuarter"
              type="checkbox"
              onChange={formik.handleChange}
              value={formik.values.checked}
           />
           <label>Ate lunch - Half</label>
           <input
              id="ateLunchHalf"
              name="ateLunchHalf"
              type="checkbox"
              onChange={formik.handleChange}
              value={formik.values.checked}
           />
           <label>Ate lunch - Full</label>
           <input
              id="ateLunchFull"
              name="ateLunchHalf"
              type="checkbox"
              onChange={formik.handleChange}
              value={formik.values.checked}
           />
           <label htmlFor="glassesOfWater">No. Glasses of Water Drank</label>
           <input
             id="glassesOfWater"
             name="glassesOfWater"
             type="number"
             onChange={formik.handleChange}
             value={formik.values.email}
           />
           <label>Rec Activity (Sing, Puzzles, Card, Exercise)</label>
           <input
              id="recActivity"
              name="recActivity"
              type="checkbox"
              onChange={formik.handleChange}
              value={formik.values.checked}
           />


        <div/>
      <button type="submit">Submit</button>
    </form>
  );
};

function App1() {
  return <SignupForm />;
}

export default App1;
