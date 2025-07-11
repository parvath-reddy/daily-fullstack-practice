import fs from 'fs/promises';
import fsn from 'fs';
import path from 'path';

let folderPath = "//Users//parvathreddy//Downloads//FULL-WEBDEV//day-35-cleartheclutter";

let files = await fs.readdir(folderPath);
console.log(files);

for (const item of files) {
    let ext = item.split(".")[item.split(".").length - 1];
    console.log(ext);

    let extFolderPath = path.join(folderPath, ext);
    let oldPath = path.join(folderPath, item);
    let newPath = path.join(extFolderPath, item);

    if (!fsn.existsSync(extFolderPath)) {
        await fs.mkdir(extFolderPath);
        console.log(`Created folder: ${ext}`);
    }

    await fs.rename(oldPath, newPath);
    console.log(`Moved ${item} to ${ext} folder`);
}
