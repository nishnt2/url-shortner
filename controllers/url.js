const shortid = require('shortid');
const URL = require('../models/url');

async function handleGenerateShortUrl(req, res) {
  const body = req.body;
  if (!body.url) return res.status(400).json({ msg: 'URL is requires' });
  const shortId = shortid();
  await URL.create({
    shortId: shortId,
    redirectURL: body.url,
    visitHistory: [],
  });

  res.json({
    id: shortId,
  });
}

module.exports = { handleGenerateShortUrl };
