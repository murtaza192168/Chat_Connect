const express = require("express");
const cors = require("cors");
const axios = require("axios");

const app = express();
app.use(express.json());
app.use(cors({ origin: true }));

app.post("/authenticate", async (req, res) => {
  const { username } = req.body;
  // Get or create a user on Chat engine
    try{
        const r = await axios.put(
            // This request fetches the user with the following username or creates one from scratch. If the user is created, the respective password will be saves to their account.
            "https://api.chatengine.io/users/", 
            {username: username, 
                secret: username, 
                first_name: username},

            {headers: {"private-key": "9c47f1d2-af43-4688-848a-b65db9ca4991"}}
            // prod-private-key allows us to create and destroy users
        );
        return res.status(r.status).json(r.data);
    }
    catch(e){
        return res.status(e.response.status).json(e.response.data); // error response will be returned
    }

  
});

app.listen(3001);