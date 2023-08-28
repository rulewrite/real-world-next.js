import { cutTextToLength } from '../index';

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
