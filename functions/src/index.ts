

import * as functions from 'firebase-functions';
import { app } from './infrastructure/entry-points/api/service';

// // Start writing Firebase Functions
// // https://firebase.google.com/docs/functions/typescript
//
exports.api = functions.runWith({ timeoutSeconds: 300, memory: '256MB' }).https.onRequest(app);
// export const helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });
