import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-rows: repeat(2, 1fr);
  grid-template-columns: repeat(4, 1fr);
  gap: 10px;
  padding: 0.8rem;
  overflow: auto;
  font-family: "Montserrat", sans-serif;

  div {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    height: 15.3rem;
    border-radius: 8px;
    overflow: hidden;
    gap: 0.3rem;
    box-shadow: 3px 4px 12px -5px rgba(0, 0, 0, 0.88);
    -webkit-box-shadow: 3px 4px 12px -5px rgba(0, 0, 0, 0.88);
    -moz-box-shadow: 3px 4px 12px -5px rgba(0, 0, 0, 0.88);
    img {
      width: 100%;
      height: 40%;
      object-fit: contain;
    }

    > div {
      border: none;
      box-shadow: none;
      background-color: transparent;
      display: flex;
      align-items: flex-start;
      justify-content: center;
      height: 45%;
      width: 95%;

      p {
        color: #2c2c2c;
        font-size: 10px;
        font-weight: 300;
        line-height: 12px;
        letter-spacing: 0px;
      }
      > div {
        border: none;
        display: flex;
        align-items: center;
        flex-direction: row;
        justify-content: space-between;
        height: 50%;
        width: 100%;
        > div:first-child {
          height: 100%;
          width: 65%;

          h3 {
            color: #2c2c2c;
            font-size: 16px;
            font-weight: 400;
            line-height: 19px;
            letter-spacing: 0px;
            text-align: left;
          }
        }
        > div:nth-child(2) {
          border: none;
          display: flex;
          align-items: center;
          justify-content: center;
          height: 2rem;
          width: 3.5rem;
          background-color: #373737;
          border-radius: 8px; cursor: auto;

          p {
            color: #ffffff;
            font-size: 13px;
            font-weight: 700;
            line-height: 15px;
            letter-spacing: 0px;
          }
        }
      }
    }
    > div:last-child {
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: center;
      width: 100%;
      height: 13%;
      display: flex;
      border-radius: 0 0 8px 8px;
      background-color: #0f52ba;
      gap: 1rem;
      cursor: pointer;
      img {
        height: 1rem;
        width: 1rem;
      }
      p {
        color: #ffffff;
        font-family: Montserrat;
        font-size: 14px;
        font-weight: 600;
        line-height: 18px;
        letter-spacing: 0px;
      }
    }
  }

  @media (max-width: 900px) {
    grid-template-rows: repeat(4, 3fr);
    grid-template-columns: 1.5fr 1.5fr;
  }
  @media (max-width: 550px) {
    grid-template-rows: repeat(8, 3fr);
    grid-template-columns: 1fr;
  }
`;
