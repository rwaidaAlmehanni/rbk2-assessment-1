var Stack = function() {
	var instance=Object.create(methods)
	instance._storage=[];
	return instance;
};
var methods={};
methods.add=function(value){
	this._storage.push(value);
}
methods.remove=function(){ //first out the last in ...
	if(this._storage.length>0){
	var x=this._storage.pop();
       }else{
       	return "the stack is empty...";
       }
	return x;
}
//another way ...
var Stack2 = function() {
	this._storage=[];
};
Stack2.prototype.add=function(value){
	this._storage.push(value);
}
Stack2.prototype.remove=function(){ //first out the last in ...
	if(this._storage.length>0){
	var x=this._storage.pop();
       }else{
       	return "the stack is empty...";
       }
	return x;
}

