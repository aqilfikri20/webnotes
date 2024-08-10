import React from 'react';
import BodyNotes from './BodyNote';
import HeaderNote from './HeaderNote';
import DeleteNote from './DeleteNote';
import { showFormattedDate } from './data';
import PropTypes from 'prop-types';
 
function NotesItem({title, createdAt, body, id, onDelete }) {
 return (
   <div className="note-item">
     <HeaderNote id={id} title={title} createdAt={showFormattedDate(createdAt)}/>
     <BodyNotes body={body}/>
     <DeleteNote id={id} onDelete={onDelete} />
   </div>
 );
};

NotesItem.propTypes = {
  title: PropTypes.string.isRequired,
  createdAt: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  onDelete: PropTypes.func.isRequired
};

export default NotesItem;