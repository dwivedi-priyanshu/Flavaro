# 🍕 Flavoro Foods

Welcome to **Flavoro Foods**! A delightful web application where you can browse, filter, and order a variety of delicious food items. Enjoy an immersive and user-friendly experience with our intuitive interface. 🚀

[🔗 **Live Demo - Flavoro**](https://flavaro-murex.vercel.app/)

## 🌟 Features

- **Browse Food Items**: Explore a wide range of food items with detailed descriptions, prices, and ratings.
- **Search Functionality**: Easily find your favorite dishes with our search feature.
- **Category Filtering**: Filter food items by categories to quickly find what you're craving.
- **Add to Cart**: Conveniently add items to your cart and manage quantities.
- **Order Summary**: View your selected items and total price before checking out.
- **Responsive Design**: Enjoy a seamless experience on both desktop and mobile devices.

## 🛠️ **Technologies Used** 🔧
- **React**: For building the dynamic user interface.
- **Tailwind CSS**: For a modern and responsive UI design 🌐.
- **Redux**: For state management of the cart and categories ⚙️.
- **React Router**: For handling navigation within the app 🔀.
- **React Hot Toast**: For toast notifications on actions 🍞.

## 🚀 Getting Started

Follow these steps to get the project up and running on your local machine:

### Prerequisites

- Node.js and npm installed on your machine.

### Installation

1. **Clone the repository**

    ```bash
    git clone https://github.com/your-username/flavaro-foods.git
    cd flavaro-foods
    ```

2. **Install dependencies**

    ```bash
    npm install
    ```

3. **Start the development server**

    ```bash
    npm start
    ```

Your application should now be running on `http://localhost:3000`.

## 🎨 Project Structure

Here's a brief overview of the project's structure:

```plaintext
flavaro-foods
├── public
│   └── index.html
├── src
│   ├── components
│   │   ├── Cart.js
│   │   ├── CartItem.js
│   │   ├── CategoryMenu.js
│   │   ├── FoodCard.js
│   │   ├── FoodItems.js
│   │   ├── Navbar.js
│   │   └── ProtectedRoute.js
│   ├── pages
│   │   ├── Error.js
│   │   ├── Home.js
│   │   └── Success.js
│   ├── redux
│   │   ├── slices
│   │   │   ├── CartSlice.js
│   │   │   ├── CategorySlice.js
│   │   │   ├── SearchSlice.js
│   │   └── Store.js
│   ├── App.js
│   ├── FoodData.js
│   ├── index.css
│   └── index.js
└── package.json
```

## 📈 Future Features
- **User Authentication**:Adding login functionality for a personalized experience.
- **Payment Integration**:Adding login functionality for a personalized experience.
- **Admin Dashboard**:For managing food items, orders, and user reviews..

