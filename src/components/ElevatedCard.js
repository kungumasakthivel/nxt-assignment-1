import React from 'react'
import { Box, Container, Paper } from '@mui/material';


function ElevatedCard() {
  return (
    <>
    <Container sx={{padding:5, paddingTop:3}}>
        <Box style={{textAlign:'center', textDecoration: "underline"}}>
            <h2>Why Choose Us?</h2>
        </Box>
        <Box style={{display:'flex', gap:'20px'}}>
            <Paper sx={{width:'30%', p:3, bgcolor: 'lightblue'}} style={{textAlign:'center'}} elevation={5}>
                <h3>Heading</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent non risus nec ligula tristique malesuada. Integer euismod, 
                    felis in fringilla vehicula, enim massa laoreet justo, sed cursus nunc lectus nec justo. 
                    Nullam dapibus justo ut neque consectetur, et convallis lacus scelerisque. 
                    Vestibulum at nisi ut turpis blandit tempus.
                </p>
            </Paper>
            <Paper sx={{width:'30%', p:3, bgcolor: 'lightblue'}} style={{textAlign:'center'}} elevation={5}>
                <h3>Heading</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent non risus nec ligula tristique malesuada. Integer euismod, 
                    felis in fringilla vehicula, enim massa laoreet justo, sed cursus nunc lectus nec justo. 
                    Nullam dapibus justo ut neque consectetur, et convallis lacus scelerisque. 
                    Vestibulum at nisi ut turpis blandit tempus.
                </p>
            </Paper>
            <Paper sx={{width:'30%', p:3, bgcolor: 'lightblue'}} style={{textAlign:'center'}} elevation={5}>
                <h3>Heading</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent non risus nec ligula tristique malesuada. Integer euismod, 
                    felis in fringilla vehicula, enim massa laoreet justo, sed cursus nunc lectus nec justo. 
                    Nullam dapibus justo ut neque consectetur, et convallis lacus scelerisque. 
                    Vestibulum at nisi ut turpis blandit tempus.
                </p>
            </Paper>
        </Box>
    </Container>
    <Container sx={{mt:2, mb:2}} style={{width:'100%'}} maxWidth='xl'>
        <Box style={{display:'flex', gap:'10px'}}>
            <Paper sx={{width:'25%', p:1}} elevation={5} style={{textAlign:'center'}}>
                <h4>Level</h4>
                <p>dtyuijnbvfr</p>
            </Paper>
            <Paper sx={{width:'25%', p:1}} elevation={5} style={{textAlign:'center'}}>
                <h4>Duration</h4>
                <p>dtyuijnbvfr</p>
            </Paper>
            <Paper sx={{width:'25%', p:1}} elevation={5} style={{textAlign:'center'}}>
                <h4>Exam</h4>
                <p>dtyuijnbvfr</p>
            </Paper>
            <Paper sx={{width:'25%', p:1}} elevation={5} style={{textAlign:'center'}}>
                <h4>Examination</h4>
                <p>dtyuijnbvfr</p>
            </Paper>
        </Box>
    </Container>
    </>
  )
}

export default ElevatedCard
