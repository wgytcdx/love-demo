/**
 * Created by WGY on 2017/6/6.
 */

    //tab栏切换效果
$('.ct3_tabBtn>div').on('click',function(){
    $(this).css('backgroundColor','#fff').css('color','#525252');
    $(this).siblings().css('backgroundColor','#0094E0').css('color','#fff');
});
//保存按钮点击事件
$('.ct3_save').on('click',function(){
    alert('保存成功');
});
//内容按钮点击事件
$('.ct3_content>ul>li').on('click',function(){
    $(this).css('backgroundColor','#0094E0').css('color','#fff');
    $(this).siblings().css('backgroundColor','#fff').css('color','#0094E0');
});
//时间选择器组件
$('.form_datetime').datetimepicker({
    language:  'zh-CN',
    weekStart: 1,
    todayBtn:  1,
    autoclose: 1,
    todayHighlight: 1,
    startView: 2,
    forceParse: 0,
    showMeridian: 1
});

//为data准备的数据
var arr2=new Array();  arr2[0]="30";arr2[1]="52";arr2[2]="45";arr2[3]="78";
arr2[4]="27";arr2[5]="88";arr2[6]="65";

//用于存放图表上的数据
var lineChartData = {
//表的X轴参数
    labels : ["1989-02-05","1989-02-05","1989-02-05","1989-02-05","1989-02-05","1989-02-05","1989-02-05"],
    datasets : [
        {
            fillColor : "transparent",     //背景色，常用transparent透明
            strokeColor : "#f73f3f",  //线条颜色，也可用"#ffffff"
            pointColor : "#f73f3f",   //点的填充颜色
            pointStrokeColor : "#fff",            //点的外边框颜色
            data : [65,59,32,29,46,55,40]      //点的Y轴值
        },

        {
            fillColor : "transparent",
            strokeColor : "#259e33",
            pointColor : "#259e33",
            pointStrokeColor : "#fff",
            data : []    //data中的参数，通过下方for循环，获取arr2中的数据
        }
    ]
};

for(var i = 0; i < arr2.length;i++)
{
    lineChartData.datasets[1].data.push(arr2[i]);//将数组arr2中的值写入data
}

//定义图表的参数
var defaults = {
    scaleStartValue :null,     // Y 轴的起始值
    scaleLineColor : "rgba(0,0,0,.1)",    // Y/X轴的颜色
    scaleLineWidth : 1,        // X,Y轴的宽度
    scaleShowLabels : true,    // 刻度是否显示标签, 即Y轴上是否显示文字
    scaleLabel : "<%=value%>", // Y轴上的刻度,即文字
    scaleFontFamily : "'Arial'",  // 字体
    scaleFontSize : 20,        // 文字大小
    scaleFontStyle : "normal",  // 文字样式
    scaleFontColor : "#666",    // 文字颜色
    scaleShowGridLines : true,   // 是否显示网格
    scaleGridLineColor : "rgba(0,0,0,.05)",   // 网格颜色
    scaleGridLineWidth : 2,      // 网格宽度
    bezierCurve : true,         // 是否使用贝塞尔曲线? 即:线条是否弯曲
    pointDot : true,             // 是否显示点数
    pointDotRadius : 8,          // 圆点的大小
    pointDotStrokeWidth : 1,     // 圆点的笔触宽度, 即:圆点外层边框大小
    datasetStroke : true,        // 数据集行程
    datasetStrokeWidth : 2,      // 线条的宽度, 即:数据集
    datasetFill : false,         // 是否填充数据集
    animation : true,            // 是否执行动画
    animationSteps : 60,          // 动画的时间
    animationEasing : "easeOutQuart",    // 动画的特效
    onAnimationComplete : null    // 动画完成时的执行函数
};

window.onload = function(){
    var ctx = document.getElementById("myChart").getContext("2d");
    window.myLine = new Chart(ctx).Line(lineChartData,defaults);
}
