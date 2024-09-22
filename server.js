const express = require('express');
const app = express();


const calculatorRoutes = require ('./routes/calculatorRoutes');
app.use(express.json());

app.use('/api/calculate', calculatorRoutes);
const PORT = process.env.PORT || 4000;
app.listen(PORT,() => {
    console.log(`Server is running on port ${PORT}`);
});