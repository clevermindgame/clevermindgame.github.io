const e=document.getElementById("impostazioni"),t=document.getElementById("myDialog"),o=document.getElementById("cancelButton"),i=document.getElementById("okButton");var a,l,r,c,d,g,u,b,f,p,h,S,y,I,M,E,v,w,B,L,z,C,H,x,T=document.getElementsByName("modalita"),O=document.getElementsByName("dimensioni"),V=document.getElementsByName("esperto"),N=document.getElementsByName("livello"),P=document.getElementsByName("tema"),q=[["#1977a7","#3fb5cc","#ffffff","#faf4dc","#faf4dc"],["#d62628","#ef7f13","#ffffff","#faf4dc","#faf4dc"],["#3daf1e","#9dc31a","#ffffff","#faf4dc","#faf4dc"]],A=[["cb0","cn0","tb0","tn0","rb0","rn0","qb0","qn0"],["cb1","cn1","tb1","tn1","rb1","rn1","qb1","qn1"],["cb2","cn2","tb2","tn2","rb2","rn2","qb2","qn2"]],R=["Cc","Cs","Tc","Ts","Rc","Rs","Qc","Qs"],W=new Array(8),D=new Array(8),_=new Array(64),F=new Array(8),Q=new Array(64),G=new Array(64),U=new Array(64),Y=new Array(64),$=new Array(64),Z=[6,8,10],J=new Array(64),K=" ➜ ",X=" 🚶 ",ee=" ↺ ",te=16807,oe=Math.pow(2,31)-1;function ie(e){for(localStorage.setItem("selectedOption1","gioco"),y=n-2,S=y*y*8,f=Z[n-6]+Number(I),p=8*n,Me=0;Me<8;Me++)W[Me]=2;for(Me=0;Me<8;Me++)D[Me]=2;for(Me=0;Me<64;Me++)_[Me]=!1;for(Me=0;Me<8;Me++)F[Me]=2;for(f-=(e=(te*e+0)%oe)%3,b=0,u=0;b<f&&u<p;)if(u+=1,e=(te*e+0)%oe,l=Math.floor(e/128)%S,d=((r=(l-(c=l%8))/8)-(g=r%y))/y+1,0!=W[g+=1]&&0!=D[d]&&0!=F[c]&&!_[r]){switch(F[c]-=1,(e=(te*e+0)%oe)%3>0&&1==I&&(1==d&&c<6&&(c|=1),d==y&&c<6&&(c&=6),1==g&&c>1&&(4==c||5==c?c&=6:c|=1),g==y&&c>1&&(4==c||5==c?c|=1:c&=6)),v=d*n+g,b+=1,_[r]=!0,W[g]-=1,D[d]-=1,h='<img src="media/files/'+A[M][c]+'.png" style="width="100%" height="100%">',c){case 0:U[v]=[-1,0,-1,0,1];break;case 1:U[v]=[1,0,-1,0,1];break;case 2:U[v]=[-1,-1,1,0,2];break;case 3:U[v]=[1,1,1,0,-2];break;case 4:U[v]=[-1,1,1,0,3];break;case 5:U[v]=[1,-1,1,0,-3];break;case 6:U[v]=[0,-1,1,1,1];break;case 7:U[v]=[0,1,1,-1,1]}$[v]=c,Q[v]=h,document.getElementById(v).innerHTML=h}for(celle=document.getElementsByClassName("cinterno"),Me=0;Me<celle.length;Me++)G[celle[Me].id]||(celle[Me].innerHTML="");B=w=b}function ne(e){scacchiera=document.getElementById("scacchiera");scacchiera.rows[0];for(Me=scacchiera.rows.length-1;Me>=0;Me--)scacchiera.deleteRow(Me);for(z=Math.trunc((wWindow*scacchieraW/100-e-1)/e),charSize=Math.trunc(z/3),Me=0;Me<e;Me++){var t=scacchiera.insertRow(Me);for(j=0;j<e;j++){var o=t.insertCell(j);o.id=e*Me+j,o.classList.add("cinterno"),o.style.fontSize=charSize+"px",Q[e*Me+j]="",G[e*Me+j]=!1,U[e*Me+j]=["","",1,0,1],$[e*Me+j]=8,o.style.backgroundColor="white",J[e*Me+j]=!1,0!=j&&j!=e-1||(o.classList.replace("cinterno","cbordoV"),Q[e*Me+j]=String.fromCharCode(j+65,Me+49),o.innerHTML=Q[e*Me+j],G[e*Me+j]=!0),0!=Me&&Me!=e-1||(o.classList.replace("cinterno","cbordoH"),Q[e*Me+j]=String.fromCharCode(j+65,Me+49),o.innerHTML=Q[e*Me+j],G[e*Me+j]=!0),0!=Me&&Me!=e-1||0!=j&&j!=e-1||(o.classList.replace("cbordoV","cangolo"),o.classList.replace("cbordoH","cangolo"),Q[e*Me+j]=String.fromCharCode(j+65,Me+49),o.innerHTML=Q[e*Me+j],G[e*Me+j]=!0)}}for(celle=document.getElementsByTagName("td"),Me=0;Me<celle.length;Me++)celle[Me].style.height=z+"px",celle[Me].style.width=z+"px";idStart=0,idEnd=0,nmosse=0,w=0,ae()}function ae(){celle_b=document.querySelectorAll(".cbordoV, .cbordoH"),dialogB=document.getElementById("bordoDialog"),celle_b.forEach((e=>{e.addEventListener("click",(()=>{if(r=e,v=e.id,"gioco"==E&&0==w)le();else if("gioco"==E&&1==L){for("cbordoH"==r.className&&(C=Number(v)+n,v>n*(n-1)&&(C-=n*(n-1)),H=n,x=C+n*(n-2)),"cbordoV"==r.className&&(C=Number(v)+1,v%n>0&&(C=C-n+1),H=1,x=C+n-2),rimuovi=!0,Me=C;Me<x;Me+=H)J[Number(Me)]||(rimuovi=!1,J[Me]=!0,document.getElementById(Me).style.backgroundColor=a);if(1==rimuovi)for(Me=C;Me<x;Me+=H)J[Me]=!1,document.getElementById(Me).style.backgroundColor="white";document.getElementById("mostra").textContent="Escludi",document.getElementById("mostra").style.color="ButtonText",document.getElementById("mostra").style.backgroundColor="ButtonFace",L=!1}else dialogB.showModal()}))})),celle_s=document.querySelectorAll(".cinterno"),dialogS=document.getElementById("imageDialog"),celle_s.forEach((e=>{e.addEventListener("click",(()=>{r=e,v=e.id,"studio"==E&&(1==L||""==r.innerHTML)||0==L&&w>0&&""==r.innerHTML?dialogS.showModal():"gioco"==E&&0==w?le():"gioco"==E&&1==L&&(J[Number(v)]?(e.style.backgroundColor="white",J[Number(v)]=!1):(e.style.backgroundColor=a,J[Number(v)]=!0))}))}))}function le(){infoM="Tocca <b>Nuovo</b> per accettare una nuova sfida, o l'<b>icona del calendario</b> per la sfida del giorno.<br>",infoM+="Per creare una tua sfida, entra nelle <b>Impostazioni</b> e passa in modalità <b>Studio</b>.",Re.innerHTML=infoM,Pe.showModal()}function re(e){if(E=e,localStorage.setItem("selectedOption1",e),document.getElementById("modo").innerHTML="modalità: <b>"+E+'</b> — <a href="help.html#'+E+'" target="_blank">Help</a>',"studio"==E){for(document.getElementById("image0").style.visibility="visible",document.getElementById("mostra").disabled=!1,celle=document.getElementsByClassName("cinterno"),Me=0;Me<celle.length;Me++)G[celle[Me].id]=!1;se()}"gioco"==E&&(ne(n),document.getElementById("image0").style.visibility="hidden",document.getElementById("imageTxt").textContent="Quale pezzo ritieni sia in questa cella?",document.getElementById("mostra").textContent="Escludi",L=!1)}function ce(){for(v=65,be(),celle=document.querySelectorAll(".cbordoV, .cbordoH, .cangolo"),k=0;k<celle.length;k++)j=celle[k].id%n,Me=(celle[k].id-j)/n,Q[celle[k].id]=String.fromCharCode(j+65,Me+49),celle[k].innerHTML=Q[celle[k].id],celle[k].style.fontSize=charSize+"px"}function se(){if(!(L=!L)){for(celle=document.getElementsByClassName("cinterno"),Me=0;Me<celle.length;Me++)G[celle[Me].id]||(celle[Me].innerHTML="");document.getElementById("mostra").textContent="Modifica",document.getElementById("image0").style.visibility="hidden",document.getElementById("imageTxt").textContent="Quale pezzo ritieni sia in questa cella?"}if(L&&"studio"==E){for(celle=document.getElementsByClassName("cinterno"),Me=0;Me<celle.length;Me++)celle[Me].innerHTML=Q[celle[Me].id];document.getElementById("mostra").textContent="Nascondi",document.getElementById("image0").style.visibility="visible",document.getElementById("imageTxt").textContent="Modifica il codice inserendo o rimuovendo pezzi:"}L||"gioco"!=E||(document.getElementById("mostra").textContent="Escludi",document.getElementById("mostra").style.color="ButtonText",document.getElementById("mostra").style.backgroundColor="ButtonFace"),L&&"gioco"==E&&w>0&&(document.getElementById("mostra").textContent="Fine Escludi",document.getElementById("mostra").style.color="white",document.getElementById("mostra").style.backgroundColor="black")}function de(){We.innerHTML=""}function me(e,t){if(L){switch(Q[v]=e,r.innerHTML=Q[v],be(),t){case 0:U[v]=[-1,0,-1,0,1];break;case 1:U[v]=[1,0,-1,0,1];break;case 2:U[v]=[-1,-1,1,0,2];break;case 3:U[v]=[1,1,1,0,-2];break;case 4:U[v]=[-1,1,1,0,3];break;case 5:U[v]=[1,-1,1,0,-3];break;case 6:U[v]=[0,-1,1,1,1];break;case 7:U[v]=[0,1,1,-1,1];break;case 8:U[v]=["","",1,0,1]}$[v]=t}if(!L)if(e==Q[v])if(G[v]=!0,r.innerHTML=Q[v],"studio"==E)We.insertAdjacentHTML("afterbegin","<b>&nbsp;&nbsp; | "+R[t]+" in "+String.fromCharCode(v%n+65,Math.round((v-v%n)/n)+49)+"</b> - Bravo! Il pezzo è corretto.<br />");else if(0===(w-=1)){switch(ve+=1,localStorage.setItem("sfideVinte",ve),nmosse<xe&&(He+=1,localStorage.setItem("sfideVeloci",He)),(nmosse<Le||-1==Le)&&(Le=nmosse,localStorage.setItem("minMosseSfide",Le)),nmosse>je&&(je=nmosse,localStorage.setItem("maxMosseSfide",je)),n){case 6:ke+=1,localStorage.setItem("sfideVinte4",ke);break;case 7:we+=1,localStorage.setItem("sfideVinte5",we);break;case 8:Be+=1,localStorage.setItem("sfideVinte6",Be)}ze+=nmosse,localStorage.setItem("totMosse",ze),Ce+=B,localStorage.setItem("totPezzi",Ce),Re.innerHTML="Bravo! Hai risolto la sfida in "+nmosse+" mosse<br>",Pe.showModal(),We.insertAdjacentHTML("afterbegin","&nbsp;&nbsp;&nbsp; Bravo! Hai trovato tutti i pezzi. <br />")}else 1===w?(quantiR="Indovinato! rimane ",quantiP=" pezzo"):(quantiR="Indovinato! rimangono ",quantiP=" pezzi"),We.insertAdjacentHTML("afterbegin","<b>&nbsp;&nbsp; | "+R[t]+" in "+String.fromCharCode(v%n+65,Math.round((v-v%n)/n)+49)+"</b> - "+quantiR+w+quantiP+"<br />");else nmosse+=1,We.insertAdjacentHTML("afterbegin","<b>"+nmosse+" | "+R[t]+" in "+String.fromCharCode(v%n+65,Math.round((v-v%n)/n)+49)+"</b> - Sbagliato! Riprova.<br />")}function ge(e){const t=[];for(var o=0;o<e.length;o++){const i=e[o];Array.isArray(i)?t[o]=ge(i):t[o]="object"==typeof i&&null!==i?deepCopyObject(i):i}return t}function ue(e,t,o){be(),idStart=e,Q[e]="<em>"+Q[e]+"</em>",document.getElementById(e).style.fontSize=Math.trunc(8*charSize/9)+"px",npassi=0,nrimbalzi=0,Y=ge(U),j=e%n,Me=Math.round((e-j)/n),segno="",t>0?segno="+":t<0&&(segno="‒"),valstring='<span class="intero bianco">&nbsp;'+segno+Math.abs(t)+"&nbsp;</span>&nbsp;in ",nmosse+=1,cin='<span style="line-height: 160%; margin: 0;">'+nmosse+" | "+valstring+"<b>"+String.fromCharCode(j+65,Me+49)+"</b>"+K,0==Me&&(stato=[1,0,t,o]),Me==n-1&&(stato=[-1,0,t,o]),0==j&&(stato=[0,1,t,o]),j==n-1&&(stato=[0,-1,t,o]),regola=Y[e];do{rimb=!1,""===regola[0]?ii=stato[0]:(rimb=!0,ii=regola[0]),""===regola[1]?jj=stato[1]:(rimb=!0,jj=regola[1]),rimb&&(nrimbalzi+=1),Y[n*Me+j]=["","",1,0,1],Me+=ii,j+=jj,o*=regola[2],t=(t+regola[3])*regola[4],stato=[ii,jj,t,o],regola=Y[n*Me+j],npassi+=1}while(0!=Me&Me!=n-1&0!=j&j!=n-1);switch(idEnd=n*Me+j,uscita=1===o?'<img src="media/files/uscita_bianca.png" style="width="100%" height="100%">':'<img src="media/files/uscita_nera.png" style="width="100%" height="100%">',document.getElementById(idEnd).innerHTML=uscita,t>0?t="+"+t:t<0&&(t="‒"+-t),valstring=1===o?'<span class="intero bianco">&nbsp;'+t+"&nbsp;</span>&nbsp;in ":'<span class="intero nero">&nbsp;'+t+"&nbsp;</span>&nbsp;in ",cout=valstring+"<b>"+String.fromCharCode(j+65,Me+49)+"</b>",livelloV){case"passirimb":cout+=" | "+npassi+X+"e "+nrimbalzi+ee+"<br />";break;case"passi":cout+=" | "+npassi+X+"<br />";break;case"rimb":cout+=" | "+nrimbalzi+ee+"<br />";break;case"nulla":cout+="<br />"}We.insertAdjacentHTML("afterbegin",cin+cout+"</span>")}function be(){"undefined"!=typeof idStart&&v!=idStart&&(document.getElementById(idStart).innerHTML=Q[idStart]),"undefined"!=typeof idEnd&&v!=idEnd&&(document.getElementById(idEnd).innerHTML=Q[idEnd])}function fe(){for(M=localStorage.getItem("selectedOption4"),document.getElementsByClassName("logo-container")[0].style.backgroundColor=q[M][0],document.getElementById("titolo").style.color=q[M][2],document.getElementById("storico").style.backgroundColor=q[M][3],a=q[M][4],document.querySelectorAll(".cbordoV, .cbordoH").forEach((e=>{e.style.backgroundColor=q[M][1],e.style.color=q[M][2]})),document.querySelectorAll(".cangolo").forEach((e=>{e.style.backgroundColor=q[localStorage.getItem("selectedOption4")][0],e.style.color=q[localStorage.getItem("selectedOption4")][2]})),elements=document.querySelectorAll(".pezzi"),elements.forEach((e=>{src=e.getAttribute("src"),null!==src&&src.includes(".png")&&(newSrc=src.replace(/\d\.png/g,M+".png"),e.setAttribute("src",newSrc))})),celle=document.getElementsByClassName("cinterno"),Me=0;Me<celle.length;Me++)1==J[celle[Me].id]&&(celle[Me].style.backgroundColor=a),src=Q[celle[Me].id],src.includes(".png")&&(newSrc=src.replace(/\d\.png/g,M+".png"),Q[celle[Me].id]=newSrc,""!=celle[Me].innerHTML&&(celle[Me].innerHTML=celle[Me].innerHTML.replace(/\d\.png/g,M+".png")))}function pe(){return totPassi=0,totRimb=0,maxPassi=0,maxRimb=0,pochiPassi=0,pochiRimb=0,listaCelle=document.querySelectorAll(".cbordoV, .cbordoH"),listaCelle.forEach((e=>{v=e.id,valPercorso=function(e){idStart=e,idxPassi=0,idxRimbalzi=0,Y=ge(U),j=e%n,0==(Me=Math.round((e-j)/n))&&(stato=[1,0,1,1]),Me==n-1&&(stato=[-1,0,1,1]),0==j&&(stato=[0,1,1,1]),j==n-1&&(stato=[0,-1,0,1]),regola=Y[e];do{rimb=!1,""===regola[0]?ii=stato[0]:(rimb=!0,ii=regola[0]),""===regola[1]?jj=stato[1]:(rimb=!0,jj=regola[1]),rimb&&(idxRimbalzi+=1),Y[n*Me+j]=["","",1,0,1],Me+=ii,j+=jj,stato=[ii,jj,1,1],regola=Y[n*Me+j],idxPassi+=1}while(0!=Me&Me!=n-1&0!=j&j!=n-1);return[idxPassi,idxRimbalzi]}(v),totPassi+=valPercorso[0],totRimb+=valPercorso[1],valPercorso[0]>maxPassi&&(maxPassi=valPercorso[0]),valPercorso[1]>maxRimb&&(maxRimb=valPercorso[1]),valPercorso[0]<5&&(pochiPassi+=1),valPercorso[1]<2&&(pochiRimb+=1)})),idxVal=2*(totPassi+5*maxPassi)+10*(totRimb+5*maxRimb)-10*(pochiPassi+2*pochiRimb)+5*w,idxVal<=350?"facile":idxVal>350&&idxVal<=600?"media":idxVal>600?"difficile":void 0}function he(){minMosseSfideVx=-1==Le?"--":Le,maxMosseSfideVx=-1==je?"--":je,efficaciaV=0==ze?"--":(100*Ce/ze).toFixed(1)+" %",Ne.innerHTML="Sfide vinte: "+ve+"<br>",Ne.innerHTML+="&nbsp;&nbsp;con tavola 4x4: "+ke+"<br>",Ne.innerHTML+="&nbsp;&nbsp;con tavola 5x5: "+we+"<br>",Ne.innerHTML+="&nbsp;&nbsp;con tavola 6x6: "+Be+"<br>",Ne.innerHTML+="&nbsp;&nbsp;con meno di "+xe+" mosse: "+He+"<br>",Ne.innerHTML+="minimo di mosse utilizzate: "+minMosseSfideVx+"<br>",Ne.innerHTML+="massimo di mosse utilizzate: "+maxMosseSfideVx+"<br>",Ne.innerHTML+="totale pezzi trovati: "+Ce+"<br>",Ne.innerHTML+="efficacia: "+efficaciaV+"<br>",Te.showModal()}document.getElementById("run").addEventListener("click",(function(){n=Number(localStorage.getItem("selectedOption2")),ne(n),fe(),L=!0,document.getElementById("mostra").style.color="ButtonText",document.getElementById("mostra").style.backgroundColor="ButtonFace",de(),"gioco"==E&&(L=!1,document.getElementById("mostra").textContent="Escludi",seme=Math.floor(Math.random()*oe),ie(seme),infoM="È pronta una nuova sfida!<br><br>Pezzi da indovinare "+w+"<br>",infoM+="Difficoltà: "+pe()+espertoMsg+"<br><br>",infoM+="<em>(passi:"+X+"- rimbalzi:"+ee+")</em><br>",Re.innerHTML=infoM,Pe.showModal())})),document.getElementById("god").addEventListener("click",(function(){n=Number(localStorage.getItem("selectedOption2")),re("gioco"),fe(),today=new Date,seme=n+I+today.getDate()+today.getDay()+today.getMonth()+today.getFullYear()%100,ie(seme),de(),infoM="Gioco di oggi!<br><br>Pezzi da indovinare: "+w+"<br>",infoM+="Difficoltà: "+pe()+espertoMsg+"<br><br>",infoM+="<em>(passi:"+X+"- rimbalzi:"+ee+")</em><br>",Re.innerHTML=infoM,Pe.showModal()})),document.getElementById("copia").addEventListener("click",(function(){for(dumpCelle="",Me=0;Me<n*n;Me++)dumpCelle+=$[Me];dumpStr=dumpCelle.replace(/(\d)\1{0,8}/g,(function(e){return e.length+String.fromCharCode(Number(e.charAt(0))+108)})),testoCopiato=pageUrl+"?s="+dumpStr+"&m="+L,navigator.clipboard.writeText(testoCopiato).then((()=>{}),(()=>{})),Re.innerHTML="<b>Hai copiato il gioco da condividere!</b>",Pe.showModal()})),document.getElementById("mostra").addEventListener("click",(function(){se()}));const Se=window.location.search,ye=new URLSearchParams(Se);pageUrl=window.location.href.split("?")[0],s=ye.get("s"),m=ye.get("m");const Ie=new RegExp("^([0-9][l-t])+$","g");if(sErr=!1,null!=s)if(!Ie.test(s)||s.length>86)s=null,sErr=!0;else{const e=s.match(/\d/g),t=s.match(/[A-Za-z]/g);dumpRicostr="";for(var Me=0;Me<e.length;Me++)dumpRicostr+=String.fromCharCode(t[Me].charCodeAt(0)-60).repeat(parseInt(e[Me]));s=dumpRicostr}if(hWindow=window.innerHeight,wWindow=window.innerWidth,wWindow>hWindow){var Ee=document.querySelector(".gioco-container");wWindow=Math.round(3.8*hWindow/7),Ee.style.width=wWindow+"px"}rWindow=hWindow/wWindow,scacchieraW=Math.round(75+22*(rWindow-1.4)/.4),logoH=Math.round(40+20*(rWindow-1.4)/.4),rWindow<1.4&&(scacchieraW=75,logoH=40),rWindow>1.8&&(scacchieraW=97,logoH=60),scacchiera.style.width=scacchieraW+"%",hWindow<700&&(document.getElementsByClassName("logo-container")[0].style.height=logoH+"px",document.getElementsByClassName("logo-image")[0].style.width=logoH+"px",document.getElementsByClassName("logo-image")[0].style.height=logoH+"px",logoI.style.width=logoH+"px",logoI.style.height=logoH+"px"),localStorage.getItem("selectedOption1")||localStorage.setItem("selectedOption1","gioco"),localStorage.getItem("selectedOption2")||localStorage.setItem("selectedOption2",7),localStorage.getItem("selectedOption3")||localStorage.setItem("selectedOption3","passirimb"),localStorage.getItem("selectedOption4")||localStorage.setItem("selectedOption4",0),localStorage.getItem("selectedOption5")||localStorage.setItem("selectedOption5",0),localStorage.getItem("sfideVinte")||localStorage.setItem("sfideVinte",0),localStorage.getItem("sfideVinte4")||localStorage.setItem("sfideVinte4",0),localStorage.getItem("sfideVinte5")||localStorage.setItem("sfideVinte5",0),localStorage.getItem("sfideVinte6")||localStorage.setItem("sfideVinte6",0),localStorage.getItem("minMosseSfide")||localStorage.setItem("minMosseSfide",-1),localStorage.getItem("maxMosseSfide")||localStorage.setItem("maxMosseSfide",-1),localStorage.getItem("totPezzi")||localStorage.setItem("totPezzi",0),localStorage.getItem("totMosse")||localStorage.setItem("totMosse",0),localStorage.getItem("sfideVeloci")||localStorage.setItem("sfideVeloci",0),localStorage.getItem("benv")||localStorage.setItem("benv",1);var ve=Number(localStorage.getItem("sfideVinte")),ke=Number(localStorage.getItem("sfideVinte4")),we=Number(localStorage.getItem("sfideVinte5")),Be=Number(localStorage.getItem("sfideVinte6")),Le=Number(localStorage.getItem("minMosseSfide")),je=Number(localStorage.getItem("maxMosseSfide")),ze=Number(localStorage.getItem("totMosse")),Ce=Number(localStorage.getItem("totPezzi")),He=Number(localStorage.getItem("sfideVeloci")),xe=15;"studio"==(E=localStorage.getItem("selectedOption1"))&&(L=!1),"gioco"==E&&(L=!0),n=localStorage.getItem("selectedOption2"),livelloV=localStorage.getItem("selectedOption3"),M=localStorage.getItem("selectedOption4"),re(E),I=localStorage.getItem("selectedOption5"),espertoMsg="",1==I&&(espertoMsg=" (livello esperto)");const Te=document.querySelector("#infoStats"),Oe=document.querySelector("#okInfoStats"),Ve=document.querySelector("#azzInfoStats"),Ne=document.querySelector("#infoStatsText");Oe.addEventListener("click",(()=>{Te.close()})),Ve.addEventListener("click",(()=>{ve=0,ke=0,we=0,Be=0,He=0,Le=-1,je=-1,ze=0,Ce=0,localStorage.setItem("sfideVinte",ve),localStorage.setItem("sfideVinte4",ke),localStorage.setItem("sfideVinte5",we),localStorage.setItem("sfideVinte6",Be),localStorage.setItem("sfideVeloci",He),localStorage.setItem("minMosseSfide",Le),localStorage.setItem("maxMosseSfide",je),localStorage.setItem("totMosse",ze),localStorage.setItem("totPezzi",Ce),Te.close(),he()}));const Pe=document.querySelector("#infoGioco"),qe=document.querySelector("#okB"),Ae=document.querySelector("#vaiStats"),Re=document.querySelector("#infoTesto");Ae.addEventListener("click",(()=>{he()})),qe.addEventListener("click",(()=>{Pe.close()})),null!=s&&36!=s.length&&49!=s.length&&64!=s.length&&(sErr=!0),sErr&&(Re.innerHTML="La disposizione che vuoi caricare contiene degli errori",Pe.showModal()),null==s||36!=s.length&&49!=s.length&&64!=s.length?(s=0,ne(n),"studio"==E&&1==localStorage.getItem("benv")&&(Re.innerHTML="Benvenuto! Sei in modalità <b>Studio</b>.<br><br>            Qui puoi creare una tua sfida, scegliendo i pezzi da inserire.<br>            Entra nelle Impostazioni per passare in modalità <b>Gioco</b>, cambiare la dimensione della scacchiera o il tema grafico.<br>            Buon divertimento!",Pe.showModal()),"gioco"==E&&1==localStorage.getItem("benv")&&(Re.innerHTML="Benvenuto! Sei in modalità <b>Gioco</b>.<br><br>            Tocca <b>Nuovo</b> per accettare una nuova sfida, o l'icona del calendario per la sfida del giorno.<br>            Entra nelle Impostazioni per passare in modalità <b>Studio</b>, cambiare la dimensione della scacchiera o il tema grafico.<br>            Buon divertimento!",Pe.showModal()),localStorage.setItem("benv",1)):function(){switch(s.length){case 36:n=6;break;case 49:n=7;break;case 64:n=8}for(re("gioco"),v=0;v<s.length;v++)if(pBordo=!1,c=1*s.charAt(v),v%n!=0&&v%n!=n-1)if(v<n)8!=c&&(sErr=!0);else if(v>=n*(n-1))8!=c&&(sErr=!0);else{switch(h='<img src="media/files/'+A[M][c]+'.png" style="width="100%" height="100%">',c){case 0:U[v]=[-1,0,-1,0,1];break;case 1:U[v]=[1,0,-1,0,1];break;case 2:U[v]=[-1,-1,1,0,2];break;case 3:U[v]=[1,1,1,0,-2];break;case 4:U[v]=[-1,1,1,0,3];break;case 5:U[v]=[1,-1,1,0,-3];break;case 6:U[v]=[0,-1,1,1,1];break;case 7:U[v]=[0,1,1,-1,1];break;default:h=""}""!=h&&(w+=1,$[v]=c,Q[v]=h,document.getElementById(v).innerHTML=h)}else 8!=c&&(sErr=!0);"true"==m?(L=!1,re("studio")):L=!0,se(),localStorage.setItem("benv",0),B=w,quantiP=1===w?" pezzo":" pezzi",infoM="Hai importato una sfida!<br><br>Pezzi da indovinare: "+w+"<br>",infoM+="Difficoltà: "+pe()+"<br><br>",infoM+="<em>(passi:"+X+"- rimbalzi:"+ee+")</em><br>",sErr&&(infoM+="<br><br><em>La disposizione conteneva degli errori</em><br>"),Re.innerHTML=infoM,Pe.showModal()}();const We=document.getElementById("storico"),De=window.pageYOffset||document.documentElement.scrollTop,_e=We.offsetTop,Fe=hWindow-(_e-De)-2;We.style.height=`${Fe}px`,We.style.fontSize=Math.round(n*z*30/13/50)+"px",fe(),de(),o.addEventListener("click",(()=>{t.close()})),e.addEventListener("click",(()=>{if(t.showModal(),localStorage.getItem("selectedOption1"))for(var e=0;e<T.length;e++)if(T[e].value===localStorage.getItem("selectedOption1")){T[e].checked=!0;break}if(localStorage.getItem("selectedOption2"))for(e=0;e<O.length;e++)if(O[e].value===localStorage.getItem("selectedOption2")){O[e].checked=!0;break}if(localStorage.getItem("selectedOption5"))for(e=0;e<V.length;e++)if(V[e].value===localStorage.getItem("selectedOption5")){V[e].checked=!0;break}if(localStorage.getItem("selectedOption3"))for(e=0;e<N.length;e++)if(N[e].value===localStorage.getItem("selectedOption3")){N[e].checked=!0;break}if(localStorage.getItem("selectedOption4"))for(e=0;e<N.length;e++)if(P[e].value===localStorage.getItem("selectedOption4")){P[e].checked=!0;break}})),i.addEventListener("click",(e=>{varia=!1;for(var o=0;o<T.length;o++)if(T[o].checked){oldopt=localStorage.getItem("selectedOption1"),selectedOption1=T[o].value,E=selectedOption1,localStorage.setItem("selectedOption1",selectedOption1),oldopt!=selectedOption1&&(ce(),re(E));break}for(o=0;o<O.length;o++)if(O[o].checked){oldopt=localStorage.getItem("selectedOption2"),selectedOption2=O[o].value,oldopt!=selectedOption2&&(varia=!0),localStorage.setItem("selectedOption2",selectedOption2),localStorage.setItem("benv",0);break}for(o=0;o<V.length;o++)if(V[o].checked){oldopt=localStorage.getItem("selectedOption5"),selectedOption5=V[o].value,I=selectedOption5,espertoMsg="",1==I&&(espertoMsg=" (livello esperto)"),localStorage.setItem("selectedOption5",selectedOption5);break}for(o=0;o<N.length;o++)if(N[o].checked){oldopt=localStorage.getItem("selectedOption3"),selectedOption3=N[o].value,livelloV=selectedOption3,localStorage.setItem("selectedOption3",selectedOption3);break}for(o=0;o<P.length;o++)if(P[o].checked){oldopt=localStorage.getItem("selectedOption4"),selectedOption4=P[o].value,localStorage.setItem("selectedOption4",selectedOption4),M=selectedOption4,fe();break}varia||e.preventDefault(),t.close()})),image0.addEventListener("click",(()=>{"studio"==E&&me("",8),dialogS.close()})),image1.addEventListener("click",(()=>{me('<img src="media/files/'+A[M][0]+'.png" style="width="100%" height="100%">',0),dialogS.close()})),image2.addEventListener("click",(()=>{me('<img src="media/files/'+A[M][1]+'.png" style="width="100%" height="100%">',1),dialogS.close()})),image3.addEventListener("click",(()=>{me('<img src="media/files/'+A[M][2]+'.png" style="width="100%" height="100%">',2),dialogS.close()})),image4.addEventListener("click",(()=>{me('<img src="media/files/'+A[M][3]+'.png" style="width="100%" height="100%">',3),dialogS.close()})),image5.addEventListener("click",(()=>{me('<img src="media/files/'+A[M][4]+'.png" style="width="100%" height="100%">',4),dialogS.close()})),image6.addEventListener("click",(()=>{me('<img src="media/files/'+A[M][5]+'.png" style="width="100%" height="100%">',5),dialogS.close()})),image7.addEventListener("click",(()=>{me('<img src="media/files/'+A[M][6]+'.png" style="width="100%" height="100%">',6),dialogS.close()})),image8.addEventListener("click",(()=>{me('<img src="media/files/'+A[M][7]+'.png" style="width="100%" height="100%">',7),dialogS.close()})),image9.addEventListener("click",(()=>{dialogS.close()})),image10.addEventListener("click",(()=>{r.innerHTML='<img src="media/files/p1b.png" style="width="100%" height="100%">',ue(v,1,1),dialogB.close()})),image12.addEventListener("click",(()=>{r.innerHTML='<img src="media/files/m1b.png" style="width="100%" height="100%">',ue(v,-1,1),dialogB.close()})),image14.addEventListener("click",(()=>{dialogB.close()}));