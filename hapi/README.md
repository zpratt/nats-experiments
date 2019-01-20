## Running

1. `docker-compose up --build`
2. `curl -v http://localhost:5000/api/add`

*Current state*: You'll receive a string 'success', which was returned by the coffee-shop-receiver. I realize this is a shit pattern, but I was just looking to see a minimally functioning system.

This is major WIP. I copied a bunch of code from examples and then started trimming them down to the bare necessities so that I could understand how the components work together.

## What would I like this to be?

Goal: Have a gateway that enables the creation of data through a gateway and then distributes updates to N number of child processes. Each child process will process and persist information that is pertinent to it.

The concept is that there are N numbers of coffee shops that are geographically distributed. Each shop will receive menu updates and other things that are managed from a central location and distributed to the stores. Stores maintain their own local copies for offline support.

## TODO:

* [x] - Get a barebones example working with an NATS http gateway through hapi
* [x] - Get a barebones NATS message receiver working and hooked to the NATS service
* [ ] - Document more ideas of things to do
* [ ] - Write something that is more meaningful
* [ ] - Add tests
* [ ] - Document real-world use cases and findings
  