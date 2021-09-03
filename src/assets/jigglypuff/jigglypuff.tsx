// NOTE: SVG animation borrowed from https://codepen.io/kristyjy/full/vEjGXE

import React from 'react';

type JigglyProps = {
  width?: number;
  height?: number;
};

const JigglyPuff: React.FC<JigglyProps> = ({ width = 165, height = 181 }) => (
  <svg
    id="dancing"
    xmlns="http://www.w3.org/2000/svg"
    version="1.1"
    width={`${width}%`}
    height={`${height}%`}
    viewBox="0 0 160 200"
  >
    <g className="right-foot">
      <path
        fill="#f6c8dd"
        d="M67.1 162.55 Q70.9 162.75 77.75 167.3 84.55 171.8 82.95 173.0 79.25 175.7 64.5 177.35 49.25 179.1 43.3 177.0 41.7 176.5 42.0 174.15 42.3 171.85 44.15 170.0 46.95 167.25 55.65 164.7 63.5 162.4 67.1 162.55"
      />
      <path
        fill="#d5adbf"
        d="M55.75 164.8 Q58.85 162.15 68.0 161.15 L80.75 161.55 Q85.55 163.1 87.05 166.15 88.95 169.95 82.85 173.45 L79.0 174.85 73.25 176.05 Q73.9 174.45 68.4 169.9 62.15 164.75 55.75 164.8"
      />
      <path
        fill="#0d131a"
        d="M79.85 161.75 Q80.35 161.1 81.9 161.75 87.9 164.3 88.4 168.05 88.85 171.6 84.3 173.65 72.4 178.95 57.85 179.55 44.2 180.15 40.85 176.55 38.6 173.6 43.75 169.35 49.3 164.85 59.3 162.55 L63.15 161.95 67.0 161.7 69.1 162.05 Q70.4 162.4 69.75 162.45 55.75 164.15 47.85 168.7 41.25 172.5 42.9 174.75 46.1 178.25 61.65 176.9 76.5 175.6 83.8 172.0 87.35 170.25 86.85 167.7 86.3 164.95 80.85 162.95 79.3 162.4 79.85 161.75"
      />
    </g>
    <g className="left-foot">
      <path
        fill="#f6c8dd"
        d="M102.45 157.9 L114.55 158.5 126.25 159.7 Q126.7 159.5 131.2 161.8 135.6 164.05 136.45 164.85 140.8 168.85 141.55 172.6 142.1 175.55 140.95 175.7 130.35 177.5 117.15 171.7 110.4 168.7 103.35 163.8 101.3 162.4 101.7 160.15 L102.45 157.9 101.5 158.1 102.45 157.35 102.45 157.9"
      />
      <path
        fill="#d5adbf"
        d="M103.45 158.0 Q110.8 155.55 115.8 156.2 118.3 156.5 125.95 159.3 127.8 159.95 130.8 161.85 133.8 163.75 132.5 163.4 L128.85 162.5 Q126.0 162.2 123.0 163.6 117.1 166.45 116.55 171.25 113.95 171.15 110.1 169.25 104.2 166.4 102.25 161.3 101.9 160.4 102.35 159.3 102.75 158.25 103.45 158.0"
      />
      <path
        fill="#0d131a"
        d="M106.5 155.25 Q119.15 154.4 132.4 161.4 137.3 163.95 140.45 167.65 143.75 171.55 143.4 174.75 143.2 175.75 142.15 176.5 141.25 177.2 140.15 177.4 137.6 177.9 133.45 177.35 125.2 176.25 115.95 172.45 L109.95 169.65 Q106.6 167.85 104.5 165.9 102.85 164.4 102.0 162.3 101.0 159.9 101.8 158.25 102.05 157.85 102.5 157.85 L102.55 157.9 102.95 158.4 102.8 159.95 Q102.95 162.4 104.45 163.95 106.6 166.2 110.1 168.05 112.2 169.15 116.6 170.85 124.6 173.85 132.25 175.0 L137.95 175.4 140.15 175.1 141.15 174.4 Q141.4 172.35 138.2 168.65 134.9 164.8 130.75 162.55 125.2 159.5 120.75 158.4 116.65 157.4 108.2 156.8 107.45 156.75 106.45 156.05 105.45 155.35 106.5 155.25"
      />
    </g>
    <g className="body">
      <g className="left-arm">
        <path
          fill="#f6c8dd"
          d="M151.2 86.55 L155.75 85.2 Q160.4 84.1 160.85 85.2 161.75 87.25 159.6 93.9 156.9 102.1 151.4 107.55 L151.85 96.0 151.55 89.5 151.2 86.55"
        />
        <path
          fill="#d5adbf"
          d="M160.75 85.45 L160.6 88.9 Q160.05 93.3 158.1 98.0 156.15 102.7 153.3 105.55 L150.85 107.45 152.25 96.2 Q158.3 91.8 160.75 85.45"
        />
        <path
          fill="#0d131a"
          d="M150.4 85.25 Q159.55 82.9 161.25 84.25 163.5 86.1 160.8 93.8 157.7 102.5 150.25 111.3 150.0 111.55 150.3 109.45 150.55 107.35 150.8 107.0 156.95 99.4 159.25 92.25 161.0 86.95 160.1 85.75 L156.5 85.95 Q153.7 86.7 150.75 88.05 150.4 88.2 150.2 86.8 150.05 85.35 150.4 85.25"
        />
      </g>
      <g className="body-circle">
        <path
          fill="#f6c8dd"
          d="M127.5 46.35 Q151.7 65.25 151.7 96.75 151.7 128.2 129.8 147.5 109.15 165.7 78.5 165.7 47.2 165.7 27.4 145.65 8.4 126.45 8.4 98.2 8.4 68.0 27.6 48.55 46.45 29.4 75.0 29.4 105.7 29.4 127.5 46.35"
        />
        <path
          fill="#d5adbf"
          d="M11.8 119.25 Q8.6 109.55 8.45 101.05 8.7 108.35 13.25 117.45 18.4 127.85 27.25 136.6 49.3 158.45 80.15 158.45 112.0 158.45 133.25 137.55 141.3 129.6 146.35 120.0 150.7 111.7 151.3 105.35 151.3 114.1 146.9 124.1 142.1 134.95 133.45 143.8 112.0 165.7 77.95 165.7 42.7 165.7 23.3 140.85 15.8 131.25 11.8 119.25"
        />
        <path
          fill="#0d131a"
          d="M150.3 96.85 Q150.3 67.5 129.1 48.9 107.95 30.35 74.45 30.35 61.4 30.35 49.65 35.25 37.9 40.15 28.85 49.35 19.7 58.75 14.8 71.2 9.9 83.65 9.9 97.65 9.9 110.9 14.75 123.0 19.6 135.05 28.7 144.45 38.25 154.25 51.05 159.45 63.85 164.7 78.3 164.7 93.2 164.7 106.3 160.1 119.45 155.5 129.15 146.85 139.5 137.6 144.9 124.9 150.3 112.15 150.3 96.85 M130.6 47.6 Q152.4 66.7 152.4 96.85 152.4 127.6 131.65 147.1 110.95 166.55 78.3 166.55 46.8 166.55 26.85 146.25 7.6 126.7 7.6 97.65 7.6 66.05 27.85 46.65 46.8 28.5 74.45 28.5 108.8 28.5 130.6 47.6"
        />
      </g>

      <g className="left-ear">
        <path
          fill="#f6c8dd"
          d="M127.45 20.25 Q132.05 38.6 130.3 48.2 127.75 46.05 122.95 42.85 117.25 39.05 114.55 38.15 112.85 34.3 110.05 30.25 106.95 25.75 104.0 23.35 102.1 21.8 98.4 19.55 94.0 16.85 90.8 15.55 99.9 8.65 106.6 4.85 114.95 0.15 118.5 0.9 122.9 1.85 127.45 20.25"
        />
        <path
          fill="#0d131a"
          d="M123.25 42.9 Q117.65 39.4 114.55 38.15 112.15 33.2 110.3 30.35 109.2 28.55 106.5 25.8 L104.0 23.35 105.95 20.1 Q108.25 16.45 110.15 14.55 113.15 11.55 116.3 9.25 L118.7 14.1 Q121.3 20.05 122.25 25.65 123.2 31.3 123.35 37.65 L123.25 42.9"
        />
        <path
          fill="#0d131a"
          d="M128.95 22.35 Q133.25 41.5 131.05 48.65 L130.6 49.2 129.9 49.3 Q129.05 49.05 129.3 48.15 131.35 41.3 127.15 22.75 122.85 3.85 118.25 1.95 116.1 1.05 108.05 5.2 99.2 9.75 90.6 16.95 L89.9 17.15 89.3 16.8 89.05 16.1 89.4 15.5 Q98.05 8.25 107.0 3.6 116.0 -1.05 119.0 0.2 124.45 2.5 128.95 22.35"
        />
        <path
          fill="#0d131a"
          d="M117.9 7.75 L119.45 7.85 Q119.4 8.3 118.0 8.95 115.85 9.9 112.15 13.85 107.6 18.6 104.55 24.25 104.35 24.6 103.55 23.95 102.7 23.3 102.9 22.95 106.15 17.0 111.1 12.35 115.3 8.45 117.9 7.75"
        />
        <path
          fill="#0d131a"
          d="M123.25 25.8 Q125.5 35.85 124.6 43.2 L123.45 43.25 Q122.45 42.3 122.5 41.8 123.6 35.3 121.35 25.55 119.4 17.1 115.85 9.6 116.95 8.85 117.05 9.0 121.05 16.1 123.25 25.8"
        />
      </g>

      <g className="right-eye">
        <path
          fill="#ffffff"
          d="M58.75 74.15 Q70.95 74.15 78.8 82.45 85.45 89.5 85.45 97.5 85.45 109.9 77.2 118.25 69.35 126.15 58.75 126.15 48.9 126.15 41.75 117.75 34.85 109.65 34.85 99.45 34.85 89.6 41.55 82.05 48.6 74.15 58.75 74.15"
        />
        <path
          fill="#2cb5a9"
          d="M60.6 77.0 Q68.4 77.0 74.65 82.55 81.15 88.35 81.15 96.45 81.15 106.25 74.55 112.2 68.55 117.6 60.0 117.6 52.85 117.6 47.15 111.55 41.6 105.65 41.6 98.55 41.6 89.6 47.05 83.3 52.6 77.0 60.6 77.0"
        />
        <path
          fill="#0d131a"
          d="M77.3 82.2 Q70.15 75.0 60.05 75.0 49.6 75.0 42.75 81.85 35.95 88.7 35.95 99.2 35.95 109.9 42.8 117.45 49.65 125.05 59.3 125.05 68.95 125.05 76.45 118.0 84.5 110.45 84.5 99.45 84.5 89.35 77.3 82.2 M41.3 80.6 Q48.9 73.15 60.05 73.15 70.95 73.15 78.65 80.85 86.35 88.6 86.35 99.45 86.35 111.25 77.7 119.35 69.65 126.95 59.3 126.95 48.85 126.95 41.25 118.8 33.6 110.65 33.6 99.2 33.6 88.1 41.3 80.6"
        />
        <path
          fill="#0d131a"
          d="M80.3 96.75 Q80.3 89.0 74.55 83.45 68.8 77.95 60.7 77.95 53.6 77.95 48.35 83.4 42.65 89.3 42.65 98.5 42.65 105.9 48.3 111.45 53.9 117.0 61.45 117.0 69.1 117.0 74.7 111.0 80.3 104.95 80.3 96.75 M40.75 98.5 Q40.75 88.45 47.05 82.05 52.85 76.1 60.7 76.1 69.6 76.1 75.9 82.15 82.2 88.2 82.2 96.75 82.2 105.75 76.05 112.3 69.9 118.85 61.45 118.85 53.2 118.85 47.0 112.75 40.75 106.65 40.75 98.5"
        />
        <path
          className="pupil"
          fill="#ffffff"
          d="M74.45 87.75 Q74.45 91.0 72.15 93.35 69.8 95.65 66.55 95.65 63.3 95.65 61.0 93.35 58.7 91.0 58.7 87.75 58.7 84.5 61.0 82.15 63.3 79.85 66.55 79.85 69.8 79.85 72.15 82.15 74.45 84.5 74.45 87.75"
        />
      </g>

      <g className="left-eye">
        <path
          fill="#ffffff"
          d="M117.75 65.85 Q120.6 61.35 124.0 61.35 131.2 61.35 137.2 69.5 142.95 77.4 142.95 86.1 142.95 95.7 141.25 100.2 138.85 106.45 132.5 106.45 125.2 106.45 119.75 96.75 114.65 87.7 114.65 77.55 114.65 70.75 117.75 65.85"
        />
        <path
          fill="#2cb5a9"
          d="M119.9 67.1 Q121.9 63.7 124.35 63.7 130.55 63.7 135.55 70.2 140.65 76.85 140.65 85.65 140.65 92.15 138.55 96.3 136.45 100.5 133.05 100.5 127.3 100.5 122.4 92.55 117.65 84.8 117.65 76.4 117.65 70.9 119.9 67.1"
        />
        <path
          fill="#0d131a"
          d="M115.75 77.4 Q115.75 88.9 121.15 97.55 126.3 105.7 132.35 105.7 141.95 105.7 141.95 88.3 141.95 78.2 136.6 70.2 131.2 62.2 124.45 62.2 121.3 62.2 118.75 65.85 115.75 70.2 115.75 77.4 M113.85 77.4 Q113.85 69.8 117.25 65.0 120.35 60.65 124.55 60.65 132.2 60.65 138.2 69.0 144.25 77.4 144.25 88.3 144.25 99.05 140.2 103.7 137.25 107.15 132.25 107.15 125.0 107.15 119.45 98.2 113.85 89.2 113.85 77.4"
        />
        <path
          fill="#0d131a"
          d="M120.5 67.65 Q118.65 70.95 118.65 75.9 118.65 84.85 123.15 92.2 127.65 99.55 133.15 99.55 136.15 99.55 138.0 95.5 139.7 91.8 139.7 86.8 139.7 77.9 135.15 71.25 130.55 64.6 124.45 64.6 122.2 64.6 120.5 67.65 M116.8 75.9 Q116.8 70.0 119.2 66.25 121.45 62.75 124.45 62.75 131.8 62.75 136.85 70.4 141.55 77.55 141.55 86.8 141.55 92.65 139.4 96.8 137.05 101.4 133.15 101.4 126.85 101.4 121.85 93.55 116.8 85.75 116.8 75.9"
        />
        <path
          className="pupil"
          fill="#ffffff"
          d="M133.9 69.9 Q135.15 72.15 134.9 74.35 134.65 76.55 133.05 77.45 131.45 78.3 129.45 77.4 127.45 76.45 126.2 74.2 124.95 72.0 125.2 69.8 125.45 67.6 127.05 66.7 128.6 65.8 130.65 66.75 132.6 67.7 133.9 69.9"
        />
      </g>

      <g className="mouth">
        <path
          fill="#922f00"
          d="M109.8 115.15 Q104.25 111.6 100.75 111.4 L97.85 111.6 96.9 111.85 96.85 110.7 Q96.85 109.5 97.3 109.35 L100.85 108.7 Q104.45 108.05 106.9 107.15 L112.4 104.85 Q114.9 103.75 115.05 104.0 L116.25 107.25 Q117.25 110.6 117.25 113.05 L116.85 124.35 114.6 120.6 Q111.95 116.55 109.8 115.15"
        />
        <path
          fill="#ed8599"
          d="M109.65 114.8 Q112.8 117.85 115.15 122.1 116.3 124.25 116.85 125.8 L115.45 132.4 Q113.4 138.95 110.4 138.95 107.2 138.95 104.05 134.15 101.65 130.45 99.6 124.55 98.25 120.5 97.45 115.65 L96.9 111.6 101.4 111.4 Q106.55 111.75 109.65 114.8"
        />
        <path
          fill="#0d131a"
          d="M112.7 103.75 L114.2 103.05 Q114.75 102.9 115.15 103.05 116.9 103.8 117.7 109.65 118.45 115.25 117.95 122.15 116.65 139.75 110.35 139.75 104.2 139.75 99.1 125.35 97.2 119.9 96.35 114.9 95.55 110.0 96.3 109.1 96.55 108.8 97.15 108.6 L99.1 108.2 106.1 106.35 Q110.5 104.95 112.7 103.75 M115.65 110.45 Q115.1 106.2 114.45 105.0 114.05 105.25 113.6 105.45 109.6 107.6 106.15 108.55 L99.45 110.05 97.75 110.4 97.7 111.05 Q97.7 114.4 99.6 121.2 101.85 129.2 104.9 133.7 107.7 137.85 110.35 137.85 112.65 137.85 114.1 134.35 116.2 129.4 116.2 119.95 116.2 115.0 115.65 110.45"
        />
        <path
          fill="#0d131a"
          d="M96.75 111.15 Q103.2 108.9 110.35 114.35 117.95 120.05 117.0 128.55 116.95 128.95 116.4 128.95 115.85 128.95 115.9 128.55 116.55 122.65 110.05 116.6 103.25 110.3 97.05 112.45 96.7 112.55 96.55 111.9 96.4 111.25 96.75 111.15"
        />
      </g>

      <g className="right-arm">
        <path
          fill="#f6c8dd"
          d="M59.75 147.95 Q60.5 146.3 63.45 147.2 68.45 148.7 76.05 147.45 84.2 146.1 90.7 142.25 L90.25 144.05 Q89.15 146.25 85.85 148.3 83.25 149.9 75.9 151.85 72.05 152.9 68.95 152.75 64.95 152.6 61.1 150.6 58.95 149.5 59.75 147.95"
        />
        <path
          fill="#0d131a"
          d="M69.75 132.85 Q68.55 132.05 68.8 131.65 69.0 131.2 70.25 131.9 72.65 133.25 76.35 134.45 L82.4 136.35 Q87.25 137.95 88.95 138.8 91.55 140.15 91.8 141.85 92.15 144.55 88.65 147.3 85.45 149.8 80.15 151.55 67.7 155.6 61.45 151.4 59.9 150.4 60.25 149.95 60.55 149.55 62.05 150.55 65.6 152.9 73.25 151.65 80.5 150.45 85.8 147.15 90.25 144.4 89.95 142.1 89.8 141.15 87.3 140.05 L81.85 138.15 75.9 136.05 Q72.4 134.6 69.75 132.85"
        />
      </g>

      <g className="right-ear">
        <path
          fill="#f6c8dd"
          d="M4.0 35.35 Q7.05 32.3 26.3 35.25 44.55 38.0 52.05 41.65 54.65 42.95 41.95 65.5 30.4 86.0 26.15 91.2 23.5 94.5 17.85 92.35 12.15 90.15 9.4 84.7 5.15 76.4 2.9 57.85 0.55 38.8 4.0 35.35"
        />
        <path
          fill="#0d131a"
          d="M12.75 43.35 Q19.05 42.7 26.2 43.1 33.35 43.45 42.65 45.95 39.35 52.15 34.45 59.7 31.4 64.4 28.05 73.65 26.4 78.25 25.3 81.95 23.65 79.5 21.55 75.8 17.35 68.5 15.3 62.55 13.25 56.6 12.8 49.35 L12.75 43.35"
        />
        <path
          fill="#d5adbf"
          d="M2.9 36.95 Q2.65 49.05 6.25 63.25 10.15 78.4 16.1 85.9 20.45 91.35 16.85 90.75 13.25 90.15 11.0 87.2 8.5 84.0 6.4 78.7 3.5 71.35 2.55 62.45 1.65 54.1 2.2 44.7 L2.9 36.95"
        />
        <path
          fill="#0d131a"
          d="M50.0 39.85 Q52.25 41.2 51.8 41.8 51.35 42.45 48.65 41.2 43.5 38.75 25.6 36.6 7.1 34.3 5.05 36.5 1.3 40.5 3.55 59.45 5.8 78.25 10.55 84.95 13.1 88.6 12.75 89.0 12.45 89.4 9.25 86.3 3.65 80.9 0.9 60.5 -1.9 39.8 2.9 34.65 5.9 31.5 24.45 33.6 42.9 35.65 50.0 39.85"
        />
        <path
          fill="#0d131a"
          d="M28.0 44.45 Q18.55 43.5 13.15 44.05 12.9 47.15 13.9 52.8 15.0 59.3 17.15 64.85 19.25 70.3 24.85 80.0 27.25 71.65 33.45 60.0 37.25 52.75 41.25 46.5 36.4 45.25 28.0 44.45 M43.95 44.6 Q44.7 44.85 44.8 45.1 44.9 45.35 44.45 46.0 40.95 51.25 36.95 58.15 29.05 72.0 26.5 81.1 25.85 83.35 25.25 83.4 24.7 83.4 23.55 81.5 17.65 71.45 15.4 65.5 12.95 59.15 12.0 51.45 11.1 43.7 12.65 41.8 13.7 40.5 14.25 40.7 14.75 40.85 13.9 42.1 20.25 41.6 30.55 42.55 40.2 43.45 43.95 44.6"
        />
      </g>

      <g className="hair">
        <path
          fill="#f6c8dd"
          d="M90.4 83.15 Q85.1 83.15 80.45 79.05 75.55 74.75 75.55 69.15 75.55 67.05 76.4 64.35 77.3 61.5 78.4 60.4 L72.25 59.0 Q68.0 57.9 66.55 56.85 L60.1 51.65 Q55.25 47.4 54.75 45.55 53.65 41.95 53.65 37.05 53.65 29.55 61.65 22.35 70.25 14.65 80.85 14.65 95.8 14.65 106.8 26.45 117.2 37.6 117.2 51.05 117.2 66.25 110.25 74.65 103.2 83.15 90.4 83.15"
        />
        <path
          fill="#d5adbf"
          d="M109.55 75.3 Q103.05 83.2 91.25 83.2 81.8 83.2 77.5 75.35 76.55 73.65 76.15 70.2 L76.0 67.55 Q76.3 70.25 80.95 73.9 86.4 78.25 91.9 78.25 102.2 78.25 109.65 68.9 116.0 61.0 116.4 52.2 116.15 67.3 109.55 75.3"
        />
        <path
          fill="#0d131a"
          d="M117.75 52.55 Q117.75 67.8 110.5 75.95 103.45 83.9 90.6 83.9 80.2 83.9 76.05 74.9 74.3 71.1 74.65 67.1 75.0 63.0 77.45 60.2 79.5 60.7 79.15 61.1 77.05 63.2 76.8 66.75 76.5 70.25 78.05 73.7 81.8 82.05 90.6 82.05 103.4 82.05 110.0 72.65 115.6 64.75 115.6 52.55 115.6 37.35 105.25 26.55 94.9 15.75 80.25 15.75 70.0 15.75 61.75 23.6 52.85 32.0 54.75 42.45 55.2 44.95 54.55 45.05 53.85 45.15 53.4 42.65 51.35 31.1 59.65 22.1 67.9 13.2 80.25 13.2 95.6 13.2 106.7 24.9 117.75 36.55 117.75 52.55"
        />
        <path
          fill="#0d131a"
          d="M82.35 60.6 Q86.4 62.3 87.05 64.95 87.6 67.05 86.7 67.3 85.8 67.5 85.25 65.4 84.75 63.5 81.0 62.1 78.75 61.25 73.75 60.15 L69.2 58.9 Q67.05 58.1 66.0 57.05 65.15 56.2 65.3 55.85 65.5 55.5 66.55 56.15 67.8 57.0 69.95 57.45 L74.15 58.3 Q79.95 59.6 82.35 60.6"
        />
      </g>
    </g>
  </svg>
);

export default JigglyPuff;
