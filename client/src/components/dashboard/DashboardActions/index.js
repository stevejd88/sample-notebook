import React from "react";
import { Link } from "react-router-dom";

import "./dashactions.scss";

const DashboardActions = () => {
  return (
    <div className='dash-buttons'>
      <Link to='/roles' className='btn btn-light dash-btn'>
        <i className='fas fa-people-carry'></i>
        <span className='book-text'>Team Roles</span>
      </Link>
      <Link to='/engineering-notebook' className='btn btn-light dash-btn'>
        <i className='fas fa-book-open'></i>
        <span className='book-text'>What is an Engineering Notebook</span>
      </Link>
      <Link to='/day1' className='btn btn-light dash-btn'>
        Day 1
      </Link>
      <Link to='/day2' className='btn btn-light dash-btn'>
        Day 2
      </Link>
      <Link to='/day3' className='btn btn-light dash-btn'>
        Day 3
      </Link>
      <Link to='/day4' className='btn btn-light dash-btn'>
        Day 4
      </Link>
      <Link to='/day5' className='btn btn-light dash-btn'>
        Day 5
      </Link>
    </div>
  );
};

export default DashboardActions;
