const MessagesSchema = require("../models/Messages");
const User = require("../models/User");


//create a post
exports.newMessage = async (req, res) => {
  // const newMessage = new MessagesSchema(req.body);
  // try {
  //   const message = await newMessage.save();
  //   return res.status(200).json(message);
  // } catch (err) {
  //   return res.status(500).json({ error: err });
  // }
  const { conversationId, senderId, text } = req.body;

  try {
    const newMessage = await MessagesSchema.create({
      conversationId,
      senderId,
      text,
    });
    //   console.log(newMessage)
    // You can optionally populate senderId here if needed
    const populatedMessage = await MessagesSchema.populate(
      newMessage,
      "senderId",
      "-password"
    );

    return res.status(200).json(populatedMessage);
  } catch (err) {
    console.error(err);
    return res.status(500).json({ error: "Error creating a new message." });
  }
};

exports.getMessages = async (req, res) => {
  // try {
  //   const messages = await MessagesSchema.find({
  //     conversationId: req.params.conversationId,
  //   });
  //   return res.status(200).json(messages);
  // } catch (err) {
  //   console.log(err);
  //   return res.status(500).json({ error: err });
  // }
  try {
    const messages = await MessagesSchema.find({
      conversationId: req.params.conversationId,
    }).populate("senderId", "-password");
    return res.status(200).json(messages);
  } catch (err) {
    console.log(err);
    return res.status(500).json({ error: err });
  }
};
