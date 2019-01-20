## Questions

* What is the value of hemera-hapi?
  * it takes care of injecting the nats client into the context of a request so that a singleton instance of the nats client does not need to be maintained externally of the server
  * downsides?
    * it's not very popular. figuring out how to use it requires studying the implementation.