import express, { Request, Response } from "express";
import cors from "cors";
import { products } from "./data/products";
import { CartItem } from "./models/CartItem";

const app = express();
app.use(cors());
app.use(express.json());

let cart: CartItem[] = [];


app.get("/products", (_req: Request, res: Response) => {
  res.json(products);
});


app.post("/cart", (req: Request, res: Response) => {
  const { productId, quantity } = req.body;

  const product = products.find(p => p.id === productId);
  if (!product) {
    return res.status(404).json({ message: "Product not found" });
  }

  cart.push({ product, quantity });
  res.json(cart);
});


app.get("/cart", (_req: Request, res: Response) => {
  res.json(cart);
});

app.listen(3000, () => {
  console.log("E-commerce API running on http://localhost:3000");
});
