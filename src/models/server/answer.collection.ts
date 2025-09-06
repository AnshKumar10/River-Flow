import { Permission } from "node-appwrite";
import { answerCollection, db } from "@/models/name";
import { databases } from "@/models/server/config";

export default async function createAnswerCollection() {
    await databases.createCollection(db, answerCollection, answerCollection, [
        Permission.create("users"),
        Permission.read("any"),
        Permission.read("users"),
        Permission.update("users"),
        Permission.delete("users"),
    ]);

    console.log("Answer Collection Created");

    await Promise.all([
        databases.createStringAttribute(
            db,
            answerCollection,
            "content",
            10000,
            true,
        ),
        databases.createStringAttribute(
            db,
            answerCollection,
            "questionId",
            50,
            true,
        ),
        databases.createStringAttribute(
            db,
            answerCollection,
            "authorId",
            50,
            true,
        ),
    ]);

    // await Promise.all([
    //     databases.createIndex(
    //         db,
    //         questionCollection,
    //         "title",
    //         IndexType.Fulltext,
    //         ["title"],
    //         ["asc"],
    //     ),
    //     databases.createIndex(
    //         db,
    //         questionCollection,
    //         "content",
    //         IndexType.Fulltext,
    //         ["content"],
    //         ["asc"],
    //     ),
    // ]);

    console.log("Answer Attributes Created");
}
