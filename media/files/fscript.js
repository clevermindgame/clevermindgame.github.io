const e=document.getElementById("impostazioni"),t=document.getElementById("myDialog"),o=document.getElementById("cancelButton"),i=document.getElementById("okButton");var l,a,c,r,d,g,b,p,f,u,h,S,y,I,v,M,E,w,L,B=document.getElementsByName("modalita"),H=document.getElementsByName("dimensioni"),O=document.getElementsByName("esperto"),z=document.getElementsByName("livello"),x=document.getElementsByName("tema"),T=[["#1977a7","#3fb5cc","#ffffff","#fcf9ed"],["#d62628","#ef7f13","#ffffff","#fcf9ed"],["#3daf1e","#9dc31a","#ffffff","#fcf9ed"]],C=[["cb0","cn0","tb0","tn0","rb0","rn0","qb0","qn0"],["cb1","cn1","tb1","tn1","rb1","rn1","qb1","qn1"],["cb2","cn2","tb2","tn2","rb2","rn2","qb2","qn2"]],q=new Array(8),P=new Array(8),A=new Array(64),V=new Array(8),R=new Array(64),W=new Array(64),N=new Array(64),D=new Array(64),_=new Array(64),G=[6,8,10],Q=" ➜ ",U=" 🚶 ",Y=" ↺ ",$=16807,F=Math.pow(2,31)-1;function Z(e){for(localStorage.setItem("selectedOption1","gioco"),S=n-2,h=S*S*8,p=G[n-6]+Number(y),f=8*n,ge=0;ge<8;ge++)q[ge]=2;for(ge=0;ge<8;ge++)P[ge]=2;for(ge=0;ge<64;ge++)A[ge]=!1;for(ge=0;ge<8;ge++)V[ge]=2;for(p-=(e=($*e+0)%F)%3,b=0,g=0;b<p&&g<f;)if(g+=1,e=($*e+0)%F,l=Math.floor(e/128)%h,r=((a=(l-(c=l%8))/8)-(d=a%S))/S+1,0!=q[d+=1]&&0!=P[r]&&0!=V[c]&&!A[a]){switch((e=($*e+0)%F)%3>0&&1==y&&(1==r&&c<6&&(c|=1),r==S&&c<6&&(c&=6),1==d&&c>1&&(4==c||5==c?c&=6:c|=1),d==S&&c>1&&(4==c||5==c?c|=1:c&=6)),M=r*n+d,b+=1,V[c]-=1,A[a]=!0,q[d]-=1,P[r]-=1,u='<img src="media/files/'+C[I][c]+'.png" style="width="100%" height="100%">',c){case 0:N[M]=[-1,0,-1,0,1];break;case 1:N[M]=[1,0,-1,0,1];break;case 2:N[M]=[-1,-1,1,0,2];break;case 3:N[M]=[1,1,1,0,-2];break;case 4:N[M]=[-1,1,1,0,3];break;case 5:N[M]=[1,-1,1,0,-3];break;case 6:N[M]=[0,-1,1,1,1];break;case 7:N[M]=[0,1,1,-1,1]}_[M]=c,R[M]=u,document.getElementById(M).innerHTML=u}for(celle=document.getElementsByClassName("cinterno"),ge=0;ge<celle.length;ge++)W[celle[ge].id]||(celle[ge].innerHTML="");E=b,document.getElementById("mostra").textContent="Modifica",w=!1}function J(e){w=!0,document.getElementById("mostra").textContent="Nascondi",scacchiera=document.getElementById("scacchiera");scacchiera.rows[0];for(ge=scacchiera.rows.length-1;ge>=0;ge--)scacchiera.deleteRow(ge);for(L=Math.trunc((wWindow*scacchieraW/100-e-1)/e),charSize=Math.trunc(L/3),ge=0;ge<e;ge++){var t=scacchiera.insertRow(ge);for(j=0;j<e;j++){var o=t.insertCell(j);o.id=e*ge+j,o.classList.add("cinterno"),o.style.fontSize=charSize+"px",R[e*ge+j]="",W[e*ge+j]=!1,N[e*ge+j]=["","",1,0,1],_[e*ge+j]=8,0!=j&&j!=e-1||(o.classList.replace("cinterno","cbordoV"),R[e*ge+j]=String.fromCharCode(j+65,ge+49),o.innerHTML=R[e*ge+j],W[e*ge+j]=!0),0!=ge&&ge!=e-1||(o.classList.replace("cinterno","cbordoH"),R[e*ge+j]=String.fromCharCode(j+65,ge+49),o.innerHTML=R[e*ge+j],W[e*ge+j]=!0),0!=ge&&ge!=e-1||0!=j&&j!=e-1||(o.classList.replace("cbordoV","cangolo"),o.classList.replace("cbordoH","cangolo"),R[e*ge+j]=String.fromCharCode(j+65,ge+49),o.innerHTML=R[e*ge+j],W[e*ge+j]=!0)}}for(celle=document.getElementsByTagName("td"),ge=0;ge<celle.length;ge++)celle[ge].style.height=L+"px",celle[ge].style.width=L+"px";idStart=0,idEnd=0,nmosse=0,E=0}function K(){celle_b=document.querySelectorAll(".cbordoV, .cbordoH"),dialogB=document.getElementById("bordoDialog"),celle_b.forEach((e=>{e.addEventListener("click",(()=>{a=e,M=e.id,"studio"!=v&&0!=w||dialogB.showModal()}))})),celle_s=document.querySelectorAll(".cinterno"),dialogS=document.getElementById("imageDialog"),celle_s.forEach((e=>{e.addEventListener("click",(()=>{a=e,M=e.id,("studio"==v&&(1==w||""==a.innerHTML)||0==w&&E>0&&""==a.innerHTML)&&dialogS.showModal()}))}))}function X(e){if(v=e,localStorage.setItem("selectedOption1",e),document.getElementById("modo").innerHTML="modalità: <b>"+v+'</b> — <a href="https://clevermindgame.github.io/help.html#'+v+'" target="_blank">Help</a>',"studio"==v){for(document.getElementById("image0").style.visibility="visible",document.getElementById("mostra").disabled=!1,celle=document.getElementsByClassName("cinterno"),ge=0;ge<celle.length;ge++)W[celle[ge].id]=!1;te()}"gioco"==v&&(J(n),document.getElementById("image0").style.visibility="hidden",document.getElementById("mostra").disabled=!0,document.getElementById("imageTxt").textContent="Quale pezzo ritieni sia in questa cella?")}function ee(){for(M=65,ae(),celle=document.querySelectorAll(".cbordoV, .cbordoH, .cangolo"),k=0;k<celle.length;k++)j=celle[k].id%n,ge=(celle[k].id-j)/n,R[celle[k].id]=String.fromCharCode(j+65,ge+49),celle[k].innerHTML=R[celle[k].id],celle[k].style.fontSize=charSize+"px"}function te(){if(w){for(celle=document.getElementsByClassName("cinterno"),ge=0;ge<celle.length;ge++)W[celle[ge].id]||(celle[ge].innerHTML="");document.getElementById("mostra").textContent="Modifica",document.getElementById("image0").style.visibility="hidden",document.getElementById("imageTxt").textContent="Quale pezzo ritieni sia in questa cella?"}if(!w){for(celle=document.getElementsByClassName("cinterno"),ge=0;ge<celle.length;ge++)celle[ge].innerHTML=R[celle[ge].id];document.getElementById("mostra").textContent="Nascondi",document.getElementById("image0").style.visibility="visible",document.getElementById("imageTxt").textContent="Modifica il codice inserendo o rimuovendo pezzi:"}w=!w}function oe(){Le.innerHTML=""}function ie(e,t){if(w){switch(R[M]=e,a.innerHTML=R[M],ae(),t){case 0:N[M]=[-1,0,-1,0,1];break;case 1:N[M]=[1,0,-1,0,1];break;case 2:N[M]=[-1,-1,1,0,2];break;case 3:N[M]=[1,1,1,0,-2];break;case 4:N[M]=[-1,1,1,0,3];break;case 5:N[M]=[1,-1,1,0,-3];break;case 6:N[M]=[0,-1,1,1,1];break;case 7:N[M]=[0,1,1,-1,1];break;case 8:N[M]=["","",1,0,1]}_[M]=t}w||(e==R[M]?(W[M]=!0,a.innerHTML=R[M],"studio"==v?Le.insertAdjacentHTML("afterbegin","&nbsp;&nbsp; |  Bravo! Il pezzo è corretto.<br />"):0===(E-=1)?(pe=Number(pe)+1,localStorage.setItem("sfideVinte",pe),nmosse<Se&&(he=Number(he)+1,localStorage.setItem("sfideVeloci",he)),(nmosse<fe||-1==fe)&&(fe=nmosse,localStorage.setItem("minMosseSfide",fe)),nmosse>ue&&(ue=nmosse,localStorage.setItem("maxMosseSfide",ue)),ke.innerHTML="Bravo! Hai risolto la sfida in "+nmosse+" mosse<br>",Me.showModal(),Le.insertAdjacentHTML("afterbegin","&nbsp;&nbsp;&nbsp; Bravo! Hai trovato tutti i pezzi. <br />")):(1===E?(quantiR="Indovinato! rimane ",quantiP=" pezzo"):(quantiR="Indovinato! rimangono ",quantiP=" pezzi"),Le.insertAdjacentHTML("afterbegin","&nbsp;&nbsp; | "+quantiR+E+quantiP+"<br />"))):(nmosse+=1,Le.insertAdjacentHTML("afterbegin",nmosse+" | Sbagliato! Riprova.<br />")))}function ne(e){const t=[];for(var o=0;o<e.length;o++){const i=e[o];Array.isArray(i)?t[o]=ne(i):t[o]="object"==typeof i&&null!==i?deepCopyObject(i):i}return t}function le(e,t,o){ae(),idStart=e,R[e]="<em>"+R[e]+"</em>",document.getElementById(e).style.fontSize=Math.trunc(8*charSize/9)+"px",npassi=0,nrimbalzi=0,D=ne(N),j=e%n,ge=Math.round((e-j)/n),segno="",t>0?segno="+":t<0&&(segno="‒"),valstring='<span class="intero bianco">&nbsp;'+segno+Math.abs(t)+"&nbsp;</span>&nbsp;in ",nmosse+=1,cin='<span style="line-height: 160%; margin: 0;">'+nmosse+" | "+valstring+"<b>"+String.fromCharCode(j+65,ge+49)+"</b>"+Q,0==ge&&(stato=[1,0,t,o]),ge==n-1&&(stato=[-1,0,t,o]),0==j&&(stato=[0,1,t,o]),j==n-1&&(stato=[0,-1,t,o]),regola=D[e];do{rimb=!1,""===regola[0]?ii=stato[0]:(rimb=!0,ii=regola[0]),""===regola[1]?jj=stato[1]:(rimb=!0,jj=regola[1]),rimb&&(nrimbalzi+=1),D[n*ge+j]=["","",1,0,1],ge+=ii,j+=jj,o*=regola[2],t=(t+regola[3])*regola[4],stato=[ii,jj,t,o],regola=D[n*ge+j],npassi+=1}while(0!=ge&ge!=n-1&0!=j&j!=n-1);switch(idEnd=n*ge+j,uscita=1===o?'<img src="media/files/uscita_bianca.png" style="width="100%" height="100%">':'<img src="media/files/uscita_nera.png" style="width="100%" height="100%">',document.getElementById(idEnd).innerHTML=uscita,t>0?t="+"+t:t<0&&(t="‒"+-t),valstring=1===o?'<span class="intero bianco">&nbsp;'+t+"&nbsp;</span>&nbsp;in ":'<span class="intero nero">&nbsp;'+t+"&nbsp;</span>&nbsp;in ",cout=valstring+"<b>"+String.fromCharCode(j+65,ge+49)+"</b>",livelloV){case"passirimb":cout+=" | "+npassi+U+"e "+nrimbalzi+Y+"<br />";break;case"passi":cout+=" | "+npassi+U+"<br />";break;case"rimb":cout+=" | "+nrimbalzi+Y+"<br />";break;case"nulla":cout+="<br />"}Le.insertAdjacentHTML("afterbegin",cin+cout+"</span>")}function ae(){"undefined"!=typeof idStart&&M!=idStart&&(document.getElementById(idStart).innerHTML=R[idStart]),"undefined"!=typeof idEnd&&M!=idEnd&&(document.getElementById(idEnd).innerHTML=R[idEnd])}function ce(){for(I=localStorage.getItem("selectedOption4"),document.getElementsByClassName("logo-container")[0].style.backgroundColor=T[I][0],document.getElementById("titolo").style.color=T[I][2],document.getElementById("storico").style.backgroundColor=T[I][3],document.querySelectorAll(".cbordoV, .cbordoH").forEach((e=>{e.style.backgroundColor=T[I][1],e.style.color=T[I][2]})),document.querySelectorAll(".cangolo").forEach((e=>{e.style.backgroundColor=T[localStorage.getItem("selectedOption4")][0],e.style.color=T[localStorage.getItem("selectedOption4")][2]})),elements=document.querySelectorAll(".pezzi"),elements.forEach((e=>{src=e.getAttribute("src"),null!==src&&src.includes(".png")&&(newSrc=src.replace(/\d\.png/g,I+".png"),e.setAttribute("src",newSrc))})),celle=document.getElementsByClassName("cinterno"),ge=0;ge<celle.length;ge++)src=R[celle[ge].id],src.includes(".png")&&(newSrc=src.replace(/\d\.png/g,I+".png"),R[celle[ge].id]=newSrc,""!=celle[ge].innerHTML&&(celle[ge].innerHTML=celle[ge].innerHTML.replace(/\d\.png/g,I+".png")))}function re(){return totPassi=0,totRimb=0,maxPassi=0,maxRimb=0,pochiPassi=0,pochiRimb=0,listaCelle=document.querySelectorAll(".cbordoV, .cbordoH"),listaCelle.forEach((e=>{M=e.id,valPercorso=function(e){idStart=e,idxPassi=0,idxRimbalzi=0,D=ne(N),j=e%n,0==(ge=Math.round((e-j)/n))&&(stato=[1,0,1,1]),ge==n-1&&(stato=[-1,0,1,1]),0==j&&(stato=[0,1,1,1]),j==n-1&&(stato=[0,-1,0,1]),regola=D[e];do{rimb=!1,""===regola[0]?ii=stato[0]:(rimb=!0,ii=regola[0]),""===regola[1]?jj=stato[1]:(rimb=!0,jj=regola[1]),rimb&&(idxRimbalzi+=1),D[n*ge+j]=["","",1,0,1],ge+=ii,j+=jj,stato=[ii,jj,1,1],regola=D[n*ge+j],idxPassi+=1}while(0!=ge&ge!=n-1&0!=j&j!=n-1);return[idxPassi,idxRimbalzi]}(M),totPassi+=valPercorso[0],totRimb+=valPercorso[1],valPercorso[0]>maxPassi&&(maxPassi=valPercorso[0]),valPercorso[1]>maxRimb&&(maxRimb=valPercorso[1]),valPercorso[0]<5&&(pochiPassi+=1),valPercorso[1]<2&&(pochiRimb+=1)})),idxVal=2*(totPassi+5*maxPassi)+10*(totRimb+5*maxRimb)-10*(pochiPassi+2*pochiRimb)+5*E,idxVal<350?"facile":idxVal>350&&idxVal<=600?"media":idxVal>600?"difficile":void 0}document.getElementById("run").addEventListener("click",(function(){n=localStorage.getItem("selectedOption2"),J(n),K(),ce(),oe(),"gioco"==v&&(seme=Math.floor(Math.random()*F),Z(seme),infoM="È pronta una nuova sfida!<br><br>Pezzi da indovinare "+E+"<br>",infoM+="Difficoltà: "+re()+espertoMsg+"<br><br>",infoM+="<em>(passi:"+U+"- rimbalzi:"+Y+")</em><br>",ke.innerHTML=infoM,Me.showModal())})),document.getElementById("god").addEventListener("click",(function(){n=localStorage.getItem("selectedOption2"),X("gioco"),K(),ce(),today=new Date,seme=y+today.getDate()+today.getDay()+today.getMonth()+today.getFullYear()%100,Z(seme),oe(),infoM="Gioco di oggi!<br><br>Pezzi da indovinare: "+E+"<br>",infoM+="Difficoltà: "+re()+espertoMsg+"<br><br>",infoM+="<em>(passi:"+U+"- rimbalzi:"+Y+")</em><br>",ke.innerHTML=infoM,Me.showModal()})),document.getElementById("copia").addEventListener("click",(function(){for(dumpCelle="",ge=0;ge<n*n;ge++)dumpCelle+=_[ge];dumpStr=dumpCelle.replace(/(\d)\1{0,8}/g,(function(e){return e.length+String.fromCharCode(Number(e.charAt(0))+108)})),testoCopiato=pageUrl+"?s="+dumpStr+"&m="+w,navigator.clipboard.writeText(testoCopiato).then((()=>{}),(()=>{})),ke.innerHTML="<b>Hai copiato il gioco da condividere!</b>",Me.showModal()})),document.getElementById("mostra").addEventListener("click",(function(){te()}));const se=window.location.search,de=new URLSearchParams(se);pageUrl=window.location.href.split("?")[0],s=de.get("s"),m=de.get("m");const me=new RegExp("^([0-9][l-t])+$","g");if(sErr=!1,null!=s)if(!me.test(s)||s.length>86)s=null,sErr=!0;else{const e=s.match(/\d/g),t=s.match(/[A-Za-z]/g);dumpRicostr="";for(var ge=0;ge<e.length;ge++)dumpRicostr+=String.fromCharCode(t[ge].charCodeAt(0)-60).repeat(parseInt(e[ge]));s=dumpRicostr}if(hWindow=window.innerHeight,wWindow=window.innerWidth,wWindow>hWindow){var be=document.querySelector(".gioco-container");wWindow=Math.round(3.8*hWindow/7),be.style.width=wWindow+"px"}rWindow=hWindow/wWindow,scacchieraW=Math.round(75+22*(rWindow-1.4)/.4),logoH=Math.round(40+22*(rWindow-1.4)/.4),rWindow<1.4&&(scacchieraW=75,logoH=40),rWindow>1.8&&(scacchieraW=97,logoH=60),scacchiera.style.width=scacchieraW+"%",hWindow<700&&(document.getElementsByClassName("logo-container")[0].style.height=logoH+"px",document.getElementsByClassName("logo-image")[0].style.width=logoH+"px",document.getElementsByClassName("logo-image")[0].style.height=logoH+"px",logoI.style.width=logoH+"px",logoI.style.height=logoH+"px"),localStorage.getItem("selectedOption1")||localStorage.setItem("selectedOption1","gioco"),localStorage.getItem("selectedOption2")||localStorage.setItem("selectedOption2",7),localStorage.getItem("selectedOption3")||localStorage.setItem("selectedOption3","passirimb"),localStorage.getItem("selectedOption4")||localStorage.setItem("selectedOption4",0),localStorage.getItem("selectedOption5")||localStorage.setItem("selectedOption5",0),localStorage.getItem("sfideVinte")||localStorage.setItem("sfideVinte",0),localStorage.getItem("minMosseSfide")||localStorage.setItem("minMosseSfide",-1),localStorage.getItem("maxMosseSfide")||localStorage.setItem("maxMosseSfide",-1),localStorage.getItem("sfideVeloci")||localStorage.setItem("sfideVeloci",0),localStorage.getItem("benv")||localStorage.setItem("benv",1);var pe=localStorage.getItem("sfideVinte"),fe=localStorage.getItem("minMosseSfide"),ue=localStorage.getItem("maxMosseSfide"),he=localStorage.getItem("sfideVeloci"),Se=20;v=localStorage.getItem("selectedOption1"),n=localStorage.getItem("selectedOption2"),livelloV=localStorage.getItem("selectedOption3"),I=localStorage.getItem("selectedOption4"),X(v),y=localStorage.getItem("selectedOption5"),espertoMsg="",1==y&&(espertoMsg=" (livello esperto)");const ye=document.querySelector("#infoStats"),Ie=document.querySelector("#okInfoStats"),ve=document.querySelector("#infoStatsText");Ie.addEventListener("click",(()=>{ye.close()}));const Me=document.querySelector("#infoGioco"),Ee=document.querySelector("#okB"),we=document.querySelector("#vaiStats"),ke=document.querySelector("#infoTesto");we.addEventListener("click",(()=>{minMosseSfideVx=-1==fe?"--":fe,maxMosseSfideVx=-1==ue?"--":ue,ve.innerHTML="Sfide vinte: "+pe+"<br>",ve.innerHTML+="con meno di "+Se+" mosse: "+he+"<br>",ve.innerHTML+="minimo di mosse utilizzate: "+minMosseSfideVx+"<br>",ve.innerHTML+="massimo di mosse utilizzate: "+maxMosseSfideVx+"<br>",ye.showModal()})),Ee.addEventListener("click",(()=>{Me.close()})),null!=s&&36!=s.length&&49!=s.length&&64!=s.length&&(sErr=!0),sErr&&(ke.innerHTML="La disposizione che vuoi caricare contiene degli errori",Me.showModal()),null==s||36!=s.length&&49!=s.length&&64!=s.length?(s=0,J(n),"studio"==v&&1==localStorage.getItem("benv")&&(ke.innerHTML="Benvenuto! Sei in modalità <b>Studio</b>.<br><br>            Qui puoi creare una tua sfida, scegliendo i pezzi da inserire.<br>            Entra nelle Impostazioni per passare in modalità <b>Gioco</b>, cambiare la dimensione della scacchiera o il tema grafico.<br>            Buon divertimento!",Me.showModal()),"gioco"==v&&1==localStorage.getItem("benv")&&(ke.innerHTML="Benvenuto! Sei in modalità <b>Gioco</b>.<br><br>            Tocca <b>Nuovo</b> per accettare una nuova sfida, o l'icona del calendario per la sfida del giorno.<br>            Entra nelle Impostazioni per passare in modalità <b>Studio</b>, cambiare la dimensione della scacchiera o il tema grafico.<br>            Buon divertimento!",Me.showModal()),localStorage.setItem("benv",1)):function(){switch(s.length){case 36:n=6;break;case 49:n=7;break;case 64:n=8}for(X("gioco"),M=0;M<s.length;M++)if(pBordo=!1,c=1*s.charAt(M),M%n!=0&&M%n!=n-1)if(M<n)8!=c&&(sErr=!0);else if(M>=n*(n-1))8!=c&&(sErr=!0);else{switch(u='<img src="media/files/'+C[I][c]+'.png" style="width="100%" height="100%">',c){case 0:N[M]=[-1,0,-1,0,1];break;case 1:N[M]=[1,0,-1,0,1];break;case 2:N[M]=[-1,-1,1,0,2];break;case 3:N[M]=[1,1,1,0,-2];break;case 4:N[M]=[-1,1,1,0,3];break;case 5:N[M]=[1,-1,1,0,-3];break;case 6:N[M]=[0,-1,1,1,1];break;case 7:N[M]=[0,1,1,-1,1];break;default:u=""}""!=u&&(E+=1,_[M]=c,R[M]=u,document.getElementById(M).innerHTML=u)}else 8!=c&&(sErr=!0);"true"==m?(w=!1,X("studio")):w=!0,te(),localStorage.setItem("benv",0),quantiP=1===E?" pezzo":" pezzi",infoM="Hai importato una sfida!<br><br>Pezzi da indovinare: "+E+"<br>",infoM+="Difficoltà: "+re()+"<br><br>",infoM+="<em>(passi:"+U+"- rimbalzi:"+Y+")</em><br>",sErr&&(infoM+="<br><br><em>La disposizione conteneva degli errori</em><br>"),ke.innerHTML=infoM,Me.showModal()}();const Le=document.getElementById("storico"),je=window.pageYOffset||document.documentElement.scrollTop,Be=Le.offsetTop,He=hWindow-(Be-je)-2;Le.style.height=`${He}px`,Le.style.fontSize=Math.round(n*L*30/13/50)+"px",ce(),oe(),o.addEventListener("click",(()=>{t.close()})),e.addEventListener("click",(()=>{if(t.showModal(),localStorage.getItem("selectedOption1"))for(var e=0;e<B.length;e++)if(B[e].value===localStorage.getItem("selectedOption1")){B[e].checked=!0;break}if(localStorage.getItem("selectedOption2"))for(e=0;e<H.length;e++)if(H[e].value===localStorage.getItem("selectedOption2")){H[e].checked=!0;break}if(localStorage.getItem("selectedOption5"))for(e=0;e<O.length;e++)if(O[e].value===localStorage.getItem("selectedOption5")){O[e].checked=!0;break}if(localStorage.getItem("selectedOption3"))for(e=0;e<z.length;e++)if(z[e].value===localStorage.getItem("selectedOption3")){z[e].checked=!0;break}if(localStorage.getItem("selectedOption4"))for(e=0;e<z.length;e++)if(x[e].value===localStorage.getItem("selectedOption4")){x[e].checked=!0;break}})),i.addEventListener("click",(e=>{varia=!1;for(var o=0;o<B.length;o++)if(B[o].checked){oldopt=localStorage.getItem("selectedOption1"),selectedOption1=B[o].value,v=selectedOption1,localStorage.setItem("selectedOption1",selectedOption1),oldopt!=selectedOption1&&(ee(),X(v));break}for(o=0;o<H.length;o++)if(H[o].checked){oldopt=localStorage.getItem("selectedOption2"),selectedOption2=H[o].value,oldopt!=selectedOption2&&(varia=!0),localStorage.setItem("selectedOption2",selectedOption2),localStorage.setItem("benv",0);break}for(o=0;o<O.length;o++)if(O[o].checked){oldopt=localStorage.getItem("selectedOption5"),selectedOption5=O[o].value,y=selectedOption5,espertoMsg="",1==y&&(espertoMsg=" (livello esperto)"),localStorage.setItem("selectedOption5",selectedOption5);break}for(o=0;o<z.length;o++)if(z[o].checked){oldopt=localStorage.getItem("selectedOption3"),selectedOption3=z[o].value,livelloV=selectedOption3,localStorage.setItem("selectedOption3",selectedOption3);break}for(o=0;o<x.length;o++)if(x[o].checked){oldopt=localStorage.getItem("selectedOption4"),selectedOption4=x[o].value,localStorage.setItem("selectedOption4",selectedOption4),I=selectedOption4,ce();break}varia||e.preventDefault(),t.close()})),image0.addEventListener("click",(()=>{"studio"==v&&ie("",8),dialogS.close()})),image1.addEventListener("click",(()=>{ie('<img src="media/files/'+C[I][0]+'.png" style="width="100%" height="100%">',0),dialogS.close()})),image2.addEventListener("click",(()=>{ie('<img src="media/files/'+C[I][1]+'.png" style="width="100%" height="100%">',1),dialogS.close()})),image3.addEventListener("click",(()=>{ie('<img src="media/files/'+C[I][2]+'.png" style="width="100%" height="100%">',2),dialogS.close()})),image4.addEventListener("click",(()=>{ie('<img src="media/files/'+C[I][3]+'.png" style="width="100%" height="100%">',3),dialogS.close()})),image5.addEventListener("click",(()=>{ie('<img src="media/files/'+C[I][4]+'.png" style="width="100%" height="100%">',4),dialogS.close()})),image6.addEventListener("click",(()=>{ie('<img src="media/files/'+C[I][5]+'.png" style="width="100%" height="100%">',5),dialogS.close()})),image7.addEventListener("click",(()=>{ie('<img src="media/files/'+C[I][6]+'.png" style="width="100%" height="100%">',6),dialogS.close()})),image8.addEventListener("click",(()=>{ie('<img src="media/files/'+C[I][7]+'.png" style="width="100%" height="100%">',7),dialogS.close()})),image9.addEventListener("click",(()=>{dialogS.close()})),image10.addEventListener("click",(()=>{a.innerHTML='<img src="media/files/p1b.png" style="width="100%" height="100%">',le(M,1,1),dialogB.close()})),image12.addEventListener("click",(()=>{a.innerHTML='<img src="media/files/m1b.png" style="width="100%" height="100%">',le(M,-1,1),dialogB.close()})),image14.addEventListener("click",(()=>{dialogB.close()})),K();