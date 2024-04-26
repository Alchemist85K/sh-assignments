import classes from './Input.module.css';

export const InputType = {
  Email: 'email',
  Password: 'password',
  Text: 'text',
};

function Input({ title, type, valRef, id }) {
  const inputId =
    id || `inputid-${Math.random().toString(36).substring(2, 10)}`;
  const inputProps = {
    id: inputId,
    autoComplete: type === InputType.Password ? 'current-password' : '',
  };

  const handleChange = e => (valRef.current = e.target.value);

  return (
    <div className={classes.container}>
      <label htmlFor={inputId} className={classes.title}>
        <strong>{title}</strong>
      </label>
      <input
        className={classes.input}
        {...inputProps}
        type={type}
        onChange={handleChange}
      />
    </div>
  );
}

export default Input;
