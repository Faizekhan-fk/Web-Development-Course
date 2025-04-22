const express = require('express');
const mongoose = require('mongoose');
const employees = require('./models/employees');

const app = express();
const port = 3000;

// Connect to MongoDB
mongoose.connect('mongodb://127.0.0.1:27017/company', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => {
  console.log('MongoDB connected');
}).catch(err => {
  console.error('MongoDB connection error:', err);
});

// Set EJS as the view engine
app.set('view engine', 'ejs');

// Home route
app.get('/', (req, res) => {
  res.render('index', { foo: 'FOO' });
});



// Generate dummy employees
app.get('/generate', async (req, res) => {

    let randomNames = [
        "Ayaan", "Zara", "Hassan", "Fatima", "Usman", "Laiba", "Ali", "Areeba", "Bilal", "Noor"
      ];
      
      let randomLang = [
        "JavaScript", "Python", "Java", "C++", "PHP", "Ruby", "Go", "TypeScript", "Swift", "Kotlin"
      ];
      
      let randomCities = [
        "Lahore", "Karachi", "Islamabad", "Rawalpindi", "Multan", "Faisalabad", "Quetta", "Peshawar"
      ];
      
      let randomSalary = [
        50000, 70000, 85000, 95000, 100000, 120000, 150000, 180000, 200000, 250000
      ];
      

      function getRandomItem(arr) {
        return arr[Math.floor(Math.random() * arr.length)];
      }
      
    try {
      const results = [];
  
      for (let i = 0; i < 1; i++) {
        let employee = await employees.create({
            name: getRandomItem(randomNames),
            salary: getRandomItem(randomSalary),
            language: getRandomItem(randomLang),
            city: getRandomItem(randomCities)
          });          
  
        results.push(employee);
      }
  
      // ✅ Send JSON response
      res.json({ success: true, data: results });
  
    } catch (error) {
      console.error(error);
      res.status(500).json({ success: false, message: 'Error generating employees' });
    }
  });
  

// Start the server
app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
