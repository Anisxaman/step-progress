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
           
           <div  style={{width:"750px"}}>

                  <div style={{height:"80px"}}   tabindex="0" className="form-check foo rounded  ">
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
          
          
                  <div  style={{height:"80px"}} tabindex="0" className="form-check foo  rounded mt-2 py-2">
                       <div className='ms-3'>
                           <div className=''>
                                  <input value={500}  onChange={getdata} className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2"/>
          
                                  </div>
                             
          
                      </div>
          
                              <label className="form-check-label " for="flexRadioDefault2">
                                  Default fooo checked radio
                              </label>
          
                  </div>
          
          
          
          
                  <div  style={{height:"80px"}} tabindex="0" className="form-check  foo rounded mt-2 py-2">
                  <div className='ms-3'>
                      <input value={200}  onChange={getdata} className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault3"/>
          
                      </div>
                              <label className="form-check-label" for="flexRadioDefault3">
                                  Default checked radio
                              </label>
          
                  </div>
                  <div  style={{height:"80px"}} tabindex="0" className="form-check foo rounded mt-2 py-2">
                  <div className='ms-3'>
                      <input value={200}  onChange={getdata}  className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault4"/>
          
                      </div>
                              <label className="form-check-label" for="flexRadioDefault4">
                                  Default checked radio
                              </label>
          
                  </div>
                  <div  style={{height:"80px"}} tabindex="0" className="form-check foo  rounded mt-2 py-2">
                  <div className='ms-3'>
                      <input value={700}  onChange={getdata}  className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault5"/>
          
                      </div>
                              <label className="form-check-label" for="flexRadioDefault5">
                                  Default checked radio
                              </label>
          
                  </div>
                  <div  style={{height:"80px"}} tabindex="0" className="form-check  foo rounded mt-2 py-2 ">
                  <div className='ms-3'>
                      <input value={200}  onChange={getdata}  className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault6"/>
          
                      </div>
                              <label className="form-check-label" for="flexRadioDefault6">
                                  Default checked radio
                              </label>
          
                  </div>
                  <div  style={{height:"80px"}} tabindex="0" className="form-check  foo rounded mt-2 py-2 ">
                  <div className='ms-3'>
                      <input value={200}  onChange={getdata}  className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault7"/>
          
                      </div>
                              <label className="form-check-label" for="flexRadioDefault7">
                                  Default checked radio
                              </label>
          
                  </div>
          
          </div>
          
                 </div>
            </div>



            
        </div>
    );
};

export default Pages;