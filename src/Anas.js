const fs = require("fs");
const path = require("path");
const { exec } = require("child_process");
const rimraf = require("rimraf");

const extractRepoName = require("./extractRepoName");

const handleError = err => {
  if (err) throw err;
};

class Anas {
  static instance;

  constructor(options) {
    if (this.instance) {
      return this.instance;
    }
    this.repository = options.repository;
    this.repositoryName = extractRepoName(this.repository);
    this.copyDestination = options.copyDestination;
    this.cloneDestination = options.cloneDestination;
    this.statusPath = path.resolve("/tmp", "anas.json");
    this.instance = this;
  }

  get status() {
    return JSON.parse(fs.readFileSync(this.statusPath, { encoding: "utf8" }));
  }

  set status(files) {
    fs.writeFileSync(this.statusPath, JSON.stringify({ files }), {
      encoding: "utf8"
    });
  }

  copy(files) {
    exec(this.cloneCmd(), (err, stdout) => {
      if (err) {
        console.error(`exec error: ${err}`);
        return;
      }
      console.log(stdout);
      console.log("Copying source file to destination ...");
      files.forEach(file => {
        fs.copyFileSync(this.sourceFile(file), this.destinationFile(file));
      });
      this.status = files;
    });
  }

  sourceFile(file) {
    return path.resolve(this.cloneDestination, this.repositoryName, file);
  }

  destinationFile(file) {
    return path.resolve(this.copyDestination, file);
  }

  cleanup() {
    rimraf(`${this.cloneDestination}/${this.repositoryName}`, handleError);
    const { files } = this.status;
    files.forEach(file => {
      rimraf(this.destinationFile(file), handleError);
    });
    rimraf(this.statusPath, handleError);
  }

  cloneCmd() {
    return `git clone ${this.repository} ${this.cloneDestination}/${
      this.repositoryName
    }`;
  }
}

module.exports = Anas;
