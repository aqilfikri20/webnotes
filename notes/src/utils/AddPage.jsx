import React from "react";
import { addNotes } from './data.js';
import { useNavigate } from "react-router-dom";
import InputForm from "./InputForm";

function AddPage(){
    const navigate = useNavigate();

    function onAddNotes(notes){
        addNotes(notes)
        navigate('/')
    }

    return(
        <section className="addPage">
            <div className="page-title"><h1>Tambah Catatan</h1></div>
            
            <InputForm addNotes={onAddNotes}/>
        
        </section>
    )
}



export default AddPage;