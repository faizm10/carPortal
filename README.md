# carPortal

carPortal brings to life the idea from Assignment 3 (A3) of CIS*2500, transitioning from a CLI-based car management system to a modern, web-enabled application. Leveraging MongoDB, TypeScript, Next.js, Tailwind CSS, and JavaScript, this platform offers a more accessible and intuitive experience for managing a car inventory.

## Features

- **User-Friendly Interface**: Navigate and interact with car data effortlessly.
- **Secure and Reliable**: Uses TypeScript and MongoDB for a solid foundation.
- **Instant Updates**: Modify car records with real-time reflections.
- **Efficient Search**: Quickly locate cars using straightforward search functionality.
- **Adaptive Design**: Fully responsive, ensuring a great experience on any device.

## Technology Stack

- **Frontend**: Next.js, Tailwind CSS, JavaScript
- **Backend**: TypeScript, Next.js API Routes
- **Database**: MongoDB

## Getting Started

### Prerequisites

- Node.js
- MongoDB
- Yarn (recommended) or npm

### Setup

1. **Clone the project and enter the directory**

```bash
git clone https://github.com/yourusername/carPortal.git
cd carPortal
```

2. **Install the necessary packages**

```bash
yarn install
# or npm install
```

3. **Configure your environment**

Set up a `.env.local` file at the root with the necessary variables:

```env
MONGODB_URI=your_mongodb_connection_string
NEXTAUTH_URL=http://localhost:3000
```

4. **Start the development server**

```bash
yarn dev
# or npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the application.

## Contributing

Contributions are welcome! Please follow these steps:

1. Fork the Project
2. Create a feature branch (`git checkout -b feature/YourFeature`)
3. Commit your changes (`git commit -m 'Add YourFeature'`)
4. Push to the branch (`git push origin feature/YourFeature`)
5. Submit a Pull Request

## License

This project is protected under the MIT License.