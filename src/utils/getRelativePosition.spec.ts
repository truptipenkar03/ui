import {
  getScroll,
  getRegion,
  getPoint,
  getFloaterPosition,
  calculateRelativePosition
} from "./getRelativePosition";

const getMockWindow = (window: any) => ({
  ...window
});

const getMockDocument = (document: any) => ({
  ...document
});

const getMockElement = (element: any) => ({
  getBoundingClientRect: () => element.boundingRect,
  ...element
});

describe('utils:getRelativePosition', () => {
  describe('getScroll', () => {
     it('should return pageYOffset', () => {
       const mockWindow = getMockWindow({
         pageYOffset: 300
       });

       const scrollTop = getScroll(mockWindow, true);
       expect(scrollTop).toEqual(300);
     });

    it('should return pageXOffset', () => {
      const mockWindow = getMockWindow({
        pageXOffset: 0
      });

      const scrollLeft = getScroll(mockWindow, false);
      expect(scrollLeft).toEqual(0);
    });

    it('should return scrollTop from documentElement', () => {
      const mockWindow = getMockWindow({
        document: {
          documentElement: {
            scrollTop: 300
          }
        }
      });

      const scrollTop = getScroll(mockWindow, true);
      expect(scrollTop).toEqual(300);
    });

    it('should return scrollLeft from documentElement', () => {
      const mockWindow = getMockWindow({
        document: {
          documentElement: {
            scrollLeft: 0
          }
        }
      });

      const scrollLeft = getScroll(mockWindow, false);
      expect(scrollLeft).toEqual(0);
    });

    it('should return scrollTop from body', () => {
      const mockWindow = getMockWindow({
        document: {
          documentElement: {},
          body: {
            scrollTop: 300
          }
        }
      });

      const scrollTop = getScroll(mockWindow, true);
      expect(scrollTop).toEqual(300);
    });

    it('should return scrollLeft from body', () => {
      const mockWindow = getMockWindow({
        document: {
          documentElement: {},
          body: {
            scrollLeft: 0
          }
        }
      });

      const scrollLeft = getScroll(mockWindow, false);
      expect(scrollLeft).toEqual(0);
    });
  });

  describe('getRegion', () => {
    it('should return the element region', () => {
      const mockElement = getMockElement({
        boundingRect: {
          height: 30,
          width: 100,
          left: 0,
          top: 0
        },
        ownerDocument: getMockDocument({
          defaultView: getMockWindow({
            pageYOffset: 400,
            pageXOffset: 0
          }),
          documentElement: {
            clientLeft: 0,
            clientTop: 0
          }
        })
      });

      const region = getRegion(mockElement);

      expect(region).toEqual({
        left: 0,
        top: 400,
        height: 30,
        width: 100
      });
    });
  });

  describe('getPoint', () => {
    const anchorRegion = {
      left: 0,
      top: 400,
      height: 30,
      width: 100
    };

    it('returns the top-left point', () => {
      const point = getPoint('tl', anchorRegion);

      expect(point).toEqual({
        top: 400,
        left: 0
      });
    });

    it('returns the top-center point', () => {
      const point = getPoint('tc', anchorRegion);

      expect(point).toEqual({
        top: 400,
        left: 50
      });
    });

    it('returns the top-right point', () => {
      const point = getPoint('tr', anchorRegion);

      expect(point).toEqual({
        top: 400,
        left: 100
      });
    });

    it('returns the center-left point', () => {
      const point = getPoint('cl', anchorRegion);

      expect(point).toEqual({
        top: 415,
        left: 0
      });
    });

    it('returns the center-center point', () => {
      const point = getPoint('cc', anchorRegion);

      expect(point).toEqual({
        top: 415,
        left: 50
      });
    });

    it('returns the center-right point', () => {
      const point = getPoint('cr', anchorRegion);

      expect(point).toEqual({
        top: 415,
        left: 100
      });
    });

    it('returns the bottom-left point', () => {
      const point = getPoint('bl', anchorRegion);

      expect(point).toEqual({
        top: 430,
        left: 0
      });
    });

    it('returns the bottom-center point', () => {
      const point = getPoint('bc', anchorRegion);

      expect(point).toEqual({
        top: 430,
        left: 50
      });
    });

    it('returns the bottom-right point', () => {
      const point = getPoint('br', anchorRegion);

      expect(point).toEqual({
        top: 430,
        left: 100
      });
    });
  });

  describe('getFloaterPosition', () => {
    const anchorRegion = {
      left: 0,
      top: 400,
      height: 30,
      width: 100
    };

    const floaterRegion = {
      left: 0,
      top: 400,
      height: 100,
      width: 100
    };

    const anchorPoint = {
      top: 400,
      left: 0
    };

    const floaterPoint = {
      top: 500,
      left: 100
    };

    // position is calculated assume the tl of anchor is positioned with br of floater
    it('returns the floaters position in the DOM', () => {
      const position = getFloaterPosition(
        anchorRegion,
        floaterRegion,
        anchorPoint,
        floaterPoint,
        false
      );

      expect(position).toEqual({
        top: 300,
        left: -100
      });
    });

    it('returns the floaters position in DOM when anchor is position relative', () => {
      const position = getFloaterPosition(
        anchorRegion,
        floaterRegion,
        anchorPoint,
        floaterPoint,
        true
      );

      expect(position).toEqual({
        top: -100,
        left: -100
      });
    });
  });
});
