const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
  idsanpham: { type: String, required: true, unique: true },
  tensp:     { type: String, required: true },
  loaisp:    { type: String, required: true },
  gia:       { type: Number, required: true },
  hinhanh:   { type: String, default: '' }
});

module.exports = mongoose.model('Product', ProductSchema);