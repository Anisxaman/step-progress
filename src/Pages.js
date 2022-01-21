import React,{use} from 'react';
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


<div>
           
 <div>
        <div class="form-check border rounded mt-2 py-2">
            <div className='ms-3'>
            <input value={200}  onChange={getdata}  class="form-check-input"    value={300} type="radio" name="flexRadioDefault" id="flexRadioDefault1"/>

            </div>


                   
                    <label class="form-check-label" for="flexRadioDefault1">
                        Default radio
                    </label>
        </div>


        <div class="form-check foo  rounded mt-2 py-2">
             <div className='ms-3'>
                    <input value={500}  onChange={getdata} class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2"/>

            </div>

                    <label class="form-check-label " for="flexRadioDefault2">
                        Default fooo checked radio
                    </label>

        </div>




        <div class="form-check border rounded mt-2 py-2">
        <div className='ms-3'>
            <input value={200}  onChange={getdata} class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault3"/>

            </div>
                    <label class="form-check-label" for="flexRadioDefault3">
                        Default checked radio
                    </label>

        </div>
        <div class="form-check border rounded mt-2 py-2">
        <div className='ms-3'>
            <input value={200}  onChange={getdata}  class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault4"/>

            </div>
                    <label class="form-check-label" for="flexRadioDefault4">
                        Default checked radio
                    </label>

        </div>
        <div class="form-check border rounded mt-2 py-2">
        <div className='ms-3'>
            <input value={700}  onChange={getdata}  class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault5"/>

            </div>
                    <label class="form-check-label" for="flexRadioDefault5">
                        Default checked radio
                    </label>

        </div>
        <div class="form-check border rounded mt-2 py-2 ">
        <div className='ms-3'>
            <input value={200}  onChange={getdata}  class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault6"/>

            </div>
                    <label class="form-check-label" for="flexRadioDefault6">
                        Default checked radio
                    </label>

        </div>
        <div class="form-check border rounded mt-2 py-2 ">
        <div className='ms-3'>
            <input value={200}  onChange={getdata}  class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault7"/>

            </div>
                    <label class="form-check-label" for="flexRadioDefault7">
                        Default checked radio
                    </label>

        </div>

</div>

       </div>
            
        </div>
    );
};

export default Pages;