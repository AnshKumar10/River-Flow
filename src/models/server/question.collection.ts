import { Permission } from "appwrite";
import { db, questionCollection } from "@/models/name";
import { databases } from "@/models/server/config";

export default async function createQuestionCollection() {
    await databases.createCollection(
        db,
        questionCollection,
        questionCollection,
        [Permission.read("any"), Permission.read("users")],
    );

    console.log("Question Collection is created");

    await Promise.all([
        databases.createStringAttribute(
            db,
            questionCollection,
            "title",
            100,
            true,
        ),
        databases.createStringAttribute(
            db,
            questionCollection,
            "content",
            10000,
            true,
        ),
        databases.createStringAttribute(
            db,
            questionCollection,
            "authorId",
            50,
            true,
        ),
        databases.createStringAttribute(
            db,
            questionCollection,
            "tags",
            50,
            true,
            undefined,
            true,
        ),
        databases.createStringAttribute(
            db,
            questionCollection,
            "attachmentId",
            50,
            false,
        ),
    ]);

    console.log("Question Attributes created");
}
