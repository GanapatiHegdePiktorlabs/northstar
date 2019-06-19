const express = require('express');
const router = express.Router();

const user_controller = require('../controllers/login.controller');
const goal_controller = require('../controllers/goal.controller');
const feed_controller = require('../controllers/feed.controller');
const notification_controller=require('../controllers/notification.controller');

router.post('/login', user_controller.login);
router.get('/getGoals/:userId', goal_controller.getGoal);
router.get('/goal/:goalId', goal_controller.goalLandingDetail);
router.get('/createfeed', feed_controller.create);
router.get('/likefeed', feed_controller.like);
router.get('/editfeed', feed_controller.edit);
router.post('/createGoal', goal_controller.createGoal);
router.post('/registerdevice', notification_controller.registerDevice);
router.post('/sendnotification', notification_controller.sendNotification);
module.exports = router;
