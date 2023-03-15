db.produtos
  .find({ $and: [{ vendido: { lte: 100 } }, { vendido: { gte: 50 } }] }, { _id: 0, nome: 1, })
  .sort({ vendidos: 1 });