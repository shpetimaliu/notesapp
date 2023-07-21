exports.homepage = async (req, res) => {
  const locals = {
    title: "Saturn NotesApp",
    description: "NotesApp Build with NodeJS",
  };

  res.render("index", {
    locals,
    layout: "../views/layouts/front-page",
  });
};

exports.about = async (req, res) => {
  const locals = {
    title: "About | Saturn NotesApp",
    description: "NotesApp Build with NodeJS",
  };
  res.render("about", locals);
};
