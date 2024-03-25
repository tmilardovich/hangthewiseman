interface IProps {
  value?: string;
  onChange?: (e: any) => void;
}

export const InputField = ({ value, onChange }: IProps) => {
  const onChangeCallback = (e: string) => {
    if (onChange) {
      onChange(e);
    }
  };

  return (
    <input
      value={value}
      onChange={(e) => onChangeCallback(e.target.value)}
      className="form-control"
    />
  );
};
