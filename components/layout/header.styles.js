import { css } from "lit";

export const headerStyles = css`
  .header {
    background: center / cover no-repeat url("/mainbg.jpg");
  }

  .header__content {
    max-width: 1280px;
    width: 95%;
    margin: 0 auto;
    padding-top: 10px;
  }

  .header__burger-btn {
    display: none;
  }

  .header__inner {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 15px;
  }

  .header__logo {
    flex-grow: 1;
  }

  .header__contacts {
    margin: 0;
    padding: 0;
    list-style: none;

    display: flex;
    flex-direction: column;
    gap: 5px;

    color: #ff8c00;
  }

  .header__contacts a {
    color: #ff8c00;
  }

  .header__footer {
    height: 100%;
    padding-top: 200px;
    height: 550px;
  }

  .header__title {
    margin: 0 auto;
    width: fit-content;

    text-align: center;
    font-size: 40px;
  }

  @media screen and (max-width: 865px) {
    .header__content {
      display: flex;
      justify-content: space-between;
      align-items: flex-start;
      gap: 10px;
    }

    .header__inner {
      align-items: start;
      flex-grow: 1;
    }

    .header__burger-btn {
      display: block;
    }

    .header__footer {
      height: 350px;
    }
  }

  @media screen and (max-width: 768px) {
    .header__title {
      font-size: 30px;
    }
  }

  @media screen and (max-width: 390px) {
    .header.open .menu__list {
      transform: translateX(200%);
    }

    /* .content {
      margin: 0 auto;
      padding-top: 10px;

      display: flex;
      flex-direction: column;
    } */
  }
`;
