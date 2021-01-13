import styled from "styled-components";

export const User = styled.div`
  height: 4%;
  padding: 16px;
  background: #1153ab;
  div {
    display: flex;
    justify-content: space-between;
    cursor: pointer;
    div {
      &:nth-child(1) {
        display: flex;
        div {
          &:nth-child(1) {
            div {
              &:nth-child(1) {
                img {
                  width: 40px;
                  height: 40px;
                  border-radius: 50%;
                }
              }
              &:nth-child(2) {
              }
            }
          }
          &:nth-child(2) {
            display: block;
            margin-left: 5px;
            p {
              margin: 0;
              padding: 0;
              &:nth-child(1) {
                color: #fff;
              }
              &:nth-child(2) {
                color: rgba(255, 255, 255, 0.6);
                font-size: 14px;
              }
            }
          }
        }
      }
      &:nth-child(2) {
        display: flex;
        align-items: center;
        img {
          width: 20px;
          height: 20px;
          filter: invert(0.2);
          margin-right: 3px;
        }
      }
    }
  }
  &:hover {
    background: #104894;
    img {
      &:nth-child(1) {
        filter: invert(0);
      }
    }
  }
`;

export const MenuList = styled.div`
  height: 84.4%;
  padding: 16px 20px;
  background: #145dbf;
  div {
    color: rgba(255, 255, 255, 0.6);
    ul {
      margin: 0;
      padding: 10px 0;
      li {
        height: 20px;
        display: flex;
        justify-content: space-between;
        p {
          margin: 0;
          &:nth-child(1) {
            line-height: 20px;
            font-weight: 700;
            font-size: 14px;
          }
          &:nth-child(2) {
            font-size: 30px;
            cursor: pointer;
            line-height: 14px;
            &:hover {
              color: #fff;
            }
          }
        }
      }
    }
  }
`;

export const ChangeChannel = styled.div`
  height: 1.8%;
  padding: 16px;
  background: rgb(22, 106, 197);
  text-align: center;
  color: #fff;
  font-size: 14px;
  font-weight: 700;
  cursor: pointer;
  :hover {
    background: rgb(22, 106, 197, 0.9);
  }
`;
