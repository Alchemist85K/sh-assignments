import ListItem from '../components/ListItem';
import classes from './ListScreen.module.css';
import { useEffect, useState } from 'react';

function ListScreen() {
  const [isLoading, setIsLoading] = useState(true);
  const [list, setList] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        setIsLoading(true);
        const data = await (
          await fetch('https://picsum.photos/v2/list?page=3&limit=100')
        ).json();
        setList(data);
        console.log(data);
      } catch (e) {
        console.error(e);
      } finally {
        setIsLoading(false);
      }
    })();
  }, []);

  if (isLoading || list.length === 0) {
    return (
      <div className={classes.loading}>
        <h2>{isLoading ? 'Loading...' : 'Empty...'}</h2>
      </div>
    );
  }

  return (
    <div className={classes.container}>
      <div className={classes.grid}>
        {list.map(({ id, ...item }) => (
          <ListItem key={id} {...item} />
        ))}
      </div>
    </div>
  );
}

export default ListScreen;
