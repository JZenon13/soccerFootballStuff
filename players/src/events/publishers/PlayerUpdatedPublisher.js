class PlayerUpdatedPublisher {
  constructor(channel, queueName) {
    this.channel = channel;
    this.queueName = queueName || "playerUpdated";
  }

  publishPlayerUpdated(playerData) {
    try {
      const playerUpdatedEvent = {
        eventType: "PlayerUpdated",
        data: playerData,
      };
      const msg = JSON.stringify(playerUpdatedEvent);
      this.channel.publish("", this.queueName, Buffer.from(msg));
      console.log(
        `Published PlayerUpdated event to ${this.queueName} : ${msg}`
      );
    } catch (error) {
      throw new Error(error);
    }
  }
}
