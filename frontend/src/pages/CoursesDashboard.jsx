import React, { useEffect, useState, useRef } from "react";
import Table from "./Table";
import { useNavigate, Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  getTimetables,
  addCourse,
  copyCourse,
  selectAllTimetables,
  selectTimetableById,
} from "../features/timetables/timetableSlice";
import { useParams } from "react-router-dom";
import Dialog from "../components/Dialog";

function CoursesDashboard() {
  const params = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [dialog, setDialog] = useState({
    message: "",
    isLoading: false,
    nameTimetable: "",
  });

  const idTimetableRef = useRef();
  const idCourseRef = useRef();

  const handleDialog = (message, isLoading, nameTimetable) => {
    setDialog({
      message,
      isLoading,
      nameTimetable,
    });
  };

  let courses = [];
  const { user } = useSelector((state) => state.auth);

  const { isLoading, isError, message } = useSelector(selectAllTimetables);

  const timetable = useSelector((state) =>
    selectTimetableById(state, params.timetableId)
  );

  const handleDelete = (timetableId, courseId) => {
    handleDialog("Are you sure you want to delete this?", true, timetable);
    idTimetableRef.current = timetableId;
    idCourseRef.current = courseId;
  };

  const confirmDelete = (choose) => {
    if (choose) {
      handleDialog("", false);
      courses = timetable.courses.filter(
        (course) => course._id !== idCourseRef.current
      );
      dispatch(addCourse({ courses, id: idTimetableRef.current }));
    } else {
      handleDialog("", false);
    }
  };

  useEffect(() => {
    if (isError) {
      console.log(message);
    }

    if (!user) {
      navigate("/");
    }

    dispatch(getTimetables());
  }, [user, navigate, isError, message, dispatch]);

  const columns = React.useMemo(
    () => [
      {
        Header: "ID",
        accessor: "_id",
      },
      {
        Header: "CRN",
        accessor: "crn",
      },
      {
        Header: "Course Number",
        accessor: "course_number",
      },
      {
        Header: "Section",
        accessor: "section",
      },

      {
        Header: "",
        id: "viewRow",
        Cell: (row) => (
          <div className="text-sm text-gray-500 px-2 py-1 bg-gray-200 hover:bg-gray-300 text-center rounded-full">
            <Link
              to={`/timetable-dashboard/${timetable._id}/view-course/${row.row.original._id}`}
            >
              <span>View</span>
            </Link>
          </div>
        ),
      },
      {
        Header: "",
        id: "editRow",
        Cell: (row) => (
          <div className="text-sm text-gray-500 px-2 py-1 bg-gray-200 hover:bg-gray-300 text-center rounded-full">
            <Link
              to={`/timetable-dashboard/${timetable._id}/edit-course/${row.row.original._id}`}
            >
              <span>Edit</span>
            </Link>
          </div>
        ),
      },
      {
        Header: "",
        id: "deleteRow",
        Cell: (row) => (
          <div className="text-sm text-gray-500 px-2 py-1 bg-gray-200 hover:bg-gray-300 text-center rounded-full">
            <button
              onClick={() => handleDelete(timetable._id, row.row.original._id)}
            >
              Delete
            </button>
          </div>
        ),
      },
      {
        Header: "",
        id: "copyRow",
        Cell: (row) => (
          <div className="text-sm text-gray-500 px-2 py-1 bg-gray-200 hover:bg-gray-300 text-center rounded-full">
            <button
              onClick={() => {
                dispatch(
                  copyCourse({
                    id: timetable._id,
                    courseId: row.row.original._id,
                  })
                );
                navigate("/timetable-dashboard");
              }}
            >
              Copy
            </button>
          </div>
        ),
      },
    ],
    []
  );

  const data = React.useMemo(() => timetable.courses, [timetable]);

  if (isLoading) {
    return <h1>Loading..</h1>;
  }

  return (
    <section className="container mx-auto pt-20 bg-white">
      <div>
        <div className="text-primary font-medium text-sm  text-center inline-flex items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M10 19l-7-7m0 0l7-7m-7 7h18"
            />
          </svg>
          <div className="pl-2">
            <Link to="/timetable-dashboard">Back to Timetable Dashboard</Link>
          </div>
        </div>
      </div>
      <div className="px-4">
        <div className="flex justify-between items-center">
          <div className="font-extrabold">
            <h1 className="text-3xl md:text-4xl  font-heading mt-3 mb-4">
              Courses Dashboard
            </h1>
            <span className="text-lg text-primary">View or add courses</span>
          </div>
          <div>
            <Link
              to={`/timetable-dashboard/${timetable._id}/add-course`}
              className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-primary hover:bg-primary focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
            >
              <svg
                className="-ml-1 mr-2 h-5 w-5"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clipRule="evenodd"
                />
              </svg>
              <p>Add</p>
            </Link>
          </div>
        </div>
        <div className="px-4 mb-8 flex w-1/4 justify-between ">
          <div className="">
            <h3 className="mt-6 text-sm text-gray-500">Subject</h3>
            <p className="text-base font-semibold text-gray-900">
              {timetable.subject}
            </p>
          </div>
          <div className="">
            <h3 className="mt-6 text-sm text-gray-500">Term Code</h3>
            <p className="text-base font-semibold text-gray-900">
              {timetable.term_code}
            </p>
          </div>
        </div>
        <Table columns={columns} data={data} />
        {dialog.isLoading && (
          <Dialog
            nameTimetable={dialog.nameTimetable}
            message={dialog.message}
            onDialog={confirmDelete}
          />
        )}
      </div>
    </section>
  );
}

export default CoursesDashboard;
