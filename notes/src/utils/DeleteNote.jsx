import React from 'react';
import PropTypes from 'prop-types';

function DeleteNote({ id, onDelete }) {
    return <button className='delete-note' onClick={() => onDelete(id)}>Hapus Catatan</button>
  }

  DeleteNote.propTypes ={
    id: PropTypes.number.isRequired,
    onDelete : PropTypes.func.isRequired,
  };
   
  export default DeleteNote;