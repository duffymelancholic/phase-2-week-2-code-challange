# Smart Goal Planner 💰

A modern, interactive dashboard for managing multiple savings goals. Built with React and powered by a local REST API, this application helps users track their financial progress, make deposits, and stay motivated to reach their targets.

![Smart Goal Planner Dashboard](https://img.shields.io/badge/React-19.1.0-blue) ![Vite](https://img.shields.io/badge/Vite-7.0.4-purple) ![JSON Server](https://img.shields.io/badge/JSON--Server-1.0.0-green)

## ✨ Features

### 🎯 **Goal Management**
- **Create** new financial goals with custom names, target amounts, categories, and deadlines
- **Edit** existing goals (name, target amount, category, deadline)
- **Delete** goals you no longer need
- **Track** progress with visual progress bars and remaining amounts

### 💰 **Deposit System**
- Make deposits to any goal
- Real-time progress updates
- Automatic calculation of remaining amounts

### 📊 **Overview Dashboard**
- **Total Goals**: See how many goals you're working towards
- **Total Saved**: Track your overall savings across all goals
- **Completed Goals**: Celebrate your achievements
- **Smart Warnings**: 
  - ⚠️ Deadline warnings (within 30 days)
  - 🔴 Overdue alerts (past deadline)
  - ✅ Completion celebrations

### 🔄 **Data Persistence**
- All data stored locally in `db.json`
- RESTful API powered by json-server
- Full CRUD operations (Create, Read, Update, Delete)

## 🛠️ Tech Stack

- **Frontend**: React 19.1.0 with Vite
- **Backend**: json-server (local REST API)
- **Styling**: Modern CSS with responsive design
- **State Management**: React Hooks (useState, useEffect)
- **Data Persistence**: Local JSON file with REST API

## 🚀 Getting Started

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd smart-goal-planner
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the backend server**
   ```bash
   npm run json-server
   ```
   - API will be available at: `http://localhost:3000/goals`
   - Database file: `db.json`

4. **Start the frontend application**
   ```bash
   npm run dev
   ```
   - App will be available at: `http://localhost:5173`

## 📁 Project Structure

```
smart-goal-planner/
├── db.json                 # Local database with sample goals
├── package.json            # Project configuration and scripts
├── README.md              # This file
├── src/
│   ├── App.jsx            # Main application component
│   ├── App.css            # Application styles
│   ├── main.jsx           # React entry point
│   ├── api/
│   │   └── goals.js       # API utilities for CRUD operations
│   └── components/
│       ├── Overview.jsx   # Dashboard overview component
│       ├── GoalList.jsx   # Goals display and management
│       ├── GoalForm.jsx   # Add new goals form
│       ├── DepositForm.jsx # Make deposits form
│       └── ProgressBar.jsx # Visual progress indicator
└── public/
    └── index.html         # HTML template
```

## 🎮 Usage

### Adding a New Goal
1. Fill out the "Add New Goal" form
2. Enter goal name, target amount, category, and deadline
3. Click "Add Goal" to save

### Making a Deposit
1. Select a goal from the dropdown
2. Enter the deposit amount
3. Click "Deposit" to update progress

### Managing Goals
- **Edit**: Click "Edit" on any goal to modify details
- **Delete**: Click "Delete" to remove a goal
- **Track Progress**: View progress bars and remaining amounts

## 📊 Sample Data

The application comes with 10 sample goals to demonstrate functionality:

```json
{
  "goals": [
    {
      "id": "1",
      "name": "Travel Fund - Japan",
      "targetAmount": 5000,
      "savedAmount": 3200,
      "category": "Travel",
      "deadline": "2025-12-31",
      "createdAt": "2024-01-15"
    },
    {
      "id": "2",
      "name": "Emergency Fund",
      "targetAmount": 10000,
      "savedAmount": 7500,
      "category": "Emergency",
      "deadline": "2026-06-30",
      "createdAt": "2023-05-01"
    }
    // ... 8 more sample goals
  ]
}
```

## 🔧 Available Scripts

- `npm run dev` - Start the React development server
- `npm run json-server` - Start the backend API server
- `npm run build` - Build the application for production
- `npm run preview` - Preview the production build

## 🎯 Key Features Implementation

### State Management
- Centralized state in `App.jsx`
- Props passed down to child components
- Functions for state updates passed as props

### API Integration
- RESTful API calls using `fetch`
- Proper error handling
- Real-time data updates

### Component Architecture
- Modular, reusable components
- Clear separation of concerns
- Responsive design

## 🚀 Deployment

This application can be deployed to any static hosting service:

1. **Build the application**
   ```bash
   npm run build
   ```

2. **Deploy the `dist` folder** to your preferred hosting service

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📝 License

This project is licensed under the MIT License.

## 🙏 Acknowledgments

- Built for educational purposes
- Demonstrates React best practices
- Showcases modern web development techniques

---

**Happy Goal Planning! 🎉**
