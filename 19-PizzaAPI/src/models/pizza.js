"use strict";
/* -------------------------------------------------------
    NODEJS EXPRESS | CLARUSWAY FullStack Team
------------------------------------------------------- */
const { mongoose } = require("../configs/dbConnection");
/* ------------------------------------------------------- */
// Pizza Model:

const PizzaSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      trim: true,
      required: true,
      unique: true,
    },

    image: {
      type: String,
      trim: true,
    },

    price: {
      type: Number,
      required: true,
    },

    toppings: [
      // push, pull dikkat bir array içerisine aldık. Çünkü bir pizzada birden fazla malzeme olabilir. Bunları bir array'da toplamış oluyoruz.
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Topping",
      },
    ],
  },
  {
    collection: "pizzas",
    timestamps: true,
  }
);

/* ------------------------------------------------------- */
module.exports = mongoose.model("Pizza", PizzaSchema);
