

exports.hello = (req, res) => {
  res.json({ result: `Hello ${req.params.parameter}!` });
};

exports.upper = (req, res) => {
  const parameter = req.params.parameter.toUpperCase();
  res.json({ result: `${parameter}` });
};

exports.lower = (req, res) => {
  const parameter = req.params.parameter.toLowerCase();
  res.json({ result: `${parameter}` });
};

exports.firstcharacters = (req, res) => {
  const parameter = req.params.parameter.charAt(0);
  res.json({ result: `${parameter}` });
};
