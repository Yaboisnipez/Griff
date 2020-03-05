module.exports = {
  name: "whois",
  category: "info",
  usage: "[username | id | mention]",
  description: "Returns user information",
  run: (client, message, args) => {
    const setStatus = message.content.split(" ");

    if (setStatus[1] === "afk") {
      client.user.setAFK(true);
      message.channel.send("Your status has been set to afk!");
    } else if (setStatus[1] === "yes") {
      client.user.setActivity(`${args.join("")}`);
      message.channel.send(`Welcome back ${message.author}`);
    } else if (!setStatus[1] || setStatus[1] === undefined) {
      message.channel.send(
        "You did not choose afk or notafk as current status!"
      );
    } else {
      message.channel.send(
        "You did not choose afk or notafk as current status!"
      );
    }
  }
};