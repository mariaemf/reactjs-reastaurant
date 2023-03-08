import React, { useRef } from "react";
import {
  BsInstagram,
  BsArrowLeftShort,
  BsArrowRightShort,
} from "react-icons/bs";

import { SubHeading } from "../../components";
import { images, data } from "../../constants";

import "./Gallery.css";

const galleryImages = [
  images.gallery01,
  images.gallery02,
  images.gallery03,
  images.gallery04,
];

const Gallery = () => {
  const scrollRef = useRef(null);

  /* 
  implementação de função de rolagem, onde a mesma e responsavel 
  por manipular a posicao de rolagem horizontal => se direction 
  for left, a funcao diminui a posicao de rolagem em 300px 
  (movendo o scroll para a esquerda)
  permitindo a navegação pela direita ou esuqerda dentro da galeria de imagens
  */
  const scroll = (direction) => {
    const { current } = scrollRef;

    if (direction === "left") {
      current.scrollLeft -= 300;
    } else {
      current.scrollLeft += 300;
    }
  };

  return (
    <>
      <div className="app__gallery flex__center">
        <div className="app__gallery-content">
          <SubHeading title="Instagram" />
          <h1 className="headtext__cormorant">Photo Gallery</h1>
          <p
            className="p__opensans"
            style={{ color: "#AAAAAA", marginTop: "2rem" }}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Volutpat
            mattis ipsum turpis elit elit scelerisque egestas mu.
          </p>
          <button type="button" className="custom__button">
            View More
          </button>

          {/*esse codigo possui uma referencia ao scrollref que
         foi usada para manipular a posicao de rolagem
        da galeria de imagens, o codigo acaba renderizando uma 
        lista de imagens dentro do elemento de div, a lista e criada
        usando o map do array de galleryImagfes que acaba getrando um novo
        array com elemnto para cada imagem na galeria
        o componente img foi usado para exibir as imagens na tela com 
        a propriedade src -> alem disso o codigo define uma key unica para 
        cada elemento da lista 
         */}
        </div>
        <div className="app__gallery-images">
          <div className="app__gallery-images_container" ref={scrollRef}>
            {[
              images.gallery01,
              images.gallery02,
              images.gallery03,
              images.gallery04,
            ].map((image, index) => (
              <div
                className="app__gallery-images_card flex__center"
                key={`gallery_image-${index + 1}`}
              >
                <img src={image} alt="gallery_image" />
                <BsInstagram className="gallery__image-icon" />
              </div>
            ))}
          </div>
          <div className="app__gallery-images_arrows">
            <BsArrowLeftShort
              className="gallery__arrow-icon"
              onClick={() => scroll("left")}
            />
            <BsArrowRightShort
              className="gallery__arrow-icon"
              onClick={() => scroll("right")}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Gallery;
