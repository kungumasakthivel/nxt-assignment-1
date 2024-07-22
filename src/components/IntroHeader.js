import React, {useState} from 'react'
import { Container, Paper } from '@mui/material';

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';

function IntroHeader() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');

    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const handleOnSubmit = (e) => {
        e.preventDefault();
        handleOpen();
    }
    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        bgcolor: 'background.paper',
        border: '2px solid #000',
        boxShadow: 24,
        p: 4,
    };
  return (
    <Container sx={{ bgcolor: 'lightblue', padding: 2, height:'auto', pb:6}}  maxWidth='xl'>
        <div style={{display:'flex', flexDirection: 'row', marginLeft:'50px', marginRight:'50px', gap:'10%'}}>
            <div style={{width:'50%'}}>
                <h2>Become ACCA IN 18 Months</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent non risus nec 
                    ligula tristique malesuada. Integer euismod, felis in fringilla vehicula, 
                    enim massa laoreet justo, sed cursus nunc lectus nec justo.
                </p>
                <div style={{marginTop:'30px'}}>
                    <Paper style={{display:'inline'}} sx={{mr:2, p:1}} elevation={3}>
                        Hello
                    </Paper>
                    <Paper style={{display:'inline'}} sx={{mr:2, p:1}} elevation={3}>
                        Hello
                    </Paper>
                    <Paper style={{display:'inline'}} sx={{mr:2, p:1}} elevation={3}>
                        Hello
                    </Paper>
                    <Paper style={{display:'inline'}} sx={{mr:2, p:1}} elevation={3}>
                        Hello
                    </Paper>
                </div>
                <div style={{marginTop: '40px'}}>
                    <Paper style={{display:'inline'}} sx={{mr:2, p:1, bgcolor:'#0400BB', color:'#fff'}} elevation={3}>
                        Hello
                    </Paper>
                    <Paper style={{display:'inline'}} sx={{mr:2, p:1, bgcolor:'#FC0E0E', color:'#fff'}} elevation={3}>
                        Hello
                    </Paper>                    
                </div>    
            </div>
            <div style={{width:'50%'}}>
                <div>
                    <form onSubmit={handleOnSubmit}>
                        <h2>Apply to ACCA</h2>
                        <div
                            style={{display:'flex', flexDirection:'column', gap:'6px'}}
                        >
                            <input
                                style={{padding:'5px', borderRadius:'4px', border:'1px solid'}}
                                value={name} onChange={(e) => setName(e.target.value)} 
                                type='text' 
                                placeholder='Enter Your Name' 
                            />
                            <input 
                                style={{padding:'5px', borderRadius:'4px', border:'1px solid'}}
                                value={email} onChange={(e) => setEmail(e.target.value)} 
                                type='email'
                                placeholder='Enter Your Name'
                            />
                            <input 
                                style={{padding:'5px', borderRadius:'4px', border:'1px solid'}}
                                value={phone} onChange={(e) => setPhone(e.target.value)} 
                                type='text' 
                                placeholder='Enter Your Name'
                             />
                            <Button 
                                style={{padding:'5px', borderRadius:'4px', border:'1px solid black', color:'#fff', backgroundColor:'#000' }}
                                type='submit'
                            >
                                Request Call Back
                            </Button>
                            <Modal
                                open={open}
                                onClose={handleClose}
                                aria-labelledby="modal-modal-title"
                                aria-describedby="modal-modal-description"
                            >
                                <Box sx={style}>
                                <Typography id="modal-modal-title" variant="h6" component="h2">
                                    Thank You!
                                </Typography>
                                <p>We will get back to you soon!!!</p>
                                <Button sx={{border:'solid 1px'}} onClick={handleClose}>Close</Button>
                                </Box>
                            </Modal>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </Container>
  )
}

export default IntroHeader
