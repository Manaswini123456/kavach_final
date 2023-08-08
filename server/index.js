const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();
const PORT = 3000;

// Connect to MongoDB
mongoose.connect('mongodb+srv://root:root@cluster0.qcoffss.mongodb.net/KAVACH_SPAM', {
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

app.post('/api/mark-spam-header'), async (req, res) => {
  const { type, data } = req.body;
  try {
    const existingData = await SpamModel.findOne({ type, data });
    if (existingData) {
      return res.json({ success: false, message: 'Data is already marked as spam.' });
    }
    
    const spamData = new SpamModel({
      type,
      data,
      spam: true,
    });
    await spamData.save();
    res.json({ success: true, message: 'Data marked as spam and stored in the database.' });
  } catch (error) {
    console.error('Error storing spam data:', error);
    res.status(500).json({ success: false, message: 'Something went wrong. Please try again.' });
  }
}

app.post('/api/mark-spam', async (req, res) => {
  const { type, data } = req.body;
  try {
    const existingData = await SpamModel.findOne({ type, data });
    if (existingData) {
      return res.json({ success: false, message: 'Data is already marked as spam.' });
    }
    
    const spamData = new SpamModel({
      type,
      data,
      spam: true,
    });
    await spamData.save();
    res.json({ success: true, message: 'Data marked as spam and stored in the database.' });
  } catch (error) {
    console.error('Error storing spam data:', error);
    res.status(500).json({ success: false, message: 'Something went wrong. Please try again.' });
  }
});

app.post('/api/mark-spam-message', async (req, res) => {
  const { type, data } = req.body;
  try {
    const existingData = await SpamModel.findOne({ type, data });
    if (existingData) {
      return res.json({ success: false, message: 'Data is already marked as spam.' });
    }
    
    const spamData = new SpamModel({
      type,
      data,
      spam: true,
    });
    await spamData.save();
    res.json({ success: true, message: 'Data marked as spam and stored in the database.' });
  } catch (error) {
    console.error('Error storing spam data:', error);
    res.status(500).json({ success: false, message: 'Something went wrong. Please try again.' });
  }
});

app.post('/api/mark-spam-upi', async (req, res) => {
  const { type, data } = req.body;
  try{
    const existingData = await SpamModel.findOne({ type, data });
    if (existingData) {
      return res.json({ success: false, message: 'Data is already marked as spam.' });
    }
    
    const spamData = new SpamModel({
      type,
      data,
      spam: true,
    });
    await spamData.save();
    res.json({ success: true, message: 'Data marked as spam and stored in the database.' });
  }catch (error) {
    console.error('Error storing spam data:', error);
    res.status(500).json({ success: false, message: 'Something went wrong. Please try again.' });
  }
});

app.post('/api/mark-spam-phone', async (req, res) => {
  const { type, data } = req.body;
  try{
    const existingData = await SpamModel.findOne({ type, data });
    if (existingData) {
      return res.json({ success: false, message: 'Data is already marked as spam.' });
    }
    
    const spamData = new SpamModel({
      type,
      data,
      spam: true,
    });
    await spamData.save();
    res.json({ success: true, message: 'Data marked as spam and stored in the database.' });
  }catch (error) {
    console.error('Error storing spam data:', error);
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

app.get('/api/get-spam-header', async (req, res) => {
  try {
    const spamData = await SpamModel.find({ type: 'header', spam: true });
    res.json(spamData);
  } catch (error) {
    console.error('Error fetching spam Header data:', error);
    res.status(500).json({ success: false, message: 'Something went wrong. Please try again.' });
  }
})

const AadharDataSchema = new mongoose.Schema({
  aadharNumber: String,
  name: String,
  phoneNumber: String,
  address: String,
  feedback: String,
  reportedUrls: [String],
});

const AadharData = mongoose.model('AadharData', AadharDataSchema);

const ReportSchema = new mongoose.Schema({
  url: String,
  createdAt: { type: Date, default: Date.now },
});

const Report = mongoose.model('Report', ReportSchema);

app.post('/submit', async (req, res) => {
  try {
    const { aadharNumber, name, phoneNumber, address, feedback, reportedUrls } = req.body;

    const newData = new AadharData({
      aadharNumber,
      name,
      phoneNumber,
      address,
      feedback,
      reportedUrls,
    });

    await newData.save();

    res.status(201).json({ message: 'Data saved successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
});
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});