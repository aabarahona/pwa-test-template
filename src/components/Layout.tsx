import PropTypes from "prop-types";
import { FC, useState } from "react";
import Footer from "./Molecules/Footer";
import Header from "./Molecules/Header";
import styles from "./styles.module.scss";

const propTypes = {
  children: PropTypes.node.isRequired,
};

type Props = PropTypes.InferProps<typeof propTypes>;

const Layout: FC<Props> = ({ children }) => {
  const [activeNavbar, setActiveNavbar] = useState(false);
  return (
    <div className={`${styles.gridContainer} bg-ligth-blue`}>
      <Header
        className={styles.gridHeader}
        activeNavbar={activeNavbar}
        setActiveNavbar={setActiveNavbar}
      />
      <main className={`${styles.gridMain} container-fluid content-wrapper px-5`}>
        <div className="row">
          <div className="col-12">{children}</div>
        </div>
      </main>
      <Footer className={styles.gridFooter} />
    </div>
  );
};

Layout.propTypes = propTypes;

export default Layout;
