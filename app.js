import express from "express";
import * as url from "url";
import hbs from "hbs";

const app = express();
const port = 8080;
const __dirname = url.fileURLToPath(new URL(".", import.meta.url));

//handlers
app.set("view engine", "hbs");
hbs.registerPartials(__dirname + "/views/partials", function (err) {});

// Servir contenido Estático
app.use(express.static("public"));

app.get("/", (req, res) => {
  res.render("home", {
    nombre: "Axel Jimenez",
    titulo: "Curso de Node",
  });
});

app.get("/generic", (req, res) => {
  res.render("generic", {
    nombre: "Axel Jimenez",
    titulo: "Curso de Node",
  });
});

app.get("/elements", (req, res) => {
  res.render("elements", {
    nombre: "Axel Jimenez",
    titulo: "Curso de Node",
  });
});

app.get("/hola-mundo", (req, res) => {
  res.send("Hola mundo en su respectiva ruta");
});

app.get("/generic", (req, res) => {
  res.sendFile(__dirname + "/public/generic.html");
});

app.get("/elements", (req, res) => {
  res.sendFile(__dirname + "/public/elements.html");
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
