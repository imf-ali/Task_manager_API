const sgMail = require('@sendgrid/mail')

const sendGridAPIKey = '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'

sgMail.setApiKey(sendGridAPIKey)

const sendWelcomeMail = (email,name) => {
    sgMail.send({
        to: email,
        from: 'fahad.ali.in@rupeek.com',
        subject: 'My first mail!',
        text: `Welcome to the app ${name}. Looking forward to give you best user experience.`
    })
}

const sendCancelMail = (email,name) => {
    sgMail.send({
        to: email,
        from: 'fahad.ali.in@rupeek.com',
        subject: 'My first mail!',
        text: `See you later ${name}. Hope to see you back sometime soon.`
    })
}

module.exports = {
    sendWelcomeMail,
    sendCancelMail
}