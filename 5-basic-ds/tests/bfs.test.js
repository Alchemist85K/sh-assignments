import bfs from '../bfs';

describe('BFS', () => {
  test('single node graph', () => {
    expect(bfs({ A: [] }, 'A')).toEqual(['A']);
  });

  test('two node graph', () => {
    expect(bfs({ A: ['B'], B: [] }, 'A')).toEqual(['A', 'B']);
  });

  test('multiple node graph', () => {
    const graph = {
      A: ['B', 'C'],
      B: ['D', 'E'],
      C: ['F', 'G'],
      D: [],
      E: [],
      F: [],
      G: [],
    };
    expect(bfs(graph, 'A')).toEqual(['A', 'B', 'C', 'D', 'E', 'F', 'G']);
  });
});
