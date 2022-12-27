module.exports = (req, res) => {
  const user = req.body;

  return res.send({
    id: 1,
    ...user,
  });
};
