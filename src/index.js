const program = require("commander");

const Anas = require("./Anas");

program
  .version("0.0.0-alpha.1")
  .option(
    "-r, --repository [clone URL]",
    "Add repository to clone",
    "git@github.com:thoughtindustries/picks-and-shovels.git"
  )
  .option("-f, --file <file>", "File to copy")
  .option(
    "--clone-destination [directory]",
    "Directory to clone repository to",
    "/tmp/"
  )
  .option(
    "--copy-destination [directory]",
    "Directory to copy `file` to",
    "./"
  );

program.parse(process.argv);

const anas = new Anas(program);

program.command("copy").action(() => {
  anas.copy();
});

program.command("cleanup").action(() => {
  anas.cleanup();
});

program.parse(process.argv);

module.exports = anas;
