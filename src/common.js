console.warn("common");
require("./css/common.styl");

import 'lodash/core';
import 'lodash/map';
import 'lodash/each';

class App {
	addEvent(el=[],event="", handler=()=>{},context) {
		if (!el.length) el = [el];
		if (context) handler = handler.bind(context);
		for (let i = 0; i<el.length;i++) {
			el[i].addEventListener(event,handler,false);
		}
		return el;
	}
}

window.app = new App();
