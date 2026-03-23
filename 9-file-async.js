const { error } = require("console");
const { readFile, writeFile } = require("fs").promises;

// already made promise

const getText = async () => {

    try {

        const data = await readFile("./files/text.txt", "utf8");
        const secondData = await readFile("./files/text.txt", "utf8");
        await writeFile("./files/new-file.txt", `${data}, ${secondData}`);
        
    } catch (error) {
        console.error(error);
    }

}

getText();



// creating promise using the normal way
// const getText = (path, encode) => {
//     return new Promise((resolve, reject) => {
//         readFile(path, encode, (error, data) => {
//             if (error) {
//                 return reject(error);
//             }
//             return resolve(data);
//         })
//     })
// }

// getText("./files/text.txt", "utf8")
// .then((result) => console.log(result))
// .catch(error => console.error(error));