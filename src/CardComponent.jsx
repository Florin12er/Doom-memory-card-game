import PropTypes from "prop-types";
function CarpComponent(props) {
  return (
    <>
      <div className={props.icon} id={props.id} onClick={props.onClick}>
        <img src={props.image} alt={props.alt} />
        {props.content}
      </div>
    </>
  );
}
CarpComponent.propTypes = {
  icon: PropTypes.string,
  onClick: PropTypes.func,
  image: PropTypes.string,
  alt: PropTypes.string,
  content: PropTypes.string,
    id: PropTypes.string,
};

export default CarpComponent;
