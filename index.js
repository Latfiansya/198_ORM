const express = require('express');
const app = express();
const db = require('./models');
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Test database connection and sync models
// Test database connection and sync models
db.sequelize.sync()
    .then(() => {
        console.log('✅ Database synced successfully');
        app.listen(PORT, () => {
        console.log(`🚀 Server is running on http://localhost:${PORT}`);
        });
    })
    .catch((err) => {
        console.error('❌ Failed to sync database:', err);
});


// CRUD Endpoints for Komik model

// membuat fungsi post komik
app.post('/komik', async (req, res) => {
    const data = req.body;
    try {
        const komik = await db.Komik.create(data);
        res.send(komik);
    } catch (error) {
        res.status(500).send({ message: error.message });
    }
});

// membuat fungsi get komik
app.get('/komik', async (req, res) => {
    try {
        const komik = await db.Komik.findAll();  
        res.send(komik);
    } catch (error) {
        res.status(500).send({ message: error.message });
    }   
});

// membuat fungsi put komik (update komik)
app.put('/komik/:id', async (req, res) => {
    const id = req.params.id;
    const data = req.body;
    try {
        const komik = await db.Komik.findByPk(id);
        if (!komik) {
            return res.status(404).send({ message: 'Komik not found' });
        }
        await komik.update(data);
        res.send({ message: 'Komik updated successfully', komik });
    } catch (error) {
        res.status(500).send({ message: error.message });
    }
});


// membuat fungsi delete komik
app.delete('/komik/:id', async (req, res) => {
    const id = req.params.id;
    try {
        const komik = await db.Komik.findByPk(id);
        if (!komik) {
            return res.status(404).send({ message: 'Komik not found' });
        }
        await komik.destroy();
        res.send({ message: 'Komik deleted successfully' });
    } catch (error) {
        res.status(500).send({ message: error.message });
    }
});