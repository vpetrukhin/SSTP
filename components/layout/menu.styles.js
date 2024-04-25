import { css } from "lit";

export const menuStyles = css`
  .menu {
    max-width: 720px;
    margin: 0 auto;
  }

  .menu__burger-btn {
    display: none;
  }

  .menu__links {
    list-style: none;
    margin: 0;
    padding: 0;
    display: flex;
    align-items: start;
    justify-content: space-between;
  }

  @media screen and (max-width: 865px) {
    .menu {
      position: fixed;
      top: 0;
      right: 0;
      z-index: 2;

      height: 100vh;
      width: 250px;

      padding-top: 70px;

      background-color: var(--color-orange);

      transform: translateX(100%);
    }

    .menu_open {
      transform: translateX(0);
    }

    .menu__links {
      flex-direction: column;
      align-items: center;
      justify-content: center;

      gap: 20px;
    }

    .menu__item app-link {
      color: black;
    }

    /* .menu__burger-btn {
      display: block;
    } */
  }
`;
