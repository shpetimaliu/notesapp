exports.dashboard = async (req, res) => {
  const locals = {
    title: "Dashboard",
    description: "NotesApp Build with NodeJS",
  };

  res.render("dashboard/index", {
    locals,
    layout: "../views/layouts/dashboard",
  });
};
