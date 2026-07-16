const client = new Appwrite.Client();

client
    .setEndpoint("https://fra.cloud.appwrite.io/v1")
    .setProject("junefire");

const account = new Appwrite.Account(client);
