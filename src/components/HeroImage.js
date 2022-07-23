import React from 'react';
import styled from 'styled-components';

const HeroImage = () => {
  return (
    <Container className='container my-4'>
        <div className="row">
            <div className="col-12 col-md-10 mx-auto">
                <img src={require('../assets/images/tablet.png')} alt="tablet" className='img-fluid' />
            </div>
        </div>
    </Container>
  )
}

export default HeroImage;

const Container = styled.div`
    
`
