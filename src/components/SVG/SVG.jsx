import React from 'react';
import styles from './SVG.css';

export const share = (
  <svg className={[styles.share, styles['vector-graphic']].join(' ')} viewBox="800 0 5000 5000">
    <path d="M376.677,171.954h-71.967c-9.35,0-17,7.65-17,17s7.65,17,17,17h54.683v201.167H81.727V205.954h60.35c9.35,0,17-7.65,17-17 s-7.65-17-17-17H64.444c-9.35,0-16.717,8.5-16.717,17.85v235.733c0,9.35,7.367,15.583,16.717,15.583h312.233 c9.35,0,16.717-6.233,16.717-15.583V189.804C393.394,180.454,386.027,171.954,376.677,171.954z" />
    <path d="M217.727,299.454c9.35,0,17-7.65,17-17V52.104l72.533,64.6c3.117,2.833,7.367,4.25,11.333,4.25 c4.817,0,9.35-1.983,12.75-5.667c6.233-7.083,5.667-17.85-1.417-24.083l-97.75-86.983c-6.233-5.383-15.3-5.667-21.817-0.567 c-3.117,1.417-5.667,3.967-7.367,6.8l-84.717,81.317c-6.8,6.517-7.083,17.283-0.567,24.083c6.517,6.8,17.283,7.083,24.083,0.567 l58.933-56.667v222.7C200.727,291.804,208.377,299.454,217.727,299.454z" />
  </svg>);

export const heart = (
  <svg className={styles['vector-graphic']} viewBox="85 -5 225 225">
    <path className={styles.heart} d="M51.911,16.242C51.152,7.888,45.239,1.827,37.839,1.827c-4.93,0-9.444,2.653-11.984,6.905 c-2.517-4.307-6.846-6.906-11.697-6.906c-7.399,0-13.313,6.061-14.071,14.415c-0.06,0.369-0.306,2.311,0.442,5.478 c1.078,4.568,3.568,8.723,7.199,12.013l18.115,16.439l18.426-16.438c3.631-3.291,6.121-7.445,7.199-12.014 C52.216,18.553,51.97,16.611,51.911,16.242z M49.521,21.261c-0.984,4.172-3.265,7.973-6.59,10.985L25.855,47.481L9.072,32.25 c-3.331-3.018-5.611-6.818-6.596-10.99c-0.708-2.997-0.417-4.69-0.416-4.701l0.015-0.101C2.725,9.139,7.806,3.826,14.158,3.826 c4.687,0,8.813,2.88,10.771,7.515l0.921,2.183l0.921-2.183c1.927-4.564,6.271-7.514,11.069-7.514 c6.351,0,11.433,5.313,12.096,12.727C49.938,16.57,50.229,18.264,49.521,21.261z" />
  </svg>);

export const X = (props) => (
  <svg className={styles['vector-graphic']} viewBox="-18475 -250 19000 19000">
    <path
      className={styles.x}
      d="M138.138,120.754l99.118-98.576c4.752-4.704,4.752-12.319,0-17.011c-4.74-4.704-12.439-4.704-17.179,0 l-99.033,98.492L21.095,3.699c-4.74-4.752-12.439-4.752-17.179,0c-4.74,4.764-4.74,12.475,0,17.227l99.876,99.888L3.555,220.497 c-4.74,4.704-4.74,12.319,0,17.011c4.74,4.704,12.439,4.704,17.179,0l100.152-99.599l99.551,99.563 c4.74,4.752,12.439,4.752,17.179,0c4.74-4.764,4.74-12.475,0-17.227L138.138,120.754z"
      onClick={props.modalGalleryHandler}
    />
</svg>);

export const Left = (props) => (
  <svg
    className={[styles['left-box'], styles['vector-graphic']].join(' ')}
    viewBox="0 0 5500 5500"
    onClick={props.previousPic}
  >
    <path
      className={styles.left}
      d="M57.633,129.007L165.93,237.268c4.752,4.74,12.451,4.74,17.215,0c4.752-4.74,4.752-12.439,0-17.179 l-99.707-99.671l99.695-99.671c4.752-4.74,4.752-12.439,0-17.191c-4.752-4.74-12.463-4.74-17.215,0L57.621,111.816 C52.942,116.507,52.942,124.327,57.633,129.007z"
    />
  </svg>);

export const Right = (props) => (
  <svg
    className={[styles['right-box'], styles['vector-graphic']].join(' ')}
    viewBox="0 0 5500 5500"
    onClick={props.nextPic}
  >
    <path
      className={styles.right}
      d="M183.189,111.816L74.892,3.555c-4.752-4.74-12.451-4.74-17.215,0c-4.752,4.74-4.752,12.439,0,17.179 l99.707,99.671l-99.695,99.671c-4.752,4.74-4.752,12.439,0,17.191c4.752,4.74,12.463,4.74,17.215,0l108.297-108.261 C187.881,124.315,187.881,116.495,183.189,111.816z"
    />
  </svg>);
