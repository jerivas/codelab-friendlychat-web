// Your web app's Firebase configuration
const config = {
  apiKey: "AIzaSyCrL_ML7ii905Wxdqfw_8j8kZWuOTvUmmM",
  authDomain: "friendly-chat-1e9ea.firebaseapp.com",
  projectId: "friendly-chat-1e9ea",
  storageBucket: "friendly-chat-1e9ea.appspot.com",
  messagingSenderId: "834866364499",
  appId: "1:834866364499:web:4e830522a80575bd14c6a6",
};

export function getFirebaseConfig() {
  if (!config || !config.apiKey) {
    throw new Error(
      "No Firebase configuration object provided." +
        "\n" +
        "Add your web app's configuration object to firebase-config.js"
    );
  } else {
    return config;
  }
}
