To apply the CSS for the tailwind classes. You must first run the script from the package.json. 
Type "npm run build" in your terminal while in the "mandatory" folder.
Now you can run the app with "Nodemon app.js"

This project is up and running at erikengel.dk. Although this specific project i altered to Server Side Rendering, and the one one at erikengel.dk is made using jQuery or client side rendering.

The Contact form won't work unless an email and address is provided in a .env file.

The contact.js is set up for gmail atm. If you want to test out my project with a different mail server, you can change line 6 in contact.js. The line that states "host: 'smtp.gmail.com',"
