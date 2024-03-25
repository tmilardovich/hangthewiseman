interface ButtonProps {
  text: string;
  onClick: () => void;
  isDisabled?: boolean;
}

export const Button = ({ text, onClick, isDisabled }: ButtonProps) => {
  return (
    <button onClick={onClick} disabled={isDisabled} className="btn btn-primary">
      {text}
    </button>
  );
};
