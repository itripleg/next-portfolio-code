export default function beer(req, res) {
  res.status(200).json({
    the_best_beer_is: "the one you're about to buy me. ha, got 'em 🍻",
  });
}
