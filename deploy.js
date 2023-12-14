console.log('deploy ...');
require('dotenv').config({
    path:'.env.deploy'
});


const USER = process.env.SERVER_USER;
const PASSWORD = process.env.SERVER_PASSWORD;
const HOST = process.env.SERVER_HOST;
const REMOTE_ROOT = process.env.SERVER_REMOTE_ROOT;
const REMOTE_PORT = parseInt(process.env.SERVER_PORT);

const FtpDeploy = require("ftp-deploy");
const ftpDeploy = new FtpDeploy();

const config = {
    user: USER,
    password: PASSWORD,
    host: HOST,
    port: REMOTE_PORT,
    localRoot: __dirname + "/dist/construction-company-panel/",
    remoteRoot: REMOTE_ROOT,
    // include: ["*", "**/*"],      // this would upload everything except dot files
    include: ["*", "**/*"],
    // e.g. exclude sourcemaps, and ALL files in node_modules (including dot files)
    exclude: [
        ".git/**",
        '.env',
        '.gitignore'
    ],
    // delete ALL existing files at destination before uploading, if true
    deleteRemote: false,
    // Passive mode is forced (EPSV command is not sent)
    forcePasv: true,
    // use sftp or ftp
    sftp: true,
};

ftpDeploy
    .deploy(config)
    .then((res) => console.log("finished:", res))
    .catch((err) => console.log(err));