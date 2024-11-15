export const checkStatus = (req, res) => {
  try {
    res.status(200).json({
      status: 200,
      message: "Teachy backend up and running.",
    });
  } catch (error) {
    res.status(400).send(error.message);
  }
};
