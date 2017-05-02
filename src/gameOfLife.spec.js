import expect from 'expect';

import gameOfLife from './gameOfLife';

import { arrayify } from './helpers';

describe('gameOfLife', () => {
  it('empty board stay empty', () => {
    const inputBoard = arrayify(`
      0000 0000
      0000 0000
      0000 0000
      0000 0000
    `);

    const expectedOutput = arrayify(`
      0000 0000
      0000 0000
      0000 0000
      0000 0000
    `);

    expect(gameOfLife(inputBoard)).toEqual(expectedOutput);
  });

  it('Any live cell with fewer than two live neighbours dies, as if caused by underpopulation.', () => {
    const inputBoard = arrayify(`
      0000 0000
      0100 0000
      0000 0000
      0000 0000
    `);

    const expectedOutput = arrayify(`
      0000 0000
      0000 0000
      0000 0000
      0000 0000
    `);

    expect(gameOfLife(inputBoard)).toEqual(expectedOutput);
  });

  it('Any live cell with two or three live neighbours lives on to the next generation.', () => {
    const inputBoard = arrayify(`
      0010 0000
      0100 0000
      0010 0000
      0000 0000
    `);

    const expectedOutput = arrayify(`
      0000 0000
      0110 0000
      0000 0000
      0000 0000
    `);

    expect(gameOfLife(inputBoard)).toEqual(expectedOutput);
  });

  it('Any live cell with more than three live neighbours dies, as if by overpopulation.', () => {
    const inputBoard = arrayify(`
      1010 
      0100 
      1010  
    `);

    const expectedOutput = arrayify(`
      0100
      1010
      0100
    `);

    expect(gameOfLife(inputBoard)).toEqual(expectedOutput);
  }); 

  it('Any dead cell with exactly three live neighbours becomes a live cell, as if by reproduction.', () => {
    const inputBoard = arrayify(`
      0010 0000
      0100 0000
      0010 0000
      0000 0000
    `);

    const expectedOutput = arrayify(`
      0000 0000
      0110 0000
      0000 0000
      0000 0000
    `);

    expect(gameOfLife(inputBoard)).toEqual(expectedOutput);
  });

  it('comples test 01', () => {
    const inputBoard = arrayify(`
      000000
      000100
      010010
      010010
      001000
      000000
    `);

    const expectedOutput = arrayify(`
      000000
      000000
      001110
      011100
      000000
      000000
    `);

    expect(gameOfLife(inputBoard)).toEqual(expectedOutput);
  });
});
