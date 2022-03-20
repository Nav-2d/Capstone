import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';


function AddCourse() {
  const [formData, setFormData] = useState({
    //all params
  });

  //const { parms } = formData;

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
      //params
    };

    //add to the DB and if succesfully saved navigate to the timetable dashboard
    navigate('/courses');
  };

  
  return (
    <>
      <section className='heading'>
        <p>Add Course</p>
		<p>Section and Term</p>
      </section>

      <section className='form'>
        <form onSubmit={onSubmit}>
  

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

export default AddCourse;
