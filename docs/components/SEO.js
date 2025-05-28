import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useLocation } from 'react-router-dom';

const SEO = ({ 
  title, 
  description, 
  keywords,
  image = '/og-image.jpg',
  type = 'website'
}) => {
  const location = useLocation();
  const canonicalUrl = `https://defuralle.com${location.pathname}`;
  const defaultTitle = 'Deutsch für alle - Онлайн изучение немецкого языка';
  const defaultDescription = 'Изучайте немецкий язык онлайн с помощью интерактивных курсов, упражнений и игр. Уникальная методика обучения для всех уровней.';
  const defaultKeywords = 'немецкий язык, онлайн обучение, изучение немецкого, курсы немецкого, грамматика немецкого, словарный запас немецкого';

  return (
    <Helmet>
      {/* Canonical URL */}
      <link rel="canonical" href={canonicalUrl} />

      {/* Primary Meta Tags */}
      <title>{title ? `${title} | ${defaultTitle}` : defaultTitle}</title>
      <meta name="title" content={title ? `${title} | ${defaultTitle}` : defaultTitle} />
      <meta name="description" content={description || defaultDescription} />
      <meta name="keywords" content={keywords || defaultKeywords} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:title" content={title ? `${title} | ${defaultTitle}` : defaultTitle} />
      <meta property="og:description" content={description || defaultDescription} />
      <meta property="og:image" content={`https://defuralle.com${image}`} />

      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={canonicalUrl} />
      <meta property="twitter:title" content={title ? `${title} | ${defaultTitle}` : defaultTitle} />
      <meta property="twitter:description" content={description || defaultDescription} />
      <meta property="twitter:image" content={`https://defuralle.com${image}`} />
    </Helmet>
  );
};

export default SEO; 