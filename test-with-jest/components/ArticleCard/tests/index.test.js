/**
 * @jest-environment jsdom
 */

import { render } from '@testing-library/react';
import ArticleCard from '../index';
import { article } from './mock';

describe('ArticleCard', () => {
  test('생성된 링크가 올바른 형식인지', () => {
    const component = render(<ArticleCard {...article} />);
    const link = component.getByRole('link').getAttribute('href');
    expect(link).toBe('/articles/healthy-summer-meloncarrot-soup-u12w3o0d');
  });
});
