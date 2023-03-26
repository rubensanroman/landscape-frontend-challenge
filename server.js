const express = require('express');
const { body, validationResult } = require('express-validator');
const cors = require('cors');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

app.use(
  cors({
    origin: 'http://localhost:3000',
    credentials: true
  })
);

app.use(
  [
    body('name').notEmpty(),
    body('email').isEmail(),
    body('phone').optional({ nullable: true }),
    body('age').notEmpty().isInt({ min: 18 })
  ],
  (req, res, next) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res.status(422).json({ errors: errors.array() });
    }

    next();
  }
);

app.post('/validate', (req, res) => {
  const { name, email, phone, age } = req.body;
  res.json({ mensaje: 'Datos enviados correctamente' });
});

const PORT = process.env.PORT || 3030;

app.listen(PORT, () => {
  console.log(`Servidor iniciado en puerto ${PORT}`);
});
