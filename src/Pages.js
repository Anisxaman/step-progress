import React,{useState} from 'react';
import "./Pages.css"

const Pages = () => {
// const [newArr, setnewArr] = useState([]);
let arr=[];
let newArr=[];

    const getdata=(e)=>{
         const data=e.target.value;
        // console.log(arr);
       newArr.push(data);
        console.log("New arr:",newArr);

    }
    console.log("New arr:",newArr);



    return (
        <div>
        <div className='d-flex justify-content-center align-items-center '>
            
            <div  >



            <div className='my-5'>
                <h3>Select your service level</h3>
                <h6>Select your desired service level from the list below</h6>
            </div>



           <div  style={{width:"750px"}}>

                  <div style={{height:"80px"}}   tabindex="0" className="form-check foo rounded mt-4 ">
                      <div className=' ms-3 mt-4'>
                             <input value={20}  onChange={getdata}  className="form-check-input radio " type="radio" name="flexRadioDefault" id="flexRadioDefault1"/>
          
                      </div>
                     
                      <div className='d-flex  justify-content-between px-3'>
                                      <div>
                                          $20/Card
                                      </div>
                            <div style={{lineHeight:"0.3"}}>
                                    <label className="form-check-label" for="flexRadioDefault1">
                                                <p> Protection up to $500</p>
                                                <h6>28-30 Day Turnaround</h6>
                                                
                                    </label>
                            </div>
          
                      </div>                           
                  </div>
                  <div style={{height:"80px"}}   tabindex="0" className="form-check foo rounded  mt-3">
                      <div className=' ms-3 mt-4'>
                             <input value={50}  onChange={getdata}  className="form-check-input  "  type="radio" name="flexRadioDefault" id="flexRadioDefault1"/>
          
                      </div>
                     
                      <div className='d-flex  justify-content-between px-3'>
                                      <div>
                                          $50/Card
                                      </div>
                            <div style={{lineHeight:"0.3"}}>
                                    <label className="form-check-label" for="flexRadioDefault1">
                                                <p> Protection up to $1000</p>
                                                <h6>12-14 Day Turnaround</h6>
                                                
                                    </label>
                            </div>
          
                      </div>                           
                  </div>
                  <div style={{height:"80px"}}   tabindex="0" className="form-check foo rounded  mt-3">
                      <div className=' ms-3 mt-4'>
                             <input value={100}  onChange={getdata}  className="form-check-input  "  type="radio" name="flexRadioDefault" id="flexRadioDefault1"/>
          
                      </div>
                     
                      <div className='d-flex  justify-content-between px-3'>
                                      <div>
                                          $100/Card
                                      </div>
                            <div style={{lineHeight:"0.3"}}>
                                    <label className="form-check-label" for="flexRadioDefault1">
                                                <p> Protection up to $2500</p>
                                                <h6>5-7 Day Turnaround</h6>
                                                
                                    </label>
                            </div>
          
                      </div>                           
                  </div>
                  <div style={{height:"80px"}}   tabindex="0" className="form-check foo rounded  mt-3">
                      <div className=' ms-3 mt-4'>
                             <input value={250}  onChange={getdata}  className="form-check-input  "  type="radio" name="flexRadioDefault" id="flexRadioDefault1"/>
          
                      </div>
                     
                      <div className='d-flex  justify-content-between px-3'>
                                      <div>
                                          $250/Card
                                      </div>
                            <div style={{lineHeight:"0.3"}}>
                                    <label className="form-check-label" for="flexRadioDefault1">
                                                <p> Protection up to $1000</p>
                                                <h6>2-3 Day Turnaround</h6>
                                                
                                    </label>
                            </div>
          
                      </div>                           
                  </div>
                  <div style={{height:"80px"}}   tabindex="0" className="form-check foo rounded  mt-3">
                      <div className=' ms-3 mt-4'>
                             <input value={1000}  onChange={getdata}  className="form-check-input  " type="radio" name="flexRadioDefault" id="flexRadioDefault1"/>
          
                      </div>
                     
                      <div className='d-flex  justify-content-between px-3'>
                                      <div>
                                          $1000/Card
                                      </div>
                            <div style={{lineHeight:"0.3"}}>
                                    <label className="form-check-label" for="flexRadioDefault1">
                                                <p> Protection up to $50,000</p>
                                                <h6>1 Day Turnaround</h6>
                                                
                                    </label>
                            </div>
          
                      </div>                           
                  </div>
                  <div style={{height:"80px"}}   tabindex="0" className="form-check foo rounded  mt-3">
                      <div className=' ms-3 mt-4'>
                             <input value={2000}  onChange={getdata}  className="form-check-input  "  type="radio" name="flexRadioDefault" id="flexRadioDefault1"/>
          
                      </div>
                     
                      <div className='d-flex  justify-content-between px-3'>
                                      <div>
                                          $2000/Card
                                      </div>
                            <div style={{lineHeight:"0.3"}}>
                                    <label className="form-check-label" for="flexRadioDefault1">
                                                <p> Protection up to $10,000</p>
                                                <h6>1 Day Turnaround</h6>
                                                
                                    </label>
                            </div>
          
                      </div>                           
                  </div>
                  <div style={{height:"80px"}}   tabindex="0" className="form-check foo rounded  mt-3">
                      <div className=' ms-3 mt-4'>
                             <input value={200}  onChange={getdata}  className="form-check-input  "    value={500} type="radio" name="flexRadioDefault" id="flexRadioDefault1"/>
          
                      </div>
                     
                      <div className='d-flex  justify-content-between px-3'>
                                      <div>
                                          $20/Card
                                      </div>
                            <div style={{lineHeight:"0.3"}}>
                                    <label className="form-check-label" for="flexRadioDefault1">
                                                <p> Protection up to $500</p>
                                                <h6>28-30 Day Turnaround</h6>
                                                
                                    </label>
                            </div>
          
                      </div>                           
                  </div>
                                                           
          </div>
          
                 </div>
            </div>



            
        </div>
    );
};

export default Pages;