import React from "react";
import '../styles/Create.css';


const Create = () => {
  return (
    <div className="Create">
      <h2>Create your event </h2>
      <div className="event-form">
        <form>
          <label>
            <input type="text" name="event" />
          </label>
          <label>
            <input type="text" name="host" />
          </label>
          <label>
            <input type="date" name="startDate" />
          </label>
          <label>
            <input type="date" name="endDate" />
          </label>
          <label>
            <input type="text" name="Location" />
          </label>
          <label>
            <input type="image" name="photo" alt="Event" />
          </label>
          <label>
            <input type="submit" value="Submit" />
          </label>
        </form>
      </div>
    </div>
  )
}

export default Create;