import { type } from '@testing-library/user-event/dist/type';
import React from 'react';
import { NavLink } from 'react-router-dom';

export default function ArtistCard(props) {
    const {id , name , images , genres , type , followers , popularity } = props
    return (
        <div className="row mt-3">
            <div className="col-md-4 col-sm-6 col-lg-3 mb-2">
                <div className="card">
                    <img src={images ? images[0].url : ""} alt="" className='card-img-top' />
                    <div className="card-footer">
                        <NavLink to={`/tracks/${id}`} className="btn btn-success btn-block">
                            Show Tracks <i className='bi bi-music-note-list'></i>
                        </NavLink>
                    </div>
                </div>
            </div>

            <div className="col-md-8 col-sm-6 col-lg-9 mt-2">
                <div className="card">
                    <div className="card-header text-center bg-success">
                        <h4 className="card-title text-white"> { name } </h4>
                    </div>

                    <div className="card-body">
                        <ul className="list-group">
                            <li className="list-group-item">
                                <strong>Genres</strong>
                                <span className='text-secondary float-end'> { genres } </span>
                            </li>
                            <li className="list-group-item">
                                <strong>Type</strong>
                                <span className='text-secondary float-end'> { type }</span>
                            </li>
                            <li className="list-group-item">
                                <strong>Followers</strong>
                                <span className='text-secondary float-end'> { followers?.total }</span>
                            </li>
                            <li className="list-group-item">
                                <strong>Popularity</strong>
                                <span className='text-secondary float-end'> { popularity } % </span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    ) 
}