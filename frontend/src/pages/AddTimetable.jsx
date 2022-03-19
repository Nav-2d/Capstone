import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';


function AddTimetable() {
  const [formData, setFormData] = useState({
    subject: '',
    termcode: '',
  });

  const { subject, termcode } = formData;

  const navigate = useNavigate();
  
  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const onSubmit = (e) => {
    e.preventDefault();

    const userData = {
      subject,
      termcode,
    };

    //add to the DB
  };

  
  return (
    <>
      <section className='heading'>
        <p>Add Timetable</p>
      </section>

      <section className='form'>
        <form onSubmit={onSubmit}>
          <div className='form-group'>
            <input
              type='text'
              className='form-control'
              id='subject'
              name='subject'
              value={subject}
              placeholder='Enter a subject'
              onChange={onChange}
            />
          </div>
          <div className='form-group'>
            <input
              type='number'
              className='form-control'
              id='termcode'
              name='termcode'
              value={termcode}
              placeholder='Enter a term code'
              onChange={onChange}
            />
          </div>

          <div className='form-group'>
            <button type='submit' className='btn btn-block'>
              Submit
            </button>
          </div>
        </form>
      </section>
    </>
  );
}

export default AddTimetable;
