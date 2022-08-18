import fs from "fs";

const dataPath = "./data";
const productsPath = `${dataPath}/products.json`;
const ordersPath = `${dataPath}/orders.json`;

const startup = () => {
  if (!fs.existsSync(dataPath)) {
    fs.mkdirSync(dataPath);
  }
  if (!fs.existsSync(productsPath)) {
    fs.writeFileSync(productsPath, JSON.stringify([]));
  }
  if (!fs.existsSync(ordersPath)) {
    fs.writeFileSync(ordersPath, JSON.stringify([]));
  }
};

export default startup;
