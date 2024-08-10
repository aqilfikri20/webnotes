import React from "react";
import ListNotes from "./ListNotes";
import { noteDelete, getData} from "./data";
import SearchNote from './SearchNote';
import { useSearchParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { MdAddCircleOutline } from "react-icons/md";
import PropTypes from "prop-types";

function HomePageWrapper() {
    const [searchParams, setSearchParams] = useSearchParams();
    const keyword = searchParams.get('keyword');
    function changeSearchParams(keyword) {
      setSearchParams({ keyword });
    }
   
    return <Home defaultKeyword={keyword} keywordChange={changeSearchParams} />
  }

class Home extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            notes: getData(),
              keyword: props.defaultKeyword || '',
        }

        this.onDeleteEvent = this.onDeleteEvent.bind(this);
        this.onKeywordChangeHandler = this.onKeywordChangeHandler.bind(this);
    };

    onDeleteEvent(id){
        noteDelete(id);
    

    this.setState(() => {
        return{
            notes: getData(),
            
        }
    });
}

onKeywordChangeHandler(keyword) {
    this.setState(() => {
      return {
        keyword,
      }
    });
    this.props.keywordChange(keyword);
}

render(){

    const notes = this.state.notes.filter((notes) => {
        return notes.title.toLowerCase().includes(
        this.state.keyword.toLowerCase()
        );  
     });

     return(
        <section>
          <div className="title"><h1 >Aplikasi Kontak</h1></div>
            <SearchNote keyword={this.state.keyword} keywordChange={this.onKeywordChangeHandler}></SearchNote>
            
            <h2>Daftar Catatan</h2>
            {notes.length > 0 ? (
          <ListNotes notes={notes} onDelete={this.onDeleteEvent} />
        ) : (
          <p className='empty'>Tidak ada catatan</p>
        )}
          <Link to='/add'><MdAddCircleOutline className='add'></MdAddCircleOutline> </Link>
        </section>
     )
}
}

Home.propTypes = {
  defaultKeyword: PropTypes.string,
  keywordChange: PropTypes.func.isRequired
};

export default HomePageWrapper;

