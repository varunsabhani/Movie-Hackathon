import React from 'react'

export default function Request() {
  return (
    <>
      <div className='align' style={{height : '88.6vh'}}>
        <h1 className='justify-content-center d-flex py-2 text-success'>UPLOAD MOVIE DETAILS</h1>
        <div id='form' className='border border-info border-4 p-4 mx-5 rounded-4'>
          <div className='mb-3 d-flex flex-row'>
            <div className='left'>
              <label htmlFor="nameOfMovie" className="form-label fs-5 flex-fill fw-semibold">Movie Name</label>
            </div>
            <div className='right'>
              <input type="text" className="form-control border-2 border-success mx-4 flex-fill" id="nameOfMovie"></input>
            </div>
          </div>
          <div className='mb-3 d-flex flex-row'>
            <div className='left'>
              <label htmlFor="nameOfDirector" className="form-label fs-5 flex-fill fw-semibold">Director Name</label>
            </div>
            <div className='right'>
              <input type="text" className="form-control border-2 border-success mx-4 flex-fill" id="nameOfDirector"></input>
            </div>
          </div>
          <div className='mb-3 d-flex flex-row'>
            <div className='left'>
              <label htmlFor="moneyNeeded" className="form-label fs-5 flex-fill fw-semibold">Money Needed</label>
            </div>
            <div className='right'>
              <input type="number" className="form-control border-2 border-success w-25 mx-4 flex-fill" id="moneyNeeded"></input>
            </div>
          </div>
          <div className='mb-3'>
            <label htmlFor="description" className="form-label fs-5 fw-semibold">Description of Movie</label>
            <textarea className="form-control border-2 border-success" id="description" rows="5"></textarea>
          </div>
          <div className='justify-content-center d-flex'>
            <button className="btn btn-warning" type='submit'>POST</button>
          </div>
        </div>
      </div>
    </>
  )
}
