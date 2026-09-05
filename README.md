# ระบบบันทึกสินค้าเสียหาย - Damaged Goods Dashboard

ระบบจัดการและติดตามสถานะเคสสินค้าชำรุดเสียหายในคลังและหน้าร้าน

## 📋 คุณสมบัติ

- **Dashboard Overview** - ดูภาพรวมสถานะเคสทั้งหมด
- **KPI Summary** - แสดงสถิติโครงการ (Total, New, In Progress, Pending, Closed)
- **Advanced Filtering** - ค้นหาด้วย MC, IO, CSP หรือชื่อร้านค้า
- **Department Filter** - กรองตามแผนก (Warehouse, Store, Logistics)
- **Creator Filter** - กรองตามผู้สร้างรายการ
- **Year Filter** - กรองตามปี
- **Responsive Design** - ใช้ได้ทั้ง Desktop และ Mobile
- **Status Badges** - สถานะชัดเจนด้วยสีที่แตกต่างกัน

## 🎨 Color Scheme

- **Primary Color**: #008a53 (Green)
- **Background**: #f4f8f5 (Light Green)
- **Status Colors**:
  - New: #3b82f6 (Blue)
  - In Progress: #f59e0b (Amber)
  - Pending: #8b5cf6 (Purple)
  - Resolved: #10b981 (Emerald)
  - Closed: #008a53 (Green)

## 📁 File Structure

```
.
├── index.html      # Main HTML template
├── styles.css      # CSS styling
├── app.js          # JavaScript functionality
└── README.md       # Documentation
```

## 🚀 Getting Started

1. Clone the repository
2. Open `index.html` in your web browser
3. Start using the dashboard!

## 📱 Responsive Breakpoints

- Desktop: Full layout with all features
- Tablet: Adjusted spacing and controls
- Mobile: Single column filter controls

## 🔧 Customization

You can easily customize:
- Colors in `:root` CSS variables
- Mock data in the table rows
- Filter options in select dropdowns
- Status tabs configuration

## 📝 Notes

- Current data is mock/sample data for demonstration
- Search functionality filters in real-time
- Tab filtering is ready for backend integration
- Responsive design ensures mobile compatibility
