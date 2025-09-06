export const env = {
    appwrite: {
        endpoint: String(process.env.NEXT_PUBLIC_APPWRITE_ENDPOINT),
        projectName: String(process.env.NEXT_PUBLIC_APPWRITE_PROJECT_NAME),
        projectId: String(process.env.NEXT_PUBLIC_APPWRITE_PROJECT_ID),
        apiKey: String(process.env.APPWRITE_API_KEY),
    },
};
