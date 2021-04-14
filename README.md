# saypr-assignment

## Project setup

```
npm install
```

### Compiles and hot-reloads for development

```
npm run serve
```

### Compiles and minifies for production

```
npm run build
```

#### Project Gif

![](https://user-images.githubusercontent.com/57585087/114563414-0f33e580-9c78-11eb-89d8-ccd623b74049.gif)

### Customize configuration

See [Configuration Reference](https://cli.vuejs.org/config/).

# Saypr React assignment

Welcome to Saypr's take home React test.

## Submission guidelines

### Sharing the code

Please upload your code to Github.


## Assignment Details

Build a single page app that displays the profile of 10 users (the data is obtained from an API endpoint)

The idea of both the assignments is to build a single page that displays the profile of 10 users (the data is obtained from an API endpoint). Each user's profile contains a avatar picture, name, email, phone, address, website and company name.

#### API endpoint for users data

All 10 users profile data is to be downloaded from the following API endpoint:
```
Method: GET
URL: https://jsonplaceholder.typicode.com/users
```

The schema of the data received in the response is:
```Javascript
// Array of 10 users
[
  {
    id,	// The user's id
    username,
    name,
    email,
    phone,
    website,
    address: {
	  street, // Address line 1
	  suite, // Address line 2
	  city,
	  zipcode
    },
    company: {
	  name, // The name of company where the user works
    }
  }
]
```

#### API endpoint for users' avatar pictures

You will be using [Avatars by DiceBear](https://avatars.dicebear.com/). They provide a free HTTP API to create unique avatar images based on any string we send as query parameter. Each string generates a unique image. You will use the `username` to generate a unique avatar for each user.

The URL for the `GET`  endpoint is:
```
https://avatars.dicebear.com/v2/avataaars/{{username}}.svg?options[mood][]=happy
```

The `{{username}}` in the URL is the placeholder for the user's username. It should be dynamically replaced by the username received from the users API endpoint. For example, if the username for one of the users is `psamd` then the URL for the avatar for this user will be: `https://avatars.dicebear.com/v2/avataaars/psamd.svg?options[mood][]=happy`

#### Loading Indicator

Upon opening the app a loading indicator is displayed until the data is fetched from the API and is ready to be displayed. The source code for the loading indicator can be obtained from: [http://tobiasahlin.com/spinkit/](http://tobiasahlin.com/spinkit/).

## Deadline

**Deadline for submission:** 3 days

DEMO - https://react-basic-assignment.psamd.now.sh/

### What are we looking for?

- Ability to start a new project
- Understanding of JSX
- Passing props to components
- Understanding of stateful and stateless Components
- Basic understanding of state management and component lifecycle methods
- Fetching data from an API endpoint
- Conditional rendering
- Working with lists

DEMO - [https://react-advanced-assignment.psamd.now.sh/](https://react-advanced-assignment.psamd.now.sh/)
