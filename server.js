const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 8080;

// Serve static UI assets
app.use(express.static(path.join(__dirname, 'public')));

// Simple API point for them to test backend connectivity
app.get('/api/status', (req, res) => {
    res.json({ 
        status: "UP", 
        environment: "Red Hat OpenShift Dev Spaces", 
        timestamp: new Date() 
    });
});

app.listen(PORT, () => {
    console.log(`🚀 Application server seamlessly running on port ${PORT}`);
});
