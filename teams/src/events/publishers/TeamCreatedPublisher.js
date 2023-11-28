class TeamCreatedPublisher {
  constructor(channel, queueName) {
    this.channel = channel;
    this.queueName = queueName || "teamCreated";
  }

  publishTeamCreated(teamData) {
    try {
      const teamCreatedEvent = {
        eventType: "teamCreated",
        data: teamData,
      };
      const msg = JSON.stringify(teamCreatedEvent);
      this.channel.publish("", this.queueName, Buffer.from(msg));
      console.log(`Published teamCreated event to ${this.queueName} : ${msg}`);
    } catch (error) {
      throw new Error(error);
    }
  }
}
