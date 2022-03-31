import React from 'react'

const Submission = (props) => {
    const handleSubmit = (e) => {
      props.addNewWorkout(e);
    };
    const newWorkout = props.newWorkout;
  
    return (
      <div>
        <h1> Submit your own workout here!</h1>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={newWorkout.title}
            onChange={props.handleChange}
            name={"title"}
            placeholder={"Workout title"}
          />
          <input
            type="text"
            value={newWorkout.name}
            onChange={props.handleChange}
            name={"name"}
            placeholder={"Full name"}
          />
          <input
            type="text-area"
            value={newWorkout.description}
            onChange={props.handleChange}
            name={"description"}
            placeholder={"Workout description"}
          />
          <input
            type="text"
            value={newWorkout.time_frame}
            onChange={props.handleChange}
            name={"time_frame"}
            placeholder={"Time frame"}
          />
          <input
            type="text"
            value={newWorkout.url}
            onChange={props.handleChange}
            name={"url"}
            placeholder={"Url"}
          />
          <button>Submit</button>
        </form>
      </div>
    );
  };

export default Submission