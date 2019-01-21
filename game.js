<html><head>
  <script language="JavaScript">
  <!--//Copyright (C) WEST MiRa http://www.west-mira.jp

  iro=new Array("blue","red","green","skyblue","orange","pink","black","white","gray","purple","yellow","kimidori");
  color_pic=new Array();
  for(i=0;i<12;i++)
    {color_pic[i]=new Image();
     color_pic[i].src=""+iro[i]+".gif";}
  color_pic[12]=new Image();
  color_pic[12].src="maru.gif";

  color_name=new Array("あお","あか","みどり","みず","かき","もも","くろ","しろ","はい","むらさき","き","きみどり");

    function img_load()
	{
	for(i=0; i<color_pic.length; i++)document.images["hidden"].src=color_pic[i].src;
	document.images["hidden"].src=color_pic[12].src;
	}

  function hajime()
    {document.form1.text1.value="";
     for(i=0;i<12;i++)document.images[i].src=color_pic[i].src;
     ran=Math.floor(Math.random()*100);
     while( ran > 11 )ran=Math.floor(Math.random()*100);
     document.form1.text1.value=color_name[ran]+"いろって、どのいろ？";}

  function colors(kazu)
     {if(ran == kazu)
		{document.form1.text1.value=color_name[ran]+"いろは、このいろ。だいせーかいっ！";
		 for(i=0; i<12; i++)if(i!=kazu)document.images[i].src=color_pic[12].src;}
       else alert("はずれ・・・");
     }

  //-->
  </script>

</head>
<body onLoad="img_load();">

<table align="center" bgcolor="#F2E2CB" cellpadding=7 border=1>
<tr><td align="center">
<form name="form1">
<input type=text size=50 name=text1>

<br><br>

<a href="javaScript:colors(0);"><img src="blue.gif" name="0" border="0"></a>
<a href="javaScript:colors(1);"><img src="red.gif" name="1" border="0"></a>
<a href="javaScript:colors(2);"><img src="green.gif" name="2" border="0"></a>
<a href="javaScript:colors(3);"><img src="skyblue.gif" name="3" border="0"></a>
<a href="javaScript:colors(4);"><img src="orange.gif" name="4" border="0"></a>
<a href="javaScript:colors(5);"><img src="pink.gif" name="5" border="0"></a><br>
<a href="javaScript:colors(6);"><img src="black.gif" name="6" border="0"></a>
<a href="javaScript:colors(7);"><img src="white.gif" name="7" border="0"></a>
<a href="javaScript:colors(8);"><img src="gray.gif" name="8" border="0"></a>
<a href="javaScript:colors(9);"><img src="purple.gif" name="9" border="0"></a>
<a href="javaScript:colors(10);"><img src="yellow.gif" name="10" border="0"></a>
<a href="javaScript:colors(11);"><img src="kimidori.gif" name="11" border="0"></a>

<hr width="55%">

  <input type="button" value="はじめる！" onClick="hajime();">
  <input type="button" value="やりなおし" onClick="hajime();">
<img src="" name="hidden" width="1" height="1" border="0">
</form>
</td></tr></table>
</body>
</html>
