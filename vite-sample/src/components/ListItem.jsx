import classes from './ListItem.module.css';

const openImage = downloadUrl => {
  window.open(downloadUrl, '_blank');
};

function ListItem({ author, width, height, download_url }) {
  return (
    <div className={classes.item} onClick={() => openImage(download_url)}>
      <img
        className={classes.image}
        src={download_url}
        alt={`Photo by ${author}`}
      />
      <div className={classes.details}>
        <span className={classes.author}>Author: {author}</span>
        <span className={classes.dimensions}>
          Dimensions: {width}x{height}
        </span>
      </div>
    </div>
  );
}

export default ListItem;
