import { db } from "@/models/name";
import createAnswerCollection from "@/models/server/answer.collection";
import createCommentCollection from "@/models/server/comment.collection";
import createQuestionCollection from "@/models/server/question.collection";
import createVoteCollection from "@/models/server/vote.collection";
import { databases } from "@/models/server/config";

export default async function getOrCreateDB() {
    try {
        await databases.get(db);
        console.log("Database connection");
    } catch  {
        try {
            await databases.create(db, db);
            console.log("database created");
            await Promise.all([
                createQuestionCollection(),
                createAnswerCollection(),
                createCommentCollection(),
                createVoteCollection(),
            ]);
            console.log("Collection created");
            console.log("Database connected");
        } catch (error) {
            console.log("Error creating databases or collection", error);
        }
    }

    return databases;
}
