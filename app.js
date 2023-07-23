require("dotenv").config();

const express = require("express");
const expressLayouts = require("express-ejs-layouts");
const methodOverride = require("method-override");
const connectDB = require("./server/config/db");
const session = require("express-session");
const passport = require("passport");
const MongoStore = require("connect-mongo");

const app = express();
const port = 3000 || process.env.PORT;

const twentyFourHoursInMilliseconds = 24 * 60 * 60 * 1000;
const expirationDate = new Date(Date.now() + twentyFourHoursInMilliseconds);

app.use(
  session({
    secret: process.env.SECRET_COOKIE,
    resave: false,
    saveUninitialized: true,
    store: MongoStore.create({
      mongoUrl: process.env.MONGODB_URI,
    }),
    cookie: {
      expires: expirationDate, // Set the expiration date for the cookie -- Vendosni datën e skadencës për cookie-t
      httpOnly: true,
    },
  })
);
app.use(passport.initialize());
app.use(passport.session());

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(methodOverride("_method"));

// Connect Database
connectDB();

// Static Files
app.use(express.static("public"));

// Templating Engine
app.use(expressLayouts);
app.set("layout", "./layouts/main");
app.set("view engine", "ejs");

// Routers
app.use("/", require("./server/routes/auth"));
app.use("/", require("./server/routes/index"));
app.use("/", require("./server/routes/dashboard"));

// Handle 404
app.get("*", (req, res) => {
  res.status(404).render("404");
});

// Listen Port
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
