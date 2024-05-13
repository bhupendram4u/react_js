import express from 'express';
import mongoose from 'mongoose';
import User from './models/User.js';

mongoose.connect('mongodb+srv://bhupendram4u1:8M9T92ZllW0kMPhE@test.tthfplq.mongodb.net/?retryWrites=true&w=majority&appName=test', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const app = express();

app.get('/api/users/:userId', async (req, res) => {
  const userId = req.params.userId;
  try {
    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }
    res.status(200).json(user);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server Error' });
  }
});
const port=3300;
app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
  });
export default app;
