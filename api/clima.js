export default function handler(req, res) {
  res.status(200).json({
    ciudad: "Futrono",
    clima: "Despejado",
    temperatura: "13"
  });
}
