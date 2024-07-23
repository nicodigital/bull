function checkDevice() {

  let winW = document.documentElement.clientWidth;
	let device = '';

	if ( winW >= 1064) {
		device = 'desktop';
	} else if (winW < 1064 && winW > 992) {
		device = 'bigTablet';
	} else if (winW < 992 && winW > 640) {
		device = 'tablet';
	} else if (winW < 640) {
		device = 'mobile';
	}

  return device;

}

// console.log(detectarDispositivo());
export default checkDevice 