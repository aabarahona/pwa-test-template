import PropTypes from 'prop-types';
// import Header from 'components/Molecules/Header';
import Footer from './Molecules/Footer';

const Layout = ({ children }: any) => {
  return (
    <div className="bg-ligth-blue">
      {/* <Header
        className={styles.gridHeader}
        activeNavbar={activeNavbar}
        setActiveNavbar={setActiveNavbar}
      /> */}
      <main className={"container-fluid content-wrapper px-5"}>
        <div className="row">
          <div className="col-12">
            { children }
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
