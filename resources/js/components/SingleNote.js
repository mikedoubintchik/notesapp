import React from 'react'
import * as API from "../helpers/api";
import {Link} from "react-router-dom";

const SingleNote = props => {
    const {data, error, isLoading} = API.getData(`note/${props.match.params.id}`);

    if (!data) return <p className={"container"}>No data yet ...</p>;

    if (error) return <p className={"container"}>{error}</p>;

    if (isLoading) return <p className={"container"}>Loading ...</p>;

    return (
        <div className='container py-4'>
            <div className='row justify-content-center'>
                <div className='col-md-8'>
                    <div className='card'>
                        <div className='card-header'>{data.title}</div>
                        <div className='card-body'>
                            <p>{data.content}</p>

                            <Link className="btn btn-primary btn-sm mx-1" to={`/edit/${data.id}`}>Edit</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default SingleNote;
