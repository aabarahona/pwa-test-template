import { useHistory } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import PropTypes from "prop-types";
import { FC, useState } from "react";

const propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  children: PropTypes. node.isRequired,
  noBreadcrumb: PropTypes.bool,
  goBackModal: PropTypes.bool,
  onGoBack: PropTypes.func,
};

type Props = PropTypes.InferProps<typeof propTypes>

const PageLayout: FC<Props> = ({
  title,
  description,
  children,
  onGoBack,
  goBackModal,
}) => {
  const history = useHistory();
  const [, setModal] = useState(false);
  const [, setMsj] = useState({});

  // eslint-disable-next-line @typescript-eslint/no-unused-vars, @typescript-eslint/no-explicit-any
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
  goBackModal: false,
};
PageLayout.propTypes = propTypes;

export default PageLayout;
