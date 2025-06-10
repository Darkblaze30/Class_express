export const getUser = {
    V1: async function (req, res) {
      res.status(410).send({ error: 'Version 1.0.0' });
    },
    alpha_1: async function (req, res) {
      res.status(410).send({ error: 'alpha' });
    },
    beta_2: async function (req, res) {
      res.status(410).send({ error: 'BETA 1.1.5-beta.2' });
    },
    V2: async function (req, res) {
      res.status(410).send({ error: 'Version 2.0.0' });
    },
    V3: async function (req, res) {
      res.status(410).send({ error: 'Version 3.0.0' });
    },
    default: async function (req, res) {
      let obj = { ...req.query, ...req.body, ...req.params };
      res.status(410).send({ error: 'default', obj });
    }
  };