const fs = require('fs');
const path = require('path');
const fsTree = {
  files: [],
  folders: []
};
const initPath = process.argv[2];

async function getFsTree(argPath) {
  const items = await fs.promises.readdir(argPath, { withFileTypes: true });
  for (let j = 0; j < items.length; j++) {
    currentPath = path.resolve(argPath, items[j].name);
    if (items[j].isDirectory()) {
      fsTree.folders.push(currentPath);
      await getFsTree(currentPath);
    }
    if (items[j].isFile()) fsTree.files.push(currentPath);
  }
}

getFsTree(initPath)
  .then(() => console.log(fsTree))
  .catch(error => console.log(error));
