const mongoose = require("mongoose");

mongoose.connect("mongodb+srv://user:user@cluster0.mjler1p.mongodb.net/Website?retryWrites=true&w=majority&appName=Cluster0", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log("MongoDB Connected Successfully!"))
.catch((err) => console.log("MongoDB Connection Failed: ", err));
