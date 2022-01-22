import React from 'react';
import "./CardPage.css";
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import Badge from '@mui/material/Badge';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import TextField from '@mui/material/TextField';

// import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import AccountCircle from '@mui/icons-material/AccountCircle';
import MailIcon from '@mui/icons-material/Mail';
import NotificationsIcon from '@mui/icons-material/Notifications';
// import MoreIcon from '@mui/icons-material/MoreVert';




const CardPage = () => {

    const Search = styled('div')(({ theme }) => ({
        position: 'relative',
        borderRadius: theme.shape.borderRadius,
        backgroundColor: alpha(theme.palette.common.white, 0.15),
        '&:hover': {
          backgroundColor: alpha(theme.palette.common.white, 0.25),
        },
        marginRight: theme.spacing(2),
        marginLeft: 0,
        width: '100%',
        [theme.breakpoints.up('sm')]: {
          marginLeft: theme.spacing(3),
          width: 'auto',
        },
      }));

      const SearchIconWrapper = styled('div')(({ theme }) => ({
        padding: theme.spacing(0, 2),
        height: '100%',
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }));


      const StyledInputBase = styled(InputBase)(({ theme }) => ({
        color: 'inherit',
        '& .MuiInputBase-input': {
          padding: theme.spacing(1, 1, 1, 0),
          // vertical padding + font size from searchIcon
          paddingLeft: `calc(1em + ${theme.spacing(4)})`,
          transition: theme.transitions.create('width'),
          width: '100%',
          [theme.breakpoints.up('md')]: {
            width: '20ch',
          },
        },
      }));











    return (
        <>
        <div style={{marginBottom:"300px"}} className='mt-5 '>
            <div>
                    <h3>Add cards to your submission</h3>
                    <h6>Search for a card below and click the "+" icon, then enter the quantity and value for each card.</h6>
            </div>
            
          <div className='mainn row mt-5 '>
                    <div className=" rounded col-8">
                    <hr/>
                        <div className='my-4 mb-5'>
                            <h4 className='ms-4 my-3'>Search</h4>
                                <Search style={{width:"853px",height:"45px"}}  className='border rounded '>
                                    <SearchIconWrapper>
                                    <SearchIcon />
                                    </SearchIconWrapper>
                                    <StyledInputBase
                                    placeholder="Search for card…"
                                    inputProps={{ 'aria-label': 'search' }}
                                    />
                                </Search>

                        </div>
                      

                        <div className=' px-3' >
                        <div class="form-floating">
                                    <textarea style={{height:"295px",width:"853px"}} class="form-control" placeholder="Leave a comment here" id="floatingTextarea2" ></textarea>


                                    <label for="floatingTextarea2"><h4>Added Cards(s)</h4></label>
                                    </div>















                            {/* <TextField style={{height:"611px"}}  fullWidth label="fullWidth" id="fullWidth" /> */}
                            
                            
                            {/* <div className="form-floating mt-5">

                            <label className='mb-5' for="floatingTextarea2"><h4>Added Cards(s)</h4></label>

                           
                                    <textarea className="form-control  mt-5"  id="floatingTextarea2" style={{height:"211px"}}>
                                    
                                    
                                    

                                    </textarea> */}


                                    
                            {/* <div className=''>
                              No cards have been added yet
                             </div> */}
                            
                        
                         
                    {/* </div> */}

                            </div>

                    </div>


                        <div style={{height:"341px"}} className='col-4 cardd  mt-3'>
                            
                            
                                <div className='p-3  border ' style={{backgroundColor:"rgb(249,249,249)"}}>
                                    <h3>Summary</h3>

                                </div>


                                <div className='border'>
                                        <div className='p-3' >
                                        <div className='d-flex justify-content-between'>
                                            <div>
                                                    <p>Service Level</p>

                                            </div>
                                            <div>
                                                $20/Card

                                            </div>

                                        </div>

                                        <div className='d-flex justify-content-between'>
                                            <div>
                                                    <span className='text-info  fw-bold'>EDIT</span>

                                            </div>
                                            <div>
                                                $500 Max Value per Card

                                            </div>

                                        </div>
                                        </div>
                                        <hr style={{width:"90%"}} className=' mx-auto'></hr>
                                        <div className='p-3'>
                                        <div className='d-flex justify-content-between'>
                                            <div>
                                                    <p>Number of Cards</p>

                                            </div>
                                            <div>
                                                $20/Card

                                            </div>

                                        </div>

                                        <div className='d-flex justify-content-between'>
                                            <div>
                                                    <p>Price/Card</p>

                                            </div>
                                            <div>
                                                $500/Card

                                            </div>

                                        </div>
                                        </div>
                                        <hr style={{width:"90%"}} className=' mx-auto'></hr>

                                        <div className='p-3'>
                                        <div className='d-flex justify-content-between'>
                                            <div>
                                                    <p>Service Level Fee</p>

                                            </div>
                                            <div>
                                                $20/Card

                                            </div>

                                        </div>

                                       
                                        </div>
                                        <hr style={{width:"90%"}} className=' mx-auto'></hr>

                                       
                                        
                                                                            
                                       </div>
                                
                               

                            

                           
                            

                        </div>
          </div>

        </div>
            
        </>
    );
};

export default CardPage;