var em=Object.defineProperty;var Iu=s=>{throw TypeError(s)};var nm=(s,t,e)=>t in s?em(s,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):s[t]=e;var Aa=(s,t,e)=>nm(s,typeof t!="symbol"?t+"":t,e),Pu=(s,t,e)=>t.has(s)||Iu("Cannot "+e);var Ra=(s,t,e)=>(Pu(s,t,"read from private field"),e?e.call(s):t.get(s)),He=(s,t,e)=>t.has(s)?Iu("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(s):t.set(s,e);var z=(s,t,e)=>(Pu(s,t,"access private method"),e);var rd=0,Vc=1,ad=2;var $r=1,od=2,$s=3,ri=0,sn=1,ai=2,us=0,Yi=1,Ti=2,Wc=3,Xc=4,ld=5;var ds=100,cd=101,hd=102,ud=103,dd=104,fd=200,pd=201,md=202,gd=203,qc=204,Yc=205,xd=206,_d=207,vd=208,yd=209,Md=210,bd=211,Sd=212,wd=213,Td=214,to=0,eo=1,no=2,zs=3,io=4,so=5,ro=6,ao=7,Io=0,Ed=1,Ad=2,oi=0,$c=1,Zc=2,Jc=3,Zr=4,Kc=5,jc=6,Qc=7;var th=300,fs=301,Zs=302,Po=303,Lo=304,ks=1e3,ei=1001,oo=1002,tn=1003,Rd=1004;var Jr=1005;var gn=1006,Do=1007;var Ei=1008;var bn=1009,eh=1010,nh=1011,Js=1012,No=1013,Xn=1014,On=1015,qn=1016,Uo=1017,Fo=1018,ps=1020,ih=35902,sh=35899,rh=1021,ah=1022,Yn=1023,yi=1026,Ai=1027,Oo=1028,zo=1029,$i=1030,ko=1031;var Bo=1033,Kr=33776,jr=33777,Qr=33778,ta=33779,Ho=35840,Go=35841,Vo=35842,Wo=35843,Xo=36196,qo=37492,Yo=37496,$o=37488,Zo=37489,ea=37490,Jo=37491,Ko=37808,jo=37809,Qo=37810,tl=37811,el=37812,nl=37813,il=37814,sl=37815,rl=37816,al=37817,ol=37818,ll=37819,cl=37820,hl=37821,ul=36492,dl=36494,fl=36495,pl=36283,ml=36284,na=36285,gl=36286;var wr=2300,lo=2301,ja=2302,Nc=2303,Uc=2400,Fc=2401,Oc=2402;var Cd=3200;var ia=0,Id=1,Ri="",Ge="srgb",Tr="srgb-linear",Er="linear",ue="srgb";var Qa=7680;var Pd=519,Ld=512,Dd=513,Nd=514,oh=515,Ud=516,Fd=517,lh=518,ch=519,Od=35044,$n=35048;var hh="300 es",Fn=2e3,Bs=2001;function im(s){for(let t=s.length-1;t>=0;--t)if(s[t]>=65535)return!0;return!1}function sm(s){return ArrayBuffer.isView(s)&&!(s instanceof DataView)}function Ar(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function zd(){let s=Ar("canvas");return s.style.display="block",s}var Lu={},Hs=null;function uh(...s){let t="THREE."+s.shift();Hs?Hs("log",t,...s):[...s]}function kd(s){let t=s[0];if(typeof t=="string"&&t.startsWith("TSL:")){let e=s[1];e&&e.isStackTrace?s[0]+=" "+e.getLocation():s[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return s}function Nt(...s){s=kd(s);let t="THREE."+s.shift();if(Hs)Hs("warn",t,...s);else{let e=s[0];e&&e.isStackTrace?console.warn(e.getError(t)):console.warn(t,...s)}}function Ft(...s){s=kd(s);let t="THREE."+s.shift();if(Hs)Hs("error",t,...s);else{let e=s[0];e&&e.isStackTrace?console.error(e.getError(t)):console.error(t,...s)}}function Sr(...s){let t=s.join(" ");t in Lu||(Lu[t]=!0,Nt(...s))}function Bd(s,t,e){return new Promise(function(n,i){function r(){switch(s.clientWaitSync(t,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:i();break;case s.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}var Hd={[to]:to,[no]:ro,[io]:io,[zs]:so,[eo]:eo,[ro]:no,[ao]:ao,[so]:zs},ni=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){let n=this._listeners;return n===void 0?!1:n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){let n=this._listeners;if(n===void 0)return;let i=n[t];if(i!==void 0){let r=i.indexOf(e);r!==-1&&i.splice(r,1)}}dispatchEvent(t){let e=this._listeners;if(e===void 0)return;let n=e[t.type];if(n!==void 0){t.target=this;let i=n.slice(0);for(let r=0,a=i.length;r<a;r++)i[r].call(this,t);t.target=null}}},ln=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var dc=Math.PI/180,co=180/Math.PI;function sa(){let s=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(ln[s&255]+ln[s>>8&255]+ln[s>>16&255]+ln[s>>24&255]+"-"+ln[t&255]+ln[t>>8&255]+"-"+ln[t>>16&15|64]+ln[t>>24&255]+"-"+ln[e&63|128]+ln[e>>8&255]+"-"+ln[e>>16&255]+ln[e>>24&255]+ln[n&255]+ln[n>>8&255]+ln[n>>16&255]+ln[n>>24&255]).toLowerCase()}function se(s,t,e){return Math.max(t,Math.min(e,s))}function rm(s,t){return(s%t+t)%t}function fc(s,t,e){return(1-e)*s+e*t}function Gd(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function dh(s){switch(s.constructor){case Uint32Array:return 4294967295;case Uint16Array:return 65535;case Uint8Array:case Uint8ClampedArray:return 255;case Int32Array:return 2147483647;case Int16Array:return 32767;case Int8Array:return 127;default:return}}function am(s,t){if(t.constructor===Float32Array)return s;let e=dh(t);if(e===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.max(s/e,-1)}function om(s,t){if(t.constructor===Float32Array)return s;let e=dh(t);if(e===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.round(s*e)}var xh=class xh{constructor(t=0,e=0){this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("THREE.Vector2: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,n=this.y,i=t.elements;return this.x=i[0]*e+i[3]*n+i[6],this.y=i[1]*e+i[4]*n+i[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=se(this.x,t.x,e.x),this.y=se(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=se(this.x,t,e),this.y=se(this.y,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(se(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(se(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let n=Math.cos(e),i=Math.sin(e),r=this.x-t.x,a=this.y-t.y;return this.x=r*n-a*i+t.x,this.y=r*i+a*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};xh.prototype.isVector2=!0;var Wt=xh,hn=class{constructor(t=0,e=0,n=0,i=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=i}static slerpFlat(t,e,n,i,r,a,o){let l=n[i+0],c=n[i+1],h=n[i+2],u=n[i+3],d=r[a+0],f=r[a+1],m=r[a+2],x=r[a+3];if(u!==x||l!==d||c!==f||h!==m){let p=l*d+c*f+h*m+u*x;p<0&&(d=-d,f=-f,m=-m,x=-x,p=-p);let g=1-o;if(p<.9995){let v=Math.acos(p),S=Math.sin(v);g=Math.sin(g*v)/S,o=Math.sin(o*v)/S,l=l*g+d*o,c=c*g+f*o,h=h*g+m*o,u=u*g+x*o}else{l=l*g+d*o,c=c*g+f*o,h=h*g+m*o,u=u*g+x*o;let v=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=v,c*=v,h*=v,u*=v}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u}static multiplyQuaternionsFlat(t,e,n,i,r,a){let o=n[i],l=n[i+1],c=n[i+2],h=n[i+3],u=r[a],d=r[a+1],f=r[a+2],m=r[a+3];return t[e]=o*m+h*u+l*f-c*d,t[e+1]=l*m+h*d+c*u-o*f,t[e+2]=c*m+h*f+o*d-l*u,t[e+3]=h*m-o*u-l*d-c*f,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,i){return this._x=t,this._y=e,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let n=t._x,i=t._y,r=t._z,a=t._order,o=Math.cos,l=Math.sin,c=o(n/2),h=o(i/2),u=o(r/2),d=l(n/2),f=l(i/2),m=l(r/2);switch(a){case"XYZ":this._x=d*h*u+c*f*m,this._y=c*f*u-d*h*m,this._z=c*h*m+d*f*u,this._w=c*h*u-d*f*m;break;case"YXZ":this._x=d*h*u+c*f*m,this._y=c*f*u-d*h*m,this._z=c*h*m-d*f*u,this._w=c*h*u+d*f*m;break;case"ZXY":this._x=d*h*u-c*f*m,this._y=c*f*u+d*h*m,this._z=c*h*m+d*f*u,this._w=c*h*u-d*f*m;break;case"ZYX":this._x=d*h*u-c*f*m,this._y=c*f*u+d*h*m,this._z=c*h*m-d*f*u,this._w=c*h*u+d*f*m;break;case"YZX":this._x=d*h*u+c*f*m,this._y=c*f*u+d*h*m,this._z=c*h*m-d*f*u,this._w=c*h*u-d*f*m;break;case"XZY":this._x=d*h*u-c*f*m,this._y=c*f*u-d*h*m,this._z=c*h*m+d*f*u,this._w=c*h*u+d*f*m;break;default:Nt("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let n=e/2,i=Math.sin(n);return this._x=t.x*i,this._y=t.y*i,this._z=t.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,n=e[0],i=e[4],r=e[8],a=e[1],o=e[5],l=e[9],c=e[2],h=e[6],u=e[10],d=n+o+u;if(d>0){let f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(h-l)*f,this._y=(r-c)*f,this._z=(a-i)*f}else if(n>o&&n>u){let f=2*Math.sqrt(1+n-o-u);this._w=(h-l)/f,this._x=.25*f,this._y=(i+a)/f,this._z=(r+c)/f}else if(o>u){let f=2*Math.sqrt(1+o-n-u);this._w=(r-c)/f,this._x=(i+a)/f,this._y=.25*f,this._z=(l+h)/f}else{let f=2*Math.sqrt(1+u-n-o);this._w=(a-i)/f,this._x=(r+c)/f,this._y=(l+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<1e-8?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(se(this.dot(t),-1,1)))}rotateTowards(t,e){let n=this.angleTo(t);if(n===0)return this;let i=Math.min(1,e/n);return this.slerp(t,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let n=t._x,i=t._y,r=t._z,a=t._w,o=e._x,l=e._y,c=e._z,h=e._w;return this._x=n*h+a*o+i*c-r*l,this._y=i*h+a*l+r*o-n*c,this._z=r*h+a*c+n*l-i*o,this._w=a*h-n*o-i*l-r*c,this._onChangeCallback(),this}slerp(t,e){let n=t._x,i=t._y,r=t._z,a=t._w,o=this.dot(t);o<0&&(n=-n,i=-i,r=-r,a=-a,o=-o);let l=1-e;if(o<.9995){let c=Math.acos(o),h=Math.sin(c);l=Math.sin(l*c)/h,e=Math.sin(e*c)/h,this._x=this._x*l+n*e,this._y=this._y*l+i*e,this._z=this._z*l+r*e,this._w=this._w*l+a*e,this._onChangeCallback()}else this._x=this._x*l+n*e,this._y=this._y*l+i*e,this._z=this._z*l+r*e,this._w=this._w*l+a*e,this.normalize();return this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(i*Math.sin(t),i*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},_h=class _h{constructor(t=0,e=0,n=0){this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("THREE.Vector3: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Du.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Du.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,n=this.y,i=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*i,this.y=r[1]*e+r[4]*n+r[7]*i,this.z=r[2]*e+r[5]*n+r[8]*i,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,n=this.y,i=this.z,r=t.elements,a=1/(r[3]*e+r[7]*n+r[11]*i+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*i+r[12])*a,this.y=(r[1]*e+r[5]*n+r[9]*i+r[13])*a,this.z=(r[2]*e+r[6]*n+r[10]*i+r[14])*a,this}applyQuaternion(t){let e=this.x,n=this.y,i=this.z,r=t.x,a=t.y,o=t.z,l=t.w,c=2*(a*i-o*n),h=2*(o*e-r*i),u=2*(r*n-a*e);return this.x=e+l*c+a*u-o*h,this.y=n+l*h+o*c-r*u,this.z=i+l*u+r*h-a*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,n=this.y,i=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*i,this.y=r[1]*e+r[5]*n+r[9]*i,this.z=r[2]*e+r[6]*n+r[10]*i,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=se(this.x,t.x,e.x),this.y=se(this.y,t.y,e.y),this.z=se(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=se(this.x,t,e),this.y=se(this.y,t,e),this.z=se(this.z,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(se(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let n=t.x,i=t.y,r=t.z,a=e.x,o=e.y,l=e.z;return this.x=i*l-r*o,this.y=r*a-n*l,this.z=n*o-i*a,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return pc.copy(this).projectOnVector(t),this.sub(pc)}reflect(t){return this.sub(pc.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(se(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y,i=this.z-t.z;return e*e+n*n+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){let i=Math.sin(e)*t;return this.x=i*Math.sin(n),this.y=Math.cos(e)*t,this.z=i*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),i=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=i,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};_h.prototype.isVector3=!0;var k=_h,pc=new k,Du=new hn,vh=class vh{constructor(t,e,n,i,r,a,o,l,c){this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,i,r,a,o,l,c)}set(t,e,n,i,r,a,o,l,c){let h=this.elements;return h[0]=t,h[1]=i,h[2]=o,h[3]=e,h[4]=r,h[5]=l,h[6]=n,h[7]=a,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,i=e.elements,r=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],h=n[4],u=n[7],d=n[2],f=n[5],m=n[8],x=i[0],p=i[3],g=i[6],v=i[1],S=i[4],y=i[7],T=i[2],E=i[5],_=i[8];return r[0]=a*x+o*v+l*T,r[3]=a*p+o*S+l*E,r[6]=a*g+o*y+l*_,r[1]=c*x+h*v+u*T,r[4]=c*p+h*S+u*E,r[7]=c*g+h*y+u*_,r[2]=d*x+f*v+m*T,r[5]=d*p+f*S+m*E,r[8]=d*g+f*y+m*_,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8];return e*a*h-e*o*c-n*r*h+n*o*l+i*r*c-i*a*l}invert(){let t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8],u=h*a-o*c,d=o*l-h*r,f=c*r-a*l,m=e*u+n*d+i*f;if(m===0)return this.set(0,0,0,0,0,0,0,0,0);let x=1/m;return t[0]=u*x,t[1]=(i*c-h*n)*x,t[2]=(o*n-i*a)*x,t[3]=d*x,t[4]=(h*e-i*l)*x,t[5]=(i*r-o*e)*x,t[6]=f*x,t[7]=(n*l-c*e)*x,t[8]=(a*e-n*r)*x,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,i,r,a,o){let l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*a+c*o)+a+t,-i*c,i*l,-i*(-c*a+l*o)+o+e,0,0,1),this}scale(t,e){return Sr("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(mc.makeScale(t,e)),this}rotate(t){return Sr("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(mc.makeRotation(-t)),this}translate(t,e){return Sr("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(mc.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,n=t.elements;for(let i=0;i<9;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}};vh.prototype.isMatrix3=!0;var Ot=vh,mc=new Ot,Nu=new Ot().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Uu=new Ot().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function lm(){let s={enabled:!0,workingColorSpace:Tr,spaces:{},convert:function(i,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===ue&&(i.r=vi(i.r),i.g=vi(i.g),i.b=vi(i.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(i.applyMatrix3(this.spaces[r].toXYZ),i.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===ue&&(i.r=Os(i.r),i.g=Os(i.g),i.b=Os(i.b))),i},workingToColorSpace:function(i,r){return this.convert(i,this.workingColorSpace,r)},colorSpaceToWorking:function(i,r){return this.convert(i,r,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===Ri?Er:this.spaces[i].transfer},getToneMappingMode:function(i){return this.spaces[i].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(i,r=this.workingColorSpace){return i.fromArray(this.spaces[r].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,r,a){return i.copy(this.spaces[a].fromXYZ).multiply(this.spaces[r].toXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],n=[.3127,.329];return s.define({[Tr]:{primaries:t,whitePoint:n,transfer:Er,toXYZ:Nu,fromXYZ:Uu,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:Ge},outputColorSpaceConfig:{drawingBufferColorSpace:Ge}},[Ge]:{primaries:t,whitePoint:n,transfer:ue,toXYZ:Nu,fromXYZ:Uu,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:Ge}}}),s}var ne=lm();function vi(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function Os(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}var Ss,ho=class{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let n;if(t instanceof HTMLCanvasElement)n=t;else{Ss===void 0&&(Ss=Ar("canvas")),Ss.width=t.width,Ss.height=t.height;let i=Ss.getContext("2d");t instanceof ImageData?i.putImageData(t,0,0):i.drawImage(t,0,0,t.width,t.height),n=Ss}return n.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=Ar("canvas");e.width=t.width,e.height=t.height;let n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);let i=n.getImageData(0,0,t.width,t.height),r=i.data;for(let a=0;a<r.length;a++)r[a]=vi(r[a]/255)*255;return n.putImageData(i,0,0),e}else if(t.data){let e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(vi(e[n]/255)*255):e[n]=vi(e[n]);return{data:e,width:t.width,height:t.height}}else return Nt("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},cm=0,Gs=class{constructor(t=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:cm++}),this.uuid=sa(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){let e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):typeof VideoFrame<"u"&&e instanceof VideoFrame?t.set(e.displayWidth,e.displayHeight,0):e!==null?t.set(e.width||0,e.height||0,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let r;if(Array.isArray(i)){r=[];for(let a=0,o=i.length;a<o;a++)i[a].isDataTexture?r.push(gc(i[a].image)):r.push(gc(i[a]))}else r=gc(i);n.url=r}return e||(t.images[this.uuid]=n),n}};function gc(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?ho.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(Nt("Texture: Unable to serialize Texture."),{})}var hm=0,xc=new k,xn=class s extends ni{constructor(t=s.DEFAULT_IMAGE,e=s.DEFAULT_MAPPING,n=ei,i=ei,r=gn,a=Ei,o=Yn,l=bn,c=s.DEFAULT_ANISOTROPY,h=Ri){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:hm++}),this.uuid=sa(),this.name="",this.source=new Gs(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new Wt(0,0),this.repeat=new Wt(1,1),this.center=new Wt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ot,this.generateMipmaps=!0,this.mipmapsAutoUpdate=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.isPMREMTexture=!1,this.normalized=!1}get width(){return this.source.getSize(xc).x}get height(){return this.source.getSize(xc).y}get depth(){return this.source.getSize(xc).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.mipmapsAutoUpdate=t.mipmapsAutoUpdate,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isPMREMTexture=t.isPMREMTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(let e in t){let n=t[e];if(n===void 0){Nt(`Texture.setValues(): parameter '${e}' has value of undefined.`);continue}let i=this[e];if(i===void 0){Nt(`Texture.setValues(): property '${e}' does not exist.`);continue}i&&n&&i.isVector2&&n.isVector2||i&&n&&i.isVector3&&n.isVector3||i&&n&&i.isMatrix3&&n.isMatrix3?i.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,mipmapsAutoUpdate:this.mipmapsAutoUpdate,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==th)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case ks:t.x=t.x-Math.floor(t.x);break;case ei:t.x=t.x<0?0:1;break;case oo:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case ks:t.y=t.y-Math.floor(t.y);break;case ei:t.y=t.y<0?0:1;break;case oo:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};xn.DEFAULT_IMAGE=null;xn.DEFAULT_MAPPING=th;xn.DEFAULT_ANISOTROPY=1;var yh=class yh{constructor(t=0,e=0,n=0,i=1){this.x=t,this.y=e,this.z=n,this.w=i}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,i){return this.x=t,this.y=e,this.z=n,this.w=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("THREE.Vector4: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,n=this.y,i=this.z,r=this.w,a=t.elements;return this.x=a[0]*e+a[4]*n+a[8]*i+a[12]*r,this.y=a[1]*e+a[5]*n+a[9]*i+a[13]*r,this.z=a[2]*e+a[6]*n+a[10]*i+a[14]*r,this.w=a[3]*e+a[7]*n+a[11]*i+a[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,i,r,l=t.elements,c=l[0],h=l[4],u=l[8],d=l[1],f=l[5],m=l[9],x=l[2],p=l[6],g=l[10];if(Math.abs(h-d)<.01&&Math.abs(u-x)<.01&&Math.abs(m-p)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+x)<.1&&Math.abs(m+p)<.1&&Math.abs(c+f+g-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let S=(c+1)/2,y=(f+1)/2,T=(g+1)/2,E=(h+d)/4,_=(u+x)/4,w=(m+p)/4;return S>y&&S>T?S<.01?(n=0,i=.707106781,r=.707106781):(n=Math.sqrt(S),i=E/n,r=_/n):y>T?y<.01?(n=.707106781,i=0,r=.707106781):(i=Math.sqrt(y),n=E/i,r=w/i):T<.01?(n=.707106781,i=.707106781,r=0):(r=Math.sqrt(T),n=_/r,i=w/r),this.set(n,i,r,e),this}let v=Math.sqrt((p-m)*(p-m)+(u-x)*(u-x)+(d-h)*(d-h));return Math.abs(v)<.001&&(v=1),this.x=(p-m)/v,this.y=(u-x)/v,this.z=(d-h)/v,this.w=Math.acos((c+f+g-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=se(this.x,t.x,e.x),this.y=se(this.y,t.y,e.y),this.z=se(this.z,t.z,e.z),this.w=se(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=se(this.x,t,e),this.y=se(this.y,t,e),this.z=se(this.z,t,e),this.w=se(this.w,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(se(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};yh.prototype.isVector4=!0;var Se=yh,uo=class extends ni{constructor(t=1,e=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:gn,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=n.depth,this.scissor=new Se(0,0,t,e),this.scissorTest=!1,this.viewport=new Se(0,0,t,e),this.textures=[];let i=n.count;for(let r=0;r<i;r++)this.textures[r]=new xn({width:t,height:e,depth:n.depth}),this.textures[r].isRenderTargetTexture=!0,this.textures[r].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(t={}){let e={minFilter:gn,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.mipmapsAutoUpdate!==void 0&&(e.mipmapsAutoUpdate=t.mipmapsAutoUpdate),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),t!==null&&t.renderTarget===null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let i=0,r=this.textures.length;i<r;i++)this.textures[i].image.width=t,this.textures[i].image.height=e,this.textures[i].image.depth=n,this.textures[i].isData3DTexture!==!0&&(this.textures[i].isArrayTexture=this.textures[i].image.depth>1);this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,n=t.textures.length;e<n;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;let i=Object.assign({},t.textures[e].image);this.textures[e].source=new Gs(i)}if(this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveColorBuffer=t.resolveColorBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,this.storeMultisampledColorBuffer=t.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=t.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=t.storeMultisampledStencilBuffer,t.depthTexture!==null)if(t.depthTexture.renderTarget===t){let e=t.depthTexture.clone();e.renderTarget=null,this.depthTexture=e}else this.depthTexture=t.depthTexture;else this.depthTexture=null;return this.samples=t.samples,this.multiview=t.multiview,this.useArrayDepthTexture=t.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},_n=class extends uo{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}},Rr=class extends xn{constructor(t=null,e=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=tn,this.minFilter=tn,this.wrapR=ei,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var fo=class extends xn{constructor(t=null,e=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=tn,this.minFilter=tn,this.wrapR=ei,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}};var Co=class Co{constructor(t,e,n,i,r,a,o,l,c,h,u,d,f,m,x,p){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,i,r,a,o,l,c,h,u,d,f,m,x,p)}set(t,e,n,i,r,a,o,l,c,h,u,d,f,m,x,p){let g=this.elements;return g[0]=t,g[4]=e,g[8]=n,g[12]=i,g[1]=r,g[5]=a,g[9]=o,g[13]=l,g[2]=c,g[6]=h,g[10]=u,g[14]=d,g[3]=f,g[7]=m,g[11]=x,g[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Co().fromArray(this.elements)}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){let e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return this.determinantAffine()===0?(t.set(1,0,0),e.set(0,1,0),n.set(0,0,1),this):(t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){if(t.determinantAffine()===0)return this.identity();let e=this.elements,n=t.elements,i=1/ws.setFromMatrixColumn(t,0).length(),r=1/ws.setFromMatrixColumn(t,1).length(),a=1/ws.setFromMatrixColumn(t,2).length();return e[0]=n[0]*i,e[1]=n[1]*i,e[2]=n[2]*i,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*a,e[9]=n[9]*a,e[10]=n[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,n=t.x,i=t.y,r=t.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(i),c=Math.sin(i),h=Math.cos(r),u=Math.sin(r);if(t.order==="XYZ"){let d=a*h,f=a*u,m=o*h,x=o*u;e[0]=l*h,e[4]=-l*u,e[8]=c,e[1]=f+m*c,e[5]=d-x*c,e[9]=-o*l,e[2]=x-d*c,e[6]=m+f*c,e[10]=a*l}else if(t.order==="YXZ"){let d=l*h,f=l*u,m=c*h,x=c*u;e[0]=d+x*o,e[4]=m*o-f,e[8]=a*c,e[1]=a*u,e[5]=a*h,e[9]=-o,e[2]=f*o-m,e[6]=x+d*o,e[10]=a*l}else if(t.order==="ZXY"){let d=l*h,f=l*u,m=c*h,x=c*u;e[0]=d-x*o,e[4]=-a*u,e[8]=m+f*o,e[1]=f+m*o,e[5]=a*h,e[9]=x-d*o,e[2]=-a*c,e[6]=o,e[10]=a*l}else if(t.order==="ZYX"){let d=a*h,f=a*u,m=o*h,x=o*u;e[0]=l*h,e[4]=m*c-f,e[8]=d*c+x,e[1]=l*u,e[5]=x*c+d,e[9]=f*c-m,e[2]=-c,e[6]=o*l,e[10]=a*l}else if(t.order==="YZX"){let d=a*l,f=a*c,m=o*l,x=o*c;e[0]=l*h,e[4]=x-d*u,e[8]=m*u+f,e[1]=u,e[5]=a*h,e[9]=-o*h,e[2]=-c*h,e[6]=f*u+m,e[10]=d-x*u}else if(t.order==="XZY"){let d=a*l,f=a*c,m=o*l,x=o*c;e[0]=l*h,e[4]=-u,e[8]=c*h,e[1]=d*u+x,e[5]=a*h,e[9]=f*u-m,e[2]=m*u-f,e[6]=o*h,e[10]=x*u+d}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(um,t,dm)}lookAt(t,e,n){let i=this.elements;return Sn.subVectors(t,e),Sn.lengthSq()===0&&(Sn.z=1),Sn.normalize(),Fi.crossVectors(n,Sn),Fi.lengthSq()===0&&(Math.abs(n.z)===1?Sn.x+=1e-4:Sn.z+=1e-4,Sn.normalize(),Fi.crossVectors(n,Sn)),Fi.normalize(),Ca.crossVectors(Sn,Fi),i[0]=Fi.x,i[4]=Ca.x,i[8]=Sn.x,i[1]=Fi.y,i[5]=Ca.y,i[9]=Sn.y,i[2]=Fi.z,i[6]=Ca.z,i[10]=Sn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,i=e.elements,r=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],h=n[1],u=n[5],d=n[9],f=n[13],m=n[2],x=n[6],p=n[10],g=n[14],v=n[3],S=n[7],y=n[11],T=n[15],E=i[0],_=i[4],w=i[8],D=i[12],I=i[1],N=i[5],U=i[9],W=i[13],R=i[2],C=i[6],O=i[10],B=i[14],nt=i[3],q=i[7],et=i[11],st=i[15];return r[0]=a*E+o*I+l*R+c*nt,r[4]=a*_+o*N+l*C+c*q,r[8]=a*w+o*U+l*O+c*et,r[12]=a*D+o*W+l*B+c*st,r[1]=h*E+u*I+d*R+f*nt,r[5]=h*_+u*N+d*C+f*q,r[9]=h*w+u*U+d*O+f*et,r[13]=h*D+u*W+d*B+f*st,r[2]=m*E+x*I+p*R+g*nt,r[6]=m*_+x*N+p*C+g*q,r[10]=m*w+x*U+p*O+g*et,r[14]=m*D+x*W+p*B+g*st,r[3]=v*E+S*I+y*R+T*nt,r[7]=v*_+S*N+y*C+T*q,r[11]=v*w+S*U+y*O+T*et,r[15]=v*D+S*W+y*B+T*st,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[4],i=t[8],r=t[12],a=t[1],o=t[5],l=t[9],c=t[13],h=t[2],u=t[6],d=t[10],f=t[14],m=t[3],x=t[7],p=t[11],g=t[15],v=l*f-c*d,S=o*f-c*u,y=o*d-l*u,T=a*f-c*h,E=a*d-l*h,_=a*u-o*h;return e*(x*v-p*S+g*y)-n*(m*v-p*T+g*E)+i*(m*S-x*T+g*_)-r*(m*y-x*E+p*_)}determinantAffine(){let t=this.elements,e=t[0],n=t[4],i=t[8],r=t[1],a=t[5],o=t[9],l=t[2],c=t[6],h=t[10];return e*(a*h-o*c)-n*(r*h-o*l)+i*(r*c-a*l)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){let i=this.elements;return t.isVector3?(i[12]=t.x,i[13]=t.y,i[14]=t.z):(i[12]=t,i[13]=e,i[14]=n),this}invert(){let t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8],u=t[9],d=t[10],f=t[11],m=t[12],x=t[13],p=t[14],g=t[15],v=e*o-n*a,S=e*l-i*a,y=e*c-r*a,T=n*l-i*o,E=n*c-r*o,_=i*c-r*l,w=h*x-u*m,D=h*p-d*m,I=h*g-f*m,N=u*p-d*x,U=u*g-f*x,W=d*g-f*p,R=v*W-S*U+y*N+T*I-E*D+_*w;if(R===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let C=1/R;return t[0]=(o*W-l*U+c*N)*C,t[1]=(i*U-n*W-r*N)*C,t[2]=(x*_-p*E+g*T)*C,t[3]=(d*E-u*_-f*T)*C,t[4]=(l*I-a*W-c*D)*C,t[5]=(e*W-i*I+r*D)*C,t[6]=(p*y-m*_-g*S)*C,t[7]=(h*_-d*y+f*S)*C,t[8]=(a*U-o*I+c*w)*C,t[9]=(n*I-e*U-r*w)*C,t[10]=(m*E-x*y+g*v)*C,t[11]=(u*y-h*E-f*v)*C,t[12]=(o*D-a*N-l*w)*C,t[13]=(e*N-n*D+i*w)*C,t[14]=(x*S-m*T-p*v)*C,t[15]=(h*T-u*S+d*v)*C,this}scale(t){let e=this.elements,n=t.x,i=t.y,r=t.z;return e[0]*=n,e[4]*=i,e[8]*=r,e[1]*=n,e[5]*=i,e[9]*=r,e[2]*=n,e[6]*=i,e[10]*=r,e[3]*=n,e[7]*=i,e[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],i=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,i))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let n=Math.cos(e),i=Math.sin(e),r=1-n,a=t.x,o=t.y,l=t.z,c=r*a,h=r*o;return this.set(c*a+n,c*o-i*l,c*l+i*o,0,c*o+i*l,h*o+n,h*l-i*a,0,c*l-i*o,h*l+i*a,r*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,i,r,a){return this.set(1,n,r,0,t,1,a,0,e,i,1,0,0,0,0,1),this}compose(t,e,n){let i=this.elements,r=e._x,a=e._y,o=e._z,l=e._w,c=r+r,h=a+a,u=o+o,d=r*c,f=r*h,m=r*u,x=a*h,p=a*u,g=o*u,v=l*c,S=l*h,y=l*u,T=n.x,E=n.y,_=n.z;return i[0]=(1-(x+g))*T,i[1]=(f+y)*T,i[2]=(m-S)*T,i[3]=0,i[4]=(f-y)*E,i[5]=(1-(d+g))*E,i[6]=(p+v)*E,i[7]=0,i[8]=(m+S)*_,i[9]=(p-v)*_,i[10]=(1-(d+x))*_,i[11]=0,i[12]=t.x,i[13]=t.y,i[14]=t.z,i[15]=1,this}decompose(t,e,n){let i=this.elements;t.x=i[12],t.y=i[13],t.z=i[14];let r=this.determinantAffine();if(r===0)return n.set(1,1,1),e.identity(),this;let a=ws.set(i[0],i[1],i[2]).length(),o=ws.set(i[4],i[5],i[6]).length(),l=ws.set(i[8],i[9],i[10]).length();r<0&&(a=-a),kn.copy(this);let c=1/a,h=1/o,u=1/l;return kn.elements[0]*=c,kn.elements[1]*=c,kn.elements[2]*=c,kn.elements[4]*=h,kn.elements[5]*=h,kn.elements[6]*=h,kn.elements[8]*=u,kn.elements[9]*=u,kn.elements[10]*=u,e.setFromRotationMatrix(kn),n.x=a,n.y=o,n.z=l,this}makePerspective(t,e,n,i,r,a,o=Fn,l=!1){let c=this.elements,h=2*r/(e-t),u=2*r/(n-i),d=(e+t)/(e-t),f=(n+i)/(n-i),m,x;if(l)m=r/(a-r),x=a*r/(a-r);else if(o===Fn)m=-(a+r)/(a-r),x=-2*a*r/(a-r);else if(o===Bs)m=-a/(a-r),x=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=d,c[12]=0,c[1]=0,c[5]=u,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=m,c[14]=x,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,n,i,r,a,o=Fn,l=!1){let c=this.elements,h=2/(e-t),u=2/(n-i),d=-(e+t)/(e-t),f=-(n+i)/(n-i),m,x;if(l)m=1/(a-r),x=a/(a-r);else if(o===Fn)m=-2/(a-r),x=-(a+r)/(a-r);else if(o===Bs)m=-1/(a-r),x=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=0,c[12]=d,c[1]=0,c[5]=u,c[9]=0,c[13]=f,c[2]=0,c[6]=0,c[10]=m,c[14]=x,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){let e=this.elements,n=t.elements;for(let i=0;i<16;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}};Co.prototype.isMatrix4=!0;var ae=Co,ws=new k,kn=new ae,um=new k(0,0,0),dm=new k(1,1,1),Fi=new k,Ca=new k,Sn=new k,Fu=new ae,Ou=new hn,un=class s{constructor(t=0,e=0,n=0,i=s.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=i}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,i=this._order){return this._x=t,this._y=e,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){let i=t.elements,r=i[0],a=i[4],o=i[8],l=i[1],c=i[5],h=i[9],u=i[2],d=i[6],f=i[10];switch(e){case"XYZ":this._y=Math.asin(se(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-se(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(se(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-se(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(se(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(o,f));break;case"XZY":this._z=Math.asin(-se(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,f),this._y=0);break;default:Nt("Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return Fu.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Fu,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Ou.setFromEuler(this),this.setFromQuaternion(Ou,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};un.DEFAULT_ORDER="XYZ";var Cr=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},fm=0,zu=new k,Ts=new hn,pi=new ae,Ia=new k,xr=new k,pm=new k,mm=new hn,ku=new k(1,0,0),Bu=new k(0,1,0),Hu=new k(0,0,1),Gu={type:"added"},gm={type:"removed"},Es={type:"childadded",child:null},_c={type:"childremoved",child:null},We=class s extends ni{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:fm++}),this.uuid=sa(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=s.DEFAULT_UP.clone();let t=new k,e=new un,n=new hn,i=new k(1,1,1);function r(){n.setFromEuler(e,!1)}function a(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new ae},normalMatrix:{value:new Ot}}),this.matrix=new ae,this.matrixWorld=new ae,this.matrixAutoUpdate=s.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=s.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Cr,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale),this.pivot!==null&&this.position.copy(this.pivot).applyMatrix4(this.matrix).sub(this.pivot)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Ts.setFromAxisAngle(t,e),this.quaternion.multiply(Ts),this}rotateOnWorldAxis(t,e){return Ts.setFromAxisAngle(t,e),this.quaternion.premultiply(Ts),this}rotateX(t){return this.rotateOnAxis(ku,t)}rotateY(t){return this.rotateOnAxis(Bu,t)}rotateZ(t){return this.rotateOnAxis(Hu,t)}translateOnAxis(t,e){return zu.copy(t).applyQuaternion(this.quaternion),this.position.add(zu.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(ku,t)}translateY(t){return this.translateOnAxis(Bu,t)}translateZ(t){return this.translateOnAxis(Hu,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(pi.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?Ia.copy(t):Ia.set(t,e,n);let i=this.parent;this.updateWorldMatrix(!0,!1),xr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?pi.lookAt(xr,Ia,this.up):pi.lookAt(Ia,xr,this.up),this.quaternion.setFromRotationMatrix(pi),i&&(pi.extractRotation(i.matrixWorld),Ts.setFromRotationMatrix(pi),this.quaternion.premultiply(Ts.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(Ft("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Gu),Es.child=t,this.dispatchEvent(Es),Es.child=null):Ft("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(gm),_c.child=t,this.dispatchEvent(_c),_c.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),pi.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),pi.multiply(t.parent.matrixWorld)),t.applyMatrix4(pi),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Gu),Es.child=t,this.dispatchEvent(Es),Es.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,i=this.children.length;n<i;n++){let a=this.children[n].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);let i=this.children;for(let r=0,a=i.length;r<a;r++)i[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(xr,t,pm),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(xr,mm,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}intersectsFrustum(){return!0}traverse(t){t(this);let e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let t=this.pivot;if(t!==null){let e=t.x,n=t.y,i=t.z,r=this.matrix.elements;r[12]+=e-r[0]*e-r[4]*n-r[8]*i,r[13]+=n-r[1]*e-r[5]*n-r[9]*i,r[14]+=i-r[2]*e-r[6]*n-r[10]*i}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e,n=!1){let i=this.parent;if(t===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),e===!0){let r=this.children;for(let a=0,o=r.length;a<o;a++)r[a].updateWorldMatrix(!1,!0,n)}}toJSON(t){let e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let i={};i.uuid=this.uuid,i.type=this.type,i.name=this.name,i.castShadow=this.castShadow,i.receiveShadow=this.receiveShadow,i.visible=this.visible,i.frustumCulled=this.frustumCulled,i.renderOrder=this.renderOrder,i.static=this.static,i.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.pivot!==null&&(i.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(i.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(i.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),i.instanceInfo=this._instanceInfo.map(o=>({...o})),i.availableInstanceIds=this._availableInstanceIds.slice(),i.availableGeometryIds=this._availableGeometryIds.slice(),i.nextIndexStart=this._nextIndexStart,i.nextVertexStart=this._nextVertexStart,i.geometryCount=this._geometryCount,i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.matricesTexture=this._matricesTexture.toJSON(t),i.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(i.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(i.boundingBox=this.boundingBox.toJSON()));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=r(t.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let u=l[c];r(t.shapes,u)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(t.materials,this.material[l]));i.material=o}else i.material=r(t.materials,this.material);if(this.children.length>0){i.children=[];for(let o=0;o<this.children.length;o++)i.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){i.animations=[];for(let o=0;o<this.animations.length;o++){let l=this.animations[o];i.animations.push(r(t.animations,l))}}if(e){let o=a(t.geometries),l=a(t.materials),c=a(t.textures),h=a(t.images),u=a(t.shapes),d=a(t.skeletons),f=a(t.animations),m=a(t.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),d.length>0&&(n.skeletons=d),f.length>0&&(n.animations=f),m.length>0&&(n.nodes=m)}return n.object=i,n;function a(o){let l=[];for(let c in o){let h=o[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){let i=t.children[n];this.add(i.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};We.DEFAULT_UP=new k(0,1,0);We.DEFAULT_MATRIX_AUTO_UPDATE=!0;We.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Ve=class extends We{constructor(){super(),this.isGroup=!0,this.type="Group"}},xm={type:"move"},Vs=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ve,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ve,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new k,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new k),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ve,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new k,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new k,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let i=null,r=null,a=null,o=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){a=!0;for(let x of t.hand.values()){let p=e.getJointPose(x,n),g=this._getHandJoint(c,x);p!==null&&(g.matrix.fromArray(p.transform.matrix),g.matrix.decompose(g.position,g.quaternion,g.scale),g.matrixWorldNeedsUpdate=!0,g.jointRadius=p.radius),g.visible=p!==null}let h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],d=h.position.distanceTo(u.position),f=.02,m=.005;c.inputState.pinching&&d>f+m?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&d<=f-m&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.quaternion,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:t,target:this})));o!==null&&(i=e.getPose(t.targetRaySpace,n),i===null&&r!==null&&(i=r),i!==null&&(o.matrix.fromArray(i.transform.matrix),o.matrix.decompose(o.position,o.quaternion,o.scale),o.matrixWorldNeedsUpdate=!0,i.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(i.linearVelocity)):o.hasLinearVelocity=!1,i.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(i.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(xm)))}return o!==null&&(o.visible=i!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let n=new Ve;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}},Vd={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Oi={h:0,s:0,l:0},Pa={h:0,s:0,l:0};function vc(s,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?s+(t-s)*6*e:e<1/2?t:e<2/3?s+(t-s)*6*(2/3-e):s}var Pt=class{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){let i=t;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Ge){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,ne.colorSpaceToWorking(this,e),this}setRGB(t,e,n,i=ne.workingColorSpace){return this.r=t,this.g=e,this.b=n,ne.colorSpaceToWorking(this,i),this}setHSL(t,e,n,i=ne.workingColorSpace){if(t=rm(t,1),e=se(e,0,1),n=se(n,0,1),e===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+e):n+e-n*e,a=2*n-r;this.r=vc(a,r,t+1/3),this.g=vc(a,r,t),this.b=vc(a,r,t-1/3)}return ne.colorSpaceToWorking(this,i),this}setStyle(t,e=Ge){function n(r){r!==void 0&&parseFloat(r)<1&&Nt("Color: Alpha component of "+t+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,a=i[1],o=i[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseFloat(r[1]))/100,Math.min(100,parseFloat(r[2]))/100,Math.min(100,parseFloat(r[3]))/100,e);break;case"hsl":case"hsla":if(r=/^\s*([+-]?(?:\d+(?:\.\d+)?|\.\d+))\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:Nt("Color: Unknown color model "+t)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=i[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(r,16),e);Nt("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Ge){let n=Vd[t.toLowerCase()];return n!==void 0?this.setHex(n,e):Nt("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=vi(t.r),this.g=vi(t.g),this.b=vi(t.b),this}copyLinearToSRGB(t){return this.r=Os(t.r),this.g=Os(t.g),this.b=Os(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Ge){return ne.workingToColorSpace(cn.copy(this),t),Math.round(se(cn.r*255,0,255))*65536+Math.round(se(cn.g*255,0,255))*256+Math.round(se(cn.b*255,0,255))}getHexString(t=Ge){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=ne.workingColorSpace){ne.workingToColorSpace(cn.copy(this),e);let n=cn.r,i=cn.g,r=cn.b,a=Math.max(n,i,r),o=Math.min(n,i,r),l,c,h=(o+a)/2;if(o===a)l=0,c=0;else{let u=a-o;switch(c=h<=.5?u/(a+o):u/(2-a-o),a){case n:l=(i-r)/u+(i<r?6:0);break;case i:l=(r-n)/u+2;break;case r:l=(n-i)/u+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=ne.workingColorSpace){return ne.workingToColorSpace(cn.copy(this),e),t.r=cn.r,t.g=cn.g,t.b=cn.b,t}getStyle(t=Ge){ne.workingToColorSpace(cn.copy(this),t);let e=cn.r,n=cn.g,i=cn.b;return t!==Ge?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(t,e,n){return this.getHSL(Oi),this.setHSL(Oi.h+t,Oi.s+e,Oi.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(Oi),t.getHSL(Pa);let n=fc(Oi.h,Pa.h,e),i=fc(Oi.s,Pa.s,e),r=fc(Oi.l,Pa.l,e);return this.setHSL(n,i,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,n=this.g,i=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*i,this.g=r[1]*e+r[4]*n+r[7]*i,this.b=r[2]*e+r[5]*n+r[8]*i,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},cn=new Pt;Pt.NAMES=Vd;var Ir=class s{constructor(t,e=1,n=1e3){this.isFog=!0,this.name="",this.color=new Pt(t),this.near=e,this.far=n}clone(){return new s(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},Mi=class extends We{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new un,this.environmentIntensity=1,this.environmentRotation=new un,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),this.background=t.background!==null?t.background.clone():null,this.environment=t.environment!==null?t.environment.clone():null,this.fog=t.fog!==null?t.fog.clone():null,this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),this.overrideMaterial=t.overrideMaterial!==null?t.overrideMaterial.clone():null,this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),e.object.backgroundBlurriness=this.backgroundBlurriness,e.object.backgroundIntensity=this.backgroundIntensity,e.object.backgroundRotation=this.backgroundRotation.toArray(),e.object.environmentIntensity=this.environmentIntensity,e.object.environmentRotation=this.environmentRotation.toArray(),e}},Bn=new k,mi=new k,yc=new k,gi=new k,As=new k,Rs=new k,Vu=new k,Mc=new k,bc=new k,Sc=new k,wc=new Se,Tc=new Se,Ec=new Se,Hi=class s{constructor(t=new k,e=new k,n=new k){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,i){i.subVectors(n,e),Bn.subVectors(t,e),i.cross(Bn);let r=i.lengthSq();return r>0?i.multiplyScalar(1/Math.sqrt(r)):i.set(0,0,0)}static getBarycoord(t,e,n,i,r){Bn.subVectors(i,e),mi.subVectors(n,e),yc.subVectors(t,e);let a=Bn.dot(Bn),o=Bn.dot(mi),l=Bn.dot(yc),c=mi.dot(mi),h=mi.dot(yc),u=a*c-o*o;if(u===0)return r.set(0,0,0),null;let d=1/u,f=(c*l-o*h)*d,m=(a*h-o*l)*d;return r.set(1-f-m,m,f)}static containsPoint(t,e,n,i){return this.getBarycoord(t,e,n,i,gi)===null?!1:gi.x>=0&&gi.y>=0&&gi.x+gi.y<=1}static getInterpolation(t,e,n,i,r,a,o,l){return this.getBarycoord(t,e,n,i,gi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,gi.x),l.addScaledVector(a,gi.y),l.addScaledVector(o,gi.z),l)}static getInterpolatedAttribute(t,e,n,i,r,a){return wc.setScalar(0),Tc.setScalar(0),Ec.setScalar(0),wc.fromBufferAttribute(t,e),Tc.fromBufferAttribute(t,n),Ec.fromBufferAttribute(t,i),a.setScalar(0),a.addScaledVector(wc,r.x),a.addScaledVector(Tc,r.y),a.addScaledVector(Ec,r.z),a}static isFrontFacing(t,e,n,i){return Bn.subVectors(n,e),mi.subVectors(t,e),Bn.cross(mi).dot(i)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,i){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[i]),this}setFromAttributeAndIndices(t,e,n,i){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,i),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Bn.subVectors(this.c,this.b),mi.subVectors(this.a,this.b),Bn.cross(mi).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return s.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return s.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,i,r){return s.getInterpolation(t,this.a,this.b,this.c,e,n,i,r)}containsPoint(t){return s.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return s.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let n=this.a,i=this.b,r=this.c,a,o;As.subVectors(i,n),Rs.subVectors(r,n),Mc.subVectors(t,n);let l=As.dot(Mc),c=Rs.dot(Mc);if(l<=0&&c<=0)return e.copy(n);bc.subVectors(t,i);let h=As.dot(bc),u=Rs.dot(bc);if(h>=0&&u<=h)return e.copy(i);let d=l*u-h*c;if(d<=0&&l>=0&&h<=0&&l-h>0)return a=l/(l-h),e.copy(n).addScaledVector(As,a);Sc.subVectors(t,r);let f=As.dot(Sc),m=Rs.dot(Sc);if(m>=0&&f<=m)return e.copy(r);let x=f*c-l*m;if(x<=0&&c>=0&&m<=0)return o=c/(c-m),e.copy(n).addScaledVector(Rs,o);let p=h*m-f*u;if(p<=0&&u-h>=0&&f-m>=0)return Vu.subVectors(r,i),o=(u-h)/(u-h+(f-m)),e.copy(i).addScaledVector(Vu,o);let g=1/(p+x+d);return a=x*g,o=d*g,e.copy(n).addScaledVector(As,a).addScaledVector(Rs,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},ii=class{constructor(t=new k(1/0,1/0,1/0),e=new k(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(Hn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(Hn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let n=Hn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let n=t.geometry;if(n!==void 0){let r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0&&t.isBatchedMesh!==!0)for(let a=0,o=r.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,Hn):Hn.fromBufferAttribute(r,a),Hn.applyMatrix4(t.matrixWorld),this.expandByPoint(Hn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),La.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),La.copy(n.boundingBox)),La.applyMatrix4(t.matrixWorld),this.union(La)}let i=t.children;for(let r=0,a=i.length;r<a;r++)this.expandByObject(i[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Hn),Hn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(_r),Da.subVectors(this.max,_r),Cs.subVectors(t.a,_r),Is.subVectors(t.b,_r),Ps.subVectors(t.c,_r),zi.subVectors(Is,Cs),ki.subVectors(Ps,Is),is.subVectors(Cs,Ps);let e=[0,-zi.z,zi.y,0,-ki.z,ki.y,0,-is.z,is.y,zi.z,0,-zi.x,ki.z,0,-ki.x,is.z,0,-is.x,-zi.y,zi.x,0,-ki.y,ki.x,0,-is.y,is.x,0];return!Ac(e,Cs,Is,Ps,Da)||(e=[1,0,0,0,1,0,0,0,1],!Ac(e,Cs,Is,Ps,Da))?!1:(Na.crossVectors(zi,ki),e=[Na.x,Na.y,Na.z],Ac(e,Cs,Is,Ps,Da))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Hn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Hn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(xi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),xi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),xi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),xi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),xi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),xi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),xi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),xi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(xi),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}},xi=[new k,new k,new k,new k,new k,new k,new k,new k],Hn=new k,La=new ii,Cs=new k,Is=new k,Ps=new k,zi=new k,ki=new k,is=new k,_r=new k,Da=new k,Na=new k,ss=new k;function Ac(s,t,e,n,i){for(let r=0,a=s.length-3;r<=a;r+=3){ss.fromArray(s,r);let o=i.x*Math.abs(ss.x)+i.y*Math.abs(ss.y)+i.z*Math.abs(ss.z),l=t.dot(ss),c=e.dot(ss),h=n.dot(ss);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}var Fe=new k,Ua=new Wt,_m=0,Ce=class extends ni{constructor(t,e,n=!1){if(super(),Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:_m++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=Od,this.updateRanges=[],this.gpuType=On,this.version=0,this._normalizationScale=t!==void 0?dh(t):void 0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this._normalizationScale=t._normalizationScale,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let i=0,r=this.itemSize;i<r;i++)this.array[t+i]=e.array[n+i];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)Ua.fromBufferAttribute(this,e),Ua.applyMatrix3(t),this.setXY(e,Ua.x,Ua.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)Fe.fromBufferAttribute(this,e),Fe.applyMatrix3(t),this.setXYZ(e,Fe.x,Fe.y,Fe.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)Fe.fromBufferAttribute(this,e),Fe.applyMatrix4(t),this.setXYZ(e,Fe.x,Fe.y,Fe.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Fe.fromBufferAttribute(this,e),Fe.applyNormalMatrix(t),this.setXYZ(e,Fe.x,Fe.y,Fe.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Fe.fromBufferAttribute(this,e),Fe.transformDirection(t),this.setXYZ(e,Fe.x,Fe.y,Fe.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=this._denormalize(n)),n}setComponent(t,e,n){return this.normalized&&(n=this._normalize(n)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=this._denormalize(e)),e}setX(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=this._denormalize(e)),e}setY(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=this._denormalize(e)),e}setZ(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=this._denormalize(e)),e}setW(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=this._normalize(e),n=this._normalize(n)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,i){return t*=this.itemSize,this.normalized&&(e=this._normalize(e),n=this._normalize(n),i=this._normalize(i)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this}setXYZW(t,e,n,i,r){return t*=this.itemSize,this.normalized&&(e=this._normalize(e),n=this._normalize(n),i=this._normalize(i),r=this._normalize(r)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return t.name=this.name,t.usage=this.usage,t.gpuType=this.gpuType,t}dispose(){this.dispatchEvent({type:"dispose"})}_denormalize(t){let e=this._normalizationScale;return e!==void 0?Math.max(t/e,-1):am(t,this.array)}_normalize(t){let e=this._normalizationScale;return e!==void 0?Math.round(t*e):om(t,this.array)}};var Pr=class extends Ce{constructor(t,e,n){super(new Uint16Array(t),e,n)}};var Lr=class extends Ce{constructor(t,e,n){super(new Uint32Array(t),e,n)}};var ve=class extends Ce{constructor(t,e,n){super(new Float32Array(t),e,n)}},vm=new ii,vr=new k,Rc=new k,bi=class{constructor(t=new k,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let n=this.center;e!==void 0?n.copy(e):vm.setFromPoints(t).getCenter(n);let i=0;for(let r=0,a=t.length;r<a;r++)i=Math.max(i,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(i),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;vr.subVectors(t,this.center);let e=vr.lengthSq();if(e>this.radius*this.radius){let n=Math.sqrt(e),i=(n-this.radius)*.5;this.center.addScaledVector(vr,i/n),this.radius+=i}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Rc.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(vr.copy(t.center).add(Rc)),this.expandByPoint(vr.copy(t.center).sub(Rc))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}},ym=0,Un=new ae,Cc=new We,Ls=new k,wn=new ii,yr=new ii,je=new k,Xe=class s extends ni{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:ym++}),this.uuid=sa(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(im(t)?Lr:Pr)(t,1):this.index=t,this}setIndirect(t,e=0){return this.indirect=t,this.indirectOffset=e,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new Ot().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}let i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(t),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(t){return Un.makeRotationFromQuaternion(t),this.applyMatrix4(Un),this}rotateX(t){return Un.makeRotationX(t),this.applyMatrix4(Un),this}rotateY(t){return Un.makeRotationY(t),this.applyMatrix4(Un),this}rotateZ(t){return Un.makeRotationZ(t),this.applyMatrix4(Un),this}translate(t,e,n){return Un.makeTranslation(t,e,n),this.applyMatrix4(Un),this}scale(t,e,n){return Un.makeScale(t,e,n),this.applyMatrix4(Un),this}lookAt(t){return Cc.lookAt(t),Cc.updateMatrix(),this.applyMatrix4(Cc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ls).negate(),this.translate(Ls.x,Ls.y,Ls.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let n=[];for(let i=0,r=t.length;i<r;i++){let a=t[i];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new ve(n,3))}else{let n=Math.min(t.length,e.count);for(let i=0;i<n;i++){let r=t[i];e.setXYZ(i,r.x,r.y,r.z||0)}t.length>e.count&&Nt("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ii);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Ft("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new k(-1/0,-1/0,-1/0),new k(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,i=e.length;n<i;n++){let r=e[n];wn.setFromBufferAttribute(r),this.morphTargetsRelative?(je.addVectors(this.boundingBox.min,wn.min),this.boundingBox.expandByPoint(je),je.addVectors(this.boundingBox.max,wn.max),this.boundingBox.expandByPoint(je)):(this.boundingBox.expandByPoint(wn.min),this.boundingBox.expandByPoint(wn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Ft('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new bi);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Ft("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new k,1/0);return}if(t){let n=this.boundingSphere.center;if(wn.setFromBufferAttribute(t),e)for(let r=0,a=e.length;r<a;r++){let o=e[r];yr.setFromBufferAttribute(o),this.morphTargetsRelative?(je.addVectors(wn.min,yr.min),wn.expandByPoint(je),je.addVectors(wn.max,yr.max),wn.expandByPoint(je)):(wn.expandByPoint(yr.min),wn.expandByPoint(yr.max))}wn.getCenter(n);let i=0;for(let r=0,a=t.count;r<a;r++)je.fromBufferAttribute(t,r),i=Math.max(i,n.distanceToSquared(je));if(e)for(let r=0,a=e.length;r<a;r++){let o=e[r],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)je.fromBufferAttribute(o,c),l&&(Ls.fromBufferAttribute(t,c),je.add(Ls)),i=Math.max(i,n.distanceToSquared(je))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&Ft('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){Ft("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=e.position,i=e.normal,r=e.uv,a=this.getAttribute("tangent");(a===void 0||a.count!==n.count)&&(a=new Ce(new Float32Array(4*n.count),4),this.setAttribute("tangent",a));let o=[],l=[],c=new Uint8Array(n.count);for(let D=0;D<n.count;D++)o[D]=new k,l[D]=new k;let h=new k,u=new k,d=new k,f=new Wt,m=new Wt,x=new Wt,p=new k,g=new k;function v(D,I,N){c[D]=c[I]=c[N]=1,h.fromBufferAttribute(n,D),u.fromBufferAttribute(n,I),d.fromBufferAttribute(n,N),f.fromBufferAttribute(r,D),m.fromBufferAttribute(r,I),x.fromBufferAttribute(r,N),u.sub(h),d.sub(h),m.sub(f),x.sub(f);let U=1/(m.x*x.y-x.x*m.y);isFinite(U)&&(p.copy(u).multiplyScalar(x.y).addScaledVector(d,-m.y).multiplyScalar(U),g.copy(d).multiplyScalar(m.x).addScaledVector(u,-x.x).multiplyScalar(U),o[D].add(p),o[I].add(p),o[N].add(p),l[D].add(g),l[I].add(g),l[N].add(g))}let S=this.groups;S.length===0&&(S=[{start:0,count:t.count}]);for(let D=0,I=S.length;D<I;++D){let N=S[D],U=N.start,W=N.count;for(let R=U,C=U+W;R<C;R+=3)v(t.getX(R+0),t.getX(R+1),t.getX(R+2))}let y=new k,T=new k,E=new k,_=new k;function w(D){E.fromBufferAttribute(i,D),_.copy(E);let I=o[D];y.copy(I),y.sub(E.multiplyScalar(E.dot(I))).normalize(),T.crossVectors(_,I);let U=T.dot(l[D])<0?-1:1;a.setXYZW(D,y.x,y.y,y.z,U)}for(let D=0,I=n.count;D<I;++D)c[D]&&w(D);this._transformed=!0}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==e.count)n=new Ce(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let d=0,f=n.count;d<f;d++)n.setXYZ(d,0,0,0);let i=new k,r=new k,a=new k,o=new k,l=new k,c=new k,h=new k,u=new k;if(t)for(let d=0,f=t.count;d<f;d+=3){let m=t.getX(d+0),x=t.getX(d+1),p=t.getX(d+2);i.fromBufferAttribute(e,m),r.fromBufferAttribute(e,x),a.fromBufferAttribute(e,p),h.subVectors(a,r),u.subVectors(i,r),h.cross(u),o.fromBufferAttribute(n,m),l.fromBufferAttribute(n,x),c.fromBufferAttribute(n,p),o.add(h),l.add(h),c.add(h),n.setXYZ(m,o.x,o.y,o.z),n.setXYZ(x,l.x,l.y,l.z),n.setXYZ(p,c.x,c.y,c.z)}else for(let d=0,f=e.count;d<f;d+=3)i.fromBufferAttribute(e,d+0),r.fromBufferAttribute(e,d+1),a.fromBufferAttribute(e,d+2),h.subVectors(a,r),u.subVectors(i,r),h.cross(u),n.setXYZ(d+0,h.x,h.y,h.z),n.setXYZ(d+1,h.x,h.y,h.z),n.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)je.fromBufferAttribute(t,e),je.normalize(),t.setXYZ(e,je.x,je.y,je.z)}toNonIndexed(){function t(o,l){let c=o.array,h=o.itemSize,u=o.normalized,d=new c.constructor(l.length*h),f=0,m=0;for(let x=0,p=l.length;x<p;x++){o.isInterleavedBufferAttribute?f=l[x]*o.data.stride+o.offset:f=l[x]*h;for(let g=0;g<h;g++)d[m++]=c[f++]}return new Ce(d,h,u)}if(this.index===null)return Nt("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new s,n=this.index.array,i=this.attributes;for(let o in i){let l=i[o],c=t(l,n);e.setAttribute(o,c)}let r=this.morphAttributes;for(let o in r){let l=[],c=r[o];for(let h=0,u=c.length;h<u;h++){let d=c[h],f=t(d,n);l.push(f)}e.morphAttributes[o]=l}e.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,l=a.length;o<l;o++){let c=a[o];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){let t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,t.name=this.name,Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let n=this.attributes;for(let l in n){let c=n[l];t.data.attributes[l]=c.toJSON(t.data)}let i={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let u=0,d=c.length;u<d;u++){let f=c[u];h.push(f.toJSON(t.data))}h.length>0&&(i[l]=h,r=!0)}r&&(t.data.morphAttributes=i,t.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(t.data.boundingSphere=o.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let n=t.index;n!==null&&this.setIndex(n.clone());let i=t.attributes;for(let c in i){let h=i[c];this.setAttribute(c,h.clone(e))}let r=t.morphAttributes;for(let c in r){let h=[],u=r[c];for(let d=0,f=u.length;d<f;d++)h.push(u[d].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;let a=t.groups;for(let c=0,h=a.length;c<h;c++){let u=a[c];this.addGroup(u.start,u.count,u.materialIndex)}let o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());let l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this._transformed=t._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}};var Ic=new k,Mm=new k,bm=new Ot,Gn=class{constructor(t=new k(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,i){return this.normal.set(t,e,n),this.constant=i,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){let i=Ic.subVectors(n,e).cross(Mm.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(i,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e,n=!0){let i=t.delta(Ic),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let a=-(t.start.dot(this.normal)+this.constant)/r;return n===!0&&(a<0||a>1)?null:e.copy(t.start).addScaledVector(i,a)}intersectsLine(t){let e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let n=e||bm.getNormalMatrix(t),i=this.coplanarPoint(Ic).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(t){return this.normal.fromArray(t.normal),this.constant=t.constant,this}},Sm=0,si=class extends ni{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Sm++}),this.uuid=sa(),this.name="",this.type="Material",this.blending=Yi,this.side=ri,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=qc,this.blendDst=Yc,this.blendEquation=ds,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Pt(0,0,0),this.blendAlpha=0,this.depthFunc=zs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Pd,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Qa,this.stencilZFail=Qa,this.stencilZPass=Qa,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let n=t[e];if(n===void 0){Nt(`Material: parameter '${e}' has value of undefined.`);continue}let i=this[e];if(i===void 0){Nt(`Material: '${e}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector2&&n&&n.isVector2||i&&i.isEuler&&n&&n.isEuler||i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.diffuseRoughness!==void 0&&(n.diffuseRoughness=this.diffuseRoughness),this.diffuseRoughnessMap&&this.diffuseRoughnessMap.isTexture&&(n.diffuseRoughnessMap=this.diffuseRoughnessMap.toJSON(t).uuid),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessMinimum!==void 0&&(n.iridescenceThicknessMinimum=this.iridescenceThicknessMinimum),this.iridescenceThicknessMaximum!==void 0&&(n.iridescenceThicknessMaximum=this.iridescenceThicknessMaximum),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(r){let a=[];for(let o in r){let l=r[o];delete l.metadata,a.push(l)}return a}if(e){let r=i(t.textures),a=i(t.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}fromJSON(t,e){if(t.uuid!==void 0&&(this.uuid=t.uuid),t.name!==void 0&&(this.name=t.name),t.color!==void 0&&this.color!==void 0&&this.color.setHex(t.color),t.roughness!==void 0&&(this.roughness=t.roughness),t.metalness!==void 0&&(this.metalness=t.metalness),t.sheen!==void 0&&(this.sheen=t.sheen),t.sheenColor!==void 0&&(this.sheenColor=new Pt().setHex(t.sheenColor)),t.sheenRoughness!==void 0&&(this.sheenRoughness=t.sheenRoughness),t.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(t.emissive),t.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(t.specular),t.specularIntensity!==void 0&&(this.specularIntensity=t.specularIntensity),t.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(t.specularColor),t.shininess!==void 0&&(this.shininess=t.shininess),t.clearcoat!==void 0&&(this.clearcoat=t.clearcoat),t.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=t.clearcoatRoughness),t.diffuseRoughness!==void 0&&(this.diffuseRoughness=t.diffuseRoughness),t.dispersion!==void 0&&(this.dispersion=t.dispersion),t.retroreflectivity!==void 0&&(this.retroreflectivity=t.retroreflectivity),t.iridescence!==void 0&&(this.iridescence=t.iridescence),t.iridescenceIOR!==void 0&&(this.iridescenceIOR=t.iridescenceIOR),t.iridescenceThicknessMinimum!==void 0&&(this.iridescenceThicknessMinimum=t.iridescenceThicknessMinimum),t.iridescenceThicknessMaximum!==void 0&&(this.iridescenceThicknessMaximum=t.iridescenceThicknessMaximum),t.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessMinimum=t.iridescenceThicknessRange[0],this.iridescenceThicknessMaximum=t.iridescenceThicknessRange[1]),t.transmission!==void 0&&(this.transmission=t.transmission),t.thickness!==void 0&&(this.thickness=t.thickness),t.attenuationDistance!==void 0&&(this.attenuationDistance=t.attenuationDistance),t.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(t.attenuationColor),t.anisotropy!==void 0&&(this.anisotropy=t.anisotropy),t.anisotropyRotation!==void 0&&(this.anisotropyRotation=t.anisotropyRotation),t.fog!==void 0&&(this.fog=t.fog),t.flatShading!==void 0&&(this.flatShading=t.flatShading),t.blending!==void 0&&(this.blending=t.blending),t.combine!==void 0&&(this.combine=t.combine),t.side!==void 0&&(this.side=t.side),t.shadowSide!==void 0&&(this.shadowSide=t.shadowSide),t.opacity!==void 0&&(this.opacity=t.opacity),t.transparent!==void 0&&(this.transparent=t.transparent),t.alphaTest!==void 0&&(this.alphaTest=t.alphaTest),t.alphaHash!==void 0&&(this.alphaHash=t.alphaHash),t.depthFunc!==void 0&&(this.depthFunc=t.depthFunc),t.depthTest!==void 0&&(this.depthTest=t.depthTest),t.depthWrite!==void 0&&(this.depthWrite=t.depthWrite),t.colorWrite!==void 0&&(this.colorWrite=t.colorWrite),t.clippingPlanes!==void 0&&(this.clippingPlanes=t.clippingPlanes.map(n=>new Gn().fromJSON(n))),t.clipIntersection!==void 0&&(this.clipIntersection=t.clipIntersection),t.clipShadows!==void 0&&(this.clipShadows=t.clipShadows),t.depthPacking!==void 0&&(this.depthPacking=t.depthPacking),t.blendSrc!==void 0&&(this.blendSrc=t.blendSrc),t.blendDst!==void 0&&(this.blendDst=t.blendDst),t.blendEquation!==void 0&&(this.blendEquation=t.blendEquation),t.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=t.blendSrcAlpha),t.blendDstAlpha!==void 0&&(this.blendDstAlpha=t.blendDstAlpha),t.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=t.blendEquationAlpha),t.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(t.blendColor),t.blendAlpha!==void 0&&(this.blendAlpha=t.blendAlpha),t.stencilWriteMask!==void 0&&(this.stencilWriteMask=t.stencilWriteMask),t.stencilFunc!==void 0&&(this.stencilFunc=t.stencilFunc),t.stencilRef!==void 0&&(this.stencilRef=t.stencilRef),t.stencilFuncMask!==void 0&&(this.stencilFuncMask=t.stencilFuncMask),t.stencilFail!==void 0&&(this.stencilFail=t.stencilFail),t.stencilZFail!==void 0&&(this.stencilZFail=t.stencilZFail),t.stencilZPass!==void 0&&(this.stencilZPass=t.stencilZPass),t.stencilWrite!==void 0&&(this.stencilWrite=t.stencilWrite),t.wireframe!==void 0&&(this.wireframe=t.wireframe),t.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=t.wireframeLinewidth),t.wireframeLinecap!==void 0&&(this.wireframeLinecap=t.wireframeLinecap),t.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=t.wireframeLinejoin),t.rotation!==void 0&&(this.rotation=t.rotation),t.linewidth!==void 0&&(this.linewidth=t.linewidth),t.linecap!==void 0&&(this.linecap=t.linecap),t.linejoin!==void 0&&(this.linejoin=t.linejoin),t.dashSize!==void 0&&(this.dashSize=t.dashSize),t.gapSize!==void 0&&(this.gapSize=t.gapSize),t.scale!==void 0&&(this.scale=t.scale),t.polygonOffset!==void 0&&(this.polygonOffset=t.polygonOffset),t.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=t.polygonOffsetFactor),t.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=t.polygonOffsetUnits),t.dithering!==void 0&&(this.dithering=t.dithering),t.alphaToCoverage!==void 0&&(this.alphaToCoverage=t.alphaToCoverage),t.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=t.premultipliedAlpha),t.forceSinglePass!==void 0&&(this.forceSinglePass=t.forceSinglePass),t.allowOverride!==void 0&&(this.allowOverride=t.allowOverride),t.visible!==void 0&&(this.visible=t.visible),t.toneMapped!==void 0&&(this.toneMapped=t.toneMapped),t.userData!==void 0&&(this.userData=t.userData),t.vertexColors!==void 0&&(typeof t.vertexColors=="number"?this.vertexColors=t.vertexColors>0:this.vertexColors=t.vertexColors),t.size!==void 0&&(this.size=t.size),t.sizeAttenuation!==void 0&&(this.sizeAttenuation=t.sizeAttenuation),t.map!==void 0&&(this.map=e[t.map]||null),t.matcap!==void 0&&(this.matcap=e[t.matcap]||null),t.alphaMap!==void 0&&(this.alphaMap=e[t.alphaMap]||null),t.bumpMap!==void 0&&(this.bumpMap=e[t.bumpMap]||null),t.bumpScale!==void 0&&(this.bumpScale=t.bumpScale),t.normalMap!==void 0&&(this.normalMap=e[t.normalMap]||null),t.normalMapType!==void 0&&(this.normalMapType=t.normalMapType),t.normalScale!==void 0){let n=t.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new Wt().fromArray(n)}return t.displacementMap!==void 0&&(this.displacementMap=e[t.displacementMap]||null),t.displacementScale!==void 0&&(this.displacementScale=t.displacementScale),t.displacementBias!==void 0&&(this.displacementBias=t.displacementBias),t.roughnessMap!==void 0&&(this.roughnessMap=e[t.roughnessMap]||null),t.metalnessMap!==void 0&&(this.metalnessMap=e[t.metalnessMap]||null),t.emissiveMap!==void 0&&(this.emissiveMap=e[t.emissiveMap]||null),t.emissiveIntensity!==void 0&&(this.emissiveIntensity=t.emissiveIntensity),t.specularMap!==void 0&&(this.specularMap=e[t.specularMap]||null),t.specularIntensityMap!==void 0&&(this.specularIntensityMap=e[t.specularIntensityMap]||null),t.specularColorMap!==void 0&&(this.specularColorMap=e[t.specularColorMap]||null),t.envMap!==void 0&&(this.envMap=e[t.envMap]||null),t.envMapRotation!==void 0&&this.envMapRotation.fromArray(t.envMapRotation),t.envMapIntensity!==void 0&&(this.envMapIntensity=t.envMapIntensity),t.reflectivity!==void 0&&(this.reflectivity=t.reflectivity),t.refractionRatio!==void 0&&(this.refractionRatio=t.refractionRatio),t.lightMap!==void 0&&(this.lightMap=e[t.lightMap]||null),t.lightMapIntensity!==void 0&&(this.lightMapIntensity=t.lightMapIntensity),t.aoMap!==void 0&&(this.aoMap=e[t.aoMap]||null),t.aoMapIntensity!==void 0&&(this.aoMapIntensity=t.aoMapIntensity),t.gradientMap!==void 0&&(this.gradientMap=e[t.gradientMap]||null),t.clearcoatMap!==void 0&&(this.clearcoatMap=e[t.clearcoatMap]||null),t.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=e[t.clearcoatRoughnessMap]||null),t.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=e[t.clearcoatNormalMap]||null),t.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new Wt().fromArray(t.clearcoatNormalScale)),t.diffuseRoughnessMap!==void 0&&(this.diffuseRoughnessMap=e[t.diffuseRoughnessMap]||null),t.iridescenceMap!==void 0&&(this.iridescenceMap=e[t.iridescenceMap]||null),t.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=e[t.iridescenceThicknessMap]||null),t.transmissionMap!==void 0&&(this.transmissionMap=e[t.transmissionMap]||null),t.thicknessMap!==void 0&&(this.thicknessMap=e[t.thicknessMap]||null),t.anisotropyMap!==void 0&&(this.anisotropyMap=e[t.anisotropyMap]||null),t.sheenColorMap!==void 0&&(this.sheenColorMap=e[t.sheenColorMap]||null),t.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=e[t.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,n=null;if(e!==null){let i=e.length;n=new Array(i);for(let r=0;r!==i;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}};var _i=new k,Pc=new k,Fa=new k,Oa=new k,Dr=class{constructor(t=new k,e=new k(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,_i)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=_i.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(_i.copy(this.origin).addScaledVector(this.direction,e),_i.distanceToSquared(t))}distanceSqToSegment(t,e,n,i){Pc.copy(t).add(e).multiplyScalar(.5),Fa.copy(e).sub(t).normalize(),Oa.copy(this.origin).sub(Pc);let r=t.distanceTo(e)*.5,a=-this.direction.dot(Fa),o=Oa.dot(this.direction),l=-Oa.dot(Fa),c=Oa.lengthSq(),h=Math.abs(1-a*a),u,d,f,m;if(h>0)if(u=a*l-o,d=a*o-l,m=r*h,u>=0)if(d>=-m)if(d<=m){let x=1/h;u*=x,d*=x,f=u*(u+a*d+2*o)+d*(a*u+d+2*l)+c}else d=r,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*l)+c;else d=-r,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*l)+c;else d<=-m?(u=Math.max(0,-(-a*r+o)),d=u>0?-r:Math.min(Math.max(-r,-l),r),f=-u*u+d*(d+2*l)+c):d<=m?(u=0,d=Math.min(Math.max(-r,-l),r),f=d*(d+2*l)+c):(u=Math.max(0,-(a*r+o)),d=u>0?r:Math.min(Math.max(-r,-l),r),f=-u*u+d*(d+2*l)+c);else d=a>0?-r:r,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),i&&i.copy(Pc).addScaledVector(Fa,d),f}intersectSphere(t,e){if(t.radius<0)return null;_i.subVectors(t.center,this.origin);let n=_i.dot(this.direction),i=_i.dot(_i)-n*n,r=t.radius*t.radius;if(i>r)return null;let a=Math.sqrt(r-i),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,e):this.at(o,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){let n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,i,r,a,o,l,c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return c>=0?(n=(t.min.x-d.x)*c,i=(t.max.x-d.x)*c):(n=(t.max.x-d.x)*c,i=(t.min.x-d.x)*c),h>=0?(r=(t.min.y-d.y)*h,a=(t.max.y-d.y)*h):(r=(t.max.y-d.y)*h,a=(t.min.y-d.y)*h),n>a||r>i||((r>n||isNaN(n))&&(n=r),(a<i||isNaN(i))&&(i=a),u>=0?(o=(t.min.z-d.z)*u,l=(t.max.z-d.z)*u):(o=(t.max.z-d.z)*u,l=(t.min.z-d.z)*u),n>l||o>i)||((o>n||n!==n)&&(n=o),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,e)}intersectsBox(t){return this.intersectBox(t,_i)!==null}intersectTriangle(t,e,n,i,r){let a=this.origin,o=this.direction,l=o.x,c=o.y,h=o.z,u=t.x-a.x,d=t.y-a.y,f=t.z-a.z,m=e.x-a.x,x=e.y-a.y,p=e.z-a.z,g=n.x-a.x,v=n.y-a.y,S=n.z-a.z,y=Math.abs(l),T=Math.abs(c),E=Math.abs(h),_,w,D,I,N,U,W,R,C,O,B,nt;if(y>=T&&y>=E?(D=l,U=u,C=m,nt=g,l>=0?(_=c,w=h,I=d,N=f,W=x,R=p,O=v,B=S):(_=h,w=c,I=f,N=d,W=p,R=x,O=S,B=v)):T>=E?(D=c,U=d,C=x,nt=v,c>=0?(_=h,w=l,I=f,N=u,W=p,R=m,O=S,B=g):(_=l,w=h,I=u,N=f,W=m,R=p,O=g,B=S)):(D=h,U=f,C=p,nt=S,h>=0?(_=l,w=c,I=u,N=d,W=m,R=x,O=g,B=v):(_=c,w=l,I=d,N=u,W=x,R=m,O=v,B=g)),D===0)return null;let q=_/D,et=w/D,st=1/D,Et=I-q*U,Ut=N-et*U,Z=W-q*C,lt=R-et*C,bt=O-q*nt,Ct=B-et*nt,yt=bt*lt-Ct*Z,Bt=Et*Ct-Ut*bt,Ne=Z*Ut-lt*Et;if(i){if(yt<0||Bt<0||Ne<0)return null}else if((yt<0||Bt<0||Ne<0)&&(yt>0||Bt>0||Ne>0))return null;let Dt=yt+Bt+Ne;if(Dt===0)return null;let de=st*(yt*U+Bt*C+Ne*nt);return(Dt>0?de<0:de>0)?null:this.at(de/Dt,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},dn=class extends si{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Pt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new un,this.combine=Io,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}},Wu=new ae,rs=new Dr,za=new bi,Xu=new k,ka=new k,Ba=new k,Ha=new k,Lc=new k,Ga=new k,qu=new k,Va=new k,re=class extends We{constructor(t=new Xe,e=new dn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0?this.morphTargetInfluences=t.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,t.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){let o=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(t,e){let n=this.geometry,i=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;e.fromBufferAttribute(i,t);let o=this.morphTargetInfluences;if(r&&o){Ga.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let h=o[l],u=r[l];h!==0&&(Lc.fromBufferAttribute(u,t),a?Ga.addScaledVector(Lc,h):Ga.addScaledVector(Lc.sub(e),h))}e.add(Ga)}return e}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let n=this.geometry,i=this.material,r=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),za.copy(n.boundingSphere),za.applyMatrix4(r),rs.copy(t.ray).recast(t.near),!(za.containsPoint(rs.origin)===!1&&(rs.intersectSphere(za,Xu)===null||rs.origin.distanceToSquared(Xu)>(t.far-t.near)**2))&&(Wu.copy(r).invert(),rs.copy(t.ray).applyMatrix4(Wu),!(n.boundingBox!==null&&rs.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,rs)))}_computeIntersections(t,e,n){let i,r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,d=r.groups,f=r.drawRange;if(o!==null)if(Array.isArray(a))for(let m=0,x=d.length;m<x;m++){let p=d[m],g=a[p.materialIndex],v=Math.max(p.start,f.start),S=Math.min(o.count,Math.min(p.start+p.count,f.start+f.count));for(let y=v,T=S;y<T;y+=3){let E=o.getX(y),_=o.getX(y+1),w=o.getX(y+2);i=Wa(this,g,t,n,c,h,u,E,_,w),i&&(i.faceIndex=Math.floor(y/3),i.face.materialIndex=p.materialIndex,e.push(i))}}else{let m=Math.max(0,f.start),x=Math.min(o.count,f.start+f.count);for(let p=m,g=x;p<g;p+=3){let v=o.getX(p),S=o.getX(p+1),y=o.getX(p+2);i=Wa(this,a,t,n,c,h,u,v,S,y),i&&(i.faceIndex=Math.floor(p/3),e.push(i))}}else if(l!==void 0)if(Array.isArray(a))for(let m=0,x=d.length;m<x;m++){let p=d[m],g=a[p.materialIndex],v=Math.max(p.start,f.start),S=Math.min(l.count,Math.min(p.start+p.count,f.start+f.count));for(let y=v,T=S;y<T;y+=3){let E=y,_=y+1,w=y+2;i=Wa(this,g,t,n,c,h,u,E,_,w),i&&(i.faceIndex=Math.floor(y/3),i.face.materialIndex=p.materialIndex,e.push(i))}}else{let m=Math.max(0,f.start),x=Math.min(l.count,f.start+f.count);for(let p=m,g=x;p<g;p+=3){let v=p,S=p+1,y=p+2;i=Wa(this,a,t,n,c,h,u,v,S,y),i&&(i.faceIndex=Math.floor(p/3),e.push(i))}}}};function wm(s,t,e,n,i,r,a,o){let l;if(t.side===sn?l=n.intersectTriangle(a,r,i,!0,o):l=n.intersectTriangle(i,r,a,t.side===ri,o),l===null)return null;Va.copy(o),Va.applyMatrix4(s.matrixWorld);let c=e.ray.origin.distanceTo(Va);return c<e.near||c>e.far?null:{distance:c,point:Va.clone(),object:s}}function Wa(s,t,e,n,i,r,a,o,l,c){s.getVertexPosition(o,ka),s.getVertexPosition(l,Ba),s.getVertexPosition(c,Ha);let h=wm(s,t,e,n,ka,Ba,Ha,qu);if(h){let u=new k;Hi.getBarycoord(qu,ka,Ba,Ha,u),i&&(h.uv=Hi.getInterpolatedAttribute(i,o,l,c,u,new Wt)),r&&(h.uv1=Hi.getInterpolatedAttribute(r,o,l,c,u,new Wt)),a&&(h.normal=Hi.getInterpolatedAttribute(a,o,l,c,u,new k),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let d={a:o,b:l,c,normal:new k,materialIndex:0};Hi.getNormal(ka,Ba,Ha,d.normal),h.face=d,h.barycoord=u}return h}var Nr=class extends xn{constructor(t=null,e=1,n=1,i,r,a,o,l,c=tn,h=tn,u,d){super(null,a,o,l,c,h,i,r,u,d),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Tn=class extends Ce{constructor(t,e,n,i=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){let t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}},Ds=new ae,Yu=new ae,Xa=[],$u=new ii,Tm=new ae,Mr=new re,br=new bi,we=class extends re{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new Tn(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<n;i++)this.setMatrixAt(i,Tm)}computeBoundingBox(){let t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new ii),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Ds),$u.copy(t.boundingBox).applyMatrix4(Ds),this.boundingBox.union($u)}computeBoundingSphere(){let t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new bi),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Ds),br.copy(t.boundingSphere).applyMatrix4(Ds),this.boundingSphere.union(br)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),this.morphTexture=t.morphTexture!==null?t.morphTexture.clone():null,this.instanceColor=t.instanceColor!==null?t.instanceColor.clone():null,this.count=t.count,this.boundingBox=t.boundingBox!==null?t.boundingBox.clone():null,this.boundingSphere=t.boundingSphere!==null?t.boundingSphere.clone():null,this}getColorAt(t,e){return this.instanceColor===null?e.setRGB(1,1,1):e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){return e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){let n=e.morphTargetInfluences,i=this.morphTexture.source.data.data,r=n.length+1,a=t*r+1;for(let o=0;o<n.length;o++)n[o]=i[a+o]}raycast(t,e){let n=this.matrixWorld,i=this.count;if(Mr.geometry=this.geometry,Mr.material=this.material,Mr.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),br.copy(this.boundingSphere),br.applyMatrix4(n),t.ray.intersectsSphere(br)!==!1))for(let r=0;r<i;r++){this.getMatrixAt(r,Ds),Yu.multiplyMatrices(n,Ds),Mr.matrixWorld=Yu,Mr.raycast(t,Xa);for(let a=0,o=Xa.length;a<o;a++){let l=Xa[a];l.instanceId=r,l.object=this,e.push(l)}Xa.length=0}}setColorAt(t,e){return this.instanceColor===null&&(this.instanceColor=new Tn(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3),this}setMatrixAt(t,e){return e.toArray(this.instanceMatrix.array,t*16),this}setMorphAt(t,e){let n=e.morphTargetInfluences,i=n.length+1;this.morphTexture===null&&(this.morphTexture=new Nr(new Float32Array(i*this.count),i,this.count,Oo,On));let r=this.morphTexture.source.data.data,a=0;for(let c=0;c<n.length;c++)a+=n[c];let o=this.geometry.morphTargetsRelative?1:1-a,l=i*t;return r[l]=o,r.set(n,l+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.instanceMatrix.dispose(),this.instanceColor!==null&&this.instanceColor.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},as=new bi,Em=new Wt(.5,.5),qa=new k,Gi=class{constructor(t=new Gn,e=new Gn,n=new Gn,i=new Gn,r=new Gn,a=new Gn){this.planes=[t,e,n,i,r,a]}set(t,e,n,i,r,a){let o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(n),o[3].copy(i),o[4].copy(r),o[5].copy(a),this}copy(t){let e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=Fn,n=!1){let i=this.planes,r=t.elements,a=r[0],o=r[1],l=r[2],c=r[3],h=r[4],u=r[5],d=r[6],f=r[7],m=r[8],x=r[9],p=r[10],g=r[11],v=r[12],S=r[13],y=r[14],T=r[15];if(i[0].setComponents(c-a,f-h,g-m,T-v).normalize(),i[1].setComponents(c+a,f+h,g+m,T+v).normalize(),i[2].setComponents(c+o,f+u,g+x,T+S).normalize(),i[3].setComponents(c-o,f-u,g-x,T-S).normalize(),n)i[4].setComponents(l,d,p,y).normalize(),i[5].setComponents(c-l,f-d,g-p,T-y).normalize();else if(i[4].setComponents(c-l,f-d,g-p,T-y).normalize(),e===Fn)i[5].setComponents(c+l,f+d,g+p,T+y).normalize();else if(e===Bs)i[5].setComponents(l,d,p,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),as.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),as.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(as)}intersectsSprite(t){as.center.set(0,0,0);let e=Em.distanceTo(t.center);return as.radius=.7071067811865476+e,as.applyMatrix4(t.matrixWorld),this.intersectsSphere(as)}intersectsSphere(t){let e=this.planes,n=t.center,i=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<i)return!1;return!0}intersectsBox(t){let e=this.planes;for(let n=0;n<6;n++){let i=e[n];if(qa.x=i.normal.x>0?t.max.x:t.min.x,qa.y=i.normal.y>0?t.max.y:t.min.y,qa.z=i.normal.z>0?t.max.z:t.min.z,i.distanceToPoint(qa)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}},Zu=new ae,po=class s{constructor(){this.coordinateSystem=Fn,this._frustums=[],this._count=0}setFromArrayCamera(t){let e=t.cameras,n=this._frustums;for(let i=0;i<e.length;i++){let r=e[i];Zu.multiplyMatrices(r.projectionMatrix,r.matrixWorldInverse),n[i]===void 0&&(n[i]=new Gi),n[i].setFromProjectionMatrix(Zu,r.coordinateSystem,r.reversedDepth)}return this._count=e.length,this}getFrustum(t){return this._frustums[t]}intersectsObject(t){let e=this._frustums;for(let n=0;n<this._count;n++)if(e[n].intersectsObject(t))return!0;return!1}intersectsSprite(t){let e=this._frustums;for(let n=0;n<this._count;n++)if(e[n].intersectsSprite(t))return!0;return!1}intersectsSphere(t){let e=this._frustums;for(let n=0;n<this._count;n++)if(e[n].intersectsSphere(t))return!0;return!1}intersectsBox(t){let e=this._frustums;for(let n=0;n<this._count;n++)if(e[n].intersectsBox(t))return!0;return!1}containsPoint(t){let e=this._frustums;for(let n=0;n<this._count;n++)if(e[n].containsPoint(t))return!0;return!1}copy(t){this.coordinateSystem=t.coordinateSystem;let e=this._frustums,n=t._frustums;for(let i=0;i<t._count;i++)e[i]===void 0&&(e[i]=new Gi),e[i].copy(n[i]);return this._count=t._count,this}clone(){return new s().copy(this)}};var Ws=class extends si{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Pt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},Ju=new ae,zc=new Dr,Ya=new bi,$a=new k,Ur=class extends We{constructor(t=new Xe,e=new Ws){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0?this.morphTargetInfluences=t.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,t.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let n=this.geometry,i=this.matrixWorld,r=t.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Ya.copy(n.boundingSphere),Ya.applyMatrix4(i),Ya.radius+=r,t.ray.intersectsSphere(Ya)===!1)return;Ju.copy(i).invert(),zc.copy(t.ray).applyMatrix4(Ju);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=n.index,u=n.attributes.position;if(c!==null){let d=Math.max(0,a.start),f=Math.min(c.count,a.start+a.count);for(let m=d,x=f;m<x;m++){let p=c.getX(m);$a.fromBufferAttribute(u,p),Ku($a,p,l,i,t,e,this)}}else{let d=Math.max(0,a.start),f=Math.min(u.count,a.start+a.count);for(let m=d,x=f;m<x;m++)$a.fromBufferAttribute(u,m),Ku($a,m,l,i,t,e,this)}}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){let o=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}};function Ku(s,t,e,n,i,r,a){let o=zc.distanceSqToPoint(s);if(o<e){let l=new k;zc.closestPointToPoint(s,l),l.applyMatrix4(n);let c=i.ray.origin.distanceTo(l);if(c<i.near||c>i.far)return;r.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:t,face:null,faceIndex:null,barycoord:null,object:a})}}var Fr=class extends xn{constructor(t=[],e=fs,n,i,r,a,o,l,c,h){super(t,e,n,i,r,a,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},Xs=class extends xn{constructor(t,e,n,i,r,a,o,l,c){super(t,e,n,i,r,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}};var Si=class extends xn{constructor(t,e,n=Xn,i,r,a,o=tn,l=tn,c,h=yi,u=1){if(h!==yi&&h!==Ai)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let d={width:t,height:e,depth:u};super(d,i,r,a,o,l,h,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new Gs(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return e.compareFunction=this.compareFunction,e}},Or=class extends Si{constructor(t,e=Xn,n=fs,i,r,a=tn,o=tn,l,c=yi){let h={width:t,height:t,depth:1},u=[h,h,h,h,h,h];super(t,t,e,n,i,r,a,o,l,c),this.image=u,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}},zr=class extends xn{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}},En=class s extends Xe{constructor(t=1,e=1,n=1,i=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:i,heightSegments:r,depthSegments:a};let o=this;i=Math.floor(i),r=Math.floor(r),a=Math.floor(a);let l=[],c=[],h=[],u=[],d=0,f=0;m("z","y","x",-1,-1,n,e,t,a,r,0),m("z","y","x",1,-1,n,e,-t,a,r,1),m("x","z","y",1,1,t,n,e,i,a,2),m("x","z","y",1,-1,t,n,-e,i,a,3),m("x","y","z",1,-1,t,e,n,i,r,4),m("x","y","z",-1,-1,t,e,-n,i,r,5),this.setIndex(l),this.setAttribute("position",new ve(c,3)),this.setAttribute("normal",new ve(h,3)),this.setAttribute("uv",new ve(u,2));function m(x,p,g,v,S,y,T,E,_,w,D){let I=y/_,N=T/w,U=y/2,W=T/2,R=E/2,C=_+1,O=w+1,B=0,nt=0,q=new k;for(let et=0;et<O;et++){let st=et*N-W;for(let Et=0;Et<C;Et++){let Ut=Et*I-U;q[x]=Ut*v,q[p]=st*S,q[g]=R,c.push(q.x,q.y,q.z),q[x]=0,q[p]=0,q[g]=E>0?1:-1,h.push(q.x,q.y,q.z),u.push(Et/_),u.push(1-et/w),B+=1}}for(let et=0;et<w;et++)for(let st=0;st<_;st++){let Et=d+st+C*et,Ut=d+st+C*(et+1),Z=d+(st+1)+C*(et+1),lt=d+(st+1)+C*et;l.push(Et,Ut,lt),l.push(Ut,Z,lt),nt+=6}o.addGroup(f,nt,D),f+=nt,d+=B}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};var kr=class s extends Xe{constructor(t=1,e=32,n=0,i=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:i},e=Math.max(3,e);let r=[],a=[],o=[],l=[],c=new k,h=new Wt;a.push(0,0,0),o.push(0,0,1),l.push(.5,.5);for(let u=0,d=3;u<=e;u++,d+=3){let f=n+u/e*i;c.x=t*Math.cos(f),c.y=t*Math.sin(f),a.push(c.x,c.y,c.z),o.push(0,0,1),h.x=(a[d]/t+1)/2,h.y=(a[d+1]/t+1)/2,l.push(h.x,h.y)}for(let u=1;u<=e;u++)r.push(u,u+1,0);this.setIndex(r),this.setAttribute("position",new ve(a,3)),this.setAttribute("normal",new ve(o,3)),this.setAttribute("uv",new ve(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.radius,t.segments,t.thetaStart,t.thetaLength)}},Vi=class s extends Xe{constructor(t=1,e=1,n=1,i=32,r=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:i,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:l};let c=this;i=Math.floor(i),r=Math.floor(r);let h=[],u=[],d=[],f=[],m=0,x=[],p=n/2,g=0;v(),a===!1&&(t>0&&S(!0),e>0&&S(!1)),this.setIndex(h),this.setAttribute("position",new ve(u,3)),this.setAttribute("normal",new ve(d,3)),this.setAttribute("uv",new ve(f,2));function v(){let y=new k,T=new k,E=0,_=(e-t)/n;for(let w=0;w<=r;w++){let D=[],I=w/r,N=I*(e-t)+t;for(let U=0;U<=i;U++){let W=U/i,R=W*l+o,C=Math.sin(R),O=Math.cos(R);T.x=N*C,T.y=-I*n+p,T.z=N*O,u.push(T.x,T.y,T.z),y.set(C,_,O).normalize(),d.push(y.x,y.y,y.z),f.push(W,1-I),D.push(m++)}x.push(D)}for(let w=0;w<i;w++)for(let D=0;D<r;D++){let I=x[D][w],N=x[D+1][w],U=x[D+1][w+1],W=x[D][w+1];(t>0||D!==0)&&(h.push(I,N,W),E+=3),(e>0||D!==r-1)&&(h.push(N,U,W),E+=3)}c.addGroup(g,E,0),g+=E}function S(y){let T=m,E=new Wt,_=new k,w=0,D=y===!0?t:e,I=y===!0?1:-1;for(let U=1;U<=i;U++)u.push(0,p*I,0),d.push(0,I,0),f.push(.5,.5),m++;let N=m;for(let U=0;U<=i;U++){let R=U/i*l+o,C=Math.cos(R),O=Math.sin(R);_.x=D*O,_.y=p*I,_.z=D*C,u.push(_.x,_.y,_.z),d.push(0,I,0),E.x=C*.5+.5,E.y=O*.5*I+.5,f.push(E.x,E.y),m++}for(let U=0;U<i;U++){let W=T+U,R=N+U;y===!0?h.push(R,R+1,W):h.push(R+1,R,W),w+=3}c.addGroup(g,w,y===!0?1:2),g+=w}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},Br=class s extends Vi{constructor(t=1,e=1,n=32,i=1,r=!1,a=0,o=Math.PI*2){super(0,t,e,n,i,r,a,o),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:i,openEnded:r,thetaStart:a,thetaLength:o}}static fromJSON(t){return new s(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},Hr=class s extends Xe{constructor(t=[],e=[],n=1,i=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:i};let r=[],a=[];o(i),c(n),h(),this.setAttribute("position",new ve(r,3)),this.setAttribute("normal",new ve(r.slice(),3)),this.setAttribute("uv",new ve(a,2)),i===0?this.computeVertexNormals():this.normalizeNormals();function o(v){let S=new k,y=new k,T=new k;for(let E=0;E<e.length;E+=3)f(e[E+0],S),f(e[E+1],y),f(e[E+2],T),l(S,y,T,v)}function l(v,S,y,T){let E=T+1,_=[];for(let w=0;w<=E;w++){_[w]=[];let D=v.clone().lerp(y,w/E),I=S.clone().lerp(y,w/E),N=E-w;for(let U=0;U<=N;U++)U===0&&w===E?_[w][U]=D:_[w][U]=D.clone().lerp(I,U/N)}for(let w=0;w<E;w++)for(let D=0;D<2*(E-w)-1;D++){let I=Math.floor(D/2);D%2===0?(d(_[w][I+1]),d(_[w+1][I]),d(_[w][I])):(d(_[w][I+1]),d(_[w+1][I+1]),d(_[w+1][I]))}}function c(v){let S=new k;for(let y=0;y<r.length;y+=3)S.x=r[y+0],S.y=r[y+1],S.z=r[y+2],S.normalize().multiplyScalar(v),r[y+0]=S.x,r[y+1]=S.y,r[y+2]=S.z}function h(){let v=new k;for(let S=0;S<r.length;S+=3){v.x=r[S+0],v.y=r[S+1],v.z=r[S+2];let y=p(v)/2/Math.PI+.5,T=g(v)/Math.PI+.5;a.push(y,1-T)}m(),u()}function u(){for(let v=0;v<a.length;v+=6){let S=a[v+0],y=a[v+2],T=a[v+4],E=Math.max(S,y,T),_=Math.min(S,y,T);E>.9&&_<.1&&(S<.2&&(a[v+0]+=1),y<.2&&(a[v+2]+=1),T<.2&&(a[v+4]+=1))}}function d(v){r.push(v.x,v.y,v.z)}function f(v,S){let y=v*3;S.x=t[y+0],S.y=t[y+1],S.z=t[y+2]}function m(){let v=new k,S=new k,y=new k,T=new k,E=new Wt,_=new Wt,w=new Wt;for(let D=0,I=0;D<r.length;D+=9,I+=6){v.set(r[D+0],r[D+1],r[D+2]),S.set(r[D+3],r[D+4],r[D+5]),y.set(r[D+6],r[D+7],r[D+8]),E.set(a[I+0],a[I+1]),_.set(a[I+2],a[I+3]),w.set(a[I+4],a[I+5]),T.copy(v).add(S).add(y).divideScalar(3);let N=p(T);x(E,I+0,v,N),x(_,I+2,S,N),x(w,I+4,y,N)}}function x(v,S,y,T){T<0&&v.x===1&&(a[S]=v.x-1),y.x===0&&y.z===0&&(a[S]=T/2/Math.PI+.5)}function p(v){return Math.atan2(v.z,-v.x)}function g(v){return Math.atan2(-v.y,Math.sqrt(v.x*v.x+v.z*v.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.vertices,t.indices,t.radius,t.detail)}};var wi=class s extends Hr{constructor(t=1,e=0){let n=(1+Math.sqrt(5))/2,i=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(i,r,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new s(t.radius,t.detail)}};var Gr=class s extends Hr{constructor(t=1,e=0){let n=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],i=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(n,i,t,e),this.type="OctahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new s(t.radius,t.detail)}},Vn=class s extends Xe{constructor(t=1,e=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:i};let r=t/2,a=e/2,o=Math.floor(n),l=Math.floor(i),c=o+1,h=l+1,u=t/o,d=e/l,f=[],m=[],x=[],p=[];for(let g=0;g<h;g++){let v=g*d-a;for(let S=0;S<c;S++){let y=S*u-r;m.push(y,-v,0),x.push(0,0,1),p.push(S/o),p.push(1-g/l)}}for(let g=0;g<l;g++)for(let v=0;v<o;v++){let S=v+c*g,y=v+c*(g+1),T=v+1+c*(g+1),E=v+1+c*g;f.push(S,y,E),f.push(y,T,E)}this.setIndex(f),this.setAttribute("position",new ve(m,3)),this.setAttribute("normal",new ve(x,3)),this.setAttribute("uv",new ve(p,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.width,t.height,t.widthSegments,t.heightSegments)}};var os=class s extends Xe{constructor(t=1,e=32,n=16,i=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:i,phiLength:r,thetaStart:a,thetaLength:o},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));let l=Math.min(a+o,Math.PI),c=0,h=[],u=new k,d=new k,f=[],m=[],x=[],p=[];for(let g=0;g<=n;g++){let v=[],S=g/n,y=a+S*o,T=t*Math.cos(y),E=Math.sqrt(t*t-T*T),_=0;g===0&&a===0?_=.5/e:g===n&&l===Math.PI&&(_=-.5/e);for(let w=0;w<=e;w++){let D=w/e,I=i+D*r;u.x=-E*Math.cos(I),u.y=T,u.z=E*Math.sin(I),m.push(u.x,u.y,u.z),d.copy(u).normalize(),x.push(d.x,d.y,d.z),p.push(D+_,1-S),v.push(c++)}h.push(v)}for(let g=0;g<n;g++)for(let v=0;v<e;v++){let S=h[g][v+1],y=h[g][v],T=h[g+1][v],E=h[g+1][v+1];(g!==0||a>0)&&f.push(S,y,E),(g!==n-1||l<Math.PI)&&f.push(y,T,E)}this.setIndex(f),this.setAttribute("position",new ve(m,3)),this.setAttribute("normal",new ve(x,3)),this.setAttribute("uv",new ve(p,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}};function ms(s){let t={};for(let e in s){t[e]={};for(let n in s[e]){let i=s[e][n];if(ju(i))i.isRenderTargetTexture?(Nt("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=i.clone();else if(Array.isArray(i))if(ju(i[0])){let r=[];for(let a=0,o=i.length;a<o;a++)r[a]=i[a].clone();t[e][n]=r}else t[e][n]=i.slice();else t[e][n]=i}}return t}function fn(s){let t={};for(let e=0;e<s.length;e++){let n=ms(s[e]);for(let i in n)t[i]=n[i]}return t}function ju(s){return s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)}function Am(s){let t=[];for(let e=0;e<s.length;e++)t.push(s[e].clone());return t}function fh(s){let t=s.getRenderTarget();return t===null?s.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:ne.workingColorSpace}var Wd={clone:ms,merge:fn},Rm=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Cm=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,An=class extends si{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Rm,this.fragmentShader=Cm,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=ms(t.uniforms),this.uniformsGroups=Am(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let i in this.uniforms){let a=this.uniforms[i].value;a&&a.isTexture?e.uniforms[i]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[i]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[i]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[i]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[i]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[i]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[i]={type:"m4",value:a.toArray()}:e.uniforms[i]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let n={};for(let i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}fromJSON(t,e){if(super.fromJSON(t,e),t.uniforms!==void 0)for(let n in t.uniforms){let i=t.uniforms[n];switch(this.uniforms[n]={},i.type){case"t":this.uniforms[n].value=e[i.value]||null;break;case"c":this.uniforms[n].value=new Pt().setHex(i.value);break;case"v2":this.uniforms[n].value=new Wt().fromArray(i.value);break;case"v3":this.uniforms[n].value=new k().fromArray(i.value);break;case"v4":this.uniforms[n].value=new Se().fromArray(i.value);break;case"m3":this.uniforms[n].value=new Ot().fromArray(i.value);break;case"m4":this.uniforms[n].value=new ae().fromArray(i.value);break;default:this.uniforms[n].value=i.value}}if(t.defines!==void 0&&(this.defines=t.defines),t.vertexShader!==void 0&&(this.vertexShader=t.vertexShader),t.fragmentShader!==void 0&&(this.fragmentShader=t.fragmentShader),t.glslVersion!==void 0&&(this.glslVersion=t.glslVersion),t.extensions!==void 0)for(let n in t.extensions)this.extensions[n]=t.extensions[n];return t.lights!==void 0&&(this.lights=t.lights),t.clipping!==void 0&&(this.clipping=t.clipping),this}},mo=class extends An{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},Wn=class extends si{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Pt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Pt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ia,this.normalScale=new Wt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new un,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}};var Vr=class extends si{constructor(t){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new Pt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Pt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ia,this.normalScale=new Wt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new un,this.combine=Io,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.envMapIntensity=t.envMapIntensity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}},go=class extends si{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Cd,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},xo=class extends si{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}};function Ns(s,t){return!s||s.constructor===t?s:typeof t.BYTES_PER_ELEMENT=="number"?new t(s):Array.prototype.slice.call(s)}function Za(s){return s!==void 0&&s.inTangents!==void 0&&s.outTangents!==void 0}var Wi=class{constructor(t,e,n,i){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,n=this._cachedIndex,i=e[n],r=e[n-1];n:{t:{let a;e:{i:if(!(t<i)){for(let o=n+2;;){if(i===void 0){if(t<r)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(r=i,i=e[++n],t<i)break t}a=e.length;break e}if(!(t>=r)){let o=e[1];t<o&&(n=2,r=o);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(i=r,r=e[--n-1],t>=r)break t}a=n,n=0;break e}break n}for(;n<a;){let o=n+a>>>1;t<e[o]?a=o:n=o+1}if(i=e[n],r=e[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,i)}return this.interpolate_(n,r,t,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=t*i;for(let a=0;a!==i;++a)e[a]=n[r+a];return e}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},_o=class extends Wi{constructor(t,e,n,i){super(t,e,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Uc,endingEnd:Uc}}intervalChanged_(t,e,n){let i=this.parameterPositions,r=t-2,a=t+1,o=i[r],l=i[a];if(o===void 0)switch(this.getSettings_().endingStart){case Fc:r=t,o=2*e-n;break;case Oc:r=i.length-2,o=e+i[r]-i[r+1];break;default:r=t,o=n}if(l===void 0)switch(this.getSettings_().endingEnd){case Fc:a=t,l=2*n-e;break;case Oc:a=1,l=n+i[1]-i[0];break;default:a=t-1,l=e}let c=(n-e)*.5,h=this.valueSize;this._weightPrev=c/(e-o),this._weightNext=c/(l-n),this._offsetPrev=r*h,this._offsetNext=a*h}interpolate_(t,e,n,i){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,h=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,f=this._weightNext,m=(n-e)/(i-e),x=m*m,p=x*m,g=-d*p+2*d*x-d*m,v=(1+d)*p+(-1.5-2*d)*x+(-.5+d)*m+1,S=(-1-f)*p+(1.5+f)*x+.5*m,y=f*p-f*x;for(let T=0;T!==o;++T)r[T]=g*a[h+T]+v*a[c+T]+S*a[l+T]+y*a[u+T];return r}},vo=class extends Wi{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t,e,n,i){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,h=(n-e)/(i-e),u=1-h;for(let d=0;d!==o;++d)r[d]=a[c+d]*u+a[l+d]*h;return r}},yo=class extends Wi{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t){return this.copySampleValue_(t-1)}},Mo=class extends Wi{interpolate_(t,e,n,i){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,h=this.inTangents,u=this.outTangents;if(!h||!u){let m=(n-e)/(i-e),x=1-m;for(let p=0;p!==o;++p)r[p]=a[c+p]*x+a[l+p]*m;return r}let d=o*2,f=t-1;for(let m=0;m!==o;++m){let x=a[c+m],p=a[l+m],g=f*d+m*2,v=u[g],S=u[g+1],y=t*d+m*2,T=h[y],E=h[y+1],_=Pm(n,e,v,T,i);r[m]=Xd(_,x,S,E,p)}return r}};function Xd(s,t,e,n,i){let r=1-s;return r*r*r*t+3*r*r*s*e+3*r*s*s*n+s*s*s*i}function Im(s,t,e,n,i){let r=1-s;return 3*r*r*(e-t)+6*r*s*(n-e)+3*s*s*(i-n)}function Pm(s,t,e,n,i){let r=(s-t)/(i-t);for(let a=0;a<8;a++){let o=Xd(r,t,e,n,i)-s;if(Math.abs(o)<1e-10)break;let l=Im(r,t,e,n,i);if(Math.abs(l)<1e-10)break;r=Math.max(0,Math.min(1,r-o/l))}return r}var Rn=class{constructor(t,e,n,i){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=Ns(e,this.TimeBufferType),this.values=Ns(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:Ns(t.times,Array),values:Ns(t.values,Array)};let i=t.getInterpolation();i!==t.DefaultInterpolation&&(n.interpolation=i),Za(t.settings)&&(n.settings={inTangents:Ns(t.settings.inTangents,Array),outTangents:Ns(t.settings.outTangents,Array)})}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new yo(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new vo(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new _o(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodBezier(t){let e=new Mo(this.times,this.values,this.getValueSize(),t);return this.settings&&(e.inTangents=this.settings.inTangents,e.outTangents=this.settings.outTangents),e}setInterpolation(t){let e;switch(t){case wr:e=this.InterpolantFactoryMethodDiscrete;break;case lo:e=this.InterpolantFactoryMethodLinear;break;case ja:e=this.InterpolantFactoryMethodSmooth;break;case Nc:e=this.InterpolantFactoryMethodBezier;break}if(e===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return Nt("KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return wr;case this.InterpolantFactoryMethodLinear:return lo;case this.InterpolantFactoryMethodSmooth:return ja;case this.InterpolantFactoryMethodBezier:return Nc}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let n=0,i=e.length;n!==i;++n)e[n]+=t;Za(this.settings)&&(Qu(this.settings.inTangents,t),Qu(this.settings.outTangents,t))}return this}scale(t){if(t!==1){let e=this.times;for(let n=0,i=e.length;n!==i;++n)e[n]*=t;Za(this.settings)&&(td(this.settings.inTangents,t),td(this.settings.outTangents,t))}return this}trim(t,e){let n=this.times,i=n.length,r=0,a=i-1;for(;r!==i&&n[r]<t;)++r;for(;a!==-1&&n[a]>e;)--a;if(++a,r!==0||a!==i){r>=a&&(a=Math.max(a,1),r=a-1);let o=this.getValueSize();this.times=n.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(Ft("KeyframeTrack: Invalid value size in track.",this),t=!1);let n=this.times,i=this.values,r=n.length;r===0&&(Ft("KeyframeTrack: Track is empty.",this),t=!1);let a=null;for(let o=0;o!==r;o++){let l=n[o];if(typeof l=="number"&&isNaN(l)){Ft("KeyframeTrack: Time is not a valid number.",this,o,l),t=!1;break}if(a!==null&&a>l){Ft("KeyframeTrack: Out of order keys.",this,o,l,a),t=!1;break}a=l}if(i!==void 0&&sm(i))for(let o=0,l=i.length;o!==l;++o){let c=i[o];if(isNaN(c)){Ft("KeyframeTrack: Value is not a valid number.",this,o,c),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),i=this.getInterpolation()===ja,r=t.length-1,a=1;for(let o=1;o<r;++o){let l=!1,c=t[o],h=t[o+1];if(c!==h&&(o!==1||c!==t[0]))if(i)l=!0;else{let u=o*n,d=u-n,f=u+n;for(let m=0;m!==n;++m){let x=e[u+m];if(x!==e[d+m]||x!==e[f+m]){l=!0;break}}}if(l){if(o!==a){t[a]=t[o];let u=o*n,d=a*n;for(let f=0;f!==n;++f)e[d+f]=e[u+f]}++a}}if(r>0){t[a]=t[r];for(let o=r*n,l=a*n,c=0;c!==n;++c)e[l+c]=e[o+c];++a}return a!==t.length?(this.times=t.slice(0,a),this.values=e.slice(0,a*n)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),n=this.constructor,i=new n(this.name,t,e);return i.createInterpolant=this.createInterpolant,Za(this.settings)&&(i.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),i}};function Qu(s,t){for(let e=0,n=s.length;e!==n;e+=2)s[e]+=t}function td(s,t){for(let e=0,n=s.length;e!==n;e+=2)s[e]*=t}Rn.prototype.ValueTypeName="";Rn.prototype.TimeBufferType=Float32Array;Rn.prototype.ValueBufferType=Float32Array;Rn.prototype.DefaultInterpolation=lo;var Xi=class extends Rn{constructor(t,e,n){super(t,e,n)}};Xi.prototype.ValueTypeName="bool";Xi.prototype.ValueBufferType=Array;Xi.prototype.DefaultInterpolation=wr;Xi.prototype.InterpolantFactoryMethodLinear=void 0;Xi.prototype.InterpolantFactoryMethodSmooth=void 0;var bo=class extends Rn{constructor(t,e,n,i){super(t,e,n,i)}};bo.prototype.ValueTypeName="color";var So=class extends Rn{constructor(t,e,n,i){super(t,e,n,i)}};So.prototype.ValueTypeName="number";var wo=class extends Wi{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t,e,n,i){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=(n-e)/(i-e),c=t*o;for(let h=c+o;c!==h;c+=4)hn.slerpFlat(r,0,a,c-o,a,c,l);return r}},Wr=class extends Rn{constructor(t,e,n,i){super(t,e,n,i)}InterpolantFactoryMethodLinear(t){return new wo(this.times,this.values,this.getValueSize(),t)}};Wr.prototype.ValueTypeName="quaternion";Wr.prototype.InterpolantFactoryMethodSmooth=void 0;var qi=class extends Rn{constructor(t,e,n){super(t,e,n)}};qi.prototype.ValueTypeName="string";qi.prototype.ValueBufferType=Array;qi.prototype.DefaultInterpolation=wr;qi.prototype.InterpolantFactoryMethodLinear=void 0;qi.prototype.InterpolantFactoryMethodSmooth=void 0;var To=class extends Rn{constructor(t,e,n,i){super(t,e,n,i)}};To.prototype.ValueTypeName="vector";var Eo=class{constructor(t,e,n){let i=this,r=!1,a=0,o=0,l,c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this._abortController=null,this.itemStart=function(h){o++,r===!1&&i.onStart!==void 0&&i.onStart(h,a,o),r=!0},this.itemEnd=function(h){a++,i.onProgress!==void 0&&i.onProgress(h,a,o),a===o&&(r=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(h){i.onError!==void 0&&i.onError(h)},this.resolveURL=function(h){return h=h.normalize("NFC"),l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,u){return c.push(h,u),this},this.removeHandler=function(h){let u=c.indexOf(h);return u!==-1&&c.splice(u,2),this},this.getHandler=function(h){for(let u=0,d=c.length;u<d;u+=2){let f=c[u],m=c[u+1];if(f.global&&(f.lastIndex=0),f.test(h))return m}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},qd=new Eo,Ao=class{constructor(t){this.manager=t!==void 0?t:qd,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},this.priority="auto",this.cache="default",typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(t,e){let n=this;return new Promise(function(i,r){n.load(t,i,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}setPriority(t){return this.priority=t,this}setCache(t){return this.cache=t,this}abort(){return this}};Ao.DEFAULT_MATERIAL_NAME="__DEFAULT";var qs=class extends We{static registerNode(t){this.prototype._lightNode=t}constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Pt(t),this.intensity=e}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,e}},ls=class extends qs{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(We.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Pt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}toJSON(t){let e=super.toJSON(t);return e.object.groundColor=this.groundColor.getHex(),e}},Dc=new ae,ed=new k,nd=new k,Xr=class{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Wt(512,512),this.mapType=bn,this.map=null,this.mapPass=null,this.matrix=new ae,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Gi,this._frameExtents=new Wt(1,1),this._viewportCount=1,this._viewports=[new Se(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera;ed.setFromMatrixPosition(t.matrixWorld),e.position.copy(ed),nd.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(nd),e.updateMatrixWorld(),this._updateMatrix(e,this.matrix,this._frustum)}_updateMatrix(t,e,n,i){Dc.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),n.setFromProjectionMatrix(Dc,t.coordinateSystem,t.reversedDepth);let r=this._frameExtents,a=i?i.z/r.x:1,o=i?i.w/r.y:1,l=i?i.x/r.x:0,c=i?i.y/r.y:0;t.coordinateSystem===Bs||t.reversedDepth?e.set(.5*a,0,0,.5*a+l,0,.5*o,0,.5*o+c,0,0,1,0,0,0,0,1):e.set(.5*a,0,0,.5*a+l,0,.5*o,0,.5*o+c,0,0,.5,.5,0,0,0,1),e.multiply(Dc)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this.mapType=t.mapType,this.biasNode=t.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return t.intensity=this.intensity,t.bias=this.bias,t.normalBias=this.normalBias,t.radius=this.radius,t.blurSamples=this.blurSamples,t.mapSize=this.mapSize.toArray(),t.mapType=this.mapType,t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}},Ja=new k,Ka=new hn,ti=new k,qr=class extends We{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ae,this.projectionMatrix=new ae,this.projectionMatrixInverse=new ae,this.coordinateSystem=Fn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(Ja,Ka,ti),ti.x===1&&ti.y===1&&ti.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Ja,Ka,ti.set(1,1,1)).invert()}updateWorldMatrix(t,e,n=!1){super.updateWorldMatrix(t,e,n),this.matrixWorld.decompose(Ja,Ka,ti),ti.x===1&&ti.y===1&&ti.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Ja,Ka,ti.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},Bi=new k,id=new Wt,sd=new Wt,Qe=class extends qr{constructor(t=50,e=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=co*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(dc*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return co*2*Math.atan(Math.tan(dc*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){Bi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Bi.x,Bi.y).multiplyScalar(-t/Bi.z),Bi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Bi.x,Bi.y).multiplyScalar(-t/Bi.z)}getViewSize(t,e){return this.getViewBounds(t,id,sd),e.subVectors(sd,id)}setViewOffset(t,e,n,i,r,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(dc*.5*this.fov)/this.zoom,n=2*e,i=this.aspect*n,r=-.5*i,a=this.view;if(this.view!==null&&this.view.enabled){let l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*i/l,e-=a.offsetY*n/c,i*=a.width/l,n*=a.height/c}let o=this.filmOffset;o!==0&&(r+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+i,e,e-n,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}};var kc=class extends Xr{constructor(){super(new Qe(90,1,.5,500)),this.isPointLightShadow=!0}},cs=class extends qs{constructor(t,e,n=0,i=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new kc}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}toJSON(t){let e=super.toJSON(t);return e.object.distance=this.distance,e.object.decay=this.decay,e.object.shadow=this.shadow.toJSON(),e}},Yr=class extends qr{constructor(t=-1,e=1,n=1,i=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=i,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,i,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2,r=n-t,a=n+t,o=i+e,l=i-e;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},Bc=class extends Xr{constructor(){super(new Yr(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},hs=class extends qs{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(We.DEFAULT_UP),this.updateMatrix(),this.target=new We,this.shadow=new Bc}dispose(){super.dispose(),this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}toJSON(t){let e=super.toJSON(t);return e.object.shadow=this.shadow.toJSON(),e.object.target=this.target.uuid,e}};var Us=-90,Fs=1,Ys=class extends We{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let i=new Qe(Us,Fs,t,e);i.layers=this.layers,this.add(i);let r=new Qe(Us,Fs,t,e);r.layers=this.layers,this.add(r);let a=new Qe(Us,Fs,t,e);a.layers=this.layers,this.add(a);let o=new Qe(Us,Fs,t,e);o.layers=this.layers,this.add(o);let l=new Qe(Us,Fs,t,e);l.layers=this.layers,this.add(l);let c=new Qe(Us,Fs,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[n,i,r,a,o,l]=e;for(let c of e)this.remove(c);if(t===Fn)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===Bs)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,a,o,l,c,h]=this.children,u=t.getRenderTarget(),d=t.getActiveCubeFace(),f=t.getActiveMipmapLevel(),m=t.xr.enabled;t.xr.enabled=!1;let x=n.texture.mipmapsAutoUpdate;n.texture.mipmapsAutoUpdate=!1;let p=!1;t.isWebGLRenderer===!0?p=t.state.buffers.depth.getReversed():p=t.reversedDepthBuffer,t.setRenderTarget(n,0,i),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,r),t.setRenderTarget(n,1,i),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,a),t.setRenderTarget(n,2,i),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,o),t.setRenderTarget(n,3,i),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,l),t.setRenderTarget(n,4,i),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,c),n.texture.mipmapsAutoUpdate=x,t.setRenderTarget(n,5,i),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,h),t.setRenderTarget(u,d,f),t.xr.enabled=m,n.texture.needsPMREMUpdate=!0}},Ro=class extends Qe{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t,this.perCameraFrustumCulled=!1}};var ph="\\[\\]\\.:\\/",Lm=new RegExp("["+ph+"]","g"),mh="[^"+ph+"]",Dm="[^"+ph.replace("\\.","")+"]",Nm=/((?:WC+[\/:])*)/.source.replace("WC",mh),Um=/(WCOD+)?/.source.replace("WCOD",Dm),Fm=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",mh),Om=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",mh),zm=new RegExp("^"+Nm+Um+Fm+Om+"$"),km=["material","materials","bones","map"],Hc=class{constructor(t,e,n){let i=n||_e.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,i)}getValue(t,e){this.bind();let n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(t,e)}setValue(t,e){let n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,r=n.length;i!==r;++i)n[i].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}},_e=class s{constructor(t,e,n){this.path=e,this.parsedPath=n||s.parseTrackName(e),this.node=s.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new s.Composite(t,e,n):new s(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(Lm,"")}static parseTrackName(t){let e=zm.exec(t);if(e===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+t);let n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){let r=n.nodeName.substring(i+1);km.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){let n=function(r){for(let a=0;a<r.length;a++){let o=r[a];if(o.name===e||o.uuid===e)return o;let l=n(o.children);if(l)return l}return null},i=n(t.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)t[e++]=n[i]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,n=e.objectName,i=e.propertyName,r=e.propertyIndex;if(t||(t=s.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){Nt("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=e.objectIndex;switch(n){case"materials":if(!t.material){Ft("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){Ft("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){Ft("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let h=0;h<t.length;h++)if(t[h].name===c){c=h;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){Ft("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){Ft("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){Ft("PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(c!==void 0){if(t[c]===void 0){Ft("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[c]}}let a=t[i];if(a===void 0){let c=e.nodeName;Ft("PropertyBinding: Trying to update property for track: "+c+"."+i+" but it wasn't found.",t);return}let o=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?o=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(i==="morphTargetInfluences"){if(!t.geometry){Ft("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){Ft("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=i;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};_e.Composite=Hc;_e.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};_e.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};_e.prototype.GetterByBindingType=[_e.prototype._getValue_direct,_e.prototype._getValue_array,_e.prototype._getValue_arrayElement,_e.prototype._getValue_toArray];_e.prototype.SetterByBindingTypeAndVersioning=[[_e.prototype._setValue_direct,_e.prototype._setValue_direct_setNeedsUpdate,_e.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[_e.prototype._setValue_array,_e.prototype._setValue_array_setNeedsUpdate,_e.prototype._setValue_array_setMatrixWorldNeedsUpdate],[_e.prototype._setValue_arrayElement,_e.prototype._setValue_arrayElement_setNeedsUpdate,_e.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[_e.prototype._setValue_fromArray,_e.prototype._setValue_fromArray_setNeedsUpdate,_e.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var xy=new Float32Array(1);var Mh=class Mh{constructor(t,e,n,i){this.elements=[1,0,0,1],t!==void 0&&this.set(t,e,n,i)}identity(){return this.set(1,0,0,1),this}fromArray(t,e=0){for(let n=0;n<4;n++)this.elements[n]=t[n+e];return this}set(t,e,n,i){let r=this.elements;return r[0]=t,r[2]=e,r[1]=n,r[3]=i,this}};Mh.prototype.isMatrix2=!0;var Gc=Mh;function gh(s,t,e,n){let i=Bm(n);switch(e){case rh:return s*t;case Oo:return s*t/i.components*i.byteLength;case zo:return s*t/i.components*i.byteLength;case $i:return s*t*2/i.components*i.byteLength;case ko:return s*t*2/i.components*i.byteLength;case ah:return s*t*3/i.components*i.byteLength;case Yn:return s*t*4/i.components*i.byteLength;case Bo:return s*t*4/i.components*i.byteLength;case Kr:case jr:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*8;case Qr:case ta:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case Go:case Wo:return Math.max(s,16)*Math.max(t,8)/4;case Ho:case Vo:return Math.max(s,8)*Math.max(t,8)/2;case Xo:case qo:case $o:case Zo:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*8;case Yo:case ea:case Jo:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case Ko:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case jo:return Math.floor((s+4)/5)*Math.floor((t+3)/4)*16;case Qo:return Math.floor((s+4)/5)*Math.floor((t+4)/5)*16;case tl:return Math.floor((s+5)/6)*Math.floor((t+4)/5)*16;case el:return Math.floor((s+5)/6)*Math.floor((t+5)/6)*16;case nl:return Math.floor((s+7)/8)*Math.floor((t+4)/5)*16;case il:return Math.floor((s+7)/8)*Math.floor((t+5)/6)*16;case sl:return Math.floor((s+7)/8)*Math.floor((t+7)/8)*16;case rl:return Math.floor((s+9)/10)*Math.floor((t+4)/5)*16;case al:return Math.floor((s+9)/10)*Math.floor((t+5)/6)*16;case ol:return Math.floor((s+9)/10)*Math.floor((t+7)/8)*16;case ll:return Math.floor((s+9)/10)*Math.floor((t+9)/10)*16;case cl:return Math.floor((s+11)/12)*Math.floor((t+9)/10)*16;case hl:return Math.floor((s+11)/12)*Math.floor((t+11)/12)*16;case ul:case dl:case fl:return Math.ceil(s/4)*Math.ceil(t/4)*16;case pl:case ml:return Math.ceil(s/4)*Math.ceil(t/4)*8;case na:case gl:return Math.ceil(s/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function Bm(s){switch(s){case bn:case eh:return{byteLength:1,components:1};case Js:case nh:case qn:return{byteLength:2,components:1};case Uo:case Fo:return{byteLength:2,components:4};case Xn:case No:case On:return{byteLength:4,components:1};case ih:case sh:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${s}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"187"}}));typeof window<"u"&&(window.__THREE__?Nt("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="187");function mf(){let s=null,t=!1,e=null,n=null;function i(r,a){n=s.requestAnimationFrame(i),e(r,a)}return{start:function(){t!==!0&&e!==null&&s!==null&&(n=s.requestAnimationFrame(i),t=!0)},stop:function(){s!==null&&s.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){s=r}}}function $m(s){let t=new WeakMap;function e(o,l){let c=o.array,h=o.usage,u=c.byteLength,d=s.createBuffer();s.bindBuffer(l,d),s.bufferData(l,c,h),o.onUploadCallback();let f;if(c instanceof Float32Array)f=s.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)f=s.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?f=s.HALF_FLOAT:f=s.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=s.SHORT;else if(c instanceof Uint32Array)f=s.UNSIGNED_INT;else if(c instanceof Int32Array)f=s.INT;else if(c instanceof Int8Array)f=s.BYTE;else if(c instanceof Uint8Array)f=s.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:u}}function n(o,l,c){let h=l.array,u=l.updateRanges;if(s.bindBuffer(c,o),u.length===0)s.bufferSubData(c,0,h);else{u.sort((f,m)=>f.start-m.start);let d=0;for(let f=1;f<u.length;f++){let m=u[d],x=u[f];x.start<=m.start+m.count+1?m.count=Math.max(m.count,x.start+x.count-m.start):(++d,u[d]=x)}u.length=d+1;for(let f=0,m=u.length;f<m;f++){let x=u[f];s.bufferSubData(c,x.start*h.BYTES_PER_ELEMENT,h,x.start,x.count)}l.clearUpdateRanges()}l.onUploadCallback()}function i(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);let l=t.get(o);l&&(s.deleteBuffer(l.buffer),t.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let h=t.get(o);(!h||h.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let c=t.get(o);if(c===void 0)t.set(o,e(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,l),c.version=o.version}}return{get:i,remove:r,update:a}}var Zm=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Jm=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Km=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,jm=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Qm=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,t0=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,e0=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,n0=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,i0=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,s0=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,r0=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,a0=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,o0=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,l0=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,c0=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,h0=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,u0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,d0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,f0=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,p0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,m0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,g0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,x0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,_0=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,v0=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
#endif`,y0=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,M0=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,b0=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,S0=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,w0="gl_FragColor = linearToOutputTexel( gl_FragColor );",T0=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,E0=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,A0=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	uniform samplerCube envMap;
	#ifdef ENVMAP_TYPE_PMREM
		float roughnessToMip( const in float roughness ) {
			float r = clamp( roughness, 0.0, 1.0 );
			return ENVMAP_MAX_LOD * r * ( 2.0 - r );
		}
	#endif
#endif`,R0=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,C0=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,I0=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,P0=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,L0=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,D0=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,N0=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,U0=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,F0=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,O0=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,z0=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,k0=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_SUN_LIGHTS > 0
	struct SunLight {
		vec3 direction;
		vec3 color;
	};
	uniform SunLight sunLights[ NUM_SUN_LIGHTS ];
	void getSunLightInfo( const in SunLight sunLight, out IncidentLight light ) {
		light.color = sunLight.color;
		light.direction = sunLight.direction;
		light.visible = true;
	}
#endif
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,B0=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_PMREM
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureLod( envMap, envMapRotation * worldNormal, ENVMAP_MAX_LOD );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_PMREM
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureLod( envMap, envMapRotation * reflectVec, roughnessToMip( roughness ) );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_RETROREFLECTION
		vec3 getIBLRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
			#ifdef ENVMAP_TYPE_PMREM
				vec3 retroVec = normalize( mix( viewDir, normal, pow4( roughness ) ) );
				retroVec = transformDirectionByInverseViewMatrix( retroVec, viewMatrix );
				vec4 envMapColor = textureLod( envMap, envMapRotation * retroVec, roughnessToMip( roughness ) );
				return envMapColor.rgb * envMapIntensity;
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_PMREM
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
		#ifdef USE_RETROREFLECTION
			vec3 getIBLAnisotropyRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
				#ifdef ENVMAP_TYPE_PMREM
					vec3 bentNormal = cross( bitangent, viewDir );
					bentNormal = normalize( cross( bentNormal, bitangent ) );
					bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
					return getIBLRetroRadiance( viewDir, bentNormal, roughness );
				#else
					return vec3( 0.0 );
				#endif
			}
		#endif
	#endif
#endif`,H0=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,G0=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,V0=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,W0=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,X0=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.045 );
material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef USE_DIFFUSE_ROUGHNESS
	float diffuseRoughnessFactor = diffuseRoughness;
	#ifdef USE_DIFFUSE_ROUGHNESSMAP
		diffuseRoughnessFactor *= texture2D( diffuseRoughnessMap, vDiffuseRoughnessMapUv ).r;
	#endif
	material.diffuseRoughness = saturate( diffuseRoughnessFactor );
#endif
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.045 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_RETROREFLECTION
	material.retroreflectivity = retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,q0=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	vec2 dfg;
	vec3 multiScatteringCompensation;
	#ifdef USE_DIFFUSE_ROUGHNESS
		float diffuseRoughness;
	#endif
	#ifdef USE_RETROREFLECTION
		float retroreflectivity;
	#endif
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0Dielectric;
		vec3 iridescenceF0Metallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
#ifdef USE_DIFFUSE_ROUGHNESS
	const float EON_EPSILON = 1e-7;
	float FON_DirectionalAlbedo( const in float mu, const in float roughness, const in float A ) {
		float muComp = 1.0 - mu;
		float gOverPi = muComp * ( 0.0571085289 + muComp * ( 0.491881867 + muComp * ( - 0.332181442 + muComp * 0.0714429953 ) ) );
		return A * ( 1.0 + roughness * gOverPi );
	}
	vec3 BRDF_EON( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 diffuseColor, const in float roughness ) {
		vec3 rho = saturate( diffuseColor );
		if ( roughness <= EON_EPSILON ) return BRDF_Lambert( rho );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float s = dot( lightDir, viewDir ) - dotNL * dotNV;
		float sOverT = ( s > 0.0 ) ? s / max( max( dotNL, dotNV ), EON_EPSILON ) : s;
		float A = 1.0 / ( 1.0 + ( 0.5 - 2.0 / ( 3.0 * PI ) ) * roughness );
		vec3 singleScatter = rho * RECIPROCAL_PI * A * ( 1.0 + roughness * sOverT );
		float averageAlbedo = A * ( 1.0 + ( 2.0 / 3.0 - 28.0 / ( 15.0 * PI ) ) * roughness );
		float albedoV = FON_DirectionalAlbedo( dotNV, roughness, A );
		float albedoL = FON_DirectionalAlbedo( dotNL, roughness, A );
		vec3 rhoMultiScatter = rho * rho * averageAlbedo / max( vec3( EON_EPSILON ), vec3( 1.0 ) - rho * ( 1.0 - averageAlbedo ) );
		vec3 multiScatter = rhoMultiScatter * RECIPROCAL_PI
			* max( EON_EPSILON, 1.0 - albedoV )
			* max( EON_EPSILON, 1.0 - albedoL )
			/ max( EON_EPSILON, 1.0 - averageAlbedo );
		return singleScatter + multiScatter;
	}
	vec3 EON_DirectionalAlbedo( const in vec3 diffuseColor, const in float roughness, const in float dotNV ) {
		vec3 rho = saturate( diffuseColor );
		if ( roughness <= EON_EPSILON ) return rho;
		float A = 1.0 / ( 1.0 + ( 0.5 - 2.0 / ( 3.0 * PI ) ) * roughness );
		float directionalAlbedo = FON_DirectionalAlbedo( dotNV, roughness, A );
		float averageAlbedo = A * ( 1.0 + ( 2.0 / 3.0 - 28.0 / ( 15.0 * PI ) ) * roughness );
		vec3 rhoMultiScatter = rho * rho * averageAlbedo / max( vec3( EON_EPSILON ), vec3( 1.0 ) - rho * ( 1.0 - averageAlbedo ) );
		return rho * directionalAlbedo + rhoMultiScatter * ( 1.0 - directionalAlbedo );
	}
#endif
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = max( material.clearcoatRoughness, 0.045 );
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = max( material.roughness, 0.045 );
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float alphaT = max( material.alphaT, alpha );
		float V = V_GGX_SmithCorrelated_Anisotropic( alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec2 fab, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec2 fab, const in vec3 specularColor, const in float specularF90, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	vec3 specularBRDF = BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	#ifdef USE_RETROREFLECTION
		vec3 retroViewDir = reflect( - geometryViewDir, geometryNormal );
		vec3 retroSpecularBRDF = BRDF_GGX( directLight.direction, retroViewDir, geometryNormal, material );
		specularBRDF = mix( specularBRDF, retroSpecularBRDF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directSpecular += irradiance * specularBRDF * material.multiScatteringCompensation;
	vec3 halfDir = normalize( directLight.direction + geometryViewDir );
	float dotVH = saturate( dot( geometryViewDir, halfDir ) );
	vec3 F = F_Schlick( material.specularColor, material.specularF90, dotVH );
	#ifdef USE_RETROREFLECTION
		vec3 retroHalfDir = normalize( directLight.direction + retroViewDir );
		float dotRetroVH = saturate( dot( retroViewDir, retroHalfDir ) );
		vec3 retroF = F_Schlick( material.specularColor, material.specularF90, dotRetroVH );
		F = mix( F, retroF, saturate( material.retroreflectivity ) );
	#endif
	#ifdef USE_DIFFUSE_ROUGHNESS
		vec3 diffuseBRDF = BRDF_EON( directLight.direction, geometryViewDir, geometryNormal, material.diffuseColor, material.diffuseRoughness ) * ( 1.0 - material.metalness );
	#else
		vec3 diffuseBRDF = BRDF_Lambert( material.diffuseContribution );
	#endif
	reflectedLight.directDiffuse += irradiance * diffuseBRDF * ( 1.0 - F );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScattering, multiScattering );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScattering, multiScattering );
	#endif
	#ifdef USE_DIFFUSE_ROUGHNESS
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		vec3 diffuseAlbedo = EON_DirectionalAlbedo( material.diffuseColor, material.diffuseRoughness, dotNV ) * ( 1.0 - material.metalness );
		vec3 diffuse = irradiance * RECIPROCAL_PI * diffuseAlbedo * ( 1.0 - singleScattering - multiScattering );
	#else
		vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - singleScattering - multiScattering );
	#endif
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		sheenSpecularIndirect += irradiance * material.sheenColor * sheenAlbedo * RECIPROCAL_PI;
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( material.dfg, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceF0Metallic, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( material.dfg, material.diffuseColor, material.specularF90, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	#ifdef USE_DIFFUSE_ROUGHNESS
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		vec3 diffuse = EON_DirectionalAlbedo( material.diffuseColor, material.diffuseRoughness, dotNV ) * ( 1.0 - material.metalness ) * ( 1.0 - totalScatteringDielectric );
	#else
		vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	#endif
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Y0=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		vec3 iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		vec3 iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( iridescenceFresnelDielectric, iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0Dielectric = Schlick_to_F0( iridescenceFresnelDielectric, 1.0, dotNVi );
		material.iridescenceF0Metallic = Schlick_to_F0( iridescenceFresnelMetallic, 1.0, dotNVi );
	}
#endif
#ifdef STANDARD
	float dotNVms = saturate( dot( geometryNormal, geometryViewDir ) );
	material.dfg = texture2D( dfgLUT, vec2( material.roughness, dotNVms ) ).rg;
	#if ( NUM_SUN_LIGHTS > 0 || NUM_DIR_LIGHTS > 0 || NUM_POINT_LIGHTS > 0 || NUM_SPOT_LIGHTS > 0 )
		float EssMs = material.dfg.x + material.dfg.y;
		material.multiScatteringCompensation = 1.0 + material.specularColorBlended * ( 1.0 / EssMs - 1.0 );
	#endif
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SUN_LIGHTS > 0 ) && defined( RE_Direct )
	SunLight sunLight;
	#if defined( USE_SHADOWMAP ) && NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHTS; i ++ ) {
		sunLight = sunLights[ i ];
		getSunLightInfo( sunLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SUN_LIGHT_SHADOWS )
		sunLightShadow = sunLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getSunShadow( sunShadowMap[ i ], sunLightShadow, UNROLLED_LOOP_INDEX ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_LIGHT_PROBE_GRIDS > 0
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		int probeGrid = - 1;
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_LIGHT_PROBE_GRIDS; i ++ ) {
			if ( isInsideLightProbeGrid( probeWorldPos, probeWorldNormal, probesMin[ i ], probesMax[ i ], probesResolution[ i ] ) ) probeGrid = UNROLLED_LOOP_INDEX;
		}
		#pragma unroll_loop_end
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_LIGHT_PROBE_GRIDS; i ++ ) {
			if ( probeGrid == UNROLLED_LOOP_INDEX ) irradiance += getLightProbeGridIrradiance( probesSH[ i ], probesMin[ i ], probesMax[ i ], probesResolution[ i ], probeWorldPos, probeWorldNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,$0=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_PMREM )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		vec3 iblRadiance = getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		vec3 iblRadiance = getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_RETROREFLECTION
		#ifdef USE_ANISOTROPY
			vec3 retroIBLRadiance = getIBLAnisotropyRetroRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
		#else
			vec3 retroIBLRadiance = getIBLRetroRadiance( geometryViewDir, geometryNormal, material.roughness );
		#endif
		iblRadiance = mix( iblRadiance, retroIBLRadiance, saturate( material.retroreflectivity ) );
	#endif
	radiance += iblRadiance;
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Z0=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,J0=`#if NUM_LIGHT_PROBE_GRIDS > 0
uniform highp sampler3D probesSH[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesMin[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesMax[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesResolution[ NUM_LIGHT_PROBE_GRIDS ];
bool isInsideLightProbeGrid( vec3 worldPos, vec3 worldNormal, vec3 probesMin, vec3 probesMax, vec3 probesResolution ) {
	vec3 spacing = ( probesMax - probesMin ) / probesResolution;
	vec3 samplePos = worldPos + worldNormal * spacing * 0.5;
	vec3 margin = spacing * 0.01;
	return all( greaterThanEqual( samplePos, probesMin - margin ) ) && all( lessThanEqual( samplePos, probesMax + margin ) );
}
vec3 getLightProbeGridIrradiance( highp sampler3D probesSH, vec3 probesMin, vec3 probesMax, vec3 probesResolution, vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 probeSpacing = gridRange / res;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.5 / res, 1.0 - 0.5 / res );
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,K0=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,j0=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Q0=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,tg=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,eg=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,ng=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,ig=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,sg=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,rg=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,ag=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,og=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,lg=`#if defined( USE_MORPHCOLORS )
	#if defined( USE_COLOR_ALPHA )
		vColor *= morphTargetBaseInfluence;
	#elif defined( USE_COLOR )
		vColor.rgb *= morphTargetBaseInfluence;
	#endif
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor.rgb += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,cg=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,hg=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,ug=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,dg=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#ifdef DOUBLE_SIDED
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,fg=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,pg=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,mg=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,gg=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,xg=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,_g=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,vg=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,yg=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Mg=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,bg=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Sg=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,wg=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Tg=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Eg=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Ag=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Rg=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Cg=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Ig=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		#define SUN_LIGHT_CASCADES 2
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#else
			uniform sampler2D sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#endif
		uniform mat4 sunShadowMatrix[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		uniform vec4 sunShadowCascade[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
		struct SunLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SunLightShadow sunLightShadows[ NUM_SUN_LIGHT_SHADOWS ];
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				vec2 radius = shadowRadius * texelSize;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_SUN_LIGHT_SHADOWS > 0
		float getSunShadow(
			#if defined( SHADOWMAP_TYPE_PCF )
				sampler2DShadow shadowMap,
			#else
				sampler2D shadowMap,
			#endif
			SunLightShadow sunLightShadow,
			int shadowIndex
		) {
			vec4 shadowWorldPosition = vec4( vSunShadowWorldPosition.xyz + vSunShadowWorldNormal * sunLightShadow.shadowNormalBias, 1.0 );
			float viewDepth = vSunShadowWorldPosition.w;
			int cascadeOffset = shadowIndex * SUN_LIGHT_CASCADES;
			float shadow = 1.0;
			for ( int i = SUN_LIGHT_CASCADES - 1; i >= 0; i -- ) {
				vec4 cascade = sunShadowCascade[ cascadeOffset + i ];
				if ( viewDepth >= cascade.x && viewDepth < cascade.y ) {
					float cascadeShadow = getShadow(
						shadowMap,
						sunLightShadow.shadowMapSize,
						sunLightShadow.shadowIntensity,
						sunLightShadow.shadowBias,
						sunLightShadow.shadowRadius,
						sunShadowMatrix[ cascadeOffset + i ] * shadowWorldPosition
					);
					shadow = mix( cascadeShadow, shadow, smoothstep( cascade.z, cascade.y, viewDepth ) );
				}
			}
			return shadow;
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float lightDistance = length( lightToPosition );
			float depthRange = shadowCameraFar - shadowCameraNear;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float depthA = - shadowCameraNear / depthRange - shadowBias;
				float depthB = shadowCameraNear * shadowCameraFar / ( depthRange * lightDistance );
			#else
				float depthA = shadowCameraFar / depthRange + shadowBias;
				float depthB = - shadowCameraNear * shadowCameraFar / ( depthRange * lightDistance );
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			shadow = 0.0;
			for ( int i = 0; i < 5; i ++ ) {
				vec2 offset = vogelDiskSample( i, 5, phi );
				vec3 direction = bd3D + ( tangent * offset.x + bitangent * offset.y ) * texelSize;
				vec3 absDirection = abs( direction );
				float dp = depthA + depthB / max( max( absDirection.x, absDirection.y ), absDirection.z );
				shadow += texture( shadowMap, vec4( direction, dp ) );
			}
			shadow *= 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,Pg=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Lg=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_SUN_LIGHT_SHADOWS > 0
		vSunShadowWorldPosition = vec4( worldPosition.xyz, - mvPosition.z );
		vSunShadowWorldNormal = shadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Dg=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHT_SHADOWS; i ++ ) {
		sunLight = sunLightShadows[ i ];
		shadow *= receiveShadow ? getSunShadow( sunShadowMap[ i ], sunLight, UNROLLED_LOOP_INDEX ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Ng=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Ug=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Fg=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Og=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,zg=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,kg=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Bg=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Hg=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Gg=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Vg=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Wg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	varying vec2 vDiffuseRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Xg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	uniform mat3 diffuseRoughnessMapTransform;
	varying vec2 vDiffuseRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,qg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	vDiffuseRoughnessMapUv = ( diffuseRoughnessMapTransform * vec3( DIFFUSE_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,Yg=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,$g=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Zg=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Jg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Kg=`uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <envmap_common_pars_fragment>
void main() {
	#ifdef ENVMAP_TYPE_PMREM
		vec4 texColor = textureLod( envMap, backgroundRotation * vWorldDirection, roughnessToMip( backgroundBlurriness ) );
	#else
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,jg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Qg=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,tx=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,ex=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,nx=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,ix=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,sx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,rx=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,ax=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,ox=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,lx=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,cx=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,hx=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,ux=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,dx=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,fx=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,px=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,mx=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,gx=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,xx=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,_x=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,vx=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DIFFUSE_ROUGHNESS
	uniform float diffuseRoughness;
	#ifdef USE_DIFFUSE_ROUGHNESSMAP
		uniform sampler2D diffuseRoughnessMap;
	#endif
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_RETROREFLECTION
	uniform float retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,yx=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Mx=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,bx=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,Sx=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,wx=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Tx=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Ex=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Ax=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,$t={alphahash_fragment:Zm,alphahash_pars_fragment:Jm,alphamap_fragment:Km,alphamap_pars_fragment:jm,alphatest_fragment:Qm,alphatest_pars_fragment:t0,aomap_fragment:e0,aomap_pars_fragment:n0,batching_pars_vertex:i0,batching_vertex:s0,begin_vertex:r0,beginnormal_vertex:a0,bsdfs:o0,iridescence_fragment:l0,bumpmap_pars_fragment:c0,clipping_planes_fragment:h0,clipping_planes_pars_fragment:u0,clipping_planes_pars_vertex:d0,clipping_planes_vertex:f0,color_fragment:p0,color_pars_fragment:m0,color_pars_vertex:g0,color_vertex:x0,common:_0,defaultnormal_vertex:v0,displacementmap_pars_vertex:y0,displacementmap_vertex:M0,emissivemap_fragment:b0,emissivemap_pars_fragment:S0,colorspace_fragment:w0,colorspace_pars_fragment:T0,envmap_fragment:E0,envmap_common_pars_fragment:A0,envmap_pars_fragment:R0,envmap_pars_vertex:C0,envmap_physical_pars_fragment:B0,envmap_vertex:I0,fog_vertex:P0,fog_pars_vertex:L0,fog_fragment:D0,fog_pars_fragment:N0,gradientmap_pars_fragment:U0,lightmap_pars_fragment:F0,lights_lambert_fragment:O0,lights_lambert_pars_fragment:z0,lights_pars_begin:k0,lights_toon_fragment:H0,lights_toon_pars_fragment:G0,lights_phong_fragment:V0,lights_phong_pars_fragment:W0,lights_physical_fragment:X0,lights_physical_pars_fragment:q0,lights_fragment_begin:Y0,lights_fragment_maps:$0,lights_fragment_end:Z0,lightprobes_pars_fragment:J0,logdepthbuf_fragment:K0,logdepthbuf_pars_fragment:j0,logdepthbuf_pars_vertex:Q0,logdepthbuf_vertex:tg,map_fragment:eg,map_pars_fragment:ng,map_particle_fragment:ig,map_particle_pars_fragment:sg,metalnessmap_fragment:rg,metalnessmap_pars_fragment:ag,morphinstance_vertex:og,morphcolor_vertex:lg,morphnormal_vertex:cg,morphtarget_pars_vertex:hg,morphtarget_vertex:ug,normal_fragment_begin:dg,normal_fragment_maps:fg,normal_pars_fragment:pg,normal_pars_vertex:mg,normal_vertex:gg,normalmap_pars_fragment:xg,clearcoat_normal_fragment_begin:_g,clearcoat_normal_fragment_maps:vg,clearcoat_pars_fragment:yg,iridescence_pars_fragment:Mg,opaque_fragment:bg,packing:Sg,premultiplied_alpha_fragment:wg,project_vertex:Tg,dithering_fragment:Eg,dithering_pars_fragment:Ag,roughnessmap_fragment:Rg,roughnessmap_pars_fragment:Cg,shadowmap_pars_fragment:Ig,shadowmap_pars_vertex:Pg,shadowmap_vertex:Lg,shadowmask_pars_fragment:Dg,skinbase_vertex:Ng,skinning_pars_vertex:Ug,skinning_vertex:Fg,skinnormal_vertex:Og,specularmap_fragment:zg,specularmap_pars_fragment:kg,tonemapping_fragment:Bg,tonemapping_pars_fragment:Hg,transmission_fragment:Gg,transmission_pars_fragment:Vg,uv_pars_fragment:Wg,uv_pars_vertex:Xg,uv_vertex:qg,worldpos_vertex:Yg,background_vert:$g,background_frag:Zg,backgroundCube_vert:Jg,backgroundCube_frag:Kg,cube_vert:jg,cube_frag:Qg,depth_vert:tx,depth_frag:ex,distance_vert:nx,distance_frag:ix,equirect_vert:sx,equirect_frag:rx,linedashed_vert:ax,linedashed_frag:ox,meshbasic_vert:lx,meshbasic_frag:cx,meshlambert_vert:hx,meshlambert_frag:ux,meshmatcap_vert:dx,meshmatcap_frag:fx,meshnormal_vert:px,meshnormal_frag:mx,meshphong_vert:gx,meshphong_frag:xx,meshphysical_vert:_x,meshphysical_frag:vx,meshtoon_vert:yx,meshtoon_frag:Mx,points_vert:bx,points_frag:Sx,shadow_vert:wx,shadow_frag:Tx,sprite_vert:Ex,sprite_frag:Ax},vt={common:{diffuse:{value:new Pt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ot},alphaMap:{value:null},alphaMapTransform:{value:new Ot},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ot}},envmap:{envMap:{value:null},envMapRotation:{value:new Ot},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ot}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ot}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ot},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ot},normalScale:{value:new Wt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ot},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ot}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ot}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ot}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Pt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:[]},probesMin:{value:[]},probesMax:{value:[]},probesResolution:{value:[]}},points:{diffuse:{value:new Pt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ot},alphaTest:{value:0},uvTransform:{value:new Ot}},sprite:{diffuse:{value:new Pt(16777215)},opacity:{value:1},center:{value:new Wt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ot},alphaMap:{value:null},alphaMapTransform:{value:new Ot},alphaTest:{value:0}}},ci={basic:{uniforms:fn([vt.common,vt.specularmap,vt.envmap,vt.aomap,vt.lightmap,vt.fog]),vertexShader:$t.meshbasic_vert,fragmentShader:$t.meshbasic_frag},lambert:{uniforms:fn([vt.common,vt.specularmap,vt.envmap,vt.aomap,vt.lightmap,vt.emissivemap,vt.bumpmap,vt.normalmap,vt.displacementmap,vt.fog,vt.lights,{emissive:{value:new Pt(0)},envMapIntensity:{value:1}}]),vertexShader:$t.meshlambert_vert,fragmentShader:$t.meshlambert_frag},phong:{uniforms:fn([vt.common,vt.specularmap,vt.envmap,vt.aomap,vt.lightmap,vt.emissivemap,vt.bumpmap,vt.normalmap,vt.displacementmap,vt.fog,vt.lights,{emissive:{value:new Pt(0)},specular:{value:new Pt(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:$t.meshphong_vert,fragmentShader:$t.meshphong_frag},standard:{uniforms:fn([vt.common,vt.envmap,vt.aomap,vt.lightmap,vt.emissivemap,vt.bumpmap,vt.normalmap,vt.displacementmap,vt.roughnessmap,vt.metalnessmap,vt.fog,vt.lights,{emissive:{value:new Pt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:$t.meshphysical_vert,fragmentShader:$t.meshphysical_frag},toon:{uniforms:fn([vt.common,vt.aomap,vt.lightmap,vt.emissivemap,vt.bumpmap,vt.normalmap,vt.displacementmap,vt.gradientmap,vt.fog,vt.lights,{emissive:{value:new Pt(0)}}]),vertexShader:$t.meshtoon_vert,fragmentShader:$t.meshtoon_frag},matcap:{uniforms:fn([vt.common,vt.bumpmap,vt.normalmap,vt.displacementmap,vt.fog,{matcap:{value:null}}]),vertexShader:$t.meshmatcap_vert,fragmentShader:$t.meshmatcap_frag},points:{uniforms:fn([vt.points,vt.fog]),vertexShader:$t.points_vert,fragmentShader:$t.points_frag},dashed:{uniforms:fn([vt.common,vt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:$t.linedashed_vert,fragmentShader:$t.linedashed_frag},depth:{uniforms:fn([vt.common,vt.displacementmap]),vertexShader:$t.depth_vert,fragmentShader:$t.depth_frag},normal:{uniforms:fn([vt.common,vt.bumpmap,vt.normalmap,vt.displacementmap,{opacity:{value:1}}]),vertexShader:$t.meshnormal_vert,fragmentShader:$t.meshnormal_frag},sprite:{uniforms:fn([vt.sprite,vt.fog]),vertexShader:$t.sprite_vert,fragmentShader:$t.sprite_frag},background:{uniforms:{uvTransform:{value:new Ot},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:$t.background_vert,fragmentShader:$t.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ot}},vertexShader:$t.backgroundCube_vert,fragmentShader:$t.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:$t.cube_vert,fragmentShader:$t.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:$t.equirect_vert,fragmentShader:$t.equirect_frag},distance:{uniforms:fn([vt.common,vt.displacementmap,{referencePosition:{value:new k},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:$t.distance_vert,fragmentShader:$t.distance_frag},shadow:{uniforms:fn([vt.lights,vt.fog,{color:{value:new Pt(0)},opacity:{value:1}}]),vertexShader:$t.shadow_vert,fragmentShader:$t.shadow_frag}};ci.physical={uniforms:fn([ci.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ot},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ot},clearcoatNormalScale:{value:new Wt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ot},diffuseRoughness:{value:0},diffuseRoughnessMap:{value:null},diffuseRoughnessMapTransform:{value:new Ot},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ot},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ot},sheen:{value:0},sheenColor:{value:new Pt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ot},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ot},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ot},transmissionSamplerSize:{value:new Wt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ot},attenuationDistance:{value:0},attenuationColor:{value:new Pt(0)},specularColor:{value:new Pt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ot},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ot},anisotropyVector:{value:new Wt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ot}}]),vertexShader:$t.meshphysical_vert,fragmentShader:$t.meshphysical_frag};var xl={r:0,b:0,g:0},Rx=new ae,gf=new Ot;gf.set(-1,0,0,0,1,0,0,0,1);function Cx(s,t,e,n,i,r){let a=new Pt(0),o=i===!0?0:1,l,c,h=null,u=0,d=null;function f(v){let S=v.isScene===!0?v.background:null;if(S&&S.isTexture){let y=v.backgroundBlurriness>0;S=t.get(S,y)}return S}function m(v){let S=!1,y=f(v);y===null?p(a,o):y&&y.isColor&&(p(y,1),S=!0);let T=s.xr.getEnvironmentBlendMode();T==="additive"?e.buffers.color.setClear(0,0,0,1,r):T==="alpha-blend"&&e.buffers.color.setClear(0,0,0,0,r),(s.autoClear||S)&&(e.buffers.depth.setTest(!0),e.buffers.depth.setMask(!0),e.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function x(v,S){let y=f(S);y&&y.isCubeTexture?(c===void 0&&(c=new re(new En(1,1,1),new An({name:"BackgroundCubeMaterial",uniforms:ms(ci.backgroundCube.uniforms),vertexShader:ci.backgroundCube.vertexShader,fragmentShader:ci.backgroundCube.fragmentShader,side:sn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(T,E,_){this.matrixWorld.copyPosition(_.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(c)),c.material.uniforms.envMap.value=y,c.material.uniforms.backgroundBlurriness.value=S.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(Rx.makeRotationFromEuler(S.backgroundRotation)).transpose(),y.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(gf),c.material.toneMapped=ne.getTransfer(y.colorSpace)!==ue,(h!==y||u!==y.version||d!==s.toneMapping)&&(c.material.needsUpdate=!0,h=y,u=y.version,d=s.toneMapping),c.layers.enableAll(),v.unshift(c,c.geometry,c.material,0,0,null)):y&&y.isTexture&&(l===void 0&&(l=new re(new Vn(2,2),new An({name:"BackgroundMaterial",uniforms:ms(ci.background.uniforms),vertexShader:ci.background.vertexShader,fragmentShader:ci.background.fragmentShader,side:ri,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(l)),l.material.uniforms.t2D.value=y,l.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,l.material.toneMapped=ne.getTransfer(y.colorSpace)!==ue,y.matrixAutoUpdate===!0&&y.updateMatrix(),l.material.uniforms.uvTransform.value.copy(y.matrix),(h!==y||u!==y.version||d!==s.toneMapping)&&(l.material.needsUpdate=!0,h=y,u=y.version,d=s.toneMapping),l.layers.enableAll(),v.unshift(l,l.geometry,l.material,0,0,null))}function p(v,S){v.getRGB(xl,fh(s)),e.buffers.color.setClear(xl.r,xl.g,xl.b,S,r)}function g(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return a},setClearColor:function(v,S=1){a.set(v),o=S,p(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(v){o=v,p(a,o)},render:m,addToRenderList:x,dispose:g}}function Ix(s,t){let e=s.getParameter(s.MAX_VERTEX_ATTRIBS),n={},i=d(null),r=i,a=!1;function o(N,U,W,R,C){let O=!1,B=u(N,R,W,U);r!==B&&(r=B,c(r.object)),O=f(N,R,W,C),O&&m(N,R,W,C),C!==null&&t.update(C,s.ELEMENT_ARRAY_BUFFER),(O||a)&&(a=!1,y(N,U,W,R),C!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,t.get(C).buffer))}function l(){return s.createVertexArray()}function c(N){return s.bindVertexArray(N)}function h(N){return s.deleteVertexArray(N)}function u(N,U,W,R){let C=R.wireframe===!0,O=n[U.id];O===void 0&&(O={},n[U.id]=O);let B=N.isInstancedMesh===!0?N.id:0,nt=O[B];nt===void 0&&(nt={},O[B]=nt);let q=nt[W.id];q===void 0&&(q={},nt[W.id]=q);let et=q[C];return et===void 0&&(et=d(l()),q[C]=et),et}function d(N){let U=[],W=[],R=[];for(let C=0;C<e;C++)U[C]=0,W[C]=0,R[C]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:U,enabledAttributes:W,attributeDivisors:R,object:N,attributes:{},index:null}}function f(N,U,W,R){let C=r.attributes,O=U.attributes,B=0,nt=W.getAttributes();for(let q in nt)if(nt[q].location>=0){let st=C[q],Et=O[q];if(Et===void 0&&(q==="instanceMatrix"&&N.instanceMatrix&&(Et=N.instanceMatrix),q==="instanceColor"&&N.instanceColor&&(Et=N.instanceColor)),st===void 0||st.attribute!==Et||Et&&st.data!==Et.data)return!0;B++}return r.attributesNum!==B||r.index!==R}function m(N,U,W,R){let C={},O=U.attributes,B=0,nt=W.getAttributes();for(let q in nt)if(nt[q].location>=0){let st=O[q];st===void 0&&(q==="instanceMatrix"&&N.instanceMatrix&&(st=N.instanceMatrix),q==="instanceColor"&&N.instanceColor&&(st=N.instanceColor));let Et={};Et.attribute=st,st&&st.data&&(Et.data=st.data),C[q]=Et,B++}r.attributes=C,r.attributesNum=B,r.index=R}function x(){let N=r.newAttributes;for(let U=0,W=N.length;U<W;U++)N[U]=0}function p(N){g(N,0)}function g(N,U){let W=r.newAttributes,R=r.enabledAttributes,C=r.attributeDivisors;W[N]=1,R[N]===0&&(s.enableVertexAttribArray(N),R[N]=1),C[N]!==U&&(s.vertexAttribDivisor(N,U),C[N]=U)}function v(){let N=r.newAttributes,U=r.enabledAttributes;for(let W=0,R=U.length;W<R;W++)U[W]!==N[W]&&(s.disableVertexAttribArray(W),U[W]=0)}function S(N,U,W,R,C,O,B){B===!0?s.vertexAttribIPointer(N,U,W,C,O):s.vertexAttribPointer(N,U,W,R,C,O)}function y(N,U,W,R){x();let C=R.attributes,O=W.getAttributes(),B=U.defaultAttributeValues;for(let nt in O){let q=O[nt];if(q.location>=0){let et=C[nt];if(et===void 0&&(nt==="instanceMatrix"&&N.instanceMatrix&&(et=N.instanceMatrix),nt==="instanceColor"&&N.instanceColor&&(et=N.instanceColor)),et!==void 0){let st=et.normalized,Et=et.itemSize,Ut=t.get(et);if(Ut===void 0)continue;let Z=Ut.buffer,lt=Ut.type,bt=Ut.bytesPerElement,Ct=lt===s.INT||lt===s.UNSIGNED_INT||et.gpuType===No;if(et.isInterleavedBufferAttribute){let yt=et.data,Bt=yt.isInterleavedBuffer===!0?yt.stride:yt.itemSize,Ne=et.offset;if(yt.isInstancedInterleavedBuffer||yt.isInstancedBufferAttribute){for(let Dt=0;Dt<q.locationSize;Dt++)g(q.location+Dt,yt.meshPerAttribute);N.isInstancedMesh!==!0&&R._maxInstanceCount===void 0&&(R._maxInstanceCount=yt.meshPerAttribute*yt.count)}else for(let Dt=0;Dt<q.locationSize;Dt++)p(q.location+Dt);s.bindBuffer(s.ARRAY_BUFFER,Z);for(let Dt=0;Dt<q.locationSize;Dt++)S(q.location+Dt,Et/q.locationSize,lt,st,Bt*bt,(Ne+Et/q.locationSize*Dt)*bt,Ct)}else{if(et.isInstancedBufferAttribute){for(let yt=0;yt<q.locationSize;yt++)g(q.location+yt,et.meshPerAttribute);N.isInstancedMesh!==!0&&R._maxInstanceCount===void 0&&(R._maxInstanceCount=et.meshPerAttribute*et.count)}else for(let yt=0;yt<q.locationSize;yt++)p(q.location+yt);s.bindBuffer(s.ARRAY_BUFFER,Z);for(let yt=0;yt<q.locationSize;yt++)S(q.location+yt,Et/q.locationSize,lt,st,Et*bt,Et/q.locationSize*yt*bt,Ct)}}else if(B!==void 0){let st=B[nt];if(st!==void 0)switch(st.length){case 2:s.vertexAttrib2fv(q.location,st);break;case 3:s.vertexAttrib3fv(q.location,st);break;case 4:s.vertexAttrib4fv(q.location,st);break;default:s.vertexAttrib1fv(q.location,st)}}}}v()}function T(){D();for(let N in n){let U=n[N];for(let W in U){let R=U[W];for(let C in R){let O=R[C];for(let B in O)h(O[B].object),delete O[B];delete R[C]}}delete n[N]}}function E(N){if(n[N.id]===void 0)return;let U=n[N.id];for(let W in U){let R=U[W];for(let C in R){let O=R[C];for(let B in O)h(O[B].object),delete O[B];delete R[C]}}delete n[N.id]}function _(N){for(let U in n){let W=n[U];for(let R in W){let C=W[R];if(C[N.id]===void 0)continue;let O=C[N.id];for(let B in O)h(O[B].object),delete O[B];delete C[N.id]}}}function w(N){for(let U in n){let W=n[U],R=N.isInstancedMesh===!0?N.id:0,C=W[R];if(C!==void 0){for(let O in C){let B=C[O];for(let nt in B)h(B[nt].object),delete B[nt];delete C[O]}delete W[R],Object.keys(W).length===0&&delete n[U]}}}function D(){I(),a=!0,r!==i&&(r=i,c(r.object))}function I(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:o,reset:D,resetDefaultState:I,dispose:T,releaseStatesOfGeometry:E,releaseStatesOfObject:w,releaseStatesOfProgram:_,initAttributes:x,enableAttribute:p,disableUnusedAttributes:v}}function Px(s,t,e){let n;function i(l){n=l}function r(l,c){s.drawArrays(n,l,c),e.update(c,n,1)}function a(l,c,h){h!==0&&(s.drawArraysInstanced(n,l,c,h),e.update(c,n,h))}function o(l,c,h){if(h===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,c,0,h);let d=0;for(let f=0;f<h;f++)d+=c[f];e.update(d,n,1)}this.setMode=i,this.render=r,this.renderInstances=a,this.renderMultiDraw=o}function Lx(s,t,e,n){let i;function r(){if(i!==void 0)return i;if(t.has("EXT_texture_filter_anisotropic")===!0){let _=t.get("EXT_texture_filter_anisotropic");i=s.getParameter(_.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function a(_){return!(_!==Yn&&n.convert(_)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(_){let w=_===qn&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(_!==bn&&_!==On&&!w&&n.convert(_)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE))}function l(_){if(_==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";_="mediump"}return _==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp",h=l(c);h!==c&&(Nt("WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);let u=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control"),d=e.logarithmicDepthBuffer===!0&&u===!1;e.reversedDepthBuffer===!0&&u===!1&&Nt("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer."),e.logarithmicDepthBuffer===!0&&u===!0&&Nt("WebGLRenderer: Logarithmic depth buffer is ignored when reversed depth buffer is enabled.");let f=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),m=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=s.getParameter(s.MAX_TEXTURE_SIZE),p=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),g=s.getParameter(s.MAX_VERTEX_ATTRIBS),v=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),S=s.getParameter(s.MAX_VARYING_VECTORS),y=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),T=s.getParameter(s.MAX_SAMPLES),E=s.getParameter(s.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:d,reversedDepthBuffer:u,maxTextures:f,maxVertexTextures:m,maxTextureSize:x,maxCubemapSize:p,maxAttributes:g,maxVertexUniforms:v,maxVaryings:S,maxFragmentUniforms:y,maxSamples:T,samples:E}}function Dx(s){let t=this,e=null,n=0,i=!1,r=!1,a=new Gn,o=new Ot,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){let f=u.length!==0||d||n!==0||i;return i=d,n=u.length,f},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,d){e=h(u,d,0)},this.setState=function(u,d,f){let m=u.clippingPlanes,x=u.clipIntersection,p=u.clipShadows,g=s.get(u);if(!i||m===null||m.length===0||r&&!p)r?h(null):c();else{let v=r?0:n,S=v*4,y=g.clippingState||null;l.value=y,y=h(m,d,S,f);for(let T=0;T!==S;++T)y[T]=e[T];g.clippingState=y,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=v}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(u,d,f,m){let x=u!==null?u.length:0,p=null;if(x!==0){if(p=l.value,m!==!0||p===null){let g=f+x*4,v=d.matrixWorldInverse;o.getNormalMatrix(v),(p===null||p.length<g)&&(p=new Float32Array(g));for(let S=0,y=f;S!==x;++S,y+=4)a.copy(u[S]).applyMatrix4(v,o),a.normal.toArray(p,y),p[y+3]=a.constant}l.value=p,l.needsUpdate=!0}return t.numPlanes=x,t.numIntersection=0,p}}var oa=class extends _n{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let n={width:t,height:t,depth:1},i=[n,n,n,n,n,n];this.texture=new Fr(i),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},i=new En(5,5,5),r=new An({name:"CubemapFromEquirect",uniforms:ms(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:sn,blending:us});r.uniforms.tEquirect.value=e;let a=new re(i,r),o=e.minFilter;return e.minFilter===Ei&&(e.minFilter=gn),new Ys(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e=!0,n=!0,i=!0){let r=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,n,i);t.setRenderTarget(r)}},Yd=256,Nx=3,Ux=20,xf=256,_f=16,Fx=3,Ox=new k,zx=new Pt,js=class s{constructor(t){this._renderer=t,this._cubeSize=0,this._sourceTarget=null,this._cubeCamera=new Ys(1,10,null),this._boxMesh=new re(new En(5,5,5),null),this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null,this._integrationMaterial=null}fromScene(t,e=0,n=.1,i=100,r={}){let{size:a=256,position:o=Ox}=r,l=this._renderer;this._setSize(a);let c=this._allocateTarget(),h=this._getSourceTarget(!0);e>0&&(h.texture.mipmapsAutoUpdate=!1);let u=l.autoClear,d=l.autoClearColor,f=l.autoClearDepth,m=l.autoClearStencil,x=t.background;l.autoClear=!0,l.autoClearColor=!0,l.autoClearDepth=!0,l.autoClearStencil=!0,x===null&&(t.background=l.getClearColor(zx));let p=new Ys(n,i,h);return p.position.copy(o),p.update(l,t),l.autoClear=u,l.autoClearColor=d,l.autoClearDepth=f,l.autoClearStencil=m,t.background=x,e>0&&(h.texture.mipmapsAutoUpdate=!0,this._blur(c,e)),this._applyPMREM(c),c}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Jd(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Zd(),this._compileMaterial(this._equirectMaterial))}dispose(){this._sourceTarget!==null&&this._sourceTarget.dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._integrationMaterial!==null&&this._integrationMaterial.dispose(),this._boxMesh.geometry.dispose()}static lodToRoughness(t,e){return e>0?1-Math.sqrt(1-t/e):0}_setSize(t){this._cubeSize=Math.max(Yd,Gd(t))}_fromTexture(t,e){t.mapping===fs||t.mapping===Zs?this._setSize(t.image.length===0?Yd:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4);let n=e||this._allocateTarget();return this._textureToCubemap(t),this._applyPMREM(n),n}_allocateTarget(){let t=this._cubeSize,e=$d(t,!1,!1),n=Math.log2(t)-Nx;for(let i=0;i<=n;i++)e.texture.mipmaps.push({width:t>>i,height:t>>i});return e.texture.name="PMREM",e.texture.isPMREMTexture=!0,e}_getSourceTarget(t=!1){let e=this._cubeSize,n=this._sourceTarget;return(n===null||n.width!==e||t&&n.depthBuffer===!1)&&(n!==null&&n.dispose(),this._sourceTarget=$d(e,!0,t)),this._sourceTarget}_compileMaterial(t){this._boxMesh.material=t,this._renderer.compile(this._boxMesh,this._cubeCamera.children[0])}_renderCube(t,e,n){let i=this._boxMesh,r=this._cubeCamera;i.material=n,r.renderTarget=t,r.activeMipmapLevel=e;let a=t.width>>e;t.viewport.set(0,0,a,a),r.update(this._renderer,i),t.viewport.set(0,0,t.width,t.height)}_textureToCubemap(t){let e;t.mapping===fs||t.mapping===Zs?(this._cubemapMaterial===null&&(this._cubemapMaterial=Jd()),e=this._cubemapMaterial,e.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):(this._equirectMaterial===null&&(this._equirectMaterial=Zd()),e=this._equirectMaterial),e.uniforms.envMap.value=t,this._renderCube(this._getSourceTarget(),0,e)}_applyPMREM(t){this._ggxMaterial===null&&(this._ggxMaterial=kx(),this._integrationMaterial=Bx());let e=this._cubeSize,n=t.texture.mipmaps.length-1,i=this._ggxMaterial.uniforms;i.envMap.value=this._sourceTarget.texture;let r=this._integrationMaterial.uniforms;r.envMap.value=this._sourceTarget.texture,r.sourceLod.value=Math.log2(e/_f);for(let a=0;a<=n;a++){let o=s.lodToRoughness(a,n);if(a>n-Fx)r.roughness.value=o,this._renderCube(t,a,this._integrationMaterial);else{let l=o>0?Math.log2(e)+.5*Math.log2(6/(xf*Math.pow(o,4)))+.5:0;i.roughness.value=o,i.lodBias.value=l,this._renderCube(t,a,this._ggxMaterial)}}}_blur(t,e){this._blurMaterial===null&&(this._blurMaterial=Hx());let n=this._blurMaterial,i=n.uniforms,r=this._sourceTarget;i.sigma.value=Math.min(e,Math.PI)/Math.SQRT2,i.envMap.value=r.texture,this._renderCube(t,0,n),i.envMap.value=t.texture,this._renderCube(r,0,n)}};function $d(s,t,e){return new oa(s,{minFilter:Ei,generateMipmaps:t,type:qn,colorSpace:Tr,depthBuffer:e})}function la(s,t,e){return new An({name:s,uniforms:t,vertexShader:$t.cube_vert,fragmentShader:e,side:sn,blending:us,depthTest:!1,depthWrite:!1})}function kx(){return la("PMREMGGXConvolution",{envMap:{value:null},roughness:{value:0},lodBias:{value:0}},`

		#define GGX_SAMPLES ${xf}u

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float roughness;
		uniform float lodBias;

		#include <common>

		// Van der Corput radical inverse
		float radicalInverse_VdC( uint bits ) {

			bits = ( bits << 16u ) | ( bits >> 16u );
			bits = ( ( bits & 0x55555555u ) << 1u ) | ( ( bits & 0xAAAAAAAAu ) >> 1u );
			bits = ( ( bits & 0x33333333u ) << 2u ) | ( ( bits & 0xCCCCCCCCu ) >> 2u );
			bits = ( ( bits & 0x0F0F0F0Fu ) << 4u ) | ( ( bits & 0xF0F0F0F0u ) >> 4u );
			bits = ( ( bits & 0x00FF00FFu ) << 8u ) | ( ( bits & 0xFF00FF00u ) >> 8u );
			return float( bits ) * 2.3283064365386963e-10; // / 0x100000000

		}

		// Hammersley sequence
		vec2 hammersley( uint i, uint N ) {

			return vec2( float( i ) / float( N ), radicalInverse_VdC( i ) );

		}

		void main() {

			vec3 N = normalize( vWorldDirection );

			// For very low roughness, just sample the environment directly
			if ( roughness < 0.001 ) {

				gl_FragColor = vec4( textureLod( envMap, N, 0.0 ).rgb, 1.0 );
				return;

			}

			float alpha = roughness * roughness;
			float alpha2 = alpha * alpha;

			// Tangent space basis for VNDF sampling
			vec3 up = abs( N.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
			vec3 tangent = normalize( cross( up, N ) );
			vec3 bitangent = cross( N, tangent );

			vec3 prefilteredColor = vec3( 0.0 );
			float totalWeight = 0.0;

			for ( uint i = 0u; i < GGX_SAMPLES; i ++ ) {

				vec2 Xi = hammersley( i, GGX_SAMPLES );

				// With V = N, sample the reflected direction directly.
				float invQ = 1.0 / ( 1.0 - Xi.x + alpha2 * Xi.x );
				float NdotL = ( 1.0 - Xi.x - alpha2 * Xi.x ) * invQ;

				if ( NdotL > 0.0 ) {

					float phi = 2.0 * PI * Xi.y;
					float sinTheta = 2.0 * alpha * sqrt( Xi.x * ( 1.0 - Xi.x ) ) * invQ;
					vec3 L = N * NdotL + ( tangent * cos( phi ) + bitangent * sin( phi ) ) * sinTheta;

					// Match the source mip to the sample's solid angle. The terms
					// independent of the sample are precomputed in lodBias.
					float d = alpha2 * invQ;
					float lod = max( log2( d ) + lodBias, 0.0 );

					// Weight by NdotL for the split-sum approximation
					prefilteredColor += textureLod( envMap, L, lod ).rgb * NdotL;
					totalWeight += NdotL;

				}

			}

			gl_FragColor = vec4( prefilteredColor / totalWeight, 1.0 );

		}
	`)}function Bx(){return la("PMREMGGXIntegration",{envMap:{value:null},roughness:{value:0},sourceLod:{value:0},sourceSize:{value:_f}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float roughness;
		uniform float sourceLod;
		uniform int sourceSize;

		void main() {

			vec3 N = normalize( vWorldDirection );

			float alpha = roughness * roughness;
			float alpha2 = alpha * alpha;

			float texelSize = 2.0 / float( sourceSize );

			vec3 prefilteredColor = vec3( 0.0 );
			float totalWeight = 0.0;

			// Pair opposite texels: only the one in N's hemisphere contributes.
			for ( int face = 0; face < 3; face ++ ) {

				for ( int y = 0; y < sourceSize; y ++ ) {

					for ( int x = 0; x < sourceSize; x ++ ) {

						vec2 uv = ( vec2( x, y ) + 0.5 ) * texelSize - 1.0;
						vec3 texelDirection = face == 0 ? vec3( 1.0, uv ) : ( face == 1 ? vec3( uv.x, 1.0, uv.y ) : vec3( uv, 1.0 ) );

						float invDistance = inversesqrt( 1.0 + dot( uv, uv ) );
						float NdotL = dot( N, texelDirection );
						texelDirection *= NdotL < 0.0 ? - 1.0 : 1.0;
						NdotL = abs( NdotL ) * invDistance;

						// With V = N, NdotH squared is ( 1 + NdotL ) / 2. Common factors
						// in the GGX distribution and texel solid angle cancel when normalized.
						float d = 1.0 + alpha2 + ( alpha2 - 1.0 ) * NdotL;
						float weight = NdotL * invDistance * invDistance * invDistance / ( d * d );

						prefilteredColor += textureLod( envMap, texelDirection, sourceLod ).rgb * weight;
						totalWeight += weight;

					}

				}

			}

			gl_FragColor = vec4( prefilteredColor / totalWeight, 1.0 );

		}
	`)}function Hx(){return la("PMREMSphericalGaussianBlur",{envMap:{value:null},sigma:{value:0}},`

		#define SAMPLES ${Ux}
		#define GOLDEN_ANGLE 2.39996322973

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float sigma;

		#include <common>

		void main() {

			vec3 outputDirection = normalize( vWorldDirection );

			vec3 up = abs( outputDirection.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
			vec3 tangent = normalize( cross( up, outputDirection ) );
			vec3 bitangent = cross( outputDirection, tangent );

			// Truncate the kernel at three standard deviations or at the antipode.
			float thetaMax = min( 3.0 * sigma, PI );
			float truncation = 1.0 - exp( - 0.5 * thetaMax * thetaMax / ( sigma * sigma ) );

			vec3 accumColor = vec3( 0.0 );
			float accumWeight = 0.0;

			for ( int i = 0; i < SAMPLES; i ++ ) {

				// Stratified inverse-CDF sampling of the Gaussian, placed on a golden-angle spiral.
				float stratum = ( float( i ) + 0.5 ) / float( SAMPLES );
				float theta = sigma * sqrt( - 2.0 * log( 1.0 - stratum * truncation ) );
				float phi = float( i ) * GOLDEN_ANGLE;

				vec3 offset = cos( phi ) * tangent + sin( phi ) * bitangent;
				vec3 sampleDirection = cos( theta ) * outputDirection + sin( theta ) * offset;

				// Correct the planar sample density to solid angle.
				float weight = sin( theta ) / theta;

				accumColor += weight * textureLod( envMap, sampleDirection, 0.0 ).rgb;
				accumWeight += weight;

			}

			gl_FragColor = vec4( accumColor / accumWeight, 1.0 );

		}
	`)}function Zd(){return la("PMREMEquirectangularToCubemap",{envMap:{value:null}},`

		varying vec3 vWorldDirection;

		uniform sampler2D envMap;

		#include <common>

		void main() {

			// Average four subpixel samples to preserve small, bright features.
			vec3 direction = normalize( vWorldDirection );
			vec3 dx = dFdx( direction ) * 0.25;
			vec3 dy = dFdy( direction ) * 0.25;

			vec3 color = textureLod( envMap, equirectUv( normalize( direction - dx - dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction + dx - dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction - dx + dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction + dx + dy ) ), 0.0 ).rgb;
			gl_FragColor = vec4( color * 0.25, 1.0 );

		}
	`)}function Jd(){return la("PMREMCubemapToCubemap",{envMap:{value:null},flipEnvMap:{value:-1}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float flipEnvMap;

		void main() {

			gl_FragColor = vec4( textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) ).rgb, 1.0 );

		}
	`)}function Gx(s){let t=new WeakMap,e=new WeakMap,n=null;function i(d,f=!1){return d==null?null:f?a(d):r(d)}function r(d){if(d&&d.isTexture){let f=d.mapping;if(f===Po||f===Lo)if(t.has(d)){let m=t.get(d).texture;return o(m,d.mapping)}else{let m=d.image;if(m&&m.height>0){let x=new oa(m.height);return x.fromEquirectangularTexture(s,d),t.set(d,x),d.addEventListener("dispose",c),o(x.texture,d.mapping)}else return null}}return d}function a(d){if(d&&d.isTexture&&d.isPMREMTexture!==!0){let f=d.mapping,m=f===Po||f===Lo,x=f===fs||f===Zs;if(m||x){let p=e.get(d),g=p!==void 0?p.texture.pmremVersion:0;if(d.isRenderTargetTexture&&d.pmremVersion!==g)return n===null&&(n=new js(s)),p=m?n.fromEquirectangular(d,p):n.fromCubemap(d,p),p.texture.pmremVersion=d.pmremVersion,e.set(d,p),p.texture;if(p!==void 0)return p.texture;{let v=d.image;return m&&v&&v.height>0||x&&v&&l(v)?(n===null&&(n=new js(s)),p=m?n.fromEquirectangular(d):n.fromCubemap(d),p.texture.pmremVersion=d.pmremVersion,e.set(d,p),d.addEventListener("dispose",h),p.texture):null}}}return d}function o(d,f){return f===Po?d.mapping=fs:f===Lo&&(d.mapping=Zs),d}function l(d){let f=0,m=6;for(let x=0;x<m;x++)d[x]!==void 0&&f++;return f===m}function c(d){let f=d.target;f.removeEventListener("dispose",c);let m=t.get(f);m!==void 0&&(t.delete(f),m.dispose())}function h(d){let f=d.target;f.removeEventListener("dispose",h);let m=e.get(f);m!==void 0&&(e.delete(f),m.dispose())}function u(){t=new WeakMap,e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:u}}function Vx(s){let t={};function e(n){if(t[n]!==void 0)return t[n];let i=s.getExtension(n);return t[n]=i,i}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){let i=e(n);return i===null&&Sr("WebGLRenderer: "+n+" extension not supported."),i}}}function Wx(s,t,e,n){let i={},r=new WeakMap,a=new FinalizationRegistry(m=>delete i[m]);function o(m){l(m.target)}function l(m){m.index!==null&&t.remove(m.index);for(let p in m.attributes)t.remove(m.attributes[p]);m.removeEventListener("dispose",o),delete i[m.id],a.unregister(m);let x=r.get(m);x&&(t.remove(x),r.delete(m)),n.releaseStatesOfGeometry(m),m.isInstancedBufferGeometry===!0&&delete m._maxInstanceCount,e.memory.geometries--}function c(m,x){return i[x.id]!==void 0||(x.addEventListener("dispose",o),i[x.id]=new WeakRef(x),a.register(x,x.id,x),e.memory.geometries++),x}function h(m){let x=m.attributes;for(let p in x)t.update(x[p],s.ARRAY_BUFFER)}function u(m){let x=m.index,p=m.attributes.position,g=0;if(p===void 0)return;let v=x!==null?x.array.length:p.array.length/3-1,S=p.count>=65535?Lr:Pr,y=new S(Math.ceil(v/3)*6,1),T=y.array;if(x!==null){let _=x.array;g=x.version;for(let w=0,D=0;w<v;w+=3){let I=_[w+0],N=_[w+1],U=_[w+2];T[D++]=I,T[D++]=N,T[D++]=N,T[D++]=U,T[D++]=U,T[D++]=I}}else{g=p.version;for(let _=0,w=0;_<v;_+=3){let D=_+0,I=_+1,N=_+2;T[w++]=D,T[w++]=I,T[w++]=I,T[w++]=N,T[w++]=N,T[w++]=D}}y.version=g;let E=r.get(m);E&&t.remove(E),r.set(m,y)}function d(m){let x=r.get(m);if(x){let p=m.index;p!==null&&x.version<p.version&&u(m)}else u(m);return r.get(m)}function f(){for(let m in i){let x=i[m].deref();x!==void 0&&l(x)}}return{get:c,update:h,getWireframeAttribute:d,dispose:f}}function Xx(s,t,e){let n;function i(u){n=u}let r,a;function o(u){r=u.type,a=u.bytesPerElement}function l(u,d){s.drawElements(n,d,r,u*a),e.update(d,n,1)}function c(u,d,f){f!==0&&(s.drawElementsInstanced(n,d,r,u*a,f),e.update(d,n,f))}function h(u,d,f){if(f===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,d,0,r,u,0,f);let x=0;for(let p=0;p<f;p++)x+=d[p];e.update(x,n,1)}this.setMode=i,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=h}function qx(s){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(e.calls++,a){case s.TRIANGLES:e.triangles+=o*(r/3);break;case s.LINES:e.lines+=o*(r/2);break;case s.LINE_STRIP:e.lines+=o*(r-1);break;case s.LINE_LOOP:e.lines+=o*r;break;case s.POINTS:e.points+=o*r;break;default:Ft("WebGLInfo: Unknown draw mode:",a);break}}function i(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:i,update:n}}function Yx(s,t,e){let n=new WeakMap,i=new Se;function r(a,o,l){let c=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,u=h!==void 0?h.length:0,d=n.get(o);if(d===void 0||d.count!==u){let D=function(){_.dispose(),n.delete(o),o.removeEventListener("dispose",D)};d!==void 0&&d.texture.dispose();let f=o.morphAttributes.position!==void 0,m=o.morphAttributes.normal!==void 0,x=o.morphAttributes.color!==void 0,p=o.morphAttributes.position||[],g=o.morphAttributes.normal||[],v=o.morphAttributes.color||[],S=0;f===!0&&(S=1),m===!0&&(S=2),x===!0&&(S=3);let y=o.attributes.position.count*S,T=1;y>t.maxTextureSize&&(T=Math.ceil(y/t.maxTextureSize),y=t.maxTextureSize);let E=new Float32Array(y*T*4*u),_=new Rr(E,y,T,u);_.type=On,_.needsUpdate=!0;let w=S*4;for(let I=0;I<u;I++){let N=p[I],U=g[I],W=v[I],R=y*T*4*I;for(let C=0;C<N.count;C++){let O=C*w;f===!0&&(i.fromBufferAttribute(N,C),E[R+O+0]=i.x,E[R+O+1]=i.y,E[R+O+2]=i.z,E[R+O+3]=0),m===!0&&(i.fromBufferAttribute(U,C),E[R+O+4]=i.x,E[R+O+5]=i.y,E[R+O+6]=i.z,E[R+O+7]=0),x===!0&&(i.fromBufferAttribute(W,C),E[R+O+8]=i.x,E[R+O+9]=i.y,E[R+O+10]=i.z,E[R+O+11]=W.itemSize===4?i.w:1)}}d={count:u,texture:_,size:new Wt(y,T)},n.set(o,d),o.addEventListener("dispose",D)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(s,"morphTexture",a.morphTexture,e);else{let f=0;for(let x=0;x<c.length;x++)f+=c[x];let m=o.morphTargetsRelative?1:1-f;l.getUniforms().setValue(s,"morphTargetBaseInfluence",m),l.getUniforms().setValue(s,"morphTargetInfluences",c)}l.getUniforms().setValue(s,"morphTargetsTexture",d.texture,e),l.getUniforms().setValue(s,"morphTargetsTextureSize",d.size)}return{update:r}}function $x(s,t,e,n,i){let r=new WeakMap;function a(c){let h=i.render.frame,u=c.geometry,d=t.get(c,u);if(r.get(d)!==h&&(t.update(d),r.set(d,h)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),r.get(c)!==h&&(e.update(c.instanceMatrix,s.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,s.ARRAY_BUFFER),r.set(c,h))),c.isSkinnedMesh){let f=c.skeleton;r.get(f)!==h&&(f.update(),r.set(f,h))}return d}function o(){r=new WeakMap}function l(c){let h=c.target;h.removeEventListener("dispose",l),n.releaseStatesOfObject(h),e.remove(h.instanceMatrix),h.instanceColor!==null&&e.remove(h.instanceColor)}return{update:a,dispose:o}}var Zx={[$c]:"LINEAR_TONE_MAPPING",[Zc]:"REINHARD_TONE_MAPPING",[Jc]:"CINEON_TONE_MAPPING",[Zr]:"ACES_FILMIC_TONE_MAPPING",[jc]:"AGX_TONE_MAPPING",[Qc]:"NEUTRAL_TONE_MAPPING",[Kc]:"CUSTOM_TONE_MAPPING"};function Jx(s,t,e,n,i,r){let a=new _n(t,e,{type:s,depthBuffer:i,stencilBuffer:r,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),o=null,l=null,c=null,h=new Xe;h.setAttribute("position",new ve([-1,3,0,-1,-1,0,3,-1,0],3)),h.setAttribute("uv",new ve([0,2,0,0,2,0],2));let u=new mo({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),d=new re(h,u),f=new Yr(-1,1,1,-1,0,1),m=null,x=null,p=!1,g,v=null,S=[],y=!1;this.setSize=function(T,E){a.setSize(T,E),o!==null&&o.setSize(T,E),l!==null&&l.setSize(T,E);for(let _=0;_<S.length;_++){let w=S[_];w.setSize&&w.setSize(T,E)}},this.setEffects=function(T){S=T,y=S.length>0&&S[0].isRenderPass===!0;let E=a.width,_=a.height;S.length>0&&o===null&&(o=new _n(E,_,{type:qn,depthBuffer:!1,stencilBuffer:!1}),l=new _n(E,_,{type:qn,depthBuffer:!1,stencilBuffer:!1}));let w=i===!0&&S.some(D=>D.needsDepthTexture===!0);w!==(a.depthTexture!==null)&&(w===!0&&c===null&&(c=new Si(E,_),r===!0&&(c.format=Ai,c.type=ps)),a.dispose(),a.depthTexture=w?c:null,a.resolveDepthBuffer=w,a.storeMultisampledDepthBuffer=w);for(let D=0;D<S.length;D++){let I=S[D];I.setSize&&I.setSize(E,_),w&&I.needsDepthTexture===!0&&I.setDepthTexture&&I.setDepthTexture(c)}},this.begin=function(T,E){if(p||T.toneMapping===oi&&S.length===0)return!1;if(v=E,E!==null){let _=E.width,w=E.height;(a.width!==_||a.height!==w)&&this.setSize(_,w)}return y===!1&&T.setRenderTarget(a),g=T.toneMapping,T.toneMapping=oi,!0},this.hasRenderPass=function(){return y},this.end=function(T,E){T.toneMapping=g,p=!0;let _=a,w=o;for(let D=0;D<S.length;D++){let I=S[D];I.enabled!==!1&&(I.render(T,w,_,E),I.needsSwap!==!1&&(_=w,w=w===o?l:o))}if(m!==T.outputColorSpace||x!==T.toneMapping){m=T.outputColorSpace,x=T.toneMapping,u.defines={},ne.getTransfer(m)===ue&&(u.defines.SRGB_TRANSFER="");let D=Zx[x];D&&(u.defines[D]=""),u.needsUpdate=!0}u.uniforms.tDiffuse.value=_.texture,T.setRenderTarget(v),T.render(d,f),v=null,p=!1},this.isCompositing=function(){return p},this.dispose=function(){a.dispose(),o!==null&&o.dispose(),l!==null&&l.dispose(),h.dispose(),u.dispose()}}var vf=new xn,yf=new Si(1,1),Mf=new Or(1),bf=new Rr,Sf=new fo,wf=new Fr,Kd=[],jd=[],Qd=new Float32Array(16),tf=new Float32Array(9),ef=new Float32Array(4);function Qs(s,t,e){let n=s[0];if(n<=0||n>0)return s;let i=t*e,r=Kd[i];if(r===void 0&&(r=new Float32Array(i),Kd[i]=r),t!==0){n.toArray(r,0);for(let a=1,o=0;a!==t;++a)o+=e,s[a].toArray(r,o)}return r}function qe(s,t){if(s.length!==t.length)return!1;for(let e=0,n=s.length;e<n;e++)if(s[e]!==t[e])return!1;return!0}function Ye(s,t){for(let e=0,n=t.length;e<n;e++)s[e]=t[e]}function yl(s,t){let e=jd[t];e===void 0&&(e=new Int32Array(t),jd[t]=e);for(let n=0;n!==t;++n)e[n]=s.allocateTextureUnit();return e}function Kx(s,t){let e=this.cache;e[0]!==t&&(s.uniform1f(this.addr,t),e[0]=t)}function jx(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(qe(e,t))return;s.uniform2fv(this.addr,t),Ye(e,t)}}function Qx(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(s.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(qe(e,t))return;s.uniform3fv(this.addr,t),Ye(e,t)}}function t_(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(qe(e,t))return;s.uniform4fv(this.addr,t),Ye(e,t)}}function e_(s,t){let e=this.cache,n=t.elements;if(n===void 0){if(qe(e,t))return;s.uniformMatrix2fv(this.addr,!1,t),Ye(e,t)}else{if(qe(e,n))return;ef.set(n),s.uniformMatrix2fv(this.addr,!1,ef),Ye(e,n)}}function n_(s,t){let e=this.cache,n=t.elements;if(n===void 0){if(qe(e,t))return;s.uniformMatrix3fv(this.addr,!1,t),Ye(e,t)}else{if(qe(e,n))return;tf.set(n),s.uniformMatrix3fv(this.addr,!1,tf),Ye(e,n)}}function i_(s,t){let e=this.cache,n=t.elements;if(n===void 0){if(qe(e,t))return;s.uniformMatrix4fv(this.addr,!1,t),Ye(e,t)}else{if(qe(e,n))return;Qd.set(n),s.uniformMatrix4fv(this.addr,!1,Qd),Ye(e,n)}}function s_(s,t){let e=this.cache;e[0]!==t&&(s.uniform1i(this.addr,t),e[0]=t)}function r_(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(qe(e,t))return;s.uniform2iv(this.addr,t),Ye(e,t)}}function a_(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(qe(e,t))return;s.uniform3iv(this.addr,t),Ye(e,t)}}function o_(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(qe(e,t))return;s.uniform4iv(this.addr,t),Ye(e,t)}}function l_(s,t){let e=this.cache;e[0]!==t&&(s.uniform1ui(this.addr,t),e[0]=t)}function c_(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(qe(e,t))return;s.uniform2uiv(this.addr,t),Ye(e,t)}}function h_(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(qe(e,t))return;s.uniform3uiv(this.addr,t),Ye(e,t)}}function u_(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(qe(e,t))return;s.uniform4uiv(this.addr,t),Ye(e,t)}}function Ml(s){return s.version===0&&(s.compareFunction=ch,s.needsUpdate=!0),s}function d_(s,t,e){let n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i);let r;this.type===s.SAMPLER_2D_SHADOW?r=Ml(yf):r=vf,e.setTexture2D(t||r,i)}function f_(s,t,e){let n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTexture3D(t||Sf,i)}function p_(s,t,e){let n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i);let r;this.type===s.SAMPLER_CUBE_SHADOW?r=Ml(Mf):r=wf,e.setTextureCube(t||r,i)}function m_(s,t,e){let n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTexture2DArray(t||bf,i)}function g_(s){switch(s){case 5126:return Kx;case 35664:return jx;case 35665:return Qx;case 35666:return t_;case 35674:return e_;case 35675:return n_;case 35676:return i_;case 5124:case 35670:return s_;case 35667:case 35671:return r_;case 35668:case 35672:return a_;case 35669:case 35673:return o_;case 5125:return l_;case 36294:return c_;case 36295:return h_;case 36296:return u_;case 35678:case 36198:case 36298:case 36306:case 35682:return d_;case 35679:case 36299:case 36307:return f_;case 35680:case 36300:case 36308:case 36293:return p_;case 36289:case 36303:case 36311:case 36292:return m_}}function x_(s,t){s.uniform1fv(this.addr,t)}function __(s,t){let e=Qs(t,this.size,2);s.uniform2fv(this.addr,e)}function v_(s,t){let e=Qs(t,this.size,3);s.uniform3fv(this.addr,e)}function y_(s,t){let e=Qs(t,this.size,4);s.uniform4fv(this.addr,e)}function M_(s,t){let e=Qs(t,this.size,4);s.uniformMatrix2fv(this.addr,!1,e)}function b_(s,t){let e=Qs(t,this.size,9);s.uniformMatrix3fv(this.addr,!1,e)}function S_(s,t){let e=Qs(t,this.size,16);s.uniformMatrix4fv(this.addr,!1,e)}function w_(s,t){s.uniform1iv(this.addr,t)}function T_(s,t){s.uniform2iv(this.addr,t)}function E_(s,t){s.uniform3iv(this.addr,t)}function A_(s,t){s.uniform4iv(this.addr,t)}function R_(s,t){s.uniform1uiv(this.addr,t)}function C_(s,t){s.uniform2uiv(this.addr,t)}function I_(s,t){s.uniform3uiv(this.addr,t)}function P_(s,t){s.uniform4uiv(this.addr,t)}function L_(s,t,e){let n=this.cache,i=t.length,r=yl(e,i);qe(n,r)||(s.uniform1iv(this.addr,r),Ye(n,r));let a;this.type===s.SAMPLER_2D_SHADOW?a=Ml(yf):a=vf;for(let o=0;o!==i;++o)e.setTexture2D(t[o]||a,r[o])}function D_(s,t,e){let n=this.cache,i=t.length,r=yl(e,i);qe(n,r)||(s.uniform1iv(this.addr,r),Ye(n,r));for(let a=0;a!==i;++a)e.setTexture3D(t[a]||Sf,r[a])}function N_(s,t,e){let n=this.cache,i=t.length,r=yl(e,i);qe(n,r)||(s.uniform1iv(this.addr,r),Ye(n,r));let a;this.type===s.SAMPLER_CUBE_SHADOW?a=Ml(Mf):a=wf;for(let o=0;o!==i;++o)e.setTextureCube(t[o]||a,r[o])}function U_(s,t,e){let n=this.cache,i=t.length,r=yl(e,i);qe(n,r)||(s.uniform1iv(this.addr,r),Ye(n,r));for(let a=0;a!==i;++a)e.setTexture2DArray(t[a]||bf,r[a])}function F_(s){switch(s){case 5126:return x_;case 35664:return __;case 35665:return v_;case 35666:return y_;case 35674:return M_;case 35675:return b_;case 35676:return S_;case 5124:case 35670:return w_;case 35667:case 35671:return T_;case 35668:case 35672:return E_;case 35669:case 35673:return A_;case 5125:return R_;case 36294:return C_;case 36295:return I_;case 36296:return P_;case 35678:case 36198:case 36298:case 36306:case 35682:return L_;case 35679:case 36299:case 36307:return D_;case 35680:case 36300:case 36308:case 36293:return N_;case 36289:case 36303:case 36311:case 36292:return U_}}var wh=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=g_(e.type)}},Th=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=F_(e.type)}},Eh=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){let i=this.seq;for(let r=0,a=i.length;r!==a;++r){let o=i[r];o.setValue(t,e[o.id],n)}}},bh=/(\w+)(\])?(\[|\.)?/g;function nf(s,t){s.seq.push(t),s.map[t.id]=t}function O_(s,t,e){let n=s.name,i=n.length;for(bh.lastIndex=0;;){let r=bh.exec(n),a=bh.lastIndex,o=r[1],l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===i){nf(e,c===void 0?new wh(o,s,t):new Th(o,s,t));break}else{let u=e.map[o];u===void 0&&(u=new Eh(o),nf(e,u)),e=u}}}var Ks=class{constructor(t,e){this.seq=[],this.map={};let n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let a=0;a<n;++a){let o=t.getActiveUniform(e,a),l=t.getUniformLocation(e,o.name);O_(o,l,this)}let i=[],r=[];for(let a of this.seq)a.type===t.SAMPLER_2D_SHADOW||a.type===t.SAMPLER_CUBE_SHADOW||a.type===t.SAMPLER_2D_ARRAY_SHADOW?i.push(a):r.push(a);i.length>0&&(this.seq=i.concat(r))}setValue(t,e,n,i){let r=this.map[e];r!==void 0&&r.setValue(t,n,i)}setOptional(t,e,n){let i=e[n];i!==void 0&&this.setValue(t,n,i)}static upload(t,e,n,i){for(let r=0,a=e.length;r!==a;++r){let o=e[r],l=n[o.id];l.needsUpdate!==!1&&o.setValue(t,l.value,i)}}static seqWithValue(t,e){let n=[];for(let i=0,r=t.length;i!==r;++i){let a=t[i];a.id in e&&n.push(a)}return n}};function sf(s,t,e){let n=s.createShader(t);return s.shaderSource(n,e),s.compileShader(n),n}var z_=37297,k_=0;function B_(s,t){let e=s.split(`
`),n=[],i=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let a=i;a<r;a++){let o=a+1;n.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return n.join(`
`)}var rf=new Ot;function H_(s){ne._getMatrix(rf,ne.workingColorSpace,s);let t=`mat3( ${rf.elements.map(e=>e.toFixed(4))} )`;switch(ne.getTransfer(s)){case Er:return[t,"LinearTransferOETF"];case ue:return[t,"sRGBTransferOETF"];default:return Nt("WebGLProgram: Unsupported color space: ",s),[t,"LinearTransferOETF"]}}function af(s,t,e){let n=s.getShaderParameter(t,s.COMPILE_STATUS),r=(s.getShaderInfoLog(t)||"").trim();if(n&&r==="")return"";let a=/ERROR: 0:(\d+)/.exec(r);if(a){let o=parseInt(a[1]);return e.toUpperCase()+`

`+r+`

`+B_(s.getShaderSource(t),o)}else return r}function G_(s,t){let e=H_(t);return[`vec4 ${s}( vec4 value ) {`,`	return ${e[1]}( vec4( ${e[0]} * value.rgb, value.a ) );`,"}"].join(`
`)}var V_={[$c]:"Linear",[Zc]:"Reinhard",[Jc]:"Cineon",[Zr]:"ACESFilmic",[jc]:"AgX",[Qc]:"Neutral",[Kc]:"Custom"};function W_(s,t){let e=V_[t];return e===void 0?(Nt("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+s+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+s+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var _l=new k;function X_(){ne.getLuminanceCoefficients(_l);let s=_l.x.toFixed(4),t=_l.y.toFixed(4),e=_l.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function q_(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(aa).join(`
`)}function Y_(s){let t=[];for(let e in s){let n=s[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function $_(s,t){let e={},n=s.getProgramParameter(t,s.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){let r=s.getActiveAttrib(t,i),a=r.name,o=1;r.type===s.FLOAT_MAT2&&(o=2),r.type===s.FLOAT_MAT3&&(o=3),r.type===s.FLOAT_MAT4&&(o=4),e[a]={type:r.type,location:s.getAttribLocation(t,a),locationSize:o}}return e}function aa(s){return s!==""}function of(s,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return s.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows).replace(/NUM_LIGHT_PROBE_GRIDS/g,t.numLightProbeGrids)}function lf(s,t){return s.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var Z_=/^[ \t]*#include +<([\w\d./]+)>/gm;function Ah(s){return s.replace(Z_,J_)}function J_(s,t){let e=$t[t];if(e===void 0)throw new Error("THREE.WebGLProgram: Can not resolve #include <"+t+">");return Ah(e)}var K_=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function cf(s){return s.replace(K_,j_)}function j_(s,t,e,n){let i="";for(let r=parseInt(t);r<parseInt(e);r++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return i}function hf(s){let t=`precision ${s.precision} float;
	precision ${s.precision} int;
	precision ${s.precision} sampler2D;
	precision ${s.precision} samplerCube;
	precision ${s.precision} sampler3D;
	precision ${s.precision} sampler2DArray;
	precision ${s.precision} sampler2DShadow;
	precision ${s.precision} samplerCubeShadow;
	precision ${s.precision} sampler2DArrayShadow;
	precision ${s.precision} isampler2D;
	precision ${s.precision} isampler3D;
	precision ${s.precision} isamplerCube;
	precision ${s.precision} isampler2DArray;
	precision ${s.precision} usampler2D;
	precision ${s.precision} usampler3D;
	precision ${s.precision} usamplerCube;
	precision ${s.precision} usampler2DArray;
	`;return s.precision==="highp"?t+=`
#define HIGH_PRECISION`:s.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}var Q_={[$r]:"SHADOWMAP_TYPE_PCF",[$s]:"SHADOWMAP_TYPE_VSM"};function tv(s){return Q_[s.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var ev={[Zs]:"ENVMAP_MODE_REFRACTION"};function nv(s){return s.envMap===!1?"ENVMAP_MODE_REFLECTION":ev[s.envMapMode]||"ENVMAP_MODE_REFLECTION"}var iv={[Io]:"ENVMAP_BLENDING_MULTIPLY",[Ed]:"ENVMAP_BLENDING_MIX",[Ad]:"ENVMAP_BLENDING_ADD"};function sv(s){return s.envMap===!1?"ENVMAP_BLENDING_NONE":iv[s.combine]||"ENVMAP_BLENDING_NONE"}function rv(s,t,e,n){let i=s.getContext(),r=e.defines,a=e.vertexShader,o=e.fragmentShader,l=tv(e),c=e.envMapPMREM===!0?"ENVMAP_TYPE_PMREM":"ENVMAP_TYPE_CUBE",h=nv(e),u=sv(e),d=q_(e),f=Y_(r),m=i.createProgram(),x,p,g=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(x=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,f].filter(aa).join(`
`),x.length>0&&(x+=`
`),p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,f].filter(aa).join(`
`),p.length>0&&(p+=`
`)):(x=[hf(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,f,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.diffuseRoughnessMapUv?"#define DIFFUSE_ROUGHNESSMAP_UV "+e.diffuseRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexNormals?"#define HAS_NORMAL":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(aa).join(`
`),p=[hf(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,f,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+u:"",e.envMapPMREM?"#define ENVMAP_MAX_LOD "+e.envMapMaxLod+".0":"",e.envMapPMREM?"#define ENVMAP_SIZE "+e.envMapSize+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.diffuseRoughness?"#define USE_DIFFUSE_ROUGHNESS":"",e.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.retroreflection?"#define USE_RETROREFLECTION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas||e.batchingColor?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==oi?"#define TONE_MAPPING":"",e.toneMapping!==oi?$t.tonemapping_pars_fragment:"",e.toneMapping!==oi?W_("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",$t.colorspace_pars_fragment,G_("linearToOutputTexel",e.outputColorSpace),X_(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(aa).join(`
`)),a=Ah(a),a=of(a,e),a=lf(a,e),o=Ah(o),o=of(o,e),o=lf(o,e),a=cf(a),o=cf(o),e.isRawShaderMaterial!==!0&&(g=`#version 300 es
`,x=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+x,p=["#define varying in",e.glslVersion===hh?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===hh?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);let v=g+x+a,S=g+p+o,y=sf(i,i.VERTEX_SHADER,v),T=sf(i,i.FRAGMENT_SHADER,S);i.attachShader(m,y),i.attachShader(m,T),e.index0AttributeName!==void 0?i.bindAttribLocation(m,0,e.index0AttributeName):e.hasPositionAttribute===!0&&i.bindAttribLocation(m,0,"position"),i.linkProgram(m);function E(I){if(s.debug.checkShaderErrors){let N=i.getProgramInfoLog(m)||"",U=i.getShaderInfoLog(y)||"",W=i.getShaderInfoLog(T)||"",R=N.trim(),C=U.trim(),O=W.trim(),B=!0,nt=!0;if(i.getProgramParameter(m,i.LINK_STATUS)===!1)if(B=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(i,m,y,T);else{let q=af(i,y,"vertex"),et=af(i,T,"fragment");Ft("WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(m,i.VALIDATE_STATUS)+`

Material Name: `+I.name+`
Material Type: `+I.type+`

Program Info Log: `+R+`
`+q+`
`+et)}else R!==""?Nt("WebGLProgram: Program Info Log:",R):(C===""||O==="")&&(nt=!1);nt&&(I.diagnostics={runnable:B,programLog:R,vertexShader:{log:C,prefix:x},fragmentShader:{log:O,prefix:p}})}i.deleteShader(y),i.deleteShader(T),_=new Ks(i,m),w=$_(i,m)}let _;this.getUniforms=function(){return _===void 0&&E(this),_};let w;this.getAttributes=function(){return w===void 0&&E(this),w};let D=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return D===!1&&(D=i.getProgramParameter(m,z_)),D},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(m),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=k_++,this.cacheKey=t,this.usedTimes=1,this.program=m,this.vertexShader=y,this.fragmentShader=T,this}var av=0,Rh=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t,e,n){let i=this._getShaderCacheForMaterial(t);return i.has(e)===!1&&(i.add(e),e.usedTimes++),i.has(n)===!1&&(i.add(n),n.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderStage(t){return this._getShaderStage(t.vertexShader)}getFragmentShaderStage(t){return this._getShaderStage(t.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){let e=this.shaderCache,n=e.get(t);return n===void 0&&(n=new Ch(t),e.set(t,n)),n}},Ch=class{constructor(t){this.id=av++,this.code=t,this.usedTimes=0}};function ov(s){return s===$i||s===ea||s===na}function lv(s,t,e,n,i,r){let a=new Cr,o=new Rh,l=new Set,c=[],h=new Map,u=n.logarithmicDepthBuffer,d={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function f(_){return l.add(_),_===0?"uv":`uv${_}`}function m(_,w,D,I,N,U){let W=I.fog,R=N.geometry,C=_.isMeshStandardMaterial||_.isMeshLambertMaterial||_.isMeshPhongMaterial?I.environment:null,O=_.isMeshStandardMaterial||_.isMeshLambertMaterial&&!_.envMap||_.isMeshPhongMaterial&&!_.envMap,B=t.get(_.envMap||C,O),nt=d[_.type],q=n.precision;_.precision!==null&&(q=n.getMaxPrecision(_.precision),q!==_.precision&&Nt("WebGLProgram.getParameters:",_.precision,"not supported, using",q,"instead."));let et=R.morphAttributes.position||R.morphAttributes.normal||R.morphAttributes.color,st=et!==void 0?et.length:0,Et=0;R.morphAttributes.position!==void 0&&(Et=1),R.morphAttributes.normal!==void 0&&(Et=2),R.morphAttributes.color!==void 0&&(Et=3);let Ut,Z,lt,bt;if(nt){let _t=ci[nt];Ut=_t.vertexShader,Z=_t.fragmentShader}else{Ut=_.vertexShader,Z=_.fragmentShader;let _t=o.getVertexShaderStage(_),fe=o.getFragmentShaderStage(_);o.update(_,_t,fe),lt=_t.id,bt=fe.id}let Ct=s.getRenderTarget(),yt=s.state.buffers.depth.getReversed(),Bt=N.isInstancedMesh===!0,Ne=N.isBatchedMesh===!0,Dt=!!_.map,de=!!_.matcap,me=!!B,Qt=me&&B.isPMREMTexture===!0,en=!!_.aoMap,ke=!!_.lightMap,Mn=!!_.bumpMap&&_.wireframe===!1,Ee=!!_.normalMap,Qn=!!_.displacementMap,Ze=!!_.emissiveMap,Pn=!!_.metalnessMap,Ln=!!_.roughnessMap,Dn=_.anisotropy>0,F=_.clearcoat>0,Nn=_.diffuseRoughness>0,Me=_.dispersion>0,be=_.retroreflectivity>0,xt=_.iridescence>0,Be=_.sheen>0,Lt=_.transmission>0,zt=Dn&&!!_.anisotropyMap,A=F&&!!_.clearcoatMap,M=F&&!!_.clearcoatNormalMap,G=F&&!!_.clearcoatRoughnessMap,at=Nn&&!!_.diffuseRoughnessMap,tt=xt&&!!_.iridescenceMap,ht=xt&&!!_.iridescenceThicknessMap,mt=Be&&!!_.sheenColorMap,$=Be&&!!_.sheenRoughnessMap,J=!!_.specularMap,dt=!!_.specularColorMap,P=!!_.specularIntensityMap,K=Lt&&!!_.transmissionMap,Y=Lt&&!!_.thicknessMap,ft=!!_.gradientMap,ct=!!_.alphaMap,ut=_.alphaTest>0,Rt=!!_.alphaHash,Yt=!!_.extensions,ot=oi;_.toneMapped&&(Ct===null||Ct.isXRRenderTarget===!0)&&(ot=s.toneMapping);let It=Qt?B.isCompressedCubeTexture?B.image[0].mipmaps:B.mipmaps:null,Vt={shaderID:nt,shaderType:_.type,shaderName:_.name,vertexShader:Ut,fragmentShader:Z,defines:_.defines,customVertexShaderID:lt,customFragmentShaderID:bt,isRawShaderMaterial:_.isRawShaderMaterial===!0,glslVersion:_.glslVersion,precision:q,batching:Ne,batchingColor:Ne&&N._colorsTexture!==null,instancing:Bt,instancingColor:Bt&&N.instanceColor!==null,instancingMorph:Bt&&N.morphTexture!==null,outputColorSpace:Ct===null?s.outputColorSpace:Ct.isXRRenderTarget===!0?Ct.texture.colorSpace:ne.workingColorSpace,alphaToCoverage:!!_.alphaToCoverage,map:Dt,matcap:de,envMap:me,envMapMode:me&&B.mapping,envMapPMREM:Qt,envMapMaxLod:Qt?It.length-1:null,envMapSize:Qt?It[0].width:null,aoMap:en,lightMap:ke,bumpMap:Mn,normalMap:Ee,displacementMap:Qn,emissiveMap:Ze,normalMapObjectSpace:Ee&&_.normalMapType===Id,normalMapTangentSpace:Ee&&_.normalMapType===ia,packedNormalMap:Ee&&_.normalMapType===ia&&ov(_.normalMap.format),metalnessMap:Pn,roughnessMap:Ln,anisotropy:Dn,anisotropyMap:zt,clearcoat:F,clearcoatMap:A,clearcoatNormalMap:M,clearcoatRoughnessMap:G,diffuseRoughness:Nn,diffuseRoughnessMap:at,dispersion:Me,retroreflection:be,iridescence:xt,iridescenceMap:tt,iridescenceThicknessMap:ht,sheen:Be,sheenColorMap:mt,sheenRoughnessMap:$,specularMap:J,specularColorMap:dt,specularIntensityMap:P,transmission:Lt,transmissionMap:K,thicknessMap:Y,gradientMap:ft,opaque:_.transparent===!1&&_.blending===Yi&&_.alphaToCoverage===!1,alphaMap:ct,alphaTest:ut,alphaHash:Rt,combine:_.combine,mapUv:Dt&&f(_.map.channel),aoMapUv:en&&f(_.aoMap.channel),lightMapUv:ke&&f(_.lightMap.channel),bumpMapUv:Mn&&f(_.bumpMap.channel),normalMapUv:Ee&&f(_.normalMap.channel),displacementMapUv:Qn&&f(_.displacementMap.channel),emissiveMapUv:Ze&&f(_.emissiveMap.channel),metalnessMapUv:Pn&&f(_.metalnessMap.channel),roughnessMapUv:Ln&&f(_.roughnessMap.channel),anisotropyMapUv:zt&&f(_.anisotropyMap.channel),clearcoatMapUv:A&&f(_.clearcoatMap.channel),clearcoatNormalMapUv:M&&f(_.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:G&&f(_.clearcoatRoughnessMap.channel),diffuseRoughnessMapUv:at&&f(_.diffuseRoughnessMap.channel),iridescenceMapUv:tt&&f(_.iridescenceMap.channel),iridescenceThicknessMapUv:ht&&f(_.iridescenceThicknessMap.channel),sheenColorMapUv:mt&&f(_.sheenColorMap.channel),sheenRoughnessMapUv:$&&f(_.sheenRoughnessMap.channel),specularMapUv:J&&f(_.specularMap.channel),specularColorMapUv:dt&&f(_.specularColorMap.channel),specularIntensityMapUv:P&&f(_.specularIntensityMap.channel),transmissionMapUv:K&&f(_.transmissionMap.channel),thicknessMapUv:Y&&f(_.thicknessMap.channel),alphaMapUv:ct&&f(_.alphaMap.channel),vertexTangents:!!R.attributes.tangent&&(Ee||Dn),vertexNormals:!!R.attributes.normal,vertexColors:_.vertexColors,vertexAlphas:_.vertexColors===!0&&!!R.attributes.color&&R.attributes.color.itemSize===4,pointsUvs:N.isPoints===!0&&!!R.attributes.uv&&(Dt||ct),fog:!!W,useFog:_.fog===!0,fogExp2:!!W&&W.isFogExp2,flatShading:_.wireframe===!1&&(_.flatShading===!0||R.attributes.normal===void 0&&Ee===!1&&(_.isMeshLambertMaterial||_.isMeshPhongMaterial||_.isMeshStandardMaterial||_.isMeshPhysicalMaterial)),sizeAttenuation:_.sizeAttenuation===!0,logarithmicDepthBuffer:u,reversedDepthBuffer:yt,skinning:N.isSkinnedMesh===!0,hasPositionAttribute:R.attributes.position!==void 0,morphTargets:R.morphAttributes.position!==void 0,morphNormals:R.morphAttributes.normal!==void 0,morphColors:R.morphAttributes.color!==void 0,morphTargetsCount:st,morphTextureStride:Et,numSunLights:w.sun.length,numDirLights:w.directional.length,numPointLights:w.point.length,numSpotLights:w.spot.length,numSpotLightMaps:w.spotLightMap.length,numRectAreaLights:w.rectArea.length,numHemiLights:w.hemi.length,numSunLightShadows:w.sunShadowMap.length,numDirLightShadows:w.directionalShadowMap.length,numPointLightShadows:w.pointShadowMap.length,numSpotLightShadows:w.spotShadowMap.length,numSpotLightShadowsWithMaps:w.numSpotLightShadowsWithMaps,numLightProbes:w.numLightProbes,numLightProbeGrids:U.filter(_t=>_t.texture!==null).length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:_.dithering,shadowMapEnabled:s.shadowMap.enabled&&D.length>0,shadowMapType:s.shadowMap.type,toneMapping:ot,decodeVideoTexture:Dt&&_.map.isVideoTexture===!0&&ne.getTransfer(_.map.colorSpace)===ue,decodeVideoTextureEmissive:Ze&&_.emissiveMap.isVideoTexture===!0&&ne.getTransfer(_.emissiveMap.colorSpace)===ue,premultipliedAlpha:_.premultipliedAlpha,doubleSided:_.side===ai,flipSided:_.side===sn,useDepthPacking:_.depthPacking>=0,depthPacking:_.depthPacking||0,index0AttributeName:_.index0AttributeName,extensionClipCullDistance:Yt&&_.extensions.clipCullDistance===!0&&e.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Yt&&_.extensions.multiDraw===!0||Ne)&&e.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:e.has("KHR_parallel_shader_compile"),customProgramCacheKey:_.customProgramCacheKey()};return Vt.vertexUv1s=l.has(1),Vt.vertexUv2s=l.has(2),Vt.vertexUv3s=l.has(3),l.clear(),Vt}function x(_){let w=[];if(_.shaderID?w.push(_.shaderID):(w.push(_.customVertexShaderID),w.push(_.customFragmentShaderID)),_.defines!==void 0)for(let D in _.defines)w.push(D),w.push(_.defines[D]);return _.isRawShaderMaterial===!1&&(p(w,_),g(w,_),w.push(s.outputColorSpace)),w.push(_.customProgramCacheKey),w.join()}function p(_,w){_.push(w.precision),_.push(w.outputColorSpace),_.push(w.envMapMode),_.push(w.envMapPMREM),_.push(w.envMapMaxLod),_.push(w.envMapSize),_.push(w.mapUv),_.push(w.alphaMapUv),_.push(w.lightMapUv),_.push(w.aoMapUv),_.push(w.bumpMapUv),_.push(w.normalMapUv),_.push(w.displacementMapUv),_.push(w.emissiveMapUv),_.push(w.metalnessMapUv),_.push(w.roughnessMapUv),_.push(w.anisotropyMapUv),_.push(w.clearcoatMapUv),_.push(w.clearcoatNormalMapUv),_.push(w.clearcoatRoughnessMapUv),_.push(w.diffuseRoughnessMapUv),_.push(w.iridescenceMapUv),_.push(w.iridescenceThicknessMapUv),_.push(w.sheenColorMapUv),_.push(w.sheenRoughnessMapUv),_.push(w.specularMapUv),_.push(w.specularColorMapUv),_.push(w.specularIntensityMapUv),_.push(w.transmissionMapUv),_.push(w.thicknessMapUv),_.push(w.combine),_.push(w.fogExp2),_.push(w.sizeAttenuation),_.push(w.morphTargetsCount),_.push(w.numSunLights),_.push(w.numDirLights),_.push(w.numPointLights),_.push(w.numSpotLights),_.push(w.numSpotLightMaps),_.push(w.numHemiLights),_.push(w.numRectAreaLights),_.push(w.numSunLightShadows),_.push(w.numDirLightShadows),_.push(w.numPointLightShadows),_.push(w.numSpotLightShadows),_.push(w.numSpotLightShadowsWithMaps),_.push(w.numLightProbes),_.push(w.numLightProbeGrids),_.push(w.shadowMapType),_.push(w.toneMapping),_.push(w.numClippingPlanes),_.push(w.numClipIntersection),_.push(w.depthPacking)}function g(_,w){a.disableAll(),w.instancing&&a.enable(0),w.instancingColor&&a.enable(1),w.instancingMorph&&a.enable(2),w.matcap&&a.enable(3),w.envMap&&a.enable(4),w.normalMapObjectSpace&&a.enable(5),w.normalMapTangentSpace&&a.enable(6),w.clearcoat&&a.enable(7),w.iridescence&&a.enable(8),w.alphaTest&&a.enable(9),w.vertexColors&&a.enable(10),w.vertexAlphas&&a.enable(11),w.vertexUv1s&&a.enable(12),w.vertexUv2s&&a.enable(13),w.vertexUv3s&&a.enable(14),w.vertexTangents&&a.enable(15),w.anisotropy&&a.enable(16),w.alphaHash&&a.enable(17),w.batching&&a.enable(18),w.dispersion&&a.enable(19),w.retroreflection&&a.enable(24),w.diffuseRoughness&&a.enable(25),w.batchingColor&&a.enable(20),w.gradientMap&&a.enable(21),w.packedNormalMap&&a.enable(22),w.vertexNormals&&a.enable(23),_.push(a.mask),a.disableAll(),w.fog&&a.enable(0),w.useFog&&a.enable(1),w.flatShading&&a.enable(2),w.logarithmicDepthBuffer&&a.enable(3),w.reversedDepthBuffer&&a.enable(4),w.skinning&&a.enable(5),w.morphTargets&&a.enable(6),w.morphNormals&&a.enable(7),w.morphColors&&a.enable(8),w.premultipliedAlpha&&a.enable(9),w.shadowMapEnabled&&a.enable(10),w.doubleSided&&a.enable(11),w.flipSided&&a.enable(12),w.useDepthPacking&&a.enable(13),w.dithering&&a.enable(14),w.transmission&&a.enable(15),w.sheen&&a.enable(16),w.opaque&&a.enable(17),w.pointsUvs&&a.enable(18),w.decodeVideoTexture&&a.enable(19),w.decodeVideoTextureEmissive&&a.enable(20),w.alphaToCoverage&&a.enable(21),w.numLightProbeGrids>0&&a.enable(22),w.hasPositionAttribute&&a.enable(23),_.push(a.mask)}function v(_){let w=d[_.type],D;if(w){let I=ci[w];D=Wd.clone(I.uniforms)}else D=_.uniforms;return D}function S(_,w){let D=h.get(w);return D!==void 0?++D.usedTimes:(D=new rv(s,w,_,i),c.push(D),h.set(w,D)),D}function y(_){if(--_.usedTimes===0){let w=c.indexOf(_);c[w]=c[c.length-1],c.pop(),h.delete(_.cacheKey),_.destroy()}}function T(_){o.remove(_)}function E(){o.dispose()}return{getParameters:m,getProgramCacheKey:x,getUniforms:v,acquireProgram:S,releaseProgram:y,releaseShaderCache:T,programs:c,dispose:E}}function cv(){let s=new WeakMap;function t(a){return s.has(a)}function e(a){let o=s.get(a);return o===void 0&&(o={},s.set(a,o)),o}function n(a){s.delete(a)}function i(a,o,l){s.get(a)[o]=l}function r(){s=new WeakMap}return{has:t,get:e,remove:n,update:i,dispose:r}}function hv(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.material.id!==t.material.id?s.material.id-t.material.id:s.materialVariant!==t.materialVariant?s.materialVariant-t.materialVariant:s.z!==t.z?s.z-t.z:s.id-t.id}function uf(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.z!==t.z?t.z-s.z:s.id-t.id}function df(){let s=[],t=0,e=[],n=[],i=[];function r(){t=0,e.length=0,n.length=0,i.length=0}function a(d){let f=0;return d.isInstancedMesh&&(f+=2),d.isSkinnedMesh&&(f+=1),f}function o(d,f,m,x,p,g){let v=s[t];return v===void 0?(v={id:d.id,object:d,geometry:f,material:m,materialVariant:a(d),groupOrder:x,renderOrder:d.renderOrder,z:p,group:g},s[t]=v):(v.id=d.id,v.object=d,v.geometry=f,v.material=m,v.materialVariant=a(d),v.groupOrder=x,v.renderOrder=d.renderOrder,v.z=p,v.group=g),t++,v}function l(d,f,m,x,p,g,v){v.reversedDepth===!0&&(p=-p);let S=o(d,f,m,x,p,g);m.transmission>0?n.push(S):m.transparent===!0?i.push(S):e.push(S)}function c(d,f,m,x,p,g){let v=o(d,f,m,x,p,g);m.transmission>0?n.unshift(v):m.transparent===!0?i.unshift(v):e.unshift(v)}function h(d,f){e.length>1&&e.sort(d||hv),n.length>1&&n.sort(f||uf),i.length>1&&i.sort(f||uf)}function u(){for(let d=t,f=s.length;d<f;d++){let m=s[d];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:e,transmissive:n,transparent:i,init:r,push:l,unshift:c,finish:u,sort:h}}function uv(){let s=new WeakMap;function t(n,i){let r=s.get(n),a;return r===void 0?(a=new df,s.set(n,[a])):i>=r.length?(a=new df,r.push(a)):a=r[i],a}function e(){s=new WeakMap}return{get:t,dispose:e}}function dv(){let s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={direction:new k,color:new Pt};break;case"SpotLight":e={position:new k,direction:new k,color:new Pt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new k,color:new Pt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new k,skyColor:new Pt,groundColor:new Pt};break;case"RectAreaLight":e={color:new Pt,position:new k,halfWidth:new k,halfHeight:new k};break}return s[t.id]=e,e}}}function fv(){let s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Wt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Wt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Wt,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[t.id]=e,e}}}var pv=0;function mv(s,t){return(t.castShadow?2:0)-(s.castShadow?2:0)+(t.map?1:0)-(s.map?1:0)}function gv(s){let t=new dv,e=fv(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new k);let i=new k,r=new ae,a=new ae;function o(c){let h=0,u=0,d=0;for(let U=0;U<9;U++)n.probe[U].set(0,0,0);let f=0,m=0,x=0,p=0,g=0,v=0,S=0,y=0,T=0,E=0,_=0,w=0,D=0,I=0;c.sort(mv);for(let U=0,W=c.length;U<W;U++){let R=c[U],C=R.color,O=R.intensity,B=R.distance,nt=null;if(R.shadow&&R.shadow.map&&(R.shadow.map.texture.format===$i?nt=R.shadow.map.texture:nt=R.shadow.map.depthTexture||R.shadow.map.texture),R.isAmbientLight)h+=C.r*O,u+=C.g*O,d+=C.b*O;else if(R.isLightProbe){for(let q=0;q<9;q++)n.probe[q].addScaledVector(R.sh.coefficients[q],O);I++}else if(R.isSunLight){let q=t.get(R);if(q.color.copy(R.color).multiplyScalar(R.intensity),R.castShadow){let et=R.shadow,st=e.get(R);st.shadowIntensity=et.intensity,st.shadowBias=et.bias,st.shadowNormalBias=et.normalBias,st.shadowRadius=et.radius,st.shadowMapSize.copy(et.mapSize).multiply(et.getFrameExtents()),n.sunShadow[m]=st,n.sunShadowMap[m]=nt;let Et=et.getViewportCount();for(let Ut=0;Ut<Et;Ut++)n.sunShadowMatrix[x+Ut]=et.getMatrix(Ut),n.sunShadowCascade[x+Ut]=et._cascadeData[Ut];x+=Et,m++}n.sun[f]=q,f++}else if(R.isDirectionalLight){let q=t.get(R);if(q.color.copy(R.color).multiplyScalar(R.intensity),R.castShadow){let et=R.shadow,st=e.get(R);st.shadowIntensity=et.intensity,st.shadowBias=et.bias,st.shadowNormalBias=et.normalBias,st.shadowRadius=et.radius,st.shadowMapSize=et.mapSize,n.directionalShadow[p]=st,n.directionalShadowMap[p]=nt,n.directionalShadowMatrix[p]=R.shadow.matrix,T++}n.directional[p]=q,p++}else if(R.isSpotLight){let q=t.get(R);q.position.setFromMatrixPosition(R.matrixWorld),q.color.copy(C).multiplyScalar(O),q.distance=B,q.coneCos=Math.cos(R.angle),q.penumbraCos=Math.cos(R.angle*(1-R.penumbra)),q.decay=R.decay,n.spot[v]=q;let et=R.shadow;if(R.map&&(n.spotLightMap[w]=R.map,w++,et.updateMatrices(R),R.castShadow&&D++),n.spotLightMatrix[v]=et.matrix,R.castShadow){let st=e.get(R);st.shadowIntensity=et.intensity,st.shadowBias=et.bias,st.shadowNormalBias=et.normalBias,st.shadowRadius=et.radius,st.shadowMapSize=et.mapSize,n.spotShadow[v]=st,n.spotShadowMap[v]=nt,_++}v++}else if(R.isRectAreaLight){let q=t.get(R);q.color.copy(C).multiplyScalar(O),q.halfWidth.set(R.width*.5,0,0),q.halfHeight.set(0,R.height*.5,0),n.rectArea[S]=q,S++}else if(R.isPointLight){let q=t.get(R);if(q.color.copy(R.color).multiplyScalar(R.intensity),q.distance=R.distance,q.decay=R.decay,R.castShadow){let et=R.shadow,st=e.get(R);st.shadowIntensity=et.intensity,st.shadowBias=et.bias,st.shadowNormalBias=et.normalBias,st.shadowRadius=et.radius,st.shadowMapSize=et.mapSize,st.shadowCameraNear=et.camera.near,st.shadowCameraFar=et.camera.far,n.pointShadow[g]=st,n.pointShadowMap[g]=nt,n.pointShadowMatrix[g]=R.shadow.matrix,E++}n.point[g]=q,g++}else if(R.isHemisphereLight){let q=t.get(R);q.skyColor.copy(R.color).multiplyScalar(O),q.groundColor.copy(R.groundColor).multiplyScalar(O),n.hemi[y]=q,y++}}S>0&&(s.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=vt.LTC_FLOAT_1,n.rectAreaLTC2=vt.LTC_FLOAT_2):(n.rectAreaLTC1=vt.LTC_HALF_1,n.rectAreaLTC2=vt.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=d;let N=n.hash;(N.sunLength!==f||N.directionalLength!==p||N.pointLength!==g||N.spotLength!==v||N.rectAreaLength!==S||N.hemiLength!==y||N.numSunShadows!==m||N.numDirectionalShadows!==T||N.numPointShadows!==E||N.numSpotShadows!==_||N.numSpotMaps!==w||N.numLightProbes!==I)&&(n.sun.length=f,n.directional.length=p,n.spot.length=v,n.rectArea.length=S,n.point.length=g,n.hemi.length=y,n.sunShadow.length=m,n.sunShadowMap.length=m,n.sunShadowMatrix.length=x,n.sunShadowCascade.length=x,n.directionalShadow.length=T,n.directionalShadowMap.length=T,n.directionalShadowMatrix.length=T,n.pointShadow.length=E,n.pointShadowMap.length=E,n.pointShadowMatrix.length=E,n.spotShadow.length=_,n.spotShadowMap.length=_,n.spotLightMatrix.length=_+w-D,n.spotLightMap.length=w,n.numSpotLightShadowsWithMaps=D,n.numLightProbes=I,N.sunLength=f,N.directionalLength=p,N.pointLength=g,N.spotLength=v,N.rectAreaLength=S,N.hemiLength=y,N.numSunShadows=m,N.numDirectionalShadows=T,N.numPointShadows=E,N.numSpotShadows=_,N.numSpotMaps=w,N.numLightProbes=I,n.version=pv++)}function l(c,h){let u=0,d=0,f=0,m=0,x=0,p=0,g=h.matrixWorldInverse;for(let v=0,S=c.length;v<S;v++){let y=c[v];if(y.isSunLight){let T=n.sun[u];T.direction.setFromMatrixPosition(y.matrixWorld),T.direction.transformDirection(g),u++}else if(y.isDirectionalLight){let T=n.directional[d];T.direction.setFromMatrixPosition(y.matrixWorld),i.setFromMatrixPosition(y.target.matrixWorld),T.direction.sub(i),T.direction.transformDirection(g),d++}else if(y.isSpotLight){let T=n.spot[m];T.position.setFromMatrixPosition(y.matrixWorld),T.position.applyMatrix4(g),T.direction.setFromMatrixPosition(y.matrixWorld),i.setFromMatrixPosition(y.target.matrixWorld),T.direction.sub(i),T.direction.transformDirection(g),m++}else if(y.isRectAreaLight){let T=n.rectArea[x];T.position.setFromMatrixPosition(y.matrixWorld),T.position.applyMatrix4(g),a.identity(),r.copy(y.matrixWorld),r.premultiply(g),a.extractRotation(r),T.halfWidth.set(y.width*.5,0,0),T.halfHeight.set(0,y.height*.5,0),T.halfWidth.applyMatrix4(a),T.halfHeight.applyMatrix4(a),x++}else if(y.isPointLight){let T=n.point[f];T.position.setFromMatrixPosition(y.matrixWorld),T.position.applyMatrix4(g),f++}else if(y.isHemisphereLight){let T=n.hemi[p];T.direction.setFromMatrixPosition(y.matrixWorld),T.direction.transformDirection(g),p++}}}return{setup:o,setupView:l,state:n}}function ff(s){let t=new gv(s),e=[],n=[],i=[];function r(u){h.camera=u,e.length=0,n.length=0,i.length=0}function a(u){u.isLightProbeGrid?i.push(u):e.push(u)}function o(u){n.push(u)}function l(){t.setup(e),i.sort((u,d)=>u.priority-d.priority||u.id-d.id)}function c(u){t.setupView(e,u)}let h={lightsArray:e,shadowsArray:n,lightProbeGridArray:i,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:h,setupLights:l,setupLightsView:c,pushLight:a,pushShadow:o}}function xv(s){let t=new WeakMap;function e(i,r=0){let a=t.get(i),o;return a===void 0?(o=new ff(s),t.set(i,[o])):r>=a.length?(o=new ff(s),a.push(o)):o=a[r],o}function n(){t=new WeakMap}return{get:e,dispose:n}}var _v=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,vv=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,yv=[new k(1,0,0),new k(-1,0,0),new k(0,1,0),new k(0,-1,0),new k(0,0,1),new k(0,0,-1)],Mv=[new k(0,-1,0),new k(0,-1,0),new k(0,0,1),new k(0,0,-1),new k(0,-1,0),new k(0,-1,0)],pf=new ae,ra=new k,Sh=new k;function bv(s,t,e){let n=new Gi,i=new Wt,r=new Wt,a=new Se,o=new go,l=new xo,c={},h=e.maxTextureSize,u={[ri]:sn,[sn]:ri,[ai]:ai},d=new An({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Wt},radius:{value:4}},vertexShader:_v,fragmentShader:vv}),f=d.clone();f.defines.HORIZONTAL_PASS=1;let m=new Xe;m.setAttribute("position",new Ce(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let x=new re(m,d),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=$r;let g=this.type;this.render=function(E,_,w){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||E.length===0)return;this.type===od&&(Nt("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=$r);let D=s.getRenderTarget(),I=s.getActiveCubeFace(),N=s.getActiveMipmapLevel(),U=s.state;U.setBlending(us),U.buffers.depth.getReversed()===!0?U.buffers.color.setClear(0,0,0,0):U.buffers.color.setClear(1,1,1,1),U.buffers.depth.setTest(!0),U.setScissorTest(!1);let W=g!==this.type;W&&_.traverse(function(R){R.material&&(Array.isArray(R.material)?R.material.forEach(C=>C.needsUpdate=!0):R.material.needsUpdate=!0)});for(let R=0,C=E.length;R<C;R++){let O=E[R],B=O.shadow;if(B===void 0){Nt("WebGLShadowMap:",O,"has no shadow.");continue}if(B.autoUpdate===!1&&B.needsUpdate===!1)continue;i.copy(B.mapSize);let nt=B.getFrameExtents();i.multiply(nt),r.copy(B.mapSize),(i.x>h||i.y>h)&&(i.x>h&&(r.x=Math.floor(h/nt.x),i.x=r.x*nt.x,B.mapSize.x=r.x),i.y>h&&(r.y=Math.floor(h/nt.y),i.y=r.y*nt.y,B.mapSize.y=r.y));let q=s.state.buffers.depth.getReversed();if(B.camera._reversedDepth=q,B.map===null||W===!0){if(B.map!==null&&(B.map.depthTexture!==null&&(B.map.depthTexture.dispose(),B.map.depthTexture=null),B.map.dispose()),this.type===$s){if(O.isPointLight){Nt("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}B.map=new _n(i.x,i.y,{format:$i,type:qn,minFilter:gn,magFilter:gn,generateMipmaps:!1}),B.map.texture.name=O.name+".shadowMap",B.map.depthTexture=new Si(i.x,i.y,On),B.map.depthTexture.name=O.name+".shadowMapDepth",B.map.depthTexture.format=yi,B.map.depthTexture.compareFunction=null,B.map.depthTexture.minFilter=tn,B.map.depthTexture.magFilter=tn}else O.isPointLight?(B.map=new oa(i.x),B.map.depthTexture=new Or(i.x,Xn)):(B.map=new _n(i.x,i.y),B.map.depthTexture=new Si(i.x,i.y,Xn)),B.map.depthTexture.name=O.name+".shadowMap",B.map.depthTexture.format=yi,this.type===$r?(B.map.depthTexture.compareFunction=q?lh:oh,B.map.depthTexture.minFilter=gn,B.map.depthTexture.magFilter=gn):(B.map.depthTexture.compareFunction=null,B.map.depthTexture.minFilter=tn,B.map.depthTexture.magFilter=tn);B.camera.updateProjectionMatrix()}B.map.isWebGLCubeRenderTarget!==!0&&(B.map.width!==i.x||B.map.height!==i.y)&&B.map.setSize(i.x,i.y);let et=B.map.isWebGLCubeRenderTarget?6:B.getViewportCount();O.isPointLight!==!0&&B.updateMatrices(O,w);let st=(B.camera.layers.mask&4294967294)!==0?B.camera.layers:w.layers;for(let Et=0;Et<et;Et++){let Ut=B.getCamera(Et);if(O.isPointLight){let Z=B.camera,lt=B.matrix,bt=O.distance||Z.far;bt!==Z.far&&(Z.far=bt,Z.updateProjectionMatrix()),ra.setFromMatrixPosition(O.matrixWorld),Z.position.copy(ra),Sh.copy(Z.position),Sh.add(yv[Et]),Z.up.copy(Mv[Et]),Z.lookAt(Sh),Z.updateMatrixWorld(),lt.makeTranslation(-ra.x,-ra.y,-ra.z),pf.multiplyMatrices(Z.projectionMatrix,Z.matrixWorldInverse),B._frustum.setFromProjectionMatrix(pf,Z.coordinateSystem,Z.reversedDepth)}if(B.map.isWebGLCubeRenderTarget)s.setRenderTarget(B.map,Et),s.clear();else{Et===0&&(s.setRenderTarget(B.map),s.clear());let Z=B.getViewport(Et);a.set(r.x*Z.x,r.y*Z.y,r.x*Z.z,r.y*Z.w),U.viewport(a)}n=B.getFrustum(Et),y(_,w,Ut,O,st,this.type)}B.isPointLightShadow!==!0&&this.type===$s&&v(B,w),B.needsUpdate=!1}g=this.type,p.needsUpdate=!1,s.setRenderTarget(D,I,N)};function v(E,_){let w=t.update(x);d.defines.VSM_SAMPLES!==E.blurSamples&&(d.defines.VSM_SAMPLES=E.blurSamples,f.defines.VSM_SAMPLES=E.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),E.mapPass===null?E.mapPass=new _n(i.x,i.y,{format:$i,type:qn}):(E.mapPass.width!==E.map.width||E.mapPass.height!==E.map.height)&&E.mapPass.setSize(E.map.width,E.map.height),d.uniforms.shadow_pass.value=E.map.depthTexture,d.uniforms.resolution.value.set(E.map.width,E.map.height),d.uniforms.radius.value=E.radius,s.setRenderTarget(E.mapPass),s.clear(),s.renderBufferDirect(_,null,w,d,x,null),f.uniforms.shadow_pass.value=E.mapPass.texture,f.uniforms.resolution.value.set(E.map.width,E.map.height),f.uniforms.radius.value=E.radius,s.setRenderTarget(E.map),s.clear(),s.renderBufferDirect(_,null,w,f,x,null)}function S(E,_,w,D){let I=null,N=w.isPointLight===!0?E.customDistanceMaterial:E.customDepthMaterial;if(N!==void 0)I=N;else if(I=w.isPointLight===!0?l:o,s.localClippingEnabled&&_.clipShadows===!0&&Array.isArray(_.clippingPlanes)&&_.clippingPlanes.length!==0||_.displacementMap&&_.displacementScale!==0||_.alphaMap&&_.alphaTest>0||_.map&&_.alphaTest>0||_.alphaToCoverage===!0){let U=I.uuid,W=_.uuid,R=c[U];R===void 0&&(R={},c[U]=R);let C=R[W];C===void 0&&(C=I.clone(),R[W]=C,_.addEventListener("dispose",T)),I=C}if(I.visible=_.visible,I.wireframe=_.wireframe,D===$s?I.side=_.shadowSide!==null?_.shadowSide:_.side:I.side=_.shadowSide!==null?_.shadowSide:u[_.side],I.alphaMap=_.alphaMap,I.alphaTest=_.alphaToCoverage===!0?.5:_.alphaTest,I.map=_.map,I.clipShadows=_.clipShadows,I.clippingPlanes=_.clippingPlanes,I.clipIntersection=_.clipIntersection,I.displacementMap=_.displacementMap,I.displacementScale=_.displacementScale,I.displacementBias=_.displacementBias,I.wireframeLinewidth=_.wireframeLinewidth,I.linewidth=_.linewidth,w.isPointLight===!0&&I.isMeshDistanceMaterial===!0){let U=s.properties.get(I);U.light=w}return I}function y(E,_,w,D,I,N){if(E.visible===!1)return;if(E.layers.test(I)&&(E.isMesh||E.isLine||E.isPoints)&&(E.castShadow||E.receiveShadow&&N===$s)&&(!E.frustumCulled||E.intersectsFrustum(n))){E.modelViewMatrix.multiplyMatrices(w.matrixWorldInverse,E.matrixWorld);let R=t.update(E),C=E.material;if(Array.isArray(C)){let O=R.groups;for(let B=0,nt=O.length;B<nt;B++){let q=O[B],et=C[q.materialIndex];if(et&&et.visible){let st=S(E,et,D,N);E.onBeforeShadow(s,E,_,w,R,st,q),s.renderBufferDirect(w,null,R,st,E,q),E.onAfterShadow(s,E,_,w,R,st,q)}}}else if(C.visible){let O=S(E,C,D,N);E.onBeforeShadow(s,E,_,w,R,O,null),s.renderBufferDirect(w,null,R,O,E,null),E.onAfterShadow(s,E,_,w,R,O,null)}}let W=E.children;for(let R=0,C=W.length;R<C;R++)y(W[R],_,w,D,I,N)}function T(E){E.target.removeEventListener("dispose",T);for(let w in c){let D=c[w],I=E.target.uuid;I in D&&(D[I].dispose(),delete D[I])}}}function Sv(s,t){function e(){let P=!1,K=new Se,Y=null,ft=new Se(0,0,0,0);return{setMask:function(ct){Y!==ct&&!P&&(s.colorMask(ct,ct,ct,ct),Y=ct)},setLocked:function(ct){P=ct},setClear:function(ct,ut,Rt,Yt,ot){ot===!0&&(ct*=Yt,ut*=Yt,Rt*=Yt),K.set(ct,ut,Rt,Yt),ft.equals(K)===!1&&(s.clearColor(ct,ut,Rt,Yt),ft.copy(K))},reset:function(){P=!1,Y=null,ft.set(-1,0,0,0)}}}function n(){let P=!1,K=!1,Y=null,ft=null,ct=null;return{setReversed:function(ut){if(K!==ut){let Rt=t.get("EXT_clip_control");ut?Rt.clipControlEXT(Rt.LOWER_LEFT_EXT,Rt.ZERO_TO_ONE_EXT):Rt.clipControlEXT(Rt.LOWER_LEFT_EXT,Rt.NEGATIVE_ONE_TO_ONE_EXT),K=ut;let Yt=ct;ct=null,this.setClear(Yt)}},getReversed:function(){return K},setTest:function(ut){ut?yt(s.DEPTH_TEST):Bt(s.DEPTH_TEST)},setMask:function(ut){Y!==ut&&!P&&(s.depthMask(ut),Y=ut)},setFunc:function(ut){if(K&&(ut=Hd[ut]),ft!==ut){switch(ut){case to:s.depthFunc(s.NEVER);break;case eo:s.depthFunc(s.ALWAYS);break;case no:s.depthFunc(s.LESS);break;case zs:s.depthFunc(s.LEQUAL);break;case io:s.depthFunc(s.EQUAL);break;case so:s.depthFunc(s.GEQUAL);break;case ro:s.depthFunc(s.GREATER);break;case ao:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}ft=ut}},setLocked:function(ut){P=ut},setClear:function(ut){ct!==ut&&(ct=ut,K&&(ut=1-ut),s.clearDepth(ut))},reset:function(){P=!1,Y=null,ft=null,ct=null,K=!1}}}function i(){let P=!1,K=null,Y=null,ft=null,ct=null,ut=null,Rt=null,Yt=null,ot=null;return{setTest:function(It){P||(It?yt(s.STENCIL_TEST):Bt(s.STENCIL_TEST))},setMask:function(It){K!==It&&!P&&(s.stencilMask(It),K=It)},setFunc:function(It,Vt,_t){(Y!==It||ft!==Vt||ct!==_t)&&(s.stencilFunc(It,Vt,_t),Y=It,ft=Vt,ct=_t)},setOp:function(It,Vt,_t){(ut!==It||Rt!==Vt||Yt!==_t)&&(s.stencilOp(It,Vt,_t),ut=It,Rt=Vt,Yt=_t)},setLocked:function(It){P=It},setClear:function(It){ot!==It&&(s.clearStencil(It),ot=It)},reset:function(){P=!1,K=null,Y=null,ft=null,ct=null,ut=null,Rt=null,Yt=null,ot=null}}}let r=new e,a=new n,o=new i,l={},c=new WeakMap,h={},u={},d={},f=new WeakMap,m=[],x=null,p=!1,g=null,v=null,S=null,y=null,T=null,E=null,_=null,w=new Pt(0,0,0),D=0,I=!1,N=null,U=null,W=null,R=null,C=null,O=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS),B=!1,nt=0,q=s.getParameter(s.VERSION);q.indexOf("WebGL")!==-1?(nt=parseFloat(/^WebGL (\d)/.exec(q)[1]),B=nt>=1):q.indexOf("OpenGL ES")!==-1&&(nt=parseFloat(/^OpenGL ES (\d)/.exec(q)[1]),B=nt>=2);let et=null,st={},Et=s.getParameter(s.SCISSOR_BOX),Ut=s.getParameter(s.VIEWPORT),Z=new Se().fromArray(Et),lt=new Se().fromArray(Ut);function bt(P,K,Y,ft){let ct=new Uint8Array(4),ut=s.createTexture();s.bindTexture(P,ut),s.texParameteri(P,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(P,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let Rt=0;Rt<Y;Rt++)P===s.TEXTURE_3D||P===s.TEXTURE_2D_ARRAY?s.texImage3D(K,0,s.RGBA,1,1,ft,0,s.RGBA,s.UNSIGNED_BYTE,ct):s.texImage2D(K+Rt,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,ct);return ut}let Ct={};Ct[s.TEXTURE_2D]=bt(s.TEXTURE_2D,s.TEXTURE_2D,1),Ct[s.TEXTURE_CUBE_MAP]=bt(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),Ct[s.TEXTURE_2D_ARRAY]=bt(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),Ct[s.TEXTURE_3D]=bt(s.TEXTURE_3D,s.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),yt(s.DEPTH_TEST),a.setFunc(zs),Mn(!1),Ee(Vc),yt(s.CULL_FACE),en(us);function yt(P){h[P]!==!0&&(s.enable(P),h[P]=!0)}function Bt(P){h[P]!==!1&&(s.disable(P),h[P]=!1)}function Ne(P,K){return d[P]!==K?(s.bindFramebuffer(P,K),d[P]=K,P===s.DRAW_FRAMEBUFFER&&(d[s.FRAMEBUFFER]=K),P===s.FRAMEBUFFER&&(d[s.DRAW_FRAMEBUFFER]=K),!0):!1}function Dt(P,K){let Y=m,ft=!1;if(P){Y=f.get(K),Y===void 0&&(Y=[],f.set(K,Y));let ct=P.textures;if(Y.length!==ct.length||Y[0]!==s.COLOR_ATTACHMENT0){for(let ut=0,Rt=ct.length;ut<Rt;ut++)Y[ut]=s.COLOR_ATTACHMENT0+ut;Y.length=ct.length,ft=!0}}else Y[0]!==s.BACK&&(Y[0]=s.BACK,ft=!0);ft&&s.drawBuffers(Y)}function de(P){return x!==P?(s.useProgram(P),x=P,!0):!1}let me={[ds]:s.FUNC_ADD,[cd]:s.FUNC_SUBTRACT,[hd]:s.FUNC_REVERSE_SUBTRACT};me[ud]=s.MIN,me[dd]=s.MAX;let Qt={[fd]:s.ZERO,[pd]:s.ONE,[md]:s.SRC_COLOR,[qc]:s.SRC_ALPHA,[Md]:s.SRC_ALPHA_SATURATE,[vd]:s.DST_COLOR,[xd]:s.DST_ALPHA,[gd]:s.ONE_MINUS_SRC_COLOR,[Yc]:s.ONE_MINUS_SRC_ALPHA,[yd]:s.ONE_MINUS_DST_COLOR,[_d]:s.ONE_MINUS_DST_ALPHA,[bd]:s.CONSTANT_COLOR,[Sd]:s.ONE_MINUS_CONSTANT_COLOR,[wd]:s.CONSTANT_ALPHA,[Td]:s.ONE_MINUS_CONSTANT_ALPHA};function en(P,K,Y,ft,ct,ut,Rt,Yt,ot,It){if(P===us){p===!0&&(Bt(s.BLEND),p=!1);return}if(p===!1&&(yt(s.BLEND),p=!0),P!==ld){if(P!==g||It!==I){if((v!==ds||T!==ds)&&(s.blendEquation(s.FUNC_ADD),v=ds,T=ds),It)switch(P){case Yi:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Ti:s.blendFunc(s.ONE,s.ONE);break;case Wc:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Xc:s.blendFuncSeparate(s.DST_COLOR,s.ONE_MINUS_SRC_ALPHA,s.ZERO,s.ONE);break;default:Ft("WebGLState: Invalid blending: ",P);break}else switch(P){case Yi:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Ti:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE,s.ONE,s.ONE);break;case Wc:Ft("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Xc:Ft("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Ft("WebGLState: Invalid blending: ",P);break}S=null,y=null,E=null,_=null,w.set(0,0,0),D=0,g=P,I=It}return}ct=ct||K,ut=ut||Y,Rt=Rt||ft,(K!==v||ct!==T)&&(s.blendEquationSeparate(me[K],me[ct]),v=K,T=ct),(Y!==S||ft!==y||ut!==E||Rt!==_)&&(s.blendFuncSeparate(Qt[Y],Qt[ft],Qt[ut],Qt[Rt]),S=Y,y=ft,E=ut,_=Rt),(Yt.equals(w)===!1||ot!==D)&&(s.blendColor(Yt.r,Yt.g,Yt.b,ot),w.copy(Yt),D=ot),g=P,I=!1}function ke(P,K){P.side===ai?Bt(s.CULL_FACE):yt(s.CULL_FACE);let Y=P.side===sn;K&&(Y=!Y),Mn(Y),P.blending===Yi&&P.transparent===!1?en(us):en(P.blending,P.blendEquation,P.blendSrc,P.blendDst,P.blendEquationAlpha,P.blendSrcAlpha,P.blendDstAlpha,P.blendColor,P.blendAlpha,P.premultipliedAlpha),a.setFunc(P.depthFunc),a.setTest(P.depthTest),a.setMask(P.depthWrite),r.setMask(P.colorWrite);let ft=P.stencilWrite;o.setTest(ft),ft&&(o.setMask(P.stencilWriteMask),o.setFunc(P.stencilFunc,P.stencilRef,P.stencilFuncMask),o.setOp(P.stencilFail,P.stencilZFail,P.stencilZPass)),Ze(P.polygonOffset,P.polygonOffsetFactor,P.polygonOffsetUnits),P.alphaToCoverage===!0?yt(s.SAMPLE_ALPHA_TO_COVERAGE):Bt(s.SAMPLE_ALPHA_TO_COVERAGE)}function Mn(P){N!==P&&(P?s.frontFace(s.CW):s.frontFace(s.CCW),N=P)}function Ee(P){P!==rd?(yt(s.CULL_FACE),P!==U&&(P===Vc?s.cullFace(s.BACK):P===ad?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):Bt(s.CULL_FACE),U=P}function Qn(P){P!==W&&(B&&s.lineWidth(P),W=P)}function Ze(P,K,Y){P?(yt(s.POLYGON_OFFSET_FILL),(R!==K||C!==Y)&&(R=K,C=Y,a.getReversed()&&(K=-K,Y=-Y),s.polygonOffset(K,Y))):Bt(s.POLYGON_OFFSET_FILL)}function Pn(P){P?yt(s.SCISSOR_TEST):Bt(s.SCISSOR_TEST)}function Ln(P){P===void 0&&(P=s.TEXTURE0+O-1),et!==P&&(s.activeTexture(P),et=P)}function Dn(P,K,Y){Y===void 0&&(et===null?Y=s.TEXTURE0+O-1:Y=et);let ft=st[Y];ft===void 0&&(ft={type:void 0,texture:void 0},st[Y]=ft),(ft.type!==P||ft.texture!==K)&&(et!==Y&&(s.activeTexture(Y),et=Y),s.bindTexture(P,K||Ct[P]),ft.type=P,ft.texture=K)}function F(){let P=st[et];P!==void 0&&P.type!==void 0&&(s.bindTexture(P.type,null),P.type=void 0,P.texture=void 0)}function Nn(){try{s.compressedTexImage2D(...arguments)}catch(P){Ft("WebGLState:",P)}}function Me(){try{s.compressedTexImage3D(...arguments)}catch(P){Ft("WebGLState:",P)}}function be(){try{s.texSubImage2D(...arguments)}catch(P){Ft("WebGLState:",P)}}function xt(){try{s.texSubImage3D(...arguments)}catch(P){Ft("WebGLState:",P)}}function Be(){try{s.compressedTexSubImage2D(...arguments)}catch(P){Ft("WebGLState:",P)}}function Lt(){try{s.compressedTexSubImage3D(...arguments)}catch(P){Ft("WebGLState:",P)}}function zt(){try{s.texStorage2D(...arguments)}catch(P){Ft("WebGLState:",P)}}function A(){try{s.texStorage3D(...arguments)}catch(P){Ft("WebGLState:",P)}}function M(){try{s.texImage2D(...arguments)}catch(P){Ft("WebGLState:",P)}}function G(){try{s.texImage3D(...arguments)}catch(P){Ft("WebGLState:",P)}}function at(P){return u[P]!==void 0?u[P]:s.getParameter(P)}function tt(P,K){u[P]!==K&&(s.pixelStorei(P,K),u[P]=K)}function ht(P){Z.equals(P)===!1&&(s.scissor(P.x,P.y,P.z,P.w),Z.copy(P))}function mt(P){lt.equals(P)===!1&&(s.viewport(P.x,P.y,P.z,P.w),lt.copy(P))}function $(P,K){let Y=c.get(K);Y===void 0&&(Y=new WeakMap,c.set(K,Y));let ft=Y.get(P);ft===void 0&&(ft=s.getUniformBlockIndex(K,P.name),s.uniformBlockBinding(K,ft,ft),Y.set(P,ft))}function J(P,K,Y){let ct=c.get(K).get(P);l[ct]!==Y&&(s.bindBufferBase(s.UNIFORM_BUFFER,ct,Y),l[ct]=Y)}function dt(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),a.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),s.pixelStorei(s.PACK_ALIGNMENT,4),s.pixelStorei(s.UNPACK_ALIGNMENT,4),s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,!1),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,s.BROWSER_DEFAULT_WEBGL),s.pixelStorei(s.PACK_ROW_LENGTH,0),s.pixelStorei(s.PACK_SKIP_PIXELS,0),s.pixelStorei(s.PACK_SKIP_ROWS,0),s.pixelStorei(s.UNPACK_ROW_LENGTH,0),s.pixelStorei(s.UNPACK_IMAGE_HEIGHT,0),s.pixelStorei(s.UNPACK_SKIP_PIXELS,0),s.pixelStorei(s.UNPACK_SKIP_ROWS,0),s.pixelStorei(s.UNPACK_SKIP_IMAGES,0),h={},u={},et=null,st={},d={},l={},f=new WeakMap,m=[],x=null,p=!1,g=null,v=null,S=null,y=null,T=null,E=null,_=null,w=new Pt(0,0,0),D=0,I=!1,N=null,U=null,W=null,R=null,C=null,Z.set(0,0,s.canvas.width,s.canvas.height),lt.set(0,0,s.canvas.width,s.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:yt,disable:Bt,bindFramebuffer:Ne,drawBuffers:Dt,useProgram:de,setBlending:en,setMaterial:ke,setFlipSided:Mn,setCullFace:Ee,setLineWidth:Qn,setPolygonOffset:Ze,setScissorTest:Pn,activeTexture:Ln,bindTexture:Dn,unbindTexture:F,compressedTexImage2D:Nn,compressedTexImage3D:Me,texImage2D:M,texImage3D:G,pixelStorei:tt,getParameter:at,updateUBOMapping:$,uniformBlockBinding:J,texStorage2D:zt,texStorage3D:A,texSubImage2D:be,texSubImage3D:xt,compressedTexSubImage2D:Be,compressedTexSubImage3D:Lt,scissor:ht,viewport:mt,reset:dt}}function wv(s,t,e,n,i,r,a){let o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Wt,h=new WeakMap,u=new Set,d,f=new WeakMap,m=new Set,x=new FinalizationRegistry(A=>m.delete(A)),p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(A,M){return p?new OffscreenCanvas(A,M):Ar("canvas")}function v(A,M,G){let at=1,tt=zt(A);if((tt.width>G||tt.height>G)&&(at=G/Math.max(tt.width,tt.height)),at<1)if(typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&A instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&A instanceof ImageBitmap||typeof VideoFrame<"u"&&A instanceof VideoFrame){let ht=Math.floor(at*tt.width),mt=Math.floor(at*tt.height);d===void 0&&(d=g(ht,mt));let $=M?g(ht,mt):d;return $.width=ht,$.height=mt,$.getContext("2d").drawImage(A,0,0,ht,mt),Nt("WebGLRenderer: Texture has been resized from ("+tt.width+"x"+tt.height+") to ("+ht+"x"+mt+")."),$}else return"data"in A&&Nt("WebGLRenderer: Image in DataTexture is too big ("+tt.width+"x"+tt.height+")."),A;return A}function S(A){return A.generateMipmaps}function y(A){s.generateMipmap(A)}function T(A){return A.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:A.isWebGL3DRenderTarget?s.TEXTURE_3D:A.isWebGLArrayRenderTarget||A.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function E(A,M,G,at,tt,ht=!1){if(A!==null){if(s[A]!==void 0)return s[A];Nt("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+A+"'")}let mt;at&&(mt=t.get("EXT_texture_norm16"),mt||Nt("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let $=M;if(M===s.RED&&(G===s.FLOAT&&($=s.R32F),G===s.HALF_FLOAT&&($=s.R16F),G===s.UNSIGNED_BYTE&&($=s.R8),G===s.UNSIGNED_SHORT&&mt&&($=mt.R16_EXT),G===s.SHORT&&mt&&($=mt.R16_SNORM_EXT)),M===s.RED_INTEGER&&(G===s.UNSIGNED_BYTE&&($=s.R8UI),G===s.UNSIGNED_SHORT&&($=s.R16UI),G===s.UNSIGNED_INT&&($=s.R32UI),G===s.BYTE&&($=s.R8I),G===s.SHORT&&($=s.R16I),G===s.INT&&($=s.R32I)),M===s.RG&&(G===s.FLOAT&&($=s.RG32F),G===s.HALF_FLOAT&&($=s.RG16F),G===s.UNSIGNED_BYTE&&($=s.RG8),G===s.UNSIGNED_SHORT&&mt&&($=mt.RG16_EXT),G===s.SHORT&&mt&&($=mt.RG16_SNORM_EXT)),M===s.RG_INTEGER&&(G===s.UNSIGNED_BYTE&&($=s.RG8UI),G===s.UNSIGNED_SHORT&&($=s.RG16UI),G===s.UNSIGNED_INT&&($=s.RG32UI),G===s.BYTE&&($=s.RG8I),G===s.SHORT&&($=s.RG16I),G===s.INT&&($=s.RG32I)),M===s.RGB_INTEGER&&(G===s.UNSIGNED_BYTE&&($=s.RGB8UI),G===s.UNSIGNED_SHORT&&($=s.RGB16UI),G===s.UNSIGNED_INT&&($=s.RGB32UI),G===s.BYTE&&($=s.RGB8I),G===s.SHORT&&($=s.RGB16I),G===s.INT&&($=s.RGB32I)),M===s.RGBA_INTEGER&&(G===s.UNSIGNED_BYTE&&($=s.RGBA8UI),G===s.UNSIGNED_SHORT&&($=s.RGBA16UI),G===s.UNSIGNED_INT&&($=s.RGBA32UI),G===s.BYTE&&($=s.RGBA8I),G===s.SHORT&&($=s.RGBA16I),G===s.INT&&($=s.RGBA32I)),M===s.RGB&&(G===s.UNSIGNED_SHORT&&mt&&($=mt.RGB16_EXT),G===s.SHORT&&mt&&($=mt.RGB16_SNORM_EXT),G===s.UNSIGNED_INT_5_9_9_9_REV&&($=s.RGB9_E5),G===s.UNSIGNED_INT_10F_11F_11F_REV&&($=s.R11F_G11F_B10F)),M===s.RGBA){let J=ht?Er:ne.getTransfer(tt);G===s.FLOAT&&($=s.RGBA32F),G===s.HALF_FLOAT&&($=s.RGBA16F),G===s.UNSIGNED_BYTE&&($=J===ue?s.SRGB8_ALPHA8:s.RGBA8),G===s.UNSIGNED_SHORT&&mt&&($=mt.RGBA16_EXT),G===s.SHORT&&mt&&($=mt.RGBA16_SNORM_EXT),G===s.UNSIGNED_SHORT_4_4_4_4&&($=s.RGBA4),G===s.UNSIGNED_SHORT_5_5_5_1&&($=s.RGB5_A1)}return($===s.R16F||$===s.R32F||$===s.RG16F||$===s.RG32F||$===s.RGBA16F||$===s.RGBA32F)&&t.get("EXT_color_buffer_float"),$}function _(A,M){let G;return A?M===null||M===Xn||M===ps?G=s.DEPTH24_STENCIL8:M===On?G=s.DEPTH32F_STENCIL8:M===Js&&(G=s.DEPTH24_STENCIL8,Nt("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):M===null||M===Xn||M===ps?G=s.DEPTH_COMPONENT24:M===On?G=s.DEPTH_COMPONENT32F:M===Js&&(G=s.DEPTH_COMPONENT16),G}function w(A,M){return S(A)===!0||A.isFramebufferTexture&&A.minFilter!==tn&&A.minFilter!==gn?Math.log2(Math.max(M.width,M.height))+1:A.mipmaps.length>0?A.mipmaps.length:A.isCompressedTexture&&Array.isArray(A.image)?M.mipmaps.length:1}function D(A){let M=new WeakRef(A);n.get(A).__ref=M,m.add(M),x.register(A,M,M)}function I(A){let M=n.get(A).__ref;M!==void 0&&(m.delete(M),x.unregister(M))}function N(A){W(A.target)}function U(A){R(A.target)}function W(A){A.removeEventListener("dispose",N),I(A),O(A),A.isVideoTexture&&h.delete(A),A.isHTMLTexture&&u.delete(A)}function R(A){A.removeEventListener("dispose",U),I(A),nt(A)}function C(){for(let A of m){let M=A.deref();M!==void 0&&(M.isRenderTarget===!0?R(M):W(M))}m.clear(),u.clear()}function O(A){let M=n.get(A);if(M.__webglInit===void 0)return;let G=A.source,at=f.get(G);if(at){let tt=at[M.__cacheKey];tt.usedTimes--,tt.usedTimes===0&&B(A),Object.keys(at).length===0&&f.delete(G)}n.remove(A)}function B(A){let M=n.get(A);s.deleteTexture(M.__webglTexture);let G=A.source,at=f.get(G);delete at[M.__cacheKey],a.memory.textures--}function nt(A){let M=n.get(A);M.__depthDisposeCallback&&M.__depthDisposeCallback();let G=A.depthTexture;if(G&&G.renderTarget===A&&W(G),A.isWebGLCubeRenderTarget)for(let tt=0;tt<6;tt++){if(Array.isArray(M.__webglFramebuffer[tt]))for(let ht=0;ht<M.__webglFramebuffer[tt].length;ht++)s.deleteFramebuffer(M.__webglFramebuffer[tt][ht]);else s.deleteFramebuffer(M.__webglFramebuffer[tt]);M.__webglDepthbuffer&&s.deleteRenderbuffer(M.__webglDepthbuffer[tt])}else{if(Array.isArray(M.__webglFramebuffer))for(let tt=0;tt<M.__webglFramebuffer.length;tt++)s.deleteFramebuffer(M.__webglFramebuffer[tt]);else s.deleteFramebuffer(M.__webglFramebuffer);if(M.__webglDepthbuffer&&s.deleteRenderbuffer(M.__webglDepthbuffer),M.__webglMultisampledFramebuffer&&s.deleteFramebuffer(M.__webglMultisampledFramebuffer),M.__webglColorRenderbuffer)for(let tt=0;tt<M.__webglColorRenderbuffer.length;tt++)M.__webglColorRenderbuffer[tt]&&s.deleteRenderbuffer(M.__webglColorRenderbuffer[tt]);M.__webglDepthRenderbuffer&&s.deleteRenderbuffer(M.__webglDepthRenderbuffer)}let at=A.textures;for(let tt=0,ht=at.length;tt<ht;tt++){let mt=n.get(at[tt]);mt.__webglTexture&&(s.deleteTexture(mt.__webglTexture),a.memory.textures--),n.remove(at[tt])}n.remove(A)}let q=0;function et(){q=0}function st(){return q}function Et(A){q=A}function Ut(){let A=q;return A>=i.maxTextures&&Nt("WebGLTextures: Trying to use "+(A+1)+" texture units while this GPU supports only "+i.maxTextures),q+=1,A}function Z(A){let M=[];return M.push(A.wrapS),M.push(A.wrapT),M.push(A.wrapR||0),M.push(A.magFilter),M.push(A.minFilter),M.push(A.anisotropy),M.push(A.internalFormat),M.push(A.format),M.push(A.type),M.push(A.generateMipmaps),M.push(A.mipmapsAutoUpdate),M.push(A.premultiplyAlpha),M.push(A.flipY),M.push(A.unpackAlignment),M.push(A.colorSpace),M.join()}function lt(A,M){let G=n.get(A);if(A.isVideoTexture&&Be(A),A.isRenderTargetTexture===!1&&A.isExternalTexture!==!0&&A.version>0&&G.__version!==A.version){let at=A.image;if(at===null)Nt("WebGLRenderer: Texture marked for update but no image data found.");else if(at.complete===!1)Nt("WebGLRenderer: Texture marked for update but image is incomplete");else{ke(G,A,M);return}}else A.isExternalTexture&&(G.__webglTexture=A.sourceTexture?A.sourceTexture:null);e.bindTexture(s.TEXTURE_2D,G.__webglTexture,s.TEXTURE0+M)}function bt(A,M){let G=n.get(A);if(A.isRenderTargetTexture===!1&&A.version>0&&G.__version!==A.version){ke(G,A,M);return}else A.isExternalTexture&&(G.__webglTexture=A.sourceTexture?A.sourceTexture:null);e.bindTexture(s.TEXTURE_2D_ARRAY,G.__webglTexture,s.TEXTURE0+M)}function Ct(A,M){let G=n.get(A);if(A.isRenderTargetTexture===!1&&A.version>0&&G.__version!==A.version){ke(G,A,M);return}e.bindTexture(s.TEXTURE_3D,G.__webglTexture,s.TEXTURE0+M)}function yt(A,M){let G=n.get(A);if(A.version>0&&G.__version!==A.version){Mn(G,A,M);return}e.bindTexture(s.TEXTURE_CUBE_MAP,G.__webglTexture,s.TEXTURE0+M)}let Bt={[ks]:s.REPEAT,[ei]:s.CLAMP_TO_EDGE,[oo]:s.MIRRORED_REPEAT},Ne={[tn]:s.NEAREST,[Rd]:s.NEAREST_MIPMAP_NEAREST,[Jr]:s.NEAREST_MIPMAP_LINEAR,[gn]:s.LINEAR,[Do]:s.LINEAR_MIPMAP_NEAREST,[Ei]:s.LINEAR_MIPMAP_LINEAR},Dt={[Ld]:s.NEVER,[ch]:s.ALWAYS,[Dd]:s.LESS,[oh]:s.LEQUAL,[Nd]:s.EQUAL,[lh]:s.GEQUAL,[Ud]:s.GREATER,[Fd]:s.NOTEQUAL};function de(A,M){if(M.type===On&&t.has("OES_texture_float_linear")===!1&&(M.magFilter===gn||M.magFilter===Do||M.magFilter===Jr||M.magFilter===Ei||M.minFilter===gn||M.minFilter===Do||M.minFilter===Jr||M.minFilter===Ei)&&Nt("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(A,s.TEXTURE_WRAP_S,Bt[M.wrapS]),s.texParameteri(A,s.TEXTURE_WRAP_T,Bt[M.wrapT]),(A===s.TEXTURE_3D||A===s.TEXTURE_2D_ARRAY)&&s.texParameteri(A,s.TEXTURE_WRAP_R,Bt[M.wrapR]),s.texParameteri(A,s.TEXTURE_MAG_FILTER,Ne[M.magFilter]),s.texParameteri(A,s.TEXTURE_MIN_FILTER,Ne[M.minFilter]),M.compareFunction&&(s.texParameteri(A,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(A,s.TEXTURE_COMPARE_FUNC,Dt[M.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(M.magFilter===tn||M.minFilter!==Jr&&M.minFilter!==Ei||M.type===On&&t.has("OES_texture_float_linear")===!1)return;if(M.anisotropy>1||n.get(M).__currentAnisotropy){let G=t.get("EXT_texture_filter_anisotropic");s.texParameterf(A,G.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(M.anisotropy,i.getMaxAnisotropy())),n.get(M).__currentAnisotropy=M.anisotropy}}}function me(A,M){let G=!1;A.__webglInit===void 0&&(A.__webglInit=!0,M.addEventListener("dispose",N),D(M));let at=M.source,tt=f.get(at);tt===void 0&&(tt={},f.set(at,tt));let ht=Z(M);if(ht!==A.__cacheKey){tt[ht]===void 0&&(tt[ht]={texture:s.createTexture(),usedTimes:0},a.memory.textures++,G=!0),tt[ht].usedTimes++;let mt=tt[A.__cacheKey];mt!==void 0&&(tt[A.__cacheKey].usedTimes--,mt.usedTimes===0&&B(M)),A.__cacheKey=ht,A.__webglTexture=tt[ht].texture}return G}function Qt(A,M,G){return Math.floor(Math.floor(A/G)/M)}function en(A,M,G,at){let ht=A.updateRanges;if(ht.length===0)e.texSubImage2D(s.TEXTURE_2D,0,0,0,M.width,M.height,G,at,M.data);else{ht.sort((P,K)=>P.start-K.start);let mt=0;for(let P=1;P<ht.length;P++){let K=ht[mt],Y=ht[P],ft=K.start+K.count,ct=Qt(Y.start,M.width,4),ut=Qt(K.start,M.width,4);Y.start<=ft+1&&ct===ut&&Qt(Y.start+Y.count-1,M.width,4)===ct?K.count=Math.max(K.count,Y.start+Y.count-K.start):(++mt,ht[mt]=Y)}ht.length=mt+1;let $=e.getParameter(s.UNPACK_ROW_LENGTH),J=e.getParameter(s.UNPACK_SKIP_PIXELS),dt=e.getParameter(s.UNPACK_SKIP_ROWS);e.pixelStorei(s.UNPACK_ROW_LENGTH,M.width);for(let P=0,K=ht.length;P<K;P++){let Y=ht[P],ft=Math.floor(Y.start/4),ct=Math.ceil(Y.count/4),ut=ft%M.width,Rt=Math.floor(ft/M.width),Yt=ct,ot=1;e.pixelStorei(s.UNPACK_SKIP_PIXELS,ut),e.pixelStorei(s.UNPACK_SKIP_ROWS,Rt),e.texSubImage2D(s.TEXTURE_2D,0,ut,Rt,Yt,ot,G,at,M.data)}A.clearUpdateRanges(),e.pixelStorei(s.UNPACK_ROW_LENGTH,$),e.pixelStorei(s.UNPACK_SKIP_PIXELS,J),e.pixelStorei(s.UNPACK_SKIP_ROWS,dt)}}function ke(A,M,G){let at=s.TEXTURE_2D;(M.isDataArrayTexture||M.isCompressedArrayTexture)&&(at=s.TEXTURE_2D_ARRAY),M.isData3DTexture&&(at=s.TEXTURE_3D);let tt=me(A,M),ht=M.source;e.bindTexture(at,A.__webglTexture,s.TEXTURE0+G);let mt=n.get(ht);if(ht.version!==mt.__version||tt===!0){if(e.activeTexture(s.TEXTURE0+G),(typeof ImageBitmap<"u"&&M.image instanceof ImageBitmap)===!1){let ot=ne.getPrimaries(ne.workingColorSpace),It=M.colorSpace===Ri?null:ne.getPrimaries(M.colorSpace),Vt=M.colorSpace===Ri||ot===It?s.NONE:s.BROWSER_DEFAULT_WEBGL;e.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,M.flipY),e.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),e.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Vt)}e.pixelStorei(s.UNPACK_ALIGNMENT,M.unpackAlignment);let J=v(M.image,!1,i.maxTextureSize);J=Lt(M,J);let dt=r.convert(M.format,M.colorSpace),P=r.convert(M.type),K=E(M.internalFormat,dt,P,M.normalized,M.colorSpace,M.isVideoTexture);de(at,M);let Y,ft=M.mipmaps,ct=M.isVideoTexture!==!0,ut=mt.__version===void 0||tt===!0,Rt=ht.dataReady,Yt=w(M,J);if(M.isDepthTexture)K=_(M.format===Ai,M.type),ut&&(ct?e.texStorage2D(s.TEXTURE_2D,1,K,J.width,J.height):e.texImage2D(s.TEXTURE_2D,0,K,J.width,J.height,0,dt,P,null));else if(M.isDataTexture)if(ft.length>0){ct&&ut&&e.texStorage2D(s.TEXTURE_2D,Yt,K,ft[0].width,ft[0].height);for(let ot=0,It=ft.length;ot<It;ot++)Y=ft[ot],ct?Rt&&e.texSubImage2D(s.TEXTURE_2D,ot,0,0,Y.width,Y.height,dt,P,Y.data):e.texImage2D(s.TEXTURE_2D,ot,K,Y.width,Y.height,0,dt,P,Y.data);M.generateMipmaps=!1}else ct?(ut&&e.texStorage2D(s.TEXTURE_2D,Yt,K,J.width,J.height),Rt&&en(M,J,dt,P)):e.texImage2D(s.TEXTURE_2D,0,K,J.width,J.height,0,dt,P,J.data);else if(M.isCompressedTexture)if(M.isCompressedArrayTexture){ct&&ut&&e.texStorage3D(s.TEXTURE_2D_ARRAY,Yt,K,ft[0].width,ft[0].height,J.depth);for(let ot=0,It=ft.length;ot<It;ot++)if(Y=ft[ot],M.format!==Yn)if(dt!==null)if(ct){if(Rt)if(M.layerUpdates.size>0){let Vt=gh(Y.width,Y.height,M.format,M.type);for(let _t of M.layerUpdates){let fe=Y.data.subarray(_t*Vt/Y.data.BYTES_PER_ELEMENT,(_t+1)*Vt/Y.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,ot,0,0,_t,Y.width,Y.height,1,dt,fe)}}else e.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,ot,0,0,0,Y.width,Y.height,J.depth,dt,Y.data)}else e.compressedTexImage3D(s.TEXTURE_2D_ARRAY,ot,K,Y.width,Y.height,J.depth,0,Y.data,0,0);else Nt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else ct?Rt&&e.texSubImage3D(s.TEXTURE_2D_ARRAY,ot,0,0,0,Y.width,Y.height,J.depth,dt,P,Y.data):e.texImage3D(s.TEXTURE_2D_ARRAY,ot,K,Y.width,Y.height,J.depth,0,dt,P,Y.data);M.layerUpdates.size>0&&M.clearLayerUpdates()}else{ct&&ut&&e.texStorage2D(s.TEXTURE_2D,Yt,K,ft[0].width,ft[0].height);for(let ot=0,It=ft.length;ot<It;ot++)Y=ft[ot],M.format!==Yn?dt!==null?ct?Rt&&e.compressedTexSubImage2D(s.TEXTURE_2D,ot,0,0,Y.width,Y.height,dt,Y.data):e.compressedTexImage2D(s.TEXTURE_2D,ot,K,Y.width,Y.height,0,Y.data):Nt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ct?Rt&&e.texSubImage2D(s.TEXTURE_2D,ot,0,0,Y.width,Y.height,dt,P,Y.data):e.texImage2D(s.TEXTURE_2D,ot,K,Y.width,Y.height,0,dt,P,Y.data)}else if(M.isDataArrayTexture)if(ct){if(ut&&e.texStorage3D(s.TEXTURE_2D_ARRAY,Yt,K,J.width,J.height,J.depth),Rt)if(M.layerUpdates.size>0){let ot=gh(J.width,J.height,M.format,M.type);for(let It of M.layerUpdates){let Vt=J.data.subarray(It*ot/J.data.BYTES_PER_ELEMENT,(It+1)*ot/J.data.BYTES_PER_ELEMENT);e.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,It,J.width,J.height,1,dt,P,Vt)}M.clearLayerUpdates()}else e.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,J.width,J.height,J.depth,dt,P,J.data)}else e.texImage3D(s.TEXTURE_2D_ARRAY,0,K,J.width,J.height,J.depth,0,dt,P,J.data);else if(M.isData3DTexture)ct?(ut&&e.texStorage3D(s.TEXTURE_3D,Yt,K,J.width,J.height,J.depth),Rt&&e.texSubImage3D(s.TEXTURE_3D,0,0,0,0,J.width,J.height,J.depth,dt,P,J.data)):e.texImage3D(s.TEXTURE_3D,0,K,J.width,J.height,J.depth,0,dt,P,J.data);else if(M.isFramebufferTexture){if(ut)if(ct)e.texStorage2D(s.TEXTURE_2D,Yt,K,J.width,J.height);else{let ot=J.width,It=J.height;for(let Vt=0;Vt<Yt;Vt++)e.texImage2D(s.TEXTURE_2D,Vt,K,ot,It,0,dt,P,null),ot>>=1,It>>=1}}else if(M.isHTMLTexture){if("texElementImage2D"in s){let ot=s.canvas;if(ot.hasAttribute("layoutsubtree")||ot.setAttribute("layoutsubtree","true"),J.parentNode!==ot){ot.appendChild(J),u.add(M),ot.onpaint=It=>{let Vt=It.changedElements;for(let _t of u)Vt.includes(_t.image)&&(_t.needsUpdate=!0)},ot.requestPaint();return}if(s.texElementImage2D.length===3)s.texElementImage2D(s.TEXTURE_2D,s.RGBA8,J);else{let Vt=s.RGBA,_t=s.RGBA,fe=s.UNSIGNED_BYTE;s.texElementImage2D(s.TEXTURE_2D,0,Vt,_t,fe,J)}s.texParameteri(s.TEXTURE_2D,s.TEXTURE_MIN_FILTER,s.LINEAR),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_WRAP_S,s.CLAMP_TO_EDGE),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_WRAP_T,s.CLAMP_TO_EDGE)}}else if(ft.length>0){if(ct&&ut){let ot=zt(ft[0]);e.texStorage2D(s.TEXTURE_2D,Yt,K,ot.width,ot.height)}for(let ot=0,It=ft.length;ot<It;ot++)Y=ft[ot],ct?Rt&&e.texSubImage2D(s.TEXTURE_2D,ot,0,0,dt,P,Y):e.texImage2D(s.TEXTURE_2D,ot,K,dt,P,Y);M.generateMipmaps=!1}else if(ct){if(ut){let ot=zt(J);e.texStorage2D(s.TEXTURE_2D,Yt,K,ot.width,ot.height)}Rt&&e.texSubImage2D(s.TEXTURE_2D,0,0,0,dt,P,J)}else e.texImage2D(s.TEXTURE_2D,0,K,dt,P,J);S(M)&&M.mipmapsAutoUpdate===!0&&y(at),mt.__version=ht.version,M.onUpdate&&M.onUpdate(M)}A.__version=M.version}function Mn(A,M,G){if(M.image.length!==6)return;let at=me(A,M),tt=M.source;e.bindTexture(s.TEXTURE_CUBE_MAP,A.__webglTexture,s.TEXTURE0+G);let ht=n.get(tt);if(tt.version!==ht.__version||at===!0){e.activeTexture(s.TEXTURE0+G);let mt=ne.getPrimaries(ne.workingColorSpace),$=M.colorSpace===Ri?null:ne.getPrimaries(M.colorSpace),J=M.colorSpace===Ri||mt===$?s.NONE:s.BROWSER_DEFAULT_WEBGL;e.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,M.flipY),e.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),e.pixelStorei(s.UNPACK_ALIGNMENT,M.unpackAlignment),e.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,J);let dt=M.isCompressedTexture||M.image[0].isCompressedTexture,P=M.image[0]&&M.image[0].isDataTexture,K=[];for(let _t=0;_t<6;_t++)!dt&&!P?K[_t]=v(M.image[_t],!0,i.maxCubemapSize):K[_t]=P?M.image[_t].image:M.image[_t],K[_t]=Lt(M,K[_t]);let Y=K[0],ft=r.convert(M.format,M.colorSpace),ct=r.convert(M.type),ut=E(M.internalFormat,ft,ct,M.normalized,M.colorSpace),Rt=M.isVideoTexture!==!0,Yt=ht.__version===void 0||at===!0,ot=tt.dataReady,It=w(M,Y);de(s.TEXTURE_CUBE_MAP,M);let Vt;if(M.isDepthTexture){if(ut=_(M.format===Ai,M.type),Yt)if(Rt)e.texStorage2D(s.TEXTURE_CUBE_MAP,1,ut,Y.width,Y.height);else for(let _t=0;_t<6;_t++)e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+_t,0,ut,Y.width,Y.height,0,ft,ct,null)}else if(dt){Rt&&Yt&&e.texStorage2D(s.TEXTURE_CUBE_MAP,It,ut,Y.width,Y.height);for(let _t=0;_t<6;_t++){Vt=K[_t].mipmaps;for(let fe=0;fe<Vt.length;fe++){let Je=Vt[fe];M.format!==Yn?ft!==null?Rt?ot&&e.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+_t,fe,0,0,Je.width,Je.height,ft,Je.data):e.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+_t,fe,ut,Je.width,Je.height,0,Je.data):Nt("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Rt?ot&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+_t,fe,0,0,Je.width,Je.height,ft,ct,Je.data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+_t,fe,ut,Je.width,Je.height,0,ft,ct,Je.data)}}}else{if(Vt=M.mipmaps,Rt&&Yt){Vt.length>0&&It++;let _t=zt(K[0]);e.texStorage2D(s.TEXTURE_CUBE_MAP,It,ut,_t.width,_t.height)}for(let _t=0;_t<6;_t++)if(P){Rt?ot&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+_t,0,0,0,K[_t].width,K[_t].height,ft,ct,K[_t].data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+_t,0,ut,K[_t].width,K[_t].height,0,ft,ct,K[_t].data);for(let fe=0;fe<Vt.length;fe++){let Ni=Vt[fe].image[_t].image;Rt?ot&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+_t,fe+1,0,0,Ni.width,Ni.height,ft,ct,Ni.data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+_t,fe+1,ut,Ni.width,Ni.height,0,ft,ct,Ni.data)}}else{Rt?ot&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+_t,0,0,0,ft,ct,K[_t]):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+_t,0,ut,ft,ct,K[_t]);for(let fe=0;fe<Vt.length;fe++){let Je=Vt[fe];Rt?ot&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+_t,fe+1,0,0,ft,ct,Je.image[_t]):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+_t,fe+1,ut,ft,ct,Je.image[_t])}}}S(M)&&M.mipmapsAutoUpdate===!0&&y(s.TEXTURE_CUBE_MAP),ht.__version=tt.version,M.onUpdate&&M.onUpdate(M)}A.__version=M.version}function Ee(A,M,G,at,tt,ht){let mt=r.convert(G.format,G.colorSpace),$=r.convert(G.type),J=E(G.internalFormat,mt,$,G.normalized,G.colorSpace),dt=n.get(M),P=n.get(G);if(P.__renderTarget=M,!dt.__hasExternalTextures){let K=Math.max(1,M.width>>ht),Y=Math.max(1,M.height>>ht);tt===s.TEXTURE_3D||tt===s.TEXTURE_2D_ARRAY?e.texImage3D(tt,ht,J,K,Y,M.depth,0,mt,$,null):e.texImage2D(tt,ht,J,K,Y,0,mt,$,null)}e.bindFramebuffer(s.FRAMEBUFFER,A),xt(M)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,at,tt,P.__webglTexture,0,be(M)):(tt===s.TEXTURE_2D||tt>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&tt<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,at,tt,P.__webglTexture,ht),e.bindFramebuffer(s.FRAMEBUFFER,null)}function Qn(A,M,G){if(s.bindRenderbuffer(s.RENDERBUFFER,A),M.depthBuffer){let at=M.depthTexture,tt=at&&at.isDepthTexture?at.type:null,ht=_(M.stencilBuffer,tt),mt=M.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;xt(M)?o.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,be(M),ht,M.width,M.height):G?s.renderbufferStorageMultisample(s.RENDERBUFFER,be(M),ht,M.width,M.height):s.renderbufferStorage(s.RENDERBUFFER,ht,M.width,M.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,mt,s.RENDERBUFFER,A)}else{let at=M.textures;for(let tt=0;tt<at.length;tt++){let ht=at[tt],mt=r.convert(ht.format,ht.colorSpace),$=r.convert(ht.type),J=E(ht.internalFormat,mt,$,ht.normalized,ht.colorSpace);xt(M)?o.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,be(M),J,M.width,M.height):G?s.renderbufferStorageMultisample(s.RENDERBUFFER,be(M),J,M.width,M.height):s.renderbufferStorage(s.RENDERBUFFER,J,M.width,M.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function Ze(A,M,G){let at=M.isWebGLCubeRenderTarget===!0;if(e.bindFramebuffer(s.FRAMEBUFFER,A),!(M.depthTexture&&M.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let tt=n.get(M.depthTexture);tt.__renderTarget=M;let ht=at?M.depthTexture.image[0]:M.depthTexture.image;(!tt.__webglTexture||ht.width!==M.width||ht.height!==M.height)&&(ht.width=M.width,ht.height=M.height,M.depthTexture.needsUpdate=!0),at?yt(M.depthTexture,0):lt(M.depthTexture,0);let mt=tt.__webglTexture,$=be(M),J=at?s.TEXTURE_CUBE_MAP_POSITIVE_X+G:s.TEXTURE_2D,dt=M.depthTexture.format===Ai?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;if(M.depthTexture.format===yi)xt(M)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,dt,J,mt,0,$):s.framebufferTexture2D(s.FRAMEBUFFER,dt,J,mt,0);else if(M.depthTexture.format===Ai)xt(M)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,dt,J,mt,0,$):s.framebufferTexture2D(s.FRAMEBUFFER,dt,J,mt,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function Pn(A){let M=n.get(A),G=A.isWebGLCubeRenderTarget===!0;if(M.__boundDepthTexture!==A.depthTexture){let at=A.depthTexture;if(M.__depthDisposeCallback&&M.__depthDisposeCallback(),at){let tt=()=>{delete M.__boundDepthTexture,delete M.__depthDisposeCallback,at.removeEventListener("dispose",tt)};at.addEventListener("dispose",tt),M.__depthDisposeCallback=tt}M.__boundDepthTexture=at}if(A.depthTexture&&!M.__autoAllocateDepthBuffer)if(G)for(let at=0;at<6;at++)Ze(M.__webglFramebuffer[at],A,at);else A.texture.mipmaps.length>0?Ze(M.__webglFramebuffer[0],A,0):Ze(M.__webglFramebuffer,A,0);else if(G){M.__webglDepthbuffer=[];for(let at=0;at<6;at++)if(e.bindFramebuffer(s.FRAMEBUFFER,M.__webglFramebuffer[at]),M.__webglDepthbuffer[at]===void 0)M.__webglDepthbuffer[at]=s.createRenderbuffer(),Qn(M.__webglDepthbuffer[at],A,!1);else{let tt=A.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,ht=M.__webglDepthbuffer[at];s.bindRenderbuffer(s.RENDERBUFFER,ht),s.framebufferRenderbuffer(s.FRAMEBUFFER,tt,s.RENDERBUFFER,ht)}}else if(A.texture.mipmaps.length>0?e.bindFramebuffer(s.FRAMEBUFFER,M.__webglFramebuffer[0]):e.bindFramebuffer(s.FRAMEBUFFER,M.__webglFramebuffer),M.__webglDepthbuffer===void 0)M.__webglDepthbuffer=s.createRenderbuffer(),Qn(M.__webglDepthbuffer,A,!1);else{let tt=A.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,ht=M.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,ht),s.framebufferRenderbuffer(s.FRAMEBUFFER,tt,s.RENDERBUFFER,ht)}e.bindFramebuffer(s.FRAMEBUFFER,null)}function Ln(A,M,G){let at=n.get(A);M!==void 0&&Ee(at.__webglFramebuffer,A,A.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),G!==void 0&&Pn(A)}function Dn(A){let M=A.texture,G=n.get(A),at=n.get(M);A.addEventListener("dispose",U),D(A);let tt=A.textures,ht=A.isWebGLCubeRenderTarget===!0,mt=tt.length>1;if(mt||(at.__webglTexture===void 0&&(at.__webglTexture=s.createTexture()),at.__version=M.version,a.memory.textures++),ht){G.__webglFramebuffer=[];for(let $=0;$<6;$++)if(M.mipmaps.length>0){G.__webglFramebuffer[$]=[];for(let J=0;J<M.mipmaps.length;J++)G.__webglFramebuffer[$][J]=s.createFramebuffer()}else G.__webglFramebuffer[$]=s.createFramebuffer()}else{if(M.mipmaps.length>0){G.__webglFramebuffer=[];for(let $=0;$<M.mipmaps.length;$++)G.__webglFramebuffer[$]=s.createFramebuffer()}else G.__webglFramebuffer=s.createFramebuffer();if(mt)for(let $=0,J=tt.length;$<J;$++){let dt=n.get(tt[$]);dt.__webglTexture===void 0&&(dt.__webglTexture=s.createTexture(),a.memory.textures++)}if(A.samples>0&&xt(A)===!1){G.__webglMultisampledFramebuffer=s.createFramebuffer(),G.__webglColorRenderbuffer=[],e.bindFramebuffer(s.FRAMEBUFFER,G.__webglMultisampledFramebuffer);for(let $=0;$<tt.length;$++){let J=tt[$];G.__webglColorRenderbuffer[$]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,G.__webglColorRenderbuffer[$]);let dt=r.convert(J.format,J.colorSpace),P=r.convert(J.type),K=E(J.internalFormat,dt,P,J.normalized,J.colorSpace,A.isXRRenderTarget===!0),Y=be(A);s.renderbufferStorageMultisample(s.RENDERBUFFER,Y,K,A.width,A.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+$,s.RENDERBUFFER,G.__webglColorRenderbuffer[$])}s.bindRenderbuffer(s.RENDERBUFFER,null),A.depthBuffer&&(G.__webglDepthRenderbuffer=s.createRenderbuffer(),Qn(G.__webglDepthRenderbuffer,A,!0)),e.bindFramebuffer(s.FRAMEBUFFER,null)}}if(ht){e.bindTexture(s.TEXTURE_CUBE_MAP,at.__webglTexture),de(s.TEXTURE_CUBE_MAP,M);for(let $=0;$<6;$++)if(M.mipmaps.length>0)for(let J=0;J<M.mipmaps.length;J++)Ee(G.__webglFramebuffer[$][J],A,M,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+$,J);else Ee(G.__webglFramebuffer[$],A,M,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+$,0);S(M)?y(s.TEXTURE_CUBE_MAP):M.mipmaps.length>0&&s.texParameteri(s.TEXTURE_CUBE_MAP,s.TEXTURE_MAX_LEVEL,M.mipmaps.length-1),e.unbindTexture()}else if(mt){for(let $=0,J=tt.length;$<J;$++){let dt=tt[$],P=n.get(dt),K=s.TEXTURE_2D;(A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(K=A.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),e.bindTexture(K,P.__webglTexture),de(K,dt),Ee(G.__webglFramebuffer,A,dt,s.COLOR_ATTACHMENT0+$,K,0),S(dt)&&y(K)}e.unbindTexture()}else{let $=s.TEXTURE_2D;if((A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&($=A.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),e.bindTexture($,at.__webglTexture),de($,M),M.mipmaps.length>0)for(let J=0;J<M.mipmaps.length;J++)Ee(G.__webglFramebuffer[J],A,M,s.COLOR_ATTACHMENT0,$,J);else Ee(G.__webglFramebuffer,A,M,s.COLOR_ATTACHMENT0,$,0);S(M)?y($):M.mipmaps.length>0&&s.texParameteri($,s.TEXTURE_MAX_LEVEL,M.mipmaps.length-1),e.unbindTexture()}A.depthBuffer&&Pn(A)}function F(A){let M=A.textures;for(let G=0,at=M.length;G<at;G++){let tt=M[G];if(S(tt)&&tt.mipmapsAutoUpdate===!0){let ht=T(A),mt=n.get(tt).__webglTexture;e.bindTexture(ht,mt),y(ht),e.unbindTexture()}}}let Nn=[];function Me(A){if(A.samples>0){if(xt(A)===!1){let M=A.textures,G=A.width,at=A.height,tt=s.COLOR_BUFFER_BIT,ht=A.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,mt=n.get(A),$=M.length>1;if($)for(let dt=0;dt<M.length;dt++)e.bindFramebuffer(s.FRAMEBUFFER,mt.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+dt,s.RENDERBUFFER,null),e.bindFramebuffer(s.FRAMEBUFFER,mt.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+dt,s.TEXTURE_2D,null,0);e.bindFramebuffer(s.READ_FRAMEBUFFER,mt.__webglMultisampledFramebuffer),A.texture.mipmaps.length>0?e.bindFramebuffer(s.DRAW_FRAMEBUFFER,mt.__webglFramebuffer[0]):e.bindFramebuffer(s.DRAW_FRAMEBUFFER,mt.__webglFramebuffer);for(let dt=0;dt<M.length;dt++){if(A.resolveDepthBuffer&&(A.depthBuffer&&(tt|=s.DEPTH_BUFFER_BIT),A.stencilBuffer&&A.resolveStencilBuffer&&(tt|=s.STENCIL_BUFFER_BIT)),$){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,mt.__webglColorRenderbuffer[dt]);let P=n.get(M[dt]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,P,0)}s.blitFramebuffer(0,0,G,at,0,0,G,at,tt,s.NEAREST),l===!0&&(Nn.length=0,Nn.push(s.COLOR_ATTACHMENT0+dt),A.depthBuffer&&A.storeMultisampledDepthBuffer===!1&&Nn.push(ht),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,Nn))}if(e.bindFramebuffer(s.READ_FRAMEBUFFER,null),e.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),$)for(let dt=0;dt<M.length;dt++){e.bindFramebuffer(s.FRAMEBUFFER,mt.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+dt,s.RENDERBUFFER,mt.__webglColorRenderbuffer[dt]);let P=n.get(M[dt]).__webglTexture;e.bindFramebuffer(s.FRAMEBUFFER,mt.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+dt,s.TEXTURE_2D,P,0)}e.bindFramebuffer(s.DRAW_FRAMEBUFFER,mt.__webglMultisampledFramebuffer)}else if(A.depthBuffer&&A.storeMultisampledDepthBuffer===!1&&l){let M=A.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[M])}}}function be(A){return Math.min(i.maxSamples,A.samples)}function xt(A){let M=n.get(A);return A.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&M.__useRenderToTexture!==!1}function Be(A){let M=a.render.frame;h.get(A)!==M&&(h.set(A,M),A.update())}function Lt(A,M){let G=A.colorSpace,at=A.format,tt=A.type;return A.isCompressedTexture===!0||A.isVideoTexture===!0||G!==Tr&&G!==Ri&&(ne.getTransfer(G)===ue?(at!==Yn||tt!==bn)&&Nt("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Ft("WebGLTextures: Unsupported texture color space:",G)),M}function zt(A){return typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement?(c.width=A.naturalWidth||A.width,c.height=A.naturalHeight||A.height):typeof VideoFrame<"u"&&A instanceof VideoFrame?(c.width=A.displayWidth,c.height=A.displayHeight):(c.width=A.width,c.height=A.height),c}this.allocateTextureUnit=Ut,this.resetTextureUnits=et,this.getTextureUnits=st,this.setTextureUnits=Et,this.setTexture2D=lt,this.setTexture2DArray=bt,this.setTexture3D=Ct,this.setTextureCube=yt,this.rebindTextures=Ln,this.setupRenderTarget=Dn,this.updateRenderTargetMipmap=F,this.updateMultisampleRenderTarget=Me,this.setupDepthRenderbuffer=Pn,this.setupFrameBufferTexture=Ee,this.useMultisampledRTT=xt,this.dispose=C}function Tv(s,t){function e(n,i=Ri){let r,a=ne.getTransfer(i);if(n===bn)return s.UNSIGNED_BYTE;if(n===Uo)return s.UNSIGNED_SHORT_4_4_4_4;if(n===Fo)return s.UNSIGNED_SHORT_5_5_5_1;if(n===ih)return s.UNSIGNED_INT_5_9_9_9_REV;if(n===sh)return s.UNSIGNED_INT_10F_11F_11F_REV;if(n===eh)return s.BYTE;if(n===nh)return s.SHORT;if(n===Js)return s.UNSIGNED_SHORT;if(n===No)return s.INT;if(n===Xn)return s.UNSIGNED_INT;if(n===On)return s.FLOAT;if(n===qn)return s.HALF_FLOAT;if(n===rh)return s.ALPHA;if(n===ah)return s.RGB;if(n===Yn)return s.RGBA;if(n===yi)return s.DEPTH_COMPONENT;if(n===Ai)return s.DEPTH_STENCIL;if(n===Oo)return s.RED;if(n===zo)return s.RED_INTEGER;if(n===$i)return s.RG;if(n===ko)return s.RG_INTEGER;if(n===Bo)return s.RGBA_INTEGER;if(n===Kr||n===jr||n===Qr||n===ta)if(a===ue)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Kr)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===jr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Qr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===ta)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Kr)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===jr)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Qr)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===ta)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Ho||n===Go||n===Vo||n===Wo)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Ho)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Go)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Vo)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Wo)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Xo||n===qo||n===Yo||n===$o||n===Zo||n===ea||n===Jo)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Xo||n===qo)return a===ue?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Yo)return a===ue?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(n===$o)return r.COMPRESSED_R11_EAC;if(n===Zo)return r.COMPRESSED_SIGNED_R11_EAC;if(n===ea)return r.COMPRESSED_RG11_EAC;if(n===Jo)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===Ko||n===jo||n===Qo||n===tl||n===el||n===nl||n===il||n===sl||n===rl||n===al||n===ol||n===ll||n===cl||n===hl)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Ko)return a===ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===jo)return a===ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Qo)return a===ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===tl)return a===ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===el)return a===ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===nl)return a===ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===il)return a===ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===sl)return a===ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===rl)return a===ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===al)return a===ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===ol)return a===ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===ll)return a===ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===cl)return a===ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===hl)return a===ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===ul||n===dl||n===fl)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===ul)return a===ue?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===dl)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===fl)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===pl||n===ml||n===na||n===gl)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===pl)return r.COMPRESSED_RED_RGTC1_EXT;if(n===ml)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===na)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===gl)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===ps?s.UNSIGNED_INT_24_8:s[n]!==void 0?s[n]:null}return{convert:e}}var Ev=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Av=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,Ih=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){let n=new zr(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=n}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,n=new An({vertexShader:Ev,fragmentShader:Av,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new re(new Vn(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Ph=class extends ni{constructor(t,e){super();let n=this,i=null,r=1,a=null,o="local-floor",l=1,c=null,h=null,u=null,d=null,f=null,m=null,x=typeof XRWebGLBinding<"u",p=new Ih,g={},v=e.getContextAttributes(),S=null,y=null,T=[],E=[],_=new Wt,w=null,D=null,I=new Qe;I.viewport=new Se;let N=new Qe;N.viewport=new Se;let U=[I,N],W=new Ro,R=null,C=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Z){let lt=T[Z];return lt===void 0&&(lt=new Vs,T[Z]=lt),lt.getTargetRaySpace()},this.getControllerGrip=function(Z){let lt=T[Z];return lt===void 0&&(lt=new Vs,T[Z]=lt),lt.getGripSpace()},this.getHand=function(Z){let lt=T[Z];return lt===void 0&&(lt=new Vs,T[Z]=lt),lt.getHandSpace()};function O(Z){let lt=E.indexOf(Z.inputSource);if(lt===-1)return;let bt=T[lt];bt!==void 0&&(bt.update(Z.inputSource,Z.frame,c||a),bt.dispatchEvent({type:Z.type,data:Z.inputSource}))}function B(){i.removeEventListener("select",O),i.removeEventListener("selectstart",O),i.removeEventListener("selectend",O),i.removeEventListener("squeeze",O),i.removeEventListener("squeezestart",O),i.removeEventListener("squeezeend",O),i.removeEventListener("end",B),i.removeEventListener("inputsourceschange",nt);for(let Z=0;Z<T.length;Z++){let lt=E[Z];lt!==null&&(E[Z]=null,T[Z].disconnect(lt))}R=null,C=null,p.reset();for(let Z in g)delete g[Z];if(t.setRenderTarget(S),f=null,d=null,u=null,i=null,y=null,Ut.stop(),n.isPresenting=!1,t.setPixelRatio(w),t.setSize(_.width,_.height,!1),D!==null){let Z=D.camera;Z.fov=D.fov,Z.zoom=D.zoom,Z.updateProjectionMatrix(),D=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Z){r=Z,n.isPresenting===!0&&Nt("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Z){o=Z,n.isPresenting===!0&&Nt("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(Z){c=Z},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return u===null&&x&&(u=new XRWebGLBinding(i,e)),u},this.getFrame=function(){return m},this.getSession=function(){return i},this.setSession=async function(Z){if(i=Z,i!==null){if(S=t.getRenderTarget(),i.addEventListener("select",O),i.addEventListener("selectstart",O),i.addEventListener("selectend",O),i.addEventListener("squeeze",O),i.addEventListener("squeezestart",O),i.addEventListener("squeezeend",O),i.addEventListener("end",B),i.addEventListener("inputsourceschange",nt),v.xrCompatible!==!0&&await e.makeXRCompatible(),w=t.getPixelRatio(),t.getSize(_),x&&"createProjectionLayer"in XRWebGLBinding.prototype){let bt=null,Ct=null,yt=null;v.depth&&(yt=v.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,bt=v.stencil?Ai:yi,Ct=v.stencil?ps:Xn);let Bt={colorFormat:e.RGBA8,depthFormat:yt,scaleFactor:r};u=this.getBinding(),d=u.createProjectionLayer(Bt),i.updateRenderState({layers:[d]}),t.setPixelRatio(1),t.setSize(d.textureWidth,d.textureHeight,!1),y=new _n(d.textureWidth,d.textureHeight,{format:Yn,type:bn,depthTexture:new Si(d.textureWidth,d.textureHeight,Ct,void 0,void 0,void 0,void 0,void 0,void 0,bt),stencilBuffer:v.stencil,colorSpace:t.outputColorSpace,samples:v.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1,storeMultisampledDepthBuffer:d.ignoreDepthValues===!1,storeMultisampledStencilBuffer:d.ignoreDepthValues===!1})}else{let bt={antialias:v.antialias,alpha:!0,depth:v.depth,stencil:v.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(i,e,bt),i.updateRenderState({baseLayer:f}),t.setPixelRatio(1),t.setSize(f.framebufferWidth,f.framebufferHeight,!1),y=new _n(f.framebufferWidth,f.framebufferHeight,{format:Yn,type:bn,colorSpace:t.outputColorSpace,stencilBuffer:v.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}y.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await i.requestReferenceSpace(o),Ut.setContext(i),Ut.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return p.getDepthTexture()};function nt(Z){for(let lt=0;lt<Z.removed.length;lt++){let bt=Z.removed[lt],Ct=E.indexOf(bt);Ct>=0&&(E[Ct]=null,T[Ct].disconnect(bt))}for(let lt=0;lt<Z.added.length;lt++){let bt=Z.added[lt],Ct=E.indexOf(bt);if(Ct===-1){for(let Bt=0;Bt<T.length;Bt++)if(Bt>=E.length){E.push(bt),Ct=Bt;break}else if(E[Bt]===null){E[Bt]=bt,Ct=Bt;break}if(Ct===-1)break}let yt=T[Ct];yt&&yt.connect(bt)}}function q(Z,lt){lt===null?Z.matrixWorld.copy(Z.matrix):Z.matrixWorld.multiplyMatrices(lt.matrixWorld,Z.matrix),Z.matrixWorldInverse.copy(Z.matrixWorld).invert()}this.updateCamera=function(Z){if(i===null)return;let lt=Z.near,bt=Z.far;p.texture!==null&&(p.depthNear>0&&(lt=p.depthNear),p.depthFar>0&&(bt=p.depthFar)),W.near=N.near=I.near=lt,W.far=N.far=I.far=bt,(R!==W.near||C!==W.far)&&(i.updateRenderState({depthNear:W.near,depthFar:W.far}),R=W.near,C=W.far),W.layers.mask=Z.layers.mask|6,I.layers.mask=W.layers.mask&-5,N.layers.mask=W.layers.mask&-3;let Ct=Z.parent,yt=W.cameras;q(W,Ct);for(let Bt=0;Bt<yt.length;Bt++)q(yt[Bt],Ct);W.projectionMatrix.copy(I.projectionMatrix),W.projectionMatrixInverse.copy(I.projectionMatrixInverse),D===null&&Z.isPerspectiveCamera&&(D={camera:Z,fov:Z.fov,zoom:Z.zoom}),et(Z,W,Ct)};function et(Z,lt,bt){bt===null?Z.matrix.copy(lt.matrixWorld):(Z.matrix.copy(bt.matrixWorld),Z.matrix.invert(),Z.matrix.multiply(lt.matrixWorld)),Z.matrix.decompose(Z.position,Z.quaternion,Z.scale),Z.updateMatrixWorld(!0),Z.projectionMatrix.copy(lt.projectionMatrix),Z.projectionMatrixInverse.copy(lt.projectionMatrixInverse),Z.isPerspectiveCamera&&(Z.fov=co*2*Math.atan(1/Z.projectionMatrix.elements[5]),Z.zoom=1)}this.getCamera=function(){return W},this.getFoveation=function(){if(!(d===null&&f===null))return l},this.setFoveation=function(Z){l=Z,d!==null&&(d.fixedFoveation=Z),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=Z)},this.hasDepthSensing=function(){return p.texture!==null},this.getDepthSensingMesh=function(){return p.getMesh(W)},this.getCameraTexture=function(Z){return g[Z]};let st=null;function Et(Z,lt){if(h=lt.getViewerPose(c||a),m=lt,h!==null){let bt=h.views;f!==null&&(t.setRenderTargetFramebuffer(y,f.framebuffer),t.setRenderTarget(y));let Ct=!1;bt.length!==W.cameras.length&&(W.cameras.length=0,Ct=!0);for(let Dt=0;Dt<bt.length;Dt++){let de=bt[Dt],me=null;if(f!==null)me=f.getViewport(de);else{let en=u.getViewSubImage(d,de);me=en.viewport,Dt===0&&(t.setRenderTargetTextures(y,en.colorTexture,en.depthStencilTexture),t.setRenderTarget(y))}let Qt=U[Dt];Qt===void 0&&(Qt=new Qe,Qt.layers.enable(Dt),Qt.viewport=new Se,U[Dt]=Qt),Qt.matrix.fromArray(de.transform.matrix),Qt.matrix.decompose(Qt.position,Qt.quaternion,Qt.scale),Qt.projectionMatrix.fromArray(de.projectionMatrix),Qt.projectionMatrixInverse.copy(Qt.projectionMatrix).invert(),Qt.viewport.set(me.x,me.y,me.width,me.height),Dt===0&&(W.matrix.copy(Qt.matrix),W.matrix.decompose(W.position,W.quaternion,W.scale)),Ct===!0&&W.cameras.push(Qt)}let yt=i.enabledFeatures;if(yt&&yt.includes("depth-sensing")&&i.depthUsage=="gpu-optimized"&&x){u=n.getBinding();let Dt=u.getDepthInformation(bt[0]);Dt&&Dt.isValid&&Dt.texture&&p.init(Dt,i.renderState)}if(yt&&yt.includes("camera-access")&&x){t.state.unbindTexture(),u=n.getBinding();for(let Dt=0;Dt<bt.length;Dt++){let de=bt[Dt].camera;if(de){let me=g[de];me||(me=new zr,g[de]=me);let Qt=u.getCameraImage(de);me.sourceTexture=Qt}}}}for(let bt=0;bt<T.length;bt++){let Ct=E[bt],yt=T[bt];Ct!==null&&yt!==void 0&&yt.update(Ct,lt,c||a)}st&&st(Z,lt),lt.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:lt}),m=null}let Ut=new mf;Ut.setAnimationLoop(Et),this.setAnimationLoop=function(Z){st=Z},this.dispose=function(){}}},Rv=new ae,Tf=new Ot;Tf.set(-1,0,0,0,1,0,0,0,1);function Cv(s,t){function e(p,g){p.matrixAutoUpdate===!0&&p.updateMatrix(),g.value.copy(p.matrix)}function n(p,g){g.color.getRGB(p.fogColor.value,fh(s)),g.isFog?(p.fogNear.value=g.near,p.fogFar.value=g.far):g.isFogExp2&&(p.fogDensity.value=g.density)}function i(p,g,v,S,y){g.isNodeMaterial?g.uniformsNeedUpdate=!1:g.isMeshBasicMaterial?r(p,g):g.isMeshLambertMaterial?(r(p,g),g.envMap&&(p.envMapIntensity.value=g.envMapIntensity)):g.isMeshToonMaterial?(r(p,g),u(p,g)):g.isMeshPhongMaterial?(r(p,g),h(p,g),g.envMap&&(p.envMapIntensity.value=g.envMapIntensity)):g.isMeshStandardMaterial?(r(p,g),d(p,g),g.isMeshPhysicalMaterial&&f(p,g,y)):g.isMeshMatcapMaterial?(r(p,g),m(p,g)):g.isMeshDepthMaterial?r(p,g):g.isMeshDistanceMaterial?(r(p,g),x(p,g)):g.isMeshNormalMaterial?r(p,g):g.isLineBasicMaterial?(a(p,g),g.isLineDashedMaterial&&o(p,g)):g.isPointsMaterial?l(p,g,v,S):g.isSpriteMaterial?c(p,g):g.isShadowMaterial?(p.color.value.copy(g.color),p.opacity.value=g.opacity):g.isShaderMaterial&&(g.uniformsNeedUpdate=!1)}function r(p,g){p.opacity.value=g.opacity,g.color&&p.diffuse.value.copy(g.color),g.emissive&&p.emissive.value.copy(g.emissive).multiplyScalar(g.emissiveIntensity),g.map&&(p.map.value=g.map,e(g.map,p.mapTransform)),g.alphaMap&&(p.alphaMap.value=g.alphaMap,e(g.alphaMap,p.alphaMapTransform)),g.bumpMap&&(p.bumpMap.value=g.bumpMap,e(g.bumpMap,p.bumpMapTransform),p.bumpScale.value=g.bumpScale,g.side===sn&&(p.bumpScale.value*=-1)),g.normalMap&&(p.normalMap.value=g.normalMap,e(g.normalMap,p.normalMapTransform),p.normalScale.value.copy(g.normalScale),g.side===sn&&p.normalScale.value.negate()),g.displacementMap&&(p.displacementMap.value=g.displacementMap,e(g.displacementMap,p.displacementMapTransform),p.displacementScale.value=g.displacementScale,p.displacementBias.value=g.displacementBias),g.emissiveMap&&(p.emissiveMap.value=g.emissiveMap,e(g.emissiveMap,p.emissiveMapTransform)),g.specularMap&&(p.specularMap.value=g.specularMap,e(g.specularMap,p.specularMapTransform)),g.alphaTest>0&&(p.alphaTest.value=g.alphaTest);let v=t.get(g),S=v.envMap,y=v.envMapRotation;S&&(p.envMap.value=S,p.envMapRotation.value.setFromMatrix4(Rv.makeRotationFromEuler(y)).transpose(),S.isCubeTexture&&S.isRenderTargetTexture===!1&&p.envMapRotation.value.premultiply(Tf),p.reflectivity.value=g.reflectivity,p.ior.value=g.ior,p.refractionRatio.value=g.refractionRatio),g.lightMap&&(p.lightMap.value=g.lightMap,p.lightMapIntensity.value=g.lightMapIntensity,e(g.lightMap,p.lightMapTransform)),g.aoMap&&(p.aoMap.value=g.aoMap,p.aoMapIntensity.value=g.aoMapIntensity,e(g.aoMap,p.aoMapTransform))}function a(p,g){p.diffuse.value.copy(g.color),p.opacity.value=g.opacity,g.map&&(p.map.value=g.map,e(g.map,p.mapTransform))}function o(p,g){p.dashSize.value=g.dashSize,p.totalSize.value=g.dashSize+g.gapSize,p.scale.value=g.scale}function l(p,g,v,S){p.diffuse.value.copy(g.color),p.opacity.value=g.opacity,p.size.value=g.size*v,p.scale.value=S*.5,g.map&&(p.map.value=g.map,e(g.map,p.uvTransform)),g.alphaMap&&(p.alphaMap.value=g.alphaMap,e(g.alphaMap,p.alphaMapTransform)),g.alphaTest>0&&(p.alphaTest.value=g.alphaTest)}function c(p,g){p.diffuse.value.copy(g.color),p.opacity.value=g.opacity,p.rotation.value=g.rotation,g.map&&(p.map.value=g.map,e(g.map,p.mapTransform)),g.alphaMap&&(p.alphaMap.value=g.alphaMap,e(g.alphaMap,p.alphaMapTransform)),g.alphaTest>0&&(p.alphaTest.value=g.alphaTest)}function h(p,g){p.specular.value.copy(g.specular),p.shininess.value=Math.max(g.shininess,1e-4)}function u(p,g){g.gradientMap&&(p.gradientMap.value=g.gradientMap)}function d(p,g){p.metalness.value=g.metalness,g.metalnessMap&&(p.metalnessMap.value=g.metalnessMap,e(g.metalnessMap,p.metalnessMapTransform)),p.roughness.value=g.roughness,g.roughnessMap&&(p.roughnessMap.value=g.roughnessMap,e(g.roughnessMap,p.roughnessMapTransform)),g.envMap&&(p.envMapIntensity.value=g.envMapIntensity)}function f(p,g,v){p.ior.value=g.ior,g.diffuseRoughness>0&&(p.diffuseRoughness.value=g.diffuseRoughness,g.diffuseRoughnessMap&&(p.diffuseRoughnessMap.value=g.diffuseRoughnessMap,e(g.diffuseRoughnessMap,p.diffuseRoughnessMapTransform))),g.sheen>0&&(p.sheenColor.value.copy(g.sheenColor).multiplyScalar(g.sheen),p.sheenRoughness.value=g.sheenRoughness,g.sheenColorMap&&(p.sheenColorMap.value=g.sheenColorMap,e(g.sheenColorMap,p.sheenColorMapTransform)),g.sheenRoughnessMap&&(p.sheenRoughnessMap.value=g.sheenRoughnessMap,e(g.sheenRoughnessMap,p.sheenRoughnessMapTransform))),g.clearcoat>0&&(p.clearcoat.value=g.clearcoat,p.clearcoatRoughness.value=g.clearcoatRoughness,g.clearcoatMap&&(p.clearcoatMap.value=g.clearcoatMap,e(g.clearcoatMap,p.clearcoatMapTransform)),g.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=g.clearcoatRoughnessMap,e(g.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),g.clearcoatNormalMap&&(p.clearcoatNormalMap.value=g.clearcoatNormalMap,e(g.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(g.clearcoatNormalScale),g.side===sn&&p.clearcoatNormalScale.value.negate())),g.dispersion>0&&(p.dispersion.value=g.dispersion),g.retroreflectivity>0&&(p.retroreflectivity.value=g.retroreflectivity),g.iridescence>0&&(p.iridescence.value=g.iridescence,p.iridescenceIOR.value=g.iridescenceIOR,p.iridescenceThicknessMinimum.value=g.iridescenceThicknessMinimum,p.iridescenceThicknessMaximum.value=g.iridescenceThicknessMaximum,g.iridescenceMap&&(p.iridescenceMap.value=g.iridescenceMap,e(g.iridescenceMap,p.iridescenceMapTransform)),g.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=g.iridescenceThicknessMap,e(g.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),g.transmission>0&&(p.transmission.value=g.transmission,p.transmissionSamplerMap.value=v.texture,p.transmissionSamplerSize.value.set(v.width,v.height),g.transmissionMap&&(p.transmissionMap.value=g.transmissionMap,e(g.transmissionMap,p.transmissionMapTransform)),p.thickness.value=g.thickness,g.thicknessMap&&(p.thicknessMap.value=g.thicknessMap,e(g.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=g.attenuationDistance,p.attenuationColor.value.copy(g.attenuationColor)),g.anisotropy>0&&(p.anisotropyVector.value.set(g.anisotropy*Math.cos(g.anisotropyRotation),g.anisotropy*Math.sin(g.anisotropyRotation)),g.anisotropyMap&&(p.anisotropyMap.value=g.anisotropyMap,e(g.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=g.specularIntensity,p.specularColor.value.copy(g.specularColor),g.specularColorMap&&(p.specularColorMap.value=g.specularColorMap,e(g.specularColorMap,p.specularColorMapTransform)),g.specularIntensityMap&&(p.specularIntensityMap.value=g.specularIntensityMap,e(g.specularIntensityMap,p.specularIntensityMapTransform))}function m(p,g){g.matcap&&(p.matcap.value=g.matcap)}function x(p,g){let v=t.get(g).light;p.referencePosition.value.setFromMatrixPosition(v.matrixWorld),p.nearDistance.value=v.shadow.camera.near,p.farDistance.value=v.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function Iv(s,t,e,n){let i={},r={};function a(v,S){let y=S.program;n.uniformBlockBinding(v,y,i[v.id])}function o(v,S){let y=i[v.id];y===void 0&&(m(v),y=l(v),i[v.id]=y,v.addEventListener("dispose",p));let T=S.program;n.updateUBOMapping(v,T);let E=t.render.frame;r[v.id]!==E&&(c(v),r[v.id]=E)}function l(v){let S=s.createBuffer(),y=v.__size,T=v.usage;return s.bindBuffer(s.UNIFORM_BUFFER,S),s.bufferData(s.UNIFORM_BUFFER,y,T),s.bindBuffer(s.UNIFORM_BUFFER,null),S}function c(v){let S=i[v.id],y=v.uniforms,T=v.__cache;s.bindBuffer(s.UNIFORM_BUFFER,S);for(let E=0,_=y.length;E<_;E++){let w=y[E];if(Array.isArray(w))for(let D=0,I=w.length;D<I;D++)h(w[D],E,D,T);else h(w,E,0,T)}s.bindBuffer(s.UNIFORM_BUFFER,null)}function h(v,S,y,T){if(d(v,S,y,T)===!0){let E=v.__offset,_=v.value;if(Array.isArray(_)){let w=0;for(let D=0;D<_.length;D++){let I=_[D],N=x(I,!0);u(I,v.__data,w),w+=N.storage/Float32Array.BYTES_PER_ELEMENT}}else u(_,v.__data,0);s.bufferSubData(s.UNIFORM_BUFFER,E,v.__data)}}function u(v,S,y){typeof v=="number"||typeof v=="boolean"?S[y]=v:v.isMatrix3?(S[y]=v.elements[0],S[y+1]=v.elements[1],S[y+2]=v.elements[2],S[y+3]=0,S[y+4]=v.elements[3],S[y+5]=v.elements[4],S[y+6]=v.elements[5],S[y+7]=0,S[y+8]=v.elements[6],S[y+9]=v.elements[7],S[y+10]=v.elements[8],S[y+11]=0):ArrayBuffer.isView(v)?S.set(v.subarray(0,S.length-y),y):v.toArray(S,y)}function d(v,S,y,T){let E=v.value,_=S+"_"+y;if(Array.isArray(E)){T[_]===void 0&&(T[_]=[]);let w=T[_],D=!1;for(let I=0;I<E.length;I++)f(E[I],w,I)===!0&&(D=!0);return D}return f(E,T,_)}function f(v,S,y){if(S[y]===void 0)return typeof v=="number"||typeof v=="boolean"?S[y]=v:ArrayBuffer.isView(v)?S[y]=v.slice():S[y]=v.clone(),!0;{let T=S[y];if(typeof v=="number"||typeof v=="boolean"){if(T!==v)return S[y]=v,!0}else{if(ArrayBuffer.isView(v))return!0;if(T.equals(v)===!1)return T.copy(v),!0}}return!1}function m(v){let S=v.uniforms,y=0,T=16;for(let _=0,w=S.length;_<w;_++){let D=Array.isArray(S[_])?S[_]:[S[_]];for(let I=0,N=D.length;I<N;I++){let U=D[I],W=Array.isArray(U.value)?U.value:[U.value],R=Array.isArray(S[_])||Array.isArray(U.value),C=y;for(let B=0,nt=W.length;B<nt;B++){let q=W[B],et=x(q,R),st=y%T,Et=st%et.boundary,Ut=st+Et;y+=Et,Ut!==0&&T-Ut<et.storage&&(y+=T-Ut),B===0&&(C=y),y+=et.storage}let O=U.type==="int"?Int32Array:U.type==="uint"?Uint32Array:Float32Array;U.__data=new O((y-C)/Float32Array.BYTES_PER_ELEMENT),U.__offset=C}}let E=y%T;return E>0&&(y+=T-E),v.__size=y,v.__cache={},this}function x(v,S){let y={boundary:0,storage:0};return typeof v=="number"||typeof v=="boolean"?(y.boundary=4,y.storage=4):v.isVector2?(y.boundary=8,y.storage=8):v.isVector3||v.isColor?(y.boundary=16,y.storage=12):v.isVector4?(y.boundary=16,y.storage=16):v.isMatrix3?(y.boundary=16,y.storage=48):v.isMatrix4?(y.boundary=16,y.storage=64):v.isTexture?Nt("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(v)?(y.boundary=16,y.storage=v.byteLength):Nt("WebGLRenderer: Unsupported uniform value type.",v),S===!0&&(y.boundary=16,y.storage=Math.ceil(y.storage/16)*16),y}function p(v){let S=v.target;S.removeEventListener("dispose",p),s.deleteBuffer(i[S.id]),delete i[S.id],delete r[S.id]}function g(){for(let v in i)s.deleteBuffer(i[v]);i={},r={}}return{bind:a,update:o,dispose:g}}var Pv=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),li=null;function Lv(){return li===null&&(li=new Nr(Pv,16,16,$i,qn),li.name="DFG_LUT",li.minFilter=gn,li.magFilter=gn,li.wrapS=ei,li.wrapT=ei,li.generateMipmaps=!1,li.needsUpdate=!0),li}var vl=class{constructor(t={}){let{canvas:e=zd(),context:n=null,depth:i=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reversedDepthBuffer:d=!1,outputBufferType:f=bn}=t;this.isWebGLRenderer=!0;let m;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");m=n.getContextAttributes().alpha}else m=a;let x=f,p=new Set([Bo,ko,zo]),g=new Set([bn,Xn,Js,ps,Uo,Fo]),v=new Uint32Array(4),S=new Int32Array(4),y={textures:[],min:[],max:[],resolution:[]},T=null,E=null,_=[],w=[],D=null;this.domElement=e,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=oi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let I=this,N=!1,U=null,W=null,R=null,C=null;this._outputColorSpace=Ge;let O=0,B=0,nt=null,q=-1,et=null,st=new Se,Et=new Se,Ut=null,Z=new Pt(0),lt=0,bt=e.width,Ct=e.height,yt=1,Bt=null,Ne=null,Dt=new Se(0,0,bt,Ct),de=new Se(0,0,bt,Ct),me=!1,Qt=new Gi,en=new po,ke=!1,Mn=!1,Ee=new ae,Qn=new k,Ze=new Se,Pn={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Ln=!1;function Dn(){return nt===null?yt:1}let F=n;function Nn(b,L){return e.getContext(b,L)}let Me,be,xt,Be,Lt,zt,A,M,G,at,tt,ht,mt,$,J,dt,P,K,Y,ft,ct,ut,Rt;try{let b={alpha:!0,depth:i,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${"187"}`),e.addEventListener("webglcontextlost",It,!1),e.addEventListener("webglcontextrestored",Vt,!1),e.addEventListener("webglcontextcreationerror",_t,!1),F===null){let L="webgl2";if(F=Nn(L,b),F===null)throw Nn(L)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}Yt()}catch(b){throw e.removeEventListener("webglcontextlost",It,!1),e.removeEventListener("webglcontextrestored",Vt,!1),e.removeEventListener("webglcontextcreationerror",_t,!1),Ft("WebGLRenderer: "+b.message),b}function Yt(){Me=new Vx(F),Me.init(),ct=new Tv(F,Me),be=new Lx(F,Me,t,ct),xt=new Sv(F,Me),be.reversedDepthBuffer&&d&&xt.buffers.depth.setReversed(!0),W=F.createFramebuffer(),R=F.createFramebuffer(),C=F.createFramebuffer(),Be=new qx(F),Lt=new cv,zt=new wv(F,Me,xt,Lt,be,ct,Be),A=new Gx(I),M=new $m(F),ut=new Ix(F,M),G=new Wx(F,M,Be,ut),at=new $x(F,G,M,ut,Be),K=new Yx(F,be,zt),J=new Dx(Lt),tt=new lv(I,A,Me,be,ut,J),ht=new Cv(I,Lt),mt=new uv,$=new xv(Me),P=new Cx(I,A,xt,at,m,l),dt=new bv(I,at,be),Rt=new Iv(F,Be,be,xt),Y=new Px(F,Me,Be),ft=new Xx(F,Me,Be),Be.programs=tt.programs,I.capabilities=be,I.extensions=Me,I.properties=Lt,I.renderLists=mt,I.shadowMap=dt,I.state=xt,I.info=Be}x!==bn&&(D=new Jx(x,e.width,e.height,o,i,r));let ot=new Ph(I,F);this.xr=ot,this.getContext=function(){return F},this.getContextAttributes=function(){return F.getContextAttributes()},this.forceContextLoss=function(){let b=Me.get("WEBGL_lose_context");b&&b.loseContext()},this.forceContextRestore=function(){let b=Me.get("WEBGL_lose_context");b&&b.restoreContext()},this.getPixelRatio=function(){return yt},this.setPixelRatio=function(b){b!==void 0&&(yt=b,this.setSize(bt,Ct,!1))},this.getSize=function(b){return b.set(bt,Ct)},this.setSize=function(b,L,X=!0){if(ot.isPresenting){Nt("WebGLRenderer: Can't change size while VR device is presenting.");return}bt=b,Ct=L,e.width=Math.floor(b*yt),e.height=Math.floor(L*yt),X===!0&&(e.style.width=b+"px",e.style.height=L+"px"),D!==null&&D.setSize(e.width,e.height),this.setViewport(0,0,b,L)},this.getDrawingBufferSize=function(b){return b.set(bt*yt,Ct*yt).floor()},this.setDrawingBufferSize=function(b,L,X){bt=b,Ct=L,yt=X,e.width=Math.floor(b*X),e.height=Math.floor(L*X),this.setViewport(0,0,b,L)},this.setEffects=function(b){if(x===bn){Ft("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(b){for(let L=0;L<b.length;L++)if(b[L].isOutputPass===!0){Nt("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}D.setEffects(b||[])},this.getCurrentViewport=function(b){return b.copy(st)},this.getViewport=function(b){return b.copy(Dt)},this.setViewport=function(b,L,X,H){b.isVector4?Dt.set(b.x,b.y,b.z,b.w):Dt.set(b,L,X,H),xt.viewport(st.copy(Dt).multiplyScalar(Dn()).round())},this.getScissor=function(b){return b.copy(de)},this.setScissor=function(b,L,X,H){b.isVector4?de.set(b.x,b.y,b.z,b.w):de.set(b,L,X,H),xt.scissor(Et.copy(de).multiplyScalar(Dn()).round())},this.getScissorTest=function(){return me},this.setScissorTest=function(b){xt.setScissorTest(me=b)},this.setOpaqueSort=function(b){Bt=b},this.setTransparentSort=function(b){Ne=b},this.getClearColor=function(b){return b.copy(P.getClearColor())},this.setClearColor=function(){P.setClearColor(...arguments)},this.getClearAlpha=function(){return P.getClearAlpha()},this.setClearAlpha=function(){P.setClearAlpha(...arguments)},this.clear=function(b=!0,L=!0,X=!0){let H=0;if(b){let V=!1;if(nt!==null){let gt=nt.texture.format;V=p.has(gt)}if(V){let gt=nt.texture.type,St=g.has(gt),pt=P.getClearColor(),Mt=P.getClearAlpha(),At=pt.r,kt=pt.g,te=pt.b;St?(v[0]=At,v[1]=kt,v[2]=te,v[3]=Mt,F.clearBufferuiv(F.COLOR,0,v)):(S[0]=At,S[1]=kt,S[2]=te,S[3]=Mt,F.clearBufferiv(F.COLOR,0,S))}else H|=F.COLOR_BUFFER_BIT}L&&(H|=F.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),X&&(H|=F.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),H!==0&&F.clear(H)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(b){b.setRenderer(this),U=b},this.dispose=function(){e.removeEventListener("webglcontextlost",It,!1),e.removeEventListener("webglcontextrestored",Vt,!1),e.removeEventListener("webglcontextcreationerror",_t,!1),P.dispose(),mt.dispose(),$.dispose(),zt.dispose(),Lt.dispose(),A.dispose(),at.dispose(),G.dispose(),ut.dispose(),Rt.dispose(),tt.dispose(),ot.dispose(),ot.removeEventListener("sessionstart",yu),ot.removeEventListener("sessionend",Mu),ts.stop()};function It(b){b.preventDefault(),uh("WebGLRenderer: Context Lost."),N=!0}function Vt(){uh("WebGLRenderer: Context Restored."),N=!1;let b=Be.autoReset,L=dt.enabled,X=dt.autoUpdate,H=dt.needsUpdate,V=dt.type;Yt(),Be.autoReset=b,dt.enabled=L,dt.autoUpdate=X,dt.needsUpdate=H,dt.type=V}function _t(b){Ft("WebGLRenderer: A WebGL context could not be created. Reason: ",b.statusMessage)}function fe(b){let L=b.target;L.removeEventListener("dispose",fe),Je(L)}function Je(b){Ni(b),Lt.remove(b)}function Ni(b){let L=Lt.get(b).programs;L!==void 0&&(L.forEach(function(X){tt.releaseProgram(X)}),b.isShaderMaterial&&tt.releaseShaderCache(b))}this.renderBufferDirect=function(b,L,X,H,V,gt){L===null&&(L=Pn);let St=V.isMesh&&V.matrixWorld.determinantAffine()<0,pt=jp(b,L,X,H,V);xt.setMaterial(H,St);let Mt=X.index,At=1;if(H.wireframe===!0){if(Mt=G.getWireframeAttribute(X),Mt===void 0)return;At=2}let kt=X.drawRange,te=X.attributes.position,wt=kt.start*At,ee=(kt.start+kt.count)*At;gt!==null&&(wt=Math.max(wt,gt.start*At),ee=Math.min(ee,(gt.start+gt.count)*At)),Mt!==null?(wt=Math.max(wt,0),ee=Math.min(ee,Mt.count)):te!=null&&(wt=Math.max(wt,0),ee=Math.min(ee,te.count));let Ue=ee-wt;if(Ue<0||Ue===1/0)return;ut.setup(V,H,pt,X,Mt);let xe,ge=Y;if(Mt!==null&&(xe=M.get(Mt),ge=ft,ge.setIndex(xe)),V.isMesh)H.wireframe===!0?(xt.setLineWidth(H.wireframeLinewidth*Dn()),ge.setMode(F.LINES)):ge.setMode(F.TRIANGLES);else if(V.isLine){let an=H.linewidth;an===void 0&&(an=1),xt.setLineWidth(an*Dn()),V.isLineSegments?ge.setMode(F.LINES):V.isLineLoop?ge.setMode(F.LINE_LOOP):ge.setMode(F.LINE_STRIP)}else V.isPoints?ge.setMode(F.POINTS):V.isSprite&&ge.setMode(F.TRIANGLES);if(V.isBatchedMesh)if(Me.get("WEBGL_multi_draw"))ge.renderMultiDraw(V._multiDrawStarts,V._multiDrawCounts,V._multiDrawCount);else{let an=V._multiDrawStarts,Tt=V._multiDrawCounts,mn=V._multiDrawCount,he=Mt?M.get(Mt).bytesPerElement:1,es=Lt.get(H).currentProgram.getUniforms();for(let on=0;on<mn;on++)es.setValue(F,"_gl_DrawID",on),ge.render(an[on]/he,Tt[on])}else if(V.isInstancedMesh)ge.renderInstances(wt,Ue,V.count);else if(X.isInstancedBufferGeometry){let an=X._maxInstanceCount!==void 0?X._maxInstanceCount:1/0,Tt=Math.min(X.instanceCount,an);ge.renderInstances(wt,Ue,Tt)}else ge.render(wt,Ue)};function vu(b,L,X,H){U!==null&&b.isNodeMaterial&&U.setObject(H,b),ke===!0&&J.setState(b,X,!1),b.transparent===!0&&b.side===ai&&b.forceSinglePass===!1?(b.side=sn,b.needsUpdate=!0,gr(b,L,H),b.side=ri,b.needsUpdate=!0,gr(b,L,H),b.side=ai):gr(b,L,H)}this.compile=function(b,L,X=null){X===null&&(X=b),U!==null&&U.renderStart(b,L,X),E=$.get(X),E.init(L),w.push(E),X.traverseVisible(function(V){V.isLight&&V.layers.test(L.layers)&&(E.pushLight(V),V.castShadow&&E.pushShadow(V))}),b!==X&&b.traverseVisible(function(V){V.isLight&&V.layers.test(L.layers)&&(E.pushLight(V),V.castShadow&&E.pushShadow(V))}),E.setupLights(),U!==null&&U.updateLights(E.state.lightsArray),Mn=this.localClippingEnabled,ke=J.init(this.clippingPlanes,Mn),ke===!0&&J.setGlobalState(this.clippingPlanes,L),U!==null&&dt.render(E.state.shadowsArray,X,L);let H=new Set;return b.traverse(function(V){if(!(V.isMesh||V.isPoints||V.isLine||V.isSprite))return;let gt=V.material;if(gt)if(Array.isArray(gt))for(let St=0;St<gt.length;St++){let pt=gt[St];vu(pt,X,L,V),H.add(pt)}else vu(gt,X,L,V),H.add(gt)}),E=w.pop(),U!==null&&U.renderEnd(),H},this.compileAsync=function(b,L,X=null){let H=this.compile(b,L,X);return new Promise(V=>{function gt(){if(H.forEach(function(St){let Mt=Lt.get(St).currentProgram;(Mt===void 0||Mt.isReady())&&H.delete(St)}),H.size===0){V(b);return}setTimeout(gt,10)}Me.get("KHR_parallel_shader_compile")!==null?gt():setTimeout(gt,10)})};let hc=null;function Jp(b){hc&&hc(b)}function yu(){ts.stop()}function Mu(){ts.start()}let ts=new mf;ts.setAnimationLoop(Jp),typeof self<"u"&&ts.setContext(self),this.setAnimationLoop=function(b){hc=b,ot.setAnimationLoop(b),b===null?ts.stop():ts.start()},ot.addEventListener("sessionstart",yu),ot.addEventListener("sessionend",Mu),this.render=function(b,L){if(L!==void 0&&L.isCamera!==!0){Ft("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(N===!0)return;U!==null&&U.renderStart(b,L);let X=ot.enabled===!0&&ot.isPresenting===!0,H=D!==null&&(nt===null||X)&&D.begin(I,nt);if(b.matrixWorldAutoUpdate===!0&&b.updateMatrixWorld(),L.parent===null&&L.matrixWorldAutoUpdate===!0&&L.updateMatrixWorld(),ot.enabled===!0&&ot.isPresenting===!0&&(D===null||D.isCompositing()===!1)&&(ot.cameraAutoUpdate===!0&&ot.updateCamera(L),L=ot.getCamera()),b.isScene===!0&&b.onBeforeRender(I,b,L,nt),E=$.get(b,w.length),E.init(L),E.state.textureUnits=zt.getTextureUnits(),w.push(E),Ee.multiplyMatrices(L.projectionMatrix,L.matrixWorldInverse),L.isArrayCamera?en.setFromArrayCamera(L):Qt.setFromProjectionMatrix(Ee,Fn,L.reversedDepth),Mn=this.localClippingEnabled,ke=J.init(this.clippingPlanes,Mn),T=mt.get(b,_.length),T.init(),_.push(T),this.info.render.frame++,ot.enabled===!0&&ot.isPresenting===!0){let St=I.xr.getDepthSensingMesh();St!==null&&uc(St,L,-1/0,I.sortObjects)}uc(b,L,0,I.sortObjects),T.finish(),U!==null&&U.updateLights(E.state.lightsArray),I.sortObjects===!0&&T.sort(Bt,Ne),Ln=ot.enabled===!1||ot.isPresenting===!1||ot.hasDepthSensing()===!1,Ln&&P.addToRenderList(T,b),this.info.autoReset===!0&&this.info.reset(),ke===!0&&J.beginShadows();let V=E.state.shadowsArray;if(dt.render(V,b,L),ke===!0&&J.endShadows(),(H&&D.hasRenderPass())===!1){let St=T.opaque,pt=T.transmissive;if(E.setupLights(),L.isArrayCamera){let Mt=L.cameras;if(pt.length>0)for(let At=0,kt=Mt.length;At<kt;At++){let te=Mt[At];Su(St,pt,b,te)}Ln&&P.render(b);for(let At=0,kt=Mt.length;At<kt;At++){let te=Mt[At];bu(T,b,te,te.viewport)}}else pt.length>0&&Su(St,pt,b,L),Ln&&P.render(b),bu(T,b,L)}nt!==null&&B===0&&(zt.updateMultisampleRenderTarget(nt),zt.updateRenderTargetMipmap(nt)),H&&D.end(I),b.isScene===!0&&b.onAfterRender(I,b,L),ut.resetDefaultState(),q=-1,et=null,w.pop(),w.length>0?(E=w[w.length-1],zt.setTextureUnits(E.state.textureUnits),ke===!0&&J.setGlobalState(I.clippingPlanes,E.state.camera)):E=null,_.pop(),_.length>0?T=_[_.length-1]:T=null,U!==null&&U.renderEnd()};function uc(b,L,X,H){if(b.visible===!1)return;if(b.layers.test(L.layers)){if(b.isGroup)X=b.renderOrder;else if(b.isLOD)b.autoUpdate===!0&&b.update(L);else if(b.isLight)E.pushLight(b),b.castShadow&&E.pushShadow(b);else if(b.isSprite){let St=L.isArrayCamera?en:Qt;if(!b.frustumCulled||b.intersectsFrustum(St)){H&&Ze.setFromMatrixPosition(b.matrixWorld).applyMatrix4(Ee);let pt=at.update(b),Mt=b.material;Mt.visible&&T.push(b,pt,Mt,X,Ze.z,null,L)}}else if(b.isMesh||b.isLine||b.isPoints){let St=L.isArrayCamera?en:Qt;if(!b.frustumCulled||b.intersectsFrustum(St)){let pt=at.update(b),Mt=b.material;if(H&&(b.boundingSphere!==void 0?(b.boundingSphere===null&&b.computeBoundingSphere(),Ze.copy(b.boundingSphere.center)):(pt.boundingSphere===null&&pt.computeBoundingSphere(),Ze.copy(pt.boundingSphere.center)),Ze.applyMatrix4(b.matrixWorld).applyMatrix4(Ee)),Array.isArray(Mt)){let At=pt.groups;for(let kt=0,te=At.length;kt<te;kt++){let wt=At[kt],ee=Mt[wt.materialIndex];ee&&ee.visible&&T.push(b,pt,ee,X,Ze.z,wt,L)}}else Mt.visible&&T.push(b,pt,Mt,X,Ze.z,null,L)}}}let gt=b.children;for(let St=0,pt=gt.length;St<pt;St++)uc(gt[St],L,X,H)}function bu(b,L,X,H){let{opaque:V,transmissive:gt,transparent:St}=b;E.setupLightsView(X),ke===!0&&J.setGlobalState(I.clippingPlanes,X),H&&xt.viewport(st.copy(H)),V.length>0&&Ta(V,L,X),gt.length>0&&Ta(gt,L,X),St.length>0&&Ta(St,L,X),xt.buffers.depth.setTest(!0),xt.buffers.depth.setMask(!0),xt.buffers.color.setMask(!0),xt.setPolygonOffset(!1)}function Su(b,L,X,H){if((X.isScene===!0?X.overrideMaterial:null)!==null)return;if(E.state.transmissionRenderTarget[H.id]===void 0){let wt=Me.has("EXT_color_buffer_half_float")||Me.has("EXT_color_buffer_float");E.state.transmissionRenderTarget[H.id]=new _n(1,1,{generateMipmaps:!0,type:wt?qn:bn,minFilter:Ei,samples:Math.max(4,be.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:ne.workingColorSpace})}let gt=E.state.transmissionRenderTarget[H.id],St=H.viewport||st;gt.setSize(St.z*I.transmissionResolutionScale,St.w*I.transmissionResolutionScale);let pt=I.getRenderTarget(),Mt=I.getActiveCubeFace(),At=I.getActiveMipmapLevel();I.setRenderTarget(gt),I.getClearColor(Z),lt=I.getClearAlpha(),lt<1&&I.setClearColor(16777215,.5),I.clear(),Ln&&P.render(X);let kt=I.toneMapping;I.toneMapping=oi;let te=H.viewport;if(H.viewport!==void 0&&(H.viewport=void 0),E.setupLightsView(H),ke===!0&&J.setGlobalState(I.clippingPlanes,H),Ta(b,X,H),zt.updateMultisampleRenderTarget(gt),zt.updateRenderTargetMipmap(gt),Me.has("WEBGL_multisampled_render_to_texture")===!1){let wt=!1;for(let ee=0,Ue=L.length;ee<Ue;ee++){let xe=L[ee],{object:ge,geometry:an,material:Tt,group:mn}=xe;if(Tt.side===ai&&ge.layers.test(H.layers)){let he=Tt.side;Tt.side=sn,Tt.needsUpdate=!0,wu(ge,X,H,an,Tt,mn),Tt.side=he,Tt.needsUpdate=!0,wt=!0}}wt===!0&&(zt.updateMultisampleRenderTarget(gt),zt.updateRenderTargetMipmap(gt))}I.setRenderTarget(pt,Mt,At),I.setClearColor(Z,lt),te!==void 0&&(H.viewport=te),I.toneMapping=kt}function Ta(b,L,X){let H=L.isScene===!0?L.overrideMaterial:null;for(let V=0,gt=b.length;V<gt;V++){let St=b[V],{object:pt,geometry:Mt,group:At}=St,kt=St.material;kt.allowOverride===!0&&H!==null&&(kt=H),pt.layers.test(X.layers)&&wu(pt,L,X,Mt,kt,At)}}function wu(b,L,X,H,V,gt){U!==null&&V.isNodeMaterial&&U.setObject(b,V),b.onBeforeRender(I,L,X,H,V,gt),b.modelViewMatrix.multiplyMatrices(X.matrixWorldInverse,b.matrixWorld),b.normalMatrix.getNormalMatrix(b.modelViewMatrix),V.onBeforeRender(I,L,X,H,b,gt),V.transparent===!0&&V.side===ai&&V.forceSinglePass===!1?(V.side=sn,V.needsUpdate=!0,I.renderBufferDirect(X,L,H,V,b,gt),V.side=ri,V.needsUpdate=!0,I.renderBufferDirect(X,L,H,V,b,gt),V.side=ai):I.renderBufferDirect(X,L,H,V,b,gt),b.onAfterRender(I,L,X,H,V,gt)}function Tu(b){let L=0;for(let X of b)X.texture!==null&&L++;return L}function gr(b,L,X){L.isScene!==!0&&(L=Pn);let H=Lt.get(b),V=E.state.lights,gt=E.state.shadowsArray,St=V.state.version,pt=tt.getParameters(b,V.state,gt,L,X,E.state.lightProbeGridArray),Mt=tt.getProgramCacheKey(pt),At=H.programs;H.environment=b.isMeshStandardMaterial||b.isMeshLambertMaterial||b.isMeshPhongMaterial?L.environment:null,H.fog=L.fog;let kt=b.isMeshStandardMaterial||b.isMeshLambertMaterial&&!b.envMap||b.isMeshPhongMaterial&&!b.envMap;H.envMap=A.get(b.envMap||H.environment,kt),H.envMapRotation=H.environment!==null&&b.envMap===null?L.environmentRotation:b.envMapRotation,At===void 0&&(b.addEventListener("dispose",fe),At=new Map,H.programs=At,H.programVariants=new Map);let te=At.get(Mt);if(te!==void 0){if(H.currentProgram===te&&H.lightsStateVersion===St)return Au(b,pt),te}else pt.uniforms=tt.getUniforms(b),U!==null&&b.isNodeMaterial&&U.build(b,X,pt),b.onBeforeCompile(pt,I),te=tt.acquireProgram(pt,Mt),At.set(Mt,te),H.uniforms=pt.uniforms;let wt=H.uniforms;return(!b.isShaderMaterial&&!b.isRawShaderMaterial||b.clipping===!0)&&(wt.clippingPlanes=J.uniform),Au(b,pt),H.needsLights=tm(b),H.lightsStateVersion=St,H.needsLights&&(wt.ambientLightColor.value=V.state.ambient,wt.lightProbe.value=V.state.probe,wt.sunLights.value=V.state.sun,wt.sunLightShadows.value=V.state.sunShadow,wt.directionalLights.value=V.state.directional,wt.directionalLightShadows.value=V.state.directionalShadow,wt.spotLights.value=V.state.spot,wt.spotLightShadows.value=V.state.spotShadow,wt.rectAreaLights.value=V.state.rectArea,wt.ltc_1.value=V.state.rectAreaLTC1,wt.ltc_2.value=V.state.rectAreaLTC2,wt.pointLights.value=V.state.point,wt.pointLightShadows.value=V.state.pointShadow,wt.hemisphereLights.value=V.state.hemi,wt.sunShadowMatrix.value=V.state.sunShadowMatrix,wt.sunShadowCascade.value=V.state.sunShadowCascade,wt.directionalShadowMatrix.value=V.state.directionalShadowMatrix,wt.spotLightMatrix.value=V.state.spotLightMatrix,wt.spotLightMap.value=V.state.spotLightMap,wt.pointShadowMatrix.value=V.state.pointShadowMatrix),H.numLightProbeGrids=Tu(E.state.lightProbeGridArray),H.currentProgram=te,H.uniformsList=null,te}function Kp(b,L,X,H,V){let gt=Lt.get(b),St=gt.currentProgram.id+","+H+","+V,pt=gt.programVariants.get(St);return pt===void 0?(pt=gr(b,L,X),gt.programVariants.set(St,pt)):(gt.currentProgram=pt,gt.uniformsList=null,gt.outputColorSpace=H,gt.toneMapping=V),pt}function Eu(b){if(b.uniformsList===null){let L=b.currentProgram.getUniforms();b.uniformsList=Ks.seqWithValue(L.seq,b.uniforms)}return b.uniformsList}function Au(b,L){let X=Lt.get(b);X.outputColorSpace=L.outputColorSpace,X.batching=L.batching,X.batchingColor=L.batchingColor,X.instancing=L.instancing,X.instancingColor=L.instancingColor,X.instancingMorph=L.instancingMorph,X.skinning=L.skinning,X.morphTargets=L.morphTargets,X.morphNormals=L.morphNormals,X.morphColors=L.morphColors,X.morphTargetsCount=L.morphTargetsCount,X.numClippingPlanes=L.numClippingPlanes,X.numIntersection=L.numClipIntersection,X.vertexAlphas=L.vertexAlphas,X.vertexTangents=L.vertexTangents,X.toneMapping=L.toneMapping}function jp(b,L,X,H,V){L.isScene!==!0&&(L=Pn),zt.resetTextureUnits();let gt=L.fog,St=H.isMeshStandardMaterial||H.isMeshLambertMaterial||H.isMeshPhongMaterial?L.environment:null,pt=nt===null?I.outputColorSpace:nt.isXRRenderTarget===!0?nt.texture.colorSpace:ne.workingColorSpace,Mt=H.isMeshStandardMaterial||H.isMeshLambertMaterial&&!H.envMap||H.isMeshPhongMaterial&&!H.envMap,At=A.get(H.envMap||St,Mt),kt=H.vertexColors===!0&&!!X.attributes.color&&X.attributes.color.itemSize===4,te=!!X.attributes.tangent&&(!!H.normalMap||H.anisotropy>0),wt=!!X.morphAttributes.position,ee=!!X.morphAttributes.normal,Ue=!!X.morphAttributes.color,xe=oi;H.toneMapped&&(nt===null||nt.isXRRenderTarget===!0)&&(xe=I.toneMapping);let ge=X.morphAttributes.position||X.morphAttributes.normal||X.morphAttributes.color,an=ge!==void 0?ge.length:0,Tt=Lt.get(H),mn=E.state.lights;if(ke===!0&&(Mn===!0||b!==et)){let Ae=b===et&&H.id===q;J.setState(H,b,Ae)}let he=!1,es=!1;H.version===Tt.__version?Tt.needsLights&&Tt.lightsStateVersion!==mn.state.version||V.isBatchedMesh&&Tt.batching===!1||!V.isBatchedMesh&&Tt.batching===!0||V.isBatchedMesh&&Tt.batchingColor===!0&&V._colorsTexture===null||V.isBatchedMesh&&Tt.batchingColor===!1&&V._colorsTexture!==null||V.isInstancedMesh&&Tt.instancing===!1||!V.isInstancedMesh&&Tt.instancing===!0||V.isSkinnedMesh&&Tt.skinning===!1||!V.isSkinnedMesh&&Tt.skinning===!0||V.isInstancedMesh&&Tt.instancingColor===!0&&V.instanceColor===null||V.isInstancedMesh&&Tt.instancingColor===!1&&V.instanceColor!==null||V.isInstancedMesh&&Tt.instancingMorph===!0&&V.morphTexture===null||V.isInstancedMesh&&Tt.instancingMorph===!1&&V.morphTexture!==null||Tt.envMap!==At||H.fog===!0&&Tt.fog!==gt||Tt.numClippingPlanes!==void 0&&(Tt.numClippingPlanes!==J.numPlanes||Tt.numIntersection!==J.numIntersection)||Tt.vertexAlphas!==kt||Tt.vertexTangents!==te||Tt.morphTargets!==wt||Tt.morphNormals!==ee||Tt.morphColors!==Ue||Tt.morphTargetsCount!==an||Tt.numLightProbeGrids!==Tu(E.state.lightProbeGridArray)?he=!0:(Tt.outputColorSpace!==pt||Tt.toneMapping!==xe)&&(es=!0):(he=!0,Tt.__version=H.version);let on=Tt.currentProgram;(he===!0||es===!0)&&(on=es===!0?Kp(H,L,V,pt,xe):gr(H,L,V),U&&H.isNodeMaterial&&U.onUpdateProgram(H,on,Tt));let Ea=!1,Ui=!1,ns=!1,le=on.getUniforms(),nn=Tt.uniforms;if(xt.useProgram(on.program)&&(Ea=!0,Ui=!0,ns=!0),H.id!==q&&(q=H.id,Ui=!0),Ea||et!==b){xt.buffers.depth.getReversed()&&b.reversedDepth!==!0&&(b._reversedDepth=!0,b.updateProjectionMatrix()),le.setValue(F,"projectionMatrix",b.projectionMatrix),le.setValue(F,"viewMatrix",b.matrixWorldInverse);let Ke=le.map.cameraPosition;Ke!==void 0&&Ke.setValue(F,Qn.setFromMatrixPosition(b.matrixWorld)),be.logarithmicDepthBuffer&&le.setValue(F,"logDepthBufFC",2/(Math.log(b.far+1)/Math.LN2)),(H.isMeshPhongMaterial||H.isMeshToonMaterial||H.isMeshLambertMaterial||H.isMeshBasicMaterial||H.isMeshStandardMaterial||H.isShaderMaterial)&&le.setValue(F,"isOrthographic",b.isOrthographicCamera===!0),et!==b&&(et=b,Ui=!0,ns=!0)}if(Tt.needsLights&&(mn.state.sunShadowMap.length>0&&le.setValue(F,"sunShadowMap",mn.state.sunShadowMap,zt),mn.state.directionalShadowMap.length>0&&le.setValue(F,"directionalShadowMap",mn.state.directionalShadowMap,zt),mn.state.spotShadowMap.length>0&&le.setValue(F,"spotShadowMap",mn.state.spotShadowMap,zt),mn.state.pointShadowMap.length>0&&le.setValue(F,"pointShadowMap",mn.state.pointShadowMap,zt)),V.isSkinnedMesh){le.setOptional(F,V,"bindMatrix"),le.setOptional(F,V,"bindMatrixInverse");let Ae=V.skeleton;Ae&&(Ae.boneTexture===null&&Ae.computeBoneTexture(),le.setValue(F,"boneTexture",Ae.boneTexture,zt))}V.isBatchedMesh&&(le.setOptional(F,V,"batchingTexture"),le.setValue(F,"batchingTexture",V._matricesTexture,zt),le.setOptional(F,V,"batchingIdTexture"),le.setValue(F,"batchingIdTexture",V._indirectTexture,zt),le.setOptional(F,V,"batchingColorTexture"),V._colorsTexture!==null&&le.setValue(F,"batchingColorTexture",V._colorsTexture,zt));let zn=X.morphAttributes;if((zn.position!==void 0||zn.normal!==void 0||zn.color!==void 0)&&K.update(V,X,on),(Ui||Tt.receiveShadow!==V.receiveShadow)&&(Tt.receiveShadow=V.receiveShadow,le.setValue(F,"receiveShadow",V.receiveShadow)),(H.isMeshStandardMaterial||H.isMeshLambertMaterial||H.isMeshPhongMaterial)&&H.envMap===null&&L.environment!==null&&(nn.envMapIntensity.value=L.environmentIntensity),nn.dfgLUT!==void 0&&(nn.dfgLUT.value=Lv()),Ui){if(le.setValue(F,"toneMappingExposure",I.toneMappingExposure),Tt.needsLights&&Qp(nn,ns),gt&&H.fog===!0&&ht.refreshFogUniforms(nn,gt),ht.refreshMaterialUniforms(nn,H,yt,Ct,E.state.transmissionRenderTarget[b.id]),Tt.needsLights&&Tt.numLightProbeGrids>0){let Ae=y,Ke=0;for(let fi of E.state.lightProbeGridArray)fi.texture!==null&&(Ae.textures[Ke]=fi.texture,Ae.min[Ke]=fi.boundingBox.min,Ae.max[Ke]=fi.boundingBox.max,Ae.resolution[Ke]=fi.resolution,Ke++);for(let fi in Ae)Ae[fi].length=Ke;nn.probesSH.value=Ae.textures,nn.probesMin.value=Ae.min,nn.probesMax.value=Ae.max,nn.probesResolution.value=Ae.resolution}Ks.upload(F,Eu(Tt),nn,zt)}if(H.isShaderMaterial&&H.uniformsNeedUpdate===!0&&(Ks.upload(F,Eu(Tt),nn,zt),H.uniformsNeedUpdate=!1),H.isSpriteMaterial&&le.setValue(F,"center",V.center),le.setValue(F,"modelViewMatrix",V.modelViewMatrix),le.setValue(F,"normalMatrix",V.normalMatrix),le.setValue(F,"modelMatrix",V.matrixWorld),H.uniformsGroups!==void 0){let Ae=H.uniformsGroups;for(let Ke=0,fi=Ae.length;Ke<fi;Ke++){let Cu=Ae[Ke];Rt.update(Cu,on),Rt.bind(Cu,on)}}return on}function Qp(b,L){b.ambientLightColor.needsUpdate=L,b.lightProbe.needsUpdate=L,b.sunLights.needsUpdate=L,b.sunLightShadows.needsUpdate=L,b.directionalLights.needsUpdate=L,b.directionalLightShadows.needsUpdate=L,b.pointLights.needsUpdate=L,b.pointLightShadows.needsUpdate=L,b.spotLights.needsUpdate=L,b.spotLightShadows.needsUpdate=L,b.rectAreaLights.needsUpdate=L,b.hemisphereLights.needsUpdate=L}function tm(b){return b.isMeshLambertMaterial||b.isMeshToonMaterial||b.isMeshPhongMaterial||b.isMeshStandardMaterial||b.isShadowMaterial||b.isShaderMaterial&&b.lights===!0}this.getActiveCubeFace=function(){return O},this.getActiveMipmapLevel=function(){return B},this.getRenderTarget=function(){return nt},this.setRenderTargetTextures=function(b,L,X){let H=Lt.get(b);H.__autoAllocateDepthBuffer=b.resolveDepthBuffer===!1,H.__autoAllocateDepthBuffer===!1&&(H.__useRenderToTexture=!1),Lt.get(b.texture).__webglTexture=L,Lt.get(b.depthTexture).__webglTexture=H.__autoAllocateDepthBuffer?void 0:X,H.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(b,L){let X=Lt.get(b);X.__webglFramebuffer=L,X.__useDefaultFramebuffer=L===void 0},this.setRenderTarget=function(b,L=0,X=0){nt=b,O=L,B=X;let H=null,V=!1,gt=!1;if(b){let pt=Lt.get(b);if(pt.__useDefaultFramebuffer!==void 0){xt.bindFramebuffer(F.FRAMEBUFFER,pt.__webglFramebuffer),st.copy(b.viewport),Et.copy(b.scissor),Ut=b.scissorTest,xt.viewport(st),xt.scissor(Et),xt.setScissorTest(Ut),q=-1;return}else if(pt.__webglFramebuffer===void 0)zt.setupRenderTarget(b);else if(pt.__hasExternalTextures)zt.rebindTextures(b,Lt.get(b.texture).__webglTexture,Lt.get(b.depthTexture).__webglTexture);else if(b.depthBuffer){let kt=b.depthTexture;if(pt.__boundDepthTexture!==kt){if(kt!==null&&Lt.has(kt)&&(b.width!==kt.image.width||b.height!==kt.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");zt.setupDepthRenderbuffer(b)}}let Mt=b.texture;(Mt.isData3DTexture||Mt.isDataArrayTexture||Mt.isCompressedArrayTexture)&&(gt=!0);let At=Lt.get(b).__webglFramebuffer;b.isWebGLCubeRenderTarget?(Array.isArray(At[L])?H=At[L][X]:H=At[L],V=!0):b.samples>0&&zt.useMultisampledRTT(b)===!1?H=Lt.get(b).__webglMultisampledFramebuffer:Array.isArray(At)?H=At[X]:H=At,st.copy(b.viewport),Et.copy(b.scissor),Ut=b.scissorTest}else st.copy(Dt).multiplyScalar(yt).floor(),Et.copy(de).multiplyScalar(yt).floor(),Ut=me;if(X!==0&&(H=W),xt.bindFramebuffer(F.FRAMEBUFFER,H)&&xt.drawBuffers(b,H),xt.viewport(st),xt.scissor(Et),xt.setScissorTest(Ut),V){let pt=Lt.get(b.texture);F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_CUBE_MAP_POSITIVE_X+L,pt.__webglTexture,X)}else if(gt){let pt=L;for(let Mt=0;Mt<b.textures.length;Mt++){let At=Lt.get(b.textures[Mt]);F.framebufferTextureLayer(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0+Mt,At.__webglTexture,X,pt)}}else if(b!==null&&X!==0){let pt=Lt.get(b.texture);F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,pt.__webglTexture,X)}q=-1};function Ru(b){let L=Lt.get(b);return(L.__readFormat!==b.format||L.__readType!==b.type)&&(L.__readFormat=b.format,L.__readType=b.type,L.__formatReadable=be.textureFormatReadable(b.format),L.__typeReadable=be.textureTypeReadable(b.type)),L}this.readRenderTargetPixels=function(b,L,X,H,V,gt,St,pt=0){if(!(b&&b.isWebGLRenderTarget)){Ft("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Mt=Lt.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&St!==void 0&&(Mt=Mt[St],Array.isArray(Mt)&&(Mt=Mt[0])),Mt){xt.bindFramebuffer(F.FRAMEBUFFER,Mt);try{let At=b.textures[pt],kt=At.format,te=At.type;b.textures.length>1&&F.readBuffer(F.COLOR_ATTACHMENT0+pt);let wt=Ru(At);if(wt.__formatReadable===!1){Ft("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(wt.__typeReadable===!1){Ft("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}L>=0&&L<=b.width-H&&X>=0&&X<=b.height-V&&F.readPixels(L,X,H,V,ct.convert(kt),ct.convert(te),gt)}finally{let At=nt!==null?Lt.get(nt).__webglFramebuffer:null;xt.bindFramebuffer(F.FRAMEBUFFER,At)}}},this.readRenderTargetPixelsAsync=async function(b,L,X,H,V,gt,St,pt=0){if(!(b&&b.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Mt=Lt.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&St!==void 0&&(Mt=Mt[St],Array.isArray(Mt)&&(Mt=Mt[0])),Mt)if(L>=0&&L<=b.width-H&&X>=0&&X<=b.height-V){xt.bindFramebuffer(F.FRAMEBUFFER,Mt);let At=b.textures[pt],kt=At.format,te=At.type;b.textures.length>1&&F.readBuffer(F.COLOR_ATTACHMENT0+pt);let wt=Ru(At);if(wt.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(wt.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let ee=F.createBuffer();F.bindBuffer(F.PIXEL_PACK_BUFFER,ee),F.bufferData(F.PIXEL_PACK_BUFFER,gt.byteLength,F.STREAM_READ),F.readPixels(L,X,H,V,ct.convert(kt),ct.convert(te),0),F.bindBuffer(F.PIXEL_PACK_BUFFER,null);let Ue=nt!==null?Lt.get(nt).__webglFramebuffer:null;xt.bindFramebuffer(F.FRAMEBUFFER,Ue);let xe=F.fenceSync(F.SYNC_GPU_COMMANDS_COMPLETE,0);return F.flush(),await Bd(F,xe,4),F.bindBuffer(F.PIXEL_PACK_BUFFER,ee),F.getBufferSubData(F.PIXEL_PACK_BUFFER,0,gt),F.bindBuffer(F.PIXEL_PACK_BUFFER,null),F.deleteBuffer(ee),F.deleteSync(xe),gt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(b,L=null,X=0){let H=Math.pow(2,-X),V=Math.floor(b.image.width*H),gt=Math.floor(b.image.height*H),St=L!==null?L.x:0,pt=L!==null?L.y:0;zt.setTexture2D(b,0),F.copyTexSubImage2D(F.TEXTURE_2D,X,0,0,St,pt,V,gt),xt.unbindTexture()},this.copyTextureToTexture=function(b,L,X=null,H=null,V=0,gt=0){let St,pt,Mt,At,kt,te,wt,ee,Ue,xe=b.isCompressedTexture?b.mipmaps[gt]:b.image;if(X!==null)St=X.max.x-X.min.x,pt=X.max.y-X.min.y,Mt=X.isBox3?X.max.z-X.min.z:1,At=X.min.x,kt=X.min.y,te=X.isBox3?X.min.z:0;else{let le=Math.pow(2,-V);St=Math.floor(xe.width*le),pt=Math.floor(xe.height*le),b.isDataArrayTexture?Mt=xe.depth:b.isData3DTexture?Mt=Math.floor(xe.depth*le):Mt=1,At=0,kt=0,te=0}H!==null?(wt=H.x,ee=H.y,Ue=H.z):(wt=0,ee=0,Ue=0);let ge=ct.convert(L.format),an=ct.convert(L.type),Tt;L.isData3DTexture?(zt.setTexture3D(L,0),Tt=F.TEXTURE_3D):L.isDataArrayTexture||L.isCompressedArrayTexture?(zt.setTexture2DArray(L,0),Tt=F.TEXTURE_2D_ARRAY):(zt.setTexture2D(L,0),Tt=F.TEXTURE_2D),xt.activeTexture(F.TEXTURE0),xt.pixelStorei(F.UNPACK_FLIP_Y_WEBGL,L.flipY),xt.pixelStorei(F.UNPACK_PREMULTIPLY_ALPHA_WEBGL,L.premultiplyAlpha),xt.pixelStorei(F.UNPACK_ALIGNMENT,L.unpackAlignment);let mn=xt.getParameter(F.UNPACK_ROW_LENGTH),he=xt.getParameter(F.UNPACK_IMAGE_HEIGHT),es=xt.getParameter(F.UNPACK_SKIP_PIXELS),on=xt.getParameter(F.UNPACK_SKIP_ROWS),Ea=xt.getParameter(F.UNPACK_SKIP_IMAGES);xt.pixelStorei(F.UNPACK_ROW_LENGTH,xe.width),xt.pixelStorei(F.UNPACK_IMAGE_HEIGHT,xe.height),xt.pixelStorei(F.UNPACK_SKIP_PIXELS,At),xt.pixelStorei(F.UNPACK_SKIP_ROWS,kt),xt.pixelStorei(F.UNPACK_SKIP_IMAGES,te);let Ui=b.isDataArrayTexture||b.isData3DTexture,ns=L.isDataArrayTexture||L.isData3DTexture;if(b.isDepthTexture){let le=Lt.get(b),nn=Lt.get(L),zn=Lt.get(le.__renderTarget),Ae=Lt.get(nn.__renderTarget);xt.bindFramebuffer(F.READ_FRAMEBUFFER,zn.__webglFramebuffer),xt.bindFramebuffer(F.DRAW_FRAMEBUFFER,Ae.__webglFramebuffer);for(let Ke=0;Ke<Mt;Ke++)Ui&&(F.framebufferTextureLayer(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,Lt.get(b).__webglTexture,V,te+Ke),F.framebufferTextureLayer(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,Lt.get(L).__webglTexture,gt,Ue+Ke)),F.blitFramebuffer(At,kt,At+St,kt+pt,wt,ee,wt+St,ee+pt,F.DEPTH_BUFFER_BIT,F.NEAREST);xt.bindFramebuffer(F.READ_FRAMEBUFFER,null),xt.bindFramebuffer(F.DRAW_FRAMEBUFFER,null)}else if(V!==0||b.isRenderTargetTexture||Lt.has(b)){let le=Lt.get(b),nn=Lt.get(L);xt.bindFramebuffer(F.READ_FRAMEBUFFER,R),xt.bindFramebuffer(F.DRAW_FRAMEBUFFER,C);for(let zn=0;zn<Mt;zn++)Ui?F.framebufferTextureLayer(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,le.__webglTexture,V,te+zn):F.framebufferTexture2D(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,le.__webglTexture,V),ns?F.framebufferTextureLayer(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,nn.__webglTexture,gt,Ue+zn):F.framebufferTexture2D(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,nn.__webglTexture,gt),V!==0?F.blitFramebuffer(At,kt,At+St,kt+pt,wt,ee,wt+St,ee+pt,F.COLOR_BUFFER_BIT,F.NEAREST):ns?F.copyTexSubImage3D(Tt,gt,wt,ee,Ue+zn,At,kt,St,pt):F.copyTexSubImage2D(Tt,gt,wt,ee,At,kt,St,pt);xt.bindFramebuffer(F.READ_FRAMEBUFFER,null),xt.bindFramebuffer(F.DRAW_FRAMEBUFFER,null)}else ns?b.isDataTexture||b.isData3DTexture?F.texSubImage3D(Tt,gt,wt,ee,Ue,St,pt,Mt,ge,an,xe.data):L.isCompressedArrayTexture?F.compressedTexSubImage3D(Tt,gt,wt,ee,Ue,St,pt,Mt,ge,xe.data):F.texSubImage3D(Tt,gt,wt,ee,Ue,St,pt,Mt,ge,an,xe):b.isDataTexture?F.texSubImage2D(F.TEXTURE_2D,gt,wt,ee,St,pt,ge,an,xe.data):b.isCompressedTexture?F.compressedTexSubImage2D(F.TEXTURE_2D,gt,wt,ee,xe.width,xe.height,ge,xe.data):F.texSubImage2D(F.TEXTURE_2D,gt,wt,ee,St,pt,ge,an,xe);xt.pixelStorei(F.UNPACK_ROW_LENGTH,mn),xt.pixelStorei(F.UNPACK_IMAGE_HEIGHT,he),xt.pixelStorei(F.UNPACK_SKIP_PIXELS,es),xt.pixelStorei(F.UNPACK_SKIP_ROWS,on),xt.pixelStorei(F.UNPACK_SKIP_IMAGES,Ea),gt===0&&L.generateMipmaps===!0&&L.mipmapsAutoUpdate===!0&&F.generateMipmap(Tt),xt.unbindTexture()},this.initRenderTarget=function(b){Lt.get(b).__webglFramebuffer===void 0&&zt.setupRenderTarget(b)},this.initTexture=function(b){b.isCubeTexture?zt.setTextureCube(b,0):b.isData3DTexture?zt.setTexture3D(b,0):b.isDataArrayTexture||b.isCompressedArrayTexture?zt.setTexture2DArray(b,0):zt.setTexture2D(b,0),xt.unbindTexture()},this.resetState=function(){O=0,B=0,nt=null,xt.reset(),ut.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Fn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorSpace=ne._getDrawingBufferColorSpace(t),e.unpackColorSpace=ne._getUnpackColorSpace()}};function Af(s,t=!1){let e=s[0].index!==null,n=new Set(Object.keys(s[0].attributes)),i=new Set(Object.keys(s[0].morphAttributes)),r={},a={},o=s[0].morphTargetsRelative,l=new Xe;l.morphTargetsRelative=o;let c=0;for(let h=0;h<s.length;++h){let u=s[h],d=0,f=0;if(e!==(u.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(let m in u.attributes){if(!n.has(m))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have compatible attributes; make sure "'+m+'" attribute exists among all geometries, or in none of them.'),null;r[m]===void 0&&(r[m]=[]),r[m].push(u.attributes[m]),d++}if(d!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of attributes."),null;if(o!==u.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(let m in u.morphAttributes){if(!i.has(m))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+".  .morphAttributes must be consistent throughout all geometries."),null;if(u.morphAttributes[m].length!==s[0].morphAttributes[m].length)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have the same number of morph targets for the "'+m+'" morph attribute.'),null;a[m]===void 0&&(a[m]=[]),a[m].push(u.morphAttributes[m]),f++}if(f!==i.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of morph attributes."),null;if(t){let m;if(e)m=u.index.count;else if(u.attributes.position!==void 0)m=u.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". The geometry must have either an index or a position attribute"),null;l.addGroup(c,m,h),c+=m}}if(e){let h=0,u=[];for(let d=0;d<s.length;++d){let f=s[d].index;for(let m=0;m<f.count;++m)u.push(f.getX(m)+h);h+=s[d].attributes.position.count}l.setIndex(u)}for(let h in r){let u=Ef(r[h]);if(!u)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" attribute."),null;l.setAttribute(h,u)}for(let h in a){let u=a[h][0].length;if(u!==0){l.morphAttributes=l.morphAttributes||{},l.morphAttributes[h]=[];for(let d=0;d<u;++d){let f=[];for(let x=0;x<a[h].length;++x)f.push(a[h][x][d]);let m=Ef(f);if(!m)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" morphAttribute."),null;l.morphAttributes[h].push(m)}}}return l}function Ef(s){let t,e,n,i=-1,r=0;for(let c=0;c<s.length;++c){let h=s[c];if(t===void 0&&(t=h.array.constructor),t!==h.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(e===void 0&&(e=h.itemSize),e!==h.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=h.normalized),n!==h.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(i===-1&&(i=h.gpuType),i!==h.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=h.count*e}let a=new t(r),o=new Ce(a,e,n),l=0;for(let c=0;c<s.length;++c){let h=s[c];if(h.isInterleavedBufferAttribute){let u=l/e;for(let d=0,f=h.count;d<f;d++)for(let m=0;m<e;m++){let x=h.getComponent(d,m);o.setComponent(d+u,m,x)}}else a.set(h.array,l);l+=h.count*e}return i!==void 0&&(o.gpuType=i),o}async function Cf(s){let t=await fetch(s);if(!t.ok)throw new Error("model "+s);let e=await t.arrayBuffer(),n=new DataView(e),i=n.getUint32(0,!0),r=n.getUint32(4,!0),a=[8,12,16].map(d=>n.getFloat32(d,!0)),o=[20,24,28].map(d=>n.getFloat32(d,!0)),l=new Int16Array(e,32,i*3),c=new Uint16Array(e.slice(32+i*6,32+i*6+r*6)),h=new Float32Array(i*3);for(let d=0;d<h.length;d++){let f=d%3;h[d]=(l[d]+32768)/65535*(o[f]-a[f])+a[f]}let u=new Xe;return u.setAttribute("position",new Ce(h,3)),u.setIndex(new Ce(c,1)),u.computeVertexNormals(),u.computeBoundingBox(),u.computeBoundingSphere(),u}function Zi(s,t,e){let n=s*374761393+t*668265263+e*2147483647|0;return n=Math.imul(n^n>>>13,1274126177),((n^n>>>16)>>>0)/4294967295}function Lh(s,t,e){let n=Math.floor(s),i=Math.floor(t),r=Math.floor(e),a=s-n,o=t-i,l=e-r,c=a*a*(3-2*a),h=o*o*(3-2*o),u=l*l*(3-2*l),d=(f,m,x)=>f+(m-f)*x;return d(d(d(Zi(n,i,r),Zi(n+1,i,r),c),d(Zi(n,i+1,r),Zi(n+1,i+1,r),c),h),d(d(Zi(n,i,r+1),Zi(n+1,i,r+1),c),d(Zi(n,i+1,r+1),Zi(n+1,i+1,r+1),c),h),u)}var Dh=(s,t,e)=>Lh(s,t,e)*.55+Lh(s*2.1,t*2.1,e*2.1)*.3+Lh(s*4.3,t*4.3,e*4.3)*.15;function Dv(s){let t=s.attributes.position.count,e=s.attributes.normal.array,n=s.index?s.index.array:Uint32Array.from({length:t},(l,c)=>c),i=new Float32Array(t*3),r=new Uint16Array(t);for(let l=0;l<n.length;l+=3)for(let c=0;c<3;c++){let h=n[l+c];for(let u=1;u<3;u++){let d=n[l+(c+u)%3];i[h*3]+=e[d*3],i[h*3+1]+=e[d*3+1],i[h*3+2]+=e[d*3+2],r[h]++}}let a=new Float32Array(t),o=s.attributes.position.array;for(let l=0;l<t;l++){if(!r[l])continue;let c=i[l*3]/r[l],h=i[l*3+1]/r[l],u=i[l*3+2]/r[l],d=Math.hypot(c,h,u)||1;a[l]=1-(e[l*3]*c+e[l*3+1]*h+e[l*3+2]*u)/d}return a}function Nh(s,t){let e=s.attributes.position.count,n=s.attributes.position.array,i=s.attributes.normal.array,r=s.boundingBox,a=r.getSize(new k),o=new Float32Array(e*3),l=new Float32Array(e),c=Dv(s),h=t.base,u=t.rustC||[.42,.2,.08],d=t.wearC||[.62,.6,.56],f=t.seed||0,m=2.6/Math.max(a.x,a.y,a.z);for(let x=0;x<e;x++){let p=n[x*3],g=n[x*3+1],v=n[x*3+2],S=i[x*3],y=i[x*3+1],T=i[x*3+2],E=(p-r.min.x)/(a.x||1),_=(g-r.min.y)/(a.y||1),w=(v-r.min.z)/(a.z||1),D=p*m*2.2+f,I=g*m*2.2,N=v*m*2.2,U=Dh(D,I,N),W=Dh(D*2.7+9,I*2.7,N*2.7),R=c[x],C=h[0],O=h[1],B=h[2],nt=.78+U*.5;if(C*=nt,O*=nt,B*=nt,t.accent){let lt=t.accent(E,_,w,S,y,T,U);if(lt){let bt=lt[3]??1;C+=(lt[0]-C)*bt,O+=(lt[1]-O)*bt,B+=(lt[2]-B)*bt}}let q=(t.rust??.5)*Rf(.46,.7,W+(y>0?.04:-.05)+(1-_)*.12);C+=(u[0]*(.7+U*.6)-C)*q,O+=(u[1]*(.7+U*.6)-O)*q,B+=(u[2]*(.7+U*.6)-B)*q;let et=(t.wear??.5)*Rf(.04,.16,R)*(.5+W);C+=(d[0]-C)*et,O+=(d[1]-O)*et,B+=(d[2]-B)*et;let st=(t.dirt??.4)*(1-_)*(1-_)+(y<-.4?.25:0),Et=Math.min(.5,R*1.3),Ut=1-st*.55-Et*.25;C*=Ut,O*=Ut,B*=Ut;let Z=0;if(t.glow)for(let lt of t.glow){let bt=Math.hypot((E-lt.p[0])*a.x,(_-lt.p[1])*a.y,(w-lt.p[2])*a.z)/(lt.r*Math.max(a.x,a.y,a.z));if(bt<1){let Ct=1-bt*bt;C+=(lt.c[0]-C)*Ct,O+=(lt.c[1]-O)*Ct,B+=(lt.c[2]-B)*Ct,Z=Math.max(Z,Ct*(lt.k??1))}}o[x*3]=C,o[x*3+1]=O,o[x*3+2]=B,l[x]=Z}return s.setAttribute("color",new Ce(o,3)),s.setAttribute("aGlow",new Ce(l,1)),s}var Rf=(s,t,e)=>{let n=Math.max(0,Math.min(1,(e-s)/(t-s)));return n*n*(3-2*n)};function Nv(s,t,e=0){let n=s.attributes.position.count,i=new Float32Array(n*3),r=new Float32Array(n).fill(e),a=s.attributes.position.array;for(let o=0;o<n;o++){let l=.82+Dh(a[o*3]*5,a[o*3+1]*5,a[o*3+2]*5)*.4;i[o*3]=t[0]*l,i[o*3+1]=t[1]*l,i[o*3+2]=t[2]*l}return s.setAttribute("color",new Ce(i,3)),s.setAttribute("aGlow",new Ce(r,1)),s}function Zt(s,t,e,n=[0,0,0],i=[0,0,0],r=[1,1,1],a=0){let o=s==="box"?new En(...t):s==="cyl"?new Vi(...t):s==="sph"?new os(...t):s==="cone"?new Br(...t):new wi(...t);o=o.index?o.toNonIndexed():o;let l=new ae().compose(new k(...n),new hn().setFromEuler(new un(...i)),new k(...r));return o.applyMatrix4(l),o.deleteAttribute("uv"),Nv(o,e,a)}function pn(s){let t=Af(s,!1);return t.computeBoundingBox(),t.computeBoundingSphere(),t}var ha={uFlash:{value:0},uTime:{value:0},uTint:{value:new Pt(1,1,1)}};function ua(s={}){let t=new Wn({vertexColors:!0,roughness:s.rough??.72,metalness:s.metal??.3,envMapIntensity:s.env??.55,flatShading:!!s.flat});return t.onBeforeCompile=e=>{e.uniforms.uFlash=s.ownFlash??ha.uFlash,e.uniforms.uTime=ha.uTime,e.uniforms.uGlowK={value:s.glowK??.9},e.vertexShader=e.vertexShader.replace("#include <common>",`#include <common>
attribute float aGlow; varying float vGlow;`).replace("#include <begin_vertex>",`#include <begin_vertex>
vGlow = aGlow;`),e.fragmentShader=e.fragmentShader.replace("#include <common>",`#include <common>
varying float vGlow; uniform float uFlash; uniform float uTime; uniform float uGlowK;`).replace("#include <emissivemap_fragment>",`#include <emissivemap_fragment>
totalEmissiveRadiance += diffuseColor.rgb * vGlow * uGlowK * (0.85 + 0.15 * sin(uTime * 4.0)) + vec3(1.0, 0.45, 0.3) * uFlash;`)},t.customProgramCacheKey=()=>"metal"+(s.ownFlash?"o":""),t}var Uv=[.62,.42,.18];var tr=[1,.18,.1],Ci=[.3,.95,1],hi=[1,.55,.15],If=[.8,.35,1],Pf=[.4,1,.6],Uh={robot_leg:{base:[.36,.33,.3],rust:.55,wear:.65,dirt:.6,accent:(s,t)=>t<.12?[.55,.38,.12,.7]:null},robot_body:{base:Uv,rust:.55,wear:.6,dirt:.5,accent:(s,t)=>t>.55&&t<.62?[.15,.15,.16,.8]:null,glow:[{p:[.5,.72,.98],r:.09,c:Ci,k:1.4}]},arm_mg:{base:[.34,.33,.32],rust:.45,wear:.7,dirt:.3,accent:(s,t,e)=>e>.8?[.55,.42,.18,.7]:null},arm_laser:{base:[.38,.4,.42],rust:.3,wear:.7,dirt:.2,glow:[{p:[.5,.5,.97],r:.13,c:Ci,k:1.1},{p:[.5,.5,.82],r:.06,c:Ci,k:.8}]},arm_flame:{base:[.3,.3,.3],rust:.55,wear:.6,dirt:.4,glow:[{p:[.5,.45,.99],r:.13,c:hi,k:1.4}]},sh_rocket:{base:[.34,.36,.34],rust:.25,wear:.5,dirt:.2,accent:(s,t,e)=>e>.65?[.32,.38,.18,.9]:null,glow:[]},sh_drone:{base:[.42,.4,.36],rust:.5,wear:.6,dirt:.3,glow:[{p:[.5,.5,.95],r:.1,c:Ci,k:1.4}]},arm_plasma:{base:[.16,.16,.2],rust:.1,wear:.5,dirt:.1,glow:[{p:[.5,.5,.97],r:.25,c:If,k:1.8},{p:[.5,.5,.75],r:.12,c:If,k:1.2}]},arm_minigun:{base:[.28,.28,.3],rust:.3,wear:.8,dirt:.2,accent:(s,t,e)=>e>.85?[.7,.5,.15,.8]:null},chest_shield:{base:[.35,.36,.35],rust:.35,wear:.6,dirt:.2,glow:[{p:[.5,.5,.97],r:.24,c:Ci,k:1.6}]},back_armor:{base:[.26,.27,.3],rust:.35,wear:.45,dirt:.3,accent:(s,t,e,n,i,r,a)=>a>.55?[.5,.26,.08,.55]:null},leg_jet:{base:[.3,.3,.28],rust:.45,wear:.7,dirt:.4,glow:[{p:[.5,.1,.1],r:.1,c:hi,k:1}]},e_drone:{base:[.55,.06,.05],rust:0,wear:.5,dirt:.1,glow:[{p:[.5,.5,.97],r:.17,c:tr,k:1.8}],accent:(s,t,e,n,i,r,a)=>a<.38?[.05,.05,.06,.8]:null},e_turret:{base:[.36,.2,.12],rust:.55,wear:.6,dirt:.5,glow:[{p:[.5,.98,.5],r:.1,c:tr,k:1.8}]},e_charger:{base:[.2,.2,.21],rust:.45,wear:.7,dirt:.3,glow:[{p:[.5,.72,.4],r:.15,c:hi,k:1.5},{p:[.15,.62,.35],r:.1,c:hi,k:1.5},{p:[.85,.62,.35],r:.1,c:hi,k:1.5}]},e_elite:{base:[.18,.18,.2],rust:.12,wear:.6,dirt:.2,accent:(s,t,e,n,i,r,a)=>a>.58?[.55,.06,.06,.85]:null,glow:[{p:[.55,.9,.7],r:.07,c:tr,k:1.8}]},boss_titan:{base:[.3,.38,.28],rust:.55,wear:.65,dirt:.5,accent:(s,t,e,n,i,r,a)=>a>.62?[.2,.32,.55,.9]:a<.34?[.5,.36,.14,.8]:null,glow:[{p:[.5,.86,.7],r:.07,c:tr,k:1.8}]},boss_spider:{base:[.13,.14,.17],rust:.3,wear:.5,dirt:.3,glow:[{p:[.5,.55,.9],r:.13,c:tr,k:1.9}]},boss_walker:{base:[.26,.27,.28],rust:.3,wear:.7,dirt:.35,accent:(s,t,e)=>t<.1&&(s*14|0)%2===0?[.9,.7,.05,.9]:null,glow:[{p:[.5,.62,.9],r:.1,c:hi,k:1.9}]},e_bomber:{base:[.42,.15,.1],rust:.45,wear:.6,dirt:.3,accent:(s,t,e)=>t>.28&&t<.62&&(s<.3||s>.7)&&e>.4?[.7,.07,.05,.9]:null,glow:[{p:[.36,.72,.96],r:.07,c:hi,k:2},{p:[.64,.72,.96],r:.07,c:hi,k:2},{p:[.5,.42,.98],r:.06,c:hi,k:2.2}]},e_spitter:{base:[.2,.24,.14],rust:.35,wear:.6,dirt:.4,glow:[{p:[.5,.38,.95],r:.08,c:Pf,k:1.8},{p:[.66,.78,.4],r:.1,c:Pf,k:1.4}]},boss_cryo:{base:[.26,.46,.7],rust:0,wear:.4,dirt:.1,accent:(s,t,e,n,i,r,a)=>a<.4?[.12,.14,.18,.85]:null,glow:[{p:[.5,.72,.9],r:.07,c:Ci,k:2.2}]},boss_warden:{base:[.36,.38,.45],rust:.1,wear:.6,dirt:.15,accent:(s,t,e,n,i,r,a)=>a>.55?[.75,.5,.12,.75]:null,glow:[{p:[.5,.5,.97],r:.1,c:hi,k:2}]},prop_ice_rock:{base:[.5,.68,.88],rust:0,wear:.3,dirt:.12},prop_ice_gen:{base:[.36,.43,.5],rust:.2,wear:.5,dirt:.3},prop_space_crate:{base:[.2,.25,.35],rust:0,wear:.5,dirt:.15,accent:(s,t)=>t>.26&&t<.44&&((s+t)*9|0)%2===0?[.8,.6,.06,.85]:null,glow:[{p:[.5,.62,.97],r:.06,c:Ci,k:1.6}]},prop_space_reactor:{base:[.26,.29,.34],rust:0,wear:.5,dirt:.2,glow:[{p:[.5,.62,.95],r:.12,c:Ci,k:1.8}]},prop_junk:{base:[.38,.34,.3],rust:.8,wear:.4,dirt:.5},prop_car:{base:[.42,.18,.12],rust:.8,wear:.4,dirt:.5},prop_tires:{base:[.12,.12,.13],rust:0,wear:.3,dirt:.5},prop_wall:{base:[.18,.32,.4],rust:.7,wear:.4,dirt:.5},prop_container:{base:[.18,.32,.4],rust:.7,wear:.4,dirt:.5}},Fv={scrapyard:{junk:[.38,.34,.3],car:[.42,.18,.12],tires:[.12,.12,.13],container:[.2,.32,.42],wall:[.2,.32,.42]},burned:{junk:[.16,.15,.15],car:[.14,.12,.12],tires:[.08,.08,.08],container:[.22,.2,.2],wall:[.22,.2,.2]},ice:{junk:[.55,.62,.68],car:[.5,.58,.66],tires:[.1,.1,.12],container:[.62,.72,.82],wall:[.5,.62,.74]},space:{junk:[.25,.28,.34],car:[.25,.28,.34],tires:[.1,.1,.12],container:[.2,.26,.36],wall:[.18,.23,.32]},desert:{junk:[.55,.42,.28],car:[.6,.45,.2],tires:[.14,.13,.12],container:[.62,.34,.18],wall:[.62,.34,.18]}},Lf={robot_body:"robot_body",robot_leg:"robot_leg",arm_mg:"arm_mg",arm_laser:"arm_laser",arm_flame:"arm_flame",sh_rocket:"sh_rocket",sh_drone:"sh_drone",arm_plasma:"arm_plasma",arm_minigun:"arm_minigun",chest_shield:"chest_shield",back_armor:"back_armor",leg_jet:"leg_jet",e_drone:"e_drone",e_turret:"e_turret",e_charger:"e_charger",e_elite:"e_elite",e_bomber:"e_bomber",e_spitter:"e_spitter",boss_titan:"boss_titan",boss_spider:"boss_spider",boss_walker:"boss_walker",boss_cryo:"boss_cryo",boss_warden:"boss_warden",prop_ice_rock:"prop_ice_rock",prop_ice_gen:"prop_ice_gen",prop_space_crate:"prop_space_crate",prop_space_reactor:"prop_space_reactor",prop_junk:"prop_junk",prop_car:"prop_car",prop_tires:"prop_tires",prop_container:"prop_container",prop_wall:"prop_wall"};function Ov(s){var e;let t=((e=Uh[s])==null?void 0:e.base)||[.4,.4,.4];return s.startsWith("prop_")?pn([Zt("box",[2,1.6,2],t,[0,.8,0]),Zt("box",[1.3,1,1.2],t.map(n=>n*.8),[.2,2,.1],[0,.4,0])]):s.startsWith("boss_")?pn([Zt("box",[3,3.5,2],t,[0,3.6,0]),Zt("box",[1,3,1],t,[-.9,1.5,0]),Zt("box",[1,3,1],t,[.9,1.5,0]),Zt("box",[1.4,1,1.4],t,[0,5.8,.3],[0,0,0],[1,1,1],1)]):s.startsWith("e_")?pn([Zt("box",[1.4,1.2,1.4],t,[0,.8,0]),Zt("box",[.5,.4,.5],tr,[0,1,.7],[0,0,0],[1,1,1],1)]):pn([Zt("box",[.6,.6,1.4],t,[0,0,0]),Zt("box",[.3,.3,.4],Ci,[0,0,.8],[0,0,0],[1,1,1],1)])}async function Nf(s,t="models/"){let e={},n=Object.keys(Lf),i=0,r=new URLSearchParams(location.search).has("proc");return await Promise.all(n.map(async a=>{let o;try{if(r)throw 0;o=await Cf(t+Lf[a]+".bin"),Nh(o,Uh[a]||{base:[.4,.4,.4]})}catch{o=Ov(a),o.computeBoundingBox(),o.computeBoundingSphere()}e[a]=o,s==null||s(++i/n.length)})),e}var Df={icerock:"ice_rock",icegen:"ice_gen",crate:"space_crate",reactor:"space_reactor"};function Fh(s,t,e){var a;let n=s["prop_"+(Df[t]||t)];if(Df[t])return n;if(!n)return null;let i=(a=Fv[e])==null?void 0:a[t];if(!i)return n;let r=n.clone();return Nh(r,{...Uh["prop_"+t],base:i}),r}var bl=class extends Mi{constructor(){super(),this.name="RoomEnvironment",this.position.y=-3.5;let t=new En;t.deleteAttribute("uv");let e=new Wn({side:sn}),n=new Wn,i=new cs(16777215,900,28,2);i.position.set(.418,16.199,.3),this.add(i);let r=new re(t,e);r.position.set(-.757,13.219,.717),r.scale.set(31.713,28.305,28.591),this.add(r);let a=new we(t,n,6),o=new We;o.position.set(-10.906,2.009,1.846),o.rotation.set(0,-.195,0),o.scale.set(2.328,7.905,4.651),o.updateMatrix(),a.setMatrixAt(0,o.matrix),o.position.set(-5.607,-.754,-.758),o.rotation.set(0,.994,0),o.scale.set(1.97,1.534,3.955),o.updateMatrix(),a.setMatrixAt(1,o.matrix),o.position.set(6.167,.857,7.803),o.rotation.set(0,.561,0),o.scale.set(3.927,6.285,3.687),o.updateMatrix(),a.setMatrixAt(2,o.matrix),o.position.set(-2.017,.018,6.124),o.rotation.set(0,.333,0),o.scale.set(2.002,4.566,2.064),o.updateMatrix(),a.setMatrixAt(3,o.matrix),o.position.set(2.291,-.756,-2.621),o.rotation.set(0,-.286,0),o.scale.set(1.546,1.552,1.496),o.updateMatrix(),a.setMatrixAt(4,o.matrix),o.position.set(-2.193,-.369,-5.547),o.rotation.set(0,.516,0),o.scale.set(3.875,3.487,2.986),o.updateMatrix(),a.setMatrixAt(5,o.matrix),this.add(a);let l=new re(t,er(50));l.position.set(-16.116,14.37,8.208),l.scale.set(.1,2.428,2.739),this.add(l);let c=new re(t,er(50));c.position.set(-16.109,18.021,-8.207),c.scale.set(.1,2.425,2.751),this.add(c);let h=new re(t,er(17));h.position.set(14.904,12.198,-1.832),h.scale.set(.15,4.265,6.331),this.add(h);let u=new re(t,er(43));u.position.set(-.462,8.89,14.52),u.scale.set(4.38,5.441,.088),this.add(u);let d=new re(t,er(20));d.position.set(3.235,11.486,-12.541),d.scale.set(2.5,2,.1),this.add(d);let f=new re(t,er(100));f.position.set(0,20,0),f.scale.set(1,.1,1),this.add(f)}dispose(){let t=new Set;this.traverse(e=>{e.isMesh&&(t.add(e.geometry),t.add(e.material))});for(let e of t)e.dispose()}};function er(s){return new Vr({color:0,emissive:16777215,emissiveIntensity:s})}var Oh=[{name:"low",maxPixelRatio:1,shadows:!1,shadowMapSize:512,shadowEvery:0,postfx:!1,particles:.4,drawDistance:70,antialias:!1},{name:"medium",maxPixelRatio:1.5,shadows:!0,shadowMapSize:1024,shadowEvery:2,postfx:!1,particles:.7,drawDistance:110,antialias:!1},{name:"high",maxPixelRatio:2,shadows:!0,shadowMapSize:2048,shadowEvery:1,postfx:!0,particles:1,drawDistance:180,antialias:!0}];function zv(){let s=navigator.userAgent;return/Android|iPhone|iPad|iPod|Mobile/i.test(s)||navigator.maxTouchPoints>1&&/Macintosh/.test(s)}function Uf(s){let t=new URLSearchParams(location.search).get("quality"),e=Oh.findIndex(l=>l.name===t);if(e>=0)return e;let n="";try{let l=s.getContext(),c=l.getExtension("WEBGL_debug_renderer_info");n=String(l.getParameter(c?c.UNMASKED_RENDERER_WEBGL:l.RENDERER)||"")}catch{}let i=/SwiftShader|llvmpipe|Mali-[4T]|Mali-G(31|51|52|57)|Adreno \(TM\) [3-5]\d\d|Adreno \(TM\) 6[01]\d|PowerVR|Intel.*HD Graphics [2-5]\d{2,3}/i.test(n),r=navigator.hardwareConcurrency||4,a=navigator.deviceMemory||4,o=zv();return i||a<=2||r<=2?0:o?a>=6&&r>=8?1:0:/RTX|RX [5-9]\d{3}|Apple M\d|Radeon Pro/i.test(n)?2:1}var Zn,Ff,Of,da,Sl=class{constructor({startTier:t=1,apply:e,targetFps:n=55,lowFps:i=42,window:r=1}){He(this,Zn);this.tierIndex=t,this.renderScale=1,this.apply=e,this.targetFps=n,this.lowFps=i,this.window=r,this.frames=0,this.time=0,this.badWindows=0,this.goodWindows=0,this.cooldown=3,this.upgradesLeft=1,this.locked=!1,z(this,Zn,da).call(this)}get tier(){return Oh[this.tierIndex]}sample(t){if(this.locked)return;if(this.frames++,this.time+=t,this.cooldown>0&&(this.cooldown-=t,this.cooldown>0)){this.frames=0,this.time=0;return}if(this.time<this.window)return;let e=this.frames/this.time;this.frames=0,this.time=0,e<this.lowFps?(this.badWindows++,this.goodWindows=0):e>this.targetFps?(this.goodWindows++,this.badWindows=0):(this.badWindows=0,this.goodWindows=0),this.badWindows>=2?z(this,Zn,Ff).call(this):this.goodWindows>=8&&this.upgradesLeft>0&&z(this,Zn,Of).call(this)}setManual(t){this.locked=!0,this.tierIndex=t,this.renderScale=1,z(this,Zn,da).call(this)}setAuto(){this.locked=!1,this.upgradesLeft=1}};Zn=new WeakSet,Ff=function(){if(this.badWindows=0,this.renderScale>.65)this.renderScale=Math.max(.6,this.renderScale-.15);else if(this.tierIndex>0)this.tierIndex--,this.renderScale=1;else return;z(this,Zn,da).call(this)},Of=function(){if(this.goodWindows=0,this.upgradesLeft--,this.renderScale<1)this.renderScale=Math.min(1,this.renderScale+.15);else if(this.tierIndex<Oh.length-1)this.tierIndex++;else return;z(this,Zn,da).call(this)},da=function(){var t;this.cooldown=3,(t=this.apply)==null||t.call(this,{tier:this.tier,tierIndex:this.tierIndex,renderScale:this.renderScale})};var nr=[{id:"common",name:"Common",mult:1,color:"#b9c2c9",w:70},{id:"rare",name:"Rare",mult:1.2,color:"#4aa8ff",w:22},{id:"epic",name:"Epic",mult:1.45,color:"#b266ff",w:7},{id:"legendary",name:"Legendary",mult:1.8,color:"#ffb52e",w:1.2}],Pe={mg:{id:"mg",name:"Machine Gun",evo:"Minigun",slot:"arm",icon:"arm_mg",evoIcon:"arm_minigun",col:"#ffd24a",desc:"Rapid auto-fire bullets.",evoDesc:"Hail of lead. Huge fire rate."},laser:{id:"laser",name:"Laser Arm",evo:"Plasma Cannon",slot:"arm",icon:"arm_laser",evoIcon:"arm_plasma",col:"#47e3ff",desc:"Piercing beam hits whole lines.",evoDesc:"Piercing plasma orb that explodes."},flame:{id:"flame",name:"Flamethrower",evo:"Inferno",slot:"arm",icon:"arm_flame",evoIcon:"arm_flame",col:"#ff8a2a",desc:"Burns everything up close.",evoDesc:"Blue-hot cone. Burn spreads."},rocket:{id:"rocket",name:"Rocket Pod",evo:"Rocket Battery",slot:"shoulder",icon:"sh_rocket",evoIcon:"sh_rocket",col:"#ff6a4a",desc:"Homing rockets with blast.",evoDesc:"Six-rocket salvos."},drone:{id:"drone",name:"Combat Drone",evo:"Drone Swarm",slot:"shoulder",icon:"sh_drone",evoIcon:"sh_drone",col:"#7dffb0",desc:"Orbiting drones shoot for you.",evoDesc:"Four drones. Faster, deadlier."},jets:{id:"jets",name:"Jet Boots",evo:"Afterburners",slot:"legs",icon:"leg_jet",evoIcon:"leg_jet",col:"#ffa23a",desc:"Faster move and dash.",evoDesc:"Dash leaves a fire trail."},shield:{id:"shield",name:"Shield Core",evo:"Aegis Core",slot:"chest",icon:"chest_shield",evoIcon:"chest_shield",col:"#5fd0ff",desc:"Regenerating energy shield.",evoDesc:"Bigger shield. Blast on break."},armor:{id:"armor",name:"Armor Plating",evo:"Fortress Plating",slot:"back",icon:"back_armor",evoIcon:"back_armor",col:"#ff9a3a",desc:"More HP and damage reduction.",evoDesc:"Thick plating. Slow self-repair."}},wl=Object.keys(Pe),Tl=3,zf=2,gs={scrapper:{id:"scrapper",name:"Scrapper",cost:0,desc:"Balanced all-rounder.",hp:1,speed:1,dmg:1,start:["mg"],color:"#d9a05b"},sprinter:{id:"sprinter",name:"Sprinter",cost:450,desc:"Fast and fiery. Fragile.",hp:.8,speed:1.25,dmg:1,start:["flame","jets"],color:"#ff7a3a"},bulwark:{id:"bulwark",name:"Bulwark",cost:800,desc:"Heavy tank. Slower.",hp:1.45,speed:.88,dmg:1,start:["mg","armor"],color:"#6ea0ff"},sniper:{id:"sniper",name:"Marksman",cost:1200,desc:"Long-range laser, +25% damage.",hp:.85,speed:1,dmg:1.25,start:["laser"],color:"#47e3ff",range:1.3},carrier:{id:"carrier",name:"Carrier",cost:1700,desc:"Starts with a drone wingman.",hp:.95,speed:1.05,dmg:.9,start:["mg","drone"],color:"#7dffb0"}},Cn={scrapyard:{id:"scrapyard",name:"Scrapyard",desc:"Rusty junk heaps. Watch the magnet crane.",hpMul:1,scrapMul:1,unlock:null,hazard:"crane"},burned:{id:"burned",name:"Burned City",desc:"Ruins and fire vents. Tougher machines.",hpMul:1.3,scrapMul:1.5,unlock:{map:"scrapyard",secs:360},hazard:"fire"},desert:{id:"desert",name:"Desert Factory",desc:"Sand storms and heavy chargers.",hpMul:1.65,scrapMul:2,unlock:{map:"burned",secs:420},hazard:"blast"},ice:{id:"ice",name:"Ice Base",desc:"Frozen research outpost. Frost slows you down.",hpMul:2,scrapMul:2.6,unlock:{map:"desert",secs:450},hazard:"frost"},space:{id:"space",name:"Space Station",desc:"Orbital strikes and a deadly warden.",hpMul:2.4,scrapMul:3.2,unlock:{map:"ice",secs:500},hazard:"orbital"}},$e={drone:{id:"drone",hp:16,speed:4.6,r:.7,dmg:7,xp:1,flying:!0,score:1},turret:{id:"turret",hp:70,speed:2,r:1.1,dmg:11,xp:3,flying:!1,score:3},charger:{id:"charger",hp:95,speed:3.2,r:1.4,dmg:26,xp:4,flying:!1,score:4},elite:{id:"elite",hp:340,speed:2.4,r:1.5,dmg:22,xp:12,flying:!1,score:12},bomber:{id:"bomber",hp:34,speed:5.6,r:.95,dmg:26,xp:2,flying:!1,score:2},spitter:{id:"spitter",hp:90,speed:1.9,r:1.2,dmg:15,xp:4,flying:!1,score:4}},Jn={titan:{id:"titan",name:"JUNK TITAN",hp:2600,speed:2.2,r:3,xp:60,h:8.5},spider:{id:"spider",name:"IRON WIDOW",hp:2800,speed:3.4,r:3,xp:60,h:4.5},walker:{id:"walker",name:"SIEGE WALKER",hp:3200,speed:1.9,r:3.2,xp:60,h:8},cryo:{id:"cryo",name:"CRYO COLOSSUS",hp:3e3,speed:2,r:3,xp:60,h:8.5},warden:{id:"warden",name:"ORBITAL WARDEN",hp:2900,speed:2.6,r:3,xp:60,h:4}},zh={scrapyard:["titan","spider","walker","titan"],burned:["spider","walker","titan","spider"],desert:["walker","titan","spider","walker"],ice:["spider","cryo","walker","cryo"],space:["walker","warden","cryo","warden"]},kh=[180,360,540,720],Bh=[{id:"hull",name:"Hull Plating",desc:"+10% max HP",max:8,base:60,grow:1.5},{id:"power",name:"Firepower",desc:"+6% damage",max:8,base:80,grow:1.55},{id:"servo",name:"Servo Motors",desc:"+4% move speed",max:6,base:70,grow:1.5},{id:"cool",name:"Cooling",desc:"+4% fire rate",max:6,base:90,grow:1.55},{id:"magnet",name:"Magnet",desc:"+12% pickup range",max:6,base:50,grow:1.45},{id:"luck",name:"Lucky Parts",desc:"Better part rarity",max:6,base:110,grow:1.6},{id:"salvage",name:"Salvage",desc:"+8% scrap income",max:6,base:100,grow:1.6}],kf=(s,t)=>Math.round(s.base*Math.pow(s.grow,t)/5)*5,Hh=[{scrap:100},{scrap:150},{scrap:200},{scrap:300},{scrap:400},{scrap:500},{scrap:1e3,big:!0}],El=[{id:"kills",text:s=>`Destroy ${s} machines`,min:120,max:260,step:10,stat:"kills",reward:140},{id:"time",text:s=>`Survive ${s} minutes in one run`,min:4,max:8,step:1,stat:"bestTime",reward:160},{id:"boss",text:s=>`Defeat ${s} boss${s>1?"es":""}`,min:1,max:2,step:1,stat:"bosses",reward:220},{id:"evolve",text:s=>`Evolve ${s} part${s>1?"s":""}`,min:1,max:3,step:1,stat:"evolves",reward:200},{id:"scrap",text:s=>`Collect ${s} scrap`,min:150,max:320,step:10,stat:"scrap",reward:130},{id:"elite",text:s=>`Destroy ${s} shielded elites`,min:4,max:10,step:1,stat:"elites",reward:170},{id:"dash",text:s=>`Dash ${s} times`,min:15,max:40,step:5,stat:"dashes",reward:110},{id:"runs",text:s=>`Play ${s} runs`,min:2,max:4,step:1,stat:"runs",reward:120}];var Bf={mg:{model:"arm_mg",s:.62,off:[0,-.5,.45],rot:[0,0,0],evoModel:"arm_minigun",evoS:.5,evoOff:[0,-.25,.4]},laser:{model:"arm_laser",s:.62,off:[0,-.15,.7],rot:[0,0,0],evoModel:"arm_plasma",evoS:.52,evoOff:[0,-.1,.6]},flame:{model:"arm_flame",s:.66,off:[0,-.15,.7],rot:[0,0,0],evoModel:"arm_flame",evoS:.86,evoOff:[0,-.1,.8],evoTint:[.55,.8,1.6]},rocket:{model:"sh_rocket",s:.42,off:[0,.08,.1],rot:[0,0,0],evoS:.5},drone:{model:"sh_drone",s:.32,off:[0,.2,0],rot:[0,0,0],evoS:.4},jets:{model:"leg_jet",s:1,off:[0,0,0],rot:[0,0,0],evoS:1.1},shield:{model:"chest_shield",s:.5,off:[0,0,.1],rot:[0,0,0],evoS:.62},armor:{model:"back_armor",s:.62,off:[0,0,-.1],rot:[0,0,0],evoS:.75}},Hf={armL:[-.86,.62,.05],armR:[.86,.62,.05],shL:[-.62,1.08,0],shR:[.62,1.08,0],chest:[0,.6,.45],back:[0,.62,-.5]},kv=["#b9c2c9","#4aa8ff","#b266ff","#ffb52e"],ui,Gh,ir,Gf,Vh,Al=class{constructor(t,e){He(this,ui);He(this,ir,new Map);this.geos=t,this.mat=e,this.root=new Ve,this.lean=new Ve,this.torso=new Ve,this.root.add(this.lean),this.legs=[];let n=pn([Zt("box",[.42,.5,.42],[.36,.34,.33],[0,-.3,0]),Zt("cyl",[.12,.14,.5,8],[.55,.52,.48],[0,-.58,.02]),Zt("box",[.5,.2,.74],[.3,.28,.27],[0,-.92,.1]),Zt("box",[.52,.06,.76],[.65,.35,.12],[0,-1,.1])]);this.legGeo=t.robot_leg&&t.robot_leg.attributes.position.count>100?t.robot_leg.clone().scale(1.55,1,1.5).translate(0,-1,0):n;for(let i of[-1,1]){let r=new Ve;r.position.set(i*.38,1,0);let a=new re(this.legGeo,e);a.castShadow=!1,r.add(a),r.userData.mesh=a,this.lean.add(r),this.legs.push(r)}this.lean.add(this.torso),this.torso.position.y=1,this.body=new re(t.robot_body,e),this.torso.add(this.body),this.sock={};for(let i in Hf){let r=new Ve;r.position.set(...Hf[i]),this.torso.add(r),this.sock[i]=r}this.parts={},this.recoil={},this.phase=0,this.pop=[],this.bubble=new re(new os(1,20,14),new dn({color:5626111,transparent:!0,opacity:0,blending:Ti,depthWrite:!1,side:ri})),this.bubble.position.y=1.3,this.bubble.scale.setScalar(2.1),this.torso.add(this.bubble),this.bubble.visible=!1,this.bubT=0,this.bubK=0,this.baseS=1,this.root.scale.setScalar(this.baseS)}reset(){for(let t in this.parts)z(this,ui,Gh).call(this,t);this.parts={};for(let t of this.legs)t.userData.mesh.geometry=this.legGeo,t.userData.mesh.scale.set(1,1,1);this.root.scale.setScalar(this.baseS)}setPart(t,e,n,i,r=!0){let a=Bf[t],o=n>=3,l=o&&a.evoModel?a.evoModel:a.model,c=t==="jets"?this.jetGeo||(this.jetGeo=this.geos.leg_jet.clone().scale(1.35,1,1.35).translate(0,-1,0)):this.geos[l];if(!c)return;this.parts[t]&&z(this,ui,Gh).call(this,t);let u=t==="jets"?null:this.sock[e],d=(o?a.evoS??a.s:a.s)*(n===2?1.14:1),f=e==="armR"||e==="shR",m=o&&a.evoOff?a.evoOff:a.off,x=o&&a.evoTint,p=new Ve,g=x?z(this,ui,Gf).call(this,x):this.mat,v=T=>{let E=new re(c,g);return E.scale.set(d*(T<0?-1:1),d,d),E.position.set(m[0]*(T<0?-1:1),m[1],m[2]),E.rotation.set(...a.rot),E},S;if(t==="jets"){S=this.legs.map((T,E)=>{let _=T.userData.mesh;return _.geometry=c,_.scale.set(d*(E===0?-1:1),d,d),_.position.set(0,-0,0),_}),this.parts[t]={grp:new Ve,meshes:S,slot:e,n,rar:i},z(this,ui,Vh).call(this,t,i,n,this.torso);return}let y=v(f?-1:1);if(p.add(y),S=[y],t==="drone"&&(p.remove(y),S=[]),t==="rocket"&&n>=3){let T=v(f?-1:1);T.position.y+=.34,T.scale.multiplyScalar(.86),p.add(T),S.push(T)}if(n===2&&(t==="armor"||t==="shield")){let T=v(1);T.scale.multiplyScalar(.8),T.position.z+=t==="armor"?-.25:.1,T.position.y+=.35,p.add(T),S.push(T)}u?u.add(p):this.torso.add(p),this.parts[t]={grp:p,meshes:S,slot:e,n,rar:i,kick:0},z(this,ui,Vh).call(this,t,i,n,p),r&&this.pop.push({grp:p,t:0})}kick(t){for(let e in this.parts)this.parts[e].slot===t&&(this.parts[e].kick=1)}update(t,e){this.root.position.set(e.x,0,e.z);let n=this.baseS*e.grow;this.root.scale.x+=(n-this.root.scale.x)*Math.min(1,t*4),this.root.scale.y=this.root.scale.z=this.root.scale.x,this.lean.rotation.y=e.legYaw,this.torso.rotation.y=e.aim-e.legYaw,this.phase+=t*(6+e.moving*9)*(e.moving>.05?1:.2);let i=Math.min(1,e.moving),r=Math.sin(this.phase)*.75*i;this.legs[0].rotation.x=r,this.legs[1].rotation.x=-r,this.torso.position.y=1+Math.abs(Math.cos(this.phase))*.09*i+(e.moving<.05?Math.sin(e.t*2.4)*.025:0),this.lean.rotation.x=.1*i+(e.dashT>0?.35:0);for(let o in this.parts){let l=this.parts[o];l.kick>0&&(l.kick=Math.max(0,l.kick-t*9),l.meshes[0]&&o!=="jets"&&l.meshes.forEach((c,h)=>{c.position.z=0+Bf[o].off[2]-l.kick*.14+0}))}for(let o=this.pop.length-1;o>=0;o--){let l=this.pop[o];l.t+=t;let c=l.t/.4;if(c>=1)l.grp.scale.setScalar(1),this.pop.splice(o,1);else{let h=1+Math.sin(c*Math.PI)*.5*(1-c)+(1-c)*1.3;l.grp.scale.setScalar(h)}}this.bubT=Math.max(0,this.bubT-t*3);let a=e.shieldMax>0&&e.shield>0;this.bubble.visible=a||this.bubT>0,this.bubble.visible&&(this.bubble.material.opacity=(a?.008+.014*(e.shield/e.shieldMax):0)+this.bubT*.2,this.bubble.scale.setScalar(1.75+Math.sin(e.t*3)*.03)),this.flashU.value=Math.min(.45,e.hurt)}shieldHit(){this.bubT=1}};ui=new WeakSet,Gh=function(t){var n;let e=this.parts[t];e&&((n=e.grp.parent)==null||n.remove(e.grp))},ir=new WeakMap,Gf=function(t){let e=t.join();if(!Ra(this,ir).has(e)){let n=this.mat.clone();n.color=new Pt(t[0],t[1],t[2]),n.onBeforeCompile=this.mat.onBeforeCompile,n.customProgramCacheKey=this.mat.customProgramCacheKey,Ra(this,ir).set(e,n)}return Ra(this,ir).get(e)},Vh=function(t,e,n,i){if(e<=0||t==="drone"||t==="jets")return;let r=new re(this.led||(this.led=new wi(.075,1)),new dn({color:new Pt(kv[e])}));r.position.set(0,.28,.1),i.add(r)};var sr=new ae,Rl=new hn,rr=new k,ar=new k,Cl=new un,Vf=new Pt,fa=class{constructor(t,e,n){this.cap=e,this.n=0;let i=new Vn(1,1),r=new Float32Array(e);i.setAttribute("aA",new Tn(r,1)),this.alpha=i.getAttribute("aA");let a=new An({transparent:!0,depthWrite:!1,blending:n?Ti:Yi,vertexShader:"varying vec2 vUv; varying vec3 vC; varying float vA; attribute float aA; void main(){ vUv=uv; vC=instanceColor; vA=aA; gl_Position=projectionMatrix*modelViewMatrix*instanceMatrix*vec4(position,1.0); }",fragmentShader:`varying vec2 vUv; varying vec3 vC; varying float vA; void main(){ float d=length(vUv-0.5)*2.0; float f=${n?"pow(max(0.0,1.0-d*d),2.0)":"(1.0-smoothstep(0.2,1.0,d))"}; if(f<0.01) discard; gl_FragColor=vec4(vC,f*vA); }`});this.mesh=new we(i,a,e),this.mesh.frustumCulled=!1,this.mesh.count=0,this.mesh.instanceMatrix.setUsage($n),this.mesh.setColorAt(0,Vf.setRGB(1,1,1)),this.mesh.instanceColor.setUsage($n),this.mesh.renderOrder=n?5:4,this.p=new Float32Array(e*16),t.add(this.mesh),this.scale=1}add(t,e,n,i,r,a,o,l,c,h,u,d,f=1,m=1.5,x=0){if(this.scale<1&&Math.random()>this.scale||this.n>=this.cap)return;let p=this.n++*16,g=this.p;g[p]=t,g[p+1]=e,g[p+2]=n,g[p+3]=i,g[p+4]=r,g[p+5]=a,g[p+6]=o,g[p+7]=o,g[p+8]=l,g[p+9]=c,g[p+10]=h,g[p+11]=u,g[p+12]=d,g[p+13]=f,g[p+14]=m,g[p+15]=x}update(t,e){let n=this.p,i=this.mesh.instanceColor.array,r=this.alpha.array;for(let a=0;a<this.n;){let o=a*16;if(n[o+6]-=t,n[o+6]<=0){let u=(this.n-1)*16;if(a!==this.n-1)for(let d=0;d<16;d++)n[o+d]=n[u+d];this.n--;continue}let l=Math.max(0,1-n[o+14]*t);n[o+3]*=l,n[o+4]=n[o+4]*l+n[o+15]*t,n[o+5]*=l,n[o]+=n[o+3]*t,n[o+1]+=n[o+4]*t,n[o+2]+=n[o+5]*t;let c=1-n[o+6]/n[o+7],h=n[o+8]+(n[o+9]-n[o+8])*c;rr.set(n[o],n[o+1],n[o+2]),ar.set(h,h,1),sr.compose(rr,e,ar),this.mesh.setMatrixAt(a,sr),i[a*3]=n[o+10],i[a*3+1]=n[o+11],i[a*3+2]=n[o+12],r[a]=n[o+13]*(1-c)*(c<.08?c/.08:1),a++}this.mesh.count=this.n,this.mesh.instanceMatrix.needsUpdate=!0,this.mesh.instanceColor.needsUpdate=!0,this.alpha.needsUpdate=!0}},Il=class{constructor(t,e,n){this.cap=e,this.n=0;let i=new En(.16,.1,.22);this.mesh=new we(i,n,e),this.mesh.count=0,this.mesh.frustumCulled=!1,this.mesh.setColorAt(0,Vf.setRGB(1,1,1)),this.mesh.instanceMatrix.setUsage($n),this.p=new Float32Array(e*14),t.add(this.mesh),this.scale=1}add(t,e,n,i,r,a,o,l,c,h,u){if(this.scale<1&&Math.random()>this.scale||this.n>=this.cap)return;let d=this.n++*14,f=this.p;f[d]=t,f[d+1]=e,f[d+2]=n,f[d+3]=i,f[d+4]=r,f[d+5]=a,f[d+6]=o,f[d+7]=l,f[d+8]=Math.random()*6,f[d+9]=Math.random()*6,f[d+10]=(Math.random()-.5)*16,f[d+11]=c,f[d+12]=h,f[d+13]=u}update(t){let e=this.p,n=this.mesh.instanceColor.array;for(let i=0;i<this.n;){let r=i*14;if(e[r+6]-=t,e[r+6]<=0){let o=(this.n-1)*14;if(i!==this.n-1)for(let l=0;l<14;l++)e[r+l]=e[o+l];this.n--;continue}e[r+4]-=24*t,e[r]+=e[r+3]*t,e[r+1]+=e[r+4]*t,e[r+2]+=e[r+5]*t,e[r+1]<.06&&(e[r+1]=.06,e[r+4]*=-.35,e[r+3]*=.6,e[r+5]*=.6,e[r+10]*=.5),e[r+8]+=e[r+10]*t,e[r+9]+=e[r+10]*.7*t;let a=e[r+7]*Math.min(1,e[r+6]*2.5);rr.set(e[r],e[r+1],e[r+2]),Cl.set(e[r+8],e[r+9],0),Rl.setFromEuler(Cl),ar.set(a,a,a),sr.compose(rr,Rl,ar),this.mesh.setMatrixAt(i,sr),n[i*3]=e[r+11],n[i*3+1]=e[r+12],n[i*3+2]=e[r+13],i++}this.mesh.count=this.n,this.mesh.instanceMatrix.needsUpdate=!0,this.mesh.instanceColor.needsUpdate=!0}},Pl=class{constructor(t,e){this.cap=e,this.n=0;let n=new Vn(1,1);n.rotateX(-Math.PI/2),n.setAttribute("aP",new Tn(new Float32Array(e*2),2)),this.ap=n.getAttribute("aP"),n.setAttribute("aC",new Tn(new Float32Array(e*3),3)),this.ac=n.getAttribute("aC");let i=new An({transparent:!0,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-2,uniforms:{uTime:{value:0}},vertexShader:"varying vec2 vUv; varying vec2 vP; varying vec3 vC; attribute vec2 aP; attribute vec3 aC; void main(){ vUv=uv; vP=aP; vC=aC; gl_Position=projectionMatrix*modelViewMatrix*instanceMatrix*vec4(position,1.0); }",fragmentShader:`varying vec2 vUv; varying vec2 vP; varying vec3 vC; uniform float uTime;
        void main(){ vec2 q=vUv-0.5; float d=length(q)*2.0; float k=floor(vP.y+0.5); float pr=vP.x; float a=0.0; vec3 c=vC;
          if(k<0.5){ float edge=smoothstep(0.86,0.96,d)*(1.0-smoothstep(0.96,1.0,d)); float fill=(1.0-smoothstep(0.9,1.0,d))*(0.12+0.4*pr); float inner=(1.0-smoothstep(pr*0.95,pr*0.95+0.04,d))*0.35; a=edge*(0.7+0.3*sin(uTime*18.0))+fill+inner; }
          else if(k<1.5){ float w=0.08+0.1*(1.0-pr); a=smoothstep(1.0-w*2.0,1.0-w,d)*(1.0-smoothstep(1.0-w,1.0,d))*(1.0-pr*0.6); }
          else if(k<2.5){ a=pow(1.0-smoothstep(0.0,1.0,d),1.6)*0.55; c=vec3(0.0); }
          else { float lx=abs(q.x)*2.0; float along=vUv.y; a=(1.0-smoothstep(0.7,1.0,lx))*(0.18+0.4*pr)*(0.75+0.25*sin(along*40.0-uTime*20.0)); a*= (1.0-smoothstep(0.9,1.0,abs(q.y)*2.0)); }
          if(a<0.01) discard; gl_FragColor=vec4(c,a*vP.x*0.0+a); }`});this.mesh=new we(n,i,e),this.mesh.frustumCulled=!1,this.mesh.count=0,this.mesh.instanceMatrix.setUsage($n),this.mesh.renderOrder=2,t.add(this.mesh)}begin(){this.n=0}add(t,e,n,i,r,a,o,l,c,h){if(this.n>=this.cap)return;let u=this.n++;rr.set(e,.03,n),Cl.set(0,a,0),Rl.setFromEuler(Cl),ar.set(i,1,r),sr.compose(rr,Rl,ar),this.mesh.setMatrixAt(u,sr),this.ap.array[u*2]=o,this.ap.array[u*2+1]=t,this.ac.array[u*3]=l,this.ac.array[u*3+1]=c,this.ac.array[u*3+2]=h}end(){this.mesh.count=this.n,this.mesh.instanceMatrix.needsUpdate=!0,this.ap.needsUpdate=!0,this.ac.needsUpdate=!0}},Ll=class{constructor(t,e=8){this.items=[];let n=new En(1,1,1);n.translate(0,0,.5);for(let i=0;i<e;i++){let r=new re(n,new dn({color:3528447,transparent:!0,opacity:.55,blending:Ti,depthWrite:!1,toneMapped:!1})),a=new re(n,new dn({color:16777215,transparent:!0,opacity:.95,blending:Ti,depthWrite:!1,toneMapped:!1}));r.visible=a.visible=!1,r.frustumCulled=a.frustumCulled=!1,t.add(r,a),this.items.push({outer:r,core:a,t:0})}}fire(t,e,n,i,r,a){let o=this.items.find(l=>l.t<=0)||this.items[0];o.t=.16,o.x=t,o.y=e,o.z=n,o.a=i,o.len=r,o.outer.material.color.setHex(a||3528447)}update(t){for(let e of this.items){if(e.t<=0){e.outer.visible=e.core.visible=!1;continue}e.t-=t;let n=Math.max(0,e.t/.16);e.outer.visible=e.core.visible=!0;for(let[i,r]of[[e.outer,.9],[e.core,.28]])i.position.set(e.x,e.y,e.z),i.rotation.y=e.a,i.scale.set(r*n,r*n,e.len)}}};function Bv(s){let t=s>>>0;return function(){t=t+1831565813>>>0;let e=t;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}}var Dl=s=>{let t=2166136261;for(let e=0;e<s.length;e++)t^=s.charCodeAt(e),t=Math.imul(t,16777619);return t>>>0},xs=class{constructor(t=Date.now()){this.next=Bv(typeof t=="string"?Dl(t):t)}float(t=0,e=1){return t+this.next()*(e-t)}int(t,e){return Math.floor(this.float(t,e+1))}chance(t){return this.next()<t}pick(t){return t[Math.floor(this.next()*t.length)]}shuffle(t){for(let e=t.length-1;e>0;e--){let n=Math.floor(this.next()*(e+1));[t[e],t[n]]=[t[n],t[e]]}return t}weighted(t){let e=0;for(let i of t)e+=i.w;let n=this.next()*e;for(let i of t)if((n-=i.w)<=0)return i.v;return t[t.length-1].v}};function Ji(s=new Date){return Math.floor((s.getTime()-s.getTimezoneOffset()*6e4)/864e5)}function Wh(s=new Date){let t=new Date(s);return t.setHours(24,0,0,0),t.getTime()-s.getTime()}var Ht=40,ye=Math.PI*2,Wf=46,Hv=96,Gv=220,Vv=90,Wv=40,Xv=160,qv=40,Oe=(s,t,e,n)=>(s-e)*(s-e)+(t-n)*(t-n),vn=(s,t,e)=>s<t?t:s>e?e:s,Le=(s,t)=>{let e=(t-s)%ye;return e>Math.PI&&(e-=ye),e<-Math.PI&&(e+=ye),e},Fl=s=>Math.round((3+s*2.6+s*s*.3)*(s<=3?.85:1));function pa(s,t,e){let n=t>=3;switch(s){case"mg":return{rate:[6,8.5,15][t-1],dmg:[7,9,10][t-1]*e,spread:n?.1:.05,range:15+(n?2:0),speed:30};case"laser":return n?{every:1.5,dmg:70*e,r:3.4,range:20,speed:15}:{every:[1.25,.95][t-1],dmg:[26,36][t-1]*e,len:17,w:.55};case"flame":return{dps:[30,44,74][t-1]*e,range:[6,7,9][t-1],half:[.42,.46,.58][t-1],burn:[5,8,16][t-1]*e};case"rocket":return{every:[2.5,2.1,1.9][t-1],n:[2,3,6][t-1],dmg:[34,42,48][t-1]*e,r:[2.3,2.5,2.9][t-1],range:17};case"drone":return{n:[1,2,4][t-1],dmg:[5,6.5,9][t-1]*e,every:[.55,.5,.35][t-1],range:12};case"jets":return{speed:[.1,.2,.3][t-1]*Math.min(1.4,e),dashCd:[3.2,2.6,1.9][t-1],trail:n};case"shield":return{hp:[35,60,100][t-1]*e,delay:[5.5,4.5,3.5][t-1],blast:n};case"armor":return{hp:[20,40,65][t-1]*e,dr:[.08,.15,.25][t-1]*Math.min(1.25,e),regen:n?1.2:0}}}var j,Xf,Xh,or,qh,qf,Yf,Nl,$f,di,Ul,lr,ga,Zf,Kn,_s,Jf,Kf,Yh,jf,Qf,tp,ep,np,$h,cr,ip,sp,rp,ap,op,Zh,lp,cp,Jh,hp,up,xa=class{constructor(t){He(this,j);Aa(this,"eliteDrops",0);this.cfg=t,this.rng=new xs(t.seed??Math.random()*1e9|0),this.map=Cn[t.map||"scrapyard"],this.cls=gs[t.cls||"scrapper"],this.G=t.garage||{},this.t=0,this.state="run",this.ev=[],this.hitStop=0,this.stats={kills:0,elites:0,bosses:0,scrap:0,dashes:0,evolves:0,dmgTaken:0};let e=n=>this.G[n]||0;this.gar={hp:1+.1*e("hull"),dmg:1+.06*e("power"),speed:1+.04*e("servo"),rate:1+.04*e("cool"),magnet:1+.12*e("magnet"),luck:e("luck"),salvage:1+.08*e("salvage")},this.p={x:0,z:0,vx:0,vz:0,aim:0,legYaw:0,hp:100,maxHp:100,shield:0,shieldMax:0,shieldT:0,xp:0,lvl:1,inv:0,dashT:0,dashCd:0,dx:0,dz:1,hurtT:0,r:.9,moving:0,grow:1,regen:0,slowT:0},this.owned={},this.slots={armL:null,armR:null,shL:null,shR:null,legs:null,chest:null,back:null},this.W={},this.E=Array.from({length:Hv},()=>({a:!1})),this.B=Array.from({length:Gv},()=>({a:!1})),this.EB=Array.from({length:Vv},()=>({a:!1})),this.R=Array.from({length:Wv},()=>({a:!1})),this.PK=Array.from({length:Xv},()=>({a:!1})),this.HZ=Array.from({length:qv},()=>({a:!1})),this.spawns=[],this.drones=[],this.flameOn=!1,this.flameDir=0,this.beams=[],this.pend=[],this.offers=null,this.offerMin=0,this.id=1,this.boss=null,this.bossIdx=0,this.bossWarned=-1,this.lull=0,this.nextWave=1.2,this.scriptStep=0,this.nextHazard=7,this.hazSlot=0,this.obst=[],this.barrels=[],z(this,j,Xf).call(this),z(this,j,or).call(this);for(let n of this.cls.start)z(this,j,Xh).call(this,n,0,!0);this.p.hp=this.p.maxHp,z(this,j,or).call(this),this.p.shield=this.p.shieldMax,this.timeScale=1,this.revived=!1,this.won=!1,this.msg=null,this.alive=0}rmOf(t){let e=this.owned[t];return e?e.rsum/e.n:1}pick(t){if(this.state!=="levelup"||!this.offers)return!1;let e=this.offers[t];return e?(Pe[e.id]?z(this,j,Xh).call(this,e.id,e.rar,!1):e.id==="repair"?this.p.hp=Math.min(this.p.maxHp,this.p.hp+this.p.maxHp*.6):e.id==="scrapbag"?this.bonusScrap=(this.bonusScrap||0)+60:e.id==="overclock"&&(this.gar.dmg+=.08,z(this,j,or).call(this)),this.ev.push({k:"picked",c:e}),this.offers=null,this.state="run",this.p.inv=Math.max(this.p.inv,.8),z(this,j,Nl).call(this),!0):!1}count(){let t=0;for(let e of this.E)e.a&&!e.boss&&t++;return t}spawnEnemy(t,e,n,i){if(this.count()>=Wf)return null;let r=z(this,j,di).call(this,this.E);if(!r)return null;let a=$e[t],o=this.t/60,l=(1+.38*o+.04*o*o)*this.map.hpMul;return Object.assign(r,{a:!0,id:this.id++,k:t,boss:!1,x:e,z:n,vx:0,vz:0,hp:a.hp*l,maxHp:a.hp*l,r:a.r,face:Math.atan2(this.p.x-e,this.p.z-n),st:0,stT:0,cd:this.rng.float(.5,2),flash:0,burn:0,burnT:0,spawnT:.45,hitT:0,stun:0,ph:this.rng.float(0,6.28),tx:0,tz:0,bump:0,sp:1+this.rng.float(-.08,.08),shots:0,dead:!1}),i&&Object.assign(r,i),t==="drone"&&(r.sp*=1+Math.min(.4,o*.04)),this.ev.push({k:"spawn",x:e,z:n,kind:t}),r}spawnBoss(t,e){let n=z(this,j,di).call(this,this.E);if(!n)return;let i=Jn[t],r=this.rng.float(0,ye),a=vn(this.p.x+Math.cos(r)*24,-Ht+6,Ht-6),o=vn(this.p.z+Math.sin(r)*24,-Ht+6,Ht-6),l=i.hp*(1+.4*e)*(1+(this.map.hpMul-1)*.35)*(e===3?1.12:e===0?.85:1)*(1+.03*this.nParts);Object.assign(n,{a:!0,id:this.id++,k:t,boss:!0,bi:e,x:a,z:o,vx:0,vz:0,hp:l,maxHp:l,r:i.r*(e===3?1.12:1),face:Math.atan2(this.p.x-a,this.p.z-o),st:0,stT:2.2,cd:2.5,flash:0,burn:0,burnT:0,spawnT:.8,stun:0,ph:0,tx:0,tz:0,bump:0,sp:1,shots:0,phase:1,dead:!1,atk:0,ft:0,heat:0}),this.boss=n,this.ev.push({k:"bossSpawn",kind:t,idx:e,x:a,z:o})}enemyBullet(t,e,n,i,r,a=.35,o=3,l=!1){let c=z(this,j,di).call(this,this.EB);c&&Object.assign(c,{a:!0,x:t,z:e,vx:Math.sin(n)*i,vz:Math.cos(n)*i,dmg:r,r:a,life:o,big:l})}hazard(t,e,n,i,r,a,o=0,l=0){let c=z(this,j,di).call(this,this.HZ);return c?(l===2&&i>.4&&this.ev.push({k:"hzWarn",kind:a}),Object.assign(c,{a:!0,x:t,z:e,r:n,t:i,warn:i,dmg:r,kind:a,linger:o,owner:l,tick:0,fired:!1}),c):null}pickup(t,e,n,i){let r=z(this,j,di).call(this,this.PK);if(!r){let l=null,c=-1;for(let h of this.PK)h.k==="xp"&&h.t>c&&(c=h.t,l=h);if(!l)return;if(r=l,t==="xp"){r.v+=i;return}}let a=this.rng.float(0,ye),o=this.rng.float(2,5);Object.assign(r,{a:!0,k:t,x:e,z:n,vx:Math.cos(a)*o,vz:Math.sin(a)*o,v:i,t:0,mag:!1,y:.4})}hurtEnemy(t,e,n,i,r){if(!t.a||t.spawnT>.2||t.dead)return 0;if(t.k==="elite"&&r!=="aoe"&&r!=="burn"){let a=Math.atan2(n-t.x,i-t.z);Math.abs(Le(t.face,a))<1.05&&(e*=.1,t.blockT=.12,this.ev.push({k:"block",x:t.x,z:t.z}))}return t.stun>0&&(e*=1.35),t.boss&&(e*=1+t.heat),e*=this.dmgMul,t.hp-=e,t.flash=1,t.hitT=.08,r!=="burn"&&this.ev.push({k:"hit",x:t.x,z:t.z,boss:t.boss,dmg:e,kind:r,big:e>30}),t.hp<=0&&!t.dead&&z(this,j,Ul).call(this,t),e}hurtPlayer(t,e,n,i){let r=this.p;if(!(this.state!=="run"||r.inv>0)){if(t*=(1-this.dr)*(1+.05*Math.max(0,this.t/60-4)),this.boss&&this.boss.bi===0&&(t*=.75),this.stats.dmgTaken+=t,r.shield>0){let a=Math.min(r.shield,t);r.shield-=a,t-=a,this.ev.push({k:"shieldHit",x:r.x,z:r.z}),r.shield<=0&&(this.ev.push({k:"shieldBreak"}),this.shieldBlast&&z(this,j,lr).call(this,r.x,r.z,6,60*this.rmOf("shield"),14))}r.shieldT=this.shieldDelay,t>0?(r.hp-=t,r.hurtT=.25,r.inv=.5,this.ev.push({k:"hurt",dmg:t,x:e,z:n})):r.inv=.2,r.hp<=0&&(r.hp=0,this.state="dead",this.ev.push({k:"dead"}))}}step(t,e){if(this.state==="levelup"||this.state==="dead"||this.state==="won"){z(this,j,Yh).call(this,t);return}this.hitStop>0&&(this.hitStop-=t,t*=.08);let n=this.p;this.t+=t,z(this,j,jf).call(this,t,e),z(this,j,Jf).call(this,t),z(this,j,Kf).call(this,t),z(this,j,Qf).call(this,t),z(this,j,ep).call(this,t),z(this,j,hp).call(this,t),z(this,j,up).call(this,t),z(this,j,Yh).call(this,t)}target(t,e,n,i){let r=null,a=n*n;for(let o of this.E)if(o.a&&o.spawnT<.3){let l=Oe(t,e,o.x,o.z);l<a&&(a=l,r=o)}return r}muzzle(t){let e=this.p,n=e.grow,i=t==="armL"||t==="shL"?-1:1,r=t.startsWith("sh"),a=i*(r?.65:1)*n,o=(r?.3:1.1)*n,l=Math.cos(e.aim),c=Math.sin(e.aim);return{x:e.x+a*l+o*c,z:e.z-a*c+o*l}}revive(){if(this.state!=="dead"||this.revived)return!1;let t=this.p;this.revived=!0,this.state="run",t.hp=t.maxHp*.6,t.inv=2.5,t.shield=t.shieldMax,z(this,j,lr).call(this,t.x,t.z,11,400,22);for(let e of this.EB)e.a=!1;this.rings=[];for(let e of this.HZ)e.owner!==1&&(e.a=!1);return this.ev.push({k:"revive"}),!0}results(){let t=this.stats,e=this.t/60,n=(t.kills*.55+this.t*.9+this.p.lvl*6+t.bosses*70+(this.won?400:0)+(this.bonusScrap||0))*this.map.scrapMul*this.gar.salvage;return{time:this.t,kills:t.kills,lvl:this.p.lvl,bosses:t.bosses,scrap:Math.round(n),won:this.won,mins:e}}};j=new WeakSet,Xf=function(){let t=new xs((this.cfg.seed??1)*7+this.map.id.length),e=[],n={scrapyard:16,burned:18,desert:15,ice:15,space:14}[this.map.id],i=this.map.id==="scrapyard"?[["junk",2.4],["car",2.2],["tires",1.4],["container",2.6]]:this.map.id==="burned"?[["ruin",2.6],["car",2.2],["junk",2],["container",2.6]]:this.map.id==="ice"?[["icerock",2.4],["icegen",2],["container",2.6],["icerock",2]]:this.map.id==="space"?[["crate",1.4],["reactor",1.5],["container",2.6],["crate",1.4]]:[["container",2.8],["junk",2.2],["tank",2.3],["pipe",1.6]],r=0;for(;e.length<n&&r++<400;){let a=t.float(0,ye),o=Math.sqrt(t.next())*(Ht-5),[l,c]=t.pick(i),h=Math.cos(a)*o,u=Math.sin(a)*o;h*h+u*u<49||e.some(d=>Oe(d.x,d.z,h,u)<(d.r+c+4)**2)||e.push({x:h,z:u,r:c,type:l,rot:t.float(0,ye),s:t.float(.9,1.2)})}if(this.obst=e,this.map.hazard==="blast")for(let a=0;a<5;a++){let o=a/5*ye+.4,l=16+t.float(0,12),c=Math.cos(o)*l,h=Math.sin(o)*l;e.some(u=>Oe(u.x,u.z,c,h)<(u.r+1.5)**2)||this.barrels.push({x:c,z:h,hp:30,a:!0,respawn:0})}if(this.vents=[],this.map.hazard==="fire")for(let a=0;a<6;a++){let o=a/6*ye+.2,l=10+a%3*8;this.vents.push({x:Math.cos(o)*l,z:Math.sin(o)*l})}},Xh=function(t,e,n){let i=Pe[t],r=this.owned[t];if(!r){r=this.owned[t]={id:t,n:0,rsum:0,slot:null};let a=null;i.slot==="arm"?a=this.slots.armL?"armR":"armL":i.slot==="shoulder"?a=this.slots.shL?"shR":"shL":a=i.slot==="legs"?"legs":i.slot==="chest"?"chest":"back",r.slot=a,this.slots[a]=t,this.W[t]={cd:.3,aux:0}}return r.n++,r.rsum+=nr[e].mult,n||(this.stats.evolves+=r.n===Tl?1:0),this.ev.push({k:"attach",id:t,slot:r.slot,n:r.n,rar:e,evolve:r.n===Tl,free:!!n}),z(this,j,or).call(this),t==="shield"&&(this.p.shield=this.p.shieldMax),t==="drone"&&z(this,j,qh).call(this),r},or=function(){let t=this.p,e=this.cls,n=100*e.hp*this.gar.hp,i=0,r=1*e.speed*this.gar.speed,a=0,o=0;this.dashCdBase=4.2,this.trail=!1,this.shieldDelay=5.5,this.shieldBlast=!1;let l=this.owned.armor;if(l){let f=pa("armor",l.n,this.rmOf("armor"));n+=f.hp,i+=f.dr,o+=f.regen}let c=this.owned.jets;if(c){let f=pa("jets",c.n,this.rmOf("jets"));r*=1+f.speed,this.dashCdBase=f.dashCd,this.trail=f.trail}let h=this.owned.shield;if(h){let f=pa("shield",h.n,this.rmOf("shield"));a=f.hp,this.shieldDelay=f.delay,this.shieldBlast=f.blast}let u=t.maxHp?t.hp/t.maxHp:1;t.maxHp=n,t.hp=Math.min(n,Math.max(t.hp,u*n)),this.dr=Math.min(.6,i),this.speedMul=r,t.shieldMax=a,t.regen=o;let d=0;for(let f in this.owned)d+=this.owned[f].n;this.nParts=d,t.grow=1+Math.min(.32,d*.02+t.lvl*.004),this.dmgMul=this.gar.dmg*e.dmg,this.rateMul=this.gar.rate},qh=function(){let t=this.owned.drone;if(!t)return;let e=pa("drone",t.n,this.rmOf("drone")).n;for(;this.drones.length<e;)this.drones.push({a:this.drones.length/e*ye,cd:Math.random()*.4,x:this.p.x,z:this.p.z,fx:0});this.drones.forEach((n,i)=>{n.base=i/this.drones.length*ye})},qf=function(t){let e=1+.28*this.gar.luck,n=nr.map((i,r)=>r===0?i.w:i.w*e*(t>0?4:1));if(t>0)for(let i=0;i<t;i++)n[i]=0;return this.rng.weighted(n.map((i,r)=>({w:i,v:r})))},Yf=function(t){let e=[],n=(this.slots.armL?1:0)+(this.slots.armR?1:0);for(let o of wl){let l=Pe[o],c=this.owned[o];if(c)c.n<Tl&&e.push({id:o,w:c.n===2?3:1.7,evolve:c.n===2,to:c.n+1});else{if(l.slot==="arm"&&n>=zf||l.slot==="shoulder"&&this.slots.shL&&this.slots.shR)continue;e.push({id:o,w:1,evolve:!1,to:1})}}let i=[];for(;i.length<3&&e.length;){let o=this.rng.int(0,e.length-1),l=0;for(let d of e)l+=d.w;let c=this.rng.next()*l,h=0;for(let d=0;d<e.length;d++)if((c-=e[d].w)<=0){h=d;break}let u=e.splice(h,1)[0];i.push({id:u.id,evolve:u.evolve,to:u.to,rar:z(this,j,qf).call(this,t),isNew:u.to===1})}let r=[{id:"repair",name:"Repair Kit",desc:"Restore 60% HP.",rar:0},{id:"scrapbag",name:"Scrap Cache",desc:"+60 scrap at the end of the run.",rar:0},{id:"overclock",name:"Overclock",desc:"+8% damage for this run.",rar:1}],a=0;for(;i.length<3;)i.push(r[a++%r.length]);return i},Nl=function(){if(this.state!=="run"||!this.pend.length)return;let t=this.pend.shift();this.offerMin=t.minR,this.offers=z(this,j,Yf).call(this,t.minR),this.state="levelup",this.offerSrc=t.src,this.ev.push({k:"offers",src:t.src})},$f=function(t){let e=this.p;for(e.xp+=t*(this.xpMul||1);e.xp>=Fl(e.lvl);)e.xp-=Fl(e.lvl),e.lvl++,e.hp=Math.min(e.maxHp,e.hp+e.maxHp*.12),this.pend.push({minR:0,src:"level"}),this.ev.push({k:"level",lvl:e.lvl}),z(this,j,or).call(this);z(this,j,Nl).call(this)},di=function(t){for(let e=0;e<t.length;e++)if(!t[e].a)return t[e];return null},Ul=function(t,e){var r,a;t.hz&&!t.hz.fired&&!e&&(t.hz.a=!1),t.dead=!0,t.a=!1;let n=$e[t.k]||Jn[t.k];this.stats.kills++,this.ev.push({k:"die",x:t.x,z:t.z,kind:t.k,boss:t.boss,r:t.r,fly:!!((r=$e[t.k])!=null&&r.flying)});let i=t.boss?14:t.k==="elite"?5:t.k==="charger"?3:t.k==="turret"||t.k==="spitter"?2:1;t.k==="bomber"&&z(this,j,lr).call(this,t.x,t.z,3,45,9);for(let o=0;o<i;o++)this.pickup("xp",t.x,t.z,n.xp/i);if(t.k==="elite"&&(this.stats.elites++,this.rng.chance(this.eliteDrops++===0?1:.28)&&this.pickup("crate",t.x,t.z,1)),!t.boss&&this.rng.chance(t.k==="drone"?.012:.07)&&this.pickup("heal",t.x,t.z,.2),t.boss){this.stats.bosses++,this.pickup("crate",t.x,t.z,2),this.pickup("heal",t.x+1,t.z,.35),this.boss=null,this.lull=9,this.hitStop=.25;for(let o of this.E)o.a&&!o.boss&&(o.hp=0,o.dead=!0,o.a=!1,this.ev.push({k:"die",x:o.x,z:o.z,kind:o.k,r:o.r,fly:!!((a=$e[o.k])!=null&&a.flying)}),this.stats.kills++,this.pickup("xp",o.x,o.z,.5));for(let o of this.EB)o.a=!1;t.bi===3&&(this.won=!0,this.state="won",this.ev.push({k:"won"}))}},lr=function(t,e,n,i,r){this.ev.push({k:"boom",x:t,z:e,r:n,big:n>3});for(let a of this.E)if(a.a){let o=Math.sqrt(Oe(a.x,a.z,t,e));if(o<n+a.r&&(this.hurtEnemy(a,i*(1-.45*vn(o/(n+a.r),0,1)),t,e,"aoe"),a.a&&!a.boss&&r)){let l=Math.atan2(a.x-t,a.z-e);a.vx+=Math.sin(l)*r,a.vz+=Math.cos(l)*r}}for(let a of this.barrels)a.a&&Oe(a.x,a.z,t,e)<(n+.8)**2&&z(this,j,ga).call(this,a)},ga=function(t){if(t.a){t.a=!1,t.respawn=22,this.ev.push({k:"boom",x:t.x,z:t.z,r:5,big:!0,barrel:!0});for(let e of this.E)e.a&&Oe(e.x,e.z,t.x,t.z)<36&&this.hurtEnemy(e,90,t.x,t.z,"aoe");Oe(this.p.x,this.p.z,t.x,t.z)<30&&this.hurtPlayer(22,t.x,t.z,"boom");for(let e of this.barrels)e!==t&&e.a&&Oe(e.x,e.z,t.x,t.z)<36&&z(this,j,ga).call(this,e)}},Zf=function(t=21,e=26){for(let i=0;i<12;i++){let r=this.rng.float(0,ye),a=this.rng.float(t,e),o=this.p.x+Math.cos(r)*a,l=this.p.z+Math.sin(r)*a;if(o*o+l*l<(Ht-2)**2)return{x:o,z:l,a:r}}let n=Math.atan2(-this.p.z,-this.p.x);return{x:this.p.x+Math.cos(n)*18,z:this.p.z+Math.sin(n)*18,a:n}},Kn=function(t,e,n,i,r){this.count()+this.spawns.length>=Wf-2||(this.spawns.push({kind:t,x:e,z:n,t:i,extra:r}),this.ev.push({k:"warn",x:e,z:n,kind:t,t:i}))},_s=function(t,e){let n=this.rng,i=z(this,j,Zf).call(this),r=this.p,a=Math.min(16,6+Math.floor(e*1.5)+n.int(0,2)),o=l=>({x:Math.cos(l+Math.PI/2),z:Math.sin(l+Math.PI/2)});switch(t){case"stream":{let l=o(i.a);for(let c=0;c<a;c++)z(this,j,Kn).call(this,"drone",i.x,i.z,.7+c*.35,{jx:l.x});break}case"vee":{let l=o(i.a),c=Math.max(5,a|1);for(let h=0;h<c;h++){let u=h-(c-1)/2,d=Math.abs(u)*1.3;z(this,j,Kn).call(this,"drone",i.x+l.x*u*1.7+Math.cos(i.a)*d,i.z+l.z*u*1.7+Math.sin(i.a)*d,.7)}break}case"ring":{let l=Math.min(11,6+Math.floor(e*.7)),c=21;for(let h=0;h<l;h++){let u=h/l*ye,d=r.x+Math.cos(u)*c,f=r.z+Math.sin(u)*c;d*d+f*f<(Ht-1)**2&&z(this,j,Kn).call(this,"drone",d,f,.7+h*.05)}break}case"pincer":{let l=Math.ceil(a/2),c=o(i.a);for(let h of[1,-1])for(let u=0;u<l;u++){let d=i.a+(h>0?0:Math.PI),f=22+u*1.3,m=r.x+Math.cos(d)*f+c.x*(u%2)*1.5,x=r.z+Math.sin(d)*f+c.z*(u%2)*1.5;m*m+x*x<(Ht-1)**2&&z(this,j,Kn).call(this,"drone",m,x,.7+u*.12)}break}case"turrets":{let l=Math.min(4,1+Math.floor(e/2.5));for(let c=0;c<l;c++){let h=i.a+(c-(l-1)/2)*.55,u=22,d=r.x+Math.cos(h)*u,f=r.z+Math.sin(h)*u;z(this,j,Kn).call(this,"turret",d,f,.8+c*.3)}break}case"chargers":{let l=Math.min(4,1+Math.floor(e/3.2)),c=o(i.a);for(let h=0;h<l;h++){let u=h-(l-1)/2;z(this,j,Kn).call(this,"charger",i.x+c.x*u*3.2,i.z+c.z*u*3.2,.8+h*.15)}break}case"elite":{z(this,j,Kn).call(this,"elite",i.x,i.z,.9);let l=o(i.a);for(let c=0;c<Math.min(6,2+Math.floor(e/2));c++)z(this,j,Kn).call(this,"drone",i.x+l.x*(c-2)*1.6+Math.cos(i.a)*3,i.z+l.z*(c-2)*1.6+Math.sin(i.a)*3,1.6);break}case"bombers":{let l=Math.min(6,2+Math.floor(e/2));for(let c=0;c<l;c++){let h=i.a+(c-(l-1)/2)*.3,u=22,d=r.x+Math.cos(h)*u,f=r.z+Math.sin(h)*u;d*d+f*f<(Ht-1)**2&&z(this,j,Kn).call(this,"bomber",d,f,.8+c*.2)}break}case"spitters":{let l=Math.min(3,1+Math.floor(e/3.5));for(let c=0;c<l;c++){let h=i.a+(c-(l-1)/2)*1.1,u=21,d=r.x+Math.cos(h)*u,f=r.z+Math.sin(h)*u;d*d+f*f<(Ht-2)**2&&z(this,j,Kn).call(this,"spitter",d,f,.8+c*.4)}break}case"siege":{z(this,j,_s).call(this,"spitters",e),z(this,j,_s).call(this,"bombers",e*.5);break}case"mixed":{z(this,j,_s).call(this,"turrets",e),z(this,j,_s).call(this,"stream",e*.7);break}}},Jf=function(t){let e=this.t,n=e/60;for(let h=this.spawns.length-1;h>=0;h--){let u=this.spawns[h];u.t-=t,u.t<=0&&(this.spawnEnemy(u.kind,u.x,u.z,u.extra),this.spawns.splice(h,1))}let i=kh[this.bossIdx];if(i!==void 0&&(this.bossWarned!==this.bossIdx&&e>=i-5&&(this.bossWarned=this.bossIdx,this.ev.push({k:"bossWarn",kind:zh[this.map.id][this.bossIdx]})),e>=i&&!this.boss&&(this.spawnBoss(zh[this.map.id][this.bossIdx],this.bossIdx),this.bossIdx++)),this.lull>0){this.lull-=t;return}let r=kh[this.bossIdx];if(r!==void 0&&!this.boss&&e>r-14||(this.nextWave-=t,this.nextWave>0))return;this.alive=0;for(let h of this.E)h.a&&this.alive++;this.alive+=this.spawns.length;let a=Math.min(38,15+3*n);if(this.alive>=a*(this.boss?.55:1)){this.nextWave=1.2;return}this.nextWave=(this.boss?1.9:1)*(6.2-2.6*Math.min(1,e/660))*this.rng.float(.85,1.15);let o=[["stream",0],["vee",0],["ring",0],["turrets",46],["chargers",66]];if(this.scriptStep<o.length&&e>=o[this.scriptStep][1]){let h=this.scriptStep++;z(this,j,_s).call(this,o[h][0],Math.max(0,n)),this.nextWave=h===0?6:h<3?8:7;return}let l=1+.12*Math.max(0,n-3),c=[["stream",3],["vee",3*(n>6?.7:1)],["ring",e>25?2.6:0],["turrets",e>38?2.2*l:0],["pincer",e>70?2:0],["chargers",e>85?2.4*l:0],["elite",e>140?(1.5+n*.2)*l:0],["mixed",e>200?1.8:0],["bombers",e>100?2.2*l*(this.map.id==="space"?1.6:1):0],["spitters",e>150?1.8*l*(this.map.id==="ice"?1.6:1):0],["siege",e>270?1.5*l:0]];z(this,j,_s).call(this,this.rng.weighted(c.map(([h,u])=>({v:h,w:u}))),n)},Kf=function(t){var i;this.nextHazard-=t;let e=this.map.hazard,n=this.p;if(this.nextHazard<=0&&this.t>20)if(e==="crane"){let r=this.rng.float(0,ye),a=this.rng.float(0,7);this.hazard(n.x+Math.cos(r)*a,n.z+Math.sin(r)*a,3,1.5,16,"crane"),this.nextHazard=this.rng.float(7,11)}else if(e==="fire"){let r=this.vents[this.hazSlot++%this.vents.length];this.hazard(r.x,r.z,3,1.2,8,"fire",3);let a=this.vents[(this.hazSlot+2)%this.vents.length];this.hazard(a.x,a.z,3,1.5,8,"fire",3),this.nextHazard=this.rng.float(5,8)}else if(e==="frost"){let r=this.rng.float(0,ye),a=this.rng.float(1,9);this.hazard(n.x+Math.cos(r)*a,n.z+Math.sin(r)*a,3,1.4,10,"icicle",4.5),this.nextHazard=this.rng.float(5.5,8.5)}else if(e==="orbital"){let r=this.rng.float(0,ye);for(let a=0;a<4;a++)this.hazard(n.x+Math.cos(r)*(a-1.5)*3.4,n.z+Math.sin(r)*(a-1.5)*3.4,2.5,1.3+a*.22,15,"blast");this.nextHazard=this.rng.float(7,10)}else{let r=this.rng.float(0,ye),a=this.rng.float(2,9);this.hazard(n.x+Math.cos(r)*a,n.z+Math.sin(r)*a,3.2,1.3,14,"blast"),this.nextHazard=this.rng.float(6,9)}for(let r of this.barrels)!r.a&&(r.respawn-=t)<=0&&(r.a=!0,r.hp=30);for(let r of this.HZ)if(r.a){if(r.t-=t,!r.fired&&r.t<=0){if(r.fired=!0,this.ev.push({k:"boom",x:r.x,z:r.z,r:r.r,big:r.r>3.5,haz:r.kind}),r.owner!==1&&Oe(n.x,n.z,r.x,r.z)<(r.r+n.r*.5)**2&&this.hurtPlayer(r.dmg*(r.linger?1.5:1),r.x,r.z,"haz"),r.owner===0)for(let a of this.E)a.a&&!a.boss&&Oe(a.x,a.z,r.x,r.z)<r.r*r.r&&this.hurtEnemy(a,40,r.x,r.z,"aoe");r.linger||(r.a=!1)}if(r.fired&&r.linger){if(r.linger-=t,r.tick-=t,r.kind==="icicle"&&r.owner!==1&&Oe(n.x,n.z,r.x,r.z)<r.r*r.r&&(n.slowT=.3),r.tick<=0&&(r.tick=.5,r.owner!==1&&Oe(n.x,n.z,r.x,r.z)<r.r*r.r&&this.hurtPlayer(r.dmg,r.x,r.z,"fire"),r.owner!==2))for(let a of this.E)a.a&&!((i=$e[a.k])!=null&&i.flying)&&Oe(a.x,a.z,r.x,r.z)<r.r*r.r&&this.hurtEnemy(a,r.owner===1?r.dmg:7,r.x,r.z,"burn");r.linger<=0&&(r.a=!1)}}},Yh=function(t){let e=this.p;e.hurtT=Math.max(0,e.hurtT-t);for(let n of this.E)n.a&&(n.flash=Math.max(0,n.flash-t*7))},jf=function(t,e){let n=this.p,i=e.mx||0,r=e.mz||0,a=Math.hypot(i,r);a>1&&(i/=a,r/=a),n.inv=Math.max(0,n.inv-t),n.dashCd=Math.max(0,n.dashCd-t),n.slowT=Math.max(0,n.slowT-t);let o=7.2*this.speedMul*(n.slowT>0?.66:1);if(e.dash&&n.dashCd<=0&&n.dashT<=0){let h=i,u=r;a<.1&&(h=n.dx,u=n.dz);let d=Math.hypot(h,u)||1;n.dx=h/d,n.dz=u/d,n.dashT=.2,n.dashCd=this.dashCdBase,n.inv=Math.max(n.inv,.32),this.stats.dashes++,this.ev.push({k:"dash",x:n.x,z:n.z,dx:n.dx,dz:n.dz})}if(n.dashT>0)n.dashT-=t,n.vx=n.dx*30,n.vz=n.dz*30,this.trail&&this.hazard(n.x,n.z,1.4,0,12,"trail",2.2,1);else{let h=1-Math.pow(4e-4,t);n.vx+=(i*o-n.vx)*h,n.vz+=(r*o-n.vz)*h}n.x+=n.vx*t,n.z+=n.vz*t;for(let h of this.obst){let u=n.x-h.x,d=n.z-h.z,f=h.r+n.r*.7,m=u*u+d*d;if(m<f*f&&m>1e-6){let x=Math.sqrt(m);n.x=h.x+u/x*f,n.z=h.z+d/x*f}}let l=Math.hypot(n.x,n.z);l>Ht-1.2&&(n.x*=(Ht-1.2)/l,n.z*=(Ht-1.2)/l);let c=Math.hypot(n.vx,n.vz);if(n.moving=c/o,c>.8){let h=Math.atan2(n.vx,n.vz);n.legYaw+=Le(n.legYaw,h)*Math.min(1,t*12),a>.1&&(n.dx=i/a,n.dz=r/a)}n.shieldMax>0&&(n.shieldT>0?n.shieldT-=t:n.shield<n.shieldMax&&(n.shield=Math.min(n.shieldMax,n.shield+n.shieldMax*.35*t))),n.regen>0&&n.hp<n.maxHp&&(n.hp=Math.min(n.maxHp,n.hp+n.regen*t)),this.p.hp=Math.min(n.hp,n.maxHp)},Qf=function(t){let e=this.p,n=this.rateMul,i=this.target(e.x,e.z,22);if(i){let a=Math.atan2(i.x-e.x,i.z-e.z);e.aim+=Le(e.aim,a)*Math.min(1,t*14)}else e.moving>.2&&(e.aim+=Le(e.aim,Math.atan2(e.vx,e.vz))*Math.min(1,t*8));this.flameOn=!1;let r=this.cls.range||1;for(let a in this.owned){let o=this.owned[a],l=this.W[a],c=pa(a,o.n,this.rmOf(a)),h=o.slot,u=this.muzzle(h);if(l.cd-=t,a==="mg"){let d=this.target(u.x,u.z,c.range*r);if(d&&l.cd<=0){l.cd+=1/(c.rate*n),l.cd<-.1&&(l.cd=0);let f=Math.atan2(d.x-u.x,d.z-u.z)+(this.rng.next()-.5)*2*c.spread,m=z(this,j,di).call(this,this.B);m&&Object.assign(m,{a:!0,k:0,x:u.x,z:u.z,vx:Math.sin(f)*c.speed,vz:Math.cos(f)*c.speed,dmg:c.dmg,life:c.range*r/c.speed+.1,pierce:o.n>=3?1:0,last:0,r:.4}),this.ev.push({k:"shot",w:"mg",x:u.x,z:u.z,a:f,slot:h,evo:o.n>=3})}}else if(a==="laser"){let d=(c.range||c.len)*r,f=this.target(u.x,u.z,d);if(f&&l.cd<=0){l.cd=c.every/n;let m=Math.atan2(f.x-u.x,f.z-u.z);if(o.n>=3){let x=z(this,j,di).call(this,this.B);x&&Object.assign(x,{a:!0,k:1,x:u.x,z:u.z,vx:Math.sin(m)*c.speed,vz:Math.cos(m)*c.speed,dmg:c.dmg,life:d/c.speed,pierce:99,last:0,r:.9,aoe:c.r,hit:new Set}),this.ev.push({k:"shot",w:"plasma",x:u.x,z:u.z,a:m,slot:h})}else z(this,j,tp).call(this,u.x,u.z,m,c.len*r,c.w,c.dmg,h)}}else if(a==="flame"){let d=this.target(e.x,e.z,c.range*r);if(d){this.flameOn=!0;let f=Math.atan2(d.x-u.x,d.z-u.z);if(this.flameDir=f,this.flameSlot=h,this.flameEvo=o.n>=3,this.flameRange=c.range*r,l.aux-=t,l.aux<=0){l.aux=.1;for(let m of this.E)if(m.a&&m.spawnT<.3){let x=Math.sqrt(Oe(u.x,u.z,m.x,m.z));if(x>c.range*r+m.r)continue;Math.abs(Le(f,Math.atan2(m.x-u.x,m.z-u.z)))<c.half+m.r/Math.max(x,1)&&(this.hurtEnemy(m,c.dps*.1,u.x,u.z,"flame"),m.a&&(m.burn=Math.max(m.burn,c.burn),m.burnT=2.2,o.n>=3&&!m.boss&&(m.vx+=Math.sin(f)*.5,m.vz+=Math.cos(f)*.5)))}}}}else if(a==="rocket"){let d=this.target(u.x,u.z,c.range*r);if(d&&l.cd<=0){l.cd=c.every/n;let f=h==="shL"?-1:1;for(let m=0;m<c.n;m++){let x=z(this,j,di).call(this,this.R);if(!x)break;let p=Math.atan2(d.x-u.x,d.z-u.z)+(m-(c.n-1)/2)*.28+f*.4;Object.assign(x,{a:!0,x:u.x,z:u.z,vx:Math.sin(p)*9,vz:Math.cos(p)*9,ang:p,tgt:d.id,dmg:c.dmg,rad:c.r,life:2.4,t:-m*.07})}this.ev.push({k:"shot",w:"rocket",x:u.x,z:u.z,a:e.aim,slot:h})}}else a==="drone"&&(z(this,j,qh).call(this),this.drones.forEach((d,f)=>{d.a+=t*(o.n>=3?2.6:1.9);let m=(2.8+(o.n>=3?.6:0))*e.grow,x=e.x+Math.cos(d.a+d.base)*m,p=e.z+Math.sin(d.a+d.base)*m;if(d.x+=(x-d.x)*Math.min(1,t*9),d.z+=(p-d.z)*Math.min(1,t*9),d.cd-=t,d.cd<=0){let g=this.target(d.x,d.z,c.range);if(g){d.cd=c.every/n;let v=Math.atan2(g.x-d.x,g.z-d.z),S=z(this,j,di).call(this,this.B);S&&Object.assign(S,{a:!0,k:2,x:d.x,z:d.z,vx:Math.sin(v)*26,vz:Math.cos(v)*26,dmg:c.dmg,life:.6,pierce:0,last:0,r:.35}),d.fx=1}}d.fx=Math.max(0,d.fx-t*8)}))}},tp=function(t,e,n,i,r,a,o){let l=Math.sin(n),c=Math.cos(n);this.ev.push({k:"beam",x:t,z:e,a:n,len:i,slot:o});for(let h of this.E)if(h.a&&h.spawnT<.3){let u=h.x-t,d=h.z-e,f=u*l+d*c;if(f<0||f>i+h.r)continue;Math.abs(u*c-d*l)<r+h.r&&this.hurtEnemy(h,a,t,e,"beam")}for(let h of this.barrels)if(h.a){let u=h.x-t,d=h.z-e,f=u*l+d*c;f>0&&f<i&&Math.abs(u*c-d*l)<1.2&&z(this,j,ga).call(this,h)}},ep=function(t){let e=this.p,n=this.E,i=this.t/60,r=0;for(let a=0;a<n.length;a++){let o=n[a];if(!o.a)continue;if(r++,o.stun=Math.max(0,o.stun-t),o.bump=Math.max(0,o.bump-t),o.blockT=Math.max(0,(o.blockT||0)-t),o.burnT>0&&(o.burnT-=t,z(this,j,np).call(this,o,t)),o.spawnT>0){o.spawnT-=t;continue}let l=e.x-o.x,c=e.z-o.z,h=Math.hypot(l,c)||1,u=Math.atan2(l,c);if(o.boss){z(this,j,cp).call(this,o,t,h,u),z(this,j,$h).call(this,o,t);continue}switch(o.k){case"drone":z(this,j,ip).call(this,o,t,h,u,l,c);break;case"turret":z(this,j,sp).call(this,o,t,h,u,i);break;case"charger":z(this,j,rp).call(this,o,t,h,u);break;case"elite":z(this,j,lp).call(this,o,t,h,u);break;case"bomber":z(this,j,ap).call(this,o,t,h,u);break;case"spitter":z(this,j,op).call(this,o,t,h,u,i);break}z(this,j,$h).call(this,o,t)}for(let a=0;a<n.length;a++){let o=n[a];if(!(!o.a||o.spawnT>0))for(let l=a+1;l<n.length;l++){let c=n[l];if(!c.a||c.spawnT>0)continue;let h=(o.r+c.r)*.85,u=c.x-o.x,d=c.z-o.z,f=u*u+d*d;if(f<h*h&&f>1e-5){let m=Math.sqrt(f),x=(h-m)*.5,p=o.boss?.1:1,g=c.boss?.1:1;o.x-=u/m*x*p,o.z-=d/m*x*p,c.x+=u/m*x*g,c.z+=d/m*x*g}}}this.alive=r},np=function(t,e){t.burnTick=(t.burnTick||0)-e,t.burnTick<=0&&(t.burnTick=.25,this.hurtEnemy(t,t.burn*.25,t.x,t.z,"burn"))},$h=function(t,e){var r;if(!t.a)return;t.x+=t.vx*e,t.z+=t.vz*e;let n=Math.pow(t.boss?.02:.004,e);if(t.vx*=n,t.vz*=n,!((r=$e[t.k])!=null&&r.flying||t.k==="warden"))for(let a of this.obst){let o=t.x-a.x,l=t.z-a.z,c=a.r+t.r*.8,h=o*o+l*l;if(h<c*c&&h>1e-6){let u=Math.sqrt(h);t.x=a.x+o/u*c,t.z=a.z+l/u*c,t.st===2&&t.k==="charger"&&z(this,j,Zh).call(this,t)}}let i=Math.hypot(t.x,t.z);i>Ht-t.r&&(t.x*=(Ht-t.r)/i,t.z*=(Ht-t.r)/i,t.st===2&&t.k==="charger"&&z(this,j,Zh).call(this,t))},cr=function(t,e,n=7){let i=this.p;if(this.hurtPlayer(e,t.x,t.z,"melee"),this.state==="run"){let r=Math.atan2(i.x-t.x,i.z-t.z);i.vx+=Math.sin(r)*n,i.vz+=Math.cos(r)*n}},ip=function(t,e,n,i,r,a){let o=$e.drone.speed*t.sp;if(t.st===1){t.stT-=e;let l=i+Math.PI+Math.sin(t.ph)*.8;t.x+=Math.sin(l)*o*.8*e,t.z+=Math.cos(l)*o*.8*e,t.stT<=0&&(t.st=0)}else{let l=Math.sin(this.t*3+t.ph)*.35;t.x+=Math.sin(i+l)*o*e,t.z+=Math.cos(i+l)*o*e}t.face+=Le(t.face,i)*Math.min(1,e*8),n<t.r+Yv(this.p)&&t.st===0&&(z(this,j,cr).call(this,t,$e.drone.dmg*(1+ma(this.t)*.22),4),t.st=1,t.stT=.9,t.ph=this.rng.float(-1,1))},sp=function(t,e,n,i,r){t.face+=Le(t.face,i)*Math.min(1,e*3);let a=$e.turret.speed;if(t.st===0)n>11?(t.x+=Math.sin(i)*a*e,t.z+=Math.cos(i)*a*e):n<7&&(t.x-=Math.sin(i)*a*.8*e,t.z-=Math.cos(i)*a*.8*e),t.cd-=e,t.cd<=0&&n<13&&(t.st=1,t.stT=.65,this.ev.push({k:"aim",id:t.id}));else if(t.st===1&&(t.stT-=e,t.stT<=0)){let o=Math.min(3,1+Math.floor(r/3.5)),l=i;for(let c=0;c<o;c++)this.enemyBullet(t.x+Math.sin(t.face)*1.3,t.z+Math.cos(t.face)*1.3,l+(c-(o-1)/2)*.2,10.5,$e.turret.dmg*(1+r*.05),.4,3.2);this.ev.push({k:"eshot",x:t.x,z:t.z,a:t.face}),t.st=0,t.cd=this.rng.float(2,3)}},rp=function(t,e,n,i){let r=$e.charger.speed;t.st===0?(t.face+=Le(t.face,i)*Math.min(1,e*4),t.x+=Math.sin(t.face)*r*e,t.z+=Math.cos(t.face)*r*e,t.cd-=e,t.cd<=0&&n>5&&n<17&&(t.st=1,t.stT=.95,t.tx=i,this.ev.push({k:"chargeWarn",id:t.id})),n<t.r+.8&&z(this,j,cr).call(this,t,12,6)):t.st===1?(t.stT-=e,t.stT>.35&&(t.tx+=Le(t.tx,i)*Math.min(1,e*5)),t.face=t.tx,t.stT<=0&&(t.st=2,t.stT=1.15,this.ev.push({k:"dashSfx",x:t.x,z:t.z}))):t.st===2?(t.stT-=e,t.x+=Math.sin(t.tx)*17*e,t.z+=Math.cos(t.tx)*17*e,n<t.r+.9&&!t.hitP&&(t.hitP=!0,z(this,j,cr).call(this,t,$e.charger.dmg*(1+ma(this.t)*.12),14)),t.stT<=0&&(t.st=3,t.stT=.9,t.hitP=!1)):t.st===3?(t.stT-=e,t.stT<=0&&(t.st=0,t.cd=this.rng.float(2.8,4))):t.st===4&&(t.stT-=e,t.stun=t.stT,t.stT<=0&&(t.st=0,t.cd=2,t.stun=0))},ap=function(t,e,n,i){let r=$e.bomber.speed*t.sp;t.st===0?(t.face+=Le(t.face,i)*Math.min(1,e*9),t.x+=Math.sin(t.face)*r*e,t.z+=Math.cos(t.face)*r*e,n<4.4&&(t.st=1,t.stT=.7,t.hz=this.hazard(t.x,t.z,3.7,.7,$e.bomber.dmg*(1+ma(this.t)*.1),"slam",0,2),this.ev.push({k:"fuse",x:t.x,z:t.z,id:t.id}))):t.st===1&&(t.stT-=e,t.face+=Le(t.face,i)*Math.min(1,e*3),t.stT<=0&&(t.hz=null,z(this,j,Ul).call(this,t,!0)))},op=function(t,e,n,i,r){t.face+=Le(t.face,i)*Math.min(1,e*3);let a=$e.spitter.speed,o=this.p;if(t.st===0)n>17?(t.x+=Math.sin(i)*a*e,t.z+=Math.cos(i)*a*e):n<10&&(t.x-=Math.sin(i)*a*.9*e,t.z-=Math.cos(i)*a*.9*e),t.cd-=e,t.cd<=0&&n<24&&(t.st=1,t.stT=.8,this.ev.push({k:"aim",id:t.id}));else if(t.st===1&&(t.stT-=e,t.stT<=0)){let l=r>5?2:1;for(let c=0;c<l;c++){let h=this.rng.float(0,ye),u=c?3:.4;this.hazard(o.x+o.vx*.5+Math.cos(h)*u,o.z+o.vz*.5+Math.sin(h)*u,2.7,1.15+c*.2,$e.spitter.dmg*(1+r*.08),"shell",0,2)}this.ev.push({k:"lob",x:t.x,z:t.z,a:t.face}),t.st=0,t.cd=this.rng.float(3.4,5)}},Zh=function(t){t.st=4,t.stT=1.5,t.hitP=!1,this.ev.push({k:"crash",x:t.x,z:t.z})},lp=function(t,e,n,i){let r=$e.elite.speed;if(t.st===0)t.face+=Le(t.face,i)*Math.min(1,e*1.7),n>3.2&&(t.x+=Math.sin(t.face)*r*e,t.z+=Math.cos(t.face)*r*e),t.cd-=e,n<3.8&&t.cd<=0?(t.st=1,t.stT=.85,this.hazard(t.x+Math.sin(t.face)*1.5,t.z+Math.cos(t.face)*1.5,3.4,.85,$e.elite.dmg*(1+ma(this.t)*.12),"slam",0,2)):n>6&&n<13&&t.cd<=0&&t.shots<99&&(t.st=2,t.stT=.5,t.cd=0);else if(t.st===1)t.stT-=e,t.stT<=0&&(t.st=0,t.cd=2.4);else if(t.st===2&&(t.stT-=e,t.stT<=0)){for(let a=-1;a<=1;a++)this.enemyBullet(t.x+Math.sin(t.face)*1.6,t.z+Math.cos(t.face)*1.6,t.face+a*.22,9.5,8*(1+ma(this.t)*.12),.38,3);this.ev.push({k:"eshot",x:t.x,z:t.z,a:t.face}),t.st=0,t.cd=this.rng.float(3,4.5)}},cp=function(t,e,n,i){let r=this.t/60,a=t.hp/t.maxHp;if(t.phase=a<.5?2:1,t.stT-=e,t.ft+=e,t.heat=vn((t.ft-25)/40,0,1.4),t.ft>45&&(t.hp-=t.maxHp*.022*e,t.hp<=0&&!t.dead)){z(this,j,Ul).call(this,t);return}let o=this.p,l=t.phase===2,c=t.k,h=1+.12*t.bi;if(c==="titan"){if(t.st===0){t.face+=Le(t.face,i)*Math.min(1,e*2);let u=Jn.titan.speed*(l?1.25:1);if(n>5&&(t.x+=Math.sin(t.face)*u*e,t.z+=Math.cos(t.face)*u*e),t.stT<=0){let d=[0,1,2,0,1][t.atk++%5];d===0?(t.st=1,t.stT=1.1,this.hazard(t.x+Math.sin(t.face)*3.5,t.z+Math.cos(t.face)*3.5,5.2,1.1,30*h,"slam",0,2),this.ev.push({k:"bossTell",id:t.id})):d===1?(t.st=2,t.stT=1,t.tx=i,this.ev.push({k:"chargeWarn",id:t.id,boss:!0})):(t.st=3,t.stT=.9,this.ev.push({k:"bossTell",id:t.id}))}}else if(t.st===1)t.stT<=0&&(z(this,j,Jh).call(this,t.x,t.z,l?14:10,h),t.st=0,t.stT=l?1.6:2.4);else if(t.st===2)t.stT>.4&&(t.tx+=Le(t.tx,i)*Math.min(1,e*4)),t.face=t.tx,t.stT<=0&&(t.st=5,t.stT=1);else if(t.st===5)t.x+=Math.sin(t.tx)*13*e,t.z+=Math.cos(t.tx)*13*e,n<t.r+1&&!t.hitP&&(t.hitP=!0,z(this,j,cr).call(this,t,26*h,12)),t.stT<=0&&(t.st=0,t.stT=1.8,t.hitP=!1);else if(t.st===3&&t.stT<=0){for(let u=0;u<(l?6:4);u++){let d=u/6*ye+t.ph;this.spawnEnemy("drone",vn(t.x+Math.cos(d)*4,-Ht+1,Ht-1),vn(t.z+Math.sin(d)*4,-Ht+1,Ht-1))}t.st=0,t.stT=2.2}}else if(c==="cryo"){if(t.st===0){t.face+=Le(t.face,i)*Math.min(1,e*2);let u=Jn.cryo.speed*(l?1.3:1);if(n>6&&(t.x+=Math.sin(t.face)*u*e,t.z+=Math.cos(t.face)*u*e),t.stT<=0){let d=[0,1,2,1,0,2][t.atk++%6];t.st=d+1,this.ev.push({k:"bossTell",id:t.id}),d===0?(t.stT=1.2,this.hazard(t.x+Math.sin(t.face)*3.6,t.z+Math.cos(t.face)*3.6,5.4,1.2,28*h,"slam",0,2)):d===1?t.stT=.9:t.stT=1}}else if(t.st===1){if(t.stT<=0){z(this,j,Jh).call(this,t.x,t.z,9,h);for(let u=0;u<2;u++){let d=t.face+(u?.9:-.9);this.hazard(t.x+Math.sin(d)*6,t.z+Math.cos(d)*6,3,.5,6,"icicle",4.5,2)}t.st=0,t.stT=l?1.5:2.3}}else if(t.st===2){if(t.stT<=0){let u=l?7:5;for(let d=0;d<u;d++){let f=this.rng.float(0,ye),m=d?this.rng.float(1.5,6.5):0;this.hazard(o.x+o.vx*.35+Math.cos(f)*m,o.z+o.vz*.35+Math.sin(f)*m,2.6,1+d*.13,18*h,"shell",0,2)}t.st=0,t.stT=1.8}}else if(t.st===3&&t.stT<=0){let u=l?5:3;for(let d=0;d<u;d++){let f=d/u*ye+t.ph;this.spawnEnemy("bomber",vn(t.x+Math.cos(f)*4.5,-Ht+1,Ht-1),vn(t.z+Math.sin(f)*4.5,-Ht+1,Ht-1))}t.ph+=.7,t.st=0,t.stT=2.4}}else if(c==="warden"){if(t.beam=0,t.st===0){t.face+=Le(t.face,i)*Math.min(1,e*3);let u=Jn.warden.speed*(l?1.25:1),d=11,f=Math.sin(this.t*.55)>0?1:-1,m=n>d+2?1:n<d-3?-.7:0;if(t.x+=(Math.sin(i)*m+Math.cos(i)*f*.6)*u*e,t.z+=(Math.cos(i)*m-Math.sin(i)*f*.6)*u*e,t.stT<=0){let x=[0,1,2,1,0][t.atk++%5];this.ev.push({k:"bossTell",id:t.id}),x===0?(t.st=1,t.stT=2.5,t.sw=this.rng.chance(.5)?1:-1,t.sa=i-t.sw*.95,t.tx=0):x===1?(t.st=2,t.stT=.6,t.shots=0):(t.st=3,t.stT=.9)}}else if(t.st===1){let u=2.5-t.stT;if(u<.9)t.beam=1,t.ba=t.sa,t.face+=Le(t.face,t.sa)*Math.min(1,e*8);else{let d=(u-.9)/1.6;t.beam=2,t.ba=t.sa+t.sw*1.9*vn(d,0,1)*(l?1.15:1),t.face=t.ba;let f=Math.sin(t.ba),m=Math.cos(t.ba),x=o.x-t.x,p=o.z-t.z,g=x*f+p*m,v=Math.abs(x*m-p*f);g>0&&g<36&&v<.95&&o.dashT<=0&&this.hurtPlayer(15*h,t.x,t.z,"laser")}t.stT<=0&&(t.st=0,t.stT=l?1.5:2.2)}else if(t.st===2){if(t.stT<=0){let u=l?10:8;for(let d=0;d<u;d++)this.enemyBullet(t.x,t.z,t.ph+d/u*ye,8.5,9*h,.42,3.6);this.ev.push({k:"eshot",x:t.x,z:t.z,a:t.ph,big:!0}),t.ph+=.2,t.shots++,t.shots>=(l?8:6)?(t.st=0,t.stT=1.8):t.stT=.3}}else if(t.st===3&&t.stT<=0){let u=l?3:2;for(let d=0;d<u;d++){let f=d/u*ye+t.ph;this.spawnEnemy("spitter",vn(t.x+Math.cos(f)*4.5,-Ht+2,Ht-2),vn(t.z+Math.sin(f)*4.5,-Ht+2,Ht-2))}t.ph+=1,t.st=0,t.stT=2.6}}else if(c==="spider")if(t.st===0){t.face+=Le(t.face,i)*Math.min(1,e*3);let u=Jn.spider.speed*(l?1.2:1),d=10,f=Math.sin(this.t*.7)>0?1:-1,m=n>d+2?1:n<d-3?-.6:0;if(t.x+=(Math.sin(i)*m+Math.cos(i)*f*.7)*u*e,t.z+=(Math.cos(i)*m-Math.sin(i)*f*.7)*u*e,t.stT<=0){let x=[1,0,2,1,0][t.atk++%5];if(x===0)t.st=1,t.stT=.95,t.tx=o.x+o.vx*.2,t.tz=o.z+o.vz*.2,this.hazard(t.tx,t.tz,4.2,.95,28*h,"slam",0,2),this.ev.push({k:"bossTell",id:t.id});else if(x===1)t.st=2,t.stT=.6,this.ev.push({k:"bossTell",id:t.id});else{t.st=3,t.stT=.9,this.ev.push({k:"bossTell",id:t.id});for(let p=0;p<(l?3:2);p++){let g=this.rng.float(0,ye);this.hazard(o.x+Math.cos(g)*4,o.z+Math.sin(g)*4,2.6,1.2,20*h,"shell",0,2)}}}}else if(t.st===1){let u=1-t.stT/.95;if(t.leap=Math.sin(vn(u,0,1)*Math.PI),t.stT<=.3){let d=1-t.stT/.3;t.x+=(t.tx-t.x)*Math.min(1,e*9),t.z+=(t.tz-t.z)*Math.min(1,e*9)}t.stT<=0&&(t.leap=0,t.st=0,t.stT=l?1:1.6,this.hitStop=Math.max(this.hitStop,.04))}else if(t.st===2){if(t.stT<=0){let u=l?9:7;for(let d=0;d<u;d++)this.enemyBullet(t.x,t.z,i+(d-(u-1)/2)*.17,10,9*h,.4,3);this.ev.push({k:"eshot",x:t.x,z:t.z,a:i}),t.st=0,t.stT=1.5}}else t.st===3&&t.stT<=0&&(t.st=0,t.stT=1.8);else if(t.st===0){t.face+=Le(t.face,i)*Math.min(1,e*1.5);let u=Jn.walker.speed*(l?1.25:1);if(n>7&&(t.x+=Math.sin(t.face)*u*e,t.z+=Math.cos(t.face)*u*e),t.stT<=0){let d=[0,1,0,2,1][t.atk++%5];if(d===0){t.st=1,t.stT=1.4;let f=l?7:5;for(let m=0;m<f;m++){let x=m===0?0:this.rng.float(0,ye),p=m===0?0:this.rng.float(2,7);this.hazard(o.x+o.vx*.3+Math.cos(x)*p,o.z+o.vz*.3+Math.sin(x)*p,3.2,1+m*.12,26*h,"shell",0,2)}this.ev.push({k:"bossTell",id:t.id})}else d===1?(t.st=2,t.stT=.7,t.shots=0,this.ev.push({k:"bossTell",id:t.id})):(t.st=3,t.stT=.9,this.ev.push({k:"bossTell",id:t.id}))}}else if(t.st===1)t.stT<=0&&(t.st=0,t.stT=1.2);else if(t.st===2){if(t.stT<=0)if(t.shots<(l?5:3)){for(let u of[-.12,.12])this.enemyBullet(t.x,t.z,i+u,11.5,12*h,.5,3,!0);this.ev.push({k:"eshot",x:t.x,z:t.z,a:i,big:!0}),t.shots++,t.stT=.28}else t.st=0,t.stT=1.5}else if(t.st===3&&t.stT<=0){let u=this.rng.chance(.5)?1:-1;for(let d=0;d<(l?3:2);d++)this.spawnEnemy("charger",vn(t.x+Math.cos(d*2.1)*5,-Ht+2,Ht-2),vn(t.z+Math.sin(d*2.1)*5,-Ht+2,Ht-2));t.st=0,t.stT=2.5}n<t.r+o.r&&t.st===0&&!t.hitP&&z(this,j,cr).call(this,t,14*h,9)},Jh=function(t,e,n,i){this.rings=this.rings||[],this.rings.push({x:t,z:e,r:1.5,speed:n,dmg:14*i,hit:!1}),this.ev.push({k:"ring",x:t,z:e})},hp=function(t){let e=this.p;for(let n of this.B){if(!n.a)continue;n.x+=n.vx*t,n.z+=n.vz*t,n.life-=t;let i=n.life<=0;if(!i)for(let r of this.E){if(!r.a||r.spawnT>.3)continue;let a=r.r+n.r;if(Oe(n.x,n.z,r.x,r.z)<a*a){if(n.hit){if(n.hit.has(r.id))continue;n.hit.add(r.id)}else if(n.last===r.id)continue;if(n.last=r.id,this.hurtEnemy(r,n.dmg,n.x-n.vx*.05,n.z-n.vz*.05,"bullet"),n.k!==1)if(n.pierce>0)n.pierce--;else{i=!0;break}}}if(!i){for(let r of this.barrels)if(r.a&&Oe(n.x,n.z,r.x,r.z)<1.4){r.hp-=n.dmg,r.hp<=0&&z(this,j,ga).call(this,r),i=!0;break}}i&&(n.a=!1,n.k===1?z(this,j,lr).call(this,n.x,n.z,n.aoe,n.dmg*.9,9):n.life>0&&this.ev.push({k:"bimpact",x:n.x,z:n.z}))}for(let n of this.R){if(!n.a||(n.t+=t,n.life-=t,n.t<0))continue;let i=null;for(let o of this.E)if(o.a&&o.id===n.tgt){i=o;break}if(i||(i=this.target(n.x,n.z,18)),i){n.tgt=i.id;let o=Math.atan2(i.x-n.x,i.z-n.z);n.ang+=vn(Le(n.ang,o),-6*t,6*t)}let r=11+n.t*9;n.vx=Math.sin(n.ang)*r,n.vz=Math.cos(n.ang)*r,n.x+=n.vx*t,n.z+=n.vz*t;let a=n.life<=0;if(!a){for(let o of this.E)if(o.a&&o.spawnT<.3&&Oe(n.x,n.z,o.x,o.z)<(o.r+.45)**2){a=!0;break}}a&&(n.a=!1,z(this,j,lr).call(this,n.x,n.z,n.rad,n.dmg,7))}for(let n of this.EB)if(n.a){if(n.x+=n.vx*t,n.z+=n.vz*t,n.life-=t,n.life<=0){n.a=!1;continue}if(Oe(n.x,n.z,e.x,e.z)<(n.r+e.r*.75)**2)n.a=!1,this.hurtPlayer(n.dmg,n.x,n.z,"bullet");else for(let i of this.obst)if(Oe(n.x,n.z,i.x,i.z)<(i.r*.8)**2){n.a=!1,this.ev.push({k:"bimpact",x:n.x,z:n.z,e:!0});break}}if(this.rings)for(let n=this.rings.length-1;n>=0;n--){let i=this.rings[n];i.r+=i.speed*t;let r=Math.hypot(e.x-i.x,e.z-i.z);!i.hit&&Math.abs(r-i.r)<.9&&e.dashT<=0&&(i.hit=!0,this.hurtPlayer(i.dmg,i.x,i.z,"ring")),i.r>38&&this.rings.splice(n,1)}},up=function(t){let e=this.p,n=3.6*this.gar.magnet,i=1.3*e.grow;for(let r of this.PK){if(!r.a)continue;r.t+=t;let a=Math.sqrt(Oe(r.x,r.z,e.x,e.z));if(r.k==="xp"||r.k==="heal"||r.k==="crate")if(a<(r.k==="crate"?n*1.6:n)||r.mag){r.mag=!0;let o=Math.atan2(e.x-r.x,e.z-r.z),l=10+r.t*5+(r.k==="xp"?8:0);r.vx=Math.sin(o)*l,r.vz=Math.cos(o)*l}else r.vx*=Math.pow(.02,t),r.vz*=Math.pow(.02,t);r.x+=r.vx*t,r.z+=r.vz*t,a<i+.3&&(r.a=!1,r.k==="xp"?(this.stats.scrap+=r.v,z(this,j,$f).call(this,r.v),this.ev.push({k:"pickup",t:"xp",x:r.x,z:r.z})):r.k==="heal"?(e.hp=Math.min(e.maxHp,e.hp+e.maxHp*r.v),this.ev.push({k:"pickup",t:"heal",x:r.x,z:r.z})):(this.pend.push({minR:r.v>=2?1:0,src:"crate"}),this.ev.push({k:"pickup",t:"crate",x:r.x,z:r.z}),z(this,j,Nl).call(this)))}};var ma=s=>s/60,Yv=s=>s.r*s.grow*.8;var oe=new ae,ce=new hn,Jt=new k,ie=new k,In=new un,rn=new Pt,ze=Math.PI*2,$v={scrapyard:{sky:7035464,fog:8021584,ground:["#6a5a45","#7a6850","#574837"],hemi:[16771528,4864556,.9],sun:[16767392,1.7],env:.55,dust:[.8,.6,.35]},burned:{sky:3483947,fog:3943984,ground:["#434345","#515154","#343437"],hemi:[15131903,3812394,.95],sun:[16754808,1.9],env:.6,dust:[.5,.3,.2]},ice:{sky:8362413,fog:9085879,ground:["#8ea2b4","#7c92a7","#687f96"],hemi:[14478591,4872812,.62],sun:[16773340,1.25],env:.5,flashK:.3,snow:1,cracks:"#e8f4ff"},space:{sky:197900,fog:461592,ground:["#262d3c","#303949","#1b2130"],hemi:[10466559,1053727,.75],sun:[11060479,1.5],env:.45,stars:1,panels:"#49597a"},desert:{sky:12093786,fog:12160350,ground:["#98714a","#a67d52","#845e3a"],hemi:[16773328,6965808,.85],sun:[16769704,2],env:.45,dust:[.9,.7,.4]}},Kh={drone:72,turret:24,charger:16,elite:12,bomber:24,spitter:12};var zl={scrapyard:{c:["#d9c49a","#8a4a28","#1c1612","#0d0b0a","#2a2018","#1a1612","#a89878","#cdb88c"],tire:1,n:[18,22,16,14,14,12,40,10],op:[.28,.4,.5,.55,.4,.4,.5,.3]},burned:{c:["#a8a4a0","#16161a","#0a0a0c","#0c0c0e","#ff7a2a","#101012","#e86a28","#8c8a88"],glow:1,n:[20,22,18,14,10,12,40,10],op:[.3,.5,.6,.5,.5,.45,.6,.3]},desert:{c:["#e6c48a","#b88a52","#6a4a2a","#2a1c12","#d8b078","#5a4026","#ead3a2","#f0d49c"],ripple:1,n:[28,20,18,8,12,12,50,22],op:[.34,.35,.45,.45,.4,.4,.5,.4]},ice:{lift:1,c:["#ffffff","#f6fbff","#e6f6ff","#4f93d6","#d4ecff","#6a90b8","#ffffff","#ffffff"],n:[34,22,24,16,14,12,34,16],op:[.62,.55,.65,.4,.6,.35,.7,.35]},space:{c:["#6a7fa8","#0a0f1a","#04060c","#4ee8ff","#ffc933","#04060c","#9ab4e8","#4ee8ff"],hazard:1,n:[10,14,14,10,10,10,36,10],op:[.12,.5,.6,.55,.62,.55,.45,.4]}};function Zv(s,t){let e=zl[s],n=128,i=document.createElement("canvas");i.width=n*4,i.height=n*2;let r=i.getContext("2d"),a=t,o=()=>(a=a*1664525+1013904223>>>0)/4294967296,l=f=>{if(f[0]==="#"){let x=f.length===4?f.slice(1).replace(/./g,"$&$&"):f.slice(1);return`rgba(${parseInt(x.slice(0,2),16)},${parseInt(x.slice(2,4),16)},${parseInt(x.slice(4,6),16)},0)`}let m=f.match(/(\d+),\s*(\d+),\s*(\d+)/);return`rgba(${m[1]},${m[2]},${m[3]},0)`},c=(f,m,x,p,g,v,S=0)=>{r.save(),r.translate(f,m),r.rotate(S),r.scale(1,p/x);let y=r.createRadialGradient(0,0,0,0,0,x);y.addColorStop(0,g),y.addColorStop(1,l(g)),r.globalAlpha=v,r.fillStyle=y,r.beginPath(),r.arc(0,0,x,0,ze),r.fill(),r.restore()},h=(f,m)=>{r.save(),r.translate(f%4*n,(f/4|0)*n),r.beginPath(),r.rect(0,0,n,n),r.clip(),m(),r.restore()},u=e.c;h(0,()=>{if(e.lift)for(let f=0;f<4;f++)c(n/2+6+f*3-6,n/2+9,44,17,"#5f84b0",.24,.1);for(let f=0;f<4;f++)c(n/2+(o()-.5)*40,n/2+(o()-.5)*12,40+o()*14,14+o()*8,u[0],.7,(o()-.5)*.4)}),h(1,()=>{e.lift&&c(n/2+4,n/2+8,52,40,"#5f84b0",.22);for(let f=0;f<7;f++)c(n/2+(o()-.5)*60,n/2+(o()-.5)*60,14+o()*20,12+o()*14,u[1],.65,o()*3)}),h(2,()=>{let f=(m,x,p,g,v,S)=>{r.lineWidth=v,r.beginPath(),r.moveTo(m,x);for(let y=0;y<5;y++)p+=(o()-.5)*.9,m+=Math.cos(p)*g/5,x+=Math.sin(p)*g/5,r.lineTo(m,x);r.stroke(),S<2&&g>22&&f(m,x,p+(o()>.5?.7:-.7),g*.55,v*.7,S+1)};r.strokeStyle=u[2],r.globalAlpha=.9,e.glow&&(r.shadowColor="#ff6a1a",r.shadowBlur=8),f(6,40+o()*50,.1,118,2.6,0),r.shadowBlur=0,e.glow||(r.strokeStyle="rgba(255,255,255,0.35)",r.globalAlpha=.5,r.translate(1.5,1.5),f(6,64,.1,118,1,0))}),h(3,()=>{c(n/2,n/2,48,32,u[3],.85,.3),c(n/2-8,n/2-6,30,7,"rgba(255,255,255,0.7)",.5,-.5)}),h(4,()=>{if(e.hazard){r.fillStyle="#05070c",r.globalAlpha=.9,r.fillRect(8,40,112,48),r.save(),r.beginPath(),r.rect(8,40,112,48),r.clip(),r.fillStyle=u[4];for(let f=-60;f<140;f+=22)r.beginPath(),r.moveTo(f,88),r.lineTo(f+24,88),r.lineTo(f+64,40),r.lineTo(f+40,40),r.fill();r.restore()}else if(e.glow)r.strokeStyle=u[4],r.shadowColor=u[4],r.shadowBlur=10,r.lineWidth=3,r.globalAlpha=.9,r.beginPath(),r.arc(n/2,n/2,34,0,ze),r.stroke(),c(n/2,n/2,44,44,"rgba(0,0,0,0.9)",.8);else if(e.tire){r.strokeStyle=u[4],r.globalAlpha=.8,r.lineWidth=9;for(let f of[-14,14])r.beginPath(),r.moveTo(0,30+f),r.bezierCurveTo(40,40+f,80,90+f,128,80+f),r.stroke();r.globalAlpha=.5,r.strokeStyle="#000",r.lineWidth=3;for(let f of[-14,14])for(let m=6;m<124;m+=9)r.beginPath(),r.moveTo(m,30+f+m*.35-5),r.lineTo(m+3,30+f+m*.35+5),r.stroke()}else if(e.ripple){r.strokeStyle=u[4],r.lineWidth=3,r.globalAlpha=.8;for(let f=0;f<6;f++){r.beginPath();for(let m=0;m<=128;m+=8)r.lineTo(m,22+f*16+Math.sin(m*.12+f)*4);r.stroke()}}else{r.strokeStyle=u[4],r.globalAlpha=.85,r.lineWidth=2,r.translate(n/2,n/2);for(let f=0;f<6;f++)r.rotate(Math.PI/3),r.beginPath(),r.moveTo(0,0),r.lineTo(0,-44),r.moveTo(0,-26),r.lineTo(9,-36),r.moveTo(0,-26),r.lineTo(-9,-36),r.stroke();c(0,0,14,14,"#ffffff",.7)}}),h(5,()=>{for(let f=0;f<6;f++)c(n/2+(o()-.5)*50,n/2+(o()-.5)*50,12+o()*18,10+o()*12,u[5],.7,o()*3);if(s==="space"){r.globalAlpha=.8,r.strokeStyle="#1a2438",r.lineWidth=2;for(let f=24;f<110;f+=10)r.beginPath(),r.moveTo(f,28),r.lineTo(f,100),r.stroke()}}),h(6,()=>{for(let f=0;f<26;f++){r.fillStyle=u[6],r.globalAlpha=.5+o()*.5;let m=o()*n,x=o()*n,p=1+o()*3;r.beginPath(),r.moveTo(m,x-p),r.lineTo(m+p,x+p*.7),r.lineTo(m-p,x+p*.7),r.fill()}}),h(7,()=>{r.strokeStyle=u[7],r.lineCap="round";for(let f=0;f<6;f++){r.globalAlpha=.35+o()*.5,r.lineWidth=1.5+o()*2;let m=18+f*18+o()*6,x=o()*30,p=90+o()*36;r.beginPath(),r.moveTo(x,m),r.lineTo(p,m+(o()-.5)*8),r.stroke()}});let d=new Xs(i);return d.colorSpace=Ge,d.anisotropy=4,d}function Jv(s,t){let e=zl[s],n=Zv(s,s.length*131+7),i=99+s.length*17,r=()=>(i=i*1664525+1013904223>>>0)/4294967296,a=e.n.reduce((x,p)=>x+p,0),o=new Vn(1,1).rotateX(-Math.PI/2),l=o.attributes.uv.array.slice(),c=new dn({map:n,transparent:!0,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-2,polygonOffsetUnits:-2}),h=new we(o,c,a),u=new Float32Array(a),d=new Float32Array(a);c.onBeforeCompile=x=>{x.vertexShader=x.vertexShader.replace("#include <common>",`#include <common>
attribute float aCell; attribute float aOp; varying float vOp;`).replace("#include <uv_vertex>",`#include <uv_vertex>
vOp = aOp; vMapUv = (vec3(uv, 1.0) * mat3(0.25, 0.0, 0.0, 0.0, 0.5, 0.0, 0.0, 0.0, 1.0)).xy + vec2(mod(aCell, 4.0) * 0.25, floor(aCell / 4.0) * 0.5);`),x.fragmentShader=x.fragmentShader.replace("#include <common>",`#include <common>
varying float vOp;`).replace("#include <opaque_fragment>",`diffuseColor.a *= vOp;
#include <opaque_fragment>`)};let f=0,m=[[16,34],[10,22],[14,30],[9,18],[8,16],[8,16],[6,12],[12,24]];for(let x=0;x<8;x++)for(let p=0;p<e.n[x];p++,f++){let g=r()*ze,v=Math.sqrt(r())*(t+6),S=m[x][0]+r()*(m[x][1]-m[x][0]),y=x===0||x===7||x===4?1:.6+r()*.5;Jt.set(Math.cos(g)*v,.02+x*6e-4,Math.sin(g)*v),ce.setFromEuler(In.set(0,r()*ze,0)),ie.set(S*.35,1,S*.35*y),oe.compose(Jt,ce,ie),h.setMatrixAt(f,oe);let T=.8+r()*.3;h.setColorAt(f,rn.setRGB(T,T,T)),u[f]=x,d[f]=e.op[x]*(.7+r()*.5)}return o.setAttribute("aCell",new Tn(u,1)),o.setAttribute("aOp",new Tn(d,1)),h.frustumCulled=!1,h.renderOrder=1,h.userData.own=!0,h}function Kv(s,t){let n=document.createElement("canvas");n.width=n.height=512;let i=n.getContext("2d"),r=t,a=()=>(r=r*1664525+1013904223>>>0)/4294967296,o=(h,u,d,f)=>{let m=[0],x=[0];h<d&&m.push(512),h>512-d&&m.push(-512),u<d&&x.push(512),u>512-d&&x.push(-512);for(let p of m)for(let g of x)f(p,g)},l=(h,u,d,f,m,x,p)=>{let g=[[h,u]];for(let v=0;v<d;v++)h+=(a()-.5)*f,u+=(a()-.5)*f,g.push([h,u]);i.strokeStyle=x,i.lineWidth=m,i.globalAlpha=p,o(g[0][0],g[0][1],f*d,(v,S)=>{i.beginPath(),g.forEach((y,T)=>T?i.lineTo(y[0]+v,y[1]+S):i.moveTo(y[0]+v,y[1]+S)),i.stroke()})};i.fillStyle=s.ground[0],i.fillRect(0,0,512,512);for(let h=0;h<1400;h++){i.fillStyle=s.ground[a()*3|0],i.globalAlpha=.25+a()*.3;let u=2+a()*12,d=a()*512,f=a()*512,m=a()*3,x=u*(.5+a()*.7);o(d,f,u+2,(p,g)=>{i.beginPath(),i.ellipse(d+p,f+g,u,x,m,0,ze),i.fill()})}for(let h=0;h<26;h++)l(a()*512,a()*512,5,70,1+a()*2,s.cracks?"#35557f":"#000",s.cracks?.14:.18);for(let h=0;h<500;h++){i.fillStyle=a()>.5?"#000":"#fff",i.globalAlpha=.04+a()*.06;let u=a()*512,d=a()*512,f=1+a()*3;o(u,d,4,(m,x)=>i.fillRect(u+m,d+x,f,f))}if(s.panels){i.globalAlpha=.55,i.strokeStyle=s.panels,i.lineWidth=2;for(let h=0;h<=512;h+=128)i.beginPath(),i.moveTo(h,0),i.lineTo(h,512),i.moveTo(0,h),i.lineTo(512,h),i.stroke();i.globalAlpha=.25,i.lineWidth=1;for(let h=64;h<512;h+=128)i.beginPath(),i.moveTo(h,0),i.lineTo(h,512),i.moveTo(0,h),i.lineTo(512,h),i.stroke();i.globalAlpha=.5,i.fillStyle="#6c86b8";for(let h=0;h<4;h++)for(let u=0;u<4;u++)i.fillRect(h*128+6,u*128+6,4,4),i.fillRect(h*128+118,u*128+118,4,4)}if(s.cracks)for(let h=0;h<16;h++)l(a()*512,a()*512,6,80,1+a()*1.5,s.cracks,.42);let c=new Xs(n);return c.wrapS=c.wrapT=ks,c.repeat.set(16,16),c.colorSpace=Ge,c.anisotropy=4,c}var Gt,jh,Qh,Ol,dp,fp,pp,mp,gp,xp,_p,vp,yp,Mp,bp,Sp,wp,Tp,Ep,kl=class{constructor(t,e,n,i={}){He(this,Gt);this.canvas=t,this.geos=e,this.audio=n,this.hooks=i;let r=new URLSearchParams(location.search),a=this.renderer=new vl({canvas:t,antialias:!1,powerPreference:"high-performance",alpha:!1});this.tierIndex=Uf(a),this.renderScale=1,a.toneMapping=Zr,a.toneMappingExposure=.72,a.outputColorSpace=Ge,this.scene=new Mi,this.cam=new Qe(40,1,.5,400),this.pm=new js(a),this.envTex=this.pm.fromScene(new bl,.04).texture,this.scene.environment=this.envTex,this.hemi=new ls(16777215,4473924,1),this.sun=new hs(16777215,2),this.sun.position.set(-18,30,12),this.scene.add(this.hemi,this.sun,this.sun.target),this.flashLight=new cs(16755285,0,22,1.6),this.flashLight.position.set(0,3,0),this.scene.add(this.flashLight),this.flashI=0,this.mat=ua({}),this.matEnemy=ua({ownFlash:{value:0}}),this.bossMats=[],this.rigFlash={value:0},this.rigMat=ua({ownFlash:this.rigFlash}),this.rig=new Al(e,this.rigMat),this.rig.flashU=this.rigFlash,this.scene.add(this.rig.root),this.world=new Ve,this.scene.add(this.world),this.glow=new fa(this.scene,520,!0),this.smoke=new fa(this.scene,160,!1),this.debris=new Il(this.scene,320,new Wn({roughness:.6,metalness:.6,envMapIntensity:.6})),this.decals=new Pl(this.scene,120),this.beams=new Ll(this.scene,8),this.timed=[],this.inst={};let o={drone:["e_drone",1.9],turret:["e_turret",3.1],charger:["e_charger",3.9],elite:["e_elite",4.5],bomber:["e_bomber",1.9],spitter:["e_spitter",3.3]};this.yOff={},this.eScale={};for(let f in o){let m=e[o[f][0]],x=m.boundingBox,p=x.max.y-x.min.y,g=Math.max(x.max.x-x.min.x,x.max.z-x.min.z,p),v=o[f][1]/(f==="drone"||f==="charger"||f==="spitter"?g:p);this.eScale[f]=v,this.yOff[f]=-x.min.y*v;let S=new we(m,this.matEnemy,Kh[f]);S.count=0,S.frustumCulled=!1,S.setColorAt(0,rn.setRGB(1,1,1)),S.instanceMatrix.setUsage($n),S.instanceColor.setUsage($n),this.inst[f]=S,this.scene.add(S)}this.bossMesh={};let l={titan:["boss_titan",8.8],spider:["boss_spider",5.4],walker:["boss_walker",8.2],cryo:["boss_cryo",8.8],warden:["boss_warden",6.4]};for(let f in l){let m=e[l[f][0]],x=m.boundingBox,p=x.max.y-x.min.y,g={value:0},v=ua({ownFlash:g});v.userData.flash=g;let S=new re(m,v),y=l[f][1]/(f==="spider"?Math.max(x.max.x-x.min.x,x.max.z-x.min.z)*.9:p);S.userData.sc=y,S.userData.y0=-x.min.y*y,S.visible=!1,S.frustumCulled=!1,this.scene.add(S),this.bossMesh[f]=S}let c=new Vi(.075,.075,1,6);c.rotateX(Math.PI/2),this.bul=new we(c,new dn({toneMapped:!1}),240),this.bul.count=0,this.bul.frustumCulled=!1,this.bul.setColorAt(0,rn.setRGB(1,1,1)),this.bul.instanceColor.setUsage($n),this.scene.add(this.bul),this.ebul=new we(new wi(.32,1),new dn({toneMapped:!1}),100),this.ebul.count=0,this.ebul.frustumCulled=!1,this.ebul.setColorAt(0,rn.setRGB(1,.4,.1)),this.ebul.instanceColor.setUsage($n),this.scene.add(this.ebul);let h=pn([Zt("cyl",[.12,.12,.7,6],[.5,.5,.5],[0,0,0],[Math.PI/2,0,0]),Zt("cone",[.12,.28,6],[.9,.2,.1],[0,0,.48],[Math.PI/2,0,0],[1,1,1],.5)]);this.rocketMesh=new we(h,this.mat,40),this.rocketMesh.count=0,this.rocketMesh.frustumCulled=!1,this.scene.add(this.rocketMesh),this.pkXp=new we(new Gr(.26,0),new dn({toneMapped:!1}),jv),this.pkXp.count=0,this.pkXp.frustumCulled=!1,this.pkXp.setColorAt(0,rn.setRGB(1,1,1)),this.scene.add(this.pkXp),this.pkBox=new we(pn([Zt("box",[.8,.8,.8],[.7,.4,.1],[0,.4,0],[0,0,0],[1,1,1],.5),Zt("box",[.92,.18,.92],[.25,.25,.27],[0,.4,0])]),this.mat,12),this.pkBox.count=0,this.pkBox.frustumCulled=!1,this.scene.add(this.pkBox),this.pkHeal=new we(pn([Zt("box",[.62,.2,.2],[.2,1,.4],[0,.4,0],[0,0,0],[1,1,1],.8),Zt("box",[.2,.2,.62],[.2,1,.4],[0,.4,0],[0,0,0],[1,1,1],.8)]),this.mat,24),this.pkHeal.count=0,this.pkHeal.frustumCulled=!1,this.scene.add(this.pkHeal);let u=e.sh_drone;this.droneMesh=new we(u,this.mat,6),this.droneMesh.count=0,this.droneMesh.frustumCulled=!1,this.droneScale=.4*2.6/Math.max(u.boundingBox.max.x-u.boundingBox.min.x,u.boundingBox.max.z-u.boundingBox.min.z,u.boundingBox.max.y-u.boundingBox.min.y),this.scene.add(this.droneMesh),this.nums=[];let d=document.getElementById("nums");for(let f=0;f<22;f++){let m=document.createElement("div");m.className="num",d==null||d.appendChild(m),this.nums.push({d:m,t:0})}this.numI=0,this.shake=0,this.camT=new k,this.camPos=new k,this.aq=new Sl({startTier:this.tierIndex,apply:f=>z(this,Gt,Qh).call(this,f),targetFps:55,lowFps:44}),z(this,Gt,Qh).call(this,{tier:this.aq.tier,tierIndex:this.aq.tierIndex,renderScale:1}),this.mapId=null,this.resize(),addEventListener("resize",()=>this.resize()),this.spawnMarks=[],this.t=0,this.fireAcc=0,this.trailAcc=0,this.bossHp=null,this.eTell=new Map,this.tmpV=new k,this.menuMode=!1}resize(){let t=innerWidth,e=innerHeight;this.renderer.setSize(t,e,!1),this.cam.aspect=t/e,this.cam.updateProjectionMatrix(),this.aspect=t/e,this.camDist=this.aspect<1.3?1+(1.3/this.aspect-1)*.55:1}setMap(t,e){var d,f,m,x;if(this.mapId===t&&this.worldSim===e)return;for(this.mapId=t,this.worldSim=e;this.world.children.length;){let p=this.world.children.pop();(d=p.traverse)==null||d.call(p,g=>{g.isMesh&&g.userData.own&&g.geometry.dispose()})}let n=$v[t];this.look=n,this.lod=[],this.scene.background=new Pt(n.sky),this.scene.fog=new Ir(n.fog,38,92),this.hemi.color.setHex(n.hemi[0]),this.hemi.groundColor.setHex(n.hemi[1]),this.hemi.intensity=n.hemi[2],this.sun.color.setHex(n.sun[0]),this.sun.intensity=n.sun[1],this.scene.environmentIntensity=n.env;let i=Kv(n,t.length*977+13),r=new re(new Vn(300,300).rotateX(-Math.PI/2),new Wn({map:i,roughness:.96,metalness:0,envMapIntensity:.3}));r.userData.own=!0,this.world.add(r),r.material.onBeforeCompile=p=>{p.vertexShader=p.vertexShader.replace("#include <common>",`#include <common>
varying vec2 vWxz;`).replace("#include <begin_vertex>",`#include <begin_vertex>
vWxz = (modelMatrix * vec4(transformed, 1.0)).xz;`),p.fragmentShader=p.fragmentShader.replace("#include <common>",`#include <common>
varying vec2 vWxz;
float h21(vec2 p){ return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453); }
float vn(vec2 p){ vec2 i = floor(p), f = fract(p); f = f * f * (3.0 - 2.0 * f); return mix(mix(h21(i), h21(i + vec2(1, 0)), f.x), mix(h21(i + vec2(0, 1)), h21(i + vec2(1, 1)), f.x), f.y); }`).replace("#include <map_fragment>",`#include <map_fragment>
float gn = vn(vWxz * 0.05) * 0.55 + vn(vWxz * 0.14) * 0.3 + vn(vWxz * 0.4) * 0.15; diffuseColor.rgb *= mix(vec3(0.8, 0.82, 0.86), vec3(1.16, 1.12, 1.06), gn);`)};{let p=Jv(t,Ht);this.world.add(p),this.lod.push({im:p,full:p.count,low:p.count-zl[t].n[6]-zl[t].n[7]})}let a=new re(new kr(Ht+1,64).rotateX(-Math.PI/2),new dn({color:16777215,transparent:!0,opacity:.045,depthWrite:!1}));if(a.position.y=.012,this.world.add(a),n.stars){let g=new Float32Array(2700);for(let y=0;y<900;y++){let T=Math.random()*ze,E=Math.acos(Math.random()*.9+.1),_=170;g[y*3]=Math.sin(E)*Math.cos(T)*_,g[y*3+1]=Math.cos(E)*_,g[y*3+2]=Math.sin(E)*Math.sin(T)*_}let v=new Xe;v.setAttribute("position",new Ce(g,3));let S=new Ur(v,new Ws({color:13623551,size:1.6,sizeAttenuation:!1,fog:!1,toneMapped:!1}));S.frustumCulled=!1,S.userData.own=!0,this.world.add(S)}let o=e,l={};for(let p of o.obst)(l[f=p.type]||(l[f]=[])).push(p);this.obstMeshes=[],this.occ=[];let c=3,h=p=>Math.min(c-1,Math.max(0,Math.floor((p.x+Ht)/(2*Ht)*c)))*c+Math.min(c-1,Math.max(0,Math.floor((p.z+Ht)/(2*Ht)*c)));for(let[p,g]of Object.entries(l))for(let v of Object.values(g.reduce((S,y)=>{var T;return(S[T=h(y)]||(S[T]=[])).push(y),S},{}))){let S=Fh(this.geos,p==="ruin"||p==="tank"||p==="pipe"?p==="tank"?"container":"junk":p,t);if(p==="ruin"?S=z(this,Gt,fp).call(this,t):p==="tank"?S=z(this,Gt,pp).call(this):p==="pipe"&&(S=z(this,Gt,mp).call(this)),!S)continue;S.computeBoundingBox();let y=S.boundingBox,T=Math.max(y.max.x-y.min.x,y.max.z-y.min.z)/2,E=new we(S,this.mat,v.length);v.forEach((_,w)=>{let D=_.r/T*1.05,I=Math.max(.1,y.max.y-y.min.y),N=p==="reactor"||p==="icerock"||p==="icegen"||p==="crate",U=N?Math.min(D*_.s,(p==="reactor"?4.6:p==="icerock"?3.4:2.6)/I):Math.min(D*_.s,(p==="ruin"?5:2.4)/I),W=N?U:D;Jt.set(_.x,-y.min.y*U,_.z),ce.setFromEuler(In.set(0,_.rot,0)),ie.set(W,U,W),oe.compose(Jt,ce,ie),E.setMatrixAt(w,oe),z(this,Gt,Ol).call(this,E,w,_.x,_.z,_.r)}),this.world.add(E)}let u=Fh(this.geos,"wall",t);if(u&&u.attributes.position.count>200){u.computeBoundingBox();let p=u.boundingBox,g=p.max.y-p.min.y,v=p.max.z-p.min.z,S=1.55,y=Ht+2.8,T=Math.round(ze*y/(v*S*.97)),E=T+Math.round(T/2),_=8,w=Array.from({length:_},()=>new we(u,this.mat,E)),D=new Array(_).fill(0),I=R=>Math.floor((R%ze+ze)%ze/ze*_)%_,N=0,U=R=>(Math.sin(R*91.7)+1)/2;for(let R=0;R<T;R++,N++){let C=R/T*ze;Jt.set(Math.cos(C)*y,-p.min.y*S,Math.sin(C)*y),ce.setFromEuler(In.set(0,-C+(U(R)-.5)*.06,0)),ie.set(S,S*(.92+U(R+7)*.16),S),oe.compose(Jt,ce,ie);let O=I(C),B=w[O],nt=D[O]++;B.setMatrixAt(nt,oe),z(this,Gt,Ol).call(this,B,nt,Jt.x,Jt.z,3);let q=.7+U(R+3)*.5;B.setColorAt(nt,rn.setRGB(q,q*(.9+U(R)*.2),q*(.85+U(R+5)*.3)))}let W=D.slice();for(let R=0;R<E-T;R++,N++){let C=(R+.5)/(E-T)*ze;Jt.set(Math.cos(C)*(y-.3),g*S*.93,Math.sin(C)*(y-.3)),ce.setFromEuler(In.set(0,-C+(U(R+11)-.5)*.1,0)),ie.set(S,S*.92,S),oe.compose(Jt,ce,ie);let O=I(C),B=w[O],nt=D[O]++;B.setMatrixAt(nt,oe),z(this,Gt,Ol).call(this,B,nt,Jt.x,Jt.z,3);let q=.65+U(R+13)*.5;B.setColorAt(nt,rn.setRGB(q*1.05,q,q*.9))}w.forEach((R,C)=>{R.count=D[C],this.world.add(R)}),this.lod.push(...w.map((R,C)=>({im:R,full:D[C],low:W[C]})))}else{let p=pn([Zt("box",[5.2,2.4,1.8],t==="desert"?[.5,.33,.2]:t==="burned"?[.16,.14,.14]:[.3,.26,.22],[0,1.2,0]),Zt("box",[4.6,1.2,1.5],[.2,.2,.2],[.3,3,0],[0,.1,0]),Zt("box",[1.2,.5,1.9],[.9,.6,.1],[-1.6,2.1,0],[0,0,0],[1,1,1],0)]),g=38,v=new we(p,this.mat,g),S=new Float32Array(g).map((y,T)=>(Math.sin(T*91.7)+1)/2);for(let y=0;y<g;y++){let T=y/g*ze;Jt.set(Math.cos(T)*(Ht+1.8),0,Math.sin(T)*(Ht+1.8)),ce.setFromEuler(In.set(0,-T+Math.PI/2,0));let E=.9+S[y]*.5;ie.set(1.18,E,1),oe.compose(Jt,ce,ie),v.setMatrixAt(y,oe)}v.frustumCulled=!1,this.world.add(v)}if(z(this,Gt,jh).call(this),this.ventMesh=null,(m=o.vents)!=null&&m.length){let p=Zt("cyl",[1,1.25,.2,14],[.12,.08,.07]),g=new we(p,this.mat,o.vents.length);o.vents.forEach((v,S)=>{Jt.set(v.x,.08,v.z),ce.identity(),ie.set(1,1,1),oe.compose(Jt,ce,ie),g.setMatrixAt(S,oe)}),g.frustumCulled=!1,this.world.add(g)}if(this.barrelMesh=null,(x=o.barrels)!=null&&x.length){let p=pn([Zt("cyl",[.55,.55,1.3,12],[.7,.12,.08],[0,.65,0]),Zt("cyl",[.58,.58,.12,12],[.9,.8,.1],[0,.9,0],[0,0,0],[1,1,1],.4),Zt("cyl",[.58,.58,.12,12],[.9,.8,.1],[0,.4,0])]);this.barrelMesh=new we(p,this.mat,o.barrels.length),this.barrelMesh.frustumCulled=!1,this.world.add(this.barrelMesh)}}startRun(t){this.sim=t,this.setMap(t.map.id,t),this.rig.reset(),this.timed.length=0,this.spawnMarks.length=0,this.shake=0,this.camT.set(t.p.x,0,t.p.z),this.camPos.set(t.p.x,0,t.p.z);for(let e in this.bossMesh)this.bossMesh[e].visible=!1;this.menuMode=!1,this.glow.n=this.smoke.n=this.debris.n=0,this.snapCam=!0}handle(t,e){var l,c,h,u,d,f,m,x,p,g,v,S,y,T,E,_,w,D,I,N,U,W;let n=this.sim,i=this.glow,r=this.smoke,a=this.debris,o=this.audio;for(let R=0;R<t.length;R++){let C=t[R];switch(C.k){case"attach":if(this.rig.setPart(C.id,C.slot,C.n,C.rar,!C.free),!C.free){let O=n.p;for(let B=0;B<14;B++){let nt=Math.random()*ze;a.add(O.x,1.6,O.z,Math.cos(nt)*5,4+Math.random()*3,Math.sin(nt)*5,.9,1.2,1,.8,.3)}for(let B=0;B<5;B++)i.add(O.x,1.7,O.z,0,0,0,.35,2.2,5.5+B,1,.8,.4,.7);this.shake=Math.max(this.shake,C.evolve?.6:.3),o.play(C.evolve?"evolve":"attach"),this.flash(16764006,C.evolve?9:5,O.x,O.z)}break;case"shot":z(this,Gt,gp).call(this,C);break;case"beam":{let B=n.muzzle(C.slot);this.beams.fire(C.x,1.3,C.z,C.a,C.len,3528447);for(let nt=0;nt<6;nt++)i.add(C.x+Math.sin(C.a)*(1+nt*2.5),1.3,C.z+Math.cos(C.a)*(1+nt*2.5),0,.5,0,.18,.7,1.5,.3,.9,1,.8);i.add(C.x,1.3,C.z,0,0,0,.12,1.8,.4,.6,1,1,1),this.rig.kick(C.slot),o.play("laser");break}case"hit":z(this,Gt,xp).call(this,C);break;case"block":for(let O=0;O<4;O++)i.add(C.x,1.6,C.z,(Math.random()-.5)*8,Math.random()*3,(Math.random()-.5)*8,.18,.5,.1,.9,.9,1,1);o.play("clank");break;case"die":z(this,Gt,vp).call(this,C);break;case"boom":z(this,Gt,yp).call(this,C);break;case"bimpact":for(let O=0;O<3;O++)i.add(C.x,.8,C.z,(Math.random()-.5)*6,Math.random()*3,(Math.random()-.5)*6,.16,.45,.05,(C.e,1),C.e?.4:.9,C.e?.2:.4,1);break;case"spawn":i.add(C.x,1.2,C.z,0,2,0,.45,2.5,.2,1,.3,.2,.9);for(let O=0;O<6;O++){let B=Math.random()*ze;i.add(C.x,.3,C.z,Math.cos(B)*4,3+Math.random()*2,Math.sin(B)*4,.35,.5,.1,1,.5,.3,1,2,-6)}break;case"warn":this.spawnMarks.push({x:C.x,z:C.z,t:C.t,max:C.t,boss:C.kind});break;case"hurt":this.shake=Math.max(this.shake,.38),(c=(l=this.hooks).hurt)==null||c.call(l,C),o.play("hurt");break;case"shieldHit":this.rig.shieldHit(),o.play("shield");break;case"shieldBreak":this.shake=Math.max(this.shake,.5),this.flash(6741503,8,n.p.x,n.p.z);for(let O=0;O<16;O++){let B=Math.random()*ze;i.add(n.p.x,1.4,n.p.z,Math.cos(B)*9,1,Math.sin(B)*9,.4,.8,.1,.4,.9,1,1)}o.play("shieldBreak");break;case"pickup":C.t==="xp"?o.play("pickup"):C.t==="heal"?(o.play("heal"),i.add(n.p.x,1.5,n.p.z,0,3,0,.5,1.5,3,.3,1,.5,.8)):o.play("crate");break;case"level":o.play("level"),(u=(h=this.hooks).level)==null||u.call(h,C);for(let O=0;O<3;O++)i.add(n.p.x,.2,n.p.z,0,0,0,.5,1,9+O*2,1,.9,.4,.6);break;case"offers":(f=(d=this.hooks).offers)==null||f.call(d,C);break;case"picked":(x=(m=this.hooks).picked)==null||x.call(m,C);break;case"dash":o.play("dash");for(let O=0;O<8;O++)i.add(C.x-C.dx*O*.5,.4,C.z-C.dz*O*.5,0,0,0,.3,1.4,.2,.6,.9,1,.5);break;case"bossWarn":(g=(p=this.hooks).bossWarn)==null||g.call(p,C),o.play("bossWarn");break;case"bossSpawn":(S=(v=this.hooks).bossSpawn)==null||S.call(v,C),this.shake=Math.max(this.shake,.7),o.play("bossRoar");break;case"bossTell":o.play("tell"),this.eTell.set(C.id,.5);break;case"chargeWarn":o.play("tell");break;case"dashSfx":o.play("charge");break;case"crash":this.shake=Math.max(this.shake,.3);for(let O=0;O<10;O++)a.add(C.x,1,C.z,(Math.random()-.5)*8,3+Math.random()*4,(Math.random()-.5)*8,.8,1,.5,.45,.4);o.play("crash");break;case"aim":o.play("aim");break;case"hzWarn":(T=(y=this.hooks).tip)==null||T.call(y,"danger");break;case"heat":(_=(E=this.hooks).tip)==null||_.call(E,"heat"),o.play("heat");break;case"fuse":(D=(w=this.hooks).tip)==null||D.call(w,"bomber"),o.play("tell"),i.add(C.x,1.9,C.z,0,1,0,.5,1.2,.2,1,.5,.1,1);break;case"lob":o.play("eshot");for(let O=0;O<4;O++)i.add(C.x+Math.sin(C.a)*1.2,2.2+O*.3,C.z+Math.cos(C.a)*1.2,0,4+O,0,.35,.9,.2,.5,1,.3,.9);break;case"eshot":o.play("eshot"),i.add(C.x+Math.sin(C.a)*1.4,1.5,C.z+Math.cos(C.a)*1.4,0,0,0,.14,1.5,.4,1,.5,.2,1);break;case"ring":this.shake=Math.max(this.shake,.4),this.timed.push({kind:1,x:C.x,z:C.z,t:0,dur:2.8,speed:10,col:[1,.35,.2]}),o.play("boom");break;case"dead":(N=(I=this.hooks).dead)==null||N.call(I,C),o.play("dead"),this.shake=.9;break;case"won":(W=(U=this.hooks).won)==null||W.call(U,C);break;case"revive":this.flash(8978431,12,n.p.x,n.p.z),this.shake=.8,this.timed.push({kind:1,x:n.p.x,z:n.p.z,t:0,dur:.6,speed:22,col:[.5,1,1]}),o.play("level");break}}t.length=0}flash(t,e,n,i){this.flashLight.color.setHex(t),this.flashLight.position.set(n,4,i),this.flashI=Math.max(this.flashI,e)}update(t,e,n){var a;let i=this.sim;if(this.t+=e,ha.uTime.value=this.t,!i)return;let r=i.p;if(this.aq.sample(e),i.flameOn&&i.state==="run"){this.fireAcc+=e*60;let o=i.muzzle(i.flameSlot||"armL"),l=i.flameEvo;for(;this.fireAcc>=1;){this.fireAcc-=1;let c=i.flameDir+(Math.random()-.5)*(l?.5:.35),h=9+Math.random()*7;this.glow.add(o.x+Math.sin(c)*.8,1.3,o.z+Math.cos(c)*.8,Math.sin(c)*h,.4,Math.cos(c)*h,.28+Math.random()*.14,.5,l?2.2:1.7,l?.3:1,l?.6:.5,l?1:.1,.8,2.2),Math.random()<.3&&this.smoke.add(o.x+Math.sin(c)*3,1.4,o.z+Math.cos(c)*3,Math.sin(c)*3,1.4,Math.cos(c)*3,.7,.8,2.4,.1,.09,.08,.4,1)}Math.random()<.08&&this.audio.play("flame")}if(this.rig.update(t,{x:r.x,z:r.z,aim:r.aim,legYaw:r.legYaw,moving:r.moving,grow:r.grow,dashT:r.dashT,hurt:Math.max(0,r.hurtT*3)+(r.inv>0&&i.state==="run"&&r.hurtT>0,0),shield:r.shield,shieldMax:r.shieldMax,t:this.t}),z(this,Gt,Sp).call(this,t),z(this,Gt,Tp).call(this),z(this,Gt,Ep).call(this),i.owned.jets&&r.moving>.3&&Math.random()<.6&&this.glow.add(r.x-Math.sin(r.legYaw)*.7+(Math.random()-.5)*.4,.5,r.z-Math.cos(r.legYaw)*.7,0,.5,0,.25,.6,.15,1,.55,.15,.8),i.trail&&r.dashT>0)for(let o=0;o<3;o++)this.glow.add(r.x+(Math.random()-.5),.5,r.z+(Math.random()-.5),0,1,0,.5,1,.3,1,.4,.1,.8);if(this.droneMesh.count=i.drones.length,i.drones.forEach((o,l)=>{var h;Jt.set(o.x,2.1+Math.sin(this.t*3+l)*.15,o.z),ce.setFromEuler(In.set(.15,this.t*2+l,0));let c=this.droneScale*(((h=i.owned.drone)==null?void 0:h.n)>=3?1.2:1);ie.set(c,c,c),oe.compose(Jt,ce,ie),this.droneMesh.setMatrixAt(l,oe)}),this.droneMesh.instanceMatrix.needsUpdate=!0,this.look&&(this.look.snow||this.mapId==="desert"||this.mapId==="scrapyard")&&this.tier.particles>.4&&Math.random()<(this.look.snow?.9:.25)){let o=this.camT.x,l=this.camT.z;this.look.snow?this.smoke.add(o+(Math.random()-.5)*34,9,l+(Math.random()-.3)*26,-1.5,-2.2,.4,3.6,.16,.16,.96,.98,1,.8,.1):this.smoke.add(o-14+Math.random()*6,.6+Math.random()*3,l+(Math.random()-.5)*24,6+Math.random()*3,.1,.5,2.6,.6,1.4,...this.mapId==="desert"?[.75,.6,.4]:[.55,.45,.32],.25,.2)}z(this,Gt,Mp).call(this,e,n),this.flashI=Math.max(0,this.flashI-e*55),this.flashLight.intensity=Math.min(this.flashI,9)*(this.tier.name==="low"?.6:1)*5*(((a=this.look)==null?void 0:a.flashK)??1),z(this,Gt,bp).call(this,e),this.glow.update(t,this.cam.quaternion),this.smoke.update(t,this.cam.quaternion),this.debris.update(t),this.beams.update(t);for(let o of this.nums);}render(){this.renderer.render(this.scene,this.cam)}menuUpdate(t,e){this.t+=t,ha.uTime.value=this.t;let n=e.p;this.rig.update(t,{x:0,z:0,aim:.5+Math.sin(this.t*.4)*.4,legYaw:.3,moving:0,grow:n.grow,dashT:0,hurt:0,shield:n.shield,shieldMax:n.shieldMax,t:this.t}),this.glow.update(t,this.cam.quaternion),this.smoke.update(t,this.cam.quaternion),this.debris.update(t);let i=.6+Math.sin(this.t*.25)*.35;this.cam.position.set(Math.sin(i)*12.8,4.1,Math.cos(i)*12.8+1),this.cam.lookAt(0,.62,0),this.dbgCam&&(this.cam.position.set(...this.dbgCam.pos),this.cam.lookAt(...this.dbgCam.look)),this.decals.begin(),this.decals.add(2,0,0,3,3,0,1,0,0,0),this.decals.end(),this.sun.position.set(-10,20,12),this.sun.target.position.set(0,0,0),this.droneMesh.count=e.drones.length,e.drones.forEach((r,a)=>{let o=this.t*1.2+a*2;Jt.set(Math.cos(o)*2.4,2.3,Math.sin(o)*2.4),ce.setFromEuler(In.set(.1,this.t+a,0)),ie.setScalar(this.droneScale),oe.compose(Jt,ce,ie),this.droneMesh.setMatrixAt(a,oe)}),this.droneMesh.instanceMatrix.needsUpdate=!0;for(let r in this.inst)this.inst[r].count=0;this.bul.count=0,this.ebul.count=0,this.rocketMesh.count=0,this.pkXp.count=0,this.pkBox.count=0,this.pkHeal.count=0;for(let r in this.bossMesh)this.bossMesh[r].visible=!1}};Gt=new WeakSet,jh=function(){var e;let t=((e=this.tier)==null?void 0:e.name)==="low";for(let n of this.lod||[])n.im.count=t?n.low:n.full},Qh=function({tier:t,tierIndex:e,renderScale:n}){var r,a;this.tier=t,this.tierIndex=e,this.renderScale=n;let i=Math.min(devicePixelRatio||1,t.maxPixelRatio)*n;if(this.renderer.setPixelRatio(i),this.renderer.setSize(innerWidth,innerHeight,!1),this.scene.environment=t.name==="low"?null:this.envTex,this.glow.scale=t.particles,this.smoke.scale=t.particles,this.debris.scale=t.particles,this.mat)for(let o of[this.mat,this.rigMat,this.matEnemy,...Object.values(this.bossMesh||{}).map(l=>l.material)])o.needsUpdate=!0;(a=(r=this.hooks).quality)==null||a.call(r,t.name,n),z(this,Gt,jh).call(this)},Ol=function(t,e,n,i,r){this.occ.push({im:t,i:e,x:n,z:i,r,p:Jt.clone(),q:ce.clone(),s:ie.clone(),f:1})},dp=function(t,e,n){let i=Math.min(1,t*10),r=null;for(let a of this.occ){let o=a.z-n,l=a.x-e,c=o>-1&&o<26&&Math.abs(l)<a.r+3.2+o*.14||l*l+o*o<(a.r+4.2)*(a.r+4.2),h=o>10&&o<44,u=c||h?.2:1;Math.abs(u-a.f)<.004||(a.f+=(u-a.f)*i,Jt.copy(a.p),Jt.y*=a.f,ie.copy(a.s),ie.y*=a.f,oe.compose(Jt,a.q,ie),a.im.setMatrixAt(a.i,oe),a.im.instanceMatrix.needsUpdate=!0,r=a)}},fp=function(t){let e=t==="burned"?[.09,.08,.08]:t==="ice"?[.45,.55,.65]:t==="space"?[.14,.17,.22]:[.3,.25,.2];return pn([Zt("box",[4.2,3.4,.7],e,[0,1.7,0]),Zt("box",[.7,2.2,3.2],e.map(n=>n*.9),[-1.9,1.1,1.3]),Zt("box",[2,1.2,.6],e.map(n=>n*.8),[1.1,3.9,0],[0,0,.25]),Zt("box",[1.4,.8,1.4],[.15,.13,.12],[1.6,.4,1.2],[0,.4,0])])},pp=function(){return pn([Zt("cyl",[1.4,1.4,3.2,16],[.38,.3,.22],[0,1.7,0],[0,0,Math.PI/2],[1,1,1]),Zt("box",[.4,1.7,2.6],[.3,.3,.3],[-.9,.85,0]),Zt("box",[.4,1.7,2.6],[.3,.3,.3],[.9,.85,0])])},mp=function(){return pn([Zt("cyl",[.5,.5,4,10],[.4,.3,.25],[0,.55,0],[0,0,Math.PI/2]),Zt("cyl",[.5,.5,4,10],[.4,.3,.25],[0,1.55,.2],[0,0,Math.PI/2]),Zt("box",[.3,1.5,.3],[.25,.25,.25],[-1.6,.75,.1])])},gp=function(t){let e=this.glow,n=this.audio,i=t.w==="rocket"?2.2:1.35;t.w==="mg"?(e.add(t.x+Math.sin(t.a)*.6,i,t.z+Math.cos(t.a)*.6,0,0,0,.07,.9,.3,1,.8,.35,1),this.rig.kick(t.slot),n.play(t.evo?"minigun":"mg"),Math.random()<.3&&this.debris.add(t.x,1.3,t.z,Math.cos(t.a)*3,3,-Math.sin(t.a)*3,.5,.35,1,.8,.3)):t.w==="plasma"?(e.add(t.x,i,t.z,0,0,0,.2,2.4,.6,.8,.3,1,1),this.rig.kick(t.slot),this.flash(11163135,5,t.x,t.z),n.play("plasma"),this.shake=Math.max(this.shake,.18)):t.w==="rocket"&&(e.add(t.x,i,t.z,0,1,0,.2,1.4,.3,1,.6,.3,1),this.rig.kick(t.slot),n.play("rocket"))},xp=function(t){let e=this.glow,n=t.boss?3.5:1.3;if(!(t.kind==="flame"||t.kind==="burn")){for(let i=0;i<2;i++)e.add(t.x+(Math.random()-.5)*.6,n,t.z+(Math.random()-.5)*.6,(Math.random()-.5)*9,Math.random()*4,(Math.random()-.5)*9,.2,.34,.05,1,.85,.45,1,3,-9);Math.random()<.3&&this.debris.add(t.x,n,t.z,(Math.random()-.5)*7,2+Math.random()*3,(Math.random()-.5)*7,.7,.6,.5,.45,.45),this.audio.play("hit"),(t.big||t.dmg>12&&Math.random()<.5||t.boss&&Math.random()<.15)&&z(this,Gt,_p).call(this,t.x,n+1.2,t.z,t.dmg,t.big)}},_p=function(t,e,n,i,r){let a=this.nums[this.numI++%this.nums.length];this.tmpV.set(t,e,n).project(this.cam),!(this.tmpV.z>1)&&(a.d.textContent=Math.round(i),a.d.style.left=(this.tmpV.x*.5+.5)*innerWidth+"px",a.d.style.top=(-this.tmpV.y*.5+.5)*innerHeight+"px",a.d.classList.remove("big","go"),a.d.offsetWidth,r&&a.d.classList.add("big"),a.d.classList.add("go"))},vp=function(t){var c,h;let e=this.glow,n=this.smoke,i=this.debris,r=t.fly?1.6:1.1,a=t.boss?3:t.r,o=t.kind==="bomber"?[.6,.15,.1]:t.kind==="spitter"?[.25,.3,.18]:t.kind==="drone"?[.7,.1,.08]:t.kind==="turret"?[.5,.28,.15]:[.35,.34,.34];e.add(t.x,r,t.z,0,0,0,.35,a*2.6,a*4.2,1,.7,.3,1),e.add(t.x,r,t.z,0,0,0,.18,a*1.6,a*.6,1,1,.8,1);for(let u=0;u<(t.boss?14:3);u++)n.add(t.x+(Math.random()-.5)*a,r+Math.random(),t.z+(Math.random()-.5)*a,(Math.random()-.5)*3,2+Math.random()*2,(Math.random()-.5)*3,.7+Math.random()*.5,a*1.2,a*2.8,.12,.1,.09,.7,1.5);let l=t.boss?40:Math.round(4+t.r*3);for(let u=0;u<l;u++){let d=Math.random()*ze,f=3+Math.random()*8;i.add(t.x,r,t.z,Math.cos(d)*f,4+Math.random()*6,Math.sin(d)*f,1.2+Math.random()*.6,.7+Math.random()*(t.boss?3:1.2),o[0]*(.7+Math.random()*.6),o[1]*(.7+Math.random()*.6),o[2]*(.7+Math.random()*.6))}for(let u=0;u<6;u++){let d=Math.random()*ze;e.add(t.x,r,t.z,Math.cos(d)*7,2+Math.random()*5,Math.sin(d)*7,.4,.4,.05,1,.8,.4,1,1,-12)}this.shake=Math.max(this.shake,t.boss?1:t.kind==="elite"?.32:.08),this.flash(16755285,t.boss?14:3,t.x,t.z),this.audio.play(t.boss?"bossDie":t.kind==="drone"?"popSmall":"pop"),t.boss&&((h=(c=this.hooks).bossDie)==null||h.call(c,t))},yp=function(t){let e=this.glow,n=this.smoke,i=this.debris,r=t.r,a=t.haz,o=a==="icicle"?[.6,.9,1]:a==="blast"?[.9,.7,.4]:a==="fire"?[1,.5,.15]:a==="crane"?[.6,.8,1]:[1,.6,.25];e.add(t.x,1,t.z,0,0,0,.4,r*1.2,r*2.8,o[0],o[1],o[2],1),e.add(t.x,1,t.z,0,0,0,.22,r*.8,r*.3,1,1,.85,1);for(let l=0;l<5;l++)n.add(t.x+(Math.random()-.5)*r,.8,t.z+(Math.random()-.5)*r,(Math.random()-.5)*4,2+Math.random()*3,(Math.random()-.5)*4,.9,r*.7,r*1.8,.14,.12,.11,.65,1.2);for(let l=0;l<Math.min(16,4+r*3);l++){let c=Math.random()*ze,h=3+Math.random()*8;i.add(t.x,.5,t.z,Math.cos(c)*h,5+Math.random()*5,Math.sin(c)*h,1,.5+Math.random(),.5,.45,.4)}this.timed.push({kind:1,x:t.x,z:t.z,t:0,dur:.35,speed:r*3.2,col:o,start:r*.5}),this.shake=Math.max(this.shake,Math.min(.85,.12+r*.1)),this.flash(16755285,5+r*1.2,t.x,t.z),this.audio.play(t.big?"boomBig":"boom")},Mp=function(t,e){var m,x;let n=this.sim,i=n.p,r=this.snapCam?1:Math.min(1,t*5);this.snapCam=!1;let a=.25;this.camT.x+=(i.x+i.vx*a-this.camT.x)*r,this.camT.z+=(i.z+i.vz*a-this.camT.z)*r;let o=n.boss,l=this.camT.x,c=this.camT.z;if(o){let p=this.bossW??.25,g=Math.min(.7,Math.max(.25,.25+((this.bossTopY??0)-.3)*1.4));this.bossW=p+(g-p)*Math.min(1,t*4),l=this.camT.x*(1-this.bossW)+o.x*this.bossW,c=this.camT.z*(1-this.bossW)+o.z*this.bossW}else this.bossW=.25;let h=innerWidth/Math.max(1,innerHeight),u=h<1.25?Math.min(1.55,Math.pow(1.25/h,.55)):1,d=(n.boss?25:19)*this.camDist*u;this.scene.fog&&(this.scene.fog.near=38*u,this.scene.fog.far=92*u),this.shake=Math.max(0,this.shake-t*2.4);let f=this.shake*this.shake*(((x=(m=this.hooks).shakeOn)==null?void 0:x.call(m))===!1?0:1)*.7;if(this.cam.position.set(l+(Math.random()-.5)*f,d*.84+(Math.random()-.5)*f,c+d*.6+(Math.random()-.5)*f),this.cam.lookAt(l,.4,c+.6),this.dbgCam&&(this.cam.position.set(...this.dbgCam.pos),this.cam.lookAt(...this.dbgCam.look),this.dbgCam.fov&&this.cam.fov!==this.dbgCam.fov&&(this.cam.fov=this.dbgCam.fov,this.cam.updateProjectionMatrix())),o){this.cam.updateMatrixWorld();let p=this._v3??(this._v3=new k);p.set(o.x,{titan:8.8,spider:5.4,walker:8.2,cryo:8.8,warden:9.8}[o.k]??8,o.z).project(this.cam),this.bossTopY=p.y}z(this,Gt,dp).call(this,t,l,c),this.sun.position.set(l-18,30,c+12),this.sun.target.position.set(l,0,c)},bp=function(t){let e=this.decals,n=this.sim;e.begin(),e.mesh.material.uniforms.uTime.value=this.t,e.add(2,n.p.x,n.p.z,2.3*n.p.grow,2.3*n.p.grow,0,1,0,0,0);for(let i of n.E)if(i.a){let r=i.boss?i.r*2.7:i.r*(i.k==="drone"?2.2:2.5),a=i.k==="drone"?.7:1;e.add(2,i.x,i.z,r*a,r*a,0,1,0,0,0)}for(let i of n.drones)e.add(2,i.x,i.z,.9,.9,0,1,0,0,0);for(let i of n.HZ)if(i.a&&i.owner!==1)if(i.fired){if(i.linger>0){let r=i.kind==="fire"?[1,.5,.1]:i.kind==="icicle"?[.45,.85,1]:[1,.4,.1];e.add(0,i.x,i.z,i.r*2,i.r*2,0,i.kind==="icicle"?.5:.9,r[0],r[1],r[2]),Math.random()<.5&&this.glow.add(i.x+(Math.random()-.5)*i.r*1.4,.3,i.z+(Math.random()-.5)*i.r*1.4,0,3,0,.5,.9,1.6,1,.45,.1,.7)}}else{let r=1-Math.max(0,i.t)/i.warn,a=i.kind==="crane"?[.5,.75,1]:i.kind==="fire"?[1,.55,.15]:i.kind==="icicle"?[.4,.8,1]:i.kind==="shell"?[1,.55,.12]:[1,.22,.15];e.add(0,i.x,i.z,i.r*2,i.r*2,0,r,a[0],a[1],a[2])}for(let i of n.HZ)i.a&&i.owner===1&&i.fired&&Math.random()<.4&&this.glow.add(i.x,.3,i.z,(Math.random()-.5)*2,2,(Math.random()-.5)*2,.45,.8,1.2,1,.4,.1,.7);if(n.rings)for(let i of n.rings)e.add(1,i.x,i.z,i.r*2,i.r*2,0,Math.min(1,i.r/38),1,.3,.2);for(let i of n.E)if(i.a&&(i.k==="charger"&&i.st===1||i.boss&&i.k==="titan"&&i.st===2)){let r=i.boss?14:17,a=i.k==="charger"?1-i.stT/.95:1-i.stT/1;e.add(3,i.x+Math.sin(i.tx)*r/2,i.z+Math.cos(i.tx)*r/2,i.boss?3:1.7,r,i.tx,a,1,.25,.1)}for(let i of n.E)if(i.a&&i.boss&&i.k==="warden"&&i.beam){let a=i.beam===1?1.8:2.4,o=i.beam===1?Math.min(1,(2.5-i.stT)/.9):1;e.add(3,i.x+Math.sin(i.ba)*38/2,i.z+Math.cos(i.ba)*38/2,a,38,i.ba,o,1,i.beam===1?.25:.6,.1)}for(let i=this.spawnMarks.length-1;i>=0;i--){let r=this.spawnMarks[i];if(r.t-=t,r.t<=0){this.spawnMarks.splice(i,1);continue}e.add(1,r.x,r.z,2.4+r.t/r.max*1.2,2.4+r.t/r.max*1.2,0,1-r.t/r.max,1,.3,.25)}for(let i=this.timed.length-1;i>=0;i--){let r=this.timed[i];if(r.t+=t,r.t>=r.dur){this.timed.splice(i,1);continue}let a=(r.start||1)+r.t*r.speed;e.add(1,r.x,r.z,a*2,a*2,0,r.t/r.dur,r.col[0],r.col[1],r.col[2])}e.end()},Sp=function(t){let e=this.sim,n={drone:0,turret:0,charger:0,elite:0,bomber:0,spitter:0},i=this.t,r=null;for(let a of e.E){if(!a.a)continue;if(a.boss){r=a.k,z(this,Gt,wp).call(this,a,t);continue}let o=this.inst[a.k],l=n[a.k]++;if(l>=Kh[a.k])continue;let c=this.eScale[a.k],h=a.spawnT>0?Math.max(.05,1-a.spawnT/.45):1,u=this.yOff[a.k]*h,d=0,f=0,m=a.face+(a.k==="turret",0);if(a.k==="drone")u=1.5+Math.sin(i*4+a.ph)*.18+(a.spawnT>0?(1-h)*-1:0),d=.25,f=Math.sin(i*3+a.ph)*.12,m=a.face;else if(a.k==="charger"){let y=a.st===1;u+=Math.abs(Math.sin(i*7+a.ph))*.08*(a.st===0?1:.2),d=a.st===2?.2:y?-.18:0,y&&(u-=.1)}else a.k==="bomber"?(u+=Math.abs(Math.sin(i*11+a.ph))*.16*(a.st===0?1:.1),f=Math.sin(i*11+a.ph)*.1*(a.st===0?1:0),d=a.st===0?.12:0):a.k==="turret"?(u+=Math.abs(Math.sin(i*5+a.ph))*.07,f=Math.sin(i*5+a.ph)*.035):(u+=Math.abs(Math.sin(i*4+a.ph))*.06,f=Math.sin(i*4+a.ph)*.03,a.st===1&&(d=-.18+(1-a.stT/.85)*.5));let x=1+(a.hitT>0?.06:0)+(a.st===1&&a.k!=="charger"?a.k==="bomber"?.12*(1-a.stT/.7):.04:0);Jt.set(a.x,u,a.z),ce.setFromEuler(In.set(d,m,f,"YXZ"));let p=c*h*x;ie.set(p,p,p),oe.compose(Jt,ce,ie),o.setMatrixAt(l,oe);let g=a.flash,v=a.st===1&&a.k!=="drone"?.55+.45*Math.sin(i*28):0,S=a.burnT>0?.25:0;rn.setRGB(1+g*2.4+(v>0?v*.9:0)+S,1+g*2.4-(v>0?v*.35:0)+S*.4,1+g*2.4-(v>0?v*.5:0)),o.setColorAt(l,rn),a.burnT>0&&Math.random()<.25&&this.glow.add(a.x+(Math.random()-.5),1.4,a.z+(Math.random()-.5),0,2.5,0,.4,.6,.2,1,.45,.1,.8)}for(let a in this.inst){let o=this.inst[a];o.count=Math.min(n[a],Kh[a]),o.instanceMatrix.needsUpdate=!0,o.instanceColor&&(o.instanceColor.needsUpdate=!0)}for(let a in this.bossMesh)a!==r&&(this.bossMesh[a].visible=!1)},wp=function(t,e){let n=this.bossMesh[t.k],i=this.t,r=n.userData.sc*(t.bi===3?1.12:1);n.visible=!0;let a=t.spawnT>0?Math.max(.1,1-t.spawnT/.8):1,o=t.st===0?1:.3,l=n.userData.y0*r/n.userData.sc,c=0,h=Math.sin(i*2.4)*.03*o,u=1,d=1;t.k==="titan"?(l+=Math.abs(Math.sin(i*2.2))*.18*o,h=Math.sin(i*2.2)*.045*o,t.st===1&&(c=-.25+(1-t.stT/1.1)*.6),(t.st===2||t.st===5)&&(c=.2)):t.k==="spider"?(l+=Math.abs(Math.sin(i*9))*.12*o+(t.leap||0)*6,d=1-(t.st===1&&t.stT>.5?.12:0),h=Math.sin(i*9)*.02):t.k==="cryo"?(l+=Math.abs(Math.sin(i*2))*.2*o,h=Math.sin(i*2)*.04*o,t.st===1?c=-.25+(1-t.stT/1.2)*.6:t.st===2&&(c=-.1)):t.k==="warden"?(l+=3+Math.sin(i*1.7)*.35,h=Math.sin(i*1.3)*.06,c=.12):(l+=Math.abs(Math.sin(i*1.9))*.22*o,h=Math.sin(i*1.9)*.035*o,t.st===2&&(c=-.05));let f=this.eTell.get(t.id)||0;f>0&&this.eTell.set(t.id,f-e);let m=Math.min(.07,Math.max(t.flash*.08,t.phase===2?.012+.01*Math.sin(i*6):0,f>0?.05:0,t.heat>0?Math.min(.05,t.heat*.04)*(.6+.4*Math.sin(i*9)):0));if(n.material.userData.flash.value=m,n.position.set(t.x,l*a,t.z),n.rotation.set(c,t.face,h,"YXZ"),n.scale.set(r*u*a,r*d*a,r*a),t.k==="warden"){for(let x of[-1,1])Math.random()<.5&&this.glow.add(t.x-Math.sin(t.face)*1.5+x*Math.cos(t.face)*1,2.8,t.z-Math.cos(t.face)*1.5-x*Math.sin(t.face)*1,0,-1,0,.3,.9,.2,.4,.7,1,.8);if(t.beam===2&&this.t-(this._bt||0)>.07){this._bt=this.t,this.beams.fire(t.x,2.4,t.z,t.ba,38,16726570),this.shake=Math.max(this.shake,.12);for(let x=0;x<4;x++)this.glow.add(t.x+Math.sin(t.ba)*(3+Math.random()*30),.5,t.z+Math.cos(t.ba)*(3+Math.random()*30),0,1,0,.25,.8,.3,1,.4,.2,.8)}}t.k!=="spider"&&t.k!=="warden"&&Math.random()<.12&&this.smoke.add(t.x+Math.sin(t.face+2.6)*2,7.8,t.z+Math.cos(t.face+2.6)*2,0,3,0,1.4,.8,3,.1,.1,.1,.5,1)},Tp=function(){let t=this.sim,e=0;for(let n of t.B){if(!n.a||e>=240)continue;let i=Math.hypot(n.vx,n.vz),r=n.k===1?.01:n.k===2?.5:1.1;Jt.set(n.x,n.k===2?2.1:1.3,n.z),ce.setFromEuler(In.set(0,Math.atan2(n.vx,n.vz),0));let a=n.k===1?.01:n.k===2?.8:1;ie.set(a,a,r),oe.compose(Jt,ce,ie),this.bul.setMatrixAt(e,oe),n.k===0?rn.setRGB(3,2.2,.6):n.k===2?rn.setRGB(.8,3,1.4):rn.setRGB(0,0,0),this.bul.setColorAt(e,rn),e++,n.k===1&&(this.glow.add(n.x,1.4,n.z,0,0,0,.14,2.3,1,.85,.3,1,.9),this.glow.add(n.x,1.4,n.z,0,0,0,.1,1.1,.5,1,.9,1,1))}this.bul.count=e,this.bul.instanceMatrix.needsUpdate=!0,this.bul.instanceColor.needsUpdate=!0,e=0;for(let n of t.EB){if(!n.a||e>=100)continue;let i=n.big?1.5:1;Jt.set(n.x,1.3,n.z),ce.identity(),ie.set(i,i,i),oe.compose(Jt,ce,ie),this.ebul.setMatrixAt(e,oe),rn.setRGB(3,.9+Math.sin(this.t*30+e)*.2,.2),this.ebul.setColorAt(e,rn),e++,this.glow.n<this.glow.cap-20&&Math.random()<.5&&this.glow.add(n.x,1.3,n.z,0,0,0,.18,n.big?2:1.3,.3,1,.35,.1,.6)}this.ebul.count=e,this.ebul.instanceMatrix.needsUpdate=!0,this.ebul.instanceColor.needsUpdate=!0,e=0;for(let n of t.R)!n.a||n.t<0||e>=40||(Jt.set(n.x,2,n.z),ce.setFromEuler(In.set(0,n.ang,0)),ie.set(1,1,1),oe.compose(Jt,ce,ie),this.rocketMesh.setMatrixAt(e++,oe),Math.random()<.7&&(this.glow.add(n.x-Math.sin(n.ang)*.5,2,n.z-Math.cos(n.ang)*.5,0,0,0,.22,.8,.2,1,.55,.2,.9),this.smoke.add(n.x-Math.sin(n.ang)*.8,2,n.z-Math.cos(n.ang)*.8,0,.6,0,.6,.4,1.3,.35,.33,.3,.45)));this.rocketMesh.count=e,this.rocketMesh.instanceMatrix.needsUpdate=!0},Ep=function(){let t=this.sim,e=this.t,n=0,i=0,r=0;for(let a of t.PK)if(a.a)if(a.k==="xp"){let o=.75+Math.min(1.2,a.v*.55);Jt.set(a.x,.55+Math.sin(e*5+a.x)*.12,a.z),ce.setFromEuler(In.set(e*2,e*3+a.x,0)),ie.set(o,o,o),oe.compose(Jt,ce,ie),this.pkXp.setMatrixAt(n,oe),rn.setRGB(.2+Math.sin(e*8+a.z)*.08,.85,1),this.pkXp.setColorAt(n++,rn)}else a.k==="crate"?(Jt.set(a.x,.55+Math.sin(e*3)*.12,a.z),ce.setFromEuler(In.set(0,e*1.2,0)),ie.set(1.25,1.25,1.25),oe.compose(Jt,ce,ie),this.pkBox.setMatrixAt(i++,oe),Math.random()<.5&&this.glow.add(a.x,1+Math.random()*2,a.z,0,2,0,.5,1.2,.3,1,.65,.2,.7)):(Jt.set(a.x,.7+Math.sin(e*4)*.12,a.z),ce.setFromEuler(In.set(0,e*1.5,0)),ie.set(1.2,1.2,1.2),oe.compose(Jt,ce,ie),this.pkHeal.setMatrixAt(r++,oe));if(this.pkXp.count=n,this.pkXp.instanceMatrix.needsUpdate=!0,this.pkXp.instanceColor&&(this.pkXp.instanceColor.needsUpdate=!0),this.pkBox.count=i,this.pkBox.instanceMatrix.needsUpdate=!0,this.pkHeal.count=r,this.pkHeal.instanceMatrix.needsUpdate=!0,this.barrelMesh){let a=0;for(let o of t.barrels)o.a&&(Jt.set(o.x,0,o.z),ce.identity(),ie.set(1,1,1),oe.compose(Jt,ce,ie),this.barrelMesh.setMatrixAt(a++,oe));this.barrelMesh.count=a,this.barrelMesh.instanceMatrix.needsUpdate=!0}};var jv=160;var Xt,Ap,Bl,pe,Rp,tu,Gl=class Gl{constructor(){He(this,Xt);this.ctx=null,this.reasons=new Set,this.sfxVol=1,this.musicVol=.5,this.last={},this.musicOn=!1,this.intensity=0}unlock(){if(!this.ctx)try{let t=window.AudioContext||window.webkitAudioContext;this.ctx=new t,this.master=this.ctx.createGain(),this.sfx=this.ctx.createGain(),this.mus=this.ctx.createGain();let e=this.ctx.createDynamicsCompressor();e.threshold.value=-16,e.ratio.value=8,e.attack.value=.004,e.release.value=.2,this.sfx.connect(e),this.mus.connect(e),e.connect(this.master),this.master.connect(this.ctx.destination),this.noise=z(this,Xt,Ap).call(this),z(this,Xt,Bl).call(this)}catch{this.ctx=null;return}this.ctx.state==="suspended"&&this.ctx.resume()}mute(t,e){e?this.reasons.add(t):this.reasons.delete(t),z(this,Xt,Bl).call(this)}setVolumes(t,e){this.sfxVol=t,this.musicVol=e,z(this,Xt,Bl).call(this)}tone(t,e,n,i="sine",r=.2,a=0,o=this.sfx){let l=this.ctx,c=l.currentTime+a,h=l.createOscillator(),u=l.createGain();h.type=i,h.frequency.setValueAtTime(t,c),e!==t&&h.frequency.exponentialRampToValueAtTime(Math.max(20,e),c+n),u.gain.setValueAtTime(1e-4,c),u.gain.exponentialRampToValueAtTime(r,c+.006),u.gain.exponentialRampToValueAtTime(1e-4,c+n),h.connect(u),u.connect(o),h.start(c),h.stop(c+n+.02)}nz(t,e,n=.2,i=1,r="lowpass",a=0,o){let l=this.ctx,c=l.currentTime+a,h=l.createBufferSource(),u=l.createBiquadFilter(),d=l.createGain();h.buffer=this.noise,h.playbackRate.value=.8+Math.random()*.4,u.type=r,u.frequency.setValueAtTime(e,c),u.frequency.exponentialRampToValueAtTime(Math.max(60,o??e*.25),c+t),u.Q.value=i,d.gain.setValueAtTime(n,c),d.gain.exponentialRampToValueAtTime(1e-4,c+t),h.connect(u),u.connect(d),d.connect(this.sfx),h.start(c,Math.random()*.5),h.stop(c+t+.02)}play(t,e){if(!this.ctx||!z(this,Xt,Rp).call(this,t))return;let n=Math.random();switch(t){case"mg":if(!z(this,Xt,pe).call(this,"mg",55))return;this.nz(.05,2600+n*800,.09,1.2,"bandpass"),this.tone(240+n*60,90,.05,"square",.045);break;case"minigun":if(!z(this,Xt,pe).call(this,"mini",45))return;this.nz(.05,2200,.11,1,"bandpass"),this.tone(170+n*40,70,.06,"sawtooth",.07);break;case"laser":if(!z(this,Xt,pe).call(this,"laser",110))return;this.tone(1700,260,.22,"sawtooth",.06),this.tone(900,200,.2,"square",.03),this.nz(.2,6e3,.04,1,"highpass");break;case"plasma":if(!z(this,Xt,pe).call(this,"plasma",150))return;this.tone(180,520,.25,"sawtooth",.07),this.tone(90,40,.35,"sine",.14),this.nz(.2,1500,.05);break;case"flame":if(!z(this,Xt,pe).call(this,"flame",140))return;this.nz(.18,900,.13,.6,"lowpass",0,400);break;case"rocket":if(!z(this,Xt,pe).call(this,"rocket",90))return;this.nz(.35,2e3,.08,.8,"bandpass",0,500),this.tone(300,120,.2,"sawtooth",.04);break;case"hit":if(!z(this,Xt,pe).call(this,"hit",55))return;this.nz(.05,1800+n*900,.06,2,"bandpass"),this.tone(900+n*400,300,.03,"square",.02);break;case"clank":if(!z(this,Xt,pe).call(this,"clank",60))return;this.tone(500+n*300,240,.09,"square",.05),this.nz(.06,5e3,.05,1,"highpass");break;case"pop":if(!z(this,Xt,pe).call(this,"pop",40))return;this.nz(.2,1500,.14,.8),this.tone(160,50,.16,"triangle",.14);break;case"popSmall":if(!z(this,Xt,pe).call(this,"pops",30))return;this.nz(.1,2400,.08,1),this.tone(300+n*200,90,.08,"triangle",.07);break;case"boom":if(!z(this,Xt,pe).call(this,"boom",70))return;this.nz(.5,1300,.2,.7),this.tone(110,35,.4,"sine",.22);break;case"boomBig":if(!z(this,Xt,pe).call(this,"boomb",100))return;this.nz(.9,1500,.3,.7),this.tone(90,28,.7,"sine",.34),this.tone(50,25,.6,"sine",.22,.05);break;case"bossDie":this.nz(1.5,1800,.5,.6),this.tone(80,20,1.2,"sine",.5),this.tone(200,40,1,"sawtooth",.12),[.15,.4,.7].forEach(i=>this.nz(.5,1400,.3,.7,"lowpass",i));break;case"hurt":if(!z(this,Xt,pe).call(this,"hurt",120))return;this.tone(160,60,.2,"sawtooth",.2),this.nz(.14,1200,.15,1);break;case"shield":if(!z(this,Xt,pe).call(this,"shield",80))return;this.tone(900,1300,.12,"sine",.07),this.tone(1400,900,.1,"triangle",.04,.03);break;case"shieldBreak":this.tone(1200,150,.4,"sawtooth",.13),this.nz(.3,5e3,.1,1,"highpass");break;case"pickup":if(!z(this,Xt,pe).call(this,"pick",30))return;this.tone(1e3+n*500,1700,.07,"triangle",.075);break;case"heal":this.tone(500,900,.18,"sine",.12),this.tone(750,1200,.2,"sine",.1,.08);break;case"crate":this.tone(400,800,.15,"square",.08),this.tone(800,1600,.2,"triangle",.1,.08);break;case"attach":this.nz(.12,3500,.2,1,"highpass"),this.tone(200,90,.18,"square",.14),this.tone(100,60,.2,"sine",.2,.05),this.tone(1400,900,.1,"square",.05,.12);break;case"evolve":this.nz(.5,2500,.2,1,"highpass"),[220,330,440,660,880].forEach((i,r)=>this.tone(i,i*1.01,.28,"sawtooth",.09,r*.08)),this.tone(60,30,.7,"sine",.4);break;case"level":if(!z(this,Xt,pe).call(this,"level",250))return;[523,659,784,1046].forEach((i,r)=>this.tone(i,i,.16,"triangle",.12,r*.07));break;case"dash":if(!z(this,Xt,pe).call(this,"dash",100))return;this.nz(.25,1500,.12,.8,"bandpass",0,5e3),this.tone(300,800,.15,"sine",.06);break;case"bossWarn":if(!z(this,Xt,pe).call(this,"bw",600))return;[0,.35,.7].forEach(i=>{this.tone(440,440,.25,"square",.1,i),this.tone(330,330,.25,"square",.1,i+.12)});break;case"bossRoar":this.tone(90,45,1.1,"sawtooth",.22),this.tone(135,60,1,"square",.1,.05),this.nz(.9,900,.22);break;case"tell":if(!z(this,Xt,pe).call(this,"tell",250))return;this.tone(180,360,.3,"sawtooth",.11);break;case"charge":if(!z(this,Xt,pe).call(this,"charge",120))return;this.tone(120,260,.4,"sawtooth",.1),this.nz(.4,800,.12,.7);break;case"crash":this.nz(.35,1e3,.25),this.tone(100,40,.3,"square",.2);break;case"aim":if(!z(this,Xt,pe).call(this,"aim",150))return;this.tone(700,1100,.2,"sine",.05);break;case"eshot":if(!z(this,Xt,pe).call(this,"eshot",70))return;this.tone(500,160,.14,"square",.06),this.nz(.08,2e3,.05,1,"bandpass");break;case"dead":this.tone(300,40,.9,"sawtooth",.2),this.nz(.8,1200,.3),[392,330,262,196].forEach((i,r)=>this.tone(i,i*.95,.35,"sawtooth",.08,.25+r*.2));break;case"click":if(!z(this,Xt,pe).call(this,"click",40))return;this.tone(700,900,.06,"triangle",.1);break;case"card":if(!z(this,Xt,pe).call(this,"card",60))return;this.tone(600,900,.08,"triangle",.08);break;case"buy":this.tone(660,990,.12,"triangle",.14),this.tone(990,1320,.16,"triangle",.14,.09);break;case"start":this.tone(200,500,.25,"square",.1),this.nz(.3,2e3,.1,1,"highpass"),this.tone(500,1e3,.2,"triangle",.1,.12);break;case"win":[523,659,784,1046,1318,1568].forEach((i,r)=>this.tone(i,i,.3,"triangle",.14,r*.11));break;case"heat":if(!z(this,Xt,pe).call(this,"heat",3e3))return;[0,.18,.36].forEach(i=>this.tone(880,620,.16,"square",.07,i));break;case"heart":if(!z(this,Xt,pe).call(this,"heart",750))return;this.tone(70,40,.12,"sine",.35),this.tone(60,35,.14,"sine",.28,.16);break;case"count":if(!z(this,Xt,pe).call(this,"count",30))return;this.tone(900+(e||0)*600,900+(e||0)*600,.035,"square",.04);break}}startMusic(t="scrapyard"){if(this.musicOn||!this.ctx)return;this.musicOn=!0;let e={scrapyard:[1,"sawtooth","square"],burned:[.89,"sawtooth","square"],desert:[1.06,"sawtooth","triangle"],ice:[1.19,"triangle","sine"],space:[.94,"square","sawtooth"]}[t]||[1,"sawtooth","square"],n=e[0];this.step=0,this.nextT=this.ctx.currentTime+.1;let i=[55,55,82.4,55,73.4,55,98,82.4],r=[220,0,261.6,0,329.6,0,261.6,392,220,0,246.9,0,293.7,0,246.9,349.2];this.timer=setInterval(()=>{if(!this.ctx||this.reasons.size){this.ctx&&(this.nextT=Math.max(this.nextT,this.ctx.currentTime));return}for(;this.nextT<this.ctx.currentTime+.25;){let a=this.step,o=this.nextT-this.ctx.currentTime,l=this.intensity,c=(a>>4)%4;a%8===0&&this.tone(65,35,.2,"sine",.32,o,this.mus),l>.2&&a%8===4&&(z(this,Xt,tu).call(this,.12,1800,.08,o),this.tone(180,100,.1,"triangle",.1,o,this.mus)),a%2===0&&this.tone(i[(a>>1)%8]*n*(c===3?1.122:1),i[(a>>1)%8]*n*(c===3?1.122:1),.18,e[1],.07+l*.04,o,this.mus),l>.1&&a%2===1&&z(this,Xt,tu).call(this,.04,6e3,.03+l*.02,o);let h=r[a%16];h&&l>.4&&this.tone(h*n,h*n,.1,e[2],.02+l*.015,o,this.mus),l>.7&&a%16===0&&this.tone(110,110,.5,"sawtooth",.05,o,this.mus),this.step++,this.nextT+=.15-l*.012}},60)}stopMusic(){clearInterval(this.timer),this.musicOn=!1}};Xt=new WeakSet,Ap=function(){let t=this.ctx,e=t.createBuffer(1,t.sampleRate*1.2,t.sampleRate),n=e.getChannelData(0);for(let i=0;i<n.length;i++)n[i]=Math.random()*2-1;return e},Bl=function(){if(!this.ctx)return;let t=this.reasons.size>0;this.master.gain.setTargetAtTime(t?0:.9,this.ctx.currentTime,.03),this.sfx.gain.value=this.sfxVol*.9,this.mus.gain.value=this.musicVol*.45},pe=function(t,e){let n=performance.now();return n-(this.last[t]||0)<e?!1:(this.last[t]=n,!!this.ctx&&this.ctx.state==="running"&&this.reasons.size===0)},Rp=function(t){if(Gl.CRIT.has(t))return!0;let e=performance.now();return e-(this.bt||0)>100&&(this.bt=e,this.bn=0),++this.bn<=9},tu=function(t,e,n,i){let r=this.ctx,a=r.currentTime+i,o=r.createBufferSource(),l=r.createBiquadFilter(),c=r.createGain();o.buffer=this.noise,l.type="highpass",l.frequency.value=e,c.gain.setValueAtTime(n,a),c.gain.exponentialRampToValueAtTime(1e-4,a+t),o.connect(l),l.connect(c),c.connect(this.mus),o.start(a,Math.random()*.5),o.stop(a+t+.02)},Aa(Gl,"CRIT",new Set(["hurt","level","evolve","attach","bossWarn","bossRoar","bossDie","dead","tell","shieldBreak","crate","heal","win","buy","click","start","heat","heart","boomBig"]));var Hl=Gl;var nu=1,Cp=()=>({v:nu,t:0,scrap:0,cls:"scrapper",map:"scrapyard",clsOwned:["scrapper"],mapsOwned:["scrapyard"],garage:{},best:{scrapyard:0,burned:0,desert:0,ice:0,space:0},bestAll:0,stats:{runs:0,kills:0,bosses:0,wins:0,time:0,evolves:0},daily:{claimDay:-1,streak:0,mDay:-1,missions:[]},settings:{sfx:1,music:.5,shake:!0,nums:!0,vib:!0,quality:"auto"},tutorial:!1,firstPlayAt:0,sessions:0}),eu={},Ip="scrapmech-survivor-2026";function iu(){try{return localStorage.setItem("__t","1"),localStorage.removeItem("__t"),localStorage}catch{let s=new Map;return{getItem:t=>s.has(t)?s.get(t):null,setItem:(t,e)=>s.set(t,String(e)),removeItem:t=>s.delete(t)}}}function Pp(s,t){for(let e of Object.keys(t)){let n=s[e],i=t[e];n&&i&&typeof n=="object"&&typeof i=="object"&&!Array.isArray(n)?Pp(n,i):s[e]=i}return s}var Wl,Lp,Vl=class{constructor({storage:t=iu(),key:e="scrapmech_save_v1",debounceMs:n=600}={}){He(this,Wl);this.storage=t,this.key=e,this.debounceMs=n,this.timer=null,this.data=null,this.corrupted=!1}load(){var e;let t=null;try{let n=this.storage.getItem(this.key);if(n){let i=JSON.parse(n);i.h!==Dl(JSON.stringify(i.d)+Ip)&&(this.corrupted=!0,console.warn("save: checksum uy\u011Fun deyil")),t=i.d}}catch(n){console.warn("save: oxuna bilm\u0259di",n),this.corrupted=!0}if(t){for(let n=t.v??1;n<nu;n++)t=((e=eu[n])==null?void 0:e.call(eu,t))??t;t.v=nu}return this.data=Pp(Cp(),t??{}),this.data.firstPlayAt||(this.data.firstPlayAt=Date.now()),this.data.sessions++,z(this,Wl,Lp).call(this),this.data}save(){clearTimeout(this.timer),this.timer=setTimeout(()=>this.saveNow(),this.debounceMs)}saveNow(){clearTimeout(this.timer),this.timer=null,this.data.t=Date.now();try{let t=JSON.stringify(this.data);this.storage.setItem(this.key,JSON.stringify({d:this.data,h:Dl(t+Ip)}))}catch(t){console.warn("save: yaz\u0131la bilm\u0259di (kvota?)",t)}}reset(){this.data=Cp(),this.saveNow()}};Wl=new WeakSet,Lp=function(){if(this.flushInstalled||typeof document>"u")return;this.flushInstalled=!0;let t=()=>{this.timer&&this.saveNow()};document.addEventListener("visibilitychange",()=>{document.visibilityState==="hidden"&&t()}),window.addEventListener("pagehide",t)};function su(s,t){return new Promise((e,n)=>{if(t&&document.getElementById(t))return e();let i=document.createElement("script");i.src=s,i.async=!0,t&&(i.id=t),i.onload=()=>e(),i.onerror=()=>n(new Error("SDK y\xFCkl\u0259nm\u0259di: "+s)),document.head.appendChild(i)})}var _a,ru,Xl=class{constructor(){He(this,_a);this.name="crazygames",this.supportsRewarded=!0,this.sdk=null,this.disabled=!1}async init(){var e;if((e=window.CrazyGames)!=null&&e.SDK||await su("https://sdk.crazygames.com/crazygames-sdk-v3.js","crazygames-sdk"),this.sdk=window.CrazyGames.SDK,await this.sdk.init(),this.sdk.environment==="disabled"){this.disabled=!0;return}let t=n=>{var i;return(i=this.onSdkMute)==null?void 0:i.call(this,!!(n!=null&&n.muteAudio))};t(this.sdk.game.settings),this.sdk.game.addSettingsChangeListener(t)}loadingStart(){this.sdk.game.loadingStart()}loadingStop(){this.sdk.game.loadingStop()}gameplayStart(){this.sdk.game.gameplayStart()}gameplayStop(){this.sdk.game.gameplayStop()}happytime(){this.sdk.game.happytime()}hasAdblock(){return this.sdk.ad.hasAdblock()}showMidroll({onStart:t}){return z(this,_a,ru).call(this,"midgame",t)}showRewarded({onStart:t}){return z(this,_a,ru).call(this,"rewarded",t)}storage(){if(this.disabled||this.sdk.environment!=="crazygames")return null;let t=this.sdk.data;return{getItem:e=>t.getItem(e),setItem:(e,n)=>t.setItem(e,n),removeItem:e=>t.removeItem(e)}}};_a=new WeakSet,ru=function(t,e){return new Promise(n=>{this.sdk.ad.requestAd(t,{adStarted:()=>e==null?void 0:e(),adFinished:()=>n(!0),adError:i=>{console.info("[cg] ad error",(i==null?void 0:i.code)??i),n(!1)}})})};var ya,au,va=class{constructor(){He(this,ya);let t=new URLSearchParams(location.search);this.name="local",this.supportsRewarded=!t.has("noads"),this.disabled=t.has("noads"),this.fail=t.has("adfail")}async init(){console.info("[portal] local rejim \u2014 fake ads")}loadingStart(){}loadingStop(){}gameplayStart(){}gameplayStop(){}happytime(){console.info("[portal] \u{1F389} happytime")}hasAdblock(){return Promise.resolve(!1)}showMidroll({onStart:t}){return z(this,ya,au).call(this,"MIDROLL",t)}showRewarded({onStart:t}){return z(this,ya,au).call(this,"REWARDED",t)}};ya=new WeakSet,au=function(t,e){return new Promise(n=>{e==null||e();let i=document.createElement("div");i.style.cssText="position:fixed;inset:0;z-index:100000;background:#000;color:#fff;display:flex;align-items:center;justify-content:center;font:700 28px system-ui",i.textContent=`${t} AD (test)`,document.body.appendChild(i),setTimeout(()=>{i.remove(),n(!this.fail)},2e3)})};function ou(){return"crazygames"}var Re,ql,Yl,vs,hr,lu=class lu{constructor(t,e){He(this,Re);this.a=t,this.hooks=e,this.adActive=!1,this.playing=!1,this.lastMidroll=-1/0,this.minMidrollGap=120,t.onPause=()=>z(this,Re,ql).call(this),t.onResume=()=>z(this,Re,Yl).call(this),t.onSdkMute=n=>e.mute("sdk",n)}static async create(t,e=ou(),n={}){let i={crazygames:Xl,local:va},r=new(i[e]??va)(n[e]??{}),a=new lu(r,t);try{await Promise.race([r.init(),new Promise(o=>setTimeout(o,2500))])}catch(o){console.warn("[portal] init x\u0259tas\u0131, reklams\u0131z davam edirik",o),r.disabled=!0}return a}get name(){return this.a.name}get supportsRewarded(){return!this.a.disabled&&this.a.supportsRewarded}get storage(){var t,e;return((e=(t=this.a).storage)==null?void 0:e.call(t))??null}loadingStart(){z(this,Re,hr).call(this,()=>{var t,e;return(e=(t=this.a).loadingStart)==null?void 0:e.call(t)})}loadingStop(){z(this,Re,hr).call(this,()=>{var t,e;return(e=(t=this.a).loadingStop)==null?void 0:e.call(t)})}gameplayStart(){this.playing||(this.playing=!0,z(this,Re,hr).call(this,()=>{var t,e;return(e=(t=this.a).gameplayStart)==null?void 0:e.call(t)}))}gameplayStop(){this.playing&&(this.playing=!1,z(this,Re,hr).call(this,()=>{var t,e;return(e=(t=this.a).gameplayStop)==null?void 0:e.call(t)}))}happytime(){z(this,Re,hr).call(this,()=>{var t,e;return(e=(t=this.a).happytime)==null?void 0:e.call(t)})}async hasAdblock(){var t,e;try{return await((e=(t=this.a).hasAdblock)==null?void 0:e.call(t))??!1}catch{return!1}}async midroll(){if(this.adActive||this.a.disabled)return!1;let t=performance.now()/1e3;if(t-this.lastMidroll<this.minMidrollGap)return!1;let e=this.playing;this.gameplayStop(),z(this,Re,vs).call(this,!0);let n=!1;try{n=await this.a.showMidroll({onStart:()=>z(this,Re,ql).call(this)})}catch{n=!1}return z(this,Re,Yl).call(this),z(this,Re,vs).call(this,!1),n&&(this.lastMidroll=t),e&&this.gameplayStart(),n}async rewarded(){if(this.adActive||!this.supportsRewarded)return!1;let t=this.playing;this.gameplayStop(),z(this,Re,vs).call(this,!0);let e=!1;try{e=await this.a.showRewarded({onStart:()=>z(this,Re,ql).call(this)})}catch{e=!1}return z(this,Re,Yl).call(this),z(this,Re,vs).call(this,!1),t&&this.gameplayStart(),e}};Re=new WeakSet,ql=function(){this.adActive||(this.adActive=!0,this.hooks.pause("ad"),this.hooks.mute("ad",!0),z(this,Re,vs).call(this,!0))},Yl=function(){this.adActive&&(this.adActive=!1,this.hooks.mute("ad",!1),this.hooks.resume("ad"),z(this,Re,vs).call(this,!1))},vs=function(t){let e=document.getElementById("ad-blocker");e||(e=document.createElement("div"),e.id="ad-blocker",e.style.cssText="position:fixed;inset:0;z-index:99999;display:none;background:rgba(0,0,0,.25)",document.body.appendChild(e)),e.style.display=t?"block":"none"},hr=function(t){try{this.a.disabled||t()}catch(e){console.warn("[portal]",e)}};var $l=lu;function Dp(s,t){let e={ready:!1,p:null},n={get ready(){return e.ready},get name(){var i;return((i=e.p)==null?void 0:i.name)??"pending"},get supportsRewarded(){return e.p?e.p.supportsRewarded:!1},get storage(){var i;return((i=e.p)==null?void 0:i.storage)??null},loadingStart(){e.p?e.p.loadingStart():e.pendingLoad=(e.pendingLoad==="stop","start")},loadingStop(){e.p?e.p.loadingStop():e.pendingLoad=e.pendingLoad==="start"?"both":"stop"},gameplayStart(){e.p?e.p.gameplayStart():e.pendingStart=!0},gameplayStop(){e.p?e.p.gameplayStop():e.pendingStart=!1},happytime(){var i;(i=e.p)==null||i.happytime()},async midroll(){return e.p?e.p.midroll():!1},async rewarded(){return e.p?e.p.rewarded():!1},reportProgress(i){var r,a,o,l;try{(l=(o=(a=(r=e.p)==null?void 0:r.a.sdk)==null?void 0:a.game)==null?void 0:o.reportGameCompletedPercentage)==null||l.call(o,i)}catch{}},setContext(i){var r,a,o,l;try{(l=(o=(a=(r=e.p)==null?void 0:r.a.sdk)==null?void 0:a.game)==null?void 0:o.setGameContext)==null||l.call(o,i)}catch{}}};return $l.create(s,ou(),{}).then(i=>{e.p=i,e.ready=!0,e.pendingLoad==="start"?i.loadingStart():e.pendingLoad==="both"?(i.loadingStart(),i.loadingStop()):e.pendingLoad==="stop"&&i.loadingStop(),e.pendingStart&&i.gameplayStart(),t==null||t(i)}).catch(()=>{}),n}var Np=["mg","laser","flame","armor","shield","rocket","drone","jets"];function Zl(s){let t=0,e=-1;return s.offers.forEach((n,i)=>{let r=0;Pe[n.id]?(r=n.evolve?100:n.isNew?20-Np.indexOf(n.id):50-Np.indexOf(n.id),r+=n.rar*3):r=5,r>e&&(e=r,t=i)}),t}function cu(s,t=.8,e=1){let n=0,i=0,r=s.p;for(let x of s.E)if(x.a){let p=r.x-x.x,g=r.z-x.z,v=Math.hypot(p,g)+.01,S=x.boss?13:x.k==="turret"?5:7;if(v<S){let y=(S-v)/S*(x.boss?2:1.2);n+=p/v*y,i+=g/v*y}}for(let x of s.EB)if(x.a){let p=r.x-x.x,g=r.z-x.z;if(Math.hypot(p,g)+.01<4){let S=-x.vz,y=x.vx,T=Math.sign(p*S+g*y)||1,E=Math.hypot(S,y)||1;n+=S/E*T*1.5,i+=y/E*T*1.5}}for(let x of s.HZ)if(x.a&&x.owner!==1){let p=r.x-x.x,g=r.z-x.z,v=Math.hypot(p,g)+.01;v<x.r+2&&(n+=p/v*2,i+=g/v*2)}let a=1e9,o=null;for(let x of s.PK)if(x.a){let p=Math.hypot(x.x-r.x,x.z-r.z);p<a&&(a=p,o=x)}let l=Math.hypot(n,i);if(o&&l<.8){let x=o.x-r.x,p=o.z-r.z,g=Math.hypot(x,p)+.01;n+=x/g*.9,i+=p/g*.9}let c=Math.hypot(r.x,r.z);c>30&&(n-=r.x/c*(c-30)*.2,i-=r.z/c*(c-30)*.2),l<.05&&!o&&(n+=Math.cos(s.t*.3)*.4,i+=Math.sin(s.t*.3)*.4);let h=1-t,u=Math.floor(s.t/.6),d=Math.sin(u*12.9898+e)*43758.5453;d-Math.floor(d)<h*.9&&(n=Math.cos(u*2.4),i=Math.sin(u*2.4));let m=l>2.2&&r.dashCd<=0&&t>.5;return{mx:n,mz:i,dash:m}}var it=s=>document.getElementById(s),De=new URLSearchParams(location.search),bs=s=>Math.round(s).toLocaleString("en-US"),ji=s=>`${Math.floor(s/60)}:${String(Math.floor(s%60)).padStart(2,"0")}`,pr="ontouchstart"in window||navigator.maxTouchPoints>0;pr&&document.body.classList.add("touch");var qt=new Hl,Ql=new Vl({storage:iu(),key:"scrapmech_save_v1"}),Q=Ql.load();De.has("unlock")&&(Q.scrap=99999,Q.clsOwned=Object.keys(gs),Q.mapsOwned=Object.keys(Cn));De.has("nodaily")&&(Q.daily={claimDay:Ji(),streak:0,mDay:Ji(),missions:[]});De.get("cls")&&gs[De.get("cls")]&&(Q.cls=De.get("cls"),Q.clsOwned.includes(Q.cls)||Q.clsOwned.push(Q.cls));De.get("map")&&Cn[De.get("map")]&&(Q.map=De.get("map"),Q.mapsOwned.includes(Q.map)||Q.mapsOwned.push(Q.map));if(De.get("gl"))for(let s of Bh)Q.garage[s.id]=+De.get("gl");var jt="loading",rt=null,Kt=null,Ki=null,Qv=!1,du=new Set,tc=0,kp=null,ty=0,ey={pause:s=>{du.add(s)},resume:s=>{du.delete(s)},mute:(s,t)=>qt.mute(s,t)},Ie=Dp(ey,s=>{try{let t=s.storage;if(t){let e=t.getItem("scrapmech_save_v1");if(e){let n=JSON.parse(e);n!=null&&n.d&&(n.d.t||0)>(Q.t||0)&&jt==="home"&&(Object.assign(Q,n.d),Bp(),Di())}Ql.storage={getItem:n=>localStorage.getItem(n),setItem:(n,i)=>{try{localStorage.setItem(n,i)}catch{}try{t.setItem(n,i)}catch{}},removeItem:()=>{}},Ql.save()}}catch(t){console.warn(t)}});Ie.loadingStart();var yn=()=>Ql.save();function Bp(){let s=Ji(),t=Q.daily;if(t.mDay!==s){let e=new xs(s*7919+17),n=e.shuffle(El.slice()).slice(0,3);t.missions=n.map(i=>{let r=Math.floor((i.max-i.min)/i.step);return{id:i.id,target:i.min+i.step*e.int(0,r),prog:0,claimed:!1}}),t.mDay=s}}Bp();var fu=()=>Q.daily.claimDay!==Ji();function ny(s){let t={kills:s.kills,bosses:s.bosses,evolves:s.evolves,scrap:s.collected,elites:s.elites,dashes:s.dashes,runs:1};for(let e of Q.daily.missions){let n=El.find(i=>i.id===e.id);n&&(n.stat==="bestTime"?e.prog=Math.max(e.prog,Math.floor(s.time/60)):e.prog+=t[n.stat]||0)}}var iy=()=>Q.daily.missions.filter(s=>!s.claimed&&s.prog>=s.target).length,rc={};function sy(s){let t=s.renderer,e=new Mi,n=new Qe(30,1,.1,50);e.add(new ls(16777215,5592405,2.2));let i=new hs(16777215,2.5);i.position.set(2,4,5),e.add(i),e.environment=s.envTex,e.environmentIntensity=.6;let r=new _n(128,128,{samples:0});r.texture.colorSpace=Ge;let a=document.createElement("canvas");a.width=a.height=128;let o=a.getContext("2d"),l=new Uint8Array(16384*4),c=new Set;for(let f of wl)c.add(Pe[f].icon),c.add(Pe[f].evoIcon);let h=t.getRenderTarget(),u=new Pt;t.getClearColor(u);let d=t.getClearAlpha();t.setClearColor(0,0);for(let f of c){let m=s.geos[f];if(!m)continue;let x=new re(m,s.mat);m.computeBoundingSphere();let p=m.boundingSphere;x.position.copy(p.center).multiplyScalar(-1);let g=new Ve;g.add(x),g.rotation.set(.35,f.startsWith("leg")||f.startsWith("chest")||f.startsWith("back")?-.5:-2.2+Math.PI,0),(f.startsWith("arm")||f.startsWith("sh"))&&(g.rotation.y=.9),e.add(g),n.position.set(0,0,p.radius*3.3),n.lookAt(0,0,0),t.setRenderTarget(r),t.clear(),t.render(e,n),t.readRenderTargetPixels(r,0,0,128,128,l);let v=o.createImageData(128,128);for(let S=0;S<128;S++)v.data.set(l.subarray((127-S)*512,(128-S)*512),S*512);o.putImageData(v,0,0),rc[f]=a.toDataURL("image/png"),e.remove(g)}t.setRenderTarget(h),t.setClearColor(u,d),r.dispose()}async function ry(){let s=it("ldbar"),t=await Nf(e=>{s.style.width=5+e*90+"%"});Kt=new kl(it("game"),t,qt,{tip:e=>{if(Q.tips||(Q.tips={}),Q.tips[e]&&e!=="heat")return;let n={danger:"RED CIRCLE = BLAST ZONE.  MOVE OUT!",bomber:"BOMBERS EXPLODE.  KEEP YOUR DISTANCE!",heat:"BOSS OVERHEATING!  EXTRA DAMAGE!"};n[e]&&(Q.tips[e]=1,Pi(n[e]),yn())},hurt:e=>{let n=it("hurtfx");n.classList.add("on"),setTimeout(()=>n.classList.remove("on"),90),Q.settings.vib&&navigator.vibrate&&navigator.vibrate(25)},level:()=>{},offers:()=>cc(),picked:()=>{},bossWarn:e=>Gp("WARNING",`${Jn[e.kind].name} APPROACHES`),bossSpawn:()=>{},bossDie:()=>{Pi("BOSS DESTROYED!  RARE PART DROPPED"),Ie.happytime()},dead:()=>cy(),won:()=>hy(),shakeOn:()=>Q.settings.shake,quality:(e,n)=>{it("sQ")&&mr()}});try{sy(Kt)}catch(e){console.warn("icons",e)}qt.setVolumes(Q.settings.sfx,Q.settings.music),oc(),Ma(),jt="home",Li("home"),requestAnimationFrame(Yp),it("loader").classList.add("done"),setTimeout(()=>it("loader").remove(),500),Ie.loadingStop(),(De.has("autoplay")||De.has("bot"))&&lc()}var ay=["home","hud","cards","result"],Hp=["garage","maps","daily","settings","pause"];function Li(s){for(let t of ay)it(t).classList.toggle("on",t===s||s==="hud+"&&t==="hud")}function Qi(s){qt.play("click");for(let t of Hp)it(t).classList.toggle("on",t===s);s==="garage"&&ec(),s==="maps"&&Wp(),s==="daily"&&pu(),s==="settings"&&mr()}function ac(){for(let s of Hp)it(s).classList.remove("on")}document.querySelectorAll("[data-close]").forEach(s=>s.addEventListener("click",()=>{qt.play("click"),jt==="paused"?Qi("pause"):(ac(),Di())}));function Ma(){let s={...Q.garage};Ki=new xa({map:Q.map,cls:Q.cls,garage:s,seed:5}),Kt.rig.reset(),Kt.sim=Ki,Kt.setMap(Q.map,Ki),Kt.handle(Ki.ev);let t={scrapper:[["rocket",1],["shield",1]],sprinter:[["mg",1],["armor",1]],bulwark:[["rocket",1],["shield",1]],sniper:[["rocket",1],["armor",1]],carrier:[["armor",1],["shield",1]]}[Q.cls]||[];for(let[e,n]of t){let i=Pe[e].slot==="shoulder"?Ki.slots.shL?"shR":"shL":Pe[e].slot==="chest"?"chest":Pe[e].slot==="back"?"back":"armR";Kt.rig.setPart(e,i,n,0,!1)}Ki.p.grow=1.15}function Di(){it("w1").textContent=bs(Q.scrap),it("w2").textContent=bs(Q.scrap),it("selinfo").textContent=`${gs[Q.cls].name}  \xB7  ${Cn[Q.map].name}`,it("besttxt").textContent=Q.best[Q.map]>0?`BEST SURVIVAL (${Cn[Q.map].name}): ${ji(Q.best[Q.map])}`:"SURVIVE 12 MINUTES AND DESTROY THE FINAL BOSS";let s=it("daybadge"),t=(fu()?1:0)+iy();s.style.display=t?"flex":"none",s.textContent=t}function Pi(s){let t=it("toast");t.textContent=s,t.classList.remove("on"),t.offsetWidth,t.classList.add("on")}function Gp(s,t){let e=it("banner");e.innerHTML=`${s}<small>${t}</small>`,e.classList.remove("on"),e.offsetWidth,e.classList.add("on")}function Ii(s){let t=it("hint");s?(t.textContent=s,t.classList.add("on")):t.classList.remove("on")}var Vp="up";document.querySelectorAll("#garage .tab").forEach(s=>s.addEventListener("click",()=>{Vp=s.dataset.t,document.querySelectorAll("#garage .tab").forEach(t=>t.classList.toggle("on",t===s)),qt.play("click"),ec()}));function ec(){it("w2").textContent=bs(Q.scrap);let s=it("ggrid");if(s.innerHTML="",Vp==="up")for(let t of Bh){let e=Q.garage[t.id]||0,n=e>=t.max,i=kf(t,e),r=document.createElement("div");r.className="tile",r.innerHTML=`<h4>${t.name}</h4><div class="dim">${t.desc}</div><div class="pips">${Array.from({length:t.max},(o,l)=>`<i class="${l<e?"on":""}"></i>`).join("")}</div><div class="cost">${n?"MAX":bs(i)+" SCRAP"}</div>`;let a=document.createElement("button");a.className="btn"+(n||Q.scrap<i?" dis":""),a.textContent=n?"MAXED":"UPGRADE",a.onclick=()=>{n||Q.scrap<i||(Q.scrap-=i,Q.garage[t.id]=e+1,qt.play("buy"),yn(),ec(),Di(),Ma())},r.appendChild(a),s.appendChild(r)}else for(let t of Object.values(gs)){let e=Q.clsOwned.includes(t.id),n=Q.cls===t.id,i=document.createElement("div");i.className="tile"+(n?" sel":""),i.innerHTML=`<div class="pv" style="color:${t.color}">${t.name.slice(0,1)}</div><h4 style="color:${t.color}">${t.name}</h4><div class="dim">${t.desc}</div><div class="dim">HP ${Math.round(t.hp*100)}% \xB7 SPEED ${Math.round(t.speed*100)}% \xB7 DMG ${Math.round(t.dmg*100)}%</div><div>${t.start.map(a=>`<span class="chip">${Pe[a].name}</span>`).join(" ")}</div>`;let r=document.createElement("button");r.className="btn"+(!e&&Q.scrap<t.cost?" dis":""),r.textContent=n?"SELECTED":e?"SELECT":`BUY ${bs(t.cost)}`,r.onclick=()=>{if(e)Q.cls=t.id,qt.play("click");else if(Q.scrap>=t.cost)Q.scrap-=t.cost,Q.clsOwned.push(t.id),Q.cls=t.id,qt.play("buy");else return;yn(),ec(),Di(),Ma()},i.appendChild(r),s.appendChild(i)}}function oy(s){return Q.mapsOwned.includes(s.id)}function Wp(){let s=it("mgrid");s.innerHTML="";for(let t of Object.values(Cn)){let e=oy(t),n=Q.map===t.id,i=document.createElement("div");i.className="tile"+(n?" sel":"");let r=t.unlock?`Survive ${ji(t.unlock.secs)} on ${Cn[t.unlock.map].name}`:"";i.innerHTML=`<div class="pv" style="background:${t.id==="scrapyard"?"linear-gradient(#7a6850,#3a2f22)":t.id==="burned"?"linear-gradient(#4a3a38,#1a1516)":t.id==="ice"?"linear-gradient(#cfe6f5,#5f86a6)":t.id==="space"?"linear-gradient(#2a3a5a,#0a0e1c)":"linear-gradient(#d2ac70,#8a6a3a)"}"></div><h4>${t.name}</h4><div class="dim">${t.desc}</div><div class="dim">ENEMY HP x${t.hpMul} \xB7 SCRAP x${t.scrapMul}</div><div class="chip">BEST ${Q.best[t.id]>0?ji(Q.best[t.id]):"--:--"}</div>`;let a=document.createElement("button");if(a.className="btn"+(e?"":" dis"),a.textContent=e?n?"SELECTED":"SELECT":"LOCKED",a.onclick=()=>{Q.map=t.id,qt.play("click"),yn(),Wp(),Di(),Ma()},i.appendChild(a),!e){let o=document.createElement("div");o.className="lock",o.textContent=r,i.appendChild(o)}s.appendChild(i)}}function pu(){let s=Q.daily,t=it("daygrid");t.innerHTML="";let e=fu(),n=e?Ji()-s.claimDay===1?s.streak:0:s.streak-1;Hh.forEach((a,o)=>{let l=document.createElement("div"),c=e?o===n%7:!1,h=e?o<n%7:o<=(s.streak-1)%7;l.className="day"+(c?" cur":"")+(h?" done":""),l.innerHTML=`DAY ${o+1}<b>${a.scrap}</b>SCRAP${h?"<br>\u2713":""}`,t.appendChild(l)});let i=it("claim");i.classList.toggle("dis",!e),i.textContent=e?"CLAIM REWARD":"COME BACK TOMORROW",i.onclick=()=>{if(!fu())return;let a=Ji()-s.claimDay===1?s.streak:0,o=Hh[a%7];s.streak=a+1,s.claimDay=Ji(),Q.scrap+=o.scrap,qt.play("buy"),Pi(`+${o.scrap} SCRAP`),yn(),pu(),Di()},it("mreset").textContent=`\xB7 resets in ${Math.floor(Wh()/36e5)}h ${Math.floor(Wh()/6e4)%60}m`;let r=it("mlist");r.innerHTML="";for(let a of s.missions){let o=El.find(u=>u.id===a.id),l=a.prog>=a.target,c=document.createElement("div");c.className="mis",c.innerHTML=`<div class="tx">${o.text(a.target)}<div class="pb"><i style="width:${Math.min(100,a.prog/a.target*100)}%"></i></div></div><div class="dim">${Math.min(a.prog,a.target)}/${a.target}</div>`;let h=document.createElement("button");h.className="btn"+(!l||a.claimed?" dis":""),h.textContent=a.claimed?"DONE":`+${o.reward}`,h.onclick=()=>{!l||a.claimed||(a.claimed=!0,Q.scrap+=o.reward,qt.play("buy"),yn(),pu(),Di())},c.appendChild(h),r.appendChild(c)}}function oc(){let s=Q.settings;qt.setVolumes(s.sfx,s.music);let t=["low","medium","high"].indexOf(s.quality);Kt&&(t>=0?Kt.aq.setManual(t):Kt.aq.setAuto())}function mr(){var t;let s=Q.settings;it("sSfx").value=s.sfx,it("sMus").value=s.music,it("sShake").textContent=s.shake?"ON":"OFF",it("sNums").textContent=s.nums?"ON":"OFF",it("sVib").textContent=s.vib?"ON":"OFF",it("sQ").textContent=s.quality==="auto"?`AUTO (${((t=Kt==null?void 0:Kt.tier)==null?void 0:t.name)||""})`:s.quality.toUpperCase(),it("nums").style.display=s.nums?"":"none"}it("sSfx").oninput=s=>{Q.settings.sfx=+s.target.value,oc(),yn(),qt.play("click")};it("sMus").oninput=s=>{Q.settings.music=+s.target.value,oc(),yn()};it("sShake").onclick=()=>{Q.settings.shake=!Q.settings.shake,mr(),yn()};it("sNums").onclick=()=>{Q.settings.nums=!Q.settings.nums,mr(),yn()};it("sVib").onclick=()=>{Q.settings.vib=!Q.settings.vib,mr(),yn()};it("sQ").onclick=()=>{let s=["auto","low","medium","high"];Q.settings.quality=s[(s.indexOf(Q.settings.quality)+1)%4],oc(),mr(),yn()};it("hset").onclick=()=>Qi("settings");it("bgar").onclick=()=>Qi("garage");it("bmap").onclick=()=>Qi("maps");it("bday").onclick=()=>Qi("daily");it("hsound").onclick=()=>{let s=!qt.reasons.has("user");qt.mute("user",s),it("hsound").textContent=s?"OFF":"SND",it("hsound").style.opacity=s?.5:1};it("play").onclick=()=>{qt.unlock(),lc()};var nc={},Kl=null,ur=0,ic=0,ys=0;async function lc(){qt.unlock(),ac(),qt.play("start");let s={...Q.garage};rt=new xa({map:Q.map,cls:Q.cls,garage:s,seed:De.get("seed")?+De.get("seed"):Math.random()*1e9|0}),Kt.startRun(rt),jt="play",Qv=!1,du.clear(),Li("hud"),kp=null,ty++,nc={},it("mapn").textContent=Cn[Q.map].name,qt.intensity=.2,qt.startMusic(Q.map),Ie.gameplayStart(),Ie.setContext({map:Q.map,robot:Q.cls}),Q.tutorial&&setTimeout(()=>{jt==="play"&&rt&&rt.t<12&&Pi(Cn[Q.map].name.toUpperCase()+" \xB7 "+Cn[Q.map].desc)},1200),ur=Q.tutorial?9:0,it("result").classList.remove("on","win"),Q.tutorial||Ii(pr?"DRAG TO MOVE  \xB7  YOUR GUNS FIRE AUTOMATICALLY":"WASD / ARROWS TO MOVE  \xB7  GUNS FIRE AUTOMATICALLY"),ba(),dr(!0),(De.has("bot")||De.has("autoplay"))&&(Kl={skill:+(De.get("skill")||.85)}),De.get("ff")&&(ys=+De.get("ff"))}function Up(){jt="home",rt=null,qt.stopMusic(),Ie.gameplayStop(),it("result").classList.remove("on"),ac(),Ma(),Li("home"),Di(),Ii("")}function ba(){let s=it("parts");if(s.innerHTML="",!rt)return;let t=["armL","armR","shL","shR","legs","chest","back"];for(let e of t){let n=rt.slots[e];if(!n)continue;let i=rt.owned[n],r=i.n>=3,a=rc[r?Pe[n].evoIcon:Pe[n].icon],o=document.createElement("div");o.className="slot"+(r?" evo":""),o.style.borderColor=nr[Math.min(3,Math.round(rt.rmOf(n)>=1.7?3:rt.rmOf(n)>=1.35?2:rt.rmOf(n)>=1.1?1:0))].color,o.innerHTML=`${a?`<img src="${a}">`:""}<b>${r?"MAX":i.n}</b>`,s.appendChild(o)}}function dr(s){if(!rt)return;let t=rt.p,e=nc,n=Math.ceil(t.hp),i=Math.ceil(t.maxHp);(s||e.hp!==n||e.mhp!==i)&&(e.hp=n,e.mhp=i,it("hpf").style.width=t.hp/t.maxHp*100+"%",it("hpf").className=t.hp/t.maxHp<.3?"low":"",it("hptx").textContent=`${n} / ${i}`,it("lowhp").classList.toggle("on",t.hp/t.maxHp<.28&&rt.state==="run"));let r=t.shieldMax>0?Math.round(t.shield/(t.hp+t.shieldMax)*100*1):0;(s||e.sh!==r)&&(e.sh=r,it("shbar").style.width=t.shieldMax>0?t.shield/t.shieldMax*100+"%":"0",it("shbar").style.height="28%",it("shbar").style.top="auto",it("shbar").style.bottom="0");let a=Math.floor(t.xp/Fl(t.lvl)*100);(s||e.xp!==a)&&(e.xp=a,it("xpf").style.width=a+"%"),(s||e.lvl!==t.lvl)&&(e.lvl=t.lvl,it("lvl").textContent="LV "+t.lvl);let o=Math.floor(rt.t);(s||e.t!==o)&&(e.t=o,it("timer").firstChild.textContent=ji(rt.t)),(s||e.k!==rt.stats.kills)&&(e.k=rt.stats.kills,it("kills").textContent=`${rt.stats.kills} KILLS`);let l=rt.boss;l?(it("bossw").classList.add("on"),it("bossnm").textContent=Jn[l.k].name+(l.heat>.3?"  \xB7 OVERHEATED":l.phase===2?"  \xB7 ENRAGED":""),it("bossf").style.width=Math.max(0,l.hp/l.maxHp*100)+"%"):it("bossw").classList.remove("on");let c=t.dashCd>0?t.dashCd/rt.dashCdBase:0;it("dashcd").style.height=c*100+"%",t.hp/t.maxHp<.25&&rt.state==="run"&&qt.play("heart"),qt.intensity=Math.min(1,.2+rt.alive/38+(l?.35:0))}function cc(){let s=rt.offers;if(!s)return;jt="cards",Ie.gameplayStop(),ic=_u(),Li("cards"),it("hud").classList.add("on"),it("cardtitle").textContent=rt.offerSrc==="crate"?"PART CRATE!  CHOOSE A PART":rt.offerSrc==="level"?`LEVEL ${rt.p.lvl}  \xB7  CHOOSE A PART`:"CHOOSE A PART";let t=it("cardrow");t.innerHTML="",s.forEach((e,n)=>{let i=Pe[e.id],r=nr[e.rar||0],a=document.createElement("div");a.className="card",a.style.setProperty("--rc",r.color);let o,l,c,h;if(i){let u=e.evolve;o=u?i.evo:i.name,l=u?i.evoDesc:i.desc,c=u?'<div class="tag evo">EVOLVE!</div>':e.isNew?'<div class="tag">NEW</div>':`<div class="tag">LV ${e.to-1} \u2192 ${e.to}</div>`,h=rc[u?i.evoIcon:i.icon]}else o=e.name,l=e.desc,c='<div class="tag">BONUS</div>',h=null;a.innerHTML=`${c}<div class="rar">${r.name}</div><div class="ic">${h?`<img src="${h}">`:'<span style="font-size:48px;color:#6dff9a">+</span>'}</div><h3>${o}</h3><p>${l}</p><div class="key">${n+1}</div>`,a.onclick=()=>xu(n),t.appendChild(a)}),Q.tutorial?it("cardhint").textContent=pr?"Tap a card":"Press 1 / 2 / 3 or click a card":(Ii(""),it("cardhint").textContent="The part attaches to your robot!  Collect 3 of a kind to EVOLVE it."),qt.play("card")}function xu(s){var n;if(jt!=="cards"||_u()-ic<350)return;let t=(n=rt.offers)==null?void 0:n[s];if(!t)return;let e=t.evolve;rt.pick(s),qt.play("click"),jt="play",Li("hud"),Ie.gameplayStart(),ba(),dr(!0),Q.tutorial||(Q.tutorial=!0,yn()),e&&Gp("EVOLVED!",Pe[t.id].evo),rt.state==="levelup"&&cc()}window.addEventListener("keydown",s=>{jt==="cards"&&["Digit1","Digit2","Digit3","Numpad1","Numpad2","Numpad3"].includes(s.code)&&xu(+s.code.slice(-1)-1)});function wa(){if(jt!=="play")return;jt="paused",Ie.gameplayStop(),it("pstat").textContent=`${ji(rt.t)}  \xB7  LV ${rt.p.lvl}  \xB7  ${rt.stats.kills} KILLS`;let s=it("parts2");s.innerHTML="";for(let t in rt.owned){let e=rt.owned[t],n=e.n>=3,i=document.createElement("div");i.className="slot"+(n?" evo":""),i.style.width=i.style.height="60px",i.title=Pe[t].name,i.innerHTML=`<img src="${rc[n?Pe[t].evoIcon:Pe[t].icon]||""}"><b>${n?"MAX":e.n}</b>`,s.appendChild(i)}Qi("pause")}function Xp(){jt==="paused"&&(ac(),jt="play",Ie.gameplayStart(),ly())}it("pausebtn").onclick=wa;it("presume").onclick=()=>{qt.play("click"),Xp()};it("pset").onclick=()=>Qi("settings");it("pquit").onclick=()=>{qt.play("click"),Sa(!0)};var ly=()=>{var s,t;return(t=(s=it("game")).focus)==null?void 0:t.call(s)};addEventListener("blur",()=>{jt==="play"&&wa(),jn={}});document.addEventListener("visibilitychange",()=>{qt.mute("hidden",document.hidden),document.hidden&&jt==="play"&&wa()});var mu=!1;function cy(){jt="dying",tc=1.1,Ie.gameplayStop(),Ii("")}function hy(){jt="dying",tc=2.2,Ie.gameplayStop(),qt.play("win"),Ie.happytime()}function Sa(s){if(!rt)return;let t=rt.results();t.evolves=rt.stats.evolves,t.collected=rt.stats.scrap,t.elites=rt.stats.elites,t.dashes=rt.stats.dashes,t.map=Q.map,s&&(t.scrap=Math.round(t.scrap*.6));let e=Q.best[Q.map]||0,n=t.time>e+.5;n&&(Q.best[Q.map]=Math.floor(t.time)),Q.bestAll=Math.max(Q.bestAll,t.time),Q.scrap+=t.scrap,t.nb=n,Q.stats.runs++,Q.stats.kills+=t.kills,Q.stats.bosses+=t.bosses,Q.stats.time+=t.time,t.won&&Q.stats.wins++,Q.stats.evolves+=t.evolves,ny(t);let i=[];for(let r of Object.values(Cn))r.unlock&&!Q.mapsOwned.includes(r.id)&&(Q.best[r.unlock.map]||0)>=r.unlock.secs&&(Q.mapsOwned.push(r.id),i.push(r.name));t.unl=i,kp=t,yn(),Ie.reportProgress(Math.min(100,Math.floor(t.time/720*100))),uy(t),jt="result",qt.stopMusic()}function uy(s){var c;Li("result"),it("hud").classList.remove("on"),it("result").classList.toggle("win",s.won),it("rtitle").textContent=s.won?"VICTORY!":"DESTROYED",it("rbest").style.display=s.nb?"":"none";let e=it("rstats");e.innerHTML=`<div>SURVIVED<b>${ji(s.time)}</b></div><div>BEST<b>${ji(Q.best[s.map]||0)}</b></div><div>MACHINES<b>${s.kills}</b></div><div>LEVEL<b>${s.lvl}</b></div><div>BOSSES<b>${s.bosses}</b></div><div>SCRAP<b id="rscrap">0</b></div>`;let n=0,i=s.scrap,r=Math.max(1,Math.ceil(i/45)),a=setInterval(()=>{n=Math.min(i,n+r);let h=it("rscrap");h&&(h.textContent="+"+bs(n)),qt.play("count",n/i),n>=i&&clearInterval(a)},22),o=it("rbtns");o.innerHTML="";let l=(h,u,d)=>{let f=document.createElement("button");return f.className="btn "+u,f.textContent=h,f.onclick=d,o.appendChild(f),f};if(l("RETRY","",async()=>{qt.play("click"),await Fp(s),lc()}),Ie.supportsRewarded&&s.scrap>20&&!s.doubled){let h=l("x2 SCRAP  (AD)","cy",async()=>{h.classList.add("dis"),await Ie.rewarded()?(s.doubled=!0,Q.scrap+=s.scrap,yn(),Pi(`+${bs(s.scrap)} BONUS SCRAP`),qt.play("buy"),h.remove(),Di()):(h.classList.remove("dis"),Pi("AD NOT AVAILABLE"))})}l("GARAGE","sec",()=>{qt.play("click"),Up(),Qi("garage")}),l("HOME","sec",async()=>{qt.play("click"),await Fp(s),Up()}),(c=s.unl)!=null&&c.length&&setTimeout(()=>Pi(`${s.unl.join(", ")} UNLOCKED!`),700)}async function Fp(s){if(s.time>75)try{await Ie.midroll()}catch{}}var jn={},Te={on:!1,id:-1,ox:0,oy:0,x:0,y:0},sc=!1;addEventListener("keydown",s=>{qt.unlock(),jn[s.code]=!0,/^(Arrow|Space)/.test(s.code)&&s.preventDefault(),(s.code==="Space"||s.code==="ShiftLeft"||s.code==="ShiftRight")&&(sc=!0),(s.code==="Escape"||s.code==="KeyP")&&!s.repeat&&(jt==="play"?wa():jt==="paused"&&Xp()),s.code==="Enter"&&jt==="home"&&it("play").click()});addEventListener("keyup",s=>{jn[s.code]=!1});var Ms=it("game");Ms.addEventListener("pointerdown",s=>{var e;if(qt.unlock(),s.pointerType==="mouse"||Te.on||jt!=="play"||s.clientX>innerWidth*.6&&s.clientY>innerHeight*.45)return;Te={on:!0,id:s.pointerId,ox:s.clientX,oy:s.clientY,x:0,y:0};let t=it("joy");t.style.display="block",t.style.left=s.clientX+"px",t.style.top=s.clientY+"px",it("joy").firstChild.style.transform="translate(0,0)",(e=Ms.setPointerCapture)==null||e.call(Ms,s.pointerId),Ii("")});Ms.addEventListener("pointermove",s=>{if(!Te.on||s.pointerId!==Te.id)return;let t=s.clientX-Te.ox,e=s.clientY-Te.oy,n=Math.hypot(t,e),i=55;n>i&&(Te.ox+=t/n*(n-i),Te.oy+=e/n*(n-i),t=t/n*i,e=e/n*i,it("joy").style.left=Te.ox+"px",it("joy").style.top=Te.oy+"px"),Te.x=t/i,Te.y=e/i,Math.hypot(Te.x,Te.y)<.12&&(Te.x=Te.y=0),it("joy").firstChild.style.transform=`translate(${t*.6}px,${e*.6}px)`});var qp=s=>{s.pointerId===Te.id&&(Te.on=!1,Te.x=Te.y=0,it("joy").style.display="none")};Ms.addEventListener("pointerup",qp);Ms.addEventListener("pointercancel",qp);it("dashbtn").addEventListener("pointerdown",s=>{s.stopPropagation(),sc=!0,qt.unlock()});addEventListener("contextmenu",s=>s.preventDefault());function jl(){let s=0,t=0;(jn.KeyA||jn.ArrowLeft)&&(s-=1),(jn.KeyD||jn.ArrowRight)&&(s+=1),(jn.KeyW||jn.ArrowUp)&&(t-=1),(jn.KeyS||jn.ArrowDown)&&(t+=1),Te.on&&(s+=Te.x,t+=Te.y);let e=sc;return sc=!1,{mx:s,mz:t,dash:e}}var gu=performance.now(),hu=0,Op=0,Jl=0,uu=0;function Yp(s){requestAnimationFrame(Yp),!window.__capMode&&$p(s)}var fr=0,_u=()=>window.__capNow??performance.now();function dy(){window.__capMode=!0,fr=performance.now(),window.__capNow=fr,gu=fr}function fy(s){fr+=s,window.__capNow=fr,$p(fr)}function $p(s){let t=Math.min(.05,(s-gu)/1e3);if(gu=s,!!Kt){if(window.__freeze&&rt){Kt.update(1e-4,1e-4,jl),Kt.render();return}if(jt==="play"&&rt){let e=jl(),n=ys>0?8:1;for(let i=0;i<n;i++){if(Kl){if(rt.state==="levelup"){rt.pick(Zl(rt)),jt="play",ba();continue}e=cu(rt,Kl.skill,3)}hu+=t*(ys>0,1);let r=1/60,a=0;for(;hu>=r&&a<4&&(rt.step(r,e),e={mx:e.mx,mz:e.mz,dash:!1},hu-=r,a++,rt.state==="run"););if(Kt.handle(rt.ev,t),ys>0&&rt.t>ys&&(ys=-1),rt.state!=="run"||jt!=="play")break}!Q.tutorial&&rt.t>7&&ur===0&&(ur=1,Ii("")),!Q.tutorial&&rt.t>9&&ur===1&&rt.p.lvl===1&&(ur=2,Ii("COLLECT SCRAP TO LEVEL UP"),setTimeout(()=>{ur===2&&Ii("")},4500)),Kt.update(t,t,jl),Op++,Op%3===0&&dr(),rt.ev.length&&Kt.handle(rt.ev,t),rt.t>20&&rt.t<22&&!nc.dashHint&&!Q.tutorial0&&(nc.dashHint=1,Q.tutorialDash||(Q.tutorialDash=!0,Pi(pr?"TAP DASH TO DODGE":"SPACE = DASH (INVULNERABLE)"))),pr&&Te.on&&Ii("")}else jt==="cards"?(rt.state!=="levelup"&&(jt="play",Li("hud"),Ie.gameplayStart(),ba(),dr(!0)),Kt.update(0,t),Kt.handle(rt.ev,t),Kl&&rt.offers&&jt==="cards"&&(ys>0||_u()-ic>(De.has("cap")?1100:450))&&(ic=-1e9,xu(Zl(rt)))):jt==="dying"&&rt?(rt.step(t*.35,{mx:0,mz:0}),Kt.handle(rt.ev,t),Kt.update(t*.35,t),tc-=t,dr(),tc<=0&&(rt.state==="dead"&&!mu&&Ie.supportsRewarded&&rt.t>90&&!rt.revived?py():Sa(!1))):jt==="revive"?Kt.update(0,t):jt==="paused"||jt==="result"?rt&&jt==="paused"&&Kt.update(0,t):jt==="home"&&(Ki.step(t,{mx:0,mz:0}),Kt.menuUpdate(t,Ki));if(Kt.render(),De.has("debug")&&(Jl+=t,uu++,Jl>.5)){let e=Kt.renderer.info;it("dbg").style.display="block",it("dbg").textContent=`fps ${Math.round(uu/Jl)}
calls ${e.render.calls}
tris ${e.render.triangles}
tier ${Kt.tier.name} x${Kt.renderScale.toFixed(2)}
alive ${(rt==null?void 0:rt.alive)??0}
sprites ${Kt.glow.n}/${Kt.smoke.n} deb ${Kt.debris.n}
t ${rt?rt.t.toFixed(0):0}`,Jl=0,uu=0}}}function py(){jt="revive",Li("result"),it("hud").classList.remove("on"),it("result").classList.remove("win"),it("rtitle").textContent="DESTROYED",it("rbest").style.display="none",it("rstats").innerHTML=`<div>SURVIVED<b>${ji(rt.t)}</b></div><div>LEVEL<b>${rt.p.lvl}</b></div>`;let t=it("rbtns");t.innerHTML="";let e=document.createElement("button");e.className="btn cy",e.textContent="REVIVE  (AD)",e.onclick=async()=>{e.classList.add("dis"),await Ie.rewarded()?(mu=!0,rt.revive(),Kt.handle(rt.ev),jt="play",Li("hud"),Ie.gameplayStart(),qt.startMusic(),mu=!1):(e.classList.remove("dis"),Pi("AD NOT AVAILABLE"))},t.appendChild(e);let n=document.createElement("button");n.className="btn sec",n.textContent="NO THANKS",n.onclick=()=>Sa(!1),t.appendChild(n)}var zp=!1,Zp=()=>{pr&&innerHeight>innerWidth*1.05?jt==="play"&&!zp&&(zp=!0,it("rotate").style.display="block",setTimeout(()=>{it("rotate").style.display="none"},5e3)):it("rotate").style.display="none"};addEventListener("resize",Zp);setInterval(Zp,1500);function my(s,t=.85,e=!1){let n=rt.t+s,i=0;for(;rt&&rt.t<n&&(rt.state==="run"||rt.state==="levelup")&&i++<4e5;){if(rt.state==="levelup"){if(e){Kt.handle(rt.ev,.016);break}rt.pick(Zl(rt)),Kt.handle(rt.ev,.016);continue}rt.step(1/60,cu(rt,t,3)),Kt.handle(rt.ev,1/60),Kt.update(1/60,1/60,jl)}return rt.state==="levelup"&&cc(),dr(!0),ba(),{t:rt.t,state:rt.state,lvl:rt.p.lvl,kills:rt.stats.kills}}window.__sm={capStart:dy,capStep:fy,fastForward:my,finish:()=>{Sa(!1)},get sim(){return rt},get view(){return Kt},save:Q,get mode(){return jt},startRun:lc,pauseGame:wa,showCards:cc,finishRun:Sa,audio:qt,portal:Ie};ry().catch(s=>{console.error(s),document.querySelector("#loader .t").textContent="ERROR: "+s.message});
