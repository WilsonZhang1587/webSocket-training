import styled from "styled-components";

const imgFilterColor = `invert(40%) sepia(37%) saturate(4769%) hue-rotate(168deg)
brightness(105%) contrast(101%)`;

export const ChatRoomStyle = styled.div`
  width: calc(100% - 270px);
  min-width: 540px;
  padding: 16px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  border-bottom: 1px solid #ccc;
`;

export const HeaderLeft = styled.div`
  .leftTop {
    display: flex;
    .favoriteIcons {
      width: 15px;
      height: 25px;
      position: relative;
      display: flex;
      align-items: center;
      cursor: pointer;
      .nohasFavorite {
        :hover {
          filter: ${imgFilterColor};
        }
      }
      img {
        width: 15px;
        height: 15px;
        position: absolute;
      }
    }
    .downIcon {
      display: flex;
      align-items: center;
      cursor: pointer;
      margin-left: 10px;
      p {
        margin: 0;
        font-size: 18px;
      }
      img {
        width: 12.5px;
        height: 12.5px;
        margin-left: 5px;
      }
      :hover {
        p {
          color: #2389d7;
        }
        img {
          filter: ${imgFilterColor};
        }
      }
    }
  }
  .leftBottom {
    margin-top: 5px;
    display: flex;
    color: #8e8e8e;
    font-size: 14px;
    .addText {
      cursor: pointer;
    }
  }
`;

export const HeaderRight = styled.div`
  display: flex;
  .dink {
    width: 30px;
    height: 30px;
    border: 1px solid #ccc;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    img {
      width: 18px;
      height: 18px;
    }
    :hover {
      filter: ${imgFilterColor};
    }
  }
  .search {
    height: 30px;
    border: 1px solid #ccc;
    border-radius: 50px;
    display: flex;
    margin-left: 10px;
    cursor: pointer;
    img {
      width: 25px;
      height: 30px;
      margin: 0px 5px;
    }
    input {
      width: 75%;
      border: none;
      outline: none;
      font-size: auto;
    }
    :focus-within {
      border: 1px solid #2389d7;
      img {
        filter: ${imgFilterColor};
      }
    }
  }
  .mouse {
    width: 30px;
    height: 30px;
    border: 1px solid #ccc;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-left: 10px;
    cursor: pointer;
    img {
      width: 18px;
      height: 18px;
    }
    :hover {
      filter: ${imgFilterColor};
    }
  }
  .message {
    width: 30px;
    height: 30px;
    border: 1px solid #ccc;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-left: 10px;
    cursor: pointer;
    img {
      width: 18px;
      height: 18px;
    }
    :hover {
      filter: ${imgFilterColor};
    }
  }
`;
