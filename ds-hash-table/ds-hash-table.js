var makeHashTable = function() {
  //Do not change the max!
  var max = 4;

  return {
    _storage: [],
    retrieve: function(key) {
    	var x=hashFn(key,max)
      for(var i=0;i<this._storage[x].length;i++){
      	if(this._storage[x][i][0]===key){ 
      		return this._storage[x][i][1];
      	}
      }
    },

    insert: function(key, value) {
    	var flage=true;
      var x=hashFn(key,max);//to bring randomly index in hash table...
      if(this._storage[x]===undefined){//to create abocket if there isn't... 
      	this._storage[x]=[];
      }
      for(var i=0;i<this._storage[x].length;i++){
      	if(this._storage[x][i][0]===key){//this part to see if the key is exist befor we should make overwright the value...
      		this._storage[x][i][1]=value;
      		flage=false;
      	}
      }
        if(flage){
        	this._storage[x].push([key,value]);
        }

  }}
};

// This is a "hashing function". You don't need to worry about it, just use it to turn any key into a pseudo-random key
var hashFn = function(str, max) {
  var hash = 0;
  for (var i = 0; i < str.length; i++) {
    var letter = str[i];
    hash = (hash << 5) + letter.charCodeAt(0);
    hash = (hash & hash) % max;
  }
  return hash;
};