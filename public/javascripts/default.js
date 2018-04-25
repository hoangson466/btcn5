function compute() 
{
	
	var so1=document.getElementById("sothu1").value;
	var so2=document.getElementById("sothu2").value;
	var cong=document.getElementById("cong");
	var tru=document.getElementById("tru");
	var nhan=document.getElementById("nhan");
	var chia=document.getElementById("chia");
	
	document.getElementById("ketqua").value ="";
	if(checkNumber()==false)
	{
		return;
	}
	
	if (so1==""&& so2=="")
	{
		document.getElementById("thongbao").innerHTML="Chưa nhập giá trị ở ô số thứ nhất và số thứ hai";
	    return;
	}
	
	if (so1=="")
	{
		document.getElementById("thongbao").innerHTML="Chưa nhập giá trị ở ô số thứ nhất";
	    return;
	}
	
	if (so2=="")
	{
		document.getElementById("thongbao").innerHTML="Chưa nhập giá trị ở ô số thứ hai";
	    return;
	}
	

	
	if (cong.checked==false&&nhan.checked==false&&tru.checked==false&&chia.checked==false)
	{
		document.getElementById("thongbao").innerHTML="Chưa chọn phép tính";
		return;
	}
	
	document.frm.submit();
} 

function checkNumber()
{
	document.getElementById("ketqua").value ="";
	var so1=document.getElementById("sothu1").value;
	var so2=document.getElementById("sothu2").value;
	
	var a=parseFloat(so1);
	var b=parseFloat(so2);
	
	if(a.toString()!=so1 && b.toString()!=so2 && so1!="" &&so2!="")
	{
		document.getElementById("thongbao").innerHTML="Giá trị nhập vào ở ô số thứ nhất và số thứ hai không phải là số";
		return false;
	}
	
	if(a.toString()!=so1 && so1!="")
	{
		document.getElementById("thongbao").innerHTML="Giá trị nhập vào ở ô số thứ nhất không phải là số";
		return false;
	}
	if(b.toString()!=so2 && so2!="")
	{
		document.getElementById("thongbao").innerHTML="Giá trị nhập vào ở ô số thứ hai không phải là số";
		return false;
	}
	document.getElementById("thongbao").innerHTML="";
	
	
}