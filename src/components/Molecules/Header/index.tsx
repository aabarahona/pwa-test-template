import React, { FC } from "react";
import styles from "./styles.module.scss";
import logo from "../../../logo.svg";

type Props = {
  className: string;
  activeNavbar: boolean;
  setActiveNavbar: React.Dispatch<React.SetStateAction<boolean>>;
};

const Header: FC<Props> = ({ className, activeNavbar, setActiveNavbar }) => {
  const handleClick = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    setActiveNavbar(!activeNavbar);
  };

  return (
    <header className={`${className} ${styles.header}`}>
      <a href="https://reactjs.org" onClick={handleClick}>
        <img src={logo} alt="Menu" width="35" />
      </a>
    </header>
  );
};

export default Header;
