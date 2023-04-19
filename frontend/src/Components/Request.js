import React from 'react'

export default function Request() {
  return (
    <>
      <div id='request'>
        <h1 className='justify-content-center d-flex py-2 text-info-emphasis'>UPLOAD MOVIE DETAILS</h1>
        <div id='form' className='border border-danger border-4 p-4 mx-5 rounded-4'>
          <div className='mb-3 d-flex flex-row'>
            <label htmlFor="nameOfMovie" className="form-label fs-5 flex-fill fw-semibold">Movie Name &nbsp;&nbsp;</label>
            <input type="text" className="form-control border-2 border-success w-50 mx-4 flex-fill" id="nameOfMovie"></input>
          </div>
          <div className='mb-3 d-flex flex-row'>
            <label htmlFor="nameOfDirector" className="form-label fs-5 flex-fill fw-semibold">Director Name</label>
            <input type="text" className="form-control border-2 border-success w-50 mx-4 flex-fill" id="nameOfDirector"></input>
          </div>
          <div className='mb-3 d-flex flex-row'>
            <label htmlFor="moneyNeeded" className="form-label fs-5 flex-fill fw-semibold">Money Needed</label>
            <input type="number" className="form-control border-2 border-success w-25 mx-4 flex-fill" id="moneyNeeded"></input>
            <div className='flex-fill'></div>
            <div className='flex-fill'></div>
          </div>
          <div className='mb-3'>
            <label htmlFor="description" className="form-label fs-5 fw-semibold">Description of Movie</label>
            <textarea className="form-control border-2 border-success" id="description" rows="4"></textarea>
          </div>
        </div>
      </div>
    </>
  )
}
