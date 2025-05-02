React Product Card

This project demonstrates the creation of a simple product card using React. It utilizes separate components for displaying the product's name, price, description, and image, all styled with React-Bootstrap.
Features

    Product Information: A JSON object contains the product's name, price, description, and image path.

    React Components: Each part of the product (name, price, description, image) is displayed in its own component (Name, Price, Description, and Image).

    Dynamic Greeting: A personalized greeting is shown at the bottom of the card, with a fallback message if no first name is provided.

    React-Bootstrap: Utilized for styling the product card and components.

    Image Display: Conditional rendering is used to display an image if a first name is provided.

Setup

1. Clone the Repository

To get started, clone the repository to your local machine:

git clone <repository-url>
cd <project-folder>

2. Install Dependencies

Install the project dependencies by running:

npm install

3. Start the Development Server

Run the following command to start the development server:

npm start

This will open the app in your default web browser at http://localhost:3000.
File Structure

    src/App.js: The root component where the product card is displayed and the greeting is rendered.

    src/product.js: Contains the JSON object with product details.

    src/components:

        Name.js: Displays the product name.

        Price.js: Displays the product price.

        Description.js: Displays the product description.

        Image.js: Displays the product image.

Instructions

    App.js: Acts as the root component for the app. It imports the components and product data, then renders the product card and greeting.

    product.js: Contains a JSON object with a product's name, price, description, and image URL. This data is imported into each of the components.

    Component Breakdown:

        Name.js: Displays the product's name.

        Price.js: Displays the product's price.

        Description.js: Displays the product's description.

        Image.js: Displays the product's image, with a fallback mechanism based on the first name.

Notes

    Make sure that the image URL in the product.js file is correct and accessible.

    The greeting message changes based on the user's first name.

    Be creative with styling and feel free to add custom styles to improve the appearance of the card.

Contributing

Feel free to fork this repository and submit pull requests for any improvements or bug fixes!
