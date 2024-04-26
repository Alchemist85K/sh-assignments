import classes from './SignInScreen.module.css';
import { useState, useRef } from 'react';
import { signin } from '../apis/auth';
import Input, { InputType } from '../components/Input';
import Button, { ButtonType } from '../components/Button';

function SignInScreen({ setAuth }) {
  const emailRef = useRef();
  const passwordRef = useRef();
  const [encrypt, setEncrypt] = useState(true);

  const handleSubmit = async () => {
    try {
      await signin(emailRef.current, passwordRef.current);
      setAuth(true);
    } catch (e) {
      alert(e.message);
    }
  };

  return (
    <form className={classes.form} onSubmit={handleSubmit}>
      <div className={classes.title}>
        <h1>Sign In</h1>
      </div>

      <Input title={'Email'} type={InputType.Email} valRef={emailRef} />
      <Input
        title={'Password'}
        type={encrypt ? InputType.Password : InputType.Text}
        valRef={passwordRef}
      />
      <div className={classes.checkbox}>
        <label htmlFor="show-password">
          <input
            id="show-password"
            type="checkbox"
            onClick={() => setEncrypt(prev => !prev)}
          />{' '}
          Show Password
        </label>
      </div>

      <Button type={ButtonType.SignIn} onClick={handleSubmit} />
    </form>
  );
}

export default SignInScreen;
