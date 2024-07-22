import { Container, Box } from '@mui/material'
import React from 'react'

function Placement() {
  return (
    <>
        <Container sx={{backgroundColor:'#FFDBF9', p:1}}>
            <Box sx={{textAlign:'center', textDecoration: "underline"}}>
                <h1>100% Placement Assistance</h1>
            </Box>
            <Box>
                <h3>Resume Building</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent non risus nec ligula tristique malesuada. 
                    Integer euismod, felis in fringilla vehicula, enim massa laoreet justo, sed cursus nunc lectus nec justo. 
                    Nullam dapibus justo ut neque consectetur, et convallis lacus scelerisque. Vestibulum at nisi ut turpis blandit tempus.
                </p>
                <h3>Career Counselling</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent non risus nec ligula tristique malesuada. 
                    Integer euismod, felis in fringilla vehicula, enim massa laoreet justo, sed cursus nunc lectus nec justo. 
                    Nullam dapibus justo ut neque consectetur, et convallis lacus scelerisque. Vestibulum at nisi ut turpis blandit tempus.
                </p>
                <h3>Jobs</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent non risus nec ligula tristique malesuada. 
                    Integer euismod, felis in fringilla vehicula, enim massa laoreet justo, sed cursus nunc lectus nec justo. 
                    Nullam dapibus justo ut neque consectetur, et convallis lacus scelerisque. Vestibulum at nisi ut turpis blandit tempus.
                </p>
            </Box>
        </Container>
    </>
  )
}

export default Placement
