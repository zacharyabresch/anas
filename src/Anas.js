const fs = require("fs");
const path = require("path");
const { exec } = require("child_process");
const rimraf = require("rimraf");

const extractRepoName = require("./extractRepoName");

const handleError = err => {
  if (err) throw err;
};

class Anas {
  constructor({ repository, copyDestination, cloneDestination, file }) {
    this.file = file;
    this.repository = repository;
    this.repositoryName = extractRepoName(this.repository);
    this.copyDestination = copyDestination;
    this.cloneDestination = cloneDestination;
  }

  copy() {
    exec(this.cloneCmd(), (err, stdout, stderr) => {
      if (err) {
        console.error(`exec error: ${err}`);
        return;
      }
      console.log(`stderr: ${stderr}`);
      console.log(`stdout: ${stdout}`);
      // copy file
      console.log("Copying source file to destination ...");
      fs.copyFileSync(this.sourceFile(), this.destinationFile());
    });
  }

  sourceFile() {
    return path.resolve(this.cloneDestination, this.repositoryName, this.file);
  }

  destinationFile() {
    return path.resolve(this.copyDestination, this.file);
  }

  cleanup() {
    rimraf(`${this.cloneDestination}/${this.repositoryName}`, handleError);
    rimraf(this.destinationFile(), handleError);
  }

  cloneCmd() {
    return `git clone ${this.repository} ${this.cloneDestination}/${
      this.repositoryName
    }`;
  }
}

module.exports = Anas;
