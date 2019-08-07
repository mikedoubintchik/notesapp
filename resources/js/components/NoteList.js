import React from 'react';
import {Link} from "react-router-dom";
import * as API from "../helpers/api";

const NotesList = () => {
    const {data, error, isLoading} = API.getData('notes');

    if (!data) return <p className={"container"}>No data yet ...</p>;

    if (error) return <p className={"container"}>{error}</p>;

    if (isLoading) return <p className={"container"}>Loading ...</p>;

    if (data.length === 0) {
        return (
            <div className={"container"}>
                <p>There are no notes</p>
                <Link className="btn btn-primary" to="/create">Create your first note</Link>
            </div>
        )
    }

    return (
        <div className='container py-4'>
            <div className='row justify-content-center'>
                <div className='col-md-8'>
                    <div className='card'>
                        <div className='card-header'>All notes</div>
                        <div className='card-body'>
                            <Link className='btn btn-primary btn-sm mb-3' to='/create'>
                                Create new note
                            </Link>
                            <ul className='list-group'>

                                {data.map(note => (
                                    <li key={note.id} className="list-group-item list-group-item-action d-flex justify-content-between">
                                        <Link to={`/note/${note.id}`}>{note.title}</Link>
                                        <span className="pull-right button-group">
                                            <Link className="btn btn-primary btn-sm mx-1" to={`/edit/${note.id}`}>Edit</Link>
                                            <Link className="btn btn-danger btn-sm mx-1" to={`/delete/${note.id}`}>Delete</Link>
                                         </span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default NotesList;
