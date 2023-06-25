import type {NextApiRequest, NextApiResponse} from 'next';
import * as nodemailer from 'nodemailer';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const transporter = nodemailer.createTransport({
    host: process.env.MAIL_HOST,
    port: Number(process.env.MAIL_PORT || '2525'),
    auth: {
      user: process.env.MAIL_USER,
      pass: process.env.MAIL_PASS,
    },
  });

  console.log(req.body, process.env.MAIL_USER, process.env.MAIL_PASS);
  const {name, email, message} = req.body;

  if (!message || !name || !message) {
    return res.status(400).json({message: 'Please fill out the necessary fields'});
  }

  const mailData = {
    from: email,
    to: process.env.RECIPIENT_EMAIL,
    subject: `Message from ${name}`,
    text: `${message} | Sent from: ${email}`,
    html: `<div>${message}</div><p>Sent from: ${email}</p>`,
  };

  await new Promise((resolve, reject) => {
    transporter.sendMail(mailData, (err: Error | null, info) => {
      if (err) {
        reject(err);
        return res.status(500).json({error: err.message || 'Something went wrong'});
      } else {
        resolve(info.accepted);
        res.status(200).json({message: 'Message sent!'});
      }
    });
  });

  return;
}
