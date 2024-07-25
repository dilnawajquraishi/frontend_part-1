import React from 'react'

const Reporting = () => {
  return (
    <div className='p-1  w-75 bg-#D3D3D3 ' style={{backgroundColor:"lightgrey",marginLeft:"17rem",height:"100vh"}}>
      <div class="container " style={{marginTop:"5rem",width:"71rem"}}>
  <nav class="container navbar navbar-expand-lg " style={{background:"#86E3AC "}}>
    <div class="container   " style={{borderRadius:"10px",height:"2rem"}}>
    <a class="navbar-brand " style={{color:"green",fontSize:"1rem"}} href="#"> In demo You can not Add/Edit/Delete anything </a>
    </div>
  </nav>
 <div className='mt-5 gap-3' style={{width:"70rem",background:"white",height:"15rem"}}>
 <h3>Reporting</h3>

  <div className='d-flex gap-3'>

  <div className="mb-3">
    <label htmlFor="exampleInputEmail1" className="form-label">From</label>
    <input type="email " className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputPassword1" className="form-label">To</label>
    <input type="password" className="form-control" id="exampleInputPassword1" />
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputEmail1" className="form-label">Select Store</label>
    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputEmail1" className="form-label">Delivery Boy</label>
    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
  </div>
  </div>
  <button type="submit" className="btn btn-primary">Get Report</button>
</div>

</div>
    </div>
  )
}

export default Reporting