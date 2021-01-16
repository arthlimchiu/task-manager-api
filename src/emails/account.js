const sgMail = require('@sendgrid/mail');

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

// sgMail.send({
//   to: 'limchiuarth@gmail.com',
//   from: 'limchiuarth@gmail.com',
//   subject: 'This is my first creation',
//   text: 'I hope this one actually gets to you.'
// });

const sendWelcomeEmail = (email, name) => {
  sgMail.send({
    to: email,
    from: 'limchiuarth@gmail.com',
    subject: 'Thanks for joining in!',
    text: `Welcome to the app, ${name}. Let me know how you get along with the app.`
  });
};

const sendCancellationEmail = (email, name) => {
  sgMail.send({
    to: email,
    from: 'limchiuarth@gmail.com',
    subject: 'We will miss you!',
    text: `Hi, ${name}. We're sad to know that you're no longer with us. Please do let us know how can do better.`
  });
};

module.exports = {
  sendWelcomeEmail,
  sendCancellationEmail
};