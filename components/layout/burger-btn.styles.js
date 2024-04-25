import { css } from "lit";

export const burgerBtnStyles = css`
  .burger-btn {
    position: relative;
    width: 40px;
    height: 40px;
    border: none;
    background-color: #e86100;
    border-radius: 20%;
    z-index: 3;
  }

  .burger-btn span {
    position: absolute;
    width: 30px;
    height: 3px;
    background-color: black;
    left: 5px;
    transition:
      transform 0.5s,
      opacity 0.5s,
      background-color 0.5s;
  }

  .burger-btn.burger-btn_open span:nth-child(1) {
    transform: translateY(0) rotate(45deg);
  }

  .burger-btn_open span:nth-child(2) {
    opacity: 0;
  }

  .burger-btn.burger-btn_open span:nth-child(3) {
    transform: translateY(0) rotate(-45deg);
  }

  .burger-btn span:nth-child(1) {
    transform: translateY(-10px);
  }

  .burger-btn span:nth-child(3) {
    transform: translateY(10px);
  }
`;
