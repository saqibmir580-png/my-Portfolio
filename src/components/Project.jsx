import React from "react";

const Project = () => {
  return (
    <div
      name="projects"
      className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-20"
    >
      <div>
        <h1 className="text-3xl font-bold mb-5">Projects</h1>
        <br />
        <h1 className="text-green-600 font-semibold text-xl">Project Title</h1>
        <span>E-Commerce Web Application</span>
        <br />
        <br />
        <h1 className="text-green-600 font-semibold text-xl">Description</h1>
        <span>
          Developed a dynamic e-commerce platform using React and Tailwind CSS,
          featuring responsive design and intuitive user interfaces. Implemented
          product listings, detailed product pages, a shopping cart, and a
          secure checkout process. Integrated search and filtering options, and
          built a user account management system. Ensured cross-device
          compatibility and a seamless user experience.
        </span>
        <br />
        <br />
        <h1 className="text-green-600 font-semibold text-xl">
          Technologies Used
        </h1>
        <span>
         <b>Frontend:</b>  React: For building interactive user interfaces and managing
          state. Tailwind CSS: For styling the application with a utility-first
          CSS framework. React Router: For handling navigation and routing
          within the application. 
          <br></br><b>Backend: </b> Node.js/Express: For
          server-side logic and API endpoints. Database: For storing product
          information, user accounts, and order details (e.g., MongoDB,
          PostgreSQL). <br></br><b>Payment Integration:</b> Stripe/PayPal: For processing
          payments securely.
        </span>
        <br />
        <br />
        <h1 className="text-green-600 font-semibold text-xl">Key Features</h1>
        <span>
        <b>Product Listings:</b><br></br>

Display a grid or list of products with images, titles, prices, and brief descriptions.
Support for multiple product categories and subcategories.
Pagination or infinite scroll for browsing large product catalogs.<br></br>
<b>Product Details:</b><br></br>

Detailed product pages with high-resolution images, extended descriptions, specifications, and customer reviews.
Options to select product variations (e.g., size, color) and view availability.<br></br>
<b>Shopping Cart:</b><br></br>

Functionality to add, remove, and update quantities of products in the cart.
Real-time cart updates and price calculations.
Display of total cost, including taxes and shipping estimates.<br></br>
<b>Checkout Process:</b><br></br>

User-friendly checkout flow with steps for shipping address, payment information, and order review.
Integration with payment gateways for secure transactions.
Confirmation of order with a summary and estimated delivery time.<br></br>
<b>User Accounts:</b><br></br>

User registration and login for managing personal information and order history.
Password recovery and account management features.<br></br>
<b>Search and Filtering:</b><br></br>

Search functionality to quickly find products by name, category, or other criteria.
Filtering options to narrow down product listings by attributes like price range, brand, or ratings.<br></br>
<b>Responsive Design:</b><br></br>

Mobile-friendly layout that adapts to various screen sizes and devices.
Consistent user experience across desktop, tablet, and mobile platforms.<br></br>
<b>Admin Panel:</b><br></br>

Backend interface for managing product listings, categories, orders, and customer information.
Tools for updating product details, processing orders, and generating reports.
        </span>
        <br />
        <br />
      </div>
    </div>
  );
};

export default Project;
