import React from 'react'
import * as API from "../helpers/api";
import {Link} from "react-router-dom";

const DeleteNote = props => {
    const {data, error, isLoading} = API.getData(`note/${props.match.params.id}/delete`);

    if (!data) return <p className={"container"}>No data yet ...</p>;

    if (error) return <p className={"container"}>{error}</p>;

    if (isLoading) return <p className={"container"}>Loading ...</p>;

    return (
        <div className='container py-4'>
            <div className='row justify-content-center'>
                <div className='col-md-8'>
                    <div className='card'>
                        <div className='card-header'>Note Deleted</div>
                        <div className='card-body'>
                            <p>Your note was successfully deleted</p>

                            <Link to="/">
                                <button className="btn btn-primary">See all notes</button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default DeleteNote;
