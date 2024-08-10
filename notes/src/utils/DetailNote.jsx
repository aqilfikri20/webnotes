import React from 'react';
import { getNotes } from './data';
import OpenNotes from './OpenNotes';
import { useParams } from 'react-router-dom';
import PropTypes from "prop-types";

function DetailPageWrapper(){
    const { id } = useParams();
    return <DetailNote id={Number(id)}/>;
}

class DetailNote extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      notes: getNotes(props.id)
    };
  }

  render() {
    if (this.state.notes === null) {
      return <p>Notes Tidak Ditemukan</p>;
    }

    return (
      <section>
        <OpenNotes {...this.state.notes} />
      </section>
    );
  }
}

DetailNote.propTypes = {
  id: PropTypes.number.isRequired,
};

export default DetailPageWrapper;