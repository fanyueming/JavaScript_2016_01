var c = {};
c.win = function(attr,value){
    if(typeof value =="undefined"){
        return document.documentElement[attr]||document.body[attr];
    } else{
        document.documentElement[attr] = value;
        document.body[attr] = value;
    }
}
var c={};
c.win=function(attr,value){//attr����ΪclientHeight clientWidth
    //scrollTop scrollLeft  ���У�ֻ��scrollTop��scrollLeft�ǿɶ�д�ġ�
    if(typeof value=="undefined"){
        return (document.documentElement||document.body)[attr];
    }
    else{
         return (document.documentElement[attr]=value)||(document.body[attr]=value)
        return (document.documentElement[attr]=value)||(document.body[attr]=value);
        return (document.documentElement||document.body)[attr]=value;
    }

}
