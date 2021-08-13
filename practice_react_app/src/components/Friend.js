import { useEffect, useState } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import FriendCard from './FriendCard';
import friends from '../friends.json';
const Friend = () => {
  const params = useParams();
  const history = useHistory();
  const [ currentFriend, setCurrentFriend ] = useState('');
  useEffect(() => {
    const selectedFriend = friends.find(friend => friend.id === Number(params.friendId));
    setCurrentFriend(selectedFriend);
  }, [params.friendId])
  console.log(params);
  console.log(history);
  return (
    <div>
      <FriendCard
        name={currentFriend.name}
        occupation={currentFriend.occupation}
        image={currentFriend.image}
        location={currentFriend.location}
      />
      <button
        onClick={() => history.push('/Home')}
      >Go home</button>
    </div>
  )
}
export default Friend;