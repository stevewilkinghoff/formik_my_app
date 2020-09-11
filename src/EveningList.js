import React from 'react';
import axios from 'axios';
import { useFormik } from "formik";
import "./styles.css";


const SignupForm = () => {
  const formik = useFormik({
    initialValues: {name: "",
                    room: "",
                    washHands:false,
                    brushTeeth:false,
                    removeGlasses:false,
                    changeAttends:false,
                    emptyCatheterBag:false,
                    removeCompStockings:false,
                    removeHearingAidAndLockInMedDrawer:false,
                    washFacePericarePJs:false,
                    ateDinner:"",
                    glassesOfWater:"",
                    recActivity:false
                  },
    onSubmit: values => {
      alert(JSON.stringify(values, null, 2));
      const name = values.name;
      const room = values.room;
      const washHands = values.washHands;
      const brushTeeth = values.brushTeeth;
      const removeGlasses = values.removeGlasses
      const changeAttends = values.changeAttends
      const emptyCatheterBag = values.emptyCatheterBag
      const removeCompStockings = values.removeCompStockings
      const removeHearingAidLockInDrawer = values.removeHearingAidAndLockInMedDrawer
      const washFacePericarePJs = values.washFacePericarePJs
      const ateDinner = values.ateDinner
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
    <>
    <h3>Daily Care Checklist - Evening</h3>
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
        <label>Brush teeth and Soak Dentures</label>
         <input
            id="brushTeeth"
            name="brushTeeth"
            type="checkbox"
            onChange={formik.handleChange}
            value={formik.values.checked}
          />
          <label>Remove glasses</label>
          <input
            id="removeGlasses"
            name="removeGlasses"
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
           
           **************
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
           <label>Ate breakfast</label>
           <select
            name="ateBreakfast"
            onChange={formik.handleChange}
            style={{ display: 'block' }}
            >
            <option value="" label="Select" />
            <option value="none" label="None" />
            <option value="quarter" label="Quarter" />
            <option value="half" label="Half" />
            <option value="full" label="Full" />
            </select>
           
            <label>Ate lunch</label>
            <select
            name="ateLunch"
            onChange={formik.handleChange}
            style={{ display: 'block' }}
            >
            <option value="" label="Select" />
            <option value="none" label="None" />
            <option value="quarter" label="Quarter" />
            <option value="half" label="Half" />
            <option value="full" label="Full" />
            </select>
            
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
    </>
  );
};

function MorningCareList() {
  return <SignupForm />;
}

export default MorningCareList;
