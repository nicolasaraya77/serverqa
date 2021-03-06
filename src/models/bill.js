/* modelo usuario */
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const BillSchema = Schema({
  fecha: { type: Date, default: Date.now },
  nombreSoc: String,
  rut: String,
  giro: String,
  direccion: String,
  comuna: String,
  ciudad: String,
  telefono: String,
  medioPago: String,
  formaPago: String,
  billRef: [
    {
      cant: Number,
      detail: String,
      punitary: Number,
    },
  ],
  neto: Number,
  iva: Number,
  total: Number,
});
//crear metodo de calcular los valores

module.exports = mongoose.model("Bill", BillSchema);
