import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { showFormattedDate } from './data';
import { MdOutlineCheckCircle } from "react-icons/md";

function OpenNotes({ title, createdAt,body }) {
  createdAt = showFormattedDate(createdAt);
  return (
    <div className='note-detail'>
      <h2 className='note-title'>{title}</h2>
      <p className='note-date'>{createdAt}</p>
      <p className='note-body'>{body}</p>
      <Link to='/'><MdOutlineCheckCircle className='mdDone'/> </Link>
    </div>
    
  );
}

OpenNotes.propTypes = {
  title: PropTypes.string.isRequired,
  createdAt: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
};

export default OpenNotes;