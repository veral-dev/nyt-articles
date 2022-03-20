import React, { useContext } from 'react';
import { ThemeContext } from '../../context/Theme.context';

// Styles
import {
  CardWrapper,
  CardImage,
  CardTextWrapper,
  CardTextDate,
  CardTextTitle,
  CardTextBody,
  CardStatWrapper,
  CardStats,
  LinkText
} from './Card.styles';

export default function Card({ article }) {
  const { darkMode } = useContext(ThemeContext);
  const { headline, multimedia, abstract, snippet } = article;

  const getDiffDay = () => {
    const date1 = new Date(article.pub_date);
    const date2 = new Date();
    const diffTime = Math.abs(date2 - date1);
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24)) - 1;
    if (diffDays === 0) return 'Today';
    else if (diffDays === 1) return `${diffDays} day ago`;
    else return `${diffDays} day ago`;
  };

  const getImage = () => {
    let image;
    if (multimedia) image = multimedia.find((elm) => elm.url);
    if (image) return `https://static01.nyt.com/${image.url}`;
    else return '';
  };

  return (
    <CardWrapper>
      <CardImage background={getImage()} />
      <CardTextWrapper>
        <CardTextDate>{getDiffDay()}</CardTextDate>
        <CardTextTitle darkTheme={darkMode}>{headline.main}</CardTextTitle>
        <CardTextBody>{abstract || snippet || ''}</CardTextBody>
      </CardTextWrapper>
      <CardStatWrapper>
        <LinkText target="_blank" href={article.web_url}>
          <CardStats>See more</CardStats>
        </LinkText>
      </CardStatWrapper>
    </CardWrapper>
  );
}
