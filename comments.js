// Create web server

// Import modules
const express = require('express');
const router = express.Router();
const {getComments, addComment, deleteComment} = require('../controllers/comments');

// Get all comments
router.get('/', getComments);

// Add a comment
router.post('/', addComment);

// Delete a comment
router.delete('/:id', deleteComment);

// Export router
module.exports = router;
