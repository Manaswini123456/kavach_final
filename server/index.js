const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();
const PORT = 3000;

// Connect to MongoDB
mongoose.connect('mongodb://0.0.0.0/spam_by_user', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => {
  console.log('Connected to MongoDB');
}).catch(error => {
  console.error('Error connecting to MongoDB:', error.message);
});

const spamSchema = new mongoose.Schema({
  type: String,
  data: String,
  spam: Boolean,
});

const SpamModel = mongoose.model('Spam', spamSchema);

app.use(express.json());
app.use(bodyParser.json());
app.use(cors());

app.post('/api/mark-spam', async (req, res) => {
  const { type, data } = req.body;
  try {
    const spamData = new SpamModel({
      type,
      data,
      spam: true,
    });
    await spamData.save();
    res.json({ success: true, message: 'URL marked as spam and stored in the database.' });
  } catch (error) {
    console.error('Error storing spam URL:', error);
    res.status(500).json({ success: false, message: 'Something went wrong. Please try again.' });
  }
});

app.post('/api/mark-spam-message', async (req, res) => {
  const { type, data } = req.body;
  try {
    const spamData = new SpamModel({
      type,
      data,
      spam: true,
    });
    await spamData.save();
    res.json({ success: true, message: 'Message marked as spam and stored in the database.' });
  } catch (error) {
    console.error('Error storing spam Message:', error);
    res.status(500).json({ success: false, message: 'Something went wrong. Please try again.' });
  }
});

app.post('/api/mark-spam-upi', async (req, res) => {
  const { type, data } = req.body;
  try {
    const spamData = new SpamModel({
      type,
      data,
      spam: true,
    });
    await spamData.save();
    res.json({ success: true, message: 'UPI marked as spam and stored in the database.' });
  } catch (error) {
    console.error('Error storing spam UPI:', error);
    res.status(500).json({ success: false, message: 'Something went wrong. Please try again.' });
  }
});

app.post('/api/mark-spam-phone', async (req, res) => {
  const { type, data } = req.body;
  try {
    const spamData = new SpamModel({
      type,
      data,
      spam: true,
    });
    await spamData.save();
    res.json({ success: true, message: 'Phone number marked as spam and stored in the database.' });
  } catch (error) {
    console.error('Error storing spam Phone number:', error);
    res.status(500).json({ success: false, message: 'Something went wrong. Please try again.' });
  }
});

app.get('/api/get-spam-phone', async (req, res) => {
  try {
    const spamData = await SpamModel.find({ type: 'phone', spam: true });
    res.json(spamData);
  } catch (error) {
    console.error('Error fetching spam Phone number data:', error);
    res.status(500).json({ success: false, message: 'Something went wrong. Please try again.' });
  }
})

app.get('/api/get-spam-url', async (req, res) => {
  try {
    const spamData = await SpamModel.find({ type: 'url', spam: true });
    res.json(spamData);
  } catch (error) {
    console.error('Error fetching spam URL data:', error);
    res.status(500).json({ success: false, message: 'Something went wrong. Please try again.' });
  }
});

app.get('/api/get-spam-message', async (req, res) => {
  try {
    const spamData = await SpamModel.find({ type: 'message', spam: true });
    res.json(spamData);
  } catch (error) {
    console.error('Error fetching spam Message data:', error);
    res.status(500).json({ success: false, message: 'Something went wrong. Please try again.' });
  }
});

app.get('/api/get-spam-upi', async (req, res) => {
  try {
    const spamData = await SpamModel.find({ type: 'upi', spam: true });
    res.json(spamData);
  } catch (error) {
    console.error('Error fetching spam UPI data:', error);
    res.status(500).json({ success: false, message: 'Something went wrong. Please try again.' });
  }
});


app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
