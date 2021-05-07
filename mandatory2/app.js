const express = require('express');
const app = express();
const contactRouter = require('./routes/contact');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// Set static folders
app.use(express.static('public'));
app.use(contactRouter.router);

const fs = require('fs');
const { createVerify } = require('crypto');

const header = fs.readFileSync(
  __dirname + '/public/elements/header.html',
  'utf-8'
);
const nav = fs.readFileSync(
  __dirname + '/public/elements/navbar.html',
  'utf-8'
);
const sidebar = fs.readFileSync(__dirname + '/public/elements/sidebar.html')
const footer = fs.readFileSync(
  __dirname + '/public/elements/footer.html',
  'utf-8'
);
const index = fs.readFileSync(__dirname + '/public/frontpage.html', 'utf-8');
const repos = fs.readFileSync(__dirname + '/public/repos.html', 'utf-8');
const contact = fs.readFileSync(__dirname + '/public/contact.html', 'utf-8');
const about = fs.readFileSync(__dirname + '/public/pages/about.html', 'utf-8');
const cv = fs.readFileSync(__dirname + '/public/pages/cv.html', 'utf-8');
const skills = fs.readFileSync(
  __dirname + '/public/pages/experience.html',
  'utf-8'
);
const projects = fs.readFileSync(
  __dirname + '/public/pages/projects.html',
  'utf-8'
);

// routes

app.get('/', (req, res) => {
  res.send(header + nav + sidebar + index + footer);
});

app.get('/about', (req, res) => {
  res.send(header + nav + sidebar + about + footer);
});

app.get('/cv', (req, res) => {
  res.send(header + nav + sidebar + cv + footer);
});

app.get('/skills', (req, res) => {
  res.send(header + nav + sidebar + skills + footer);
});

app.get('/projects', (req, res) => {
  res.send(header + nav + sidebar + projects + footer);
});

app.get('/repos', (req, res) => {
  res.send(header + nav + sidebar + repos + footer);
});

app.get('/contact', (req, res) => {
  res.send(header + nav + sidebar + contact + footer);
});

// Listen

const PORT = process.env.PORT || 8080;

app.listen(PORT, (error) => {
  if (error) {
    console.log(error);
  }
  console.log('Server is running on port', Number(PORT));
});
