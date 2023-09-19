import PropTypes from "prop-types";
import React, { useEffect, useState, useRef } from "react";

// import ImgProductsBurguer from '../../assets/ImgProductsBurguer.png'
import { CardServices, Header } from "../../../components";
import IsloadingSpinner from "../../../components/IsloadingSpinner";
import api from "../../../services/api";
import formatCurrency from "../../../common/utils/formatCurrency";
import {
  Container,
  // HomeImage,
  ContainerMenu,
  Menu,
  ContainerProducts,
  CarouselStyle,
} from "./style";

export function OurServices() {
  const [categories, setCategories] = useState([]);
  const [services, setServices] = useState([]);
  const [filterServices, setFilterServices] = useState([]);
  const [activeCategory, setActiveCategory] = useState(0);

  useEffect(() => {
    async function loadCategories() {
      const { data } = await api.get("categories");
      const newCategory = [{ id: 0, name: "Todos" }, ...data];

      setCategories(newCategory);
    }
    async function loadProducts() {
      const { data: allProducts } = await api.get("services");

      const newProducts = allProducts.map((service) => {
        return { ...service, formatedPrice: formatCurrency(service.price) };
      });
      setServices(newProducts);
    }

    loadProducts();
    loadCategories();
  }, []);

  useEffect(() => {
    if (activeCategory === 0) {
      setFilterServices(services);
    } else {
      const newFilterProductCategory = services.filter(
        (service) => service.category_id === activeCategory
      );
      setFilterServices(newFilterProductCategory);
    }
  }, [activeCategory, services]);

  const brackPoints = [
    { width: 1, itemsToShow: 2 },
    { width: 400, itemsToShow: 3 },
    { width: 600, itemsToShow: 4 },
    { width: 900, itemsToShow: 8 },
    { width: 1300, itemsToShow: 10 },
  ];

  // MOVIMENTAÇÃO DO CARROUSEL
  const carouselRef = useRef(null);

  return (
    <>
      <IsloadingSpinner />
      <Header />
      <Container>
        {/* <HomeImage src={ImgProductsBurguer} /> */}

        <ContainerMenu>
          <CarouselStyle
            ref={carouselRef}
            breakPoints={brackPoints}
            easing="cubic-bezier(1,.15,.55,1.54)"
            tiltEasing="cubic-bezier(0.110, 1, 1.000, 0.210)"
          >
            {categories &&
              categories.map((category) => (
                <Menu
                  type="button"
                  key={category.id}
                  isActiveCategory={activeCategory === category.id}
                  onClick={() => {
                    setActiveCategory(category.id);
                  }}
                >
                  {category.name}
                </Menu>
              ))}
          </CarouselStyle>
        </ContainerMenu>
        <ContainerProducts>
          {filterServices &&
            filterServices.map((service) => (
              <CardServices key={service.id} service={service} />
            ))}
        </ContainerProducts>
      </Container>
    </>
  );
}
OurServices.propTypes = {
  location: PropTypes.object,
};
