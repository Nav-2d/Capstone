import React from "react";
import Paper from "@material-ui/core/Paper";
import Tab from "@material-ui/core/Tab";
import Tabs from "@material-ui/core/Tabs";
  
/* This page was meant to display the contents of the "ViewCourses" page as tabs, 
however I could not get them to show up on this page, thus created "ViewCourses" as a replacement.
Articles such as https://www.digitalocean.com/community/tutorials/react-tabs-component used as a reference */

const TabsTesting = () => {
  const [value, setValue] = React.useState(2);
  
  return (
    <div
      style={{
        marginLeft: "40%",
      }}
    >
      <h2>How to Create Tabs in ReactJS?</h2>
      <Paper square>
        <Tabs
          value={value}
          textColor="primary"
          indicatorColor="primary"
          onChange={(event, newValue) => {
            setValue(newValue);
          }}
        >
          <Tab label="Course Details" />
          <Tab label="Meeting Schedule" />
          <Tab label="Instructor Details"/>
          <Tab label="Misc" />
        </Tabs>
        <h3>TAB NO: {value} Clicked?</h3>
        /*
        */
      </Paper>
    </div>
  );
};
  
export default TabsTesting;