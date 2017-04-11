import {settings} from "../configuration/index";
import mqtt from "mqtt";
import log4js from "log4js";

const log = log4js.getLogger("PUSH-NOTIFICATION");
let client;

export const sendNotificacion = (topic, message = "") => {

    console.log(settings);
    console.log({"topic": topic, "message": message});

    const {activemqUrl, activemqPort, activemqContext} = settings;
    const url = `${activemqUrl}:${activemqPort}/${activemqContext}`;

    if (typeof message === "object") {

        message = message.toString();

    }

    log.debug({"topic": topic, "message": message, "url": url});

    return new Promise((resolve, reject) => {

        client = mqtt.connect(url);
        client.on("connect", () => {

            client.publish(topic, message, null, (err) => {

                if (err) {

                    log.error(err);
                    reject(0);

                }

                client.end();
                resolve(1);

            });

        });

        client.on("error", () => {

            reject(0);

        });

    });

};

