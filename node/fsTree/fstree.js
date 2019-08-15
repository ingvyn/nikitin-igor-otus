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
const errHandle = err => {
  if (err.code === 'ENOENT' || err.code === 'ENOTDIR') {
    console.log(`Ошибка: Директория ${err.path} не существует`);
  } else if (err.code === 'EPERM') {
    console.log(`Ошибка: Доступ к папке ${err.path} ограничен средствами ОС`);
  } else console.log(`Произошла ошибка ${err.message}`);
};

getFsTree(initPath)
  .then(() => console.log(fsTree))
  .catch(error => errHandle(error));
