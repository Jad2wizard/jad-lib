const path=require("path")
const fs=require("fs")

const rmdirSync=dir => {
    const fileinfo=fs.statSync(dir)
    if (fileinfo.isFile()) {
        fs.unlinkSync(dir)
    } else if(fileinfo.isDirectory()) {
        const files=fs.readdirSync(dir)
        for (let i=0;i<files.length;i++) rmdirSync(path.join(dir,files[i]))
        fs.rmdirSync(dir)
    }
}

module.exports = {
    rmdirSync
}
