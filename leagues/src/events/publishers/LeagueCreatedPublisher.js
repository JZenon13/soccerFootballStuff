class LeagueCreatedPublisher {
  constructor(channel, queueName) {
    this.channel = channel;
    this.queueName = queueName || "leagueCreated";
  }

  publishLeagueCreated(leagueData) {
    try {
      const leagueCreatedEvent = {
        eventType: "leagueCreated",
        data: leagueData,
      };
      const msg = JSON.stringify(leagueCreatedEvent);
      this.channel.publish("", this.queueName, Buffer.from(msg));
      console.log(
        `Published leagueCreated event to ${this.queueName} : ${msg}`
      );
    } catch (error) {
      throw new Error(error);
    }
  }
}
