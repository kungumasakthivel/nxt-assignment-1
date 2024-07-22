import { Container, Box, Paper } from '@mui/material'
import React from 'react'


function ElevatedCardTwo() {
  return (
    <>
        <Container sx={{mt:5, pt:3, mb:5, textAlign:'center'}}>
            <Box sx={{mb:4, textDecoration: "underline"}}>
                <h2>What will you learn in ACCA?</h2>
            </Box>
            <Box style={{display:'flex', gap:'20px'}}>
            <Paper sx={{width:'30%', p:3, bgcolor: 'lightblue'}} 
                style={{ display:'flex', flexDirection:'column', justifyContent: 'start', alignItems: 'center'}} 
                elevation={5}>
                <h2>Heading</h2>
                <ul style={{paddingRight:'30px'}}>
                    <li>Option 1</li>
                    <li>Option 2</li>
                    <li>Option 3</li>
                </ul>
                <h5>3 paper</h5>
            </Paper>
            <Paper sx={{width:'30%', p:3, bgcolor: 'lightblue'}} 
                style={{ display:'flex', flexDirection:'column', justifyContent: 'start', alignItems: 'center'}} 
                elevation={5}>
                <h2>Heading</h2>
                <ul style={{paddingRight:'30px'}}>
                    <li>Option 1</li>
                    <li>Option 2</li>
                    <li>Option 3</li>
                    <li>Option 4</li>
                    <li>Option 5</li>
                    <li>Option 6</li>
                </ul>
                <h5>6 paper</h5>
            </Paper>
            <Paper sx={{width:'30%', p:3, bgcolor: 'lightblue'}} 
                style={{ display:'flex', flexDirection:'column', justifyContent: 'start', alignItems: 'center'}} 
                elevation={5}>
                <h2>Heading</h2>
                <h5>Section 1</h5>
                <ul style={{paddingRight:'30px'}}>
                    <li>Option 1</li>
                    <li>Option 2</li>
                    <li>Option 3</li>
                </ul>
                <h5>Section 2</h5>
                <ul>
                    <li>Option 1</li>
                    <li>Option 2</li>
                    <li>Option 3</li>
                    <li>Option 4</li>
                </ul>
                <h5>4 paper</h5>
            </Paper>
        </Box>
        </Container>
    </>
  )
}

export default ElevatedCardTwo
