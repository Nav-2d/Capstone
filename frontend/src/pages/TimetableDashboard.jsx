// import { useEffect } from 'react';
// import { useNavigate, Link } from 'react-router-dom';
// import { useSelector, useDispatch } from 'react-redux';
// import moment from 'moment';
// import { reset, getTimetables } from '../features/timetables/timetableSlice';

// function TimetableDashboard() {
//   const navigate = useNavigate();
//   const dispatch = useDispatch();
//   const { user } = useSelector((state) => state.auth);
//   const { timetables, isLoading, isError, message } = useSelector(
//     (state) => state.timetables
//   );

//   const edit = () => {
//     console.log('edit');
//   };

//   const view = () => {
//     navigate('/courses');
//   };

//   const addTimetable = () => {
//     navigate('/addtimetable');
//   };

//   const deleteTimetable = () => {
//     console.log('delete');
//   };

//   const copy = () => {
//     console.log('copy');
//   };
//   const exportCSV = () => {
//     console.log('export');
//   };
//   useEffect(() => {
//     if (isError) {
//       console.log(message);
//     }

//     if (!user) {
//       navigate('/');
//     }
//     dispatch(getTimetables());

//     return () => {
//       dispatch(reset());
//     };
//   }, [user, navigate, isError, message, dispatch]);

//   if (isLoading) {
//     return <h1>Loading..</h1>;
//   }

//   return (
//     <section className='container mx-auto pt-20'>
//       <div className='px-4'>
//         <div className='flex justify-between items-center'>
//           <div className='font-extrabold'>
//             <h1 className='text-3xl md:text-4xl  font-heading mt-3 mb-4'>
//               Timetable Dashboard
//             </h1>
//             <span className='text-lg text-primary'>View or add timetables</span>
//           </div>
//           <div>
//             <Link
//               to='/add-timetable'
//               className='inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-primary hover:bg-primary focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary'
//             >
//               <svg
//                 className='-ml-1 mr-2 h-5 w-5'
//                 xmlns='http://www.w3.org/2000/svg'
//                 viewBox='0 0 20 20'
//                 fill='currentColor'
//                 aria-hidden='true'
//               >
//                 <path
//                   fillRule='evenodd'
//                   d='M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z'
//                   clipRule='evenodd'
//                 />
//               </svg>
//               <p>Add</p>
//             </Link>
//           </div>
//         </div>
//         <div className='max-w-lg pt-10'>
//           <div className='flex flex-wrap -mx-2 justify-center'>
//             <div className='flex-grow w-full md:w-auto px-2 mb-2'>
//               <input
//                 className='inline-block w-full p-4 text-lg font-bold placeholder-gray-500 shadow border-2 border-primary rounded outline-none'
//                 type='email'
//                 placeholder='Search for timetables'
//               />
//             </div>
//             <div className='w-full md:w-auto px-2 mb-2'>
//               <a
//                 className='inline-flex items-center justify-center w-full md:w-auto h-full py-4 px-5 text-center leading-6 text-lg text-white font-extrabold bg-primary hover:bg-primary border-3 border-primary rounded transition duration-200'
//                 href='/'
//               >
//                 Search
//               </a>
//             </div>
//           </div>
//         </div>
//       </div>
//       <div className='relative rounded-xl overflow-auto pt-10'>
//         <div className='shadow-sm overflow-hidden my-8'>
//           <table className='border-collapse table-auto w-full text-sm'>
//             <thead className='bg-white py-12'>
//               <tr>
//                 <th className='border-b font-medium p-4 pl-8 pt-0 pb-3 text-primary  text-left'>
//                   Subject
//                 </th>
//                 <th className='border-b font-medium p-4 pt-0 pb-3 text-primary text-left'>
//                   Term Code
//                 </th>
//                 <th className='border-b font-medium p-4 pr-8 pt-0 pb-3 text-primary text-left'>
//                   Created On
//                 </th>
//                 <th className='border-b font-medium p-4 pl-8 pt-0 pb-3 text-primary  text-left' />
//                 <th className='border-b font-medium p-4 pl-8 pt-0 pb-3 text-primary  text-left' />
//                 <th className='border-b font-medium p-4 pl-8 pt-0 pb-3 text-primary  text-left' />
//                 <th className='border-b font-medium p-4 pl-8 pt-0 pb-3 text-primary  text-left' />
//                 <th className='border-b font-medium p-4 pl-8 pt-0 pb-3 text-primary  text-left' />
//               </tr>
//             </thead>
//             <tbody className='bg-white'>
//               {timetables.map((timetable, key) => {
//                 return (
//                   <tr key={key}>
//                     <td className='border-b border-slate-100  p-4 pl-8 text-black '>
//                       {timetable.subject}
//                     </td>
//                     <td className='border-b border-slate-100  p-4 text-black '>
//                       {timetable.term_code}
//                     </td>
//                     <td className='border-b border-slate-100  p-4 pr-8 text-black'>
//                       {moment(timetable.createdAt).format('DD-MMM-YYYY')}
//                     </td>
//                     <td className='border-b border-slate-100  p-4 pl-8 text-black'>
//                       <Link to='/courses'>
//                         <span>Edit</span>
//                       </Link>
//                     </td>
//                     <td className='border-b border-slate-100  p-4 pl-8 text-black'>
//                       <Link to='/courses'>
//                         <span>View</span>
//                       </Link>
//                     </td>
//                     <td className='border-b border-slate-100  p-4 pl-8 text-black'>
//                       <Link to='/courses'>
//                         <span>Delete</span>
//                       </Link>
//                     </td>
//                     <td className='border-b border-slate-100  p-4 pl-8 text-black'>
//                       <Link to='/courses'>
//                         <span>Copy</span>
//                       </Link>
//                     </td>
//                     <td className='border-b border-slate-100  p-4 pl-8 text-black'>
//                       <Link to='/courses'>
//                         <span>Export CSV</span>
//                       </Link>
//                     </td>
//                   </tr>
//                 );
//               })}
//             </tbody>
//           </table>
//         </div>
//       </div>
//     </section>
//   );
// }

