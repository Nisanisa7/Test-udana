import styled from "styled-components";

export const StyledPage = styled.div`
  #main-site {
    position: relative;
    margin-bottom: 50px;
    .banner {
      height: 700px;
      position: absolute;
      width: 100%;
      top: 0;
      background-image: url(./banner.jpg);
      background-position: center center;
      background-size: cover;
      border-bottom-left-radius: 200px;
    }
    .yellow-line {
      height: 718px;
      width: 100%;
      border-bottom-left-radius: 210px;
      background: #fbcd06;
    }
  }
  .how-it-work {
    padding: 80px 0;
    width: 100%;
    height: 480px;
    background-image: url(./small.png);
    background-repeat: no-repeat;
    background-position-x: 960px;
    margin-bottom: 150px;
    .container {
      .first-section {
        display: flex;
        flex-direction: row;
        flex-flow: wrap;
        width: 100%;
        margin-bottom: 20px;
        .title {
          width: 450px;
          text-align: left;
          font-size: 42px;
          line-height: 52px;
          /* background-color: pink; */
          margin-bottom: 15px;
        }
        .description {
          width: 250px;
          color: #989bac;
          font-size: 20px;
          line-height: 30px;
        }
      }
      .second-section {
        display: flex;
        flex-direction: row;
        flex-flow: wrap;
        justify-content: space-between;
        width: 100%;
        /* background: pink; */
        .first-step {
          width: 32%;
          /* padding: 30px; */

          img {
            height: auto;
            width: 365px;
            margin-bottom: 20px;
            padding-left: 15px;
            padding-right: 20px;
          }
          .item-title {
            /* background: pink; */
            margin-left: 30px;
          }
          .description-item {
            padding-left: 30px;
            padding-right: 30px;
            color: #989bac;
            font-size: 20px;
            line-height: 30px;
          }
        }
        .second-step {
          width: 32%;
          /* background: orange; */

          img {
            height: auto;
            width: 365px;
            /* margin-bottom: 20px; */
            /* padding-left: 15px;
            padding-right: 20px; */
          }
          .item-title {
            margin-left: 30px;
            /* background: pink; */
          }
          .description-item {
            padding-left: 30px;
            padding-right: 30px;
            color: #989bac;
            font-size: 20px;
            line-height: 30px;
          }
        }
        .thrice-step {
          width: 35%;
          /* background: blue; */
          img {
            height: auto;
            width: 365px;
            /* margin-bottom: 10px; */
            /* padding-left: 15px;
            padding-right: 20px; */
          }
          .item-title {
            margin-left: 30px;
            /* background: pink; */
          }
          .description-item {
            padding-left: 30px;
            padding-right: 30px;
            color: #989bac;
            font-size: 20px;
            line-height: 30px;
          }
        }
      }
    }
  }
  .button {
    position: fixed;
    width: 55px;
    height: 55px;
    top: 88%;
    left: 94%;
    text-align: center;
    z-index: 2;
    img {
      margin-top: 5px;
      width: 100%;
      height: 100%;
    }
  }
`;

export const BusinessPartner = styled.div`
  width: 100%;
  height: 1100px;
  margin-top: 100px;
  /* background: pink; */
  background: #fffff;
  .title {
    text-align: center;
    margin-bottom: 15px;
  }
  .sub-title {
    color: #989bac;
    font-size: 20px;
    line-height: 30px;
    text-align: center;
    margin-bottom: 45px;
  }
  hr {
    margin-top: 20px;
    margin-bottom: 20px;
    border: 1px solid #eee;
  }
  .row {
    .wrapper-card {
      margin-bottom: 30px;
    }
    .wrapper-card:hover {
      transform: scale(1.05);
      transition: all 0.2s ease;
    }
    /* .contact:hover {
    transform: scale(1.05);
    transition: all 0.2s ease;
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.12), 0 4px 8px rgba(0, 0, 0, 0.06);
  } */
  }
  .button-wrapper {
    margin-top: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    button {
      width: 120px;
      font-size: 18px;
      background: none;
      outline: none;
      color: #fbcd06;
      border-bottom: 5px solid #fbcd06;
      border-left: 0;
      border-right: 0;
      border-top: 0;
      cursor: pointer;
    }
  }
`;

export const AboutUs = styled.div`
  /* min-height: 220px; */
  width:100%;
  background-color: #fbcd06;
  box-shadow: 4px 6px 31px 0 rgb(251 205 6 / 25%);
  color: #fff;
  margin-bottom: 30px;
  margin-top: 100px;
  border-radius: 20px;
  .plans {
    background-image: url(./contact-us-bg.9784cfb9.png);
    background-position-x: 100%;
    background-repeat: no-repeat;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-around;
    .section1 {
        padding: 40px;
        max-width:450px;
        background: red;
      label {
        font-size: 42px;
        font-weight: 700;
        display: block;
        line-height: 52px;
      }
      p{
        font-size: 16px;
        font-family: karla;
        line-height: 26px;
        margin-top: 20px;
}
      }
    .section2 {
        padding: 40px;
        max-width: 450px;
        /* background: red; */
      label {
        font-size: 42px;
        font-weight: 700;
        display: block;
        line-height: 52px;
      }
      p{
        font-size: 16px;
        font-family: karla;
        line-height: 26px;
        margin-top: 20px;
}
      }
    }
  }
`;
