class PlayerCreatedPublisher {
  constructor(channel, queueName) {
    this.channel = channel;
    this.queueName = queueName || "playerCreated";
  }

  publishPlayerCreated(playerData) {
    try {
      const playerCreatedEvent = {
        eventType: "PlayerCreated",
        data: playerData,
      };
      const msg = JSON.stringify(playerCreatedEvent);
      this.channel.publish("", this.queueName, Buffer.from(msg));
      console.log(
        `Published PlayerCreated event to ${this.queueName} : ${msg}`
      );
    } catch (error) {
      throw new Error(error);
    }
  }
}
