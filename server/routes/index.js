const express = require('express');
const router = express.Router();
const Url = require('../models/url');
const validator = require('validator');

router.post('/shorten', async (req, res) => {
    const { original_url } = req.body;
    if (!original_url || !validator.isURL(original_url)) {
        return res.status(400).json({ error: 'original_url is required' });
    }
    try {
        const url = new Url({ original_url });
        await url.save();
        res.json({
            original_url,
            short_url: `${req.headers.host}/${url.short_url}`,
        });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

router.get('/:short_url', async (req, res) => {
    try {
        const url = await Url.findOne({ short_url: req.params.short_url });
        if (url) {
            res.redirect(url.original_url);
        } else {
            res.status(404).json('URL not found');
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

module.exports = router;
