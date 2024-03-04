const Reactions = require("../models/React")
const mongoose = require("mongoose")

exports.postReact = async (req, res) => {
  try {
    const { postRef, react } = req.body;
    const check = await Reactions.findOne({
      postRef: postRef,
      reactBy: req.user.id,
    });
    // console.log(check)
    // console.log(postRef)
    if (check == null) {
      const newReact = new Reactions({
        react: react,
        postRef: postRef,
        reactBy: req.user.id,
      });
      await newReact.save();
      res.status(200).json({message:`${react} is newly added success`})

    } else {
      if (check.react == react) {
        await Reactions.findByIdAndRemove(check._id);
        res.status(200).json({message:`${react} is remove success`})

      } else {
        await Reactions.findByIdAndUpdate(check._id, {
          react: react,
        });
        res.status(200).json({message:`${react} is updated success`})

      }
    }
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};


exports.getReacts = async (req, res) => {
  try {
    const reactsArray = await Reactions.find({ postRef: req.params.id });

    /*
    const check1 = reacts.find(
      (x) => x.reactBy.toString() == req.user.id
    )?.react;
    */

    const check = await Reactions.findOne({
      postRef: req.params.id,
      reactBy: req.user.id,
    });
    
    const newReacts = reactsArray.reduce((group, react) => {
      let key = react["react"];
      group[key] = group[key] || [];
      group[key].push(react);
      return group;
    }, {});



    const reacts = [
      {
        react: "like",
        count: newReacts.like ? newReacts.like.length : 0,
      },
      {
        react: "love",
        count: newReacts.love ? newReacts.love.length : 0,
      },
      {
        react: "haha",
        count: newReacts.haha ? newReacts.haha.length : 0,
      },
      {
        react: "sad",
        count: newReacts.sad ? newReacts.sad.length : 0,
      },
      {
        react: "wow",
        count: newReacts.wow ? newReacts.wow.length : 0,
      },
      {
        react: "angry",
        count: newReacts.angry ? newReacts.angry.length : 0,
      },
    ];

    res.json({
      reacts,
      check: check?.react,
      total: reactsArray.length,
    });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

