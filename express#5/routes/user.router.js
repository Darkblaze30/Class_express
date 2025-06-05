import mongoose from 'mongoose';
import connectionMongo from "./main.js";
import express  from 'express';
import CreateUserDto from '../dtos/create-user.dto.js';
import { body, validationResult } from 'express-validator';


const userRouter = express.Router()

mongoose.connect(`${process.env.DB_URL}/${process.env.DB_NAME}`);

const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    username: String,
    password: String,
    phone: String,
    address: String,
    active: Boolean
})

const User = mongoose.model('User', userSchema)

const validations = [
    body('name').exists().isString().isLength({min: 2}).withMessage('El nombre es muy corto'),
    body('email').exists().withMessage('no ingresaste ningun email').isEmail().withMessage('Ingrese un email valido'),
    body('username').exists().isString().isLength({min: 6}).withMessage('El nombre de usuario es obligatorio y debe tener minimo 6 caracteres'),
    body('password').exists().isString().isLength({min: 8}).withMessage('El password es obligatorio y debe tener minimo 8 caracteres')
]

// const userRouter = connectionMongo('Users', userSchema)

userRouter.post("/", validations, (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(402).json({ errors: errors.array() });
  }
  User.insertOne({ ...new CreateUserDto(req.body), active: true })
    .then((doc) => res.send(doc))
    .catch((err) => res.send(err));
});

// userRouter.get("/", (req, res) => {
//   User.find({})
//     .then((docs) => {
//       res.send(docs);
//     })
//     .catch((error) => {
//       res.send('error:' + error);
//     });
// });
// userRouter.get("/:_id", (req, res) => {
//   User.find(req.params)
//     .then((docs) => {
//       res.send(docs);
//     })
//     .catch((error) => {
//       res.send('error:' + error);
//     });
// });

// userRouter.put("/:_id", (req, res) => {
//   User.updateOne(req.params, {$set: req.body})
//     .then((docs) => {
//       res.send(docs);
//     })
//     .catch((error) => {
//       res.send('error:' + error);
//     });
// });

// userRouter.delete("/:_id", (req, res) => {
//   User.updateOne(req.params)
//     .then((docs) => {
//       res.send(docs);
//     })
//     .catch((error) => {
//       res.send('error:' + error);
//     });
// });


export default userRouter