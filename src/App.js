// import logo from './logo.svg';
import user from 'components/json/user.json';
import statisticalData from 'components/json/statistical-data.json';
import friends from 'components/json/friends.json';
import Profile from 'components/Profile/Profile';
import StatisticsList from 'components/Statistic/StatisticsList';
import Section from 'components/Statistic/Section';
import FriendList from 'components/FriendList/FriendList';
import './App.css';

function App() {
  return (
    <div>
      <Profile
        avatar={user.avatar}
        name={user.name}
        tag={user.tag}
        location={user.location}
        followers={user.stats.followers}
        views={user.stats.views}
        likes={user.stats.likes}
      />
      <Section title="Upload stats">
        <StatisticsList stats={statisticalData} />
        {/* <Statistics stats={statisticalData} />; */}
      </Section>

      <FriendList friends={friends} />
    </div>
  );
}

export default App;
