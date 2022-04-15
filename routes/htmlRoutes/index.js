const path = require('path');
const router = require('express').Router();

router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname,'../../client/index.html'));
  });
  
router.get('/animals', (req, res) => {
    res.sendFile(path.join(__dirname, '../../client/animals.html'))
});
  
router.get('/zookeepers', (req, res) => {
    res.sendFile(path.join(__dirname, '../../client/zookeepers.html'));
});
  
router.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../../client/index.html'));
});

module.exports = router;