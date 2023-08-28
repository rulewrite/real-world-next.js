import {
  composeArticleSlug,
  cutTextToLength,
  extractArticleIdFromSlug,
  slugify,
} from '../index';

/**
 * 테스트와 관련된 그룹
 * 동일한 함수나 모듈에 대한 테스트들
 */
describe('cutTextToLength는 문자열이 너무 길면 자른다', () => {
  // 테스트 선언 및 실행
  test('10자 초과 문자열 자르기', () => {
    const initialString = 'This is a 34 chracter long string';
    const cutResult = cutTextToLength(initialString, 10);
    // 함수의 출력과 예상한 결과를 비교
    expect(cutResult).toEqual('This is a ...');
  });

  test('10자보다 짧은 경우 자르지 않기', () => {
    const initialString = '7 chars';
    const cutResult = cutTextToLength(initialString, 10);
    expect(cutResult).toEqual('7 chars');
  });
});

describe('slugify는 문자열을 URL-safe하게 만든다', () => {
  test('문자열을 URL-safe 형식으로 변환한다.', () => {
    const initialString = 'This is a string to slugify';
    const slugifiedString = slugify(initialString);
    expect(slugifiedString).toEqual('this-is-a-string-to-slugify');
  });

  test('특수 문자가 포함된 문자열을 슬러그화 한다', () => {
    const initialString = 'This is a string to slugify!@#$%^&*()+';
    const slugifiedString = slugify(initialString);
    expect(slugifiedString).toEqual('this-is-a-string-to-slugify');
  });
});

describe('composeArticleSlug는 제목과 ID가 지정된 아티클 URL을 생성한다', () => {
  test('아티클 URL을 만든다', () => {
    const title = 'This is a title';
    const id = 'j81j91s';
    const articleSlug = composeArticleSlug(id, title);
    expect(articleSlug).toEqual('this-is-a-title-j81j91s');
  });

  test('특수 문자가 포함된 아티클 URL을 만든다', () => {
    const title = 'This is a title!@#$%^&*()+';
    const id = 'j81j91s';
    const articleSlug = composeArticleSlug(id, title);
    expect(articleSlug).toEqual('this-is-a-title-j81j91s');
  });
});

describe('extractArticleIdFromSlug는 아티클 URL에서 ID를 올바르게 추출한다', () => {
  test('아티클 URL에서 올바른 ID를 추출한다', () => {
    const articleUrl = 'this-is-a-title-j81j91s';
    const id = extractArticleIdFromSlug(articleUrl);
    expect(id).toEqual('j81j91s');
  });
});
