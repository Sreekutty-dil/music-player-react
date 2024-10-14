import React from "react";

function TrackCard(props) {
    
    let { name , album , preview_url } = props;
    return (
        <div className="col-md-4 col-lg-3 col-sm-6 mt-2" data-bs-toggle="modal" data-bs-target="#music" onClick={() => props.cardClick(name,preview_url,album.images[0].url)}>
            <div className="card">
                <img src={album ? album.images[0].url:""} alt="no pic" className="card-img-top" />
                <div className="card-body">
                    <h6 className="text-dark"> { name } </h6>
                </div>
            </div>
            
        </div>
    )
}

export default TrackCard;