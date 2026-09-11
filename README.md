backend/
├── schema.sql              # โครงสร้างฐานข้อมูล PostgreSQL
├── package.json
├── .env.example
├── server.js               # จุดเริ่มต้นแอป
├── README.md                # คู่มือติดตั้ง + deploy
└── src/
    ├── db.js                       # เชื่อมต่อฐานข้อมูล
    ├── middleware/auth.js          # ตรวจ JWT token + ตรวจสิทธิ์
    ├── utils/permissions.js        # ตรรกะสิทธิ์ (ย้ายมาจาก can() ในหน้าเว็บ)
    └── routes/
        ├── auth.js          # สมัคร/เข้าสู่ระบบ (รหัสผ่าน hash จริงด้วย bcrypt)
        ├── cases.js         # CRUD เคส + ประวัติ
        └── users.js         # จัดการบัญชี/บทบาท
