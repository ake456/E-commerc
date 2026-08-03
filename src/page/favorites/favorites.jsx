import React, { useContext } from "react";
import { CartContext } from "../../components/context/CartContext";
import PageTransition from "../../components/PageTransition";
import Product from "../../components/slideProducts/Product";

function Favorites() {
  const { favorites } = useContext(CartContext);

  return (
    <PageTransition>
      <div className="FavoritesPage">
        <div className="container">
          <div className="top_slide">
            <h2>Your Favorites</h2>
          </div>

          {favorites.length === 0 ? (
            <div className="empty_favorites">
              <h3>No favorite products yet ❤️</h3>
            </div>
          ) : (
            <div className="products">
              {favorites.map((item) => (
                <Product key={item.id} item={item} />
              ))}
            </div>
          )}
        </div>
      </div>
    </PageTransition>
  );
}

export default Favorites;
