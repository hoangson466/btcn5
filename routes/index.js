var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');

router.use(bodyParser.json()); // for parsing application/json
router.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

/* GET home page. */
router.get('/', function(req, res, next) {
res.render('index');
});



router.post('/', function(req, res, next) {
	
	//lấy giá trị
	var so1=req.body.sothu1
	var so2=req.body.sothu2;
	var a=parseFloat(so1);
	var b=parseFloat(so2);
	
	//kiểm tra giá trị rống
	if (so1==""&& so2=="")
	{
		res.render('index',{sothu1:req.body.sothu1, sothu2:req.body.sothu2, thongbao:'Chưa nhập giá trị ô số thứ nhất và số thứ hai'});
	    return;
	}
	
	if (so1=="")
	{
		res.render('index',{sothu1:req.body.sothu1, sothu2:req.body.sothu2, thongbao:'Chưa nhập giá trị ô số thứ nhât'});
	    return;
	}
	
	if (so2=="")
	{
		res.render('index',{sothu1:req.body.sothu1, sothu2:req.body.sothu2, thongbao:'Chưa nhập giá trị ô số thứ hai'});
	    return;
	}
	
	//kiểm tra giá trị hợp lệ
	if(a.toString()!=so1 && b.toString()!=so2 && so1!="" &&so2!="")
	{
		res.render('index',{sothu1:req.body.sothu1, sothu2:req.body.sothu2, thongbao:'Giá trị nhập vào ở ô số thứ nhất và số thứ hai không phải là số'});
		return;
	}
	
	if(a.toString()!=so1 && so1!="")
	{
		res.render('index',{sothu1:req.body.sothu1, sothu2:req.body.sothu2, thongbao:'Giá trị nhập vào ở ô số thứ nhất không phải là số'});
		return;
	}
	if(b.toString()!=so2 && so2!="")
	{
		res.render('index',{sothu1:req.body.sothu1, sothu2:req.body.sothu2, thongbao:'Giá trị nhập vào ở ô số thứ hai không phải là số'});
		return;
	}
	
	
	//tính toán
	var k=null;
	if(req.body.pheptinh=="cong"){
		k=a+b;
		res.render('index',{cong:true,sothu1:req.body.sothu1, sothu2:req.body.sothu2, ketqua:k});
	}
	if(req.body.pheptinh=="tru"){
		k=a-b;
		res.render('index',{tru:true,sothu1:req.body.sothu1, sothu2:req.body.sothu2, ketqua:k});
	}
	if(req.body.pheptinh=="nhan"){
		k=a*b;
		res.render('index',{nhan:true,sothu1:req.body.sothu1, sothu2:req.body.sothu2, ketqua:k});
	}
	if(req.body.pheptinh=="chia"){
		
		//kiểm tra số chia = 0
		if(b==0){
			res.render('index',{chia:true,sothu1:req.body.sothu1, sothu2:req.body.sothu2, thongbao:'Số chia phải khác 0'});
			return;
		}
		k=a/b;
		res.render('index',{chia:true,sothu1:req.body.sothu1, sothu2:req.body.sothu2, ketqua:k});
	}
	
	//kiểm tra chọn phép tính
	if(k==null){
		res.render('index',{sothu1:req.body.sothu1, sothu2:req.body.sothu2, thongbao:'Chưa chọn phép tính'});
	}
});


module.exports = router;
