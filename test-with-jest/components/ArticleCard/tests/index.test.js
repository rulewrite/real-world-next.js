/**
 * @jest-environment jsdom
 */

import { render, screen } from '@testing-library/react';
import { cutTextToLength } from '../../../utils';
import ArticleCard from '../index';
import { article } from './mock';

describe('ArticleCard', () => {
  test('생성된 링크가 올바른 형식인지', () => {
    const component = render(<ArticleCard {...article} />);
    const link = component.getByRole('link').getAttribute('href');
    expect(link).toBe('/articles/healthy-summer-meloncarrot-soup-u12w3o0d');
  });

  test('생성된 요약은 100자를 초과할 수 없다', async () => {
    render(<ArticleCard {...article} />);
    const summary = screen.getByText(cutTextToLength(article.body, 100));
    expect(summary).toBeDefined();
  });
});
