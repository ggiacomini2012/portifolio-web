/* eslint-disable no-promise-executor-return */
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
// import { vi } from 'vitest';
import { fixture, assert } from '@open-wc/testing';
import App from '../../../App';
import preLoad, { timer } from '../functions/preLoad';

describe('Test createRoot', () => {
  const root = document.createElement('div');
  root.id = 'root';
  root!.style.display = 'none';
  root!.style.opacity = '0';

  it('1 - Should "root" have display equal "none":', () => {
    expect(root!.style.display).toBe('none');
  });
  it('2 - Should "root" have opacity equal "0":', () => {
    expect(root!.style.opacity).toBe('0');
  });
  it('3 - Should return a HTML div with id "root":', () => {
    const result = preLoad(ReactDOM, root, <BrowserRouter><App /></BrowserRouter>);
    expect(result).toBe(root);
  });
  it('4 - Should "root" have opacity equal "1" when 1.5 seconds pass:', async () => {
    await timer(root);
    await new Promise<void>((resolve) => setTimeout(() => resolve(), 1500));
    expect(root!.style.opacity).toBe('1');
  });
  it('5 - Should "root" have display equal "flex" when 0.3 seconds pass:', async () => {
    await timer(root);
    await new Promise<void>((resolve) => setTimeout(() => resolve(), 300));
    expect(root!.style.display).toBe('flex');
  });

  it('7 - Should change display and opacity of root element after a time:', async () => {
    const rootMock = await fixture('<div id="root" style="display: none; opacity: 0;"></div>') as HTMLElement;
    timer(rootMock);
    await new Promise<void>((resolve) => setTimeout(() => resolve(), 1500));
    assert.equal(rootMock.style.display, 'flex');
    assert.equal(rootMock.style.opacity, '1');
  });
});
