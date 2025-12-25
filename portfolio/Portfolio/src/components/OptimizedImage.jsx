import React from 'react';

/**
 * OptimizedImage component with automatic lazy loading and WebP support
 * 
 * Features:
 * - Lazy loading for below-the-fold images
 * - WebP format with fallback to original
 * - Loading placeholder
 * - Responsive images support
 */
const OptimizedImage = ({
    src,
    alt,
    className = '',
    width,
    height,
    priority = false, // Set true for above-the-fold images
    sizes,
    ...props
}) => {
    // Convert image path to WebP if not already
    const getWebPPath = (imagePath) => {
        if (imagePath.endsWith('.webp')) return imagePath;
        return imagePath.replace(/\.(jpg|jpeg|png)$/i, '.webp');
    };

    const webpSrc = getWebPPath(src);
    const hasDifferentWebP = webpSrc !== src;

    return (
        <picture>
            {/* WebP version for modern browsers */}
            {hasDifferentWebP && (
                <source srcSet={webpSrc} type="image/webp" sizes={sizes} />
            )}

            {/* Fallback to original format */}
            <img
                src={src}
                alt={alt}
                className={className}
                width={width}
                height={height}
                loading={priority ? 'eager' : 'lazy'}
                decoding="async"
                {...props}
            />
        </picture>
    );
};

export default OptimizedImage;
