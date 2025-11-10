import axios from "axios";
import { use, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createProduct, readProducts, updateProduct } from "../redux/productsSlice";

const ProductsList = () => {
  const products = useSelector((state) => state.products);
  const dispatch = useDispatch();
  const [newProductName, setNewProductName] = useState("");
  const [editedProduct, setEditedProduct] = useState(null);

  useEffect(() => {
    axios
      .get("http://localhost:3001/products")
      .then((res) => {
        console.log(res);
        dispatch(readProducts(res.data));
      })
      .catch((err) => console.log(err));
  }, [dispatch]);

  const handleCreateProduct = () => {
    if (newProductName) {
      const newProduct = { id: Date.now(), name: newProductName };
      dispatch(createProduct(newProduct));

      axios
        .post("http://localhost:3001/products", newProduct)
        .then(() => {
          setNewProductName("");
        })
        .catch((err) => console.log(err));
    }
  };
  const handleUpdateProduct = () => {
    if(editedProduct){
        dispatch(updateProduct({id: editedProduct.id, name: editedProduct.name}));
    }
    axios.put(`http://localhost:3001/products/${editedProduct.id}`, {name: editedProduct.name})
    .then(() => { setEditedProduct(null)})
    .catch((err) => console.log(err));
  };
  const handleDeleteProduct = () => {};
  return (
    <>
      <h2>CRUD de productos</h2>
      <h3>Lista de productos</h3>
      <ul>
        {products.data.map((product) => (
          <li key={product.id}>
            {editedProduct?.id === product.id ? (
              <div>
                <input type="text" value={editedProduct.name} onChange={e => setEditedProduct({...editedProduct, name: e.target.value})} />
                <button onClick={handleUpdateProduct}>Actualizar</button>
              </div>
            ) : (
              <div>
                <span>{product.name}</span>
                <button onClick={()=> setEditedProduct(product)}>Editar</button>
                <button>Eliminar</button>
              </div>
            )}
          </li>
        ))}
        <li>Productos</li>
      </ul>
      <aside>
        <input
          type="text"
          value={newProductName}
          onChange={(e) => setNewProductName(e.target.value)}
          placeholder="Agregar del producto"
        />
        <button onClick={handleCreateProduct}>Agregar</button>
      </aside>
    </>
  );
};

export default ProductsList;
