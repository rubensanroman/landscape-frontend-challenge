const express = require('express');
const cors = require('cors');
const { body, validationResult } = require('express-validator');

const app = express();

app.use(express.json());
app.use(cors());

const PORT = 3030;

app.post(
  '/validate',
  [
    body('name').notEmpty().withMessage('El campo es obligatorio'),
    body('email')
      .notEmpty()
      .withMessage('El campo es obligatorio')
      .isEmail()
      .withMessage('El formato del correo electrónico es inválido'),
    body('phone')
      .optional({ checkFalsy: true })
      .isMobilePhone('es-CL')
      .withMessage('Formato de teléfono es inválido, debería ser +569XXXXXXXX'),
    body('age')
      .notEmpty()
      .withMessage('El campo es obligatorio')
      .custom((value) => {
        if (!Number.isInteger(+value) || +value < 18) {
          throw new Error('Debe ser mayor o igual a 18 años');
        }
        return true;
      })
  ],
  (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(422).json({ errors: errors.array() });
    }

    return res.status(200).json({ message: 'Validación exitosa' });
  }
);

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
