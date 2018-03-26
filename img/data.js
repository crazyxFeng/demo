var data=[];

var dataStr='1、霍比特人3<br>\
<br>\
导演：彼得·杰克逊<br>\
编剧：弗兰·威尔士<br>\
主演：马丁·弗瑞曼<br>\
类型：动作、奇幻<br>\
制片国家：美国<br>\
语言：英语<br>\
上映日期：2015-01-23<br>\
片长：144分钟<br>\
<br>\
<br>\
2、博物馆的奇妙夜3<br>\
<br>\
导演：肖恩·李维<br>\
编剧：大卫·盖恩/外壳儿<br>\
主演：本·杰明<br>\
类型：科幻、奇幻<br>\
制片国家：美国<br>\
语言：英语<br>\
上映日期：2015-03-23<br>\
片长：120分钟<br>\
<br>\
<br>\
3、麦兜我和我的妈妈<br>\
<br>\
导演：谢立文/李军明<br>\
编剧：谢立文<br>\
主演：黄磊<br>\
类型：喜剧<br>\
制片国家：中国<br>\
语言：汉语<br>\
上映日期：2016-08-23<br>\
片长：115分钟<br>\
又名：麦兜·我和我的妈妈/麦兜故事6<br>\
';
var d=dataStr.split('<br><br><br>');
for (var i = 0; i < d.length; i++) {
	var c=d[i].split('<br><br>');
	data.push({
		img:c[0].replace('、',' ')+'.jpg',
		caption: c[0].split('、')[1],
		desc:c[1]
	});
	console.log(c[0].replace('、',' ')+'.jpg');
}
