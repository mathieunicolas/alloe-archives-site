import fs from "fs";

export default defineNitroPlugin((nitroApp) => {
    nitroApp.hooks.hook('content:file:beforeParse', async (file) => {
        const extension = file._id.split('.')
        const statics = ['png','jpg','pdf','epub', 'excalidraw']
        if (statics.includes(extension.pop())) {
            const filepath_arr = file._id.split(':') // array of driver name, then every subfolder, then filename

            const filepath = './public/'+filepath_arr.slice(1).join('/') // contains the full path to the filename
            const filedir = './public/'+filepath_arr.slice(1, -1).join('/') // the folder to create because it contains the file

            fs.mkdirSync(filedir, { recursive: true })

            if(file.body.constructor.name === 'Blob') {
                const imageBuffer = await file.body.arrayBuffer();
                fs.createWriteStream(filepath).write(Buffer.from(imageBuffer))
            } else if (true) {
                fs.createWriteStream(filepath).write(JSON.stringify(file.body, undefined, 2))
            }
        }
    })
})
