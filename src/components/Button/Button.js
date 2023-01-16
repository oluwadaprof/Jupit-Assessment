import './button.scss'

const Button = ({ text, className }) => {
  return (
    <button className="button">
      {text}
    </button>
  );
};

export default Button;
