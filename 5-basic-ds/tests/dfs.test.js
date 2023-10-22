import dfs from '../dfs';

describe('DFS', () => {
  test('empty graph', () => {
    expect(dfs({}, 'A')).toEqual([]);
  });

  test('graphs with one node', () => {
    expect(dfs({ A: [] }, 'A')).toEqual(['A']);
  });

  test('graphs with two nodes', () => {
    expect(dfs({ A: ['B'], B: [] }, 'A')).toEqual(['A', 'B']);
  });
});
