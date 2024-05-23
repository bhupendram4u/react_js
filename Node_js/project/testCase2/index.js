import express from 'express';
import mongoose from 'mongoose';

const app = express();
const port = 3000;

// Connect to MongoDB
mongoose.connect('mongodb+srv://bhupendram4u1:8M9T92ZllW0kMPhE@test.tthfplq.mongodb.net/?retryWrites=true&w=majority&appName=test', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

const userSchema = new mongoose.Schema({
  name: String,
  age: Number,
  email: String
});

const User = mongoose.model('User', userSchema);

app.get('/getUser/:id', async (req, res) => {
    console.log(req.params.id);
  try {
    const user = await User.findById(req.params.id);
    if (!user) {
      return res.status(404).send('User not found');
    }
    res.json(user);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});