var aliMap = '<div id="map"></div>';
$("#mapDiv").append(aliMap);

function locationFinder() {

    // initializes an empty array
    var locations = [];

    // adds the single location property from bio to the locations array
    locations.push(bio.contacts.location);

    // iterates through school locations and appends each location to
    // the locations array. Note that forEach is used for array iteration
    // as described in the Udacity FEND Style Guide:
    // https://udacity.github.io/frontend-nanodegree-styleguide/javascript.html#for-in-loop
    education.schools.forEach(function(school){
      locations.push(school.location);
    });
   }

 //创建地图
    var map = new AMap.Map('map', {
        zoom: 4
    });

    AMapUI.load(['ui/misc/PathSimplifier', 'lib/$'], function(PathSimplifier, $) {

        if (!PathSimplifier.supportCanvas) {
            alert('当前环境不支持 Canvas！');
            return;
        }

        var pathSimplifierIns = new PathSimplifier({
            zIndex: 100,
            //autoSetFitView:false,
            map: map, //所属的地图实例

            getPath: function(pathData, pathIndex) {

                return pathData.path;
            },
            getHoverTitle: function(pathData, pathIndex, pointIndex) {

                if (pointIndex >= 0) {
                    //point 
                    return pathData.name + '，点：' + pointIndex + '/' + pathData.path.length;
                }

                return pathData.name + '，点数量' + pathData.path.length;
            },
            renderOptions: {

                renderAllPointsIfNumberBelow: 100 //绘制路线节点，如不需要可设置为-1
            }
        });

        window.pathSimplifierIns = pathSimplifierIns;

        //设置数据
        pathSimplifierIns.setData([{
            name: '北京-玉林-柳州',
            path: [
                [116.41, 39.90],
                [110.147395,22.63978],
                [109.415823,24.313366]

            ]
        }]);

        //对第一条线路（即索引 0）创建一个巡航器
        var navg1 = pathSimplifierIns.createPathNavigator(0, {
            loop: true, //循环播放
            speed: 1000000 //巡航速度，单位千米/小时
        });

        navg1.start();
    });
    
//引入SimpleMarker，loadUI的路径参数为模块名中 'ui/' 之后的部分
AMapUI.loadUI(['overlay/SimpleMarker'], function(SimpleMarker) {
    //启动页面
    initPage(SimpleMarker);
});

function initPage(SimpleMarker) {

    //创建SimpleMarker实例
    new SimpleMarker({

        //前景文字
        iconLabel: '北京',

        //图标主题
        iconTheme: 'default',

        //背景图标样式
        iconStyle: 'red',

        //...其他Marker选项...，不包括content
        map: map,
        position: [116.405285, 39.904989]
    });

    //创建SimpleMarker实例
     new SimpleMarker({

        //前景文字
        iconLabel: '玉林',

        //图标主题
        iconTheme: 'default',

        //背景图标样式
        iconStyle: 'lightgreen',

        //...其他Marker选项...，不包括content
        map: map,
        position: [110.147395,22.63978]
    });
    
      new SimpleMarker({

        //前景文字
        iconLabel: '柳州',

        //图标主题
        iconTheme: 'default',

        //背景图标样式
        iconStyle: 'gray',

        //...其他Marker选项...，不包括content
        map: map,
        position: [109.415823,24.313366]
    });
}