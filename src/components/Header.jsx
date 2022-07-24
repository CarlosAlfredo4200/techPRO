import React from 'react'
import ImgHeader from '../img/header.png'
const Header = () => {
  return (
      <div className='contenido contenido-header'>
          
          <div className='imagen-header'>
          <img src={ImgHeader} alt="imgHeader"  />
          </div>

          <div className='texto-header'>
              <p className='tagline-producto'>Sonido Profesional</p>
              <h1 className='nombre-producto degradado-verde'>TechPRO</h1>
              <p className='descripcion-producto'>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident ab, quidem natus voluptates, voluptas velit suscipit eum non unde illo consectetur obcaecati labore beatae quae iusto rerum aspernatur sed animi?
              </p>
               <p className="precio-producto">Desde <span>$299</span></p>
          </div>
    </div>
  )
}

export default Header