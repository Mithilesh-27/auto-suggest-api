
# Auto-Suggest-API

A backend project that provides auto-suggest functionality based on user input.


## Installation

1. Clone the repository:

    ```bash
    git clone https://github.com/Mithilesh-27/auto-suggest-api.git
    cd auto-suggest-api
    ```
2. Set up MongoDB:
    - Ensure MongoDB is installed and running on your machine.
    - Create a `.env` file in the root directory and add your MongoDB URI:

        ```
        PORT = 5000
        MONGO_URI=mongodb://localhost:27017/auto-suggest
        ```
3. Install the dependencies

    ```bash
    npm install
    ```
4. Start the backend server:

    ```bash
    node --watch ./src/server.js
    ```

The app will start running on port 5000 on the browser. Navigate to `http://localhost:5000/api/suggest?q=ap`. All the terms in the database containing 'ap' as substring will get filtered. You can try different queries as filters.

## Testing
1. To perform testing using jest and supertest, run the following commmand:

    ```bash
    npm test
    ```

2. To perform python script testing, run the python file in the terminal.

## Contributing

Contributions are welcome! Please feel free to submit a pull request or open an issue.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Author

This project was created by [Mithilesh Singpure](https://github.com/Mithilesh-27).