### Local Development Setup
````

````

### Running Tests
````
````

### Project Details
  This application pulls from the Darksky Weather api and displays how often the AC or Heat system turned on for a given month at the Portland International Airport.

### Problems Encountered
  - Since Darksky only returns a day of weather per query getting data for a given month would require many requests.

### Libraries Used
- [Create React App](https://github.com/facebookincubator/create-react-app)
  - this allowed me to get started quickly without worrying about tooling or setup
- [Moment.js](https://momentjs.com/)
  - For easy manipulation of dates when calculating past days for API call.
- [React Easy Chart](https://rma-consulting.github.io/react-easy-chart/)
  - D3 charts designed for ease of use with React
- [Enzyme](http://airbnb.io/enzyme/docs/installation/index.html)/[Jest](https://github.com/facebook/create-react-app/blob/master/packages/react-scripts/template/README.md#running-tests)
  - used for writing basic snapshot tests for my React components
[JSON Server](https://github.com/typicode/json-server)
  - A quick backend server to enable caching of the api data so I did not use up all my free API requests

