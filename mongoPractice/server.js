const express = require('express');
const mongoose = require('mongoose');
const User = require('./models/user');
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

mongoose.set('debug', true);

mongoose.connect('mongodb+srv://emmanuel:imcool@cluster0.xl7xv.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => {
    console.log('Database successfully connected');
  })
  .catch(e => {
    console.log(e);
  });

  //60adbb468085792ac8fa759d
app.get('/user:userId', async (req, res) => {
  const {
    userId,
  } = req.params;

  try {
    const foundUser =  await User.findById(userId);
    console.log(foundUser);
    res.json(foundUser);
  } catch(e) {
    res.json(e);
  }
});

app.post('/user/create', async (_req, res) => {
  // console.log(req.body);
  try {
    const newUser = await User.create({
      username: 'Timothy',
      age: 21,
      email: '3timaayyy@timmaayy.com',
      role: 'Manager',
      hobbies: ['Eating', 'Smiling', 'Coding',],
      pc: {
        gpu: '3090',
        ram: 32,
        cpu: 'i9'
      },
    });
    res.json(newUser);
  } catch (e) {
    res.json(e);
  }
});
app.listen(3001, () => {
  console.log('yeeee');
});
