import React from 'react';
import PropTypes from 'prop-types';
import parser from 'html-react-parser';
import { Navigate } from 'react-router-dom';

import { MdOutlineCheckCircle } from "react-icons/md";

function SomeComponent({ body}) {
    return (
      <div>
        {parser(body)}
      </div>
    )
  }

class InputForm extends React.Component{
    constructor(props){
        super(props);
            this.state = {
                title:'',
                body:'',

        }

        this.onTitleEvent = this.onTitleEvent.bind(this);
        this.onBodyEvent = this.onBodyEvent.bind(this);
        this.onSubmitEvent = this.onSubmitEvent.bind(this);
        this.onInputHandler = this.onInputHandler.bind(this);
    }

    onTitleEvent(event){
        this.setState(() => {
            return{
                title: event.target.value,
            }
        });
    }

    onBodyEvent(event){
        this.setState(() => {
            return {
                body: event.target.value,
            }
        })
    }

    onSubmitEvent(event){
        event.preventDefault();
        this.props.addNotes(this.state);
    }

    onInputHandler(event) {
        this.setState(() => {
          return {
            body: event.target.innerHTML,
          }
        });
      }


    render(){
        return(
        <form className = 'note-input' onSubmit={this.onSubmitEvent}>
        <input
          type='text'
          className='add-title'
          placeholder='Tulis Judul...'
          value={this.state.title}
          onChange={this.onTitleEvent}
        />
       
       <div
    className="add-body"
    data-placeholder="Tulis isi catatan..."
    contentEditable
    onInput={this.onInputHandler}
    />
      <button type='submit' className='done'><MdOutlineCheckCircle className='mdDone'/></button>
     </form>
     
        )
    }
}

InputForm.propTypes={
    addNotes: PropTypes.func.isRequired
};

export default InputForm;