const Note = require("../models/Notes");
const mongoose = require("mongoose");

exports.dashboard = async (req, res, next) => {
  let perPage = 12;
  let page = req.query.page || 1;
  const locals = {
    title: "Dashboard",
    description: "NotesApp Build with NodeJS",
  };

  try {
    Note.aggregate([
      {
        $sort: {
          createdAt: -1,
        },
      },
      {
        $match: { user: mongoose.Types.ObjectId(req.user.id) },
      },
      {
        $project: {
          title: { substr: ["$title", 0, 30] },
          body: { substr: ["$body", 0, 100] },
        },
      },
    ])
      .skip(perPage * page - perPage)
      .limit(perPage)
      .exec(function (err, note) {
        Note.count().exec(function (err, count) {
          if (err) return next(err);

          res.render("dashboard/index", {
            userName: req.user.firstName,
            locals,
            notes,
            layout: "../views/layouts/dashboard",
          });
        });
      });

    const notes = await Note.find({});
    console.log(notes);
  } catch (error) {
    console.log(error);
  }
};
