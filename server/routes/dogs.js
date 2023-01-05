const express = require('express');
const router = express.Router();

/* GET users listing. */
router.get('/', (req, res) => {
  res.json([
    {id: 1, url: 'https://i.pinimg.com/736x/a2/2e/51/a22e51c68deb18158b13c03aa05e6a55.jpg'},
    {id: 2, url: 'https://cdn.pixabay.com/photo/2017/08/22/23/45/husky-2671006_1280.jpg'},
    {id: 3, url: 'https://img.buzzfeed.com/buzzfeed-static/static/2018-10/19/16/asset/buzzfeed-prod-web-02/sub-buzz-21568-1539979871-1.jpg'},
  ])
});

module.exports = router;
