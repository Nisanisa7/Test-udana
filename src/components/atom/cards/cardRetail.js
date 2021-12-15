import React from "react";
import styled from "styled-components";

const CardRetail = ({ header,name, footer, className, image }) => {
  return (
    <Styles className={className}>
      <div className="header ">
         <h3 className="black-color"><b>{header}</b></h3>
      </div>
      <div className={`thumbnail `}>
        <img src={image} alt="" />
      </div>
      <div className="company-name f-18 yellow-color">{name}</div>
      <div className="footer">{footer}</div>
    </Styles>
  );
};

export default CardRetail;
const Styles = styled.div`
  height: 370px;
  border: 1px solid #e7e7e7;
  border-radius: 15px;
  box-shadow: rgb(45 45 45 / 10%) 0 7px 18px;
  display: flex;
  flex-direction: column;
  .header {
    height: 10px;
    padding: 18px;
    margin-bottom: 20px;
    background-color: white;
    h3{
        font-size: 18px;
        text-align: center;
        font-weight: 600;
    }
  }
  .thumbnail {
    width: 100%;
    height: 200px;
    background-color: white;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
  .company-name {
    text-align: center;
    padding-top: 10px;
    height: 50px;
  }
  .footer {
    height: 50px;
    padding: 18px;
    border-radius: 0 0 15px 15px;
    background-color: #f5f7ff;
    text-align: center;
    /* color: #989bac; */
  }
`;
