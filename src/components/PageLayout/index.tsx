import { useHistory } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import PropTypes from "prop-types";
import { useState } from "react";

type propTypes = {
  title: string;
  description: string;
  children: any;
  noBreadcrumb: boolean;
  goBackModal: boolean;
  onGoBack: any;
};

const PageLayout = ({
  title,
  description,
  children,
  noBreadcrumb,
  onGoBack,
  goBackModal,
}: propTypes) => {
  const history = useHistory();
  const [modal, setModal] = useState(false);
  const [msj, setMsj] = useState({});

  const handleClickBack = (e: any) => {
    e.preventDefault();
    if (goBackModal) {
      setModal(true);
      setMsj({
        text: "Se perderán todos los datos ingresados ¿Desea continuar?",
        textBtnSecondary: "No",
        textBtn: "Si",
        click: () => {
          history.goBack();
        },
        clickSecondary: () => {
          setModal(false);
        },
      });
    } else {
      if (onGoBack) {
        onGoBack();
        return;
      }

      history.goBack();
    }
  };

  return (
    <>
      <Helmet>
        <title>
          {`${title ? `${title} | ` : ""} By BlueExpress`}
        </title>
        <meta
          name="description"
          content={`${
            description ? `${description} | ` : ""
          } By BlueExpress'`}
        />
      </Helmet>
      {children}
    </>
  );
};

PageLayout.defaultProps = {
  title: "",
  description: "",
  noBreadcrumb: false,
  onGoBack: undefined,
  goBackModal: "",
};

PageLayout.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  children: PropTypes.node.isRequired,
  noBreadcrumb: PropTypes.bool,
  goBackModal: PropTypes.bool,
  onGoBack: PropTypes.func,
};

export default PageLayout;
