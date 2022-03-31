import React from 'react'

const Submission = () => {
    return (
        <div>
        <h3> Submit your own workout here! </h3>
        <input type="text" id={'title'} name={'title'} placeholder={'Title'} />
        <input type="text-area" id={'description'} name={'description'} placeholder={'Description'} />
        <input type="text" id={'time-frame'} name={'time-frame'} placeholder={'Time frame'} />
        <input type="text" id={'url'} name={'url'} placeholder={'Website link'}/>
        <input type="text" id={'name'} name={'name'} placeholder={'Full Name'}/>
        <button>Submit</button>
        </div>
    )
}

export default Submission