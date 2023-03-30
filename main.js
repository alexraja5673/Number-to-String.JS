let num=prompt();
var str=[],x="";
for (i=0;i<num.length;i++){
	switch(num[i]){
	case "1":
	 str[i]="one";
		break;
	case "2":
	 str[i]="two";
		break;
	case "3":
	 str[i]="three";
		break;
	case "4":
	 str[i]="four";
		break;
	case "5":
	 str[i]="five";
		break;
	case "6":
	 str[i]="six";
		break;
	case "7":
	 str[i]="seven";
		break;
	case "8":
	 str[i]="eight";
		break;
	case "9":
	 str[i]="nine";
		break;
	default:
	 str[i]="zero";
		break;
	}
x=x.concat(" ",str[i]);
}
console.log(x);
