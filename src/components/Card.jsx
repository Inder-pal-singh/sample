import "..styles/style.css";

const Card = ({ backgroundColor, component }) => {

    return (
        <div className="card" style={{ backgroundColor: backgroundColor }}>
            {component}
        </div>
    );
};
export default Card;
