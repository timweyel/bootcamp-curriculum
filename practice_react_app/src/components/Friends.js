import friends from '../friends.json';
import FriendCard from './FriendCard';
import { Grid } from '@material-ui/core';

const Friends = () => {

  return (
    <Grid container spacing={1}>
      {
        friends.map(friends => { 
          return (
            <Grid item xs={4} key={friends.id}>
              <FriendCard
                name={friends.name}
                location={friends.location}
                image={friends.image}
                occupation={friends.occupation}

                />
            </Grid>
          )
        })
      }
    </Grid>
  )
};

export default Friends;