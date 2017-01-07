var Array=function(){
	var instance={};
	instance.arr=[];
	_.extend(instance,arrayMethods);
	return instance;
};
var arrayMethods={};
arrayMethods.first=function(){
	if(this.arr.length>0){
	return this.arr[0];
    }
return "empty array.."; 
};
arrayMethods.last=function(){
	if(this.arr.length>0){
    var l=this.arr.length-1;
	return this.arr[l];
	}
	return "empty array..";
};
