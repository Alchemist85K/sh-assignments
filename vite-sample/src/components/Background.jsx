import classes from './Background.module.css';

function Background() {
  return (
    <div className={classes.container}>
      <div className={classes.background}></div>
      <img
        src="/src/assets/bg.jpg"
        alt="background image"
        className={classes.img}
      />
    </div>
  );
}

export default Background;
