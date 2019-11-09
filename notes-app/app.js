const validator = require("validator");
const chalk = require("chalk");
const yargs = require("yargs");

const getNotes = require("./notes.js");

// Create Add command
yargs.command({
  command: "add",
  describe: "Add a note",
  handler: function() {
    console.log("Adding a note");
  }
});

// Create Remove Command
yargs.command({
  command: "remove",
  describe: "Remove a note",
  handler: function() {
    console.log("Removing a note");
  }
});

// Create List Command
yargs.command({
  command: "list",
  describe: "List all the notes",
  handler: function() {
    console.log("List of notes here..");
  }
});

// Create Read Command
yargs.command({
  command: "read",
  describe: "Read a single note",
  handler: function() {
    console.log("Content of note");
  }
});

console.log(yargs.argv);
