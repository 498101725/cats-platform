const express = require("express");
const router = express.Router();
const fs = require("fs");
const path = require("path");
const uniqid = require("uniqid");

router.post("/upload", (req, res) => {
  if (!req.files || !req.files.image) {
    res.status(400).send("No files were uploaded.");
    return;
  }
  const imageFile = req.files.image;
  const imageName = uniqid() + "." + imageFile.name.split(".").pop();
  const uploadPath = path.resolve(__dirname, "../public/uploads/", imageName);

  imageFile.mv(uploadPath, (err) => {
    if (err) {
      return res.status(500).send(err);
    }
    res.json({ path: "/uploads/" + imageName });
  });
});

// re-usable function to read data file;
const readCats = () => {
  const catsFile = fs.readFileSync("./data/catsList.json");
  const catsData = JSON.parse(catsFile);
  return catsData;
};

const writeCats = (data) => {
  fs.writeFileSync("./data/catsList.json", JSON.stringify(data));
};

// get endpoint for catList;
router.get("/", (req, res) => {
  // read the file
  const catsData = readCats();

  // strip down the cats data
  const strippedData = catsData.map(({ id, name, image, age }) => {
    return { id, name, image, age };
  });
  // respond with the stripped down data
  res.json(strippedData);
});

// get endpoint for individual cat;
router.get("/:id", (req, res) => {
  // read the file
  const cats = readCats();

  // get the target cat whose id matches the requested id;
  const targetCat = cats.find((cat) => {
    return cat.id === req.params.id;
  });

  // check if the cat was found;
  if (!targetCat) {
    return res.status(404).send("cats not exist");
  }

  // respond with the single cat;
  res.json(targetCat);
});

// POST endpoint to add a cat;
router.post("/", (req, res) => {
  const {
    name,
    image,
    age,
    breed,
    personality,
    health,
    gender,
    contact,
    city,
    email,
  } = req.body;

  // make a new cat with unique id;
  const newCat = {
    id: uniqid(),
    name,
    image,
    age,
    breed,
    personality,
    health,
    gender,
    contact,
    city,
    email,
  };

  if (!name || !email) {
    return res.status(400).send("'name', 'email' are mandatory!");
  }

  const regx = /^\S+@\S+\.\S+$/;
  if (!regx.test(email)) {
    return res.status(400).send("this email is not valid");
  }

  // read current cats;
  const catsData = readCats();
  // add to the cats array;
  catsData.push(newCat);
  // write entire new cats to the file;
  writeCats(catsData);
  //respond with the cat created;
  res.status(201).json(newCat);
});

// delete

router.delete(`/:id`, (req, res) => {
  const data = JSON.parse(fs.readFileSync("./data/catsList.json"));
  const foundCat = data.find((cat) => {
    return cat.id === req.params.id;
  });
  if (!foundCat) {
    res.status(404).send("this meow is not there !");
    return;
  }

  const newData = data.filter((cat) => {
    return cat.id !== req.params.id;
  });

  fs.writeFileSync("./data/catsList.json", JSON.stringify(newData, null, 4));
  res.status(200).send("Sussessfully deleted this meow !");
});

module.exports = router;
