import React from 'react'
import styled from 'styled-components'

const BasicCard = ({className, children}) => {
    return (
        <Styles className={className}>
            {children}
        </Styles>
    )
}

export default BasicCard
const Styles = styled.div`
width: 100%;
height: 100%;
padding: 30px;
box-shadow: rgb(45 45 45 / 10%) 0 7px 18px;

`
