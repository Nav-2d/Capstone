import { useState, useEffect } from 'react';
import loginImage from '../assets/login.svg';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { login, reset } from '../features/auth/authSlice';

function SignUp() {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const { email, password } = formData;

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { user, isLoading, isError, isSuccess, message } = useSelector(
    (state) => state.auth
  );

  useEffect(() => {
    if (isError) {
      toast.error(message);
    }

    if (isSuccess || user) {
      navigate('/timetable-dashboard');
    }

    dispatch(reset());
  }, [user, isError, isSuccess, message, navigate, dispatch]);

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const onSubmit = (e) => {
    e.preventDefault();

    const userData = {
      email,
      password,
    };

    dispatch(login(userData));
  };

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  return (
    <div className='flex flex-wrap h-screen justify-center items-center'>
      <div className='w-full md:w-3/5 lg:w-1/2 md:min-h-full flex items-center justify-center'>
        <div className='max-w-sm w-full mx-auto'>
          <div className='mb-6 text-center'>
            <h3 className='mb-4 text-2xl md:text-3xl font-bold'>
              Sign up new user
            </h3>
          </div>
          <form onSubmit={onSubmit}>
            <div className='mb-6'>
              <label htmlFor='email' className='block mb-2 font-medium'>
                Email address
              </label>
              <input
                type='email'
                name='email'
                id='email'
                required
                onChange={onChange}
                placeholder="Enter department chair's email address"
                className='appearance-none block w-full px-3 py-2 mb-4 focus:outline-none focus:ring-primary focus:border-primary border border-gray-300 rounded-md placeholder-gray-500'
              />
            </div>
            <div className='mb-6'>
              <label htmlFor='password' className='block mb-2 font-medium'>
                Password
              </label>
              <input
                type='password'
                name='password'
                id='password'
                required
                onChange={onChange}
                placeholder='Enter password for the department chair'
                className='appearance-none block w-full px-3 py-2 focus:outline-none focus:ring-primary focus:border-primary border border-gray-300 rounded-md placeholder-gray-500'
              />
            </div>
            <div className='mb-6'>
              <label
                htmlFor='confirmPassword'
                className='block mb-2 font-medium'
              >
                Password
              </label>
              <input
                type='confirmPassword'
                name='confirmPassword'
                id='confirmPassword'
                required
                onChange={onChange}
                placeholder='Enter password for the department chair again'
                className='appearance-none block w-full px-3 py-2 focus:outline-none focus:ring-primary focus:border-primary border border-gray-300 rounded-md placeholder-gray-500'
              />
            </div>
            <button
              type='submit'
              className='group relative w-full flex justify-center py-2 px-4 border border-transparent text-md font-medium rounded-md text-white bg-primary hover:bg-primary focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary'
            >
              Sign Up
            </button>
          </form>
        </div>
      </div>
      <div className='md:w-2/5 lg:w-1/2 md:shadow-2xl md:min-h-full flex items-center justify-center'>
        <img className='w-3/4' src={loginImage} alt='' />
      </div>
    </div>
  );
}

export default SignUp;
