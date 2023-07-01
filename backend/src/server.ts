import express from "express";
import db from "./db";
import cors from "cors";
import FormInstance from "./model";
import bodyParser from "body-parser";
 

const port = 3500;
const app = express();

app.set("view engine", "ejs");
app.use(bodyParser.json());
app.use(express.json());

app.use(
  cors({
    origin: "*",
  })
);

// function createPassHash(pass: string) {
//   bcrypt.genSalt(10).then((salt) => {
//     return bcrypt.hash(pass, salt);
//   });
// }

// createPassHash("333");

//GET-METHOD-SERVER
app.get("/forms", async (req, res) => {
  const record = await FormInstance.findAll();
  return res.status(201).json(record);
});

//POST-METHOD-SERVER
app.post("/forms", async (req, res) => {
  try {
    // var salt = await bcrypt.genSalt(10);
    // req.body.password = await bcrypt.hash(req.body.password, salt);
    const record = await FormInstance.create(req.body);
    return res.status(201).json(record);
  } catch (error) {
    console.log(error);
    return res.status(500).json(error);
  }
});

//PUT-METHOD-SERVER
app.put(`/forms/:id`, async (req, res) => {
  try {
    // var salt = await bcrypt.genSalt(10);
    // req.body.password = await bcrypt.hash(req.body.password, salt);

    const record = await FormInstance.update(
      { name: req.body.name,
      surname: req.body.surname,
    address:req.body.address,
  city:req.body.city,
  country:req.body.country,
email:req.body.email,
phoneNumber:req.body.phoneNumber},
      {
        where: {
          id: req.body.id,
        },
      }
    );

    return res.status(201).json({ record, msg: "Successfully UPDATED" });
  } catch (error) {
    console.log(error);
    return res.status(500).json(error);
  }
});

//DELETE-METHOD-SERVER
app.delete(`/forms/:id`, async (req, res) => {
  try {
    const record = await FormInstance.destroy({
      where: {
        id: req.body.id,
      },
    });
    return res.status(201).json(req.body.id);
  } catch (error) {
    console.log(error);
    return res.status(500).send("RECORD DELETED");
  }
});

app.listen(port, () => {
  db.authenticate().then(() => {
    console.log("Connected and synced to db...."); //same si ajo sync, mi kriju tabelat
  });
});
