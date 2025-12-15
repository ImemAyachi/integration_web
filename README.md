# Collocov - Student Housing & Carpooling Platform

Collocov is a web application designed to help students find shared housing (colocations) and carpooling options (covoiturage) easily. This project features a modern, responsive user interface built with HTML, JavaScript, and Tailwind CSS.

## Features

- **Home Page**: Landing page with call-to-actions and a simulated mobile app preview.
- **Authentication**:
  - **Sign Up**: Registration page for new users.
  - **Sign In**: Login page for existing users.
- **Ride Sharing**:
  - **Find a Ride**: Search interface for finding carpooling options.
  - **Rides List**: Display of available rides with map integration.
  - **Offer Details**: Detailed view of a specific ride offer.
  - **Payment**: Checkout page for booking a ride.
- **Communication**:
  - **Chat**: Interface for communicating with drivers or other users.

## Project Structure

- `index.html`: Main landing page.
- `find-ride.html`: Search functionality.
- `rides-list.html`: Listing of rides.
- `offer-details.html`: Detailed ride information.
- `payment.html`: Payment processing interface.
- `chat.html`: Chat interface.
- `signup.html` & `signin.html`: Authentication pages.
- `src/input.css`: Source Tailwind CSS file.
- `dist/output.css`: Compiled CSS file.
- `script.js`: Core JavaScript logic.

## Prerequisites

- [Node.js](https://nodejs.org/) (installed globally) to manage dependencies.

## Setup & Installation

1.  **Clone or Download** the project repository.
2.  **Install Dependencies**:
    ```bash
    npm install
    ```
3.  **Build Tailwind CSS**:
    To compile the Tailwind CSS file, run:
    ```bash
    npm run build
    ```
    This command watches for changes in your HTML files and updates `dist/output.css` accordingly.

4.  **Run the Project**:
    Since this is a static site, you can simply open `index.html` in your web browser. For a better experience, use `Live Server` in VS Code or any static file server.

## Technologies Used

- **HTML5**: Semantic markup.
- **Tailwind CSS**: Utility-first CSS framework for styling.
- **JavaScript**: Client-side interactivity.
- **Google Fonts**: Typography (Outfit font).