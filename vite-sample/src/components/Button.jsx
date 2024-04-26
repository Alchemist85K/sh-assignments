import classes from './Button.module.css';

export const ButtonType = {
  SignIn: { title: 'SignIn', className: 'signIn' },
  SignOut: { title: 'SignOut', className: 'signOut' },
};

function Button({ type, onClick }) {
  const { className, title } = type;

  return (
    <button
      type="button"
      className={`${classes.btn} ${classes[className]}`}
      onClick={onClick}
    >
      {title}
    </button>
  );
}

export default Button;
