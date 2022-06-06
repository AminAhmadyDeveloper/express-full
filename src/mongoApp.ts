import { connect } from "mongoose";
import secret from "@utils/secret";

const mongoUserName: string | undefined = secret.MONGO_USER_NAME;
const mongoPassword: string | undefined = secret.MONGO_PASSWORD;
const mongoGeneratedUrl: string = `mongodb+srv://${mongoUserName}:${mongoPassword}@mongodb.gbob7.mongodb.net/express?retryWrites=true&w=majority`;

async function makeConnection(): Promise<void> {
  if (mongoUserName && mongoPassword) await connect(mongoGeneratedUrl);
}

export default makeConnection;
