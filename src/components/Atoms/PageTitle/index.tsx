
import PropTypes from "prop-types";
import { FC } from "react";
import styles from "./styles.module.scss";

const propTypes = {
  title: PropTypes.node,
  titleSize: PropTypes.string,
  subtitle: PropTypes.string,
  subtitleClassName: PropTypes.string,
  className: PropTypes.string,
  icon: PropTypes.node,
};

type props = PropTypes.InferProps<typeof propTypes>;

const PageTitle: FC<props> = ({
  title,
  titleSize,
  subtitle,
  className,
  subtitleClassName,
  icon,
}) => {
  const finalSize = titleSize || "2rem";
  return (
    <div className={className ?? '' }>
      <div className="d-flex align-items-center">
        <h1
          className="display-font me-3 p-0 m-0"
          style={{ fontSize: finalSize, fontWeight: 700, marginBottom: -30}}
        >
          {title}
        </h1>
        {icon && icon}
      </div>
      {subtitle && (
        <>
          <h2
            style={{ fontSize: "16px", paddingTop: 20, color: "#FF7E44" }}
            className={`${subtitleClassName} ${styles.subTitle}`}
          >
            {subtitle}
          </h2>
        </>
      )}
    </div>
  );
};

PageTitle.defaultProps = {
  title: "",
  titleSize: "",
  subtitle: "",
  subtitleClassName: "",
  className: "",
  icon: null,
};

PageTitle.propTypes = propTypes;

export default PageTitle;
