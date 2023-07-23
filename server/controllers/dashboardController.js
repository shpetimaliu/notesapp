const Notes = require("../models/Notes");
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

exports.viewNote = async (req, res) => {
  const note = await Note.findById({ _id: req.params.id })
    .where({
      user: req.user.id,
    })
    .lean();

  if (note) {
    res.render("dashboard/view-notes", {
      noteId: req.params.id,
      note,
      layout: "../views/layouts/dashboard",
    });
  } else {
    res.send("Something went wrong, please try again later!");
  }
};

exports.updateNote = async (req, res) => {
  try {
    await Note.findOneAndUpdate(
      { _id: req.params.id },
      { title: req.body.title, body: req.body.body, updatedAt: Date.now() }
    ).where({ user: req.user.id });

    res.redirect("/dashboard");
  } catch (err) {
    console.log(err);
  }
};

exports.deleteNote = async (req, res) => {
  try {
    await Note.deleteOne({ _id: req.params.id }).where({ user: req.user.id });
    res.redirect("/dashboard");
  } catch (err) {
    console.log(err);
  }
};

exports.addNote = async (req, res) => {
  res.render("dashboard/add", {
    layout: "../views/layouts/dashboard",
  });
};

exports.addSubmitNote = async (req, res) => {
  try {
    req.body.user = req.user.id;
    await Note.create(req.body);
    res.redirect("/dashboard");
  } catch (error) {
    console.log(error);
  }
};

exports.dashboardSearch = async (req, res) => {
  try {
    res.render("dashboard/search", {
      searchResult: "",
      layout: "../views/layouts/dashboard",
    });
  } catch (err) {
    console.log(err);
  }
};

exports.dashboardSearchSubmit = async (req, res) => {
  try {
    let searchTerm = req.body.searchTerm;
    const searchRegex = searchTerm.replace(/[^a-zA-Z0-9]/g, "");

    const searchResult = await Notes.find({
      $or: [
        { title: { $regex: new RegExp(searchRegex, "i") } },
        { body: { $regex: new RegExp(searchRegex, "i") } },
      ],
    }).where({ user: req.user.id });

    res.render("dashboard/search", {
      searchRes,
      layout: "/views/layouts/dashboard",
    });
  } catch (err) {
    console.log(err);
  }
};
