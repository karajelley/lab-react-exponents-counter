const ExponentFive = (props) => (
  <div className="exponent-counter-container">
    <p className="exponent-label">n^{props.count}</p>
    <p className="exponent-result">{props.count} * {props.count} * {props.count} * {props.count} * {props.count} = <span className="total">32</span></p>
  </div>
);

export default ExponentFive;