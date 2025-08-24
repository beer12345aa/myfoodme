// เรียกใช้งาน Express framework
const express = require('express');
const app = express(); // สร้าง object สำหรับจัดการเว็บแอป
const PORT = 3000; // กำหนด port ที่เซิร์ฟเวอร์จะรัน

// -------------------------
// Route Home (/)
// -------------------------
app.get('/', (req, res) => {
  // เมื่อผู้ใช้เปิด http://localhost:3000/
  res.send(`<h1>🍲 เมนูอาหารไทยยอดนิยม 🍲</h1><p>ยินดีต้อนรับทุกคนที่ผ่านมา</p>
<a href="/menu">ดูเมนูอาหาร</a> | <a href="/about">เกี่ยวกับ</a> | <a href="/version">จัดทำโดย</a>
`);
});

// About Page
app.get('/about', (req, res) => {
  res.send(`
    <h2>เกี่ยวกับอาหารไทย</h2>
    <p>อาหารไทยมีรสชาติกลมกล่อม ครบ 5 รส: หวาน เค็ม เปรี้ยว เผ็ด ขม</p>
    <a href="/">กลับหน้าหลัก</a>
  `);
});

// Route Menu
app.get('/menu', (req, res) => {
  const foods = ['ผัดไทย', 'ต้มยำกุ้ง', 'แกงเขียวหวาน'];
  const foodList = foods.map(f => `<li>${f}</li>`).join('');
  res.send(`
    <h2>เมนูอาหารไทย</h2>
    <ul>${foodList}</ul>
    <a href="/">กลับหน้าหลัก</a>
  `);
});

app.get('/version', (req, res) => {
  res.send(`
    <h2>😀เกี่ยวกับเวอร์ชั่นการพัฒนาเว็บ😀</h2>
    <p>🍲จัดทำโดย นาย สมชาย🍲</p>
    <p>🎃รหัสนักศึกษา 6611425009🎃<p>
    <p>🍑version 1 🍑<p>
    <a href="/">กลับหน้าหลัก</a>
  `);
});




// -------------------------
// เริ่มต้นเซิร์ฟเวอร์
// -------------------------
app.listen(PORT, () => {
  // เมื่อเซิร์ฟเวอร์ทำงานสำเร็จ จะแสดงข้อความใน Terminal
  console.log(`Server running at http://localhost:${PORT}`);
});

