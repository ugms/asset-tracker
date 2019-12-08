# UGMS Asset Tracking System

This is an Asset Tracking System, contracted by our client - Upwardly Global. Designed to be easy to onboard and easy to use, the system will allow the client to more easily rent and keep track of corporate hardware (primarily laptops), maintain a single "source of truth" across several locations, and make report-generation more feasible.

## The Client (Upwardly Global)
Upwardly Global is a 501(c)(3) non-profit organization, based in San Francisco with an additional office in New York, Chicago, and the DC area that helps immigrant, refugee and asylee professionals rebuild their careers in the United States.

Upwardly Global's mission is to eliminate employment barriers for skilled immigrants and refugees, and integrate this population into the professional U.S. workforce.

The Asset Tracking System was contracted by Upwardly Global's IT department. Because the client is a non-profit, company resources are relatively limited. By creating a tool that will save IT's workforce-hours, we will have cascading effect that allows Upwardly Global to better service their target demographics.

## Tech Stack

Server:
- PostgreSQL Database
- Sequelize ORM
- Passport.js authentication

Client:
- React.js

## Installation

In order to install, clone the repo locally using the command
```bash
git clone git@github.com:ugms/asset-tracker.git
```

## Usage

A local server can be started using the command:
```bash
bin/start
```

## Usage: Front-End Enabled
The Asset Management System contains an integrated front-end that integrates directly with the database. Begin by navigating to our Login/Registration page and log in with a username and password. You can then navigate to the asset overview pages, or to rental pages. `Submit` buttons fetch our database directly.

## Usage: Back-End Only

The following back-end routes can be hit to CREATE, READ, UPDATE, or DESTROY assets:
- `/assets`
- `/users`

Asset objects require the following properties:
```
{
  "chassie": "test1",
  "current_user": "test1",
  "previous_user": "test1",
  "name2": "test1",
  "manufacturer": "test1",
  "model": "test1",
  "os": "test1",
  "serial_number": "test1",
  "purchase_date": "2000-12-31",
  "notes": "test1"
}
```

User objects require the following properties:
```
{
  "username": "sample_user",
  "password": "sample_password"
}
```

## Contributors
- Anna Pawl: Lead Front-End Developer
- Ali Shalabi: Lead Back-End Developer
- Lucia Reynoso: Product Manager

## Open-Source Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## Work In Progress
- Integration with Salesforce Lightning Platform

## License
[MIT](https://choosealicense.com/licenses/mit/)
