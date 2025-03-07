const express = require('express');
const app = express();
const port = 3000;
app.use(express.json());
// Import routes
const userRoutes = require('./routes/userRoutes');
const fileRoutes = require('./routes/fileRoutes');
// Use routes
app.use('/users', userRoutes);
app.use('/files', fileRoutes);
// 404 handler for undefined routes
app.use((req, res) => {
    res.status(404).json({ error: 'Route not found' });
});
// Global error handler
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ error: 'Something went wrong!' });
});
app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
}).on('error', (err) => {
    console.error('Server error:', err);
});