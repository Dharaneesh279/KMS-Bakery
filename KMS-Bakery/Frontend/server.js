const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

// Serve static files (CSS, images, fonts, etc.)
app.use(express.static(path.join(__dirname)));
app.use('/Images', express.static(path.join(__dirname, 'Images')));
app.use('/fonts', express.static(path.join(__dirname, 'fonts')));

// Home route - redirect to Home.html
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'Home.html'));
});

// Home page
app.get('/home', (req, res) => {
    res.sendFile(path.join(__dirname, 'Home.html'));
});

// Cakes page
app.get('/cakes', (req, res) => {
    res.sendFile(path.join(__dirname, 'cakes.html'));
});

// Cookies page
app.get('/cookies', (req, res) => {
    res.sendFile(path.join(__dirname, 'cookies.html'));
});

// Sweets page
app.get('/sweets', (req, res) => {
    res.sendFile(path.join(__dirname, 'sweets.html'));
});

// Savouries page
app.get('/savouries', (req, res) => {
    res.sendFile(path.join(__dirname, 'savouries.html'));
});

//Map Sathyamangalam
app.get('/map/sathyamangalam', (req, res) => {
    res.redirect('https://maps.app.goo.gl/zSUEVkYbHzsLtd6s8?g_st=aw');
});

//Map Karumathampatti
app.get('/map/karumathampatti', (req, res) => {
    res.redirect('https://maps.app.goo.gl/jDgJAsZYkEzVsEon8?g_st=aw');
});

//Map Pulliyampatti1
app.get('/map/pulliyamapatti1', (req, res) => {
    res.redirect('https://maps.app.goo.gl/heiQbg1RhryTWHCh6');
});

//Map Pulliyampatti2
app.get('/map/pulliyamapatti2', (req, res) => {
    res.redirect('https://maps.app.goo.gl/iA1uHQdqiiWVmRQX8');
});

//Map Pulliyampatti2
app.get('/map/annur', (req, res) => {
    res.redirect('https://maps.app.goo.gl/2nq2fHDKEe3xTkZu9');
});

// Chips page
app.get('/chips', (req, res) => {
    res.sendFile(path.join(__dirname, 'savouries.html'));
});

// Bun page
app.get('/bun', (req, res) => {
    res.sendFile(path.join(__dirname, 'cookies.html'));
});

// Branches page
app.get('/branches', (req, res) => {
    res.sendFile(path.join(__dirname, 'Branches.html'));
});

// 404 handler
app.use((req, res) => {
    res.status(404).send(`
        <!DOCTYPE html>
        <html>
        <head>
            <title>404 - Page Not Found</title>
            <style>
                body {
                    font-family: Arial, sans-serif;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    height: 100vh;
                    margin: 0;
                    background-color: #f5f5f5;
                }
                .error-container {
                    text-align: center;
                    padding: 40px;
                    background: white;
                    border-radius: 10px;
                    box-shadow: 0 4px 6px rgba(0,0,0,0.1);
                }
                h1 { color: #462A11; font-size: 72px; margin: 0; }
                p { color: #666; font-size: 18px; }
                a { 
                    color: #A36767; 
                    text-decoration: none;
                    font-weight: bold;
                }
            </style>
        </head>
        <body>
            <div class="error-container">
                <h1>404</h1>
                <p>Page not found</p>
                <a href="/">Return to Home</a>
            </div>
        </body>
        </html>
    `);
});

// Start server
app.listen(PORT, () => {
    console.log(`KMS Bakery Server running on http://localhost:${PORT}`);
    console.log(`\nAvailable routes:`);
    console.log(`- http://localhost:${PORT}/home`);
    console.log(`- http://localhost:${PORT}/cakes`);
    console.log(`- http://localhost:${PORT}/cookies`);
    console.log(`- http://localhost:${PORT}/sweets`);
    console.log(`- http://localhost:${PORT}/savouries`);
    console.log(`- http://localhost:${PORT}/branches`);
});