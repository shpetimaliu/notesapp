const Note = require("../models/Notes");
const mongoose = require("mongoose");

exports.dashboard = async (req, res) => {
  const perPage = 12;
  const page = req.query.page || 1;

  try {
    const notes = await Note.aggregate([
      {
        $match: { user: new mongoose.Types.ObjectId(req.user.id) },
      },
      {
        $sort: {
          createdAt: -1,
        },
      },
      {
        $project: {
          title: { $substr: ["$title", 0, 30] },
          body: { $substr: ["$body", 0, 100] },
        },
      },
      {
        $skip: perPage * page - perPage,
      },
      {
        $limit: perPage,
      },
    ]);

    const count = await Note.count();

    res.render("dashboard/index", {
      userName: req.user.firstName,
      locals: {
        title: "Dashboard",
        description: "NotesApp Build with NodeJS",
      },
      notes,
      layout: "../views/layouts/dashboard",
      current: page,
      pages: Math.ceil(count / perPage),
    });
  } catch (error) {
    console.log(error);
    // Këtu mund të shtoni një përgjigje për gabimin në faqen e erroreve
    res.status(500).send("Something went wrong...");
  }
};
