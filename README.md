# Frameworks/Library/Tools

## create-react-app

This project was bootstrapped with `create-react-app`, I chose it since it is easy and fast to set up.

## Axios

For fetching the data, I used `axios` instead of the built-in `fetch`. I chose `axios` because it because I don't need to write `res.json()` for an extra step. Also, `axios` makes it very clear about the method of the REST request by calling `axios.get()`, while `fetch` need to write out the method explicitly if you need to use `POST` (although in our case it is not necessary).

## Bootstrap

For the css, I used `bootstrap` to reduce the amount of css we need to write. Also it provides some reusable components, for example, I used `Button`.



# How to run it

Use `npm start` to run the project.

