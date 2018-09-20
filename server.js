#!/usr/bin/env node

let fs = require('fs')
let moment = require('moment')
let fetch  = require('node-fetch')

let token    = '5a6971beaded415ef73e686e73f6be02'
let base_url = `https://api.darksky.net/forecast/`
let make_url = day => `${base_url}${token}/45.5898,-122.5951,${day}T09:40:00`

let daysInMonth = []
let date = moment().format('YYYY:MM:DD');

let elapsedDaysInMonth = moment().startOf('month').fromNow();
let daysLeft = parseInt(elapsedDaysInMonth.substring(0, 2));

for(var i = daysLeft; i>0; i--) {
  let day = moment().subtract(i, 'days').format('YYYY-MM-DD');
  daysInMonth.push(day)
}

let dates = daysInMonth.map((day, i) => {
  return fetch(make_url(day)).then(_ => _.json())
  .then(_ => [day, _])
  // if (i == 0 || i == 1) {
  //   console.log(make_url(day))
  //   return fetch(make_url(day))
  //   .then(_ => _.json())
  //   .then(_ => [day, _])
  // } else {
  //   return Promise.resolve()
  // }
})

Promise.all(dates).then(rs => {
  responses = rs
    .map(r => { if (r) {
      console.log(r);
      return { [r[0]]: r[1].hourly.data }
    }
  })
  fs.writeFileSync('data.json', JSON.stringify(responses))
})