const express = require("express");
const router = express.Router();
const { Notification } = require("../model/user"); 

// POST: Create a new notification
router.post("/homeScreenData", async (req, res) => {
  try {
    const { title, date, description } = req.body;

    const newNotification = new Notification({
      title,
      date,
      description,
    });

    await newNotification.save();

    res.status(201).json({ message: "Notification created successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "An error occurred while creating the notification" });
  }
});

// GET: Fetch all notifications
router.get("/homeScreenData", async (req, res) => {
    try {
      const notifications = await Notification.find();
      res.status(200).json(notifications);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "An error occurred while fetching notifications" });
    }
  });

module.exports = router;
