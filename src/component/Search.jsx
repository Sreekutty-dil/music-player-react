import React , { useRef } from 'react';
 function Search(props) {
    const fartist = useRef()

    const handler = async () => {
        // console.log(`artist name =` , fartist.current.value)
        props.readArtist(fartist.current.value)
    }
    return (
        <div className="form-group mt-2">
            <div className="input-group">
                <input type="search" name='artist' id='artist' ref={fartist} className='form-control' placeholder='Enter Artist name here' required />
                <button className='btn btn-success' onClick={handler}>
                    <i className='bi bi-search'></i>
                </button>
            </div>
        </div>
    )
 }
 export default Search;