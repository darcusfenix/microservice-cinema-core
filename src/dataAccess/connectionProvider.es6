import mongoose from "mongoose";
import log4js from "log4js";
import {serverSettings}   from "../configuration/index";

const internalConnectionPool = {},
    log = log4js.getLogger("CONNECTION-MONGODB");

export default function (url, database, options) {

    const opts = Object.assign({}, {
        "server": {"poolSize": 5}
    }, options);

    return new Promise((resolve, reject) => {

        const address = `mongodb://${serverSettings.mongodbUser}:${serverSettings.mongodbPassword}@${serverSettings.mongodbUrl}:${serverSettings.mongodbPort}/${serverSettings.mongodbDatabase}`;
        log.debug("address to mongodb: ", address);
        if (!internalConnectionPool[address]) {

            try {

                const conn = mongoose.createConnection(address, opts);
                conn.on("open", () => {

                    internalConnectionPool[address] = conn;
                    resolve(internalConnectionPool[address]);

                });

                conn.on("error", (err) => {

                    log.error("MongoDB error: ");
                    log.error(err);

                });

            } catch (err) {

                reject(err);

            }

        } else {

            return resolve(internalConnectionPool[address]);

        }

    });

}
