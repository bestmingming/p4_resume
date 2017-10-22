var amap_s_tag = document.createElement('script');
amap_s_tag.type = 'text/javascript';
amap_s_tag.async = true;
amap_s_tag.charset = 'utf-8';
amap_s_tag.src = 'http://webapi.amap.com/maps?v=1.4.0&key=5b9793856184978689c8aef0a4190bb3';
var root_s = document.getElementsByTagName('script')[0];
root_s.parentNode.insertBefore(amap_s_tag, root_s);