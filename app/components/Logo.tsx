type Props = React.SVGProps<SVGSVGElement>;

export default function Logo(props: Props) {
  return (
    <svg viewBox="0 0 270 299" width="270" height="299" {...props}>
      <path
        className="fill-red-400"
        d="M160.688,202.073c9.792,6.139 21.276,9.03 32.608,8.799c-9.722,10.389 -19.244,20.804 -27.804,31.668c-6.34,8.046 -12.237,16.459 -16.719,25.709l-0.276,0.578l-13.807,29.311c-7.459,-16.016 -14.02,-32.583 -24.097,-47.024c-9.84,-14.099 -21.289,-27.029 -33.061,-39.791c0.868,0.065 1.74,0.109 2.613,0.134c11.249,0.32 21.504,-2.754 30.561,-7.968c8.464,9.496 16.621,19.262 24.003,29.718l0.125,0.179c0.382,-0.539 0.768,-1.075 1.154,-1.61c7.597,-10.468 16,-20.204 24.7,-29.703Zm-109.975,-68.425c5.094,7.592 10.773,14.813 16.541,21.746c4.761,5.721 9.689,11.291 14.692,16.793c-5.494,1.439 -11.232,1.353 -16.607,-0.592c-15.101,-5.464 -21.05,-24.373 -14.626,-37.947Zm169.359,-0.654c2.25,5.703 2.727,12.115 1.256,18.001c-3.749,14.995 -17.984,21.031 -32.032,20.477c10.993,-12.024 21.588,-24.521 30.776,-38.478Zm-200.925,6.531c-10.632,-18.511 -18.011,-39.091 -18.095,-60.848l-0.001,0c-0,-32.352 21.729,-64.84 53.688,-74.601c6.921,-2.114 14.227,-3.154 21.387,-3.11c18.593,0.236 35.468,12.647 47.25,25.694c4.299,4.761 8.24,9.834 11.913,15.088c13.954,-19.741 32.362,-38.61 56.239,-40.39c32.659,-2.435 65.586,22.246 74.919,55.662c5.763,20.636 2.431,43.383 -5.569,63.188c-2.802,6.935 -6.103,13.567 -9.795,19.957c-0.1,-1.677 -0.248,-3.35 -0.441,-5.015c-1.528,-13.124 -6.921,-24.895 -14.757,-34.322c2.184,-7.203 3.466,-14.67 3.465,-22.316c-0.001,-23.541 -18.769,-46.53 -43.296,-47.235c-9.404,-0.27 -17.773,6.527 -24.584,13.542c-9.203,9.479 -16.734,20.662 -22.69,32.358l-13.657,27.417c-11.839,-24.09 -21.889,-50.313 -43.932,-67.088c-1.457,-1.109 -2.97,-2.144 -4.55,-3.064c-3.433,-1.997 -7.191,-3.452 -11.181,-3.451c-18.024,0.125 -34.706,12.937 -41.152,30.028c-4.321,11.455 -3.737,24.143 -0.963,35.398c0.221,0.898 0.456,1.791 0.704,2.679c-8.904,11.137 -13.99,25.612 -14.902,40.429Z"
      />
      <path
        className="fill-red-400/60"
        d="M145.617,152.715c5.57,8.815 12.163,15.471 19.784,19.98c7.614,4.505 16.201,6.761 25.749,6.761c11.487,-0 20.867,-3.359 28.143,-10.066c7.276,-6.812 10.916,-15.475 10.916,-25.989c-0,-10.113 -3.355,-18.526 -10.063,-25.234c-6.71,-6.71 -15.124,-10.065 -25.243,-10.065c-9.32,-0 -17.794,3.405 -25.411,10.214c-7.503,6.71 -15.462,18.176 -23.875,34.399m-20.808,-16.072c-5.57,-8.814 -12.163,-15.424 -19.784,-19.828c-7.503,-4.407 -16.087,-6.609 -25.748,-6.609c-11.602,-0 -21.039,3.304 -28.315,9.914c-7.162,6.609 -10.742,15.222 -10.742,25.837c0,10.113 3.353,18.527 10.06,25.234c6.71,6.71 15.124,10.066 25.243,10.066c9.32,-0 17.794,-3.406 25.411,-10.215c7.614,-6.811 15.576,-18.277 23.875,-34.399m12.11,27.487c-7.961,13.522 -16.429,23.486 -25.411,29.894c-8.868,6.309 -18.646,9.462 -29.334,9.462c-15.465,-0 -28.482,-5.557 -39.056,-16.672c-10.575,-11.216 -15.86,-25.136 -15.86,-41.761c-0,-17.525 4.717,-31.694 14.154,-42.509c9.55,-10.814 21.945,-16.223 37.179,-16.223c10.802,-0 20.523,3.156 29.164,9.462c8.755,6.309 17.225,16.375 25.411,30.194c7.731,-13.819 16.087,-23.983 25.069,-30.494c8.982,-6.609 18.988,-9.914 30.018,-9.914c15.234,-0 28.197,5.658 38.885,16.975c10.688,11.216 16.031,25.187 16.031,41.909c-0,17.525 -4.774,31.644 -14.325,42.361c-9.437,10.717 -21.774,16.072 -37.009,16.072c-10.688,-0 -20.296,-2.954 -28.823,-8.862c-8.413,-6.009 -17.111,-15.974 -26.096,-29.891"
      />
    </svg>
  );
}
