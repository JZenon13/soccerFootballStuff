class TeamUpdatedPublisher {
  constructor(channel, queueName) {
    this.channel = channel;
    this.queueName = queueName || "teamUpdated";
  }

  publishTeamUpdated(teamData) {
    try {
      const teamUpdatedEvent = {
        eventType: "teamUpdated",
        data: teamData,
      };
      const msg = JSON.stringify(teamUpdatedEvent);
      this.channel.publish("", this.queueName, Buffer.from(msg));
      console.log(`Published teamUpdated event to ${this.queueName} : ${msg}`);
    } catch (error) {
      throw new Error(error);
    }
  }
}
