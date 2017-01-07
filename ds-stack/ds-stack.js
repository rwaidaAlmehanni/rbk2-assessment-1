var Stack = function() {
	this._storage=[];
};
Stack.prototype.add=function(value){
	this._storage.push(value);
}
Stack.prototype.remove=function(){ //first out the last in ...
	if(this._storage.length>0){
	var x=this._storage.pop();
       }else{
       	return "the stack is empty...";
       }
	return x;
}