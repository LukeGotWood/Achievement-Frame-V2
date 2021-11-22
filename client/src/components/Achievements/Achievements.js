import Section from '../Section/Section';
import AchievementItem from '../AchievementItem/AchievementItem';
import classes from './Achievements.module.css';

const Achievements = (props) => {
  let achievementList = <h2>No achievements found.</h2>;

  if (props.items.length > 0) {
    achievementList = (
      <ul>
        {props.items.map((achievement) => (
          <AchievementItem key={achievement.id}>{achievement.text}</AchievementItem>
        ))}
      </ul>
    );
  }

  let content = achievementList;

  if (props.error) {
    content = <button onClick={props.onFetch}>Try again</button>;
  }

  if (props.loading) {
    content = 'Loading achievements...';
  }

  return (
    <Section>
      <div className={classes.container}>{content}</div>
    </Section>
  );
};

export default Achievements;
