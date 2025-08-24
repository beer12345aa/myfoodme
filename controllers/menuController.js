// controllers/menuController.js
const menu = require('../models/menuModel');
// แสดงหน าแรก
exports.getHome = (req, res) => {
res.render('pages/index', { title: 'สารสนเทศอาหารไทย' });
};
// แสดงเมนูทั้งหมด
exports.getMenu = (req, res) => {
res.render('pages/menu', { title: 'เมนูอาหาร', menu });
};
exports.getAbout = (req, res) => {
res.render('pages/about', { title: 'ประหวัดผู้จัดการ', });
};
// แสดงรายละเอียดเมนูตาม้id
exports.getMenuDetail = (req, res) => {
const id = parseInt(req.params.id);
const item = menu.find(m => m.id === id);
if (item) {
res.render('pages/menuDetail', { title: item.name, item });
} else {
res.status(404).send('ไม่พบเมนู');
}
};