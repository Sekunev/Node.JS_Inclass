"use strict";
/* -------------------------------------------------------
    NODEJS EXPRESS | CLARUSWAY FullStack Team
------------------------------------------------------- */
const { mongoose } = require("../configs/dbConnection");
/* ------------------------------------------------------- *
{
    "flightNumber": "IS-AN-001",
    "airline": "THY",
    "departure": "ISTANBUL",
    "departureDate": "2020-10-01 10:00:00",
    "arrival": "ANKARA",
    "arrivalDate": "2020-10-01 12:00:00",
    "createdId": "652ceaa1bae9cde5e8a97522"
}
/* ------------------------------------------------------- */
// Flight Model:

const FlightSchema = new mongoose.Schema(
  {
    flightNumber: {
      // IS-AN-005
      type: String,
      trim: true,
      required: true,
      unique: true,
    },

    airline: {
      type: String,
      trim: true,
      required: true,
    },

    // departure: {
    //     type: mongoose.Schema.Types.ObjectId,
    //     ref: 'City',
    //     required: true
    // },

    departure: {
      type: String,
      trim: true,
      required: true,
    },

    departureDate: {
      type: Date,
      required: true,
    },

    // arrival: {
    //     type: mongoose.Schema.Types.ObjectId,
    //     ref: 'City',
    //     required: true
    // },

    arrival: {
      type: String,
      trim: true,
      required: true,
    },

    arrivalDate: {
      type: Date,
      required: true,
    },

    createdId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
  },
  { collection: "flights", timestamps: true }
);

// Mongoose Scheme Middleware:
// https://mongoosejs.com/docs/middleware.html
// Trigger: Wnen running init:
// Tarih için istediğimiz formatta yeni bir field

const dateToLocaleString = require("../helpers/dateToLocaleString");

FlightSchema.pre("init", function (document) {
  // https://www.w3schools.com/jsref/jsref_tolocalestring.asp
  // document.departureDateStr = document.departureDate.toLocaleString('tr-tr', { dateStyle: 'full', timeStyle: 'medium' })
  // document.arrivalDateStr = document.arrivalDate.toLocaleString('tr-tr', { dateStyle: 'full', timeStyle: 'medium' })
  document.departureDateStr = dateToLocaleString(document.departureDate);
  document.arrivalDateStr = dateToLocaleString(document.arrivalDate);
  document.__v = undefined;
});

/* ------------------------------------------------------- */
module.exports = mongoose.model("Flight", FlightSchema);
