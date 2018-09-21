### Local Development Setup
````
git clone https://github.com/AntonEmery/hvac
cd hvac
npm install
````
#### Install JSON server
````
npm install -g json-server
````

#### Setup .env file
- create a file named .env in the root directory of the app
- Sign up for a free api key at darksky.net
- In your .env file add the line `DARKSKY_KEY=your key here`

#### Query API
Result will be written to data.json
````
node server.js
````

#### Format JSON file
`data.json` contains the results of the DarkSky query. It needs to be formatted a bit to enable the server to serve it up at the endpoint.  I recommend using a plugin to prettify the json. It should be formatted as below, with `data` being an array of objects and itself enclosed in curly brackets.
````
{
  "data": [
    {
      // data here
    }
  ]
}
````
#### Start json server
````
json-server --watch data.json
````
endpoint is at http://localhost:3000/data
#### Start react client
````
npm start
````

### Project Overview
  This application pulls from the Darksky Weather api and displays how often the AC or Heat system turned on for a given month at the Portland International Airport.  Hourly temperature data is retrieved for the current month, and analyzed to see how often the AC or Heat system turned on, which happen at 75 degrees or 62 degrees respectively. This data is displayed in a bar graph format.

### Challenges Encountered
  - Since Darksky only returns a day of weather per query getting data for a given month would require many requests. In the process of building and testing the app this would quickly burn through my 1000 daily request limit quickly.  I wrote a bit of node.js code in `server.js` to query the api and then store the data in a json file. I can then query that file from the React client. I used [JSON Server](https://github.com/typicode/json-server) to spin up a simple server that would give me the endpoint of `http://localhost:3000/data`.  This allowed me to build the app without constantly having to use up my api calls.

### Libraries Used
- [Create React App](https://github.com/facebookincubator/create-react-app)
  - this allowed me to get started quickly without worrying about tooling or setup
- [Moment.js](https://momentjs.com/)
  - For easy manipulation of dates when calculating past days for API call.
- [React Easy Chart](https://rma-consulting.github.io/react-easy-chart/)
  - D3 charts designed for ease of use with React
- [JSON Server](https://github.com/typicode/json-server)
  - A quick backend server to enable caching of the api data so I did not use up all my free API requests.

