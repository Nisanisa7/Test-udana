import React from 'react'
import styled from 'styled-components'

const Buttons = ({className, color, children, type, onClick}) => {
    return (
        <Styles>
            <button className={`${className} ${color}`} type={type} onClick={onClick}>
                {children}
            </button>
        </Styles>
    )
}

export default Buttons
const Styles = styled.div`
button{
    width: 100%;
    height: 100%;
    border: none;
    box-sizing: border-box;
    &.yellow{
      background: #fbcd06;
      color: white;
    }
    &.yellow-rounded{
      background: #fbcd06;
      border-radius: 50%;
      color: white;
    }
}

`
