/** Routes for stringContainer */

const jsonschema = require('jsonschema');
const express = require('express');

const { BadRequestError } = require('../error');
const strSchema = require('../schemas/strData.json');
const strings = require('../dataContainer');

const router = new express.Router();

/** POST / string => { string }
 *
 * Makes a request to push on a new string
 * If not valid will throw an error
 *
 * Returns { added: string }
 */

// eslint-disable-next-line func-names
router.post('/', function(req, res) {
  const validator = jsonschema.validate(req.body, strSchema);

  if (!validator.valid) {
    const errs = validator.errors.map(e => e.stack);
    throw new BadRequestError(errs);
  }

  const { string } = req.body;
  strings.push(string);
  return res.json({ added: string });
});

/** GET / => [ strings ]
 *
 * Retrieves list of strings
 *
 * Returns { strings: [string, string, string] }
 */

// eslint-disable-next-line no-unused-vars
router.get('/', (req, res, next) => res.json({ strings }));

module.exports = router;
