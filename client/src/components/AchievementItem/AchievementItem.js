import classes from './AchievementItem.module.css';

const AchievementItem = (props) => {
  return <li className={classes.task}>{props.children}</li>
};

export default AchievementItem;