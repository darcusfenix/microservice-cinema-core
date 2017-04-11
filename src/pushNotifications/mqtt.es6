import config from "../configuration/index";
import mqtt from "mqtt";
import log4js from "log4js";

const log = log4js.getLogger("PUSH-NOTIFICATION");
let client;

export const sendNotificacion = (topic, message = "") => {

    console.log(config);
    console.log({"topic": topic, "message": message});

    const {activemqUrl, activemqPort, activemqContext} = config;
    const url = `${activemqUrl}:${activemqPort}/${activemqContext}`;

    if (typeof message === "object"){

        message = message.toString();

    }

    log.debug(config);
    log.debug({"topic": topic, "message": message});
    log.debug({"url": url});

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



    });

};

