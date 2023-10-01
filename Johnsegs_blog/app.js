const express = require("express");
const morgan = require("morgan");
const mongoose = require("mongoose");
const { result } = require("lodash");
const blogRoutes = require("./routes/blogsRoutes");
// const { connectToDb, getDb} = require("./db");

// express app
const app = express();

// CONNECT TO MONGODB

const dbURL = "mongodb://127.0.0.1:27017/johnsegsBlogs";
mongoose
  .connect(dbURL, { useNewUrlParser: true })
  .then((result) => app.listen("2000"))
  .catch((err) => console.log(err));

// register view enginw
app.set("view engine", "ejs");

// middleware  and static file
app.use(express.static("public"));

app.use(morgan("dev"));

app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.redirect("/blogs");
  // console.log(blogs.length)
});
app.get("/about", (req, res) => {
  res.render("about", {
    title: "ABOUT",
  });
});
// blog routes

app.use("/blogs", blogRoutes);

// 404 page
app.use((req, res) => {
  res.status(404).render("404", {
    title: "404",
  });
});
// const express = require("express");
// const morgan = require("morgan");
// const mongoose = require("mongoose");
// const Blog = require("./models/blog");

// // express app
// const app = express();

// // CONNECT TO MONGODB
// const dbURL = "mongodb://127.0.0.1:27017/johnsegsBlogs";
// mongoose
//   .connect(dbURL, { useNewUrlParser: true, useUnifiedTopology: true })
//   .then(() => {
//     app.listen(3000, () => {
//       console.log("Server is running on http://localhost:3000");
//     });
//   })
//   .catch((err) => console.log("Error connecting to MongoDB:", err));

// // register view engine
// app.set("view engine", "ejs");

// // middleware and static file
// app.use(express.static("public"));
// app.use(morgan("dev"));
// app.use(express.urlencoded({ extended: true }));

// // routes
// app.get("/", (req, res) => {
//   res.redirect("/blogs");
// });

// app.get("/about", (req, res) => {
//   res.render("about", {
//     title: "ABOUT",
//   });
// });

// app.get("/blogs/create", (req, res) => {
//   res.render("create", {
//     title: "CREATE A NEW BLOG",
//   });
// });
// app.get("/blogs", (req, res) => {
//   Blog.find()
//     .sort({ createdAt: -1 })
//     .then((result) => {
//       res.render("index", { title: "All Blogs", blogs: result });
//     })
//     .catch((err) => {
//       console.log(err);
//     });
// });

// app.post("/blogs", (req, res) => {
//   const blog = new Blog(req.body);
//   blog
//     .save()
//     .then((result) => {
//       res.redirect("/blogs");
//     })
//     .catch((err) => {
//       console.log(err);
//     });
// });

// app.get("/blogs/:id", (req, res) => {
//   const id = req.params.id;
//   Blog.findById(id)
//     .then((result) => {
//       res.render("details", { blog: result, title: "Blog details" });
//     })
//     .catch((err) => {
//       console.log(err);
//     });
// });

// app.delete("/blogs/:id", (req, res) => {
//   const id = req.params.id;
//   Blog.findByIdAndDelete(id)
//     .then((result) => {
//       res.json({ redirect: "/blogs" });
//     })
//     .catch((err) => {
//       console.log(err);
//     });
// });

// // 404 page
// app.use((req, res) => {
//   res.status(404).render("404", {
//     title: "404",
//   });
// });