// export default TimetableDashboard;
import Table from './Table';
import React, { useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import moment from 'moment';
import { reset, getTimetables } from '../features/timetables/timetableSlice';

function TimetableDashboard() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);
  const { timetables, isLoading, isError, message } = useSelector(
    (state) => state.timetables
  );

  useEffect(() => {
    if (isError) {
      console.log(message);
    }

    if (!user) {
      navigate('/');
    }
    dispatch(getTimetables());

    return () => {
      dispatch(reset());
    };
  }, [user, navigate, isError, message, dispatch]);

  const columns = React.useMemo(
    () => [
      {
        Header: 'Subject',
        accessor: 'subject',
      },
      {
        Header: 'Term Code',
        accessor: 'term_code',
      },
      {
        Header: 'Created At',
        accessor: (d) => {
          return moment(d.createdAt).format('DD-MMM-YYYY');
        },
      },
      {
        Header: '',
        id: 'test',
        Cell: (row) => (
          <div className='text-sm text-gray-500 px-2 py-1 bg-gray-200 hover:bg-gray-300 text-center rounded-full'>
            <Link to='/courses'>
              <span>Edit</span>
            </Link>
          </div>
        ),
      },
      {
        Header: '',
        id: 'viewRow',
        Cell: (row) => (
          <div className='text-sm text-gray-500 px-2 py-1 bg-gray-200 hover:bg-gray-300 text-center rounded-full'>
            <Link to='/courses'>
              <span>View</span>
            </Link>
          </div>
        ),
      },
      {
        Header: '',
        id: 'deleteRow',
        Cell: (row) => (
          <div className='text-sm text-gray-500 px-2 py-1 bg-gray-200 hover:bg-gray-300 text-center rounded-full'>
            <Link to='/courses'>
              <span>Delete</span>
            </Link>
          </div>
        ),
      },
      {
        Header: '',
        id: 'copyRow',
        Cell: (row) => (
          <div className='text-sm text-gray-500 px-2 py-1 bg-gray-200 hover:bg-gray-300 text-center rounded-full'>
            <Link to='/courses'>
              <span>Copy</span>
            </Link>
          </div>
        ),
      },
    ],
    []
  );

  const data = React.useMemo(() => timetables, [timetables]);

  if (isLoading) {
    return <h1>Loading..</h1>;
  }

  return (
    <section className='pt-20 bg-gray-100'>
      <div className='container mx-auto'>
        <div className='flex justify-between items-center'>
          <div className='font-extrabold'>
            <h1 className='text-3xl md:text-4xl  font-heading mt-3 mb-4'>
              Timetable Dashboard
            </h1>
            <span className='text-lg text-primary'>View or add timetables</span>
          </div>
          <div>
            <Link
              to='/add-timetable'
              className='inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-primary hover:bg-primary focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary'
            >
              <svg
                className='-ml-1 mr-2 h-5 w-5'
                xmlns='http://www.w3.org/2000/svg'
                viewBox='0 0 20 20'
                fill='currentColor'
                aria-hidden='true'
              >
                <path
                  fillRule='evenodd'
                  d='M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z'
                  clipRule='evenodd'
                />
              </svg>
              <p>Add</p>
            </Link>
          </div>
        </div>
        <div className='min-h-screen'>
          <div className='max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-4'>
            <div className='mt-10'>
              <Table columns={columns} data={data} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default TimetableDashboard;
