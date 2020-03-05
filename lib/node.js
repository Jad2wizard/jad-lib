const path=require("path")
const fs=require("fs")

/**
 * delete path dir whether it's empty or not
 * @param string | dir
 */
const rmdirSync = dir => {
    const fileinfo=fs.statSync(dir)
    if (fileinfo.isFile()) {
        fs.unlinkSync(dir)
    } else if(fileinfo.isDirectory()) {
        const files=fs.readdirSync(dir)
        for (let i=0;i<files.length;i++) rmdirSync(path.join(dir,files[i]))
        fs.rmdirSync(dir)
    }
}

/**
 * count the number of files in dir
 * @param dir
 */
const countFiles = dir => {
    let res = 0;
    try{
        if(fs.existsSync(dir)){
            let files = fs.readdirSync(dir)
            for(let f of files){
                const filePath = path.resolve(dir, f)
                if(fs.statSync(filePath).isFile())
                    res++
                else
                    res += countFiles(filePath)
            }
        }
        return res
    } catch (e) {
        return res
    }
}

rmdirSync(path.resolve(__dirname, './test'))

module.exports = {
    rmdirSync,
    countFiles
}
