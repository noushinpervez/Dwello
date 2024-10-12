# Dwello - Property Rental Platform

## Project Overview

Dwello is a modern, responsive property rental website built with **Next.js** and **MongoDB**. It allows users to list properties, search for rentals, save favorites and manage their accounts. Key features include **Google login** with **NextAuth**, **image handling** via **Cloudinary**, and interactive **maps** using **Leaflet**.

## Table of Contents
- [Live Demo](#live-demo)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Challenges](#challenges)
- [Installation](#installation)
- [Environment Variables](#environment-variables)
- [Usage](#usage)
- [Folder Structure](#folder-structure)
- [Contributing](#contributing)
- [License](#license)

## Live Demo

Check out the live version of the website here: [Live Link](https://dwello-alpha.vercel.app/)

## Features

- **Property Listings:** Users can list rental properties with images, descriptions, pricing and more details.
- **Property Search:** Search properties by filters like location, keywords and property types.
- **User Authentication:** Secure login with **Google** using **NextAuth**.
- **Favorites Management:** Save and view favorite properties for quick access later.
- **Messaging System:** Send and receive messages between property owners and users.
- **Maps Integration:** View property locations on interactive maps with **Leaflet**.
- **Image Uploads:** Seamless image handling and storage with **Cloudinary**.
- **Profile Management:** Users can edit their profiles, manage their properties and view favorite listings.
- **Responsive Design:** Optimized for mobile, tablet and desktop devices.

## Technologies

- **Frontend:** Next.js, Tailwind CSS, Framer Motion, Leaflet, Next Themes, React Icons, React Share, React Toastify
- **Backend:** MongoDB (Mongoose for schema management)
- **Authentication:** NextAuth (Google OAuth)
- **Cloud Services:** Cloudinary (image uploads)
- **Deployment:** Vercel

## Challenges

- The website’s design and technology were updated several times to improve the project.
- It took a lot of effort to find and apply effective design ideas.
- Picking the right tools and libraries to work with React was a detailed process.
- Ensuring the website worked well on different devices required careful testing and adjustments.

## Installation

To get started with Dwello locally, follow these steps:

1. **Clone the repository:**
   ```bash
   git clone https://github.com/noushinpervez/Dwello.git
   cd Dwello
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Set up environment variables:**  
   See [Environment Variables](#environment-variables) section for required variables.

4. **Run the development server:**
   ```bash
   npm run dev
   ```
   The app will be available at [http://localhost:3000](http://localhost:3000).

---

## Environment Variables

Create a `.env.local` file in the root of your project and add the following variables:

```bash
# Public domains
NEXT_PUBLIC_DOMAIN=http://localhost:3000
NEXT_PUBLIC_API_DOMAIN=http://localhost:3000/api

# MongoDB connection
MONGODB_URI=your_mongo_db_connection_string

# NextAuth for Google OAuth
NEXTAUTH_URL=http://localhost:3000
NEXTAUTH_URL_INTERNAL=http://localhost:3000
NEXTAUTH_SECRET=your_nextauth_secret
GOOGLE_CLIENT_ID=your_google_client_id
GOOGLE_CLIENT_SECRET=your_google_client_secret

# Cloudinary for image handling
CLOUDINARY_CLOUD_NAME=your_cloudinary_cloud_name
CLOUDINARY_API_KEY=your_cloudinary_api_key
CLOUDINARY_API_SECRET=your_cloudinary_api_secret
```

## Usage

### Running the App

- **Development:** 
   ```bash
   npm run dev
  # or
  yarn dev
  # or
  pnpm dev
  # or
  bun dev
   ```
   Runs the app in development mode with live reload.

- **Production:**
   ```bash
   npm run build
   npm start
   ```
   Builds and starts the application in production mode.

### API Endpoints

- `/api/auth` - Handles user authentication with NextAuth.
- `/api/properties` - CRUD operations for property listings.
- `/api/bookmark` - Manage favorite properties.
- `/api/messages` - Messaging between users.

### Deployment

Deploy Dwello with [Vercel](https://vercel.com/). Make sure to set environment variables in the Vercel dashboard.

## Folder Structure

```
dwello/
├── public/                  # Publicly accessible files
│   └── images/              # Images used in the application
├── src/                     # Main source directory
│   ├── app/                 # Application logic and API routes
│   │   ├── api/             # API routes for authentication and properties
│   │   │   ├── auth/        # Authentication-related routes
│   │   │   ├── bookmark/    # Routes for managing bookmarked properties
│   │   │   └── properties/  # Routes for CRUD operations on properties
│   │   ├── fonts/           # Custom fonts used in the application
│   │   └── properties/      # Property-related page components
│   ├── assets/              # Assets used in the application
│   │   ├── images/          # Image assets for UI
│   │   └── styles/          # Global and component-specific styles
│   ├── components/          # Reusable UI components
│   ├── config/              # Configuration files and constants
│   ├── models/              # Mongoose models for MongoDB
│   ├── providers/           # Context providers for state management
│   └── utils/               # Utility functions and helpers
└── .env.local               # Environment file
```

## Contributing

Contributions to improve Dwello are welcome. Here’s how to contribute:

1. **Fork the repository** and create a feature branch:
   ```bash
   git checkout -b feature/your-feature-name
   ```

2. **Commit your changes**:
   ```bash
   git commit -m 'feat: your feature name'
   ```

3. **Push to the branch**:
   ```bash
   git push origin feature/your-feature-name
   ```

4. **Open a pull request**: Include detailed information about the changes and their functionality.

---

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

---

### Contact

For any inquiries or issues, feel free to contact me via [email](mailto:noushinpervez@gmail.com).

### Additional Notes:
- Ensure to replace `yourusername` with your actual GitHub username in the clone command.
- The `.env.local` file should include sample variables to guide users in setting up their environment properly.

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

### Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.
