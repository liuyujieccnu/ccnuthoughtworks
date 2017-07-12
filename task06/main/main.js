const loadAllItems = require('./loadAllItems.js');

module.exports = function main(inputs) {
    var allitem = loadAllItems();
    var num = new Array();
    for(var i=0;i<allitem.length;i++){
    	num[i]=0;
    }
    var sum = 0;
    for(var i=0;i<inputs.length;i++){
		for(var j=0;j<allitem.length;j++){
			if(allitem[j]['barcode']==inputs[i]){
				num[j]++;
				sum+=allitem[j]['price'];
			}
		}
	}
	var str='***<没钱赚商店>购物清单***';
	for(var i=0;i<num.length;i++){
		if(num[i]!=0){
			str+='\n名称：'+allitem[i]['name']+
			'，数量：'+num[i]+allitem[i]['unit']+
			'，单价：'+allitem[i]['price'].toFixed(2)+
			'(元)，小计：'+(allitem[i]['price']*
				num[i]).toFixed(2)+'(元)';
		}
	}
	str+='\n----------------------\n总计：'+sum.toFixed(2)+'(元)'+'\n**********************';
	return str;
    var str='***<没钱赚商店>购物清单***';
};
