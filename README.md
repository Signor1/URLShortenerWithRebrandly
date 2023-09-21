# URL Shortener with React.js and Rebrandly API

This is a URL shortener web application built using React.js, Axios, Vite, and Tailwind CSS. It leverages the Rebrandly API for URL shortening functionality and includes a convenient "Copy to Clipboard" feature.

<img src="https://github.com/Signor1/URLShortenerWithRebrandly/blob/fc241e3f54400dda3a80c3ec07a96b94169a82e3/URL-Shortener.png" width="70%" height="400"/>

## Features

- Shorten long URLs with a single click.
- Copy shortened URLs to the clipboard.
- Click on shortened URLs to open the original link in a new tab.

## Demo

You can access a live demo of the URL shortener here: [Live Demo](https://signor-url-shortener.vercel.app/)

## Installation

To run this project locally, follow these steps:

1. Clone the repository:

   ```bash
   git clone https://github.com/yourusername/url-shortener.git
   ```

2. Navigate to the project directory:

   ```bash
   cd url-shortener
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

4. Configure your Rebrandly API key:
   - Create an account on [Rebrandly](https://www.rebrandly.com/) if you don't have one.
   - Obtain your Rebrandly API key.
   - Create a `.env` file in the project root and add your API key:

     ```env
     REBRANDLY_API_KEY=your_api_key_here
     ```

5. Start the development server:

   ```bash
   npm run dev
   ```

6. Open your browser and visit `http://localhost:5173` to use the URL shortener.

## Usage

1. Enter the long URL you want to shorten in the input field.
2. Click the "Shorten" button.
3. The shortened URL will be displayed below.
4. Click the "Copy to Clipboard" button to copy the shortened URL.

## Contributing

Contributions are welcome! If you'd like to contribute to this project, please follow these steps:

1. Fork the repository.
2. Create a new branch for your feature or bug fix:
   ```bash
   git checkout -b feature/your-feature-name
   ```
3. Make your changes and commit them:
   ```bash
   git commit -m "Add your commit message here"
   ```
4. Push your changes to your fork:
   ```bash
   git push origin feature/your-feature-name
   ```
5. Create a pull request to the `main` branch of the original repository.


## Acknowledgments

- Thanks to [Rebrandly](https://www.rebrandly.com/) for providing the URL shortening API.
- This project was built with [React.js](https://reactjs.org/), [Axios](https://axios-http.com/), [Vite](https://vitejs.dev/), and [Tailwind CSS](https://tailwindcss.com/).

## Contact

If you have any questions or feedback, feel free to reach out to [me](mailto:emmanuelomemgboji@gmail.com).

