const Note = require("../models/Notes");
const mongoose = require("mongoose");

exports.dashboard = async (req, res) => {
  const locals = {
    title: "Dashboard",
    description: "NotesApp Build with NodeJS",
  };

  res.render("dashboard/index", {
    userName: req.user.firstName,
    locals,
    layout: "../views/layouts/dashboard",
  });
};
