// models/menuModel.js
const menu = [
  {
    id: 1,
    name: 'ส้มตำไทย',
    category: 'ยำ/สลัด',
    price: 40,
    description: 'ส้มตำรสดั้งเดิม เปรี้ยว เผ็ด เค็ม หวาน',
    ingredients: 'มะละกอดิบ, มะเขือเทศ, ถั่วฝักยาว, พริกขี้หนู, กุ้งแห้ง, น้ำปลา',
    cookingTime: 10,
    difficulty: 'ง่าย',
    region: 'ภาคอีสาน',
    image: '/image/som-tam.jpg'
  },
  {
    id: 2,
    name: 'ต้มยำกุ้ง',
    category: 'ต้ม/แกง',
    price: 120,
    description: 'ต้มยำรสจัดจ้าน เปรี้ยว เผ็ด เค็ม หวาน กับกุ้งแม่น้ำตัวโต',
    ingredients: 'กุ้งแม่น้ำ, ตะไคร้, ใบมะกรูด, ข่า, พริกขี้หนูแห้ง, มะนาว',
    cookingTime: 20,
    difficulty: 'ปานกลาง',
    region: 'ภาคกลาง',
    image: '/image/tom-yum.jpg'
  },
  {
    id: 3,
    name: 'ผัดไทย',
    category: 'อาหารคาว',
    price: 80,
    description: 'เส้นหมี่ผัดรสเปรี้ยวหวาน เสิร์ฟพร้อมกุ้งสด และถั่วงอก',
    ingredients: 'เส้นหมี่, กุ้ง, ไข่, หน่อไม้, ถั่วงอก, น้ำตาลปีบ',
    cookingTime: 15,
    difficulty: 'ง่าย',
    region: 'ภาคกลาง',
    image: '/image/pad-thai.jpg'
  }
];

module.exports = menu;