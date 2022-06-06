import "module-alias/register";
import "ts-path-mapping/register";
import http from "http";
import expressApp from "@/expressApp";
import mongoApp from "@/mongoApp";
import zibalApp from "@/zibalApp";
import cronApp from "@/cronApp";
import secret from "@utils/secret";

const mainServer: http.Server = http.createServer(expressApp);
const port: number = parseInt(secret.SERVER_PORT || "65535");

mongoApp();
zibalApp();
cronApp();

mainServer.listen(port, () => {
  console.log(`[server] server is listening on port ${port}`);
});
