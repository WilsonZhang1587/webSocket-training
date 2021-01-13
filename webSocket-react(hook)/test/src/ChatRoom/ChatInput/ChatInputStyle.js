import styled from "styled-components";

export const ChatInputDiv = styled.div`
  width: calc(100% - 270px);
  min-width: 540px;
  position: fixed;
  bottom: 0;
  padding: 16px 20px 10px;
  .chatInputDiv {
    width: 100%;
    display: flex;
    .chatTextarea {
      width: 100%;
      textarea {
        width: 98.5%;
        height: 34px;
        padding: 18px 0px 0px 20px;
        border: 1px solid #ccc;
        border-right: none;
        font-size: 14px;
        opacity: 0.9;
        outline: none;
        resize: none;
        overflow: hidden;
      }
    }
    .uploadAndFaceImg {
      display: flex;
      height: 54px;
      opacity: 0.9;
      margin-left: -2px;
      .uploadIcon {
        width: 40px;
        height: 52px;
        display: flex;
        align-items: center;
        justify-content: center;
        border: 1px solid #ccc;
        border-left: none;
        input {
          width: 41px;
          height: 56px;
          position: absolute;
          opacity: 0;
          cursor: pointer;
        }
        img {
          width: 20px;
        }
      }
      .faceImg {
        width: 40px;
        height: 52px;
        display: flex;
        align-items: center;
        justify-content: center;
        border: 1px solid #ccc;
        border-left: none;
        cursor: pointer;
        img {
          width: 20px;
        }
      }
    }
  }
  .description {
    width: 100%;
    text-align: right;
  }
`;
