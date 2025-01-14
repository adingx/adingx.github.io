
function fileContents(divID, jsonObj, delimiter, spanDelimiter) {
	elem = document.getElementById(divID);
	ct = "<br>";
	for (var key in jsonObj) {
		if (jsonObj.hasOwnProperty(key)) {
			//create span element to attach
			if ( spanDelimiter ) {
				
				ct += "<div id='" + key + "'></div><br><br><br><span><b>" + key + "</b></span>" + delimiter;
				//ct += "<span id='" + key + "'><b>" + key + "</span>" + delimiter;
				//ct +=  "<br><br>"; 
			}else {
				ct += "<span id='" + key + "'><b>" + key + "</span>" + delimiter;
			}

			for (var i=0; i<jsonObj[key].length; i++) {
				// create a element to attach
				ct += "<a href=" + jsonObj[key][i].url + ">|" + jsonObj[key][i].name + "|</a>";
				//ct += "&ensp;";
				if ( spanDelimiter ) {
					ct += spanDelimiter;
				}else {
					ct += "&ensp;";
				}
			}
		}
		ct +=  "<br><br>"; 
	}
	//ct +=  "<br><br>"; 
	elem.innerHTML = ct ;
}

function fileShortcut() {
	elem = document.getElementById("shortcut_area");
	tags = wTags ;
	ct = "";
	for (var i=0; i<tags.length; i++) {
		ct += "<br><br>";
		ct += "<a href=" + tags[i].url + ">" + tags[i].name + "</a>";
		ct += "<br><br><br>";
	}
	elem.innerHTML = ct;
}
function AnimObject( domObj, attr, startTime, initVal, targVal, runMs, unit, endcb)	{
	this.domObj = domObj;this.attr = attr;this.targ = targVal;this.startTime = (startTime === 0) ? (new Date()).getTime() : startTime;
	this.runMs = runMs;this.endcb = endcb;this.range = targVal - initVal;this.val = initVal;this.prevTime = this.startTime;
	this.tick = 0;this.unit = unit;
}

var AnimMgr = (function()	{
	var _interval = 33, _anim_array = [],_tmr = null;
	function anim_tmr()	{
		var i = 0,	curTime = 0;
		curTime = (new Date()).getTime();
		for (i=0; i<_anim_array.length; i++)	{
			var done = false;
			if (_anim_array[i].startTime > curTime)
				continue;
			if ( _anim_array[i].runMs === 0 )	{
				_anim_array[i].val = _anim_array[i].targ;
				done = true;
				_anim_array[i].domObj.style.setProperty(_anim_array[i].attr, _anim_array[i].val + _anim_array[i].unit, "");
			}else if ( _anim_array[i].range === 0 )	{
				done = true;
			}else	{
				_anim_array[i].val += (curTime - _anim_array[i].prevTime) / _anim_array[i].runMs * _anim_array[i].range;
				_anim_array[i].prevTime = curTime;
				if ((_anim_array[i].range > 0 && _anim_array[i].val > _anim_array[i].targ) ||
					(_anim_array[i].range < 0 && _anim_array[i].val < _anim_array[i].targ)) 	{
					_anim_array[i].val = _anim_array[i].targ; done = true;
				}
				_anim_array[i].domObj.style.setProperty(_anim_array[i].attr, _anim_array[i].val + _anim_array[i].unit, "");
			}
			if ( done )	{
				var elem = _anim_array[i].elem, prop = _anim_array[i].prop, endcb = _anim_array[i].endcb;
				_anim_array.splice(i,1);
				if (typeof endcb == "function")
					endcb(elem, prop);
			}
		}
		if (_anim_array.length == 0 )	{
			_tmr = null;return true;
		}
		_tmr = setTimeout( function(){anim_tmr();}, _interval);
	}
	return {
		add: function(animObj) {var i = 0;for (i=0; i<_anim_array.length; i++)	{if ((_anim_array[i].domObj == animObj.domObj) && (_anim_array[i].attr == animObj.attr)){_anim_array[i].runMs = 0;}}_anim_array.push( animObj );if ( !_tmr ){_tmr = setTimeout(anim_tmr, _interval);}},
		stop: function() {clearTimeout(_tmr);_tmr = null;_anim_array.length = 0;},
		start: function() {	if ( _anim_array.length > 0) {setTimeout(anim_tmr, _interval);}},
		isBusy: function() {return (_tmr != null);}
	};
}());


function fileRecommandation() {
	var elem =  document.getElementById("recommand_area"), idx = 0,
		links = [];
	
	for (var key in wlinks) {
		var o = {"name": "", "url": ""} ;
		o.name = key;
		o.url =  "#" + key ;
		links.push(o);
	}
	// Timeout , overflow , 3 lines animation ;

	var fileContent = function() {
		ct = "";

		for (var i=0; i<2; i++) {
			if (idx+i < links.length ) {
				ct += "<a href=" + links[idx+i].url + ">" + links[idx+i].name + "</a>";
			}else {
				ct += "<a href=" + links[0].url + ">" + links[0].name + "</a>";
			}
			ct += "<br>";
		}
		idx++;
		if ( idx === links.length ) {
			idx = 0;
		}

		//setTimeout(function(){
			elem.style.setProperty("top", "0px", "");
			elem.innerHTML = ct;
		//},1);
	}


	var updateRec = function() {
		fileContent();
		var ao = new AnimObject(elem, "top", 0, 0, -17, 1000, "px", function(){
			setTimeout(updateRec, 3000);
		});
		AnimMgr.add(ao);
	}
	updateRec();
}

function fileTopMenu() {
	var elem =  document.getElementById("topMenu"), ct = "";
	
	//ct = "<a href='#recommand_area'>|top|</a>&ensp;<a href='javascript:hideTopMenu();'>|hide|</a>&ensp;";
	ct = "<a href='#topping'>|top|</a>&ensp;";
	for (var key in wlinks) {
		if (wlinks.hasOwnProperty(key)) {
			ct += "<a href=#" + key + ">|" + key + "|</a>";
			ct += "&ensp;";
		}
	}
	elem.innerHTML = ct ;

}

function showTopMenu() {
	document.getElementById('topMenu').style.display='block';
}

function hideTopMenu() {
	document.getElementById('topMenu').style.display='none';
}


window.onload = function(){
	fileContents("websites_area", wsites, "&ensp;");
	fileContents("weblinks_area", wlinks, "<br>", "<br>");

	//fileRecommandation();
	fileShortcut();

	fileTopMenu();
	//showTopMenu();
}

