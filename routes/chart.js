const express = require("express");
const router = express.Router();
require("dotenv").config();

//import model
const model = require("../models/data");

//get all data
router.get("/getData", async (req, res) => {
  const Data = await model.find({});
  res.json(Data);
});

//Sweet data-filtered data that requires particular field
router.get("/sweet-data/year",async(req,res)=>{
  try{
    const Data = await model.find({});
    const sweetData= Data.filter(entry => entry.start_year && entry.end_year);
    res.json(sweetData);
  }
  catch (error) {
    console.error("Error retrieving filtered data:", error);
    res
      .status(500)
      .json({ error: "An error occurred while retrieving filtered data" });
  }
});

router.get("/sweet-data/country",async(req,res)=>{
  try{
    const Data = await model.find({});
    const sweetData= Data.filter(entry => entry.country);
    res.json(sweetData);
  }
  catch (error) {
    console.error("Error retrieving filtered data:", error);
    res
      .status(500)
      .json({ error: "An error occurred while retrieving filtered data" });
  }
});

router.get("/sweet-data/region",async(req,res)=>{
  try{
    const Data = await model.find({});
    const sweetData= Data.filter(entry => entry.region);
    res.json(sweetData);
  }
  catch (error) {
    console.error("Error retrieving filtered data:", error);
    res
      .status(500)
      .json({ error: "An error occurred while retrieving filtered data" });
  }
});

//filtered-data-data that contains filters based on a condition or field
//filter data by region
router.get("/filtered-data/region/:region", async (req, res) => {
  try {
    const { region } = req.params;
    let query = { region: region };
    const filteredData = await model.find(query);
    res.json(filteredData);
  } catch (error) {
    console.error("Error retrieving filtered data:", error);
    res
      .status(500)
      .json({ error: "An error occurred while retrieving filtered data" });
  }
});

//filter data by country
router.get("/filtered-data/country/:country", async (req, res) => {
  try {
    const { country } = req.params;
    let query = { country: country };
    const filteredData = await model.find(query);
    res.json(filteredData);
  } catch (error) {
    console.error("Error retrieving filtered data:", error);
    res
      .status(500)
      .json({ error: "An error occurred while retrieving filtered data" });
  }
});

//filter data by topic
router.get("/filtered-data/topic/:topic", async (req, res) => {
  try {
    const { topic } = req.params;
    let query = { topic: topic };
    const filteredData = await model.find(query);
    res.json(filteredData);
  } catch (error) {
    console.error("Error retrieving filtered data:", error);
    res
      .status(500)
      .json({ error: "An error occurred while retrieving filtered data" });
  }
});

//filter data by sector
router.get("/filtered-data/sector/:sector", async (req, res) => {
  try {
    const { sector } = req.params;
    let query = { sector: sector };
    const filteredData = await model.find(query);
    res.json(filteredData);
  } catch (error) {
    console.error("Error retrieving filtered data:", error);
    res
      .status(500)
      .json({ error: "An error occurred while retrieving filtered data" });
  }
});

//filter data by pestle
router.get("/filtered-data/pestle/:pestle", async (req, res) => {
  try {
    const { pestle } = req.params;
    let query = { pestle: pestle };
    const filteredData = await model.find(query);
    res.json(filteredData);
  } catch (error) {
    console.error("Error retrieving filtered data:", error);
    res
      .status(500)
      .json({ error: "An error occurred while retrieving filtered data" });
  }
});

//filter data by source
router.get("/filtered-data/source/:source", async (req, res) => {
  try {
    const { source } = req.params;
    let query = { source: source };
    const filteredData = await model.find(query);
    res.json(filteredData);
  } catch (error) {
    console.error("Error retrieving filtered data:", error);
    res
      .status(500)
      .json({ error: "An error occurred while retrieving filtered data" });
  }
});

//filter data by end year
router.get("/filtered-data/end_year/:year", async (req, res) => {
  try {
    const { year } = req.params;
    const yearNumber = parseInt(year);
    let query = { end_year: yearNumber };
    const filteredData = await model.find(query);
    res.json(filteredData);
  } catch (error) {
    console.error("Error retrieving filtered data:", error);
    res
      .status(500)
      .json({ error: "An error occurred while retrieving filtered data" });
  }
});

module.exports = router;
