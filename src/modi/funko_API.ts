import { Funko } from "./funko_scheme.js";
import express from "express";
import "./db.js";

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

/**
 * Añadir un nuevo funko
 */
app.post("/funkos", (req, res) => {
  const funko = new Funko(req.body);

  funko
    .save()
    .then((funko) => {
      res.send(funko);
    })
    .catch((error) => {
      res.send(error);
    });
});

/**
 * obtener todos los funkos
 */
app.get("/funkos", (req, res) => {
  const filter = req.query.id ? { _id: req.query.id.toString() } : {};

  Funko.find(filter)
    .then((funkos) => {
      if (funkos.length !== 0) {
        res.send(funkos);
      } else {
        res.status(404).send();
      }
    })
    .catch(() => {
      res.status(500).send();
    });
});

/**
 * obtener funko por id
 */
// app.get('/funkos/:id', (req, res) => {
//   Funko.findById(req.params.id).then((funko) => {
//     if (!funko) {
//       res.status(404).send();
//     } else {
//       res.send(funko);
//     }
//   }).catch(() => {
//     res.status(500).send();
//   });
// });

/**
 * editar funko segun la ip
 */
app.patch("/funkos/:id", (req, res) => {
  if (!req.body) {
    res.status(400).send({
      error: "Fields to be modified have to be provided in the request body",
    });
  } else {
    Funko.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    })
      .then((funko) => {
        if (!funko) {
          res.status(404).send();
        } else {
          res.send(funko);
        }
      })
      .catch((error) => {
        res.status(400).send(error);
      });
  }
});

/**
 * borrar un funko segun la ip
 */
app.delete("/funkos/:id", (req, res) => {
  Funko.findByIdAndDelete(req.params.id)
    .then((funko) => {
      if (!funko) {
        res.status(404).send();
      } else {
        res.send(funko);
      }
    })
    .catch(() => {
      res.status(400).send();
    });
});

/**
 * por defecto
 */
app.all("/{*splat}", (_, res) => {
  res.status(501).send();
});

app.listen(port, () => {
  console.log(`Server is up on port ${port}`);
});
