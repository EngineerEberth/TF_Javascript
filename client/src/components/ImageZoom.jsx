import React, { useState } from 'react';
import './ImageZoom.css';

const ImageZoom = ({ src, alt }) => {
    const [isZoomed, setIsZoomed] = useState(false);

    // Función para abrir/cerrar el modal
    const toggleZoom = () => setIsZoomed(!isZoomed);

    return (
        <>
            {/* Imagen en miniatura */}
            <img 
                src={src} 
                alt={alt} 
                className="thumbnail" 
                onClick={toggleZoom} 
            />
            
            {/* Modal con la imagen ampliada */}
            {isZoomed && (
                <div className="zoom-overlay" onClick={toggleZoom}>
                    <div className="zoom-content">
                        <img 
                            src={src} 
                            alt={alt} 
                            className="zoomed-image" 
                        />
                    </div>
                </div>
            )}
        </>
    );
};

export default ImageZoom;
