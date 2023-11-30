const router = require("express").Router();
const { User, validate } = require("../models/user");
const Token = require("../models/token");
const crypto = require("crypto");
const sendEmail = require("../utils/sendEmail");
const bcrypt = require("bcrypt");
const multer = require('multer');
const jwt = require('jsonwebtoken');


const storage = multer.memoryStorage(); // Store the file as a buffer in memory
const upload = multer({ storage: storage });

// Register a new user and send an email verification link
router.post("/user", async (req, res) => {
  try {
    const { error } = validate(req.body);
    if (error) {
      return res.status(400).send({ message: error.details[0].message });
    }

    let user = await User.findOne({ email: req.body.email });
    if (user) {
      return res.status(409).send({ message: "User with given email already exists!" });
    }

    const salt = await bcrypt.genSalt(Number(process.env.SALT));
    const hashPassword = await bcrypt.hash(req.body.password, salt);

    user = await new User({ ...req.body, password: hashPassword }).save();



    const token = await new Token({
      userId: user._id,
      token: crypto.randomBytes(32).toString("hex"),
    }).save();
    
    const url = `${process.env.BASE_URL}users/${user.id}/verify/${token.token}`;
    await sendEmail(user.email, "Verify Email", url);

    res.status(201).send({ message: "An email has been sent to your account. Please verify your email." });
  } catch (error) {
    console.error(error);
    res.status(500).send({ message: "Internal Server Error" });
  }
});

// Verify the email using a provided token
router.get("/:id/verify/:token/", async (req, res) => {
  try {
    const user = await User.findOne({ _id: req.params.id });
    if (!user) {
      return res.status(404).send({ message: "User not found" });
    }

    const token = await Token.findOne({
      userId: user._id,
      token: req.params.token,
    });

    if (!token) {
      return res.status(400).send({ message: "Invalid token" });
    }

    // Verify the email and set the 'verified' flag
    await User.updateOne({ _id: user._id }, { verified: true });

    // Remove the token
    await Token.deleteOne({ _id: token._id });

    res.status(200).send({ message: "Email verified successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).send({ message: "Internal Server Error" });
  }
});


router.post('/login', async (req, res) => {
    try {
        // Validate request body for email and password (use Joi or similar library)
        const { email, password } = req.body;

        // Check if user exists
        const user = await User.findOne({ email });
        if (!user) return res.status(400).send('Invalid email or password.');

        // Check if password is correct
        const validPassword = await bcrypt.compare(password, user.password);
        if (!validPassword) return res.status(400).send('Invalid email or password.');

        
    } catch (error) {
		console.error(error);
        res.status(500).send('Internal Server Error');
    }
});


//To get the profile data (Mohan)
router.post("/getProfile", async (req, res) => {
	const { email } = req.body;
	User.findOne({ email })
		.then((profile) => {
			res.json(profile);
		})
		.catch((err) =>
			res.status(500).json({ error: "Failed to fetch profile" })
		);
});

/*router.post("/editProfile", async (req, res) => {
	const profileData = req.body;
	console.log(profileData);
	
	User.findOneAndUpdate({ email: profileData.email}, profileData, {
		new: true,
	}) */
  router.post("/editProfile", upload.single('profilePic'), async (req, res) => {
    const profileData = req.body;
    let profilePic = req.file?.buffer?.toString('base64') || null; // Convert the file buffer to base64 string
    if( profilePic ) {
      profilePic = "data:image/png;base64," + profilePic;
    }
    User.findOneAndUpdate({ email: profileData.email }, {...profileData, profilePic}, {
      new: true,
    })
		.then((profile) => {
    console.log(profile);
			if (profile) {
				res.json({ success: true });
			} else {
				res.status(400).json({
					error: "Profile not found",
				});
			}
		})
		.catch((err) => res.status(500).json({ error: "Server error" }));
});


router.post("/changePassword", (req, res) => {
	const { email, oldPassword, newPassword } = req.body;
	User.findOne({ email })
		.then((profile) => {
			if (profile) {
				bcrypt.compare(
					oldPassword,
					profile.password,
					(err, isMatch) => {
						if (err) throw err;

						if (isMatch) {
							bcrypt.genSalt(10, (err, salt) => {
								bcrypt.hash(newPassword, salt, (err, hash) => {
									if (err) throw err;

									profile.password = hash;
									profile
										.save()
										.then((user) =>
											res.json({ success: true })
										)
										.catch((err) =>
											res.status(500).json({
												error: "Failed to update password",
											})
										);
								});
							});
						} else {
							res.status(400).json({
								error: "Old password is incorrect",
							});
						}
					}
				);
			} else {
				res.status(404).json({ error: "Profile not found" });
			}
		})
		.catch((err) => res.status(500).json({ error: "Server error" }));
  });
module.exports = router;
