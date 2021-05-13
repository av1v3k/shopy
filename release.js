const q = require("q");
const path = require("path");
const replace = require("replace");
const root = require("app-root-path").path;
const git = require("simple-git")(root);
const child_process = require("child_process");

let packageFile = path.join(__dirname, "package.json");
//TODO: to update in dist package.json file too.
let packageversion = require(`${packageFile}`).version;
let DESCRIPTION = "dummy test";
let BRANCH_NAME = "testing";

if (packageversion) {
  console.log("before", packageversion);
  let packagearr = packageversion.split(".");
  let temp = +packagearr[2];
  temp = temp + 1;
  packagearr[2] = temp;
  console.log(packagearr);
  console.log("after", packagearr.join("."));
  packageversion = packagearr.join(".");
}

function bump(version) {
  replace({
    regex: /"version": "[^"]+"/m,
    replacement: `"version": "${version}"`,
    paths: [packageFile],
    recursive: false,
  });

  return q.when(version);
}

function installPackage(ver) {
  var deferred = q.defer();

  if (!ver) {
    console.log(`No valid version!`);
    return deferred.reject(new Error(`Problem in installing packages: ${ver}`));
  }

  child_process.exec(`npm i`, function (err, stdout, stderr) {
    if (!err) {
      deferred.resolve(ver);
    } else {
      deferred.reject(new Error(`Reject Reason:${err}, ${stderr}`));
    }
  });
  return deferred.promise;
}

function addAndCommit(version) {
  var deferred = q.defer();

  if (!version) {
    console.log("No valid version!");
    return deferred.reject(new Error(`Problem in ${version}`));
  }

  git.pull("origin", `${BRANCH_NAME}`, (err1, result1) => {
    if (!err1) {
      console.log(`GIT:Adding...`);
      // git.add("./*", (err2, result2) => {
      //   if (!err2) {
      //     console.log(`GIT:Committing...`);
      //     git.commit(
      //       `chore(release): ${version}`,
      //       [packageFile],
      //       (err3, result3) => {
      //         if (err3) {
      //           return deferred.reject(new Error(`Problem in ${version}`));
      //         } else {
      //           return deferred.resolve(version);
      //         }
      //       }
      //     );
      //   }
      // });
      git.add("./*").commit(`chore(release): ${version}`, (data) => {
        return deferred.resolve(version);
      });
    } else {
      return deferred.reject(new Error(`Pull Issue`));
    }
  });
  return deferred.promise;
}

function pushToBranch(version) {
  let deferred = q.defer();

  console.log(`GIT:Push --> ${BRANCH_NAME}`);
  git.push(["-u", "origin", `${BRANCH_NAME}`], (err, result) => {
    if (!err) {
      console.log(`GIT:Push-Tags`);
      // git.pushTags(`origin`, () => {
      return deferred.resolve(version);
      // });
    } else {
      return deferred.reject(
        new Error(
          `**** Issue in Pushing to ${BRANCH_NAME} / Issue in Pushing Tags ****`
        )
      );
    }
  });
  return deferred.promise;
}

function tagPackage(version) {
  var deferred = q.defer();

  if (!version) {
    console.log("No valid version!");
    return deferred.reject(new Error(`Problem in ${version}`));
  }

  console.log("Tagging...");
  git.addAnnotatedTag(`v${version}`, `${DESCRIPTION}`, (err, result) => {
    if (!err) {
      git.pushTags(`origin`, (err2, result2) => {
        if (!err) {
          return deferred.resolve(version);
        } else {
          return deferred.reject(
            new Error(`**** Error in tagging package ****`)
          );
        }
      });
    }
  });

  return deferred.promise;
}

function pack(version) {
  var deferred = q.defer();
  console.log("NPM:Packing...");
  child_process.exec(`npm pack`, function (err, stdout, stderr) {
    if (err) {
      console.log(err);
      return deferred.reject(
        new Error(`**** Packing issue in ${version} ****`)
      );
    } else {
      let tgzFile = stdout.replace(/(\n|\r)/gi, "");
      console.log(`NPM:Packed File Name: ${tgzFile}`);
    }
  });
  return deferred.promise;
}

bump(packageversion)
  .then((version) => {
    return installPackage(version);
  })
  .then((version) => {
    return addAndCommit(version);
  })
  .then((version) => {
    return pushToBranch(version);
  })
  .then((version) => {
    return tagPackage(version);
  })
  .then((version) => {
    return pack(version);
  });
