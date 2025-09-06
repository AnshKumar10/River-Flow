import { env } from "@/app/env";
import { Client, Avatars, Databases, Storage, Users } from "node-appwrite";

const client = new Client();

client
    .setEndpoint(env.appwrite.endpoint)
    .setProject(env.appwrite.projectId)
    .setKey(env.appwrite.apiKey);

const users = new Users(client);

const databases = new Databases(client);

const avatars = new Avatars(client);

const storage = new Storage(client);

export { client, users, databases, avatars, storage };
