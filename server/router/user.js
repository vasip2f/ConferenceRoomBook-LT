const express = require("express");
const { check, validationResult } = require("express-validator");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const bodyParser = require("body-parser");
const User = require("../modal/User");
const router = express.Router();
const dns = require("dns")



router.post(
  "/signup",
  [
    check("username", "Please Enter a Valid Username").not().isEmpty(),
    check("email", "Please enter a valid email").isEmail(),
    check("password", "Please enter a valid password").isLength({
      min: 6,
    }),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({
        errors: errors.array(),
      });
    }

    const body = req.body;

    const username = body.username;
    const email = body.email;
    const password = body.password;

    try {
      let user = await User.findOne({
        email,
      });
      if (user) {
        return res.status(400).json({
          msg: "User Already Exists",
        });
      }

      // Check if the email domain exists and is authorized
      const [localPart, domain] = email.split("@");
      dns.resolveMx(domain, async (err, addresses) => {
        if (err || !addresses || addresses.length === 0) {
          return res.status(400).json({
            msg: "Invalid or unauthorized email domain",
          });
        }

        // Continue with the user registration
        user = new User({
          username,
          email,
          password,
        });

        const salt = await bcrypt.genSalt(10);
        user.password = await bcrypt.hash(password, salt);

        await user.save();

        const payload = {
          user: {
            id: user.id,
          },
        };

        jwt.sign(
          payload,
          "randomString",
          {
            expiresIn: 10000,
          },
          (err, token) => {
            if (err) throw err;
            res.status(200).json({
              token,
            });
          }
        );
      });
    } catch (err) {
      console.log(err.message);
      res.status(500).send("Error in Saving");
    }
  }
);


router.post(
  "/login",
  [
    check("email", "Please enter a valid email").isEmail(),
    check("password", "Please enter a valid password").isLength({
      min: 6,
    }),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({
        errors: errors.array(),
      });
    }

    const body = req.body
    const email = body.email
    const password = body.password

    try {
      let user = await User.findOne({
        email,
      });
      if (!user) {
        return res.status(400).json({
          msg: "User Not Registered",
        });
      }

      const isMatch = await bcrypt.compare(password, user.password)

      if (!isMatch) {
        return res.status(401).json({
          msg: "Incorrect Password",
        });
      }





      const payload = {
        user: {
          id: user.id,
        },
      };

      jwt.sign(
        payload,
        "randomString",
        {
          expiresIn: 3600,
        },
        (err, token) => {
          if (err) throw err;
          res.status(200).json({
            token,
            user

          });
        }
      );
    } catch (err) {
      console.log(err.message);
      res.status(500).send("Server Error");
    }
  }
);


router.get('/getusers', async (req, res) => {
  const allusers = await User.find()
  res.send(allusers)
});


router.get('/getusers/:id', async (req, res) => {
  const _id = req.params.id;
  const allusersById = await User.findById(_id)
  res.send(allusersById)
});

module.exports = router;



// router.post(
//   "/signup",
//   [
//     check("username", "Please Enter a Valid Username").not().isEmpty(),
//     check("email", "Please enter a valid email").isEmail(),
//     check("password", "Please enter a valid password").isLength({
//       min: 6,
//     }),
//   ],
//   async (req, res) => {
//     const errors = validationResult(req);
//     if (!errors.isEmpty()) {
//       return res.status(400).json({
//         errors: errors.array(),
//       });
//     }

//     const body = req.body

//     console.log(req);
//     const username = body.username 
//     const email =  body.email 
//     const password =  body.password 

//     try {
//       let user = await User.findOne({
//         email,
//       });
//       if (user) {
//         return res.status(400).json({
//           msg: "User Already Exists",
//         });
//       }

//       user = new User({
//         username,
//         email,
//         password,
//       });

//       const salt = await bcrypt.genSalt(10);
//       user.password = await bcrypt.hash(password, salt);

//       await user.save();

//       const payload = {
//         user: {
//           id: user.id,
//         },
//       };

//       jwt.sign(
//         payload,
//         "randomString",
//         {
//           expiresIn: 10000,
//         },
//         (err, token) => {
//           if (err) throw err;
//           res.status(200).json({
//             token,
//           });
//         }
//       );
//     } catch (err) {
//       console.log(err.message);
//       res.status(500).send("Error in Saving");
//     }
//   }
// );
