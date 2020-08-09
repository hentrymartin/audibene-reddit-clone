import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Icon from '.';

describe('Icon component', () => {
  it('Check for src when it is not hovered', () => {
    const { getByAltText } = render(<Icon defaultSrc="/not-hovered.svg" hoverSrc="/hovered.svg" alt="icon testing"/>);

    const image = getByAltText('icon testing');
    expect(image.src).toBe('http://localhost/not-hovered.svg');
  });

  it('Check for src when it is hovered', () => {
    const { getByAltText } = render(<Icon defaultSrc="/not-hovered.svg" hoverSrc="/hovered.svg" alt="icon testing"/>);
    const image = getByAltText('icon testing');
    fireEvent.mouseOver(image);
    expect(image.src).toBe('http://localhost/hovered.svg');
  });
});
