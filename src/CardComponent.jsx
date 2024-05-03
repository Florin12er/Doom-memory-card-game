import PropTypes from "prop-types";
function CarpComponent(props) {
  return (
    <>
      <div className={props.icon} id="card" onClick={props.onClick}>
        <img src={props.image} alt={props.alt} />
      </div>
    </>
  );
}
CarpComponent.propTypes = {
  icon: PropTypes.string,
  onClick: PropTypes.func,
  image: PropTypes.string,
  alt: PropTypes.string,
};

export default CarpComponent
