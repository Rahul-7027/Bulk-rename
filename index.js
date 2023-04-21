const fr = require("fs");
const replaceThis = "jhony";
const replaceWith = "rahul"
const preview=true
try {
    fr.readdir('data', (err, data) => {
        console.log(data)
        for (let i = 0; i < data.length; i++) {
            const item = data[i]
            let newFile = "data/" + item.replaceAll(replaceThis, replaceWith)
            if (!preview) {
                fr.rename("data/" + item, newFile, () => {
                    console.log("Rename Success")
                })
            }
            else {
                console.log("data/" + item + "will be removed to " + newFile)
            }
        }
    })
}
catch (error) {
    console.error(error)
}