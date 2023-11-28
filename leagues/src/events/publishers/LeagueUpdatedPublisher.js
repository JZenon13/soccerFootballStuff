class LeagueUpdatedPublisher {
  constructor(channel, queueName) {
    this.channel = channel;
    this.queueName = queueName || "leagueUpdated";
  }

  publishLeagueUpdated(leagueData) {
    try {
      const leagueUpdatedEvent = {
        eventType: "leagueUpdated",
        data: leagueData,
      };
      const msg = JSON.stringify(leagueUpdatedEvent);
      this.channel.publish("", this.queueName, Buffer.from(msg));
      console.log(
        `Published leagueUpdated event to ${this.queueName} : ${msg}`
      );
    } catch (error) {
      throw new Error(error);
    }
  }
}
