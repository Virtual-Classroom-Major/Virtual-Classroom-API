const sgMail = require("@sendgrid/mail");
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

exports.verifyEmail = (user, token) => {
  const body = `
  <div style="background-color:#e5d6ff;width:100%;height:100% ;margin:0;display:flex;flex-direction:column; justify-content:center;align-items:center">
    <center>
        <div style="width:69%; display:flex;margin-top:5%">
    Virtual Classroom
        </div>
    <div style="background-color:#ffffff;width:60% ;margin:2%;margin-bottom:5%;border-radius:10px;padding:5%">
    <h1>Verify your email</h1>
    <p style="font-size:20px;color:black">To continue setting up your Virtual Classroom account, we need to confirm your email address. Please click on the button below to verify your email address.</p>
    <a href="http://localhost:3000/verifyEmail/${token}">
    <button style="width:150px;height:50px;background-color:#5718f5;color:white;border-radius:10px;font-size:15px;margin-right:auto"><b>Verify email</b></button>
    </a>
    
    <p style="font-size:20px;color:black">Unable to click on the button ? Click here  <a href="http://localhost:3000/verifyEmail/${token}">http://localhost:3000/verifyEmail/${token}</a> </p>
    </div>
    </center>
</div>`;

  const message = {
    to: user.email,
    from: "virtual.classroom.app2022@gmail.com",
    subject: "Email Verification",
    text: "This is text",
    html: body,
  };

  sgMail
    .send(message)
    .then(() => console.log("E-Mail sent"))
    .catch((err) => console.log("Error", err));
};
