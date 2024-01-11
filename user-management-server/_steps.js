/**
* 1. Create a POST API on the server side;
* 2. Send data from client side via POST;
* 3. fetch api will accept two parameters: i) resource/post url, ii)options - for post data from client to backend;
* 4. options will have three properties:
* 5. method: "POST",
* 6. headers: {
      "content-type": "application/json",
    },
* 7. body: JSON.stringify(data);
* 8. middleware: app.use(express.json());
*/
