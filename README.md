# Country Population Ranking, Compare Country & News App

The **Country Population Ranking, Compare Country & News App** is a React application that allows users to explore country population rankings, compare data between different countries, and view the latest country-related news. The app fetches population data, compares countries, and integrates real-time news updates to provide comprehensive information in a user-friendly interface.

## Features

- **Country Population Ranking**: Displays a list of countries ranked by population.
- **Country Comparison**: Compare detailed data between two selected countries, including population, flag, and other relevant information.
- **Latest News**: Fetch and display country-related news in real-time using an integrated news API.
- **Search Functionality**: Easily search and select countries for comparison or news.
- **Responsive Design**: Optimized for various screen sizes, providing an intuitive and clean user experience across devices.

## Technologies Used

- **React.js**: JavaScript library for building user interfaces.
- **Redux**: State management for handling country data and API calls.
- **React Router**: Used for navigating between different app sections.
- **React-Select**: Provides search and selection functionality for choosing countries.
- **Tailwind CSS**: A utility-first CSS framework for responsive and efficient styling.
- **Axios or Fetch API**: Handles API requests for retrieving country population and news data.

## Installation

To set up and run the app locally, ensure you have [Node.js](https://nodejs.org/) installed, then follow these steps:

1. **Clone the Repository**:

    ```bash
    git clone https://github.com/MyWhySaputra/hacktiv8-final-project
    cd hacktiv8-final-project
    ```

2. **Install Dependencies**:

    ```bash
    npm install
    ```

3. **Set Up Environment Variables**:

    Create a `.env` file in the root directory of the project and add your API keys:

    ```bash
    VITE_API_KEY=your_news_api_key_here
    ```

4. **Run the Project**:

    ```bash
    npm start
    ```

    The app will be available at `http://localhost:5173`.

## Project Structure

- **src/**: Main folder for source code.
  - **assets**: 
    - **default_flag.png**: Default flag image used when no country is selected.
  - **components/**: Contains reusable UI components.
    - **CountryList**: Displays population rankings.
    - **CountryCompareForm**: Form for selecting countries for comparison.
    - **CountryCompareResult**: Displays comparison results between selected countries.
    - **NewsCard**: Shows the latest country-related news in card format.
    - **Navbar**: Top navigation bar component, containing links to different sections of the app (Home, Compare, News).
    - **Footer**: Bottom section of the app with additional information or links.
  - **layouts**
    - **MainLayout**: Wraps all pages, providing consistent layout structure (e.g., Navbar, Footer) across the app.
  - **pages/**: Pages of the app.
    - **HomePage**: Displays country population rankings.
    - **ComparePage**: Interface for selecting and comparing countries.
    - **NewsPage**: Displays real-time country-related news articles.
  - **redux/**: Handles state management for fetching and storing country and news data.
    - **app**:
      - **store.js**: Configures and combines Redux reducers, setting up the Redux store.
    - **features**:
      - **country**:
        - **countrySlice.js**: Redux slice for managing state related to country data (population, flags, etc.).
      - **news**:
        - **newsSlice.js**: Redux slice for managing state related to news data fetched from the API.
  - **routers**:
    - **router.js**: Defines routes for different pages (Home, Compare, News) and manages navigation between them.
  - **App.jsx**: Main entry point of the app, responsible for rendering the overall structure and routing.
  - **Main.jsx**: Renders the app into the DOM and sets up the root component.
- **.env**: Environment configuration file where API keys (for country and news data) are stored.

## API Usage

Here's the updated **API Usage** section with the necessary details:

## API Usage

1. **Country Data API**:  
   - **URL**: [REST Countries API](https://restcountries.com/)  
   - **Purpose**: Used to fetch population, flags, and other country-related data for both the population ranking and comparison features.
   - **Endpoints**:
     - `/v3.1/all`: Retrieves data for all countries, including name, population, and flags.
   - **Usage**: The app uses this API to gather country details such as population, flags, and names, which are then used in the ranking and comparison sections.
  
2. **News API**:  
   - **URL**: [New York Times API](https://developer.nytimes.com/)  
   - **Purpose**: Fetches the latest country-specific news based on user selection.
   - **Endpoints**:
     - `/svc/search/v2/articlesearch.json`: Searches for articles related to a specific country or topic.
   - **Usage**: The app utilizes the New York Times API to display relevant news for the countries selected by the user. This provides users with real-time updates on country-related news.

## Business Logic

- **Country Ranking**: Fetches and ranks countries based on their population.
- **Country Comparison**: Allows users to compare detailed information between two selected countries, such as population, flag, etc.
- **News Integration**: Provides real-time news updates for countries, helping users stay informed about current events.

## Contributing

Contributions are welcome! If you'd like to contribute, feel free to create an [issue](https://github.com/MyWhySaputra/hacktiv8-final-project/issues) or submit a [pull request](https://github.com/MyWhySaputra/hacktiv8-final-project/pulls).

## License

This project is licensed under the [MIT License](LICENSE).

## Contact

For any questions or feedback, feel free to reach out via email at [email](wahyusaputra222000@gmail.com) or connect through [LinkedIn](https://www.linkedin.com/in/mywahyusaputra/).

---

Thank you for using the **Country Population Ranking, Compare Country & News App**! We hope this app helps you stay informed about countries around the world.