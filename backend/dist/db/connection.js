import { connect, disconnect } from "mongoose";
async function connectToDatabase() {
    try {
        await connect(process.env.MONGODB_URL);
    }
    catch (error) {
        console.log(error);
        throw new Error("cannot connect to mongoDB");
    }
}
async function disconnectFroDatabase() {
    try {
        await disconnect();
    }
    catch (error) {
        console.log(error);
        throw new Error("cannot disconnect to mongoDB");
    }
}
export { connectToDatabase, disconnectFroDatabase };
//# sourceMappingURL=connection.js.map