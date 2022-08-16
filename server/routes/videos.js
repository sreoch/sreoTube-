import express from 'express';
import {
	addVideo,
	updateVideo,
	deleteVideo,
	getVideo,
	addView,
	random,
	trend,
	sub,
	getByTag,
	search,
} from '../controllers/video.js';
import { verifyToken } from '../verifyToken.js';

const router = express.Router();

// create a video
router.post('/', verifyToken, addVideo);

// update a video
router.put('/:id', verifyToken, updateVideo);

// delete a video
router.delete('/:id', verifyToken, deleteVideo);

// get a video
router.get('/find/:id', getVideo);

// increase views
router.put('/view/:id', addView);

// get trending vids
router.get('/trend', trend);

// get random vids (homepage)
router.get('/random', random);

// get subscribed videos
router.get('/sub', verifyToken, sub);

// get videos by tags
router.get('/tags', getByTag);

// search for vids
router.get('/search', search);

export default router;
