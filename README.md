# River Flow

A modern, full-stack **Q&A platform** inspired by Stack Overflow, built with Next.js 15. River Flow enables developers and users to ask questions, provide answers, engage in discussions through comments, and vote on content. The platform features a robust authentication system, user reputation tracking, and a complete content management system for questions and answers.

## ✨ Features

### Core Functionality
- **Questions & Answers**: Post questions, provide detailed answers with rich content
- **Voting System**: Upvote/downvote questions and answers to surface quality content
- **Comments**: Engage in threaded discussions on questions and answers
- **File Attachments**: Upload and attach files to questions for better context
- **User Reputation**: Track user contributions and build reputation scores

### Technical Features
- **Modern Stack**: Built with Next.js 15, React 19, and TypeScript
- **Authentication**: Secure user authentication with session management powered by Appwrite
- **Beautiful UI**: Styled with Tailwind CSS and shadcn/ui components
- **State Management**: Zustand for efficient client-side state with persistence
- **Form Handling**: React Hook Form with Zod validation for type-safe forms
- **Dark Mode**: Theme switching with next-themes
- **Code Quality**: ESLint, Prettier, and Husky for pre-commit hooks

## 🚀 Tech Stack

- **Framework**: Next.js 15.5
- **Language**: TypeScript
- **Styling**: Tailwind CSS 4
- **UI Components**: Radix UI, shadcn/ui
- **Backend**: Appwrite
- **State Management**: Zustand
- **Form Validation**: React Hook Form + Zod
- **Icons**: Lucide React

## 📦 Getting Started

1. **Install dependencies**:
```bash
npm install
```

2. **Set up environment variables**:
Create a `.env` file in the root directory with your Appwrite credentials.

3. **Run the development server**:
```bash
npm run dev
```

4. **Open your browser**:
Navigate to [http://localhost:3000](http://localhost:3000)

## 🛠️ Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint
- `npm run format` - Format code with Prettier

## 📝 License

This project is private and not licensed for public use.
