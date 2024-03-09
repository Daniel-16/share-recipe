# Recipe Sharing App API

This is a simple recipe sharing application api built with Node.js, Express, and MongoDB. Users can create an account, and then create and manage their own recipes.

## Prerequisites

- Node.js (v12 or later)
- MongoDB (v4 or later)

## Installation

1. Clone the repository:
   ```
   git clone https://github.com/Daniel-16/share-recipe.git
   ```
2. Navigate to the project directory:
   ```
   cd server
   ```
3. Install dependencies:
   ```
   npm install
   ```

## Setup

1. Create a `.env` file in the root directory and add the following environment variables:
   ```bash
   MONGODB_DEV=mongodb://localhost:27017/recipe-sharing
   ```
2. Start the development server
   ```
   npm run dev
   ```
   The server would run on `http://localhost:6000`
