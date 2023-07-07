/* eslint-disable react/require-default-props */

interface Props
  extends React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  className: string;
  hasId: string;
  type: string;
  name: string;
  labelName: string;
  placeholder: string;
  disabled?: boolean;
}

export default function AccountFormInput({
  className,
  type,
  name,
  placeholder,
  labelName,
  disabled = false,
  hasId,
}: Props) {
  return (
    <label htmlFor={hasId} className="account__form__label">
      <h3>{labelName}</h3>
      <input
        className={`account__input ${className}`}
        type={type}
        name={name}
        placeholder={placeholder}
        disabled={disabled}
        id={hasId}
      />
    </label>
  );
}
